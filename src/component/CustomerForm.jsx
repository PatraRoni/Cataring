// src/components/CustomerForm.jsx
import React from "react";


export default function CustomerForm() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Heading */}
          <h2
            className="font-dynalight font-normal text-[96px] leading-[100%] tracking-[0em] capitalize text-[#273F00] mb-12 relative inline-block"
          >
            Customer Informations
          </h2>

          {/* Empty spacer on the right for balance on wide screens */}
          <div className="flex-1" />
        </div>

        {/* Form card */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <form
            className="w-full max-w-3xl bg-[#D0F494] rounded-2xl p-6 md:p-8 shadow-sm"
            aria-label="Customer information form"
            onSubmit={(e) => {
              e.preventDefault();
              // handle submission
            }}
          >
            {/* Grid layout: 2 columns on md+, 1 column on small */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left column inputs */}
              <Input name="name" label="Your Name" placeholder="Your Name" />
              <Input name="email" label="Your Email" placeholder="Your Email" type="email" />

              <Input name="mobile" label="Mobile Number" placeholder="Mobile Number" />
              <Input name="date" label="Event Date" placeholder="Event Date" type="date" />

              <Input name="heads" label="No. Of Heads (Approx)" placeholder="No. Of Heads (Approx)" />
              <Input name="occasion" label="Occasion" placeholder="Occasion" />

              <Input name="venue" label="Venue Location" placeholder="Venue Location" />
              <Input name="pincode" label="Pincode" placeholder="Pincode" />

              {/* Full width address field across both columns */}
              <div className="md:col-span-2">
                <label htmlFor="address" className="sr-only">Your Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  placeholder="Your Address"
                  className="w-full rounded-full border px-4 py-3 focus:outline-none focus:ring-2 text-sm font-dmsans
                   bg-white border-[#65A105] focus:ring-[#65A105]"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center md:justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#65A105] hover:bg-[#4c7a01] text-white text-sm font-medium py-2.5 px-6 rounded-full shadow"
              >
                Send Quotation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Small helper input component used above */
function Input({ name, label, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full border px-4 py-3 focus:outline-none focus:ring-2 text-sm font-dmsans
                   bg-white border-[#65A105] focus:ring-[#65A105]"
      />
    </div>
  );
}
