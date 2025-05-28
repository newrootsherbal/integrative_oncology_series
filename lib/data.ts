export type Speaker = {
  id: string
  name: string
  title: string
  credentials: string
  bio: string
  research: string
  webinarId: string
  image: string
}

export type Webinar = {
  id: string
  title: string
  description: string
  shortDescription: string
  date: string
  time: string
  speakerId: string
  registrationLink: string
}

export type FAQ = {
  question: string
  answer: string
}

export const speakers: Speaker[] = [
  {
    id: "dr-paul-a",
    name: "Dr Paul Anderson",
    title: "ND",
    credentials: "ND",
    bio: "Dr. Anderson is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. In addition to three decades clinical experience, he also was head of the interventional arm of a US-NIH funded human research trial using IV and integrative therapies in cancer patients. He founded Advanced Medical Therapies in Seattle, Washington, a clinic focusing on cancer and chronic diseases and now focuses his time in collaboration with clinics and hospitals in the US and other countries.",
    research: "Dr Paul Anderson",
    webinarId: "nutritional-strategies",
    image: "speakers/speaker1.jpg",
  },
  {
    id: "dr-paul-s",
    name: "Dr Paul Saunders",
    title: "TBD",
    credentials: "ND, PhD",
    bio: "Dr. Paul Richard Saunders is an accomplished professional with dual ND degrees from the Canadian College of Naturopathic Medicine and National College in Portland.",
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/speakers/speaker2.jpg",
  },
  {
    id: "dr-neil",
    name: "Dr Neil McKinney",
    title: "Research Naturopath",
    credentials: "ND",
    bio: "Dr. McKinney has a BSc. in Biosciences from Simon Fraser University, studied kinesiology at the University of Waterloo, and received a Doctor of Naturopathic Medicine from National College of Naturopathic Medicine (1985). ",
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "speakers/speaker3.jpg",
  },
  {
    id: "dr-eric",
    name: "Dr Eric Marsden",
    title: "ND",
    credentials: "ND",
    bio: "Dr. Marsden ND obtained his undergraduate degree in Human Biology at the University of Toronto and graduated from the Canadian College of Naturopathic Medicine in 2002. ",
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "speakers/speaker4.jpg",
  },
  {
    id: "dr-dugald",
    name: "Dr Dugald Seely",
    title: "ND, MSc",
    credentials: "ND, MSc",
    bio: "Dr. Dugald Seely, ND, MSc. – Dr. Seely is a naturopathic doctor and clinician scientist, specializing in integrative cancer care. Dr. Seely blends evidence-based approaches in clinical practice and is active in the conduct of synthesis and clinical research ",
    research: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    webinarId: "lifestyle-medicine",
    image: "speakers/speaker5.jpg",
  },
]

export const webinars: Webinar[] = [
  {
    id: "nutritional-strategies",
    title: "Healing after Chemotherapy and Radiation",
    description:
      "This comprehensive webinar explores evidence-based nutritional approaches for cancer patients. Dr. Sarah Johnson will discuss anti-inflammatory diets, targeted supplementation, and nutritional strategies to mitigate treatment side effects. Learn how to integrate these approaches with conventional cancer treatments for optimal patient outcomes.",
    shortDescription: "soon to be updated",
    date: "September 10, 2025 ",
    time: "1:00 PM – 2:00 PM  EST",
    speakerId: "dr-paul-a",
    registrationLink: "#",
  },
  {
    id: "herbal-medicine",
    title: "TBD",
    description:
      "TBD",
    shortDescription: "soon to be updated",
    date: "November 19, 2025 ",
    time: "1:00 PM – 2:00 PM  EST",
    speakerId: "dr-paul-s",
    registrationLink: "#",
  },
  {
    id: "microbiome-cancer",
    title: "Prostate Cancer Update",
    description:
      "Dr. Amara Patel explores the fascinating relationship between gut microbiota and cancer immunotherapy efficacy. This webinar covers cutting-edge research on microbiome modulation strategies, including dietary interventions, prebiotics, probiotics, and fecal microbiota transplantation. Learn how these approaches may enhance treatment outcomes and reduce adverse effects.",
    shortDescription: "TBD",
    date: "December 10, 2025 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-neil",
    registrationLink: "#",
  },
  {
    id: "mind-body-approaches",
    title: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    description:
      "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    shortDescription: "TBD",
     date: "January 14, 2026 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-eric",
    registrationLink: "#",
  },
  {
    id: "lifestyle-medicine",
    title: "Navigating off-label prescription meds for cancer",
    description:
      "TBD",
    shortDescription: "TBD",
    date: "February 18, 2026 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-dugald",
    registrationLink: "#",
  },
]

export const faqs: FAQ[] = [
  {
    question: "Who should attend these webinars?",
    answer:
      "These webinars are designed for everyone interested in integrative oncology. This includes healthcare practitioners, naturopathic doctors, medical doctors, nurses, nutritionists, patients, caregivers, and anyone with an interest in complementary approaches to cancer care. No prior knowledge is required.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "No, all webinars in this series are completely free. New Roots Herbal is providing these educational webinars as a public service to increase awareness about integrative approaches to oncology.",
  },
  {
    question: "Do I need to register for each webinar separately?",
    answer:
      "You can register for individual webinars that interest you, or sign up for the entire series at once. Either way, registration is free and only takes a minute to complete.",
  },
  {
    question: "Will recordings be available if I can't attend live?",
    answer:
      "Yes, all registrants will receive access to the webinar recording after the live event. This allows you to review the material or watch it later if you can't attend the live session.",
  },
  {
    question: "What platform will be used for the webinars?",
    answer:
      "We use Zoom for our webinar series. Upon registration, you'll receive a unique link to join the webinar. You can participate from any device with internet access.",
  },
  {
    question: "Will there be opportunities to ask questions?",
    answer:
      "Yes, each webinar includes a Q&A session where participants can submit questions for the speaker. We encourage active participation to make these sessions as valuable as possible for everyone.",
  },
]

export function getSpeakerByWebinarId(webinarId: string): Speaker | undefined {
  const webinar = webinars.find((w) => w.id === webinarId)
  if (!webinar) return undefined

  return speakers.find((s) => s.id === webinar.speakerId)
}

export function getWebinarBySpeakerId(speakerId: string): Webinar | undefined {
  const speaker = speakers.find((s) => s.id === speakerId)
  if (!speaker) return undefined

  return webinars.find((w) => w.id === speaker.webinarId)
}
