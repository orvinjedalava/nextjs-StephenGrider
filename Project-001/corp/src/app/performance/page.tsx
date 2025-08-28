import performanceImg from 'public/performance.jpg';
import Hero from '@/components/hero';
import Transition from '@/components/transition';

export default function PerformancePage() {
  return (
    <Transition>
      <Hero
        imgData={performanceImg}
        imgAlt="Welding"
        title="We serve high performance applications"
      />
    </Transition>
  );
}
