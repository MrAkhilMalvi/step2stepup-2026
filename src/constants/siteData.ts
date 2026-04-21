export type EventAction = {
  href: string;
  label: string;
  variant?: "download" | "link";
};

export type EventSection = {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  enableHover?: boolean;
  videoUrl?: string;
  hoverImage?: string;
  tinted?: "gold" | "blue";
  actions: EventAction[];
};
// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Leadership", href: "/founder" },
  { label: "Events", href: "/events" },
  { label: "Donor Manifesto", href: "/manifesto" },
  { label: "Contribute Now", href: "/donate" },
  { label: "Contact Us", href: "/connect" },
];

// ─── Images  ───────────────────────────────────
export const IMAGES = {
  logo: "/images/home/Step2StepUp-logo.webp",
  logoDark: "/images/home/Step2StepUp-dark-blue-logo.webp",
  mission: "/images/home/S2SU-new-3.webp",
  education: "/images/home/S2SU-new-3.webp",
  institution: "/images/home/institutional-S2SU.webp",
  personalDev: "/images/home/S2SU-new-4.webp",
  community: "/images/home/S2SU-6.webp",
  access: "/images/home/S2SU-new-1.webp",
  helping: "/images/home/helping-hand.webp",
};

// ─── Hero ─────────────────────────────────────────────────────
export const HERO = {
  youtubeId: "kWqXMUUcZqc",
  subtitle: "Welcome to Step2StepUp Inc. Non-Profit 501 (c) (3)",
  title: "STEPPING UP TO A BRIGHTER FUTURE",
};

export const sectionTone = {
  gold: "bg-[rgba(200,160,75,0.05)]",
  blue: "bg-[rgba(75,136,200,0.05)]",
  none: "bg-white",
};

// ─── Content Sections ────────────────────────────────────────
export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  tag?: string;
  body?: string[];
  image?: string;
  title?: string;
  desc?: string;
  imageLeft: boolean; // true = image LEFT, text RIGHT
  cta?: { label: string; href: string };
  dark?: boolean; // dark navy background
}

export const SECTIONS: ContentSection[] = [
  {
    id: "mission",
    tag: "MISSION",
    heading: "Fulfilling Entrepreneurial Dreams of Young Adults",
    title:
      "GUIDE YOUNG ADULTS TO FINANCIAL SUCCESS AND SUPPORT THEIR ENTREPRENEURIAL DREAMS TO REALITY",
    desc: "At Step2StepUp Inc., we believe in guiding young adults towards financial independence and realizing their entrepreneurial dreams. Our mission is to provide the necessary support and resources to turn aspirations into reality, ensuring that every individual has the opportunity to lead a self-sufficient and fulfilling life.",
    image: IMAGES.mission,
    imageLeft: false, // text left, image right (no — looking at HTML: left col = text, right = image? Let me re-check)
    // HTML: elementor-element-7e813a1 (text) then elementor-element-ceb828d (row with image left, text right)
  },
  {
    id: "education",
    heading: "EDUCATION AS A LIFETIME INVESTMENT",
    body: [
      "We understand the importance of education as a lifelong investment. Through engaging and interactive programs, we inspire youth to complete their high school and college education. Our goal is to make learning enjoyable and relevant, fostering a mindset where entrepreneurship is seen as a pathway to personal success and financial security.",
    ],
    image: IMAGES.education,
    imageLeft: true, // image LEFT, text RIGHT (fadeInLeft animation on image)
  },
  {
    id: "institutions",
    heading: "INVOLVING EDUCATIONAL INSTITUTIONS",
    body: [
      "We work closely with educational institutions to recognize and nurture the talents and abilities of students. By promoting our entrepreneurial skill development programs in high schools, colleges, and universities, we aim to revolutionize the current educational system, empowering students with practical skills and knowledge for their future endeavors.",
    ],
    image: IMAGES.institution,
    imageLeft: false, // text LEFT, image RIGHT (fadeInRight animation)
    dark: true,
  },
  {
    id: "personal-dev",
    heading: "PERSONAL DEVELOPMENT FOR ENTREPRENEURS",
    body: [
      "At Step2StepUp, we prioritize personal development for aspiring entrepreneurs. Through mentorship and support, we help individuals develop essential interpersonal skills while fostering confidence and resilience. Our goal is to create a supportive environment where every student feels valued and empowered to pursue their dreams.",
    ],
    image: IMAGES.personalDev,
    imageLeft: true, // image LEFT (fadeInLeft), text RIGHT
  },
  {
    id: "community",
    heading: "COMMUNITY BENEFITS",
    body: [
      "We believe that a student's success is a stepping stone toward eradicating poverty and fostering economic growth in our communities. By empowering young entrepreneurs, we create opportunities for job creation and economic empowerment, particularly for underutilized members of society, including veterans, the homeless, and the physically challenged.",
    ],
    image: IMAGES.community,
    imageLeft: false, // text LEFT, image RIGHT (fadeInRight)
    cta: { label: "VIEW GALLERY", href: "/founder#gallery" },
    dark: true,
  },
  {
    id: "access",
    heading: "ACCESS TO SUCCESS",
    body: [
      "Step2StepUp provides access to a network of venture capitalists and mentors who can help turn innovative ideas into successful ventures. Through our connections with inspirational women leaders and seasoned entrepreneurs, we provide guidance, mentorship, and funding opportunities to support the next generation of innovators.",
    ],
    image: IMAGES.access,
    imageLeft: true, // image LEFT (fadeInLeft), text RIGHT
  },
  {
    id: "giving-back",
    heading: "ACT OF GIVING BACK",
    body: [
      "We facilitate young startup founders as the Incubators and Mentorship Youth council for the shortlisted registered startup entrepreneurs to be successful business owners, to implement their entrepreneurial projects successfully.",
      "Once our young adults get situated as successful entrepreneurs, they exercise the Act of Giving Back by helping another student project.",
    ],
    image: IMAGES.helping,
    imageLeft: false, // text LEFT, image RIGHT (fadeInRight)
  },
];

