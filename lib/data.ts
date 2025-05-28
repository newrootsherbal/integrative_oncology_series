export type Speaker = {
  id: string
  name: string
  title: string
  credentials: string
  bio: string
  biohtml:string
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
    biohtml: `
  <p>
    <strong>Dr. Paul Anderson</strong> is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. 
    In addition to over <strong>30 years of clinical experience</strong>, he led the interventional arm of a 
    <strong>US-NIH funded human research trial</strong> using IV and integrative therapies in cancer patients.
  </p>

  <p>
    He founded <strong>Advanced Medical Therapies</strong> in Seattle, Washington—a clinic specializing in cancer and chronic disease. 
    He now collaborates with clinics and hospitals across the <strong>United States</strong> and internationally.
  </p>

  <p>
    Former academic positions include posts at multiple medical schools, serving as <strong>Professor of Pharmacology and Clinical Medicine</strong> at 
    <a href="https://bastyr.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">Bastyr University</a>, and as <strong>Chief of IV Services</strong> at the Bastyr Oncology Research Center.
  </p>

  <p>
    Dr. Anderson is co-author of the Hay House book 
    <a href="https://www.amazon.com/Outside-Box-Cancer-Therapies-Integrative/dp/1401956426" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">“Outside the Box Cancer Therapies”</a> with Dr. Mark Stengler, and contributed to the anthology 
    <a href="https://www.amazon.com/Success-Breakthroughs-Jack-Canfield/dp/1643164587" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">“Success Breakthroughs”</a> with Jack Canfield, and 
    <em>Cancer… The Journey from Diagnosis to Empowerment</em> by Lioncrest Publishing.
  </p>

  <p>
    He is also co-author of the IV therapy textbook 
    <strong>“A Scientific Reference for Intravenous Nutrient Therapy”</strong> with Drs. Osborne and Carter.
  </p>

  <p>
    A frequent <strong>CME speaker and educator</strong>, Dr. Anderson has expanded his reach through his online CE platform 
    <a href="https://www.consultdra.com" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">ConsultDrA.com</a> 
    and through his <strong>Advanced Applications in Medical Practice (AAMP)</strong> conferences, which deliver cutting-edge clinical education in a CME-accredited format.
  </p>
`,

    research: "Dr Paul Anderson",
    webinarId: "nutritional-strategies",
    image: "/speakers/speaker1.jpg",
  },
  {
    id: "dr-paul-s",
    name: "Dr Paul Saunders",
    title: "TBD",
    credentials: "ND, PhD",
    bio: "Dr. Paul Richard Saunders is an accomplished professional with dual ND degrees from the Canadian College of Naturopathic Medicine and National College in Portland. His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases. Notable roles at the Canadian College of Naturopathic Medicine include Clinic Director and Associate Dean. Dr. Saunders continues to educate, research, and publish, holding an Adjunct Professorship at National University of Health Science. He is a member of peer-review committees for specialized journals, reviews grant requests for the National Institute of Health (NIH), and was recognized as Ontario Naturopathic Doctor of the Year in 1994 and 2002. He played a significant role in shaping Health Canada’s Office of Natural Health Products and its Expert Advisory Committee.",
    biohtml: `
      Dr. Paul Richard Saunders is an accomplished professional with dual <strong>ND degrees</strong> from the 
      <a href="https://www.ccnm.edu" target="_blank">Canadian College of Naturopathic Medicine</a> and the National College in Portland.
      His extensive experience spans over <strong>30 years</strong>, employing a full range of naturopathic therapies and embracing complex cases.

      He held roles as <strong>Clinic Director</strong> and <strong>Associate Dean</strong> at CCNM, and continues to 
      educate and publish as an <strong>Adjunct Professor</strong> at the 
      <a href="https://www.nuhs.edu" target="_blank">National University of Health Sciences</a>.

      He is involved with <a href="https://www.nih.gov" target="_blank">NIH</a>, and was twice named 
      <strong>Ontario Naturopathic Doctor of the Year</strong>. He also advised 
      <strong>Health Canada</strong>'s Natural Health Products Directorate.
    `,
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/speakers/speaker2.jpg",
  },
  {
    id: "dr-neil",
    name: "Dr Neil McKinney",
    title: "ND",
    credentials: "ND",
    bio: "Dr. McKinney has a BSc. in Biosciences from Simon Fraser University, studied kinesiology at the University of Waterloo, and received a Doctor of Naturopathic Medicine from National College of Naturopathic Medicine (1985). ",
    biohtml: `
  <p>
    <strong>Dr. Neil McKinney, ND</strong> holds a <strong>BSc in Biosciences</strong> from 
    <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">Simon Fraser University</a>,
    studied kinesiology at the <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    University of Waterloo</a>, and earned his <strong>Doctor of Naturopathic Medicine</strong> from the 
    <a href="https://nunm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    National College of Naturopathic Medicine</a> in 1985.
  </p>

  <p>
    Dr. McKinney also completed <strong>3 years of Traditional Chinese Medicine training</strong> at the 
    Oregon College of Oriental Medicine. His background includes several years of experience in cancer research, 
    particularly in the areas of <strong>novel radiation therapies</strong> and <strong>radiosensitizing drugs</strong>.
  </p>

  <p>
    A recognized leader in the profession, he served in regulatory roles including as <strong>Registrar of the 
    College of Naturopathic Physicians of British Columbia (CNPBC)</strong>, and has received multiple awards for his 
    contributions in advancing the scope and standards of naturopathic medicine.
  </p>

  <p>
    Dr. McKinney is the founder of both the 
    <a href="https://www.bcna.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    BC Naturopathic Association</a> and the 
    <a href="https://binm.org" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    Boucher Institute of Naturopathic Medicine</a>. He is a former <strong>Professor of Naturopathic Oncology</strong> and 
    the author of <strong>six textbooks</strong> on the subject.
  </p>

  <p>
    He continues to <strong>mentor and lecture</strong> to naturopathic doctors around the world, contributing 
    to professional publications and public education. Now retired from decades of clinical practice with a focus 
    on <strong>integrative oncology</strong>, Dr. McKinney remains actively engaged in 
    <strong>cancer research, professional education,</strong> and publishing.
  </p>
`
,
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "/speakers/speaker3.jpg",
  },
  {
    id: "dr-eric",
    name: "Dr Eric Marsden",
    title: "ND",
    credentials: "ND",
    bio: "Dr. Marsden ND obtained his undergraduate degree in Human Biology at the University of Toronto and graduated from the Canadian College of Naturopathic Medicine in 2002. ",
    biohtml: `
  <p>
    <strong>Dr. Marsden, ND</strong> obtained his undergraduate degree in <strong>Human Biology</strong> at the 
    <a href="https://www.utoronto.ca" target="_blank" rel="noopener noreferrer">University of Toronto</a> and graduated from the 
    <a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer">Canadian College of Naturopathic Medicine</a> in 2002.
    His path to naturopathic medicine began after witnessing the limitations of conventional treatments for complex, chronic conditions within his own family—and the potential of integrative medicine to offer more comprehensive solutions.
  </p>

  <p>
    After graduation, Dr. Marsden traveled to several renowned teaching clinics and hospitals in Germany, where he observed how 
    <strong>non-conventional therapies</strong>, when integrated appropriately, significantly improved outcomes for patients with chronic disease including cancer.
    He was inspired by the growing body of research validating the clinical use of Complementary and Alternative therapies.
  </p>

  <p>
    Since then, Dr. Marsden has remained committed to expanding access to evidence-informed <strong>naturopathic supportive care and integrative medicine</strong> in Canada.
    This vision culminated in the creation of the <strong>Marsden Centre for Excellence in Integrative Medicine</strong>—a modern 6,000 ft² clinic in Canada that brings together 15 providers offering collaborative care across diverse specialties.
    He runs the centre with his wife, <strong>Dr. Chaleunsouk, ND</strong>.
  </p>

  <p>
    An educator at heart, Dr. Marsden has spent over 15 years teaching globally in the areas of <strong>supportive cancer care, IV infusion therapy</strong>, and <strong>environmental medicine</strong>.
    He established Canada’s first post-graduate <strong>residency in cancer care</strong> affiliated with CCNM, which has trained many doctors including 
    <strong>Dr. Lei Gu, ND</strong> and <strong>Dr. Shiva Jamshidi, ND</strong>, who continue to practice at the Centre.
  </p>

  <p>
    He is also the course author and director for the 
    <a href="https://oand.org" target="_blank" rel="noopener noreferrer">Ontario Association of Naturopathic Doctors (OAND)</a> certification course in intravenous infusion therapy.
    Dr. Marsden is a highly sought-after public and professional speaker, with appearances on 
    <strong>CBC News</strong>, <strong>Marketplace</strong>, <strong>TVO</strong>, <strong>National Post</strong>, and more.
  </p>

  <p>
    He is also a dedicated researcher—conducting clinical research at the Centre with his fellows and consulting on advisory boards.
    Dr. Marsden has held leadership roles such as executive board member of the OAND and chair of the <strong>Principle of Practice Committee</strong> for the 
    <a href="https://oncanp.org" target="_blank" rel="noopener noreferrer">Oncology Association of Naturopathic Physicians</a>.
    In this role, he helped publish the first <strong>Principles of Care guidelines in naturopathic oncology</strong> in 
    <a href="https://www.mdpi.com/journal/curroncol" target="_blank" rel="noopener noreferrer">Current Oncology</a> (2019).
  </p>

  <p>
    Currently, he serves on the medical advisory board for the 
    <a href="https://ccran.org" target="_blank" rel="noopener noreferrer">Colorectal Cancer Resource and Advocacy Network (CCRAN)</a>, supporting those impacted by colorectal cancer.
  </p>

  <p>
    Outside of his clinical and academic commitments, Dr. Marsden is a devoted father of two. He enjoys being in nature—hiking, sailing, camping, and relaxing by the water.
    He’s also been a volunteer basketball coach for over 10 years at the <strong>Toronto Waldorf School</strong> in Vaughan, Ontario.
  </p>
`
,
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "/speakers/speaker4.jpg",
  },
  {
    id: "dr-dugald",
    name: "Dr Dugald Seely",
    title: "ND, MSc",
    credentials: "ND, MSc",
    bio: "Dr. Dugald Seely, ND, MSc. – Dr. Seely is a naturopathic doctor and clinician scientist, specializing in integrative cancer care. Dr. Seely blends evidence-based approaches in clinical practice and is active in the conduct of synthesis and clinical research ",
    biohtml: `
  <p>
    <strong>Dr. Dugald Seely, ND, MSc</strong> is a naturopathic doctor and clinician scientist with a specialization in 
    <strong>integrative cancer care</strong>. He is known for blending <strong>evidence-based medicine</strong> with 
    naturopathic principles, both in clinical settings and in the realm of research.
  </p>

  <p>
    Dr. Seely is the <strong>CEO of the Centre for Health Innovation (CHI)</strong> and the 
    <strong>Executive Director of the Patterson Institute for Integrative Oncology Research</strong>, 
    where he is pioneering an <strong>evidence-informed, integrative oncology model</strong> that combines conventional and naturopathic care.
  </p>

  <p>
    A 2003 graduate of the 
    <a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
      Canadian College of Naturopathic Medicine (CCNM)
    </a>, Dr. Seely brings over <strong>20 years of clinical experience</strong> to his practice.
    He has published more than <strong>100 peer-reviewed papers and book chapters</strong> and has led a thriving, 
    multi-disciplinary clinic in Ottawa for the past 12 years.
  </p>

  <p>
    In addition to his clinical and academic contributions, Dr. Seely is also passionate about the 
    <strong>business of integrative medicine</strong> and enjoys sharing insights into both clinical excellence and 
    the successful operation of healthcare practices.
  </p>
`
,
    research: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    webinarId: "lifestyle-medicine",
    image: "/speakers/speaker5.jpg",
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
    question: "What makes this webinar series different from other lectures?",
    answer:
      "This CE-based webinar series integrates core oncology concepts with practical clinical application. It reviews cancer pathophysiology—highlighting angiogenesis, immune function, and their relevance in integrative care—then applies this knowledge to common patient concerns around natural products and lifestyle choices during and after conventional treatment. It explores evidence-informed approaches  helping clinicians translate science into effective, patient-centered care.",
  },
  {
    question: "Even if I don’t see cancer patients, how could this series benefit my clinical approach?",
    answer:
      "NDs and integrative practitioners in general practice aim to support the whole person, not just the diagnosis. This series focuses on helping patients with a cancer diagnosis optimize their overall health and well-being, rather than offering direct cancer treatment. Cancer patients often have distinct needs that require informed, compassionate care. This series is designed to make you an 'oncology-informed' provider. Our expert panel will address the most common questions that arise in primary care, equipping you with the knowledge and tools to confidently support your patients through every stage of their journey.",
  },
  {
    question: "Why are NFH and Vitazan leading this series?",
    answer:
      "Our panel of experts brings extensive experience in integrative oncology through their naturopathic training and focus, having worked with numerous patients and observed clinical responses to supportive care. This series was developed with the understanding that primary and holistic health care providers will encounter cancer patients in their practice. Our experts are here to provide valuable education and peer support to help guide practitioners in offering informed and compassionate care. NFH and Vitazan are a manufacturer of premium, professional grade natural products that are trusted by health care providers because of our quality manufacturing, evidence-backed research, and clinical working group. We are interested in the advancement of the clinical benefits of natural products in integrative and naturopathic medicine.",
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
