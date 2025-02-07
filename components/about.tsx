"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="prose max-w-none mx-auto"
        >
          <p className="text-gray-600">
            With recent developments in AI, Large Language Models are used as assistants to perform various tasks. As
            these models accept and generate natural language text, they are helpful in various tasks that involve
            Natural Language Processing like text classification, document summarization, question answering, language
            translation, chatbots, and code generation.
          </p>
          <p className="text-gray-600">
            At Vayavya Labs, we are exploring LLMs potential to enhance software development productivity. Our focus is
            on harnessing the power of these models to automate domain-specific code generation from high-level
            specifications. By leveraging AI, we aim to significantly accelerate the design and development process and
            reduce errors, ultimately leading to more efficient and reliable solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

