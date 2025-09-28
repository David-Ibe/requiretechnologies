'use client'

import Script from 'next/script'
import { useState } from 'react'

interface PaystackButtonProps {
  email: string
}

export default function PaystackButton({ email }: PaystackButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = () => {
    if (!email) {
      alert('Please enter your email address first')
      return
    }

    setIsLoading(true)
    
    if (window.PaystackPop) {
      const handler = window.PaystackPop.setup({
        key: 'pk_test_your_paystack_public_key', // Replace with your actual Paystack public key
        email: email,
        amount: 10000 * 100, // ₦10,000 in kobo
        currency: 'NGN',
        ref: `demo_${Date.now()}`,
        callback: (response: any) => {
          console.log('Payment successful:', response)
          alert('Payment successful! We will contact you soon to schedule your demo.')
          setIsLoading(false)
        },
        onClose: () => {
          console.log('Payment closed')
          setIsLoading(false)
        },
      })
      handler.openIframe()
    } else {
      alert('Payment system is loading. Please try again in a moment.')
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="btn-secondary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Book a Demo (₦10,000)'}
      </button>
    </>
  )
}
