// import Image from "next/image"
// import Link from "next/link"
// import { Users, Target, Award, Globe, Heart, Zap } from "lucide-react"

// export default function AboutUs() {
//     const stats = [
//         { number: "10M+", label: "Happy Customers" },
//         { number: "150+", label: "Countries Served" },
//         { number: "99.9%", label: "Uptime Guarantee" },
//         { number: "24/7", label: "Customer Support" },
//     ]

//     const values = [
//         {
//             icon: <Heart className="h-8 w-8" />,
//             title: "Customer First",
//             description: "We put our customers at the heart of everything we do, ensuring their success is our priority.",
//         },
//         {
//             icon: <Zap className="h-8 w-8" />,
//             title: "Innovation",
//             description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
//         },
//         {
//             icon: <Users className="h-8 w-8" />,
//             title: "Collaboration",
//             description: "We believe in the power of teamwork and foster an environment of open communication.",
//         },
//         {
//             icon: <Award className="h-8 w-8" />,
//             title: "Excellence",
//             description: "We strive for excellence in every project, maintaining the highest standards of quality.",
//         },
//         {
//             icon: <Globe className="h-8 w-8" />,
//             title: "Global Impact",
//             description: "We aim to make a positive impact on businesses and communities worldwide.",
//         },
//         {
//             icon: <Target className="h-8 w-8" />,
//             title: "Results Driven",
//             description: "We focus on delivering measurable results that drive real business value for our clients.",
//         },
//     ]

//     const team = [
//         {
//             name: "Sarah Johnson",
//             role: "CEO & Founder",
//             image: "/placeholder.svg?height=300&width=300",
//             bio: "With over 15 years of experience in tech leadership, Sarah founded CoderCrafter with a vision to democratize web development tools.",
//         },
//         {
//             name: "Michael Chen",
//             role: "CTO",
//             image: "/placeholder.svg?height=300&width=300",
//             bio: "Michael leads our technical vision and has been instrumental in building our scalable platform architecture.",
//         },
//         {
//             name: "Emily Rodriguez",
//             role: "Head of Design",
//             image: "/placeholder.svg?height=300&width=300",
//             bio: "Emily ensures our tools are not just powerful but also intuitive and beautiful to use.",
//         },
//         {
//             name: "David Kim",
//             role: "VP of Engineering",
//             image: "/placeholder.svg?height=300&width=300",
//             bio: "David oversees our engineering teams and ensures we deliver high-quality, reliable solutions.",
//         },
//     ]

//     const milestones = [
//         {
//             year: "2018",
//             title: "Company Founded",
//             description: "Started with a simple idea to make web development tools more accessible to everyone.",
//         },
//         {
//             year: "2019",
//             title: "First 1000 Users",
//             description: "Reached our first milestone of 1000 active users within the first year.",
//         },
//         {
//             year: "2020",
//             title: "Series A Funding",
//             description: "Secured $5M in Series A funding to expand our team and product offerings.",
//         },
//         {
//             year: "2021",
//             title: "Global Expansion",
//             description: "Expanded our services to over 50 countries worldwide.",
//         },
//         {
//             year: "2022",
//             title: "AI Integration",
//             description: "Launched AI-powered features to enhance developer productivity.",
//         },
//         {
//             year: "2023",
//             title: "10M+ Users",
//             description: "Celebrated reaching over 10 million users globally.",
//         },
//     ]

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Hero Section */}
//             <section className="relative bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="absolute inset-0 bg-black opacity-20"></div>
//                 <div className="relative container mx-auto text-center">
//                     <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//                         About CoderCrafter
//                     </h1>
//                     <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//                         We're on a mission to empower developers worldwide with innovative tools and solutions that make coding
//                         faster, easier, and more enjoyable.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link
//                             href="#our-story"
//                             className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             Our Story
//                         </Link>
//                         <Link
//                             href="#team"
//                             className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             Meet the Team
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//                         {stats.map((stat, index) => (
//                             <div key={index} className="text-center">
//                                 <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
//                                 <div className="text-gray-600 font-medium">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Our Story Section */}
//             <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="container mx-auto">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
//                             <div className="space-y-6 text-gray-600 leading-relaxed">
//                                 <p className="text-lg">
//                                     CoderCrafter was born from a simple observation: developers spend too much time on repetitive tasks
//                                     and not enough time on creative problem-solving. Our founders, having experienced this frustration
//                                     firsthand, set out to create a suite of tools that would change that.
//                                 </p>
//                                 <p>
//                                     What started as a weekend project in a small garage has grown into a global platform serving millions
//                                     of developers. We've remained true to our core mission: making development tools that are powerful,
//                                     intuitive, and accessible to everyone.
//                                 </p>
//                                 <p>
//                                     Today, we're proud to be at the forefront of the developer tools revolution, constantly innovating and
//                                     pushing the boundaries of what's possible in web development.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <Image
//                                 src="/placeholder.svg?height=500&width=600"
//                                 alt="Our office workspace"
//                                 width={600}
//                                 height={500}
//                                 className="rounded-lg shadow-xl"
//                             />
//                             <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-lg shadow-lg">
//                                 <div className="text-2xl font-bold text-gray-900">2025</div>
//                                 <div className="text-gray-700">Founded</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Mission & Vision Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mission & Vision</h2>
//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                             Driving the future of web development through innovation and accessibility
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-12">
//                         <div className="text-center md:text-left">
//                             <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
//                                 <Target className="h-8 w-8" />
//                             </div>
//                             <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                             <p className="text-gray-300 leading-relaxed">
//                                 To democratize web development by providing powerful, intuitive tools that enable developers of all
//                                 skill levels to create amazing digital experiences. We believe that great tools should empower
//                                 creativity, not hinder it.
//                             </p>
//                         </div>

