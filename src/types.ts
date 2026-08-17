export interface Lesson {
  id: string;
  title: string;
  duration: string;
  category: 'Foundation' | 'Indicators' | 'Strategy' | 'Risk Management' | 'Live Execution';
  description: string;
  indicators: string[];
  keyTakeaway: string;
  thumbnailUrl: string;
  previewUrl?: string;
  highlightBadge?: string;
}

export interface Module {
  id: string;
  moduleNumber: number;
  title: string;
  totalDuration: string;
  lessonCount: number;
  description: string;
  thumbnailUrl: string;
  badge: string;
  lessons: Lesson[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Access & Delivery' | 'Course Content' | 'Payment & KYC' | 'Refund Policy';
}

export interface Testimonial {
  name: string;
  location: string;
  role: string;
  rating: number;
  comment: string;
  verifiedBuyer: boolean;
  avatar: string;
}

export interface MerchantKYCInfo {
  merchantName: string;
  registeredAddress: string;
  supportEmail: string;
  supportHours: string;
  responseTurnaround: string;
  complianceJurisdiction: string;
  deliveryMethod: string;
  deliveryTimeline: string;
  productType: string;
  entityType: string;
}

export type ActivePage = 'home' | 'terms' | 'privacy' | 'refund' | 'shipping' | 'contact' | 'about' | 'code-export';
