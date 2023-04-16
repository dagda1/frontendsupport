import { LightSource } from '~/effects/Lightsource';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping, LinearToneMapping } from 'three';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Leva } from 'leva';
import { Overlay } from '~/effects/Overlay';
import { Background } from '~/effects/Background';
import Effects from '~/effects/Effects';

export default function Home() {
  return (
    <article>
      <Canvas
        id="my-canvas"
        className="fixed"
        gl={{
          antialias: false,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: LinearToneMapping as any,
          toneMappingExposure: 3,
        }}
      >
        <Suspense fallback={null}>
          <LightSource />
          <Background />
          <Effects />
        </Suspense>
        <Leva collapsed hidden />
      </Canvas>
      <Overlay />
      <Loader />
    </article>
  );
}
