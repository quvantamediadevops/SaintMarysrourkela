import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Calculator,
  Dumbbell,
  FileSignature,
  FlaskConical,
  Globe2,
  HandHeart,
  Languages,
  Monitor,
  Palette,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import type { ImageId } from "./images";

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const aboutCopy = {
  intro:
    "Nestled in the vibrant community of Jagda, Raurkela, Saint Mary’s School is more than just an educational institution — it is a nurturing sanctuary for young, curious minds.",
  standard:
    "We stand proudly as a premier institution offering high-quality ICSE curriculum standards packaged within an accessible, affordable framework.",
  joyful: "At Saint Mary’s, learning is an active, joyful exploration.",
  dismantle:
    "From our interactive, technology-enabled smart classrooms to our innovative ‘Bagless Days,’ we purposefully dismantle old-school stress.",
  replace: "We replace it with creative arts, physical development, and experiential life skills.",
  bridge:
    "We bridge the gap between traditional ethics and modern 21st-century capabilities. This ensures every child develops a resilient, confident character prepared to thrive anywhere in the world.",
};

/** The shift in emphasis — worded respectfully, as a change of balance. */
export const approachShift = {
  fromLabel: "Less of",
  from: ["Pressure", "Memorisation", "Routine for its own sake"],
  toLabel: "More of",
  to: ["Curiosity", "Experience", "Creativity", "Character"],
};

/* -------------------------------------------------------------------------- */
/*  Heritage                                                                  */
/* -------------------------------------------------------------------------- */

export const heritage = {
  lines: ["Growing with generations.", "Preparing for tomorrow."],
  body: "Since 1988, families in Jagda have trusted Saint Mary’s with the most important years of their children’s lives. The values have stayed constant; the classrooms, tools and ways of learning have grown with the times.",
};

/* -------------------------------------------------------------------------- */
/*  Learning philosophy (About page)                                          */
/* -------------------------------------------------------------------------- */

export interface Pillar {
  title: string;
  icon: LucideIcon;
  summary: string;
  practices: string[];
}

