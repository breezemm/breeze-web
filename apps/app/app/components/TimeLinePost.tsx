import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg";
import { Card, CardContent, CardFooter, CardHeader } from "@breeze/ui";
import FeedImage from "@/app/assets/images/feedImage.jpg";
import HeartIcon from "@/app/assets/icons/HeartIcon";
import MessageIcon from "@/app/assets/icons/MessageIcon";
import SaveIcon from "@/app/assets/icons/SaveIcon";
import { TimeLineProps } from "@/interfaces/TimeLineData";

const TimeLinePost = (props: { data: TimeLineProps }) => {
  return (
    <div className="flex px-6 py-4 border-b-4  gap-2 md:max-w-[375px]">
      <div className="pt-1">
        <Image src={ProfileImage} alt="profile" />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="text-neutral-10 font-semibold">
            {props.data.user.name}
          </p>
          <p className="text-neutral-8">5m</p>
        </div>
        <p className="text-neutral-10">breeze is finally OUT OF THE LAB.</p>

        <Card className=" w-full md:w-[278px]">
          <CardHeader className="p-0">
            <Image src={FeedImage} className="w-full" alt="" />
          </CardHeader>

          <CardContent className="p-2">
            <p className="text-neutral-10 font-semibold">
              breeze PUBLIC Launch
            </p>
          </CardContent>

          <CardFooter className="flex justify-between ps-2 pe-2 pb-2">
            <p className="text-neutral-10">1 Mar (Tue)</p>
            <p className="text-neutral-10 font-semibold">FREE</p>
          </CardFooter>
        </Card>

        <PostFooter />
      </div>
    </div>
  );
};
export default TimeLinePost;
const PostFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <HeartIcon />
        <p>1000</p>
      </div>
      <div className="flex gap-1 items-center">
        <MessageIcon />
        <p>68</p>
      </div>
      <div>
        <SaveIcon />
      </div>
    </div>
  );
};
