import React, { useState } from 'react'

const Plans = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false)

  const features = [
    "Learn when you want, where you want",
    "Get big discounts on booking session with teacher",
    "Access all materials available",
    "Cancel anytime during your billing cycle, and you won't be charged for the next one",
    "No pop-ups and annoying distractions- our platform is 100% ad-free"
  ]

  const selfLearningPlans = [
    {
      name: "Lite",
      price: "29",
      cycle: "1 month cycle",
      subtitle: "Regular Price",
      type: "per month"
    },
    {
      name: "Plus",
      price: "53",
      cycle: "6 month cycle",
      subtitle: "The perfect balance: Save and stay flexible",
      type: "per month",
      highlight: true,
      deal: true
    },
    {
      name: "Enterprise",
      price: "53",
      cycle: "12 month cycle",
      subtitle: "Best value: Learn more for less",
      type: "per month",
      deal: true
    }
  ]

  const teacherPlans = [
    {
      name: "Lite",
      price: "29",
      cycle: "1 month cycle",
      subtitle: "Regular Price",
      type: "per session"
    },
    {
      name: "Plus",
      price: "53",
      cycle: "6 month cycle",
      subtitle: "Discount for subscriber",
      type: "per session",
      highlight: true,
      deal: true
    },
    {
      name: "Enterprise",
      price: "53",
      cycle: "12 month cycle",
      subtitle: "Discount for a 5-session package",
      type: "per session",
      deal: true
    }
  ]

  const currentPlans = isTeacherMode ? teacherPlans : selfLearningPlans

  return (
    <div className="flex flex-col items-center py-16 px-4 bg-white_1">
      <h1 className="text-4xl md:text-5xl font-bold text-green_3 text-center mb-4 font-rambla">
        Choose Your Plan
      </h1>
      <p className="text-gray-500 mb-8 text-center">
        No Contract, No surprise Fees
      </p>

      {/* Toggle Switch */}
      <div className="flex space-x-2 p-1 bg-gray-100 rounded-full mb-12">
        <button
          className={`px-6 py-2 rounded-full transition-colors ${
            !isTeacherMode
              ? 'bg-green_3 text-white'
              : 'bg-transparent text-gray-600'
          }`}
          onClick={() => setIsTeacherMode(false)}
        >
          Self-learning
        </button>
        <button
          className={`px-6 py-2 rounded-full transition-colors ${
            isTeacherMode
              ? 'bg-green_3 text-white'
              : 'bg-transparent text-gray-600'
          }`}
          onClick={() => setIsTeacherMode(true)}
        >
          With a teacher
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 rounded-2xl flex-1 relative ${
              plan.highlight ? 'bg-green-50' : 'bg-white'
            } border border-gray-200`}
          >
            {plan.deal && (
              <div className="absolute -top-1 -right-1 overflow-hidden w-24 h-24 z-10">
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-[19px] right-[-21px] rotate-45 bg-green_3 text-white text-xs font-bold py-1 px-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Deal!
                  </div>
                </div>
              </div>
            )}
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <div className="flex items-baseline mb-1">
              <span className="text-4xl font-bold">$</span>
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-2">/{plan.type}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>
            <div className="flex flex-col space-y-4 flex-grow">
              <p className="text-sm text-gray-600">{plan.cycle}</p>
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green_3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full bg-green_3 text-white py-3 rounded-md hover:bg-green_2 transition-colors font-medium">
              {isTeacherMode ? 'Book Now' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans

