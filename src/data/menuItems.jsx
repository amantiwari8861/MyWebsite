import React from "react";
import {
  Code,
  Layout as LayoutIcon,
  Smartphone,
  Cloud,
  Layers,
  Database,
  FileText,
  Search,
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  User,
  Monitor,
} from "lucide-react";

export const menuItems = {
  services: {
    label: "Services",
    isMega: false,
    links: [
      {
        name: "Manpower Supply",
        to: "/services/manpower-supply",
        icon: <Briefcase size={16} />,
      },
      {
        name: "IT Services",
        to: "/services/it-services",
        icon: <Monitor size={16} />,
      },
      {
        name: "Digital Marketing",
        to: "/services/digital-marketing",
        icon: <Globe size={16} />,
      },
      {
        name: "Training",
        to: "/services/training-skill-development",
        icon: <GraduationCap size={16} />,
      },
    ],
  },
  whatwethink: {
    label: "What We Think",
    isMega: false,
    links: [
      {
        name: "Blogs",
        to: "/blogs",
        icon: <Globe size={16} />
      },
      {
        name: "Case Studies",
        to: "/case-studies",
        icon: <Briefcase size={16} />
      },
      {
        name: "Whitepapers",
        to: "/whitepapers",
        icon: <GraduationCap size={16} />
      }
    ]
  },
  careers: {
    label: "Careers",
    links: [
      {
        name: "Current Openings",
        to: "/job-openings",
        icon: <Briefcase size={16} />,
      },
      {
        name: "Internship Programs",
        to: "/early-careers",
        icon: <GraduationCap size={16} />,
      },
    ],
  },
};
