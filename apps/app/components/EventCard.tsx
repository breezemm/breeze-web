import Image from "next/image";
import EventImage from "@/app/assets/images/feedImage.jpg"
const EventCard = () => {
    return (
        <div className="rounded-lg border">
            <Image src={EventImage} alt="Event Photo" className="w-full"/>
            <div className="p-2 flex flex-col gap-2">
                <span className="font-semibold">
                Star City Sport Club Opening
                </span>
                <div className="flex w-full justify-between">
                    <span>25 May (Tue)</span>
                    <span className="font-bold">FREE</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;