import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import useMediQuery from 'react-responsive';
import {calculateSizes} from '../constants/index.js'
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import LightBolt from '../components/LightBolt.jsx';
import Button from '../components/Button.jsx';
const Hero = () => {

  // Controls can be defined to configure and find positions for the 3D model
//   const controls =useControls('HackerRoom', {
//     positionX:{
//       value:2.5,
//       min:-10,
//       max:10
//     },
//     positionY:{
//       value:2.5,
//       min:-10,
//       max:10
//     },
//     positionZ:{
//       value:2.5,
//       min:-10,
//       max:10
//     },
//     rotationX:{
//       value:0,
//       min:-10,
//       max:10
//     },
//     rotationY:{
//       value:0,
//       min:-10,
//       max:10
//     },
//     rotationZ:{
//       value:0,
//       min:-10,
//       max:10
//     },
//     scale:{
//       value:0.07,
//       min:0.1,
//       max:10
//     }
//   }
// )
  const isSmall = useMediQuery({maxWidth: 440});
  const isMobile = useMediQuery({maxWidth: 768});
  const isTablet  = useMediQuery({minWidth: 768, maxWidth: 1024});
  // Use media queries to determine screen size
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mayank Gupta <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
            {/* <Leva/> */}
            <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>
              {/* <HackerRoom 
              // scale={isMobile? 0.07: 0.1} 
              // position={[2,-8,2]} 
              scale={sizes.deskScale} 
              position={sizes.deskPosition} 
              rotation={[0, -Math.PI, 0]}
              // position={[controls.positionX, controls.positionY, controls.positionZ]} 
              // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]} 
              // scale={[controls.scale, controls.scale, controls.scale]} 
              /> */}
              <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                {/* //<Rings position={sizes.boltPosition}/> */}
                <LightBolt scale = {0.4}position={sizes.boltPosition}/>
                
              </group>
              


            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>


      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href='#about' className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
        </div>

    </section>
  );
};

export default Hero;
