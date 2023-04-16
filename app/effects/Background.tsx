import { useThree } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import { RepeatWrapping, Vector2 } from 'three';

export function Background() {
  const height = useTexture(
    'https://uploads.codesandbox.io/uploads/user/b329f342-d890-4a7f-a99a-fae86a17ef85/Qux6-jungle_displacement_01.jpg',
  );
  const normal = useTexture(
    'https://uploads.codesandbox.io/uploads/user/2b85d171-f237-433a-a9b2-fa7fc8714496/aYIW-NormalMap2.png',
  );

  normal.anisotropy = 16;

  normal.wrapS = normal.wrapT = RepeatWrapping;
  normal.repeat = new Vector2(3, 30);

  height.wrapS = height.wrapT = RepeatWrapping;
  height.repeat = new Vector2(1, 2);

  height.anisotropy = 16;
  const viewport = useThree((state) => state.viewport);

  return (
    <group>
      <Plane
        scale={[viewport.width / 2, viewport.height / 0.95, 1]}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
        args={[2, 1, 2, 2]}
      >
        <meshPhysicalMaterial
          color="#121423"
          metalness={0.9}
          roughness={0.3}
          displacementMap={height}
          displacementScale={0.1}
          normalMap={normal}
          normalScale={new Vector2(1, 1)}
        />
      </Plane>
    </group>
  );
}
