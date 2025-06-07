import { Button } from "@/components/ui/button"
import {
  ArrowRight,
} from "lucide-react"

export const Footer = () => {

    return (
           <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-gray-200 px-8 py-3 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back
                </Button>
                <Button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-100 font-semibold px-8 py-3 transform hover:scale-[1.02] transition-all duration-300">
                  Continue to Booking
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
    )
}