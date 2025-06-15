// "use client"
// const Courses = () => {
//     return (
//         <div className="bg-gray-100 text-gray-900">
//             <div className="max-w-7xl mx-auto px-4 py-12">
//                 <h1 className="text-4xl font-bold text-center mb-6">Explore Our Career-Oriented Courses</h1>
//                 <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
//                     Codercrafter offers industry-aligned training programs designed to help you become job-ready. Whether you're a beginner or an upskiller, we've got the right course for you.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-10">
//                     {[
//                         {
//                             title: 'Full Stack Development Bootcamp',
//                             duration: '6 Months',
//                             mode: 'Online / Offline',
//                             description: 'Master both frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Build real-world projects and deploy them.',
//                         },
//                         {
//                             title: 'Cloud Computing & DevOps',
//                             duration: '3 Months',
//                             mode: 'Online',
//                             description: 'Become a DevOps pro with hands-on training on AWS, Docker, Jenkins, Terraform, and Kubernetes. Real deployment pipelines included.',
//                         },
//                         {
//                             title: 'Mobile App Development (React Native)',
//                             duration: '4 Months',
//                             mode: 'Online',
//                             description: 'Learn how to build stunning Android and iOS apps using React Native. Includes Firebase integration and Play Store publishing.',
//                         },
//                         {
//                             title: 'MERN Stack Developer Course',
//                             duration: '3 Months',
//                             mode: 'Online / Offline',
//                             description: 'Dive deep into MongoDB, Express.js, React, and Node.js. Build full-fledged web applications and integrate REST APIs.',
//                         },
//                         {
//                             title: 'Programming Fundamentals (Python & JavaScript)',
//                             duration: '2 Months',
//                             mode: 'Self-paced / Live',
//                             description: 'Perfect for beginners, this course covers the basics of coding logic, problem-solving, and syntax mastery in Python and JavaScript.',
//                         },
//                     ].map((course, index) => (
//                         <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
//                             <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
//                             <p className="text-sm text-gray-500">Duration: {course.duration} • Mode: {course.mode}</p>
//                             <p className="text-gray-700 mt-3">{course.description}</p>
//                             <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//                                 Enroll Now
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Courses;


"use client"

import Link from "next/link"
import {
    Globe,
    Smartphone,
    Cloud,
    ShieldCheck,
    Brain,
    Palette,
    Gamepad2,
    BarChart3,
    Link2,
    Sparkles,
    Type,
    Sigma,
    GraduationCap,
    Clock,
    Laptop,
    TrendingUp,
    ChevronRight,
    Search,
} from "lucide-react"
import { useState } from "react"

