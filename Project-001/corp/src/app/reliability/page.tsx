import reliabilityImg from 'public/reliability.jpg';
import Hero from '@/components/hero';
import Transition from '@/components/transition';

export default function ReliabilityPage() {
  return (
    <Transition>
      <Hero
        imgData={reliabilityImg}
        imgAlt="Welding"
        title="Super high reliability hosting"
      />
    </Transition>
  );
}
