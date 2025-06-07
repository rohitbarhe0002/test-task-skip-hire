"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  AlertTriangle,
  Check,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { skipOptions } from "@/app/constant/constant"


export const SkipOptionCard = () => {
      const [selectedSkip, setSelectedSkip] = useState(1)
    
    
    
      const selectedSkipData = skipOptions.find((skip) => skip.id === selectedSkip)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skipOptions.map((skip) => (
              <Card
                key={skip.id}
                className={`group relative overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                  selectedSkip === skip.id
                    ? "bg-gray-800/60 border-2 border-gray-600 shadow-2xl shadow-black/40"
                    : "bg-gray-900/40 border border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-black/30"
                } backdrop-blur-sm`}
                onClick={() => setSelectedSkip(skip.id)}
              >
                {skip.popular && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-gray-700 text-gray-200 border border-gray-600 font-semibold px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={skip.image || "/placeholder.svg"}
                      alt={skip.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <Badge className="absolute top-4 right-4 bg-gray-800 border border-gray-700 text-gray-200 font-bold px-4 py-2 text-lg">
                      {skip.capacity}
                    </Badge>

                    {!skip.roadAllowed && (
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-yellow-900 border border-yellow-800 text-yellow-200 px-3 py-2 rounded-full text-sm font-semibold">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Permit Required</span>
                      </div>
                    )}

                    {selectedSkip === skip.id && (
                      <div className="absolute top-4 left-4 bg-gray-700 border border-gray-600 rounded-full p-2">
                        <Check className="w-5 h-5 text-gray-200" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-gray-200 transition-colors">
                        {skip.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{skip.description}</p>
                    </div>

                    <div className="space-y-2">
                      {skip.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-gray-200">{skip.price}</span>
                      <span className="text-gray-600 line-through text-lg">{skip.originalPrice}</span>
                      <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                        Save £{Number.parseInt(skip.originalPrice.slice(1)) - Number.parseInt(skip.price.slice(1))}
                      </Badge>
                    </div>

                    <p className="text-gray-500 text-sm">{skip.period}</p>

                    <Button
                      className={`w-full transition-all duration-300 ${
                        selectedSkip === skip.id
                          ? "bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-100"
                          : "bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200"
                      } font-semibold py-3 transform hover:scale-[1.02]`}
                    >
                      {selectedSkip === skip.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Selected
                        </>
                      ) : (
                        <>
                          Select This Skip
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  )
}