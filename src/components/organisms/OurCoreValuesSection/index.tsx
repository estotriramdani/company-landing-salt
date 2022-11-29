import CoreIllustration from '../../atoms/CoreIllustration';

export const coreValuesData = [
  {
    title: 'Dedication',
    body: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    title: 'Intellectual Honesty',
    body: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
  },
  {
    title: 'Curiosity',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
  },
];

const OurCoreValuesSection = () => {
  return (
    <section className="bg-[#F8F8F8] px-10 pt-14" id='core-values'>
      <h2 className="h3 mb-3 text-center">Our Core Values</h2>
      <div className="text-[#777777]">
        <p className="mb-3">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse
          etiam eget egestas. Aliquet odio et lectus etiam sit.
        </p>
        <p>In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
      </div>
      <ul className="mt-8 flex flex-col gap-6">
        {coreValuesData.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="relative top-4 h-[2px] w-[24px] bg-[#747474]"></span>
            <div>
              <h4 className="text-2xl text-black">{item.title}</h4>
              <p className="text-[#777777]">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="relative -mr-10 mt-7 overflow-hidden">
        <CoreIllustration style={{ height: '250px' }} />
      </div>
    </section>
  );
};

export default OurCoreValuesSection;
