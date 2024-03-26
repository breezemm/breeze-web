import { IoIosCheckmarkCircle } from "react-icons/io";
import { ListInterface } from "@/interfaces/List";

const FeatCard = ({
  lists,
  title,
  shortDes,
}: {
  lists: ListInterface[];
  title: string;
  shortDes: string;
}) => {
  return (
    <div className="border-primary relative rounded-xl border-[1px] p-8">
      <div className="bg-primary text-neutral-1 absolute -top-6 left-1/2 w-[50%] -translate-x-1/2 rounded-md px-3 py-2 text-center md:w-[40%]">
        <p>{title}</p>
      </div>
      <ul className="mb-8 flex flex-col gap-4">
        {lists.map((list: ListInterface) => {
          return (
            <li key={list.id}>
              <div className="relative flex items-center gap-4">
                <IoIosCheckmarkCircle size={22} />
                <p className="w-[80%]">{list.title}</p>
                {list.tag && (
                  <div className="bg-green-6 absolute -right-12 rounded-full px-3 py-1">
                    <p className="text-neutral-1 text-sm uppercase">
                      {list.tag?.title}
                    </p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <div className="border-blue-7 bg-blue-2 rounded-full border-[1px] px-6 py-2">
          <p>{shortDes}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatCard;
