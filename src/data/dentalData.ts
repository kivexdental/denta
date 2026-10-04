export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  tag: string;
  priceEstimate: string;
  duration: string;
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  image: string;
  bio: string;
  education: string;
  availableDays: string[];
  specialties: string[];
}

export interface Review {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Pricing & Insurance';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'preventive',
    title: 'Preventive Care',
    shortDesc: 'Protect your smile with regular check-ups, ultrasonic hygiene, and comprehensive oral cancer screenings.',
    fullDesc: 'State-of-the-art preventative dentistry utilizing digital low-radiation radiography, gentle ultrasonic scaling, and personalized remineralization protocols.',
    icon: 'Shield',
    tag: 'Essential Care',
    priceEstimate: '$95 - $180',
    duration: '45 mins',
    benefits: ['Ultrasonic deep cleaning', 'Digital caries detection', 'Fluoride enamel seal', 'Gum vitality assessment']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDesc: 'Strong, natural-looking implants engineered with biocompatible titanium and zirconia to restore your smile for life.',
    fullDesc: 'Guided 3D robotic precision implants for single tooth replacements or full-arch restorations, providing unmatched bite strength and jaw preservation.',
    icon: 'Hammer',
    tag: 'Advanced Restoration',
    priceEstimate: '$1,200 - $2,800',
    duration: '60 - 90 mins',
    benefits: ['Lifetime bone integration', '100% natural appearance', '3D surgical guide precision', 'Painless local anesthesia']
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Enhance your aesthetic smile with ultra-thin porcelain veneers, composite contouring, and smile redesigns.',
    fullDesc: 'Custom handcrafted porcelain veneers and digital smile simulations designed around your facial proportions and natural teeth undertones.',
    icon: 'Sparkles',
    tag: 'Aesthetic Elite',
    priceEstimate: '$450 - $1,500',
    duration: '60 mins',
    benefits: ['Digital smile simulation', 'Minimal enamel prep', 'Stain-resistant porcelain', 'Instant symmetry correction']
  },
  {
    id: 'restorative',
    title: 'Restorative Care',
    shortDesc: 'Restore damaged teeth and eliminate discomfort with tooth-colored biomimetic fillings, inlays, and ceramic crowns.',
    fullDesc: 'High-strength ceramic restorations that replicate natural tooth flexure and density, preventing recurrence of tooth decay.',
    icon: 'Activity',
    tag: 'Structural Healing',
    priceEstimate: '$180 - $750',
    duration: '45 - 60 mins',
    benefits: ['Mercury-free composite', 'Same-day ceramic milling', 'Tooth structure preservation', 'Long-lasting seal']
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Brighten your smile up to 8 shades in a single comfortable 45-minute laser session without tooth sensitivity.',
    fullDesc: 'Medical-grade cold light laser technology with active desensitizing agents, lifting years of coffee, tea, and aging stains safely.',
    icon: 'Zap',
    tag: 'Same-Day Radiance',
    priceEstimate: '$220 - $400',
    duration: '45 mins',
    benefits: ['Up to 8 shades lighter', 'Zero enamel erosion', 'Anti-sensitivity formula', 'Take-home booster kit included']
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-neha',
    name: 'Dr. Neha Sharma',
    role: 'Dental Specialist & Lead Clinician',
    experience: '10+ Years Experience',
    rating: 4.98,
    reviewsCount: 420,
    image: '/doc/dr_neha_sharma_studio.jpg',
    bio: 'Pioneer in minimally invasive digital dentistry with specialized training in aesthetic smile architecture and patient relaxation techniques.',
    education: 'BDS, MDS — King George Dental University & Harvard Oral Health Fellow',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri'],
    specialties: ['Minimally Invasive Dentistry', 'Digital Smile Design', 'Aesthetic Crowns']
  },
  {
    id: 'dr-amit',
    name: 'Dr. Amit Verma',
    role: 'Senior Implantologist & Oral Surgeon',
    experience: '12+ Years Experience',
    rating: 4.95,
    reviewsCount: 560,
    image: '/doc/dr_amit_verma_studio.jpg',
    bio: 'Board-certified implantologist with over 3,000 successful surgical placements utilizing cutting-edge computer-guided navigation systems.',
    education: 'MDS Oral & Maxillofacial Surgery — AIIMS New Delhi, Diplomate ICOI',
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat'],
    specialties: ['Guided Implantology', 'Full-Arch Rehabilitation', 'Bone Grafting']
  },
  {
    id: 'dr-pooja',
    name: 'Dr. Pooja Mehta',
    role: 'Orthodontist & Clear Aligner Specialist',
    experience: '8+ Years Experience',
    rating: 4.97,
    reviewsCount: 380,
    image: '/doc/dr_pooja_mehta_studio.jpg',
    bio: 'Diamond Invisalign provider passionate about biomechanically sound malocclusion corrections that harmonize facial aesthetics and airway health.',
    education: 'MDS Orthodontics & Dentofacial Orthopedics — Manipal Academy',
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    specialties: ['Clear Aligners (Invisalign)', 'Airway Orthodontics', 'Accelerated Tooth Movement']
  },
  {
    id: 'dr-rajat',
    name: 'Dr. Rajat Malhotra',
    role: 'Cosmetic Dentist & Smile Stylist',
    experience: '11+ Years Experience',
    rating: 4.99,
    reviewsCount: 490,
    image: '/doc/dr_rajat_malhotra_studio.jpg',
    bio: 'Celebrity aesthetic dental consultant renowned for creating bespoke, micro-textured porcelain veneers that mimic nature seamlessly.',
    education: 'BDS, Fellowship in Aesthetic Dentistry — NYU College of Dentistry',
    availableDays: ['Mon', 'Tue', 'Wed', 'Fri'],
    specialties: ['Handcrafted Veneers', 'Laser Gum Contouring', 'Enamel Microabrasion']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    timeAgo: '2 days ago',
    rating: 5,
    text: 'Amazing experience! The clinic feels like an Apple store meets a luxury spa. Painless laser cleaning and the team is so compassionate.',
    service: 'Preventive Care',
    initials: 'PS',
    avatarBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
  },
  {
    id: '2',
    name: 'Amit Patel',
    timeAgo: '1 week ago',
    rating: 5,
    text: 'Best dental clinic with advanced 3D technology. Got my implant done with Dr. Amit; zero swelling and back to work the next day!',
    service: 'Dental Implants',
    initials: 'AP',
    avatarBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
  },
  {
    id: '3',
    name: 'Neha Verma',
    timeAgo: '2 weeks ago',
    rating: 5,
    text: 'Painless treatment and excellent care. My porcelain veneers look so natural, people just think I was blessed with genetically perfect teeth!',
    service: 'Cosmetic Veneers',
    initials: 'NV',
    avatarBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  },
  {
    id: '4',
    name: 'Karan Mehta',
    timeAgo: '3 weeks ago',
    rating: 5,
    text: 'Very clean clinic, ultra-modern equipment and great bedside manner. I used to have severe dental anxiety, but Denta completely cured it.',
    service: 'Restorative Care',
    initials: 'KM',
    avatarBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
  },
  {
    id: '5',
    name: 'Riya Joshi',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'Teeth whitening results are fantastic! 6 shades brighter in 45 minutes with zero sensitivity. Thank you Dr. Neha & team Denta!',
    service: 'Laser Whitening',
    initials: 'RJ',
    avatarBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  },
  {
    id: '6',
    name: 'Devendra Kulkarni',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'Seamless online appointment booking, no waiting time, and transparent pricing. Truly the gold standard of modern healthcare.',
    service: 'Clear Aligners',
    initials: 'DK',
    avatarBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How often should I visit the dentist?',
    answer: 'We recommend scheduling a preventative examination and professional dental prophylaxis every 6 months. For patients undergoing active periodontal therapy or orthodontic alignment, 3 to 4 month visits may be suggested.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Are dental implants painful?',
    answer: 'No. The procedure is performed under precision local anesthesia and optional conscious sedation. Most patients report feeling only mild vibration during the procedure, and post-operative discomfort is comparable to a minor filling.',
    category: 'Treatments'
  },
  {
    id: 'faq-3',
    question: 'What is the cost of teeth whitening?',
    answer: 'In-office cold laser whitening starts at $220. It includes full oral sensitivity barrier application, 3 cycles of active enamel whitening, and a complimentary mineralizing booster kit to maintain your shade for up to 2 years.',
    category: 'Pricing & Insurance'
  },
  {
    id: 'faq-4',
    question: 'Do you accept dental insurance?',
    answer: 'Yes! We accept all major PPO dental insurance providers and submit claims directly on your behalf. We also provide zero-interest flexible monthly payment plans via CareCredit and Sunbit.',
    category: 'Pricing & Insurance'
  },
  {
    id: 'faq-5',
    question: 'How do I book an appointment?',
    answer: 'You can book directly on this site via our instant 4-step glass booking modal in under 60 seconds, choose your preferred specialist, or contact our 24/7 patient concierge at +91 987 654 3210.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'What should I do during a dental emergency?',
    answer: 'Call our emergency hotline immediately at +91 987 654 3210. For knocked-out teeth, place the tooth in cold milk or saliva and avoid touching the root. We guarantee same-day emergency relief visits.',
    category: 'Treatments'
  }
];

