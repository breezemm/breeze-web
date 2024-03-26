import { customerList } from "@/data/customerList";
import FeatCard from "./FeatCard";
import { organizerList } from "@/data/organizerList";

const FeatCardsSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-28">
        <div className="col-span-full lg:col-span-1">
          <FeatCard
            lists={customerList}
            title="I go to events."
            shortDes="Goodbye to boring ticket. &#129303;"
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <FeatCard
            lists={organizerList}
            title="I organise events."
            shortDes="Goodbye to paperwork.  &#129395;"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatCardsSection;
