"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { webinars, getSpeakerByWebinarId } from "@/lib/data"
import { motion } from "framer-motion"

const WebinarList = () => {
  return (
    <section id="webinars" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Free Webinar Series</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Join our expert naturopathic doctors from June to October for insightful discussions on integrative oncology
            approaches. All webinars are completely free and open to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webinars.map((webinar, index) => {
            const speaker = getSpeakerByWebinarId(webinar.id)

            return (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    {/* Speaker Image Column */}
                    {speaker && (
                      <div className="md:col-span-1 bg-emerald-50 flex items-center justify-center p-4">
                        <div className="relative w-full aspect-square max-w-[180px] overflow-hidden rounded-full border-4 border-white shadow-md">
                          <img
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Webinar Content Column */}
                    <div className="md:col-span-2 flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap gap-4 text-emerald-700 mb-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{webinar.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{webinar.time}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-grow pt-2">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{webinar.title}</h3>
                        <p className="text-gray-600 mb-4">{webinar.shortDescription}</p>

                        {speaker && (
                          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                            <div className="flex flex-col">
                              <h4 className="font-bold text-gray-800">
                                {speaker.name}, {speaker.credentials}
                              </h4>
                              <p className="text-emerald-600 text-sm font-medium mb-2">{speaker.title}</p>
                              <p className="text-sm text-gray-600 line-clamp-2">{speaker.bio}</p>
                              <p className="text-xs text-emerald-700 mt-2 font-medium">Research: {speaker.research}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="flex justify-between pt-4">
                        <Button variant="outline" asChild>
                          <Link href={`/webinars/${webinar.id}`} className="flex items-center">
                            Details <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Register Free</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WebinarList
