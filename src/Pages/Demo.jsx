import React from 'react'

const Demo = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">Try Our Demo</h1>
      <p className="text-lg text-green_3 mb-8 font-poppins text-center max-w-2xl">Experience the power of our language learning platform with this interactive demo.</p>
      <div className="bg-green_1 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-green_3 mb-4 font-pragatiNarrow">Interactive Language Exercise</h2>
        <p className="text-green_3 mb-4">Complete the sentence: "The quick brown fox _______ over the lazy dog."</p>
        <div className="flex flex-col space-y-2">
          <button className="text-left p-2 bg-white_1 hover:bg-green_2 hover:text-white_1 rounded transition-colors">jumps</button>
          <button className="text-left p-2 bg-white_1 hover:bg-green_2 hover:text-white_1 rounded transition-colors">running</button>
          <button className="text-left p-2 bg-white_1 hover:bg-green_2 hover:text-white_1 rounded transition-colors">jumped</button>
          <button className="text-left p-2 bg-white_1 hover:bg-green_2 hover:text-white_1 rounded transition-colors">jumping</button>
        </div>
      </div>
    </div>
  )
}

export default Demo

