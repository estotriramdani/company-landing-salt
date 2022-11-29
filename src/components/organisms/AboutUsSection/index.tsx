import { useState } from 'react';
import { AboutUsCard } from '../../molecules/AboutUsCard';
import PageIndicator from './PageIndicator';

export const aboutUsData = [
  {
    title: 'Who we are',
    subtitle: 'Technology Company',
    body: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'What we do',
    subtitle: 'Professional Brand Management',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
  {
    title: 'How we do',
    subtitle: 'Strategize, Design, Collaborate',
    body: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
  },
];

const AboutUsSection = () => {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <section className="px-10 py-12 pb-16 bg-white" id="about-us">
      <AboutUsCard
        title={aboutUsData[currIndex].title}
        subtitle={aboutUsData[currIndex].subtitle}
        body={aboutUsData[currIndex].body}
      />
      <PageIndicator currIndex={currIndex} setCurrIndex={setCurrIndex} />
    </section>
  );
};

export default AboutUsSection;