//                         <div className="text-center md:text-left">
//                             <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
//                                 <Globe className="h-8 w-8 text-gray-900" />
//                             </div>
//                             <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//                             <p className="text-gray-300 leading-relaxed">
//                                 To be the world's leading platform for web development tools, fostering a global community where
//                                 innovation thrives and every developer has the resources they need to build the future of the web.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Values Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {values.map((value, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
//                             >
//                                 <div className="text-purple-600 mb-4">{value.icon}</div>
//                                 <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
//                                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate individuals behind CoderCrafter</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {team.map((member, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//                             >
//                                 <div className="aspect-square relative">
//                                     <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
//                                     <p className="text-purple-600 font-medium mb-3">{member.role}</p>
//                                     <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//             {/* Call to Action Section */}
//             <div className="pb-20">
//                 <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
//                     <div className="container mx-auto text-center">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
//                         <p className="text-xl mb-8 max-w-3xl mx-auto">
//                             Whether you're looking to use our tools, join our team, or partner with us, we'd love to hear from you.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Link
//                                 href="/contact"
//                                 className=" border-2 hover:text-gray-900  border-white hover:bg-white text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                             >
//                                 Get in Touch
//                             </Link>
//                             <Link
//                                 href="/careers"
//                                 className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                             >
//                                 View Careers
//                             </Link>
//                             <Link
//                                 href="/products"
//                                 className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                             >
//                                 Try Our Tools
//                             </Link>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }


import Image from "next/image"
import Link from "next/link"
import { Users, Target, Award, Globe, Heart, Zap, Building, Rocket, Lightbulb, Trophy } from "lucide-react"

// --- Reusable Style Constants ---
const buttonBaseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white"
const buttonPrimaryClasses = `${buttonBaseClasses} bg-sky-600 text-white hover:bg-sky-700 shadow-lg`
const buttonOutlineClasses = `${buttonBaseClasses} border-2 border-white text-white hover:bg-white hover:text-sky-600`
const buttonSizeLgClasses = "px-8 py-3 text-base"

