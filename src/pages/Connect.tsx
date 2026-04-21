import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const formDefaults = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  message: "Tell us more about you",
};

const Connect: React.FC = () => {
  const [form, setForm] = useState(formDefaults);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(""); // Clear previous status

    try {
      await emailjs.send(
        "service_4mkeh9r", // Add your service ID
        "template_k5i8jfg", // Add your template ID
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          contactNumber: form.contactNumber,
          message: form.message,
          title: "Connect Inquiry",
        },
        "q8qaVW87xEZmdz_Qg" // Add your public key
      );

      setStatus("success");
      setForm(formDefaults);

      // Automatically hide the success message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
      
    } catch (error) {
      console.error(error);
      setStatus("error"); // Set error state instead of using alert()
    }
  };

  return (
    <main className="bg-white">
      <section className="bg-[#08173E] py-[30px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <h1 className="text-center font-['Roboto'] text-[clamp(2rem,4vw,3rem)] font-semibold text-white [text-shadow:0_0_10px_rgba(0,0,0,0.88)]">
            Connect with us!
          </h1>
        </div>
      </section>

      <section className="bg-[#EAFFE7] py-[30px]">
        <div className="mx-auto max-w-[1140px] px-6 text-center font-['Roboto'] text-[18px] leading-[1.9] text-black">
          <h3 className="mb-4 text-[clamp(1.6rem,3vw,2.1rem)] font-semibold">
            KIND NOTE REGARDING DONATIONS &amp; CONTRIBUTIONS
          </h3>
          <p>
            Step2StepUp Inc. is a US-based Non-Profit 501 (c) (3) Organization
            and contributions processed from the US are tax-deductible.
          </p>
          <p className="mt-3">
            Make checks payable to: <strong>STEP2STEPUP Inc.</strong>
          </p>
          <p className="mt-3">
            Mail checks to: STEP2STEPUP Inc., Attn. Vasu Pawar, 9258, Rainsong
            Avenue, Hesperia, CA 92344, USA
          </p>
          <p className="mt-3">&ndash; OR &ndash;</p>
          <p className="mt-3">
            Make Zelle payments: <strong>Step2StepUp Inc.</strong>
            <br />
            Zelle Account: vasu@step2stepup.org
            <br />
            JPMorgan Chase Bank
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-[50px]">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <img
              src="/images/home/helping-hand.webp"
              alt="Helping hand"
              className="w-full rounded-[8px] shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-['Roboto'] text-[clamp(1.9rem,3vw,2.45rem)] font-semibold text-[#0188BF]">
              FILL YOUR DETAILS BELOW
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-none bg-white"
            >
              <fieldset>
                <legend className="mb-3 block text-[16px] font-medium text-[#1f2937]">
                  Full Name <span aria-hidden="true" className="text-red-500">*</span>
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full rounded-[6px] border border-[#d5d8dd] px-4 py-3 text-[16px] text-[#1f2937] outline-none transition-colors focus:border-[#0188BF]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full rounded-[6px] border border-[#d5d8dd] px-4 py-3 text-[16px] text-[#1f2937] outline-none transition-colors focus:border-[#0188BF]"
                  />
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="connect-email"
                  className="mb-3 block text-[16px] font-medium text-[#1f2937]"
                >
                  Email <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="connect-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-[6px] border border-[#d5d8dd] px-4 py-3 text-[16px] text-[#1f2937] outline-none transition-colors focus:border-[#0188BF]"
                />
              </div>

              <div>
                <label
                  htmlFor="connect-number"
                  className="mb-3 block text-[16px] font-medium text-[#1f2937]"
                >
                  Contact Number <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="connect-number"
                  type="number"
                  name="contactNumber"
                  value={form.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                  className="w-full rounded-[6px] border border-[#d5d8dd] px-4 py-3 text-[16px] text-[#1f2937] outline-none transition-colors focus:border-[#0188BF]"
                />
              </div>

              <div>
                <label
                  htmlFor="connect-message"
                  className="mb-3 block text-[16px] font-medium text-[#1f2937]"
                >
                  Comment or Message
                </label>
                <textarea
                  id="connect-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-[6px] border border-[#d5d8dd] px-4 py-3 text-[16px] text-[#1f2937] outline-none transition-colors focus:border-[#0188BF]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-[6px] bg-[#066AAB] px-8 py-3 text-[16px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#0188BF] hover:shadow-lg focus:ring-2 focus:ring-[#0188BF] focus:ring-offset-2"
              >
                Submit Form
              </button>
            </form>

            {/* --- BEAUTIFUL NOTIFICATION MESSAGES START --- */}
            {status === "success" && (
              <div className="animate-fade-in flex items-center rounded-[6px] border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm" role="alert">
                <svg className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-semibold block sm:inline">Success! </span>
                  Your inquiry has been sent successfully. We will get back to you soon.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="animate-fade-in flex items-center rounded-[6px] border border-red-200 bg-red-50 p-4 text-red-800 shadow-sm" role="alert">
                <svg className="mr-3 h-6 w-6 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-semibold block sm:inline">Oops! </span>
                  Failed to send your message. Please check your connection and try again.
                </div>
              </div>
            )}
            {/* --- BEAUTIFUL NOTIFICATION MESSAGES END --- */}
            
          </div>
        </div>
      </section>

      <section className="bg-[#C8A04B] py-[60px]">
        <div className="mx-auto max-w-[1140px] px-6 text-center">
          <p className="font-['Roboto'] text-[clamp(1.85rem,4vw,2.2rem)] font-bold leading-[1.45] text-white">
            Join us at Step2StepUp Inc. and take the{" "}
            <span className="underline">first step</span> towards a future filled
            with possibilities. Together, we can empower young adults, transform
            communities, and build a brighter tomorrow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Connect;