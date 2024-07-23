export interface TicketType {
  name: string;
  benefits: null | string[];
  price: number;
  is_has_seating_plan: boolean;
  total_seats: number;
}

export interface Phase {
  name: string;
  start_date: string;
  end_date: string;
  ticket_types: TicketType[];
}

export interface EventCreatePostPayload {
  name: string;
  start_date: string;
  start_time: string;
  end_time: string;
  place: string;
  // co_organizers: [];
  description: string;
  is_has_phases: boolean;
  interests: number[];
  phases: Phase[];
  image: string;
}
