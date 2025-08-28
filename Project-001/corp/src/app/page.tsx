import homeImg from 'public/home.jpg';
import Hero from '@/components/hero';
import Transition from '@/components/transition';

export default function Home() {
  return (
    // <Transition>
      <Hero
        imgData={homeImg}
        imgAlt="Car factory"
        title="Professional Cloud Hosting"
      />
    // </Transition>
  );
}
