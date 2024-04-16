import React from "react";
import PrivacyContent from "./PrivacyContent";

const PrivacyPolicy = () => {
  const privacyContentsData = [
    {
      title: "Information We Collect",
      contentLists: [
        "Personal Information: Name, email, and location.",
        "Wallet Transaction Data: Used for internal processing only.",
        "User-Generated Content: Event posts, photos, and comments.",
      ],
    },
    {
      title: "How We Use Your Information",
      contentLists: [
        "Provide and improve our service.",
        "Personalize user experience.",
        "Facilitate event-related activities.",
        "Conduct internal wallet transactions.",
      ],
    },
    {
      title: "Information Sharing",
      contentLists: [
        "With Event Organizers: User information may be shared to facilitate event organization.",
        "With Other Users: Sharing event memories, including photos and comments.",
        "Wallet transaction data is securely stored and not shared with external parties.",
      ],
    },
    {
      title: "Data Security",
      contentLists: [
        "Industry-standard security measures are employed to protect user data, including wallet transactions. However, no method of transmission over the internet or electronic storage is completely secure.",
      ],
    },
    {
      title: "User Control and Data Management",
      contentLists: [
        "Users can edit account information and preferences.",
        "Users can choose to delete their account.",
      ],
    },
    {
      title: "Contact Us",
      contentLists: [
        "If you have any questions or concerns about our Terms and Privacy Policy, please contact us at customerservice@breezemm.com.",
      ],
    },
  ];

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Privacy Policy
      </h3>
      <div className="px-6 flex flex-col gap-9">
        {privacyContentsData.map((content, index) => (
          <PrivacyContent content={content} />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
