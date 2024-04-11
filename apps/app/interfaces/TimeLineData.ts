export interface TimeLineProps {
  image: string;
  comments: any[];
  description: string;
  likers_count: number;
  start_time: string;
  comments_count: number;
  name: string;
  is_has_phases: boolean;
  is_my_event: boolean;
  id: number;
  place: string;
  user: {
    settings: {
      social_links: {
        snapchat: string;
        website: string;
        tiktok: string;
        facebook: string;
        telegram: string;
        instagram: string;
      };
      bio: string;
      language: string;
    };
    profile_image: string;
    address: { city: string };
    date_of_birth: string;
    has_followed: null;
    name: string;
    id: number;
    interests: { name: string; id: number }[];
    email: string;
    username: string;
  };
  phases: any[];
  start_date: string;
}
