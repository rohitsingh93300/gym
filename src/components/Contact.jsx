import React from 'react'
import { Dumbbell, Mail, MapPin, Phone, Pin } from 'lucide-react';
// import mail from 'lucide-react'
const Contact = () => {
  return (
    <div id='contact' className="bg-gray-100 dark:bg-dark dark:text-white">
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen'>
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl mb-12">
          Whether you’re looking for more information or just want to send us a message, feel free to reach out. We’d love to hear from you!
        </p>

        <div className='grid md:grid-flow-col gap-10'>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#28282B] shadow-lg rounded-lg p-8 md:p-12 max-w-xl md:w-[400px] ">
            <form className="flex flex-col space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-dark rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-dark rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-dark rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-dark dark:bg-white dark:text-black text-white py-2 px-4 rounded-md shadow-md hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location and Map */}
          <div className="bg-white dark:bg-[#28282B] shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8 ">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Location</h3>
              {/* <div className="text-gray-600 dark:text-gray-300 flex gap-2 ">
                <Dumbbell/>
                FitBody Gym 
              </div> */}
              <div className="text-gray-600 dark:text-gray-300 flex gap-2 items-center">
                <MapPin className='text-primary'/>
                <p>
                123 Fitness Avenue <br />
                Muscle City, Workout State 12345
                </p>
              </div>
               
              <div className='flex gap-2 items-center'>
               <Phone className='text-primary'/>
              <p className="text-gray-600 dark:text-gray-300 mt-4">Phone: (123) 456-7890</p>
              </div>
              <div className='flex gap-2 items-center'>
              <Mail className='text-primary'/>
              <p className="text-gray-600 dark:text-gray-300">Email: contact@fitbodygym.com</p>
              </div>
              
            </div>
            <div className="">
              {/* Placeholder for Google Map */}
              <div className="w-full h-64 bg-gray-300 rounded-lg">
                <iframe
                  title="Gym Location"
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531577!3d-37.816279979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e2da3f5b15!2s123%20Fitness%20Avenue%2C%20Muscle%20City%2C%20Workout%20State!5e0!3m2!1sen!2sus!4v1616172366454!5m2!1sen!2sus"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
