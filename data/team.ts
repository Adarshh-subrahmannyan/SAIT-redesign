export const EXEC = [
  { name: "Rohan Mathew", role: "President", initials: "RM" },
  { name: "Aisha Fathima", role: "Vice President", initials: "AF" },
  { name: "Nikhil Pillai", role: "General Secretary", initials: "NP" },
  { name: "Sreya Nair", role: "Treasurer", initials: "SN" },
];

export const SUBTEAMS: Record<string, { name: string; role: string; initials: string }[]> = {
  Tech: [
    { name: "Vishnu Das", role: "Tech Lead", initials: "VD" },
    { name: "Fathima Rasheed", role: "Dev Coordinator", initials: "FR" },
    { name: "Akhil Thomas", role: "Member", initials: "AT" },
  ],
  Media: [
    { name: "Devika Menon", role: "Media Lead", initials: "DM" },
    { name: "Sarath Kumar", role: "Photographer", initials: "SK" },
  ],
  Events: [
    { name: "Anjali Raj", role: "Events Lead", initials: "AR" },
    { name: "Kevin Joseph", role: "Logistics", initials: "KJ" },
    { name: "Nithya Suresh", role: "Member", initials: "NS" },
  ],
  PR: [
    { name: "Midhun George", role: "PR Lead", initials: "MG" },
    { name: "Reshma Iqbal", role: "Outreach", initials: "RI" },
  ],
  Content: [
    { name: "Jishnu Prakash", role: "Content Lead", initials: "JP" },
    { name: "Haritha Vinod", role: "Editor", initials: "HV" },
  ],
};
