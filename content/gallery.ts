import { images, type SiteImage } from "./images";
import {
  BookOpen,
  Building2,
  Flag,
  Medal,
  Monitor,
  PartyPopper,
  School,
  Shapes,
  Sparkles,
  Trees,
  Trophy,
} from "lucide-react";

export const galleryCategories = ["Campus", "Classroom", "Activities", "Celebrations", "Sports"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

/**
 * Tile footprint in the editorial grid:
 *   feature  2 × 2   ·   wide 2 × 1   ·   tall 1 × 2   ·   standard 1 × 1
 * Photos are cropped to the tile (object-cover) and shown whole in the lightbox.
 */
export type GallerySize = "feature" | "wide" | "tall" | "standard";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  caption: string;
  size: GallerySize;
  image: SiteImage;
}

/**
 * GALLERY PHOTOS
 * Add a photo by putting it in /public/images/gallery and setting `src` on an
 * entry (e.g. src: "/images/gallery/sports-day.jpg"), or append new entries.
 * Filters, grid and lightbox update automatically.
 */
export const galleryItems: GalleryItem[] = [
  { id: "campus-front", category: "Campus", caption: "The school campus, Jagda", size: "feature", image: images.campus },
  { id: "classroom-1", category: "Classroom", caption: "Learning together in class", size: "tall", image: images.classroom },
  { id: "arts-1", category: "Activities", caption: "Creative arts", size: "standard", image: images.creativeArts },
  { id: "sports-1", category: "Sports", caption: "Physical education", size: "wide", image: images.sports },
  { id: "celebration-1", category: "Celebrations", caption: "A school celebration", size: "standard", image: images.celebrations },
  { id: "smart-class", category: "Classroom", caption: "Smart classroom", size: "standard", image: images.smartClassroom },
  { id: "entrance", category: "Campus", caption: "School entrance", size: "tall", image: images.campusEntrance },
  {
    id: "craft",
    category: "Activities",
    caption: "Making and building",
    size: "standard",
    image: { alt: "Students working on a craft project", label: "Craft", tone: "sky", icon: Shapes },
  },
  { id: "programme", category: "Celebrations", caption: "Cultural programme", size: "feature", image: images.culturalProgramme },
  {
    id: "sports-day",
    category: "Sports",
    caption: "Games and team play",
    size: "standard",
    image: { alt: "Students playing a team game", label: "Team games", tone: "gold", icon: Medal },
  },
  {
    id: "reading",
    category: "Classroom",
    caption: "Reading time",
    size: "wide",
    image: { alt: "Children reading in class", label: "Reading", tone: "ivory", icon: BookOpen },
  },
  {
    id: "grounds",
    category: "Campus",
    caption: "Around the campus",
    size: "standard",
    image: { alt: "Open space on the school campus", label: "Campus grounds", tone: "sky", icon: Trees },
  },
  { id: "bagless", category: "Activities", caption: "Bagless Day", size: "tall", image: images.baglessDays },
  {
    id: "assembly",
    category: "Celebrations",
    caption: "Special assembly",
    size: "standard",
    image: { alt: "Students at a special school assembly", label: "Assembly", tone: "navy", icon: Flag },
  },
  {
    id: "track",
    category: "Sports",
    caption: "On the field",
    size: "wide",
    image: { alt: "Students taking part in a race", label: "Athletics", tone: "ivory", icon: Trophy },
  },
  {
    id: "lab",
    category: "Classroom",
    caption: "Hands-on discovery",
    size: "standard",
    image: { alt: "Students carrying out a simple experiment", label: "Discovery", tone: "gold", icon: Sparkles },
  },
  {
    id: "building",
    category: "Campus",
    caption: "School building",
    size: "tall",
    image: { alt: "Saint Mary’s School building", label: "School building", tone: "ivory", icon: Building2 },
  },
  {
    id: "smart-2",
    category: "Classroom",
    caption: "Learning with technology",
    size: "standard",
    image: { alt: "A lesson using classroom technology", label: "Technology", tone: "navy", icon: Monitor },
  },
  {
    id: "school-day",
    category: "Activities",
    caption: "A day at school",
    size: "standard",
    image: { alt: "A typical school day at Saint Mary’s", label: "School day", tone: "navy", icon: School },
  },
  {
    id: "festival",
    category: "Celebrations",
    caption: "Festive celebrations",
    size: "wide",
    image: { alt: "Students celebrating a festival at school", label: "Festivals", tone: "sky", icon: PartyPopper },
  },
];
