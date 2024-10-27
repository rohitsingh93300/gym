import { Bike, Dumbbell, Heart, Users } from 'lucide-react'
import React from 'react'

const Service = () => {
  const services = [
    {
      title: "Strength Training",
      description: "Build muscle and increase your strength with our expert-led weight training programs.",
      icon: Dumbbell,
    },
    {
      title: "Group Classes",
      description: "Join our energetic group classes for a fun and motivating workout experience.",
      icon: Users,
    },
    {
      title: "Cardio Fitness",
      description: "Improve your cardiovascular health with our state-of-the-art cardio equipment and classes.",
      icon: Heart,
    },
    {
      title: "Spin Classes",
      description: "Pedal your way to fitness with our high-intensity spin classes led by certified instructors.",
      icon: Bike,
    },
  ]
  return (
    <section className=' bg-gray-100 dark:bg-[#28282B] dark:text-white'>

      <div className="p-8 pb-20 pt-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-red-500">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-dark p-6 rounded shadow text-start">
              <div className="w-12 h-12 bg-slate-100 dark:bg-dark text-primary border border-red-500 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
