import { useState } from 'react';
import AccessoriesIllu from '../../atoms/AccessoriesIllu';
import ExhaustIllu from '../../atoms/ExhaustIllu';
import SpeedImprovementIllu from '../../atoms/SpeedImprovementIllu';

const specialityData = [
  {
    title: 'Accessories',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.`,
    illu: <AccessoriesIllu />,
  },
  {
    title: 'Speed Improvement',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.`,
    illu: <SpeedImprovementIllu />,
  },
  {
    title: 'Exhaust',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.`,
    illu: <ExhaustIllu />,
  },
];

const OurSpecialitySection = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleNext = (isNext: boolean) => {
    setCurrIndex((prev) => {
      if (isNext) {
        if (currIndex + 1 === specialityData.length) {
          return specialityData.length - 1;
        }
        return prev + 1;
      }
      if (prev === 0) {
        return prev++;
      }
      return prev - 1;
    });
  };

  return (
    <section className="bg-[#509FDD] py-9 px-5">
      <div className="overflow-hidden bg-white px-8 py-9">
        <h3 className="mb-3 text-2xl font-bold text-[#029FE4]">OUR SPECIALITY</h3>
        <p className="text-sm text-[#303030]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo
          auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
        </p>
        <div className="mt-7">
          <div className="relative flex justify-center">
            <div className="mx-auto">{specialityData[currIndex].illu}</div>
            <div className="absolute -left-1/4 z-40 h-full w-[121px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute -right-1/4 z-40 h-full w-[121px] bg-gradient-to-l from-white to-transparent"></div>
            {currIndex !== 0 && (
              <div className="absolute -left-1/3">{specialityData[currIndex - 1].illu}</div>
            )}
            {currIndex !== specialityData.length - 1 && (
              <div className="absolute -right-1/3">{specialityData[currIndex + 1].illu}</div>
            )}
          </div>
          <p className="mt-2 text-center text-sm font-medium">{specialityData[currIndex].title}</p>
          <div className="mt-4  ">
            <p className="text-center text-sm leading-relaxed text-[#A7A7A7]">
              {specialityData[currIndex].body}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn-square" onClick={() => handleNext(false)}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="flex justify-center gap-2">
            {Array(specialityData.length)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`block h-2 w-2 rounded-full ${
                    index === currIndex ? 'border-2 border-[#3D46A2]' : ''
                  } bg-[#DAF3FC]`}
                ></span>
              ))}
          </div>
          <button className="btn-square" onClick={() => handleNext(true)}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSpecialitySection;