export const pillars: Pillar[] = [
  {
    title: "Academics",
    icon: BookOpen,
    summary: "A strong ICSE foundation, taught with care and made to make sense.",
    practices: ["ICSE academic foundations", "Technology-enabled smart classrooms"],
  },
  {
    title: "Character",
    icon: ShieldCheck,
    summary: "Honesty, kindness and responsibility practised every day, not just taught.",
    practices: ["Character building", "Traditional values in daily life"],
  },
  {
    title: "Creativity",
    icon: Palette,
    summary: "Room for children to make, imagine, perform and explore.",
    practices: ["Creative arts", "Bagless Days"],
  },
  {
    title: "Confidence",
    icon: Sparkles,
    summary: "Children who are capable, healthy and ready for the world beyond school.",
    practices: ["Physical development", "Life skills & experiential learning"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Beyond the classroom (Home)                                               */
/* -------------------------------------------------------------------------- */

export interface Feature {
  id: string;
  title: string;
  text: string;
  image: ImageId;
}

/** Order matters: [0] is the large feature, [5] the wide closing feature. */
export const beyondClassroom: Feature[] = [
  {
    id: "smart-learning",
    title: "Smart Learning",
    text: "Interactive, technology-enabled classrooms make ideas visual and lessons come alive.",
    image: "smartClassroom",
  },
  {
    id: "creative-arts",
    title: "Creative Arts",
    text: "Drawing, painting, craft and performance give every child a way to express themselves.",
    image: "creativeArts",
  },
  {
    id: "physical",
    title: "Physical Development",
    text: "Movement, games and sport build healthy bodies and team spirit.",
    image: "sports",
  },
  {
    id: "bagless",
    title: "Bagless Days",
    text: "Selected days set textbooks aside for hands-on, collaborative learning.",
    image: "baglessDaysDetail",
  },
  {
    id: "life-skills",
    title: "Life Skills",
    text: "Practical, everyday skills that make children capable and independent.",
    image: "lifeSkills",
  },
  {
    id: "character",
    title: "Character",
    text: "Honesty, kindness, social responsibility and civic pride — practised in daily school life, not just taught.",
    image: "values",
  },
];

/* -------------------------------------------------------------------------- */
/*  Bagless Days                                                              */
/* -------------------------------------------------------------------------- */

export const bagless = {
  intro:
    "On selected Bagless Days, children leave the heavy school bag at home. The day is given to learning that happens through hands, movement, conversation and imagination — the kind that stays with them.",
  verbs: [
    { word: "Create", text: "Art, craft and making" },
    { word: "Move", text: "Physical development" },
    { word: "Explore", text: "Experiential learning" },
    { word: "Collaborate", text: "Working together" },
    { word: "Experience", text: "Practical life skills" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Principal's message                                                       */
/* -------------------------------------------------------------------------- */

export const principalMessage = {
  salutation: "Dear Parents, Students, and Visitors,",
  welcome: "Welcome to the digital home of Saint Mary’s School, Jagda.",
  pullQuote:
    "The true purpose of education is not merely to load a child’s memory with facts, but to kindle a lifelong curiosity and a compassionate heart.",
  paragraphs: [
    "In today’s fast-paced, competitive landscape, it is easy to focus entirely on scores. However, we believe that academic brilliance is incomplete without sound moral values and emotional resilience.",
    "Our daily goal is simple: to create a safe, highly protective environment where your children love to arrive every single morning.",
    "Every student walking through our doors possesses a distinct spark. Whether they are analytical thinkers, creative artists, or future athletes, our experienced faculty provides the individual care required to guide that potential into excellence.",
    "We consider education to be a vital, shared partnership between the school and the home.",
  ],
  closing:
    "Together, let us raise a generation of kind, focused, and innovative leaders who will build a better tomorrow.",
  signOff: "Warm regards,",
  /** Add the principal’s name here when available. Never guess it. */
  name: null as string | null,
  role: "Principal",
  institution: "Saint Mary’s School, Jagda",
};

/* -------------------------------------------------------------------------- */
/*  Vision & Mission                                                          */
/* -------------------------------------------------------------------------- */

export const vision =
  "To build a vibrant, student-centered ecosystem where academic discipline harmoniously blends with creative freedom, molding confident, empathetic, and future-ready individuals who lead with character.";

export const mission: { title: string; text: string }[] = [
  {
    title: "Holistic Excellence",
    text: "To offer an immersive, modern ICSE education that balances strong academic benchmarks with vibrant co-curricular focus.",
  },
  {
    title: "Value-First Foundation",
    text: "To intentionally seed the vital values of honesty, social responsibility, kindness, and deep civic pride into daily life.",
  },
  {
    title: "Joyful Learning Space",
    text: "To maintain a highly encouraging, technologically advanced, and secure playground for natural curiosity to thrive.",
  },
  {
    title: "Inclusive Accessibility",
    text: "To ensure top-tier foundational schooling remains highly accessible and affordable to all families across Raurkela.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Academics                                                                 */
/* -------------------------------------------------------------------------- */

export interface Stage {
  id: string;
  name: string;
  short: string;
  range: string;
  headline: string;
  body: string;
  focus: string[];
}

export const stages: Stage[] = [
  {
    id: "foundation",
    name: "Foundation Years",
    short: "Nursery",
    range: "Nursery & Pre-Primary",
    headline: "Learning to love learning.",
    body: "The first years are about security, wonder and routine. Children learn through play, stories, songs, movement and hands-on activity, building early language, number sense and the confidence to explore.",
    focus: ["Early language & listening", "Number sense through play", "Motor skills & movement", "Social habits & sharing"],
  },
  {
    id: "primary",
    name: "Primary School",
    short: "Primary",
    range: "Standards I – V",
    headline: "Strong roots in every subject.",
    body: "Children build firm foundations in reading, writing and mathematics, and begin to discover science and the world around them — with plenty of room for art, activity and questions.",
    focus: ["Reading & writing fluency", "Core mathematics", "Environmental studies", "Creative & physical activity"],
  },
  {
    id: "middle",
    name: "Middle School",
    short: "Middle",
    range: "Standards VI – VIII",
    headline: "From knowing to understanding.",
    body: "Subjects deepen and become more distinct. Students learn to reason, connect ideas and apply what they know — developing study habits and independence for the years ahead.",
    focus: ["Subject-specific learning", "Practical understanding", "Project & group work", "Independent study habits"],
  },
  {
    id: "secondary",
    name: "Secondary School",
    short: "Secondary",
    range: "Standards IX – X",
    headline: "Prepared, focused, confident.",
    body: "The ICSE years ask for focus and depth. Students are guided carefully through the curriculum and assessments, while character and wellbeing remain as important as marks.",
    focus: ["ICSE curriculum depth", "Structured assessment preparation", "Focused study & revision", "Responsibility & leadership"],
  },
];

export const subjectAreas: { title: string; icon: LucideIcon; text: string }[] = [
  { title: "Language development", icon: Languages, text: "Reading, writing, speaking and listening — the base of all learning." },
  { title: "Mathematics", icon: Calculator, text: "Number, logic and problem-solving, built step by step." },
  { title: "Science", icon: FlaskConical, text: "Curiosity, observation and practical understanding of how things work." },
  { title: "Social studies", icon: Globe2, text: "History, geography and civics — understanding people and places." },
  { title: "Creative learning", icon: Palette, text: "Art, craft and expression woven through the school week." },
  { title: "Technology", icon: Monitor, text: "Smart classrooms that make lessons visual and interactive." },
  { title: "Physical education", icon: Dumbbell, text: "Movement, games and healthy habits for growing bodies." },
  { title: "Character development", icon: HandHeart, text: "Values, empathy and responsibility in everyday school life." },
];

export const learningApproach: { title: string; text: string }[] = [
  { title: "Classroom learning", text: "Clear teaching, attentive teachers and classrooms where questions are welcome." },
  { title: "Smart classrooms", text: "Interactive, technology-enabled lessons that help ideas come alive." },
  { title: "Practical understanding", text: "Learning by doing — so concepts are understood, not just memorised." },
  { title: "Assessments", text: "Regular, age-appropriate assessment that shows progress and guides support." },
];

/* -------------------------------------------------------------------------- */
/*  Admissions                                                                */
/* -------------------------------------------------------------------------- */

export const admissionSteps: { title: string; detail: string; text: string }[] = [
  {
    title: "Discover",
    detail: "Learn about the school",
    text: "Explore our approach, academics and student life, and note any questions you’d like to ask.",
  },
  {
    title: "Visit",
    detail: "Visit the campus",
    text: "Come to the school in Jagda, see where your child will learn and speak with the school office.",
  },
  {
    title: "Apply",
    detail: "Collect & complete the form",
    text: "Collect the admission form from the school office, complete it and submit the information requested.",
  },
  {
    title: "Review",
    detail: "School review",
    text: "The school reviews each application carefully and confirms admission in line with its process.",
  },
  {
    title: "Begin",
    detail: "Admission confirmation",
    text: "Once admission is confirmed by the school, your child’s journey at Saint Mary’s begins.",
  },
];

export interface RequirementGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const admissionRequirements: RequirementGroup[] = [
  {
    title: "Student Details",
    icon: User,
    items: [
      "Name of pupil",
      "Date of birth",
      "Age",
      "Nationality",
      "Religion",
      "Mother tongue",
      "Category, where applicable",
      "Class in which admission is sought",
    ],
  },
  {
    title: "Parent / Guardian",
    icon: Users,
    items: ["Mother’s name", "Father’s or guardian’s name", "Father’s / guardian’s occupation", "Monthly income"],
  },
  {
    title: "Contact",
    icon: Phone,
    items: ["Present address", "Permanent address", "Telephone number"],
  },
  {
    title: "Previous School",
    icon: School,
    items: ["School previously attended", "Previous class", "Duration at previous school"],
  },
  {
    title: "Declaration",
    icon: FileSignature,
    items: ["Declaration", "Signature"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Student life                                                              */
/* -------------------------------------------------------------------------- */

export interface LifeStory {
  id: string;
  title: string;
  text: string;
  image: ImageId;
}

export const lifeStories: LifeStory[] = [
  {
    id: "arts",
    title: "Creative Arts",
    text: "Drawing, painting, craft and making give children a place to express ideas and take pride in their own work.",
    image: "creativeArts",
  },
  {
    id: "sports",
    title: "Sports & Movement",
    text: "Games, movement and physical education build healthy bodies, team spirit and the resilience to keep trying.",
    image: "sports",
  },
  {
    id: "bagless",
    title: "Bagless Days",
    text: "Selected days set the textbooks aside for creative, practical and collaborative learning experiences.",
    image: "baglessDays",
  },
  {
    id: "experiential",
    title: "Experiential Learning",
    text: "Hands-on activities turn lessons into experiences children remember — and understand.",
    image: "experientialLearning",
  },
  {
    id: "celebrations",
    title: "Celebrations",
    text: "Shared occasions through the year bring the school community together and give children a stage to shine.",
    image: "celebrations",
  },
  {
    id: "life-skills",
    title: "Life Skills",
    text: "Practical, everyday skills that help children become capable, independent and responsible.",
    image: "lifeSkills",
  },
  {
    id: "values",
    title: "Values & Character",
    text: "Honesty, kindness, social responsibility and civic pride are part of daily school life.",
    image: "values",
  },
];
