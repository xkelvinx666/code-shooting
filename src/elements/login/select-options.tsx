import { useMemo } from 'react';

const optionColors = ['bg-purple-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-teal-300', 'bg-sky-300'];

interface ISelectOptionsProps<T> {
  name: string;
  active: T;
  options: Array<T>;
  onClick: (val: T) => void;
}

export default function SelectOptions<T> ({ name, active, options, onClick }: ISelectOptionsProps<T>) {
  const optionElements = useMemo(() => {
    return options.map((option, index) => {
      return (
        <div className="rounded-xl w-32 text-center cursor-pointer mx-2 mt-2 text-white" key={index}>
          <div
            className={[optionColors[index % optionColors.length], active === option ? 'text-blue-400' : ''].join(' ')}
            onClick={() => onClick(option)}
          >{String(option)}</div>
        </div>
      );
    });
  }, [options]);

  return (
    <>
      <span className="text-lg font-semibold">{name}</span>
      <div className="flex flex-row justify-center flex-wrap mt-1 max-w-2xl">{optionElements}</div>
    </>
  );
}