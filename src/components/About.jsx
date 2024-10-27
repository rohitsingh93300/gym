import React from 'react'
import { Dumbbell, Users, Target } from "lucide-react"
import AboutImg from '../assets/About.jpg'

const About = () => {
  return (
    <section className='dark:bg-dark bg-slate-50 dark:text-white' id='about'>

    <div className="p-8 text-center max-w-7xl mx-auto ">
    <h2 className="text-4xl font-bold mb-4 text-red-500">About Us</h2>
    <p className="text-gray-600 dark:text-gray-200 max-w-xl mx-auto">
      Our gym is dedicated to helping you achieve your fitness goals with professional trainers and a motivating environment.
    </p>
    <div className="w-full py-12 md:py-24 lg:py-10 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4 text-start">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Acme Fitness</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Founded in 2010, Acme Fitness has been at the forefront of helping people achieve their fitness goals. Our state-of-the-art facilities, expert trainers, and supportive community create the perfect environment for your fitness journey.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-md">Our Story</button>
              <button variant="outline" className='bg-red-500 text-white px-3 py-2 rounded-md'>Meet Our Trainers</button>
            </div>
          </div>
          <img
            alt="Gym interior with modern equipment"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src={AboutImg}
            width="550"
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-16">
          <div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
              <Dumbbell className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-center text-gray-500">
                To inspire and empower individuals to reach their full potential through fitness, fostering a healthier and happier community.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Our Community</h3>
              <p className="text-center text-gray-500">
                We pride ourselves on creating a welcoming, inclusive environment where members support and motivate each other to achieve their goals.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Our Approach</h3>
              <p className="text-center text-gray-500">
                We combine cutting-edge equipment, personalized training programs, and nutritional guidance to help you achieve sustainable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default About