// ─── CTA Banner (before footer) ──────────────────────────────
export const CTA_BANNER = {
  text: "Join us at Step2StepUp Inc. and take the first step towards a future filled with possibilities. Together, we can empower young adults, transform communities, and build a brighter tomorrow.",
  label: "KNOW MORE",
  href: "/connect",
};

// ─── Footer ──────────────────────────────────────────────────
export const FOOTER = {
  nonprofit: "Non-Profit 501 (c) (3)",
  ein: "Employers Identification Number (EIN): 83-3400043",
  mission:
    "We believe in guiding young adults toward financial independence and realizing their entrepreneurial dreams. Our mission is to provide the necessary support and resources to turn aspirations into reality, ensuring that every individual has the opportunity to lead a self-sufficient and fulfilling life.",
  social: [
    { label: "Facebook", icon: "fb" },
    { label: "Twitter", icon: "tw" },
    { label: "Youtube", icon: "yt" },
  ],
  contact: {
    tel: "+1 760 220 6004",
    email: "info@step2stepup.org",
    founder: "Ms. Vasu Pawar",
    founderEmail: "vasu@step2step.org",
    address: "9258, Rainsong Avenue,\nHesperia, CA 92344, USA",
    website: "https://step2stepup.org",
  },
  copyright:
    "Copyright © 2026 Step2StepUp Inc., USA  |  For more information, write to us on  info@step2stepup.org",
};

export const getSlidesPerView = (width: number) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

export const founderProfile = {
  image: "/images/leadership/Vasu-Pawar-picture.jpg",
  name: "MS. VASU (VASUNDHARA) PAWAR",
  titles: [
    "Founder & CEO, Step2StepUp, Inc.",
    "Ambassador of India - Global Trade Chamber",
    "Founding President - GOPIO Inland Empire",
    "Chair, Youth Council - GOPIO International",
  ],
};

export const cofounderProfile = {
  image: "/images/leadership/Viresh-patel-Picture.jpg",
  name: "MR. VIRESH PATEL",
  titles: [
    "Co-Founder, Step2StepUp Inc .",
    "Founder & CEO, Intellidea & IntelliWise Academy",
    "Promoter & Director, NAVIRA Life Essentials Pvt. Ltd.",
    "Co-Chair Youth Council GOPIO International",
  ],
};

