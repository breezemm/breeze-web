import ArtIcon from "@/icons/ArtIcon";
import ClubIcon from "@/icons/ClubIcon";
import EducationIcon from "@/icons/Education";
import FunFoodIcon from "@/icons/FunFoodIcon";
import GetawayIcon from "@/icons/GetawayIcon";
import MusicIcon from "@/icons/MusicIcon";
import SocialIcon from "@/icons/SocialIcon";
import SportIcon from "@/icons/SportIcon";
import TechnologyIcon from "@/icons/TechnologyIcon";
import { EventCategoryInterface } from "@/interfaces/EventCategory";

const EventCategoryIcon = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "funfood":
      return <FunFoodIcon />;
    case "art":
      return <ArtIcon />;
    case "education":
      return <EducationIcon />;
    case "technology":
      return <TechnologyIcon />;
    case "club":
      return <ClubIcon />;
    case "music":
      return <MusicIcon />;
    case "sport":
      return <SportIcon />;
    case "social":
      return <SocialIcon />;
    case "getaway":
      return <GetawayIcon />;
  }
};

const EventCategory = ({
  eventCategory,
}: {
  eventCategory: EventCategoryInterface;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-neutral-7 mb-2 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px]">
        <EventCategoryIcon iconName={eventCategory.icon} />
      </div>
      <p className="text-center">{eventCategory?.title}</p>
    </div>
  );
};

export default EventCategory;
