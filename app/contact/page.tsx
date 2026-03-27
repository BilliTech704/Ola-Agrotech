'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Agricultural exports',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New ${formData.service} inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:info@olanrewajutrading.com?subject=${subject}&body=${body}`
    setStatus('sent')
    setFormData({ name: '', email: '', service: 'Agricultural exports', message: '' })
  }

  return (
    <div className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">Contact and inquiries</span>
            <h1 className="section-title mt-6">Let’s turn your next opportunity into a cleaner, better-structured commercial move.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8">
              Reach out for export planning, industrial sourcing, or market-facing brand work. We respond quickly and keep conversations clear from the start.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="panel p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">Email</p>
              <a href="mailto:info@olanrewajutrading.com" className="mt-3 block text-sm leading-7 text-[var(--ink)]">
                info@olanrewajutrading.com
              </a>
            </div>
            <div className="panel p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">Phone</p>
              <a href="tel:+2341234567890" className="mt-3 block text-sm leading-7 text-[var(--ink)]">
                +234 123 456 7890
              </a>
            </div>
            <div className="panel p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">Hours</p>
              <p className="mt-3 text-sm leading-7 text-[var(--ink)]">Mon - Fri, 9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#16362c_0%,#245d4a_52%,#1d4338_100%)] p-8 text-white shadow-[0_24px_60px_rgba(19,33,28,0.24)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">Direct access</p>
            <h2 className="mt-5 text-4xl text-white">A conversation that starts with clarity.</h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              We prefer a straightforward exchange: what you need, what market pressure you are dealing with, and what a successful outcome would look like.
            </p>

            <div className="mt-8 space-y-4 text-sm leading-7 text-white/76">
              <p>Lagos, Nigeria</p>
              <p>Export support, supplier coordination, and brand promotion planning.</p>
              <p>We typically respond within one business day for serious commercial inquiries.</p>
            </div>
          </div>

          <div className="panel p-8 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Inquiry form</p>
                <h2 className="mt-3 text-4xl">Tell us what you need.</h2>
              </div>
              <p className="max-w-sm text-sm leading-7">
                Submitting this form opens your email client with the details pre-filled.
              </p>
            </div>

            {status === 'sent' && (
              <div className="mt-6 rounded-[1.25rem] border border-[rgba(27,106,85,0.18)] bg-[rgba(27,106,85,0.08)] px-4 py-3 text-sm text-[var(--ink)]">
                Your message draft was prepared. If your email client did not open, contact us directly at{' '}
                <a href="mailto:info@olanrewajutrading.com" className="font-semibold">
                  info@olanrewajutrading.com
                </a>
                .
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--ink)]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--ink)]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-[var(--ink)]">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="field"
                >
                  <option>Agricultural exports</option>
                  <option>Brand promotion</option>
                  <option>Industrial sourcing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--ink)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="field resize-none"
                />
              </div>

              <button type="submit" className="button-primary w-full">
                Prepare My Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
