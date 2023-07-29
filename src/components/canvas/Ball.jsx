/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = (props) => {
	// eslint-disable-next-line react/prop-types
	const [decal] = useTexture([props.imgUrl]);
	return (
		<Float speed={ 1.75 } rotationIntensity={ 1 } floatIntensity={ 1 }>
			<ambientLight intensity={ 0.5 } />
			<directionalLight position={ [0, 0, 0.05] } />
			<mesh castShadow receiveShadow scale={ 2.75 } >
				<icosahedronGeometry args={ [1, 1] } />
				<meshStandardMaterial 
					color="#fff8eb" 			// цвет
					polygonOffset 				// смещение полигона
					polygonOffsetFactor={ -5 }	// коэффициент смещения полигона
					flatShading					// плоское затенение
				/>
				<Decal 	
					position={ [0, 0, 1] }
					rotation={ [ 2 * Math.PI, 0, 6.25] }
					flatShading	// плоское затенение
					map={ decal }
				/>
			</mesh>
		</Float>
	);
};

// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop='demand'
			gl={ { preserveDrawingBuffer: true } }
		>
			<Suspense fallback={ <CanvasLoader /> }>
				<OrbitControls enableZoom={ false } />
				<Ball imgUrl={ icon } />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default BallCanvas;