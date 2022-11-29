import { aboutUsData } from '.';

interface Props {
  currIndex: number;
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PageIndicator = ({ currIndex, setCurrIndex }: Props) => {
  const handleNext = (isNext: boolean) => {
    setCurrIndex((prev) => {
      if (isNext) {
        if (currIndex + 1 === aboutUsData.length) {
          return aboutUsData.length - 1;
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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-[#C0C0C0]">
        <span className="text-2xl font-medium text-[#303030]">
          {(currIndex + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
        </span>
        <span className="text-2xl">/</span>
        <span>{aboutUsData.length.toLocaleString('en-us', { minimumIntegerDigits: 2 })}</span>
      </div>
      <div className="flex">
        <button
          className="btn-square btn-prev-next"
          onClick={() => handleNext(false)}
          disabled={currIndex === 0}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="btn-square btn-prev-next"
          onClick={() => handleNext(true)}
          disabled={currIndex + 1 === aboutUsData.length}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PageIndicator;
