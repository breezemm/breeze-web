import EventPost from "@/components/EventPost";
import CommentInput from "@/components/CommentInput";

const CommentPage = () => {
    return (
        <div>
            <EventPost />
            <div className="flex justify-between ">
                <CommentInput />
            </div>
        </div>
    );
};

export default CommentPage;
