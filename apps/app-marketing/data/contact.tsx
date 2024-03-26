import { BiWorld } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactInfo, SocialInfo } from "@/interfaces/Footer";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { TikTokLogo } from "@/app/assets/TiktokLogo";
import { MdFacebook } from "react-icons/md";

import AppleStore from "@/app/assets/apple_store.svg";
import GoogleStore from "@/app/assets/google_store.svg";

export const ContactInfoData: ContactInfo[] = [
  {
    icon: <BiWorld />,
    text: "breezemm.com",
  },
  {
    icon: <FaPhoneAlt />,
    text: "09 - 443 111 017",
  },
  {
    icon: <MdEmail />,
    text: "customerservice@breezemm.com",
  },
];

export const SocialList: SocialInfo[] = [
  {
    icon: <MdFacebook className="h-8 w-8" />,
    link: "https://www.facebook.com/breezeapplication",
  },
  {
    icon: <FaInstagram className="h-8 w-8" />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaLinkedin className="h-8 w-8" />,
    link: "https://www.linkedin.com",
  },
  {
    icon: <TikTokLogo />,
    link: "https://www.tiktok.com",
  },
  {
    icon: <FaTelegram className="h-8 w-8" />,
    link: "https://www.telegram.com",
  },
];

export const Stores: SocialInfo[] = [
  {
    icon: AppleStore,
    link: "https://www.apple.com",
  },
  {
    icon: GoogleStore,
    link: "https://www.google.com",
  },
];
