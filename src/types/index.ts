// Common types used throughout the application

// Activity type
export interface Activity {
  id?: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  type: string;
  image: string;
  description: string;
}

// Member type
export interface Member {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  dateOfBirth: string;
  noShows: number;
  notes: string;
}

// Booking type
export interface Booking {
  id?: number;
  bookedInDateTime: string | Date;
  bookingStatus: string;
  isGuest: boolean;
  isPaid: boolean;
  activityId: number;
  memberId: number;
  observations: string;
  activity?: Activity;
  member?: Member;
}

// User type
export interface User {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
  role?: string;
}

// Supabase related types
export interface SupabaseAuthResponse {
  data: {
    user: User | null;
    session: any;
  };
  error: any;
}

// Dark mode context type
export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
