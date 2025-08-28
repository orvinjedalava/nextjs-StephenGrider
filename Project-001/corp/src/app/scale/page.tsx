import scaleImg from 'public/scale.jpg';
import Hero from '@/components/hero';
import Transition from '@/components/transition';

export default function ScalePage() {
  return (
    <Transition>
      <Hero
        imgData={scaleImg}
        imgAlt="Stell factory"
        title="Scale your app to infinity"
      />
    </Transition>
  );
}
