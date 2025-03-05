import { useGLTF } from '@react-three/drei'
import React from 'react'

function Model() {

    const {nodes}=useGLTF("/camera.glb")
  return (
    <group>
<mesh {...nodes.body_001_low_41}>

</mesh>
    </group>
  )
}

export default Model


