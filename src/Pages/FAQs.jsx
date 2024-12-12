import React from 'react'

const FAQs = () => {
  const faqs = [
    {
      question: "How does Boo Learning work?",
      answer: "Boo Learning uses an interactive, gamified approach to language learning. Our platform adapts to your learning style and pace, providing personalized lessons and exercises."
    },
    {
      question: "Which languages do you offer?",
      answer: "We currently offer courses in Spanish, French, German, Italian, and Mandarin Chinese. We're constantly expanding our language offerings based on user demand."
    },
    {
      question: "How much time should I dedicate to learning?",
      answer: "We recommend at least 15-30 minutes of practice daily for optimal results. Consistency is key in language learning, and our platform is designed to fit into your busy schedule."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we have mobile apps available for both iOS and Android devices. You can seamlessly switch between desktop and mobile to continue your learning on-the-go."
    },
    {
      question: "What makes Boo Learning different from other language learning platforms?",
      answer: "Boo Learning stands out with its adaptive learning technology, engaging content, and community features. We also offer personalized tutoring sessions with native speakers to enhance your learning experience."
    }
  ]

  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">Frequently Asked Questions</h1>
      <div className="flex flex-col space-y-6 w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-green_1 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">{faq.question}</h2>
            <p className="text-green_3 font-poppins">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQs

