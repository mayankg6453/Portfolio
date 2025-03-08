import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const LightBolt =(props) => {
  const { nodes, materials } = useGLTF('models/lightning_bolt_icons.glb')
const targetRef = useRef();
  useGSAP( ()=>{
    gsap.to(targetRef.current.position,{
      y:targetRef.current.position.y+0.5,
      duration:1.5,
      repeat:-1,
      yoyo:true
    })
  }
  )
  return (
    <Float floatIntensity={1} >
     
    <group {...props} ref = {targetRef} dispose={null}>
      <group scale={0.01}>
        <group position={[22.335051, 2.429225, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_Mat_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rounding_1_Mat_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cap_1_Mat_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rounding_2_Mat_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cap_2_Mat_0.geometry}
            material={materials.material}
          />
        </group>
        <group position={[20.377451, -0.822575, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_1_Mat1_0.geometry}
            material={materials['Mat.1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rounding_1_2_Mat1_0.geometry}
            material={materials['Mat.1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cap_1_2_Mat1_0.geometry}
            material={materials['Mat.1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rounding_2_2_Mat1_0.geometry}
            material={materials['Mat.1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cap_2_2_Mat1_0.geometry}
            material={materials['Mat.1']}
          />
        </group>
      </group>
    </group>
     
    </Float>
  )
}

useGLTF.preload('models/lightning_bolt_icons.glb')
export default LightBolt