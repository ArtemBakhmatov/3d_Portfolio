/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
//import { HemisphereLight, Mesh, PointLight } from 'three';

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');
  
	return (
		<mesh>
			<hemisphereLight intensity={ 9 } groundColor="black" />
			<pointLight intensity={ 1 } />
			<spotLight
				position={ [-20, 50, 10] }
				angle={ 0.12 }
				penumbra={ 1 }
				intensity={ 1 }
				castShadow
				shadow-mapSize={ 1024 }
			/>
			<primitive 
				object={ computer.scene } 
				scale={ isMobile ? 0.7 : 0.75 }
				position={ isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5] }
				rotation={ [-0.01, -0.2, -0.1] }
			/>
		</mesh>
	);
  };

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Добавьте прослушиватель для изменения размера экрана
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		// Установите начальное значение переменной состояния "isMobile"
		setIsMobile(mediaQuery.matches);
		// Определите функцию обратного вызова для обработки изменений в медиа-запросе
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}
		// Добавьте функцию обратного вызова в качестве прослушивателя изменений в медиа-запросе
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		// Удалите прослушиватель, когда компонент будет смонтирован
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={ [1, 2] }
			camera={ { position: [20, 3, 5], fov: 25 } }
			gl={ { preserveDrawingBuffer: true } }
		>
			<Suspense fallback={ <CanvasLoader /> }>
				<OrbitControls
					enableZoom={ false }
					maxPolarAngle={ Math.PI / 2 }
					minPolarAngle={ Math.PI / 2 }
				/>
				<Computers isMobile={ isMobile } />
			</Suspense>
			<Preload all />
		</Canvas>
	);
}

export default ComputersCanvas;