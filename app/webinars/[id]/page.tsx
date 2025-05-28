import { webinars, getSpeakerByWebinarId } from "@/lib/data"
// import { getWebinars, getSpeakerByWebinarId } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return webinars.map((webinar) => ({
    id: webinar.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const webinar = webinars.find((w) => w.id === params.id)

  if (!webinar) {
    return {
      title: "Webinar Not Found",
    }
  }

  return {
    title: `${webinar.title} | Integrative Oncology Webinar Series`,
    description: webinar.shortDescription,
  }
}

export default async function WebinarPage({ params }: { params: { id: string } }) {
  const webinar = webinars.find((w) => w.id === params.id)

  if (!webinar) {
    notFound()
  }

  const speaker = getSpeakerByWebinarId(webinar.id)

  return (
    <main className="min-h-screen">
      <section className="bg-emerald-50 py-16">
        <div className="container">
          <Link href="/#webinars" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Webinars
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{webinar.title}</h1>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-emerald-700">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="font-medium">{webinar.date}</span>
            </div>
            <div className="flex items-center text-emerald-700">
              <Clock className="h-5 w-5 mr-2" />
              <span>{webinar.time}</span>
            </div>
          </div>

          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Register Now
          </Button>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">About This Webinar</h2>
            <div className="prose max-w-none text-gray-600 mb-8">
              <p className="mb-4">{webinar.description}</p>
              <p className="mb-4">
                This webinar is designed for healthcare practitioners interested in integrative oncology, including
                naturopathic doctors, medical doctors, nurses, and other healthcare professionals. Patients and
                caregivers with a strong interest in the topic are also welcome to attend.
              </p>
              <p>
                Registration includes access to the live webinar, Q&A session with the speaker, downloadable resources,
                and a recording of the session available for 90 days.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">What You'll Learn</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-gray-600">
                  Evidence-based approaches to integrating complementary therapies with conventional cancer treatments
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-gray-600">
                  Clinical applications and practical implementation strategies for patient care
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-gray-600">
                  Latest research findings and their implications for clinical practice
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-gray-600">Case studies illustrating successful integrative approaches</div>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Registration Details</h2>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Cost:</span>{" "}
                  <span className="text-emerald-600 font-bold">FREE</span> for all participants
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Who can attend:</span> Everyone interested in integrative oncology
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Format:</span> Live webinar with Q&A session
                </li>
              </ul>
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Register Free
              </Button>
            </div>
          </div>

          {speaker && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">About the Speaker</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6">
                <img src={speaker.image || "/placeholder.svg"} alt={speaker.name} className="w-full h-auto" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {speaker.name}, {speaker.credentials}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">{speaker.title}</p>
                  <p className="text-gray-600 mb-4">{speaker.bio}</p>
                  <p className="text-gray-600">
                    <strong>Research Focus:</strong> {speaker.research}
                  </p>
                </div>
              </div>

              <Button variant="outline" asChild className="w-full">
                <Link href={`/speakers#${speaker.id}`}>View Full Profile</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Join Our Integrative Oncology Webinar Series
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot and gain valuable insights from leading experts in the field.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Register Free
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
