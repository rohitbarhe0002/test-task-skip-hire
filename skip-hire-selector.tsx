"use client"

import {
  Check,
} from "lucide-react"

import { useState } from "react"
import { progressSteps, skipOptions } from "./app/constant/constant"
import { SkipOptionCard } from "./components/skip-option-card"
import { Footer } from "./components/footer-section"

export default function Component() {
  const [selectedSkip, setSelectedSkip] = useState(1)
  const selectedSkipData = skipOptions.find((skip) => skip.id === selectedSkip)

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-600/3 rounded-full blur-3xl"></div>
      </div>


      <div className="relative z-10 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm px-6 py-6">
        <div className="flex items-center justify-center space-x-8 max-w-5xl mx-auto">
          {progressSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <div
                className={`p-3 rounded-full transition-all duration-300 ${step.active
                    ? "bg-gray-700 border border-gray-600 shadow-lg"
                    : step.completed
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-gray-900 border border-gray-800 group-hover:bg-gray-800"
                  }`}
              >
                {step.completed && !step.active ? (
                  <Check className="w-5 h-5 text-gray-400" />
                ) : (
                  <step.icon className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${step.active ? "text-gray-300" : step.completed ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-100">Choose Your Skip Size</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Select the perfect skip size for your project. All prices include delivery, collection, and disposal.
            </p>
          </div>
          <SkipOptionCard />
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-800">
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              <span className="text-gray-400 font-semibold">💡 Pro Tip:</span> All images are representative. Actual
              skip appearance may vary. Prices include delivery, hire period, and collection. Additional charges may
              apply for prohibited items or overweight loads.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl shadow-black/40">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-sm mb-1">Selected Skip:</p>
                  <p className="text-2xl font-bold text-gray-100">{selectedSkipData?.name}</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-sm mb-1">Total Price:</p>
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl font-bold text-gray-200">{selectedSkipData?.price}</span>
                    <span className="text-gray-600 line-through text-xl">{selectedSkipData?.originalPrice}</span>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-sm mb-1">Hire Period:</p>
                  <p className="text-gray-300 font-semibold">{selectedSkipData?.period}</p>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