// --- MERGED FULL FOUNDER BIO ---
export const founderBio = [
  "Ms. Vasu Pawar (USA) is the Founder and CEO of Step2StepUp Inc., a 501(c)(3) non-profit dedicated to empowering young entrepreneurs through funding, training, mentoring, and guidance.",
  "A serial entrepreneur herself, she has built and led businesses across industries including retail, hospitality, manufacturing, and technology.",
  "With over 35 years of experience in finance and systems leadership in the US, and a distinguished early career as an award-winning educator, Vasu brings a rare blend of business acumen and teaching excellence.",
  "She believes in turning hard-earned experience into opportunity for the next generation of entrepreneurs. She is Chair of Youth Council, GOPIO International.",
];

// --- MERGED FULL CO-FOUNDER BIO ---
export const cofounderBio = [
  "Viresh Patel is the Co-Founder of Step2StepUp Inc and also Founder & CEO of Intellidea & IntelliWise Academy, where he leads strategy, growth, and transformation initiatives for enterprises and institutions globally, empowering them to navigate complex challenges with his exceptional ecosystem of experts.",
  "He is a young, versatile and dynamic business  leader with 28+ years of experience across Technology, BFSI, US Healthcare, Education, and Digital assessments business across USA, Asia, Europe and Middle East. Previously, he held senior leadership roles at NSE Group Co. /NSEIT, Infovision and NIIT, delivering large-scale, mission-critical projects. He is also the Promoter and Director at Navira Life Essentials Private Ltd.",
  "A Gold Medalist in Software Engineering and Systems Management, and an IIM Calcutta leadership alumnus. Viresh is also Co-Chair of the GOPIO International Youth Council, promoting youth leadership and entrepreneurial mindset development for purpose-led innovation to create scalable, sustainable impact.",
];

// --- GOALS AND GALLERY ---
export const goalParagraphs = [
  "Step2StepUp Inc. is determined to fulfil the entrepreneurial dreams of our Young Adults. Under the leadership of the founder and co-founder, Step2StepUp Inc, along with its volunteers and donors wish to solve the problems of the world, like poverty, homelessness, keeping kids away from drugs or depression, and helping families and veterans not conducive to success to help improve their financial status, their stability, and create jobs.",
  'Step2StepUp Inc. has created chapters in Uganda, Africa, Bangaluru, and Maharashtra, India to help the poverty-stricken regions This year she will be adding another breathtaking event along with her team, "Wishes Fulfilled" to fulfill the last wishes of those who are disposed a limited time to live.',
  "The ultimate desire of the leadership is to bridge India with the nationalities, cultures, and ethnicities of the World, on a Business Trade Platform, with an opportunity for all to Trade and present their unique talents, artefacts, expertise... Building Bridges and inclusiveness, one step at a time in the World, is of utmost importance to her.",
];

export const galleryImages = [
  {
    src: "images/leadership/Priyanka-Chopra-300x200.webp",
    alt: "Priyanka Chopra",
  },
  {
    src: "images/leadership/Priyanka-Chopra-2-300x182.webp",
    alt: "Priyanka Chopra 2",
  },
  { src: "images/leadership/S2SU-009-300x132.webp", alt: "S2SU 009" },
  { src: "images/leadership/S2SU-007-300x202.webp", alt: "S2SU 007" },
  { src: "images/leadership/S2SU-006-300x164.webp", alt: "S2SU 006" },
  { src: "images/leadership/S2SU-005-300x169.webp", alt: "S2SU 005" },
  { src: "images/leadership/S2SU-004-300x185.webp", alt: "S2SU 004" },
  { src: "images/leadership/S2SU-003-300x200.webp", alt: "S2SU 003" },
  { src: "images/leadership/S2SU-002-300x176.webp", alt: "S2SU 002" },
  { src: "images/leadership/S2SU-001-300x176.webp", alt: "S2SU 001" },
];

