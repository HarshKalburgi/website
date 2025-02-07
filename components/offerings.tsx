"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const offerings = [
  {
    title: "VECU Co-Pilot",
    description:
      "Virtual ECUs are becoming mainstream for Software Defined Vehicle (SDV) development and validation. Accelerate your Virtual ECU development using VECU Copilot.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VECU%20Co-Pilot-BYdSIS53rz2rgP1GnB1UehG04hvp5j.png",
  },
  {
    title: "ChatDoc",
    description:
      "Our LLM leverages Retrieval Augmented Generation (RAG) techniques. Ask questions in natural language, and our AI will intelligently search through your data repository.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatdoc-3AfTbTwS8xhVc7AUKM2DsubnlwsNDR.png",
  },
  {
    title: "Compliance Inspector",
    description:
      "Our Multi-Agent LLM tool seamlessly integrates with your existing workflow to automate coding guideline compliance and fixes violations automatically.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compliance%20Inspector-CltDJKx3d0BkVBVQl9zJimeVBUCIS1.png",
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Offerings
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{offering.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

