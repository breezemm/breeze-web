import { IoIosArrowBack } from "react-icons/io";

interface PageTitleProps {
    title: string;
    current: number;
    total: number;
}

const PageTitle = ({
    title,
    current,
    total
}: PageTitleProps) => {
  return (
    <div className="flex justify-between items-center w-full border-b border-neutral-2 pb-3">
      <button className="bg-primary text-white w-[30px] h-[30px] flex justify-center items-center rounded-full">
        <IoIosArrowBack />
      </button>
      <h2 className="font-bold">{title}</h2>
      <p>
        <span>{current}</span>
        <span>/</span>
        <span>{total}</span>
      </p>
    </div>
  );
};

export default PageTitle;