const allCourses = [
    {
        title: "Full Stack Web Development Bootcamp",
        category: "Web Development",
        Icon: Globe,
        iconColor: "text-sky-500",
        duration: "6 Months",
        mode: "Online / Offline",
        description:
            "Master frontend (React, Vue) and backend (Node.js, Python) technologies. Build and deploy real-world, scalable web applications.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Git"],
        href: "/courses/full-stack-bootcamp",
        level: "Beginner to Advanced",
    },
    {
        title: "Cloud Engineering & DevOps Mastery",
        category: "Cloud & DevOps",
        Icon: Cloud,
        iconColor: "text-indigo-500",
        duration: "4 Months",
        mode: "Online",
        description:
            "Become a DevOps pro with hands-on training in AWS, Docker, Kubernetes, Jenkins, and Terraform. Implement CI/CD pipelines.",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "Linux"],
        href: "/courses/cloud-devops",
        level: "Intermediate",
    },
    {
        title: "Mobile App Development (React Native)",
        category: "Mobile Development",
        Icon: Smartphone,
        iconColor: "text-emerald-500",
        duration: "4 Months",
        mode: "Online",
        description:
            "Build stunning, cross-platform Android and iOS apps using React Native. Includes Firebase integration and app store publishing guidance.",
        skills: ["React Native", "JavaScript", "Firebase", "Redux", "API Integration", "Mobile UI/UX"],
        href: "/courses/react-native",
        level: "Intermediate",
    },
    {
        title: "Data Science & Machine Learning",
        category: "Data Science",
        Icon: Brain,
        iconColor: "text-rose-500",
        duration: "5 Months",
        mode: "Online / Hybrid",
        description:
            "Dive into data analysis, machine learning algorithms, Python programming, and data visualization tools like Pandas, NumPy, and Scikit-learn.",
        skills: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "SQL"],
        href: "/courses/data-science-ml",
        level: "Beginner to Intermediate",
    },
    {
        title: "Cybersecurity Analyst Program",
        category: "Cybersecurity",
        Icon: ShieldCheck,
        iconColor: "text-slate-500",
        duration: "4 Months",
        mode: "Online",
        description:
            "Learn to protect systems and data. Covers network security, ethical hacking, cryptography, and incident response.",
        skills: ["Network Security", "Ethical Hacking", "SIEM", "Cryptography", "Penetration Testing"],
        href: "/courses/cybersecurity-analyst",
        level: "Intermediate",
    },
    {
        title: "UI/UX Design Fundamentals",
        category: "Design",
        Icon: Palette,
        iconColor: "text-purple-500",
        duration: "3 Months",
        mode: "Online / Self-paced",
        description:
            "Master user-centered design principles, wireframing, prototyping, and user testing with tools like Figma and Adobe XD.",
        skills: ["UI Design", "UX Research", "Figma", "Prototyping", "User Testing", "Wireframing"],
        href: "/courses/ui-ux-design",
        level: "Beginner",
    },
    {
        title: "Advanced JavaScript & TypeScript",
        category: "Web Development",
        Icon: Type,
        iconColor: "text-yellow-500",
        duration: "2 Months",
        mode: "Online / Live",
        description:
            "Deep dive into modern JavaScript (ES6+), asynchronous programming, design patterns, and TypeScript for building robust applications.",
        skills: ["JavaScript ES6+", "TypeScript", "Async/Await", "Design Patterns", "Testing"],
        href: "/courses/advanced-js-ts",
        level: "Intermediate to Advanced",
    },
    {
        title: "Python for Data Analysis & Automation",
        category: "Programming",
        Icon: Sigma,
        iconColor: "text-blue-500",
        duration: "3 Months",
        mode: "Self-paced / Online",
        description:
            "Learn Python for data manipulation, web scraping, automating tasks, and working with popular libraries like Pandas and Beautiful Soup.",
        skills: ["Python", "Pandas", "NumPy", "Web Scraping", "Automation", "APIs"],
        href: "/courses/python-data-analysis",
        level: "Beginner to Intermediate",
    },
    {
        title: "Game Development with Unity",
        category: "Game Development",
        Icon: Gamepad2,
        iconColor: "text-lime-500",
        duration: "5 Months",
        mode: "Online",
        description:
            "Learn to create 2D and 3D games using Unity and C#. Covers game physics, animation, and level design.",
        skills: ["Unity", "C#", "Game Design", "3D Modeling Basics", "Game Physics"],
        href: "/courses/unity-game-dev",
        level: "Beginner to Intermediate",
    },
    {
        title: "Digital Marketing & SEO Specialization",
        category: "Marketing",
        Icon: BarChart3,
        iconColor: "text-orange-500",
        duration: "3 Months",
        mode: "Online",
        description: "Master SEO, SEM, content marketing, social media marketing, and analytics to drive online growth.",
        skills: ["SEO", "SEM", "Content Marketing", "Social Media", "Google Analytics"],
        href: "/courses/digital-marketing-seo",
        level: "Beginner",
    },
    {
        title: "Blockchain Development Fundamentals",
        category: "Emerging Tech",
        Icon: Link2,
        iconColor: "text-cyan-500",
        duration: "4 Months",
        mode: "Online / Hybrid",
        description: "Explore blockchain concepts, smart contracts, DApp development using Ethereum and Solidity.",
        skills: ["Blockchain", "Ethereum", "Solidity", "Smart Contracts", "Web3.js"],
        href: "/courses/blockchain-fundamentals",
        level: "Intermediate",
    },
    {
        title: "AI & Prompt Engineering",
        category: "AI",
        Icon: Sparkles,
        iconColor: "text-pink-500",
        duration: "2 Months",
        mode: "Online / Live",
        description: "Understand AI fundamentals and master the art of prompt engineering for various LLMs like GPT.",
        skills: ["AI Concepts", "Prompt Engineering", "LLMs", "API Integration", "Ethical AI"],
        href: "/courses/ai-prompt-engineering",
        level: "Beginner to Intermediate",
    },
]

const categories = ["All", ...new Set(allCourses.map((course) => course.category))]

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredCourses = allCourses.filter(
        (course) =>
            (selectedCategory === "All" || course.category === selectedCategory) &&
            (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))),
    )

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Explore Our Career-Focused Courses
                    </h1>
                    <p className="text-lg sm:text-xl text-sky-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        CoderCrafter offers industry-aligned training programs designed to make you job-ready. Whether you're a
                        beginner or looking to upskill, find the perfect course to launch or advance your tech career.
                    </p>
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Search courses (e.g., React, Python, AWS)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg border-transparent focus:ring-2 focus:ring-sky-300 focus:border-transparent text-base"
                                aria-label="Search courses"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Category Filters */}
                <div className="mb-12">
                    <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                  ${selectedCategory === category
                                        ? "bg-sky-600 text-white shadow-md hover:bg-sky-700"
                                        : "bg-white text-gray-700 shadow-sm hover:bg-gray-100 hover:text-sky-600 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.title}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
                            >
                                <div className={`p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200`}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div
                                            className={`p-2.5 rounded-lg bg-gradient-to-tr ${course.iconColor.replace("text-", "from-").replace("500", "400")} ${course.iconColor.replace("text-", "to-").replace("500", "600")} shadow-md`}
                                        >
                                            <course.Icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                                                {course.category}
                                            </span>
                                            <h2 className="text-xl font-bold text-gray-800 group-hover:text-sky-700 transition-colors">
                                                {course.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Duration: {course.duration}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Laptop className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Mode: {course.mode}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Level: {course.level}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">{course.description}</p>

                                    <div className="mb-5">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Skills You'll Learn:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {course.skills.slice(0, 5).map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 text-xs font-medium text-sky-700 bg-sky-100 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {course.skills.length > 5 && (
                                                <span className="px-2.5 py-1 text-xs font-medium text-sky-700 bg-sky-100 rounded-full">
                                                    +{course.skills.length - 5} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link
                                            href={course.href}
                                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors shadow-md hover:shadow-lg"
                                        >
                                            View Details
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Courses Found</h3>
                        <p className="text-gray-500">Try adjusting your search term or category filter.</p>
                    </div>
                )}
            </main>
        </div>
    )
}
