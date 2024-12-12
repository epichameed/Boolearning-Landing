import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">About Boo Learning</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-lg text-green_3 mb-4 font-poppins">Boo Learning is revolutionizing the way people learn languages. Our innovative platform combines cutting-edge technology with proven learning methods to make language acquisition fun, engaging, and effective.</p>
          <p className="text-lg text-green_3 mb-4 font-poppins">Founded in 2020 by a team of language enthusiasts and tech experts, Boo Learning has quickly grown to become a leading name in online language education.</p>
          <p className="text-lg text-green_3 mb-4 font-poppins">Our mission is to break down language barriers and connect people across cultures through accessible and enjoyable learning experiences.</p>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="absolute top-0 right-0 w-48 h-48 bg-green_1 rounded-full -z-10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green_1 rounded-full -z-10 blur-xl"></div>
          <img 
            src="/placeholder.svg?height=400&width=400" 
            alt="Boo Learning Team" 
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-green_3 mb-4 font-rambla">Our Values</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
            <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">Innovation</h3>
            <p className="text-green_3 font-poppins">We constantly push the boundaries of language learning technology to provide the best possible experience for our users.</p>
          </div>
          <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
            <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">Accessibility</h3>
            <p className="text-green_3 font-poppins">We believe that language learning should be accessible to everyone, regardless of their background or circumstances.</p>
          </div>
          <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
            <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">Community</h3>
            <p className="text-green_3 font-poppins">We foster a supportive community of learners, encouraging collaboration and cultural exchange.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

