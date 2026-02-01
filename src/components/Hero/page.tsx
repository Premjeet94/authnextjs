'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroPage() {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // basic validation
    if (!name || !phone) return

    // later you can send this to backend / DB
    console.log({ name, phone })

    // redirect to booking page
    router.push(`/book-slot?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`)
  }

  return (
    <section className="relative min-h-screen w-full">
  {/* Background */}
  <div 
    className="absolute inset-0 bg-contain bg-center hero"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
    <div className="max-w-4xl w-full text-center text-white space-y-6">

      <h1 className="text-3xl md:text-5xl font-bold">
        Helping Local Businesses Get More Customers Online
      </h1>

      <p className="text-base md:text-lg text-white/90">
        Google Maps, WhatsApp, websites, and online selling — all set up for you.
      </p>

      {/* Form */}
      <form className="flex flex-col md:flex-row gap-3 justify-center">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 bg-white rounded-md text-black w-full md:w-64"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-3 bg-white rounded-md text-black w-full md:w-64"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium"
        >
          Schedule Free Call
        </button>
      </form>

      <p className="text-sm text-white/70">
        No spam • Free consultation • Honest guidance
      </p>

    </div>
  </div>
</section>

  )
}
