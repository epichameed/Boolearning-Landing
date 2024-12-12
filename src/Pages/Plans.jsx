import React from 'react'

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: [
        "Access to 1 language course",
        "Basic exercises and quizzes",
        "Mobile app access",
        "Progress tracking"
      ]
    },
    {
      name: "Premium",
      price: "$19.99/month",
      features: [
        "Access to all language courses",
        "Advanced exercises and quizzes",
        "Personalized learning path",
        "Live tutoring sessions (2/month)",
        "Offline mode"
      ]
    },
    {
      name: "Business",
      price: "Contact for pricing",
      features: [
        "All Premium features",
        "Custom course creation",
        "Team progress tracking",
        "Dedicated account manager",
        "API access"
      ]
    }
  ]

  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">Choose Your Plan</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-green_1 p-6 rounded-lg shadow-lg flex flex-col w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-green_3 mb-2 font-pragatiNarrow">{plan.name}</h2>
            <p className="text-3xl font-bold text-green_2 mb-4">{plan.price}</p>
            <ul className="flex flex-col space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="h-5 w-5 text-green_2 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-green_3 font-poppins">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-green_2 text-white_1 py-2 px-4 rounded hover:bg-green_3 transition-colors font-poppins mt-auto">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans

