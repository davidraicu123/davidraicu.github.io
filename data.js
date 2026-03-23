// ============================================================
//  DATA.JS — Your single source of truth
//  To add a new experience, copy one block and fill it in.
//  "type" is either "pro" (professional) or "life" (personal)
// ============================================================

const TIMELINE_DATA = [
  {
    id: "lcc-icc-2025",
    type: "pro",
    title: "LCC × Lazaridis ICC",
    tag: "Case competition",
    date: "Mar 2025",
    year: "2025",
    shortDesc: "Competed in the Lazaridis International Case Competition, tackling a real-world business problem under 24 hours.",
    photo: "assets/lcc-icc-2025/cover.jpg",   // put your photo here
    photos: [
      "assets/lcc-icc-2025/cover.jpg",
      "assets/lcc-icc-2025/team.jpg",
      "assets/lcc-icc-2025/present.jpg"
    ],
    fullPage: {
      what: "24-hour case competition hosted by Lazaridis School of Business. Our team of four tackled a strategy problem for a Fortune 500 client.",
      learned: "How to structure ambiguous problems fast. Learned to cut analysis short and start building the story early. Presentation under pressure is a skill.",
      team: "Team of 4 — names kept private",
      result: "Top 8 finish",
      slidesLink: "",   // paste Google Slides or PDF link here
      links: []
    }
  },
  {
    id: "lazsoc-exec-2024",
    type: "pro",
    title: "Joined LazSoc exec",
    tag: "Club",
    date: "Sep 2024",
    year: "2024",
    shortDesc: "Joined the Lazaridis Society as an executive member, helping run events and build community for 1,000+ students.",
    photo: "assets/lazsoc-2024/cover.jpg",
    photos: [
      "assets/lazsoc-2024/cover.jpg"
    ],
    fullPage: {
      what: "LazSoc is the main business student society at Wilfrid Laurier. As an exec I helped organize networking events, speaker panels, and socials.",
      learned: "Event logistics, working with a team of strangers, and how to actually get things done in a bureaucratic student organization.",
      team: "",
      result: "",
      slidesLink: "",
      links: []
    }
  },
  {
    id: "photography-start-2024",
    type: "life",
    title: "Started photography",
    tag: "Life moment",
    date: "Jul 2024",
    year: "2024",
    shortDesc: "Picked up a camera for the first time and got obsessed. Changed how I see everything.",
    photo: "assets/photography/cover.jpg",
    photos: [
      "assets/photography/cover.jpg"
    ],
    fullPage: {
      what: "Started shooting on a borrowed Fujifilm. Fell down the rabbit hole of composition, light, and storytelling through images.",
      learned: "Patience. How to notice things. That constraints (one lens, one hour) make you more creative, not less.",
      team: "",
      result: "",
      slidesLink: "",
      links: [{ label: "See my photography", url: "photography.html" }]
    }
  },
  {
    id: "laurier-start-2023",
    type: "pro",
    title: "Started at Laurier",
    tag: "University",
    date: "Sep 2023",
    year: "2023",
    shortDesc: "Began my BBA at Wilfrid Laurier University with a Computer Science minor.",
    photo: "assets/laurier/cover.jpg",
    photos: [
      "assets/laurier/cover.jpg"
    ],
    fullPage: {
      what: "Enrolled in the Lazaridis School of Business. Chose to add a CS minor because I wanted to understand technology from the inside, not just from the business side.",
      learned: "Still learning. The intersection of business thinking and technical building is where I want to live.",
      team: "",
      result: "",
      slidesLink: "",
      links: []
    }
  }
];

// ============================================================
//  ABOUT ME — edit this object
// ============================================================
const ABOUT_DATA = {
  name: "David Raicu",
  role: "BBA student · CS minor · Wilfrid Laurier University",
  bio: "I'm a business student who thinks like a builder. I'm curious about how companies grow, how technology changes industries, and what it takes to make things people actually care about.",
  curiosities: ["how AI is reshaping finance", "why some brands become cultural icons", "the psychology of decision-making"],
  ambitions: "I want to work at the intersection of strategy and product — understanding the business deeply enough to shape what gets built.",
  favFood: "Romanian food (biased) and good ramen",
  skills: ["Excel & financial modeling", "Python (learning)", "Figma", "Business strategy", "Public speaking", "Photography"]
};

// ============================================================
//  WHAT'S KEEPING ME UP — add/remove questions freely
// ============================================================
const KEEPING_ME_UP = [
  "Will AI replace the strategy layer of consulting, or just the execution?",
  "What does it mean to have taste in a world where tools do the making?",
  "Is the best career path the one that maximizes optionality, or the one that goes all-in early?",
  "How do you build something people care about when attention is the scarcest resource?",
  "What's actually hard about starting a company — the idea, the execution, or finding the right people?"
];

// ============================================================
//  SONG OF THE WEEK — update this manually whenever you want
// ============================================================
const SONG_OF_WEEK = {
  title: "Your song title here",
  artist: "Artist name",
  why: "One sentence on why this song is living in your head right now.",
  link: "https://open.spotify.com/track/..."  // paste Spotify link
};

// ============================================================
//  PHOTOGRAPHY — your gallery images
//  Add as many as you want. caption is optional.
// ============================================================
const PHOTOGRAPHY_DATA = [
  { src: "assets/photography/photo1.jpg", caption: "" },
  { src: "assets/photography/photo2.jpg", caption: "" },
  { src: "assets/photography/photo3.jpg", caption: "" },
  { src: "assets/photography/photo4.jpg", caption: "" },
  { src: "assets/photography/photo5.jpg", caption: "" },
  { src: "assets/photography/photo6.jpg", caption: "" }
];