export const paymentMethods = [
  {
    title: "Paper Check",
    description: "Traditional mailing option for standard checks.",
    highlight: false,
    fields: [
      { label: "Payable To", value: "Step2StepUp Inc." },
      {
        label: "Memo Line",
        value: "Awards Night 2026, Attn: Vasu Pawar",
        highlight: true,
      },
      {
        label: "Mail Address",
        value: `Step2StepUp Inc.
Attn: Vasu Pawar
9258 Rainsong Avenue
Hesperia, CA 92344`,
      },
    ],
  },
  {
    title: "Zelle Transfer",
    description: "Instant, secure bank-to-bank transfer.",
    highlight: true,
    fields: [
      { label: "Account Name", value: "Step2StepUp Inc." },
      { label: "Zelle Phone Number", value: "760-220-6004", highlight: true },
      { label: "Required Memo", value: "Attn: Vasu Pawar: Awards Night 2026" },
    ],
  },
  {
    title: "Online/Credit Card Payments",
    description: "Fast & encrypted online payment via Givebutter.",
    type: "links",
    links: [
      {
        label: "Register / Contribute Now",
        url: "https://givebutter.com/awards-night-2026-bsfcxz",
        primary: true,
      },
      {
        label: "Alternative Short Link",
        url: "https://bit.ly/Step2StepUpAwardsNight2026",
      },
    ],
  },
];

