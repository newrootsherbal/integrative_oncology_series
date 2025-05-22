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
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Naturopathic Oncologist",
    credentials: "ND, FABNO",
    bio: "Dr. Sarah Johnson is a board-certified naturopathic oncologist with over 15 years of experience in integrative cancer care. She specializes in developing personalized treatment plans that combine conventional and evidence-based natural therapies.",
    research: "Nutritional interventions in breast cancer treatment",
    webinarId: "nutritional-strategies",
    image: "/placeholder-bfbl6.png",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "Integrative Medicine Specialist",
    credentials: "ND, LAc",
    bio: "Dr. Michael Chen combines his expertise in naturopathic medicine and traditional Chinese medicine to provide comprehensive care for cancer patients. He has worked at leading integrative oncology centers across North America.",
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/placeholder-x7n4j.png",
  },
  {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    title: "Research Naturopath",
    credentials: "ND, PhD",
    bio: "Dr. Amara Patel holds both a naturopathic doctorate and a PhD in nutritional biochemistry. Her research focuses on the molecular mechanisms of natural compounds in cancer prevention and treatment.",
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "/placeholder-z97ry.png",
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    title: "Mind-Body Medicine Specialist",
    credentials: "ND, MS",
    bio: "Dr. James Wilson specializes in the psychoneuroimmunology of cancer, focusing on how mind-body interventions can support conventional cancer treatments and improve quality of life for patients.",
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "/placeholder-54but.png",
  },
  {
    id: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    title: "Integrative Oncology Researcher",
    credentials: "ND, MPH",
    bio: "Dr. Elena Rodriguez combines clinical practice with research in integrative oncology. Her public health background informs her approach to evidence-based natural medicine in supportive cancer care.",
    research: "Exercise and lifestyle interventions in cancer survivorship",
    webinarId: "lifestyle-medicine",
    image: "/placeholder-xaaf6.png",
  },
]

export const webinars: Webinar[] = [
  {
    id: "nutritional-strategies",
    title: "Nutritional Strategies in Cancer Care",
    description:
      "This comprehensive webinar explores evidence-based nutritional approaches for cancer patients. Dr. Sarah Johnson will discuss anti-inflammatory diets, targeted supplementation, and nutritional strategies to mitigate treatment side effects. Learn how to integrate these approaches with conventional cancer treatments for optimal patient outcomes.",
    shortDescription: "Evidence-based nutritional approaches for cancer patients during and after treatment.",
    date: "June 15, 2025",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-sarah-johnson",
    registrationLink: "#",
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine Safety in Oncology",
    description:
      "Dr. Michael Chen presents a detailed analysis of herb-drug interactions and safety considerations in oncology. This webinar covers the latest research on commonly used herbs, potential benefits, risks, and clinical guidelines for integrating herbal medicine in cancer care. Case studies will illustrate practical applications and decision-making frameworks.",
    shortDescription: "Understanding herb-drug interactions and safety considerations in cancer treatment.",
    date: "July 20, 2025",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-michael-chen",
    registrationLink: "#",
  },
  {
    id: "microbiome-cancer",
    title: "The Microbiome in Cancer Immunotherapy",
    description:
      "Dr. Amara Patel explores the fascinating relationship between gut microbiota and cancer immunotherapy efficacy. This webinar covers cutting-edge research on microbiome modulation strategies, including dietary interventions, prebiotics, probiotics, and fecal microbiota transplantation. Learn how these approaches may enhance treatment outcomes and reduce adverse effects.",
    shortDescription: "How gut health influences immunotherapy response and strategies for optimization.",
    date: "August 17, 2025",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-amara-patel",
    registrationLink: "#",
  },
  {
    id: "mind-body-approaches",
    title: "Mind-Body Medicine in Cancer Support",
    description:
      "This webinar with Dr. James Wilson examines the scientific evidence for mind-body interventions in cancer care. Topics include meditation, guided imagery, yoga, and other stress-reduction techniques that can improve quality of life and potentially influence treatment outcomes. Practical implementation strategies for clinical practice will be discussed.",
    shortDescription: "Evidence-based mind-body techniques to support conventional cancer treatment.",
    date: "September 21, 2025",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-james-wilson",
    registrationLink: "#",
  },
  {
    id: "lifestyle-medicine",
    title: "Lifestyle Medicine for Cancer Survivors",
    description:
      "Dr. Elena Rodriguez presents a comprehensive approach to supporting cancer survivors through evidence-based lifestyle interventions. This webinar covers exercise prescription, sleep optimization, stress management, and sustainable dietary patterns for cancer survivors. Learn how to develop personalized lifestyle medicine plans to reduce recurrence risk and improve long-term outcomes.",
    shortDescription: "Comprehensive lifestyle approaches to reduce recurrence risk and improve survivorship.",
    date: "October 19, 2025",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-elena-rodriguez",
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
