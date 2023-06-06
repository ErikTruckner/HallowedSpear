import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CameraPositionLogger from './helpers/CameraPositionLogger'

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 1000,
          position: [7, 15, 60],
        }}>
        <color attach='background' args={['black']} />
        <OrbitControls />
        <CameraPositionLogger event='mousedown' />
        <mesh
          visible
          userData={{ hello: 'world' }}
          position={[1, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color='hotpink' transparent />
        </mesh>
        <ambientLight intensity={1} />
      </Canvas>
    </>
  )
}

export default App
