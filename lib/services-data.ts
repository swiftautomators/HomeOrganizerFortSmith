export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  pricing: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "home-organization",
    title: "Home Organization",
    description: "Transform your living spaces into organized, functional areas that bring peace and joy to your daily life.",
    longDescription: "Our home organization services create personalized systems that make daily life easier and more enjoyable. We work with you to understand your lifestyle, habits, and goals, then design custom solutions that work for your unique needs. From kitchens to bedrooms, closets to garages, we transform cluttered spaces into organized havens.",
    benefits: [
      "Reduce stress and anxiety with organized living spaces",
      "Save time finding what you need when you need it",
      "Create more functional and beautiful spaces",
      "Maximize storage and eliminate wasted space",
      "Establish sustainable organizing systems",
      "Enjoy a more peaceful home environment",
    ],
    process: [
      "Initial consultation to understand your needs and goals",
      "Comprehensive assessment of your spaces",
      "Custom organizing plan development",
      "Hands-on organization with your input",
      "System setup and labeling",
      "Training on maintaining your new systems",
    ],
    pricing: "Starting at $75/hour with a 3-hour minimum",
    faqs: [
      {
        question: "How long does a typical home organization project take?",
        answer: "Project timelines vary based on the size and complexity of the space. A single room typically takes 4-8 hours, while a whole-home organization can take several sessions over multiple weeks.",
      },
      {
        question: "Do I need to buy organizing products before you arrive?",
        answer: "No! We assess your space first and recommend specific products that will work best for your needs. We can shop with you or handle purchasing on your behalf.",
      },
      {
        question: "Will I have to get rid of my things?",
        answer: "You're always in control of what stays and goes. We provide guidance and support, but all decisions are yours. Our goal is to create systems that work for what you want to keep.",
      },
    ],
  },
  {
    slug: "office-organization",
    title: "Office Organization",
    description: "Boost productivity with organized workspaces designed for efficiency and professional success.",
    longDescription: "An organized office is essential for productivity and professional success. Whether you work from home or manage a business office, we create efficient systems that streamline your workflow, reduce stress, and help you focus on what matters most. Our solutions are practical, professional, and customized to your work style.",
    benefits: [
      "Increase productivity and efficiency",
      "Reduce time wasted searching for documents",
      "Create a professional, impressive workspace",
      "Improve focus and reduce distractions",
      "Streamline workflow and processes",
      "Reduce work-related stress",
    ],
    process: [
      "Workplace assessment and workflow analysis",
      "Custom organization plan development",
      "Filing system setup (physical and digital)",
      "Desk and supply organization",
      "Process documentation",
      "Maintenance training and follow-up",
    ],
    pricing: "Starting at $85/hour with a 3-hour minimum",
    faqs: [
      {
        question: "Can you help with digital organization too?",
        answer: "Yes! We provide guidance on digital file organization, email management, and productivity tools to complement your physical workspace organization.",
      },
      {
        question: "Do you work with businesses or just home offices?",
        answer: "We work with both! Our services are perfect for home offices, small businesses, corporate offices, and professional practices.",
      },
      {
        question: "How do you handle confidential documents?",
        answer: "We treat all client information with strict confidentiality. We can sign NDAs and follow your organization's security protocols.",
      },
    ],
  },
  {
    slug: "decluttering",
    title: "Decluttering Services",
    description: "Let go of what no longer serves you with compassionate guidance through the decluttering process.",
    longDescription: "Decluttering is about more than just getting rid of stuff—it's about creating space for what truly matters in your life. We provide compassionate, non-judgmental support as you make decisions about your belongings. Our process is respectful, thoughtful, and designed to help you let go with confidence and peace of mind.",
    benefits: [
      "Create more space in your home",
      "Reduce overwhelm and decision fatigue",
      "Discover items you forgot you had",
      "Simplify cleaning and maintenance",
      "Prepare for downsizing or moving",
      "Experience the freedom of less",
    ],
    process: [
      "Compassionate consultation and goal setting",
      "Room-by-room decluttering sessions",
      "Decision-making support and guidance",
      "Sorting and categorizing items",
      "Donation and disposal coordination",
      "Organization of remaining items",
    ],
    pricing: "Starting at $75/hour with a 4-hour minimum",
    faqs: [
      {
        question: "What if I have trouble letting go of things?",
        answer: "We understand! Our approach is patient and supportive. We help you work through the emotional aspects of decluttering at your own pace.",
      },
      {
        question: "What happens to the items I decide to let go?",
        answer: "We help coordinate donations to local charities, schedule pickups, and ensure items are disposed of responsibly. We can provide donation receipts for tax purposes.",
      },
      {
        question: "Can you help with hoarding situations?",
        answer: "We have experience with challenging situations and can provide referrals to mental health professionals when appropriate. We work collaboratively to create a safe, supportive environment.",
      },
    ],
  },
  {
    slug: "moving-assistance",
    title: "Moving Assistance",
    description: "Make your move stress-free with expert packing, unpacking, and organization services.",
    longDescription: "Moving doesn't have to be stressful. Our moving assistance services handle everything from pre-move decluttering to post-move setup, ensuring your new space is organized from day one. We make the transition smooth, efficient, and as stress-free as possible, so you can focus on settling into your new home.",
    benefits: [
      "Reduce moving stress significantly",
      "Start fresh in an organized new home",
      "Save time with efficient packing systems",
      "Prevent moving unnecessary items",
      "Professional packing reduces damage risk",
      "Faster settling-in process",
    ],
    process: [
      "Pre-move consultation and planning",
      "Decluttering and downsizing assistance",
      "Organized packing with labeling system",
      "Moving day coordination",
      "Unpacking and space setup",
      "Organization system implementation",
    ],
    pricing: "Starting at $80/hour with packages available",
    faqs: [
      {
        question: "How far in advance should I book moving services?",
        answer: "We recommend booking 4-6 weeks before your move date, though we can often accommodate shorter timelines.",
      },
      {
        question: "Do you actually move the boxes, or just pack them?",
        answer: "We focus on organizing, packing, and unpacking. We partner with trusted moving companies for the actual transportation.",
      },
      {
        question: "Can you help me decide what to take to my new place?",
        answer: "Absolutely! We help you evaluate what fits your new space and lifestyle, making downsizing decisions easier.",
      },
    ],
  },
  {
    slug: "senior-downsizing",
    title: "Senior Downsizing",
    description: "Compassionate support for seniors transitioning to smaller living spaces with dignity and ease.",
    longDescription: "Downsizing in later life is an emotional journey that deserves compassionate, patient support. We specialize in helping seniors and their families navigate this transition with dignity, respect, and care. Our process honors your lifetime of memories while creating a comfortable, organized new chapter.",
    benefits: [
      "Maintain dignity and independence",
      "Preserve important memories and items",
      "Reduce family stress and conflict",
      "Smooth transition to new living space",
      "Professional estate coordination",
      "Emotional support throughout process",
    ],
    process: [
      "Family meeting and goal setting",
      "Gentle decluttering with memory preservation",
      "Estate sale or donation coordination",
      "Floor plan and space planning for new home",
      "Supervised moving and setup",
      "Final organization and settling assistance",
    ],
    pricing: "Starting at $75/hour with packages available",
    faqs: [
      {
        question: "How do you help with the emotional aspects of downsizing?",
        answer: "We work at your pace with patience and understanding. We help preserve memories through photos and careful selection of meaningful items.",
      },
      {
        question: "Can you work with family members who live far away?",
        answer: "Yes! We communicate via phone, email, or video calls to keep everyone informed and involved in the process.",
      },
      {
        question: "Do you coordinate estate sales?",
        answer: "We can help prepare for estate sales and connect you with reputable estate sale companies in the Fort Smith area.",
      },
    ],
  },
  {
    slug: "time-management",
    title: "Time Management Systems",
    description: "Develop personalized systems to manage your time effectively and accomplish your goals.",
    longDescription: "Good organization extends beyond physical spaces to how you manage your time. We help you create sustainable time management systems that align with your goals, values, and lifestyle. Learn to prioritize effectively, establish routines, and accomplish what matters most to you.",
    benefits: [
      "Accomplish more of what matters",
      "Reduce stress and overwhelm",
      "Better work-life balance",
      "Increased productivity",
      "Clear priorities and goals",
      "Sustainable daily routines",
    ],
    process: [
      "Current habits and goals assessment",
      "Time audit and analysis",
      "Custom system development",
      "Tool and app recommendations",
      "Routine implementation support",
      "Ongoing coaching and adjustment",
    ],
    pricing: "Starting at $85/hour or package rates available",
    faqs: [
      {
        question: "How is this different from life coaching?",
        answer: "We focus specifically on practical systems and tools for managing time and tasks, with emphasis on implementation rather than broad life coaching.",
      },
      {
        question: "What if I've tried time management systems before and failed?",
        answer: "We create systems tailored to YOUR unique style and needs, not one-size-fits-all approaches. We find what works for you specifically.",
      },
      {
        question: "How long does it take to see results?",
        answer: "Most clients notice improvements within 2-3 weeks of implementing new systems, with continued refinement over time.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
