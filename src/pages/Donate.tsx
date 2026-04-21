import { paymentMethods } from "../constants/siteData";


const Donate = () => {
  return (
    <main className="bg-white font-['Roboto']">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#08173E] py-[30px] relative">
        <div className="mx-auto max-w-[1140px] px-6">
          <h1 className="text-center text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Support Our Mission
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-b border-[#d5d8dd] py-[30px]">
        <div className="mx-auto max-w-[1140px] px-6 text-center text-[18px] leading-[1.9]">
          <p>
            We sincerely thank you for your contribution. Please select your preferred secure payment method below for Tickets, Advertisements, Booths, Sponsorships, or Contributions.
          </p>
        </div>
      </section>

      {/* ================= PAYMENT METHODS ================= */}
      <section className="mx-auto max-w-[1140px] px-6 py-[50px]">
        <h2 className="mb-8 text-center text-[clamp(1.9rem,3vw,2.45rem)] font-semibold text-[#0188BF] uppercase">
          Payment Methods
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-[6px] border border-[#d5d8dd] p-6 ${
                method.highlight ? "bg-[#EAFFE7]/30" : ""
              }`}
            >
              <h3 className="mb-2 text-[20px] font-semibold text-[#1f2937]">
                {method.title}
              </h3>

              <p className="mb-5 text-[15px] text-[#555555]">
                {method.description}
              </p>

              {/* FIELDS */}
              {method.fields && (
                <div className="mt-auto space-y-4 border-t border-[#d5d8dd] pt-5">
                  {method.fields.map((field, i) => (
                    <div key={i}>
                      <span className="block text-[13px] font-medium text-[#7a828e] uppercase">
                        {field.label}
                      </span>

                      <strong
                        className={`font-semibold whitespace-pre-line ${
                          field.highlight ? "text-[#0188BF]" : ""
                        }`}
                      >
                        {field.value}
                      </strong>
                    </div>
                  ))}
                </div>
              )}

              {/* LINKS */}
              {method.links && (
                <div className="mt-auto space-y-4 border-t border-[#d5d8dd] pt-5 flex flex-col">
                  {method.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full rounded-[6px] px-6 py-3 text-center text-[16px] font-medium transition ${
                        link.primary
                          ? "bg-[#066AAB] text-white hover:bg-[#0188BF]"
                          : "border border-[#066AAB] text-[#066AAB] hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= QR + DETAILS ================= */}
      <section className="bg-gray-50 border-y border-[#d5d8dd] py-[50px]">
        <div className="mx-auto max-w-[1140px] px-6 grid gap-12 md:grid-cols-2">

          {/* QR */}
          <div className="text-center">
            <h2 className="text-[clamp(1.6rem,2.5vw,2.1rem)] font-semibold text-[#0188BF] uppercase">
              Scan To Pay
            </h2>

            <p className="text-[16px] text-[#555] mb-4">
              Scan to open payment portal
            </p>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://givebutter.com/awards-night-2026-bsfcxz"
              className="mx-auto border p-3 rounded"
              alt="QR"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="text-[clamp(1.6rem,2.5vw,2.1rem)] font-semibold text-[#0188BF] uppercase">
              Confirm Your Details
            </h2>

            <p className="mt-4 text-[16px] leading-[1.8]">
              After payment, notify us with:
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Full Name & Phone Number</li>
              <li>Transaction Number</li>
              <li>Date</li>
              <li>Amount</li>
              <li>Purpose</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="bg-[#C8A04B] py-[60px] text-center">
        <p className="text-[clamp(1.8rem,4vw,2.2rem)] font-bold text-white">
          We deeply appreciate your support.
        </p>
      </section>

    </main>
  );
};

export default Donate;