import React from 'react';
import Hero from '../Hero/Hero';
import NosotrosRow from '../NosotrosHomeRow/NosotrosRow';
import RelacionRow from '../RelacionHomeRow/RelacionHomeRow';
import PadresRow from '../PadresHomeRow/PadresHomeRow';
import NewsMarquee from '../marquee/Marquee';

function Home() {
  return (
    <div className='homeCtn'>
        <NewsMarquee />
        <Hero />
        <NosotrosRow />
        <PadresRow />
        <RelacionRow />
    </div>
  );
}

export default Home;