
export interface Plan {
  accountSize: string;
  price: number;
  features: string[];
  isMostPopular: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
