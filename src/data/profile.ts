// ─────────────────────────────────────────────────────────────
// Your personal info. Edit the text in here to update the site.
// Projects live in src/content/projects/ (one file each).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Brian Huang',
  // The big greeting at the top of the homepage.
  greeting: "Hi, I'm Brian",
  status: 'Computer Engineering @ Boston University · Class of 2029',
  headline: 'Computer engineering student building across software, hardware, and propulsion.',
  bio: 'I study Computer Engineering at Boston University. I design rocket nozzle components with the BU Rocket Propulsion Group, keep campus media labs running at BU TechOps, run a custom PC building business called Cubic Builds, and build web apps that solve problems I actually have.',
  location: 'Boston, MA · Queens, NY',
  email: 'bbhuang@bu.edu',

  // Leave resume as '' until you put a PDF in the public/ folder,
  // e.g. public/resume.pdf → resume: '/resume.pdf'
  resume: '',

  socials: {
    github: 'https://github.com/bbrihuang',
    linkedin: 'https://www.linkedin.com/in/bbrihuang',
  },

  // The numbers row under the intro.
  metrics: [
    { value: '$1,000+', label: 'Cubic Builds revenue' },
    { value: '500+', label: 'AI dataset sessions recorded' },
    { value: '10,000+', label: 'Voters reached in outreach' },
    { value: '2026', label: 'Joined BURPG as nozzle engineer' },
  ],

  skills: {
    Languages: ['Python', 'C++'],
    Web: ['React', 'Express', 'Node.js', 'Astro'],
    Hardware: ['PC assembly', 'Custom watercooling', 'Overclocking', '3D printing', 'Hardware diagnostics'],
  },

  // The profile card in the intro (photo lives at public/avatar.jpg).
  card: {
    photo: '/avatar.jpg',
    handle: 'in/bbrihuang',
    school: 'Boston University · Class of ’29',
    tags: 'BURPG · Cubic Builds',
  },

  // The little terminal card in the intro.
  // icon can be: 'terminal', 'rocket', 'wrench', 'chip'
  terminal: [
    { icon: 'terminal', color: '#a3a3a3', cmd: 'whoami', out: '> Brian Huang · Computer Engineering ’29', bold: true },
    { icon: 'rocket', color: '#ef4444', cmd: 'propulsion --team', out: 'BURPG · Nozzle Design Engineer' },
    { icon: 'wrench', color: '#3b82f6', cmd: 'ventures --custom', out: 'Cubic Builds · $1,000+ Custom Rig Revenue' },
    { icon: 'chip', color: '#a3a3a3', cmd: 'techops --role', out: 'BU COM TechOps Center · Programs Assistant' },
  ],
};

// Newest first. Add a new job by copying one { ... } block.
export const experience = [
  {
    role: 'Student Programs Assistant',
    company: 'BU College of Communication TechOps Center',
    location: 'Boston, MA',
    period: 'Sep 2026 – Present',
    points: [
      'Provide technical troubleshooting and AV support across academic facilities, diagnosing hardware, connectivity, and software issues so lectures run without downtime.',
      'Supervise daily operations and hardware maintenance for digital media labs and editing bays, keeping workstations ready and resolving issues for daily users.',
    ],
    tech: ['Hardware troubleshooting', 'AV systems', 'macOS & Windows'],
  },
  {
    role: 'Nozzle Design Engineer',
    company: 'BU Rocket Propulsion Group (BURPG)',
    location: 'Boston, MA',
    period: 'Jan 2026 – Present',
    points: [
      'Design rocket nozzle components for prototype rockets, refining geometry and materials through team design reviews.',
      'Work with electrical and test teams to prepare components for fabrication and static-fire testing.',
    ],
    tech: ['CAD', 'Propulsion', 'Thermal analysis'],
  },
  {
    role: 'Audio & Video Recorder',
    company: 'Babel Audio',
    location: 'Remote',
    period: 'Feb 2026 – May 2026',
    points: [
      'Recorded structured audio and video conversations to generate AI training datasets used to improve speech and audio models.',
      'Kept audio clarity and data usability consistent across 500+ sessions by following detailed recording protocols.',
    ],
    tech: ['AI training data', 'Audio/video capture', 'Quality assurance'],
  },
  {
    role: 'Founder',
    company: 'Cubic Builds',
    location: 'Queens, NY',
    period: 'Jan 2023 – Present',
    points: [
      'Founded and run a custom PC building business, sourcing parts and assembling systems for gaming, video editing, and workstation use.',
      'Generated $1,000+ in revenue selling custom builds to clients locally and nationwide.',
    ],
    tech: ['PC assembly', 'Watercooling', 'Overclocking'],
  },
  {
    role: 'Vice President of User Experience',
    company: 'Heartfelt Connections',
    location: 'Syosset, NY',
    period: 'Apr 2024 – Jun 2025',
    points: [
      'Designed, built, and maintained the organization’s website and managed its social media.',
      'Helped raise $1,000+, collect 500+ lbs of clothing, and create 3,000+ cards for patients at St. Jude Children’s Research Hospital.',
    ],
    tech: ['Web design', 'UX', 'Adobe Creative Suite'],
  },
  {
    role: 'Field Canvasser',
    company: 'Legion Outreach Consulting / Meridian Strategies',
    location: 'New York, NY',
    period: 'Apr 2024 – Jun 2025',
    points: [
      'Canvassed door to door and phone banked for local and state campaigns, engaging 10,000+ voters through targeted neighborhood outreach.',
    ],
    tech: ['Outreach', 'Bilingual communication'],
  },
];

export const education = {
  school: 'Boston University',
  degree: 'B.S. Computer Engineering',
  period: 'Expected June 2029',
  location: 'Boston, MA',
  coursework: [
    'Computer Systems & Architecture',
    'C++ Programming',
    'Python Programming',
    'Circuit Analysis',
    'Digital Logic & Embedded Systems',
    'Calculus & Differential Equations',
    'Physics for Engineers',
  ],
  languages: ['English (native)', 'Mandarin Chinese', 'Spanish'],
};
