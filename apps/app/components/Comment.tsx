import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg";
import RightArrowIcon from "@/app/assets/icons/RightArrowIcon";
import ReactionBar from "@/components/ReactionBar";

const Comment = () => {
  return (
    <div className="flex px-6 py-4 items-start gap-2">
      <Image src={ProfileImage} alt="profile image" className="mt-1" />
      <div className="flex flex-col gap-4 flex-1">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-semibold">Kate</span>
            <RightArrowIcon />
            <span className="font-semibold">Nelly</span>
          </div>
          <div className="text-grey-1">5m</div>
        </div>
        <div>Finally, Summer’s here.</div>
        <ReactionBar isComment={true} />
      </div>
    </div>
  );
};

export default Comment;
