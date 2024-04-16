import React from "react";

interface PrivacyContentProps {
  content: {
    title: string;
    contentLists: string[];
  };
}

const PrivacyContent: React.FC<PrivacyContentProps> = ({ content }) => {
  return (
    <div>
      <h4 className="text-base font-semibold">{content.title}:</h4>
      {content.contentLists.length === 1 ? (
        <p className="pt-3">{content.contentLists[0]}</p>
      ) : (
        <ol className="list-decimal pl-6 pt-3 flex flex-col gap-1">
          {content.contentLists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default PrivacyContent;
