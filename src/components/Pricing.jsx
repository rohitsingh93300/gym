import { Check, CircleCheck, CircleCheckBig } from 'lucide-react'
import React from 'react'

const Pricing = () => {

  const pricingJson = [
    {
      plan: 'Basic',
      text: "For casual gym-goers",
      price: "$29.99/mo",
      t1: "Access to gym equipment",
      t2: "Locker room access",
      t3: "Free weights area"

    },
    {
      plan: 'Pro',
      text: "For serious fitness enthusiasts",
      price: "$49.99/mo",
      t1: "All Basic features",
      t2: "Group fitness classes",
      t3: "Personalized workout plan"

    },
    {
      plan: 'Elite',
      text: "For those who want it all",
      price: "$79.99/mo",
      t1: "All Pro features",
      t2: "Personal training sessions",
      t3: "Nutrition consultation"

    },
  ]
  return (
    <section className="p-8 pb-20 pt-10 text-center bg-slate-50 dark:bg-dark dark:text-white" id='pricing'>
      <div className='max-w-7xl mx-auto'>

      <h2 className="text-4xl font-bold mb-4 text-primary">Membership Pricing</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto  mb-12">
          Whether you’re looking for more information or just want to send us a message, feel free to reach out. We’d love to hear from you!
        </p>

      <div className="grid gap-6 md:grid-cols-3">

        {
          pricingJson.map((item) => {
            return <div className="border p-6 rounded-lg shadow-md text-start">
              <h3 className="text-2xl font-semibold">{item.plan}</h3>
              <p className='text-gray-500 text-sm'>{item.text}</p>
              <h1 className="text-3xl font-bold mt-4 mb-4">{item.price}</h1>
              <div className='flex gap-1'>
                {/* <Check/> */}
              <p>{item.t1}</p>
              </div>
              <div className='flex gap-1'>
                {/* <Check/> */}
              <p>{item.t2}</p>
              </div>
              <div className='flex gap-1'>
                {/* <Check/> */}
              <p>{item.t3}</p>
              </div>
              <button className='bg-dark dark:bg-white dark:text-black text-white px-3 py-2 rounded-md w-full mt-4'>Choose Plan</button>
            </div>
          })
        }
      </div>
      </div>
    </section>
  )
}

export default Pricing
