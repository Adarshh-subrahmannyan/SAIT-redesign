export type Submission = {
  activity: string;
  date: string;
  type: string;
  role?: string;
  proof?: string;
  status: "Verified" | "Pending";
};

export const SEED_SUBMISSIONS: Submission[] = [
  { activity: "Smart India Hackathon", date: "2026-09-12", type: "Hackathon", role: "Participant", status: "Verified" },
  { activity: "AWS Cloud Practitioner Cert.", date: "2026-09-05", type: "Certification", role: "Individual", status: "Verified" },
  { activity: "Design Systems Talk", date: "2026-09-25", type: "Talk attended", role: "Attendee", status: "Pending" },
];

export const LEADERBOARD = [
  { name: "Vishnu Das", points: 340, activities: 9 },
  { name: "Anjali Raj", points: 295, activities: 7 },
  { name: "Fathima Rasheed", points: 270, activities: 8 },
  { name: "Kevin Joseph", points: 210, activities: 5 },
  { name: "Nithya Suresh", points: 180, activities: 6 },
];

export const ACTIVITY_TYPES = [
  "Hackathon",
  "Workshop",
  "Certification",
  "Competition",
  "Talk attended",
  "Publication",
];
