import EventPost from "@/components/EventPost";
import TipTap from "@/components/TipTap";

const CommentPage = () => {
    return (
        <div>
            <EventPost/>
            <div className="flex justify-between ">
                <TipTap/>
            </div>
        </div>
    );
};

export default CommentPage;