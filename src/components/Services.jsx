import React from 'react'
import BannerImg from '../assets/banner.jpg'
import { Bike, Dumbbell, Heart, Users } from 'lucide-react';

const BgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Services = () => {
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
        <div
            id='service'
            style={BgStyle}
            className="dark:bg-black dark:text-white duration-300  "
        >
            <div className="bg-white/10  dark:bg-black/80 duration-300 px-6 md:px-0">
                <div className="max-w-7xl mx-auto min-h-[620px] flex items-center">
                    <div className="md:w-1/2 w-full mx-auto space-y-5">
                        <h1 data-aos="fade-up" className="text-red-500 font-bold text-4xl text-center mb-12">
                            Our Services
                        </h1>
                        <div className='grid grid-cols-2 gap-7 '>
                        {
                            services.map((service) => {
                                return <div className=''>
                                    <div className='flex flex-col md:flex-row gap-4 items-center text-center md:text-start'>
                                        <div className="w-12 h-12 bg-slate-100 dark:bg-[#28282B] text-primary rounded-full flex items-center justify-center md:mb-4">
                                            <service.icon className="w-6 h-6  text-primary-foreground" />
                                        </div>
                                        <div className='flex-1'>

                                            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                            <p className="text-gray-400 text-sm dark:text-gray-400 mt-2">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        </div>
                      
                        {/* <button
                            data-aos="fade-up"
                            data-aos-delay="700"
                            data-aos-once={"true"}
                            className="bg-red-500 px-3 py-2 rounded-md "
                        >
                            Get Started
                        </button> */}
                    </div>
                    <div className='md:w-1/2'></div>
                </div>
            </div>
        </div>
    )
}

export default Services
