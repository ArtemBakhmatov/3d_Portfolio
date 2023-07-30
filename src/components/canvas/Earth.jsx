/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
	const earth = useGLTF("./planet/scene.gltf");
	return (
		<primitive object={ earth.scene } scale={ 2.5 } position-y={ 0 } rotation-y={ 0 } />
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows									// тени
			frameloop='demand' 						// цикл кадра 'требуемое'
			gl={{ preserveDrawingBuffer: true }} 	// Сохраненный буфер рисования
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6]
			}}										// положение камеры
		>
			<Suspense fallback={ <CanvasLoader /> }>
				<OrbitControls 
					autoRotate 						// автоматический поворот
					enableZoom={ false }			// масштабирование
					maxPolarAngle={ Math.PI / 2 }	// макс-ый полярный угол наклона
					minPolarAngle={ Math.PI / 2 }	// мин-ый полярный угол наклона
				/> {/* с помощью его мы перемещаем его мышкой */}
				<Earth />
			</Suspense>
		</Canvas>
	)
}

export default EarthCanvas;

