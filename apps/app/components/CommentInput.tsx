"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import { useState } from "react";
import { Button } from "@breeze/ui";
import UpArrowIcon from "@/app/assets/icons/UpArrowIcon";
import { cn } from "@/utils";

const CommentInput = () => {
  const [commentText, setCommentText] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something...",
      }),
    ],
    onUpdate({ editor }) {
      setCommentText(editor?.getText());
    },
  });

  return (
    <div className=" w-full flex  border px-6  p-2">
      <EditorContent editor={editor} className="focus:outline-none flex-1  " />
      <Button
        onClick={() => console.log("dat", commentText)}
        disabled={commentText.length <= 0}
        className="rounded-full w-8 h-8 p-1.5 bg-none"
      >
        <UpArrowIcon />
      </Button>
    </div>
  );
};

export default CommentInput;
