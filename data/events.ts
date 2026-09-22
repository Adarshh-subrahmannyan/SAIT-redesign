export type EventItem = {
  slug: string;
  name: string;
  date: string;
  time?: string;
  venue?: string;
  tag: "Flagship" | "Workshop" | "Talk" | "Competition" | "Department";
  desc: string;
};

export const EVENTS_UPCOMING: EventItem[] = [
  {
    slug: "codesprint-hackathon",
    name: "CodeSprint Hackathon",
    date: "2026-10-04",
    time: "9:00 AM",
    venue: "CS Seminar Hall",
    tag: "Flagship",
    desc: "24-hour build sprint across open tracks — AI, web, and systems.",
  },
  {
    slug: "intro-to-rust-workshop",
    name: "Intro to Rust Workshop",
    date: "2026-09-28",
    time: "2:00 PM",
    venue: "IT Lab 2",
    tag: "Workshop",
    desc: "Hands-on systems programming session for second and third years.",
  },
  {
    slug: "design-systems-talk",
    name: "Design Systems Talk",
    date: "2026-09-25",
    time: "11:00 AM",
    venue: "Auditorium",
    tag: "Talk",
    desc: "A visiting alumna on building product design systems at scale.",
  },
  {
    slug: "freshers-orientation",
    name: "Freshers Orientation",
    date: "2026-09-23",
    time: "10:00 AM",
    venue: "Main Block",
    tag: "Department",
    desc: "Welcoming the new batch — clubs, mentors, and department walkthrough.",
  },
];

export const EVENTS_PAST: EventItem[] = [
  {
    slug: "techfest-2026",
    name: "TechFest 2026",
    date: "2026-03-14",
    tag: "Flagship",
    desc: "Three-day department fest — 900+ footfall, 12 competitive events.",
  },
  {
    slug: "git-github-bootcamp",
    name: "Git & GitHub Bootcamp",
    date: "2026-02-10",
    tag: "Workshop",
    desc: "Version control fundamentals for first-year IT students.",
  },
  {
    slug: "alumni-homecoming",
    name: "Alumni Homecoming",
    date: "2025-12-20",
    tag: "Department",
    desc: "Annual gathering connecting current students with graduating batches.",
  },
  {
    slug: "ctf-night",
    name: "CTF Night",
    date: "2025-11-08",
    tag: "Competition",
    desc: "Overnight capture-the-flag with 30 participating teams.",
  },
];

export const EVENT_TAGS = ["All", "Flagship", "Workshop", "Talk", "Competition", "Department"] as const;
