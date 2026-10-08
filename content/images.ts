import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  Drum,
  Footprints,
  HandHeart,
  Lightbulb,
  Monitor,
  Palette,
  PartyPopper,
  School,
  Sprout,
  Trophy,
  User,
  Users,
} from "lucide-react";

/**
 * IMAGE REGISTRY — the only place photo paths live.
 * ---------------------------------------------------------------------------
 * To use a real photograph:
 *   1. Copy it into /public/images (e.g. /public/images/hero.jpg)
 *   2. Set `src: "/images/hero.jpg"` on the matching entry below
 *   3. Make sure `alt` describes what is actually in the photo
 *
 * Every slot keeps a fixed aspect ratio in its layout, so swapping a
 * placeholder for a photo never shifts the page.
 *
 * Recommended sizes (JPEG/WebP, ~80% quality):
 *   hero, campus, baglessDays ........ 2400 × 3000 (portrait) or 2400 × 1800
 *   principal ......................... 1600 × 2000 portrait
 *   everything else ................... 1800px on the long edge
 */

export type ImageTone = "navy" | "sky" | "gold" | "ivory";

export interface SiteImage {
  /** Public path, e.g. "/images/hero.jpg". Leave undefined to show the placeholder. */
  src?: string;
  alt: string;
  /** Subject named on the placeholder. */
  label: string;
  tone: ImageTone;
  icon: LucideIcon;
}

export const images = {
  /* Homepage hero ------------------------------------------------------- */
  hero: {
    alt: "Students at Saint Mary’s School campus in Jagda, Raurkela",
    label: "Hero photograph",
    tone: "navy",
    icon: School,
  },
  heroDetail: {
    alt: "Children learning together in a classroom at Saint Mary’s School",
    label: "Classroom detail",
    tone: "sky",
    icon: BookOpen,
  },

  /* Campus & school ----------------------------------------------------- */
  campus: {
    alt: "Saint Mary’s School campus, Jagda, Raurkela",
    label: "Campus",
    tone: "ivory",
    icon: Building2,
  },
  campusEntrance: {
    alt: "Entrance of Saint Mary’s School, Plot No. JD-119, Jagda, Raurkela",
    label: "School entrance",
    tone: "navy",
    icon: Building2,
  },
  community: {
    alt: "Students of Saint Mary’s School gathered together on campus",
    label: "School community",
    tone: "ivory",
    icon: Users,
  },
  admissionsVisit: {
    alt: "A family visiting Saint Mary’s School",
    label: "Campus visit",
    tone: "ivory",
    icon: Users,
  },

  /* Learning ------------------------------------------------------------ */
  classroom: {
    alt: "A lesson in progress in a Saint Mary’s classroom",
    label: "Classroom",
    tone: "sky",
    icon: BookOpen,
  },
  smartClassroom: {
    alt: "A technology-enabled smart classroom at Saint Mary’s School",
    label: "Smart classroom",
    tone: "sky",
    icon: Monitor,
  },
  experientialLearning: {
    alt: "Students learning through a hands-on activity",
    label: "Experiential learning",
    tone: "sky",
    icon: Lightbulb,
  },

  /* Bagless Days -------------------------------------------------------- */
  baglessDays: {
    alt: "Students working on a creative activity during a Bagless Day",
    label: "Bagless Day",
    tone: "gold",
    icon: Palette,
  },
  baglessDaysDetail: {
    alt: "Students taking part in an outdoor activity during a Bagless Day",
    label: "Bagless Day · Outdoors",
    tone: "sky",
    icon: Footprints,
  },

  /* People -------------------------------------------------------------- */
  principal: {
    alt: "Principal of Saint Mary’s School, Jagda",
    label: "Principal’s portrait",
    tone: "ivory",
    icon: User,
  },

  /* Student life -------------------------------------------------------- */
  creativeArts: {
    alt: "Students exploring painting and craft",
    label: "Creative arts",
    tone: "gold",
    icon: Palette,
  },
  sports: {
    alt: "Students during sports and physical education",
    label: "Sports & movement",
    tone: "navy",
    icon: Trophy,
  },
  celebrations: {
    alt: "A school celebration at Saint Mary’s School",
    label: "Celebrations",
    tone: "ivory",
    icon: PartyPopper,
  },
  lifeSkills: {
    alt: "Students practising everyday life skills",
    label: "Life skills",
    tone: "ivory",
    icon: Sprout,
  },
  values: {
    alt: "Students working together and helping one another",
    label: "Values & character",
    tone: "gold",
    icon: HandHeart,
  },
  culturalProgramme: {
    alt: "A cultural programme on the school stage",
    label: "Cultural programme",
    tone: "gold",
    icon: Drum,
  },
} satisfies Record<string, SiteImage>;

export type ImageId = keyof typeof images;