// --- Page Data ---
const stats = [
    { number: "10M+", label: "Happy Customers" },
    { number: "150+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
]

const values = [
    {
        Icon: Heart,
        title: "Customer First",
        description: "We put our customers at the heart of everything we do, ensuring their success is our priority.",
    },
    {
        Icon: Zap,
        title: "Innovation",
        description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
        Icon: Users,
        title: "Collaboration",
        description:
            "We believe in the power of teamwork and foster an environment of open communication and mutual respect.",
    },
    {
        Icon: Award,
        title: "Excellence",
        description:
            "We strive for excellence in every project, maintaining the highest standards of quality and performance.",
    },
    {
        Icon: Globe,
        title: "Global Impact",
        description: "We aim to make a positive impact on businesses and communities worldwide through our technology.",
    },
    {
        Icon: Target,
        title: "Results Driven",
        description: "We focus on delivering measurable results that drive real business value and growth for our clients.",
    },
]

const team = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=300&width=300",
        bio: "With over 15 years of experience in tech leadership, Sarah founded CoderCrafter with a vision to democratize web development tools.",
    },
    {
        name: "Michael Chen",
        role: "CTO",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Michael leads our technical vision and has been instrumental in building our scalable platform architecture.",
    },
    {
        name: "Emily Rodriguez",
        role: "Head of Design",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Emily ensures our tools are not just powerful but also intuitive and beautiful to use, focusing on user experience.",
    },
    {
        name: "David Kim",
        role: "VP of Engineering",
        image: "/placeholder.svg?height=300&width=300",
        bio: "David oversees our engineering teams and ensures we deliver high-quality, reliable solutions on time.",
    },
]

const milestones = [
    {
        year: "2018",
        Icon: Building,
        title: "Company Founded",
        description: "Started with a simple idea to make web development tools more accessible to everyone.",
    },
    {
        year: "2019",
        Icon: Rocket,
        title: "First 1,000 Users",
        description:
            "Reached our first milestone of 1,000 active users within the first year, validating our core concept.",
    },
    {
        year: "2020",
        Icon: Lightbulb,
        title: "Series A Funding",
        description: "Secured $5M in Series A funding to expand our team and accelerate product development.",
    },
    {
        year: "2021",
        Icon: Globe,
        title: "Global Expansion",
        description: "Expanded our services to over 50 countries worldwide, building a diverse user base.",
    },
    {
        year: "2022",
        Icon: Zap,
        title: "AI Integration",
        description: "Launched AI-powered features to enhance developer productivity and streamline workflows.",
    },
    {
        year: "2023",
        Icon: Trophy,
        title: "10M+ Users",
        description: "Celebrated reaching over 10 million users globally, a testament to our growing community.",
    },
]

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-sky-600 to-sky-800 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">

                <div className="relative container mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About CoderCrafter</h1>
                    <p className="text-lg sm:text-xl text-sky-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to empower developers worldwide with innovative tools that make coding faster, easier,
                        and more enjoyable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/careers" className={`${buttonOutlineClasses} ${buttonSizeLgClasses}`}>
                            Our Story
                        </Link>
                        <Link
                            href="/careers"
                            className={`${buttonBaseClasses} bg-white text-sky-600 hover:bg-sky-50 ${buttonSizeLgClasses}`}
                        >
                            Meet the Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-sky-600 mb-2">{stat.number}</div>
                                <div className="text-base text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section id="our-story" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    CoderCrafter was born from a simple observation: developers spend too much time on repetitive tasks
                                    and not enough on creative problem-solving. Our founders, having experienced this frustration
                                    firsthand, set out to create a suite of tools that would change that.
                                </p>
                                <p>
                                    What started as a weekend project has grown into a global platform serving millions. We've remained
                                    true to our core mission: making development tools that are powerful, intuitive, and accessible to
                                    everyone.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Our office workspace"
                                width={600}
                                height={500}
                                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mission & Vision</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Driving the future of web development through innovation and accessibility.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To democratize web development by providing powerful, intuitive tools that enable developers of all
                                skill levels to create amazing digital experiences.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Globe className="h-8 w-8 text-gray-900" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To be the world's leading platform for web development tools, fostering a global community where
                                innovation thrives and every developer can build the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Values Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-sky-100 p-4 rounded-full">
                                        <value.Icon className="h-8 w-8 text-sky-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate individuals behind CoderCrafter.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden text-center group">
                                <div className="aspect-square relative">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                                    <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sky-700 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Whether you're looking to use our tools, join our team, or partner with us, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className={`${buttonOutlineClasses} ${buttonSizeLgClasses}`}>
                            Get in Touch
                        </Link>
                        <Link
                            href="/careers"
                            className={`${buttonBaseClasses} bg-white text-sky-600 hover:bg-sky-50 ${buttonSizeLgClasses}`}
                        >
                            View Careers
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
