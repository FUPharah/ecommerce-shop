"use client"

import axios from "axios"
import { useEffect,useState } from "react"
import { useSearchParams } from "next/navigation"
import Button1 from "@/components/ui/button1"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import { toast } from "react-hot-toast"

const Summary = () => {
  const items = useCart((state) => state.items)
  const removeAllItems = useCart((state) => state.removeAllItems)
  const searchParams = useSearchParams()

  useEffect (() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful")
      removeAllItems()
    }
    if (searchParams.get("canceled")) {
      toast.error("Payment canceled")
    }
  }, [searchParams, removeAllItems])

  const totalPrice = items.reduce((total, item) => {
    return (
      total + Number(item.price)
    )
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });
    window.location = response.data.url;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6
    lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-base font-medium text-gray-900">
          Order Total
          <Currency value={totalPrice}/>
        </div>
      </div>
      <Button1 disabled={items.length === 0} onClick={onCheckout} className="mt-6 w-full">
        <span className="text-sky-500">Checkout</span>
      </Button1>
    </div>
  )
}

export default Summary
