"use client"

import axios from "axios"
import { useEffect,useState } from "react"
import { useSearchParams } from "next/navigation"
import Button from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import { toast } from "react-hot-toast"

const Summary = () => {
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6
    lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Summary