export const events: EventSection[] = [
  {
    eyebrow: "February 2026",
    title: "YOUTH CONFERENCE - GOPIO International 2026",
    enableHover: false,
    body: [
      'Theme: "The Power of Youth: Creating Impact in an Evolving World." The Global Organisation of People of Indian Origin (GOPIO) International – Youth Council successfully hosted a global webinar on Saturday, 14th February 2026. As Co-chair of the Youth Council, GOPIO International, it was a privilege to host this virtual gathering that brought together young leaders, entrepreneurs, professionals, students, and members of the Indian diaspora from across continents.',
      "The session served as a powerful platform for insight, reflection, and action, highlighting the critical role of youth in shaping an evolving global landscape. Alongside the GOPIO Committee, the webinar featured an impressive line-up of young entrepreneurs, professionals, innovators, and leaders, with active participation from youth across the globe.",
    ],
    // 👉 Add your image paths here:
    image: "/images/events/GOPIO-Feb-2026-Webinar-Flyer01.jpg",
    hoverImage: "/images/events/GOPIO-Feb-2026-Webinar-Flyer02.jpg",
    videoUrl:
      "https://www.youtube.com/embed/ZYIaXR4E_DI?start=497&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3",
    imageAlt: "GOPIO Youth Webinar 2026",
    imageLeft: false,
    tinted: "gold",
    actions: [
      {
        href: "https://www.indialife.us/article/274536",
        label: "READ MORE",
        variant: "link",
      },
    ],
  },
  {
    eyebrow: "",
    title: "INVESTOR CONCLAVE'24",
    body: [
      "Powerful Group platform aims to address this need by providing a unique space for businesses worldwide to connect, share experiences, and collectively elevate the role of diversity in the global business arena. With a focus on Innovation and Investment-based Networking, this event responds to the growing demand for a platform that champions the diversity and empowerment of Entrepreneurs.",
      "Join us at the Investor Conclave'24 in India to witness the magic of the transformative platform that connects, inspires, and elevates entrepreneurs across the globe.",
      "Date & Venue: 13th - 17th December 2024, Mumbai",
    ],
    image: "images/events/powerful-logo-PNG.webp",
    imageAlt: "Powerful Group logo",
    imageLeft: true,
    actions: [
      {
        href: "https://powerfulgroup.com/",
        label: "KNOW MORE",
        variant: "link",
      },
    ],
  },
  {
    eyebrow: "APRIL 2024",
    title: "YOUTH CONFERENCE - GOPIO International 2024",
    body: [
      "Conference Title: Diaspora Youth & Young Achievers - The role they can play in India's Future",
      "Topic for the Session - Leverage the Growth of India",
      "We are witnessing an exciting time in India, with immense growth potential across various industries. In the next 13 months, India is expected to become a $5 trillion economy, and there is no doubt that it possesses the potential to become a $10 trillion economy by 2030.",
      "The Indian diaspora, spread across the globe, holds tremendous power and influence. They have the ability to leverage this growth potential in India and contribute significantly to its development.",
    ],
    image: "images/events/GOPIO-logo.webp",
    imageAlt: "GOPIO logo",
    imageLeft: false,
    tinted: "gold",
    actions: [
      {
        href: "https://indiawest.com/youth-segment-is-a-highlight-at-gopio-international-convention-2024/",
        label: "READ MORE",
        variant: "link",
      },
    ],
  },
  {
    eyebrow: "SUCCESSFUL: MARCH 2023",
    title: "A TRIBUTE TO 24 INSPIRATIONAL WOMEN IN USA",
    body: [
      "This event covered the opening of a tribute, a keynote speech by an industry leader, and an interactive panel discussion that highlights leadership, innovation, and strategic planning within the insurance industry.",
      "Additionally, it includes a segment on the future outlook and challenges faced by the industry, followed by closing remarks that summarize the key takeaways. The session aims to provide a comprehensive overview of current trends and future directions.",
    ],
    image: "images/events/Tribute24IW.webp",
    imageAlt: "Tribute to 24 Inspirational Women event artwork",
    imageLeft: true,
    actions: [
      {
        // href: "/pdfs/A-Trribute-to-24-IW-2023-For-Printing-1.pdf",
        href: "https://drive.google.com/file/d/1S1qnJj7RIABjHKJSmhzn0TI-G5OjCyQk/view",
        label: "Download Event Booklet",
        variant: "download",
      },
      {
        // href: "/pdfs/Step2Stepup-V1.2-7.pdf",
        href: "https://drive.google.com/file/d/1bXw_Kp7IbBBaAP07Y_zEX3qpBvQ-adA5/view",
        label: "Download Event Brochure",
        variant: "download",
      },
    ],
  },
  {
    eyebrow: "SUCCESSFUL",
    title: "A Journey to Important Life Choices Facing AI",
    body: [
      "The event covers the importance of choosing the right career based on passion, aptitude, and opportunities powered by AI. It emphasizes how AI will shape future job markets, highlighting that 47% of current jobs may not exist in the next decade.",
      "The sessions also introduce Lifology, a platform to help individuals navigate career choices relevant to the evolving AI landscape.",
    ],
    image: "images/events/Life-Choices-AI.webp",
    imageAlt: "Life choices facing AI event artwork",
    imageLeft: false,
    tinted: "blue",
    actions: [
      {
        // href: "/pdfs/AI-Future.pdf",
        href: "https://drive.google.com/file/d/12DaFqr-o-Ga1OhQs-h1OUw_-SdkQbbC5/view",
        label: "Download Event Presentation",
        variant: "download",
      },
    ],
  },
  {
    eyebrow: "SUCCESSFUL: JULY 2021",
    title: "A TRIBUTE TO 24 INSPIRATIONAL WOMEN IN USA",
    body: [
      "This event covered the opening of a tribute, a keynote speech by an industry leader, and an interactive panel discussion that highlights leadership, innovation, and strategic planning within the insurance industry.",
      "Additionally, it includes a segment on the future outlook and challenges faced by the industry, followed by closing remarks that summarize the key takeaways. The session aims to provide a comprehensive overview of current trends and future directions.",
    ],
    image: "images/events/Tribute24IW.webp",
    imageAlt: "Tribute to 24 Inspirational Women event artwork",
    imageLeft: true,
    actions: [
      {
        // href: "/pdfs/Tribute24IW.pdf",
        href: "https://drive.google.com/file/d/1i9ML7Bo68hTj_9iD0gkIe4uJ5dshiJPj/view",
        label: "Download Event Booklet",
        variant: "download",
      },
    ],
  },
  {
    eyebrow: "SUCCESSFUL SERIES OF EVENTS",
    title: "GOPIO INLAND EMPIRE CHAPTER",
    body: [
      "GOPIO Inland Empire has successfully organized several notable events, including fundraising initiatives like a reception dinner for the then Consul General of India, and social events such as India's Independence Day celebrations. The chapter also hosted community engagement activities, including health fairs and cultural programs, to promote Indian heritage and support the local community.",
      "Additionally, educational seminars and discussions on relevant topics were conducted to enhance knowledge and foster connections among members.",
    ],
    image: "images/events/GOPIO-logo.webp",
    imageAlt: "GOPIO logo",
    imageLeft: false,
    tinted: "gold",
    actions: [
      {
        // href: "/pdfs/GOPIO-Inland-Empire-Events.pdf",
        href: "https://drive.google.com/file/d/124_aoJmT_XNmxWZjHUffk2I_R4P19pOS/view",
        label: "Download Events Calendar",
        variant: "download",
      },
    ],
  },
];