export const TRUST_PILLARS = [
  {
    icon: 'Cpu',
    title: 'Advanced Technology',
    desc: '3D CBCT imaging, AI diagnostics, and painless laser tools for micron-level precision.'
  },
  {
    icon: 'Sparkles',
    title: 'Hygiene Excellence',
    desc: 'Hospital-grade HEPA filtration, class-B autoclave sterilization, and sealed single-use suites.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety Protocols',
    desc: 'Exceeding OSHA and ADA biosafety regulations with zero cross-contamination guarantee.'
  },
  {
    icon: 'Award',
    title: 'Trusted Professionals',
    desc: 'Internationally accredited clinicians with ongoing clinical fellowships and 10k+ cases.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Patient First',
    desc: 'Transparent pricing, anxiety-free comfort menus (noise-canceling headphones, warm blankets).'
  }
];

export const CLINIC_INFO = {
  name: 'Denta Dental Clinic & Smile Studio',
  tagline: 'Advanced care. Beautiful smiles. Lasting confidence.',
  phone: '+91 987 654 3210',
  emergencyPhone: '+91 987 654 9999',
  email: 'concierge@denta.clinic',
  address: '123 Dental Care Street, Suite 400, Smile City, SC 12345',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
  sunday: 'Emergency Appointments Only',
  googleRating: 4.9,
  reviewsCount: '1,250+'
};
