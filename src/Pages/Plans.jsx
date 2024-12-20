import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plans = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [plan, setPlan] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState({});
  const [selectedDuration, setSelectedDuration] = useState({});  // Change to store duration per plan

  const handlePricingChange = (planId, price, duration) => {
    console.log(price, duration);
    setSelectedPricing((prev) => ({
      ...prev,
      [planId]: price,
    }));
    setSelectedDuration((prev) => ({
      ...prev,
      [planId]: duration,  // Store duration for the specific planId
    }));
  };

  // Filter plans based on packageType
  // Filter plans based on packageType and isActive status
const filteredPlans = plan.filter(
  (plan) =>
    plan.isActive &&
    (isTeacherMode
      ? plan.packageType === "Instructor's Session"
      : plan.packageType === 'Monthly')
);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('/api/getPackagesForUser');
        console.log('Fetched Plans:', response.data.packages);
        setPlan(response.data.packages);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
        {filteredPlans.map((plan, index) => {
          // const selectedPrice =
          //   selectedPricing[plan.id] || plan.pricing?.[0]?.price || 0;
          // const selectedDurationText = selectedDuration[plan.id] || plan.pricing?.[0]?.duration || 'N/A';  // Get duration for the specific plan

           const offeredFeatures = plan.features.filter(feature => feature.packageFeature.isOffered);
          const nonOfferedFeatures = plan.features.filter(feature => !feature.packageFeature.isOffered);

          return (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-2xl flex-1 relative ${
                plan.badge ? 'bg-green-50 border-green_3' : 'bg-white'
              } border border-gray-200 pt-8`}
            >
              {/* Badge on top */}
           {plan.badge && (
                <div
                    className="absolute -top-6 left-0 w-[calc(100%+2px)] bg-green_3 text-white text-xs text-center font-bold px-4 py-3 rounded-t-xl z-10"
                    style={{ marginLeft: '-1px', marginRight: '-1px' }}
                  > 
                  {plan.badge.badgeText}
                </div>
              )}
              {/* Plan Details */}
              <h2 className="text-xl font-bold mb-2">{plan.packageName}</h2>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold">$</span>
                <span className="text-4xl font-bold">{plan.pricing?.[0]?.price}</span>
                <span className="text-xl text-gray-500 ml-2">/{plan.pricing?.[0]?.duration}</span>
              </div>
              <p className="text-sm text-gray-600 mb-6 text-left">
                {plan.description}
              </p>

              {/* Pricing Dropdown */}
              {/* <div className="mb-4">
                <label htmlFor={`pricing-${plan.id}`} className="text-gray-600">
                  Choose Duration:
                </label>
                <select
                  id={`pricing-${plan.id}`}
                  className="w-full mt-2 p-2 border border-b-green_3 rounded-md"
                  onChange={(e) => {
                    const selectedOption = e.target.selectedOptions[0];
                    const duration = selectedOption.text;  // The duration text
                    const price = e.target.value;  // The price
                    handlePricingChange(plan.id, price, duration);
                  }}
                >
                  {plan.pricing.map((pricingOption, idx) => (
                    <option
                      key={idx}
                      value={pricingOption.price}
                    >
                      {pricingOption.duration}
                    </option>
                  ))}
                </select>
              </div> */}

               {/* Plan Features */}
              <div className="flex flex-col space-y-4 flex-grow">
                {/* Display offered features */}
                {offeredFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green_3 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-sm text-gray-600">{feature.feature}</span>
                  </div>
                ))}

                {/* Display non-offered features */}
                {nonOfferedFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span className="text-sm text-gray-600">{feature.feature}</span>
                  </div>
                ))}
              </div>

              {/* Call-to-action Button */}
              <button className="mt-8 w-full bg-green_3 text-white py-3 rounded-md hover:bg-green_2 transition-colors font-medium">
                {isTeacherMode ? 'Book Now' : 'Choose Plan'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
