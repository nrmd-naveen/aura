import {
  BulbIcon,
  ClickIcon,
  Contents,
  Digitals,
  Editings,
  Instagram,
  Logos,
  MobileIcon,
  ShineIcon,
  Shoots,
  Socials,
  ThunderIcon,
  Websites,
  WindowsIcon,
} from "../svg/Icons";

export const servicesData = [
  {
    title: "Logo Design",
    paragraph:
      "Create a unique, professional logo that defines your brand's identity and leaves a lasting impression.",
    icon: <Logos />,
  },
  {
    title: "Website Development",
    paragraph:
      "Build a responsive, user-friendly website designed to enhance your online presence and provide a seamless experience.",
    icon: <Websites />,
  },
  {
    title: "Digital / Influencer Marketing",
    paragraph:
      "Drive brand awareness and engagement through targeted digital campaigns, content creation, and influencer partnerships.",
    icon: <Digitals />,
  },
  {
    title: "Content Writing",
    paragraph:
      "Craft high-quality, engaging content tailored to your audience, enhancing your brand’s voice and online presence.",
    icon: <Contents />,
  },
  {
    title: "Video Editing",
    paragraph:
      "Transform raw footage into polished, engaging videos that capture attention and convey your message effectively.",
    icon: <Editings />,
  },
  {
    title: "Advertisement Shoot",
    paragraph:
      "Capture stunning visuals through professional shoots that communicate your brand’s story and attract attention.",
    icon: <Shoots />,
  },
  {
    title: "Social Media Management",
    paragraph:
      "Enhance your brand’s presence by creating and managing engaging content across social media platforms.",
    icon: <Socials />,
  },
  {
    title: "Meta / Google Ads",
    paragraph:
      "Reach your audience with targeted ads on Meta and Google, maximizing ROI through optimized campaigns.",
    icon: <ClickIcon />,
  },
];

export const cardData = [
  {
    title: "Tailored Solutions for Success",
    paragraph:
      "We understand your unique vision and create strategies that align with your goals.",
    icon: <BulbIcon />,
  },
  {
    title: "Data-Driven Growth Strategies",
    paragraph:
      "We use analytics to drive smart decisions and deliver measurable results.",
    icon: <ClickIcon />,
  },
  {
    title: "Adaptability to Changing Trends",
    paragraph:
      "We stay ahead of trends, keeping your brand relevant and competitive.",
    icon: <ThunderIcon />,
  },
  {
    title: "Delivering Impactful Results",
    paragraph:
      "Our strategies focus on driving meaningful, lasting impact for your brand.",
    icon: <WindowsIcon />,
  },
  {
    title: "Creative Excellence That Shines",
    paragraph:
      "Our innovative designs make your brand stand out and leave a lasting impression.",
    icon: <ShineIcon />,
  },
  {
    title: "Building Long-Term Relationships",
    paragraph:
      "We prioritize lasting partnerships that evolve with your business for sustained success.",
    icon: <MobileIcon />,
  },
];

export const testiData = [
  {
    icon: <Instagram />,
    review:
      "Thanks to Aura's design and marketing expertise, we've stood out and attracted more patients. Our brand is much stronger now!",
    name: "Dr. Sai",
    company: "Sai Dentistry",
  },
  {
    icon: <Instagram />,
    review:
      "The team at Aura took my brand to new heights. My online presence has exploded, and engagement is off the charts!",
    name: "Panniduvom Official",
    company: "Influencer",
  },
  {
    icon: <Instagram />,
    review:
      "Aura helped transform our brand. We've seen a huge increase in client inquiries, and we're thrilled with the results!",
    name: "Best Interior Team",
    company: "Best Interior",
  },
  {
    icon: <Instagram />,
    review:
      "Working with Aura was a game-changer. We've connected with more students, and our consultations have grown dramatically.",
    name: "Noha",
    company: "Overseas Educational Consultant",
  },
  {
    icon: <Instagram />,
    review:
      "Thanks to Aura’s incredible design and marketing, my bookings have gone through the roof, and my brand looks amazing.",
    name: "Harsh",
    company: "Harsh Makeup Studio",
  },
  {
    icon: <Instagram />,
    review:
      "Aura helped us grow in ways we never expected. Our brand is now more visible, and membership numbers are climbing fast.",
    name: "Xeno Fitness Club Team",
    company: "Xeno Fitness Club",
  },
  // below are just copied
  {
    icon: <Instagram />,
    review:
      "Thanks to Aura's design and marketing expertise, we've stood out and attracted more patients. Our brand is much stronger now!",
    name: "Dr. Sai",
    company: "Sai Dentistry",
  },
  {
    icon: <Instagram />,
    review:
      "The team at Aura took my brand to new heights. My online presence has exploded, and engagement is off the charts!",
    name: "Panniduvom Official",
    company: "Influencer",
  },
  {
    icon: <Instagram />,
    review:
      "Aura helped transform our brand. We've seen a huge increase in client inquiries, and we're thrilled with the results!",
    name: "Best Interior Team",
    company: "Best Interior",
  },
];

export const scrollToSection = (
  sectionRef: React.RefObject<HTMLInputElement>
): void => {
  window.scrollTo({
    //@ts-ignore
    top: sectionRef.current.offsetTop - 120,
    behavior: "smooth",
  });
};
