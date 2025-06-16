// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import {
//     ChevronDown,
//     Menu,
//     X,
//     Globe,
//     Code,
//     Database,
//     Smartphone,
//     Cloud,
//     ShieldCheck,
//     Users,
//     DollarSign,
//     Briefcase,
//     MessageSquare,
//     LifeBuoy,
//     ArrowRight,
// } from "lucide-react"

// const courses = [
//     {
//         name: "Full Stack Web Development",
//         description: "Master React, Node.js, and modern web technologies",
//         icon: <Globe className="h-5 w-5 text-sky-500" />,
//         href: "/courses/full-stack",
//     },
//     {
//         name: "Frontend Development",
//         description: "React, Vue.js, and modern frontend frameworks",
//         icon: <Code className="h-5 w-5 text-emerald-500" />,
//         href: "/courses/frontend",
//     },
//     {
//         name: "Backend Development",
//         description: "Node.js, Python, and server-side programming",
//         icon: <Database className="h-5 w-5 text-amber-500" />,
//         href: "/courses/backend",
//     },
//     {
//         name: "Mobile App Development",
//         description: "React Native and cross-platform development",
//         icon: <Smartphone className="h-5 w-5 text-purple-500" />,
//         href: "/courses/mobile",
//     },
//     {
//         name: "Cloud Computing & DevOps",
//         description: "AWS, Docker, Kubernetes, and deployment",
//         icon: <Cloud className="h-5 w-5 text-rose-500" />,
//         href: "/courses/devops",
//     },
//     {
//         name: "AWS Certified Solutions Architect",
//         description: "Prepare for the AWS Solutions Architect exam",
//         icon: <ShieldCheck className="h-5 w-5 text-teal-500" />,
//         href: "/courses/aws-solutions-architect",
//     },
// ]

// const navLinks = [
//     { name: "About", href: "/about", icon: <Users className="h-5 w-5 lg:hidden" /> },
//     { name: "Pricing", href: "/plans&pricing", icon: <DollarSign className="h-5 w-5 lg:hidden" /> },
//     { name: "Careers", href: "/careers", icon: <Briefcase className="h-5 w-5 lg:hidden" /> },
//     { name: "Blogs", href: "/blogs", icon: <MessageSquare className="h-5 w-5 lg:hidden" /> },
//     { name: "Support", href: "/help&support", icon: <LifeBuoy className="h-5 w-5 lg:hidden" /> },
// ]

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
//     const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)
//     const coursesDropdownRef = useRef(null)
//     const mobileMenuRef = useRef(null)

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen)
//         if (isMobileCoursesOpen) setIsMobileCoursesOpen(false)
//     }

//     const toggleMobileCourses = () => {
//         setIsMobileCoursesOpen(!isMobileCoursesOpen)
//     }

//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false)
//         setIsMobileCoursesOpen(false)
//     }

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
//                 setIsCoursesDropdownOpen(false)
//             }
//             if (
//                 mobileMenuRef.current &&
//                 !mobileMenuRef.current.contains(event.target) &&
//                 !(event.target).closest('button[aria-label="Toggle menu"]')
//             ) {
//                 closeMobileMenu()
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside)
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside)
//         }
//     }, [])

//     return (
//         <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-20 items-center justify-between">
//                     <div className="flex items-center">
//                         <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
//                             <Image
//                                 src="/assets/images/codecrafter_logo.png"
//                                 alt="CoderCrafter Logo"
//                                 width={150}
//                                 height={35}
//                                 priority
//                             />
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center space-x-2">
//                         <div className="relative" ref={coursesDropdownRef}>
//                             <button
//                                 onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
//                                 onMouseEnter={() => setIsCoursesDropdownOpen(true)}
//                                 onMouseLeave={() => setIsCoursesDropdownOpen(false)}
//                                 className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
//                             >
//                                 Courses
//                                 <ChevronDown
//                                     className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${isCoursesDropdownOpen ? "rotate-180" : ""
//                                         }`}
//                                 />
//                             </button>
//                             {isCoursesDropdownOpen && (
//                                 <div
//                                     onMouseEnter={() => setIsCoursesDropdownOpen(true)}
//                                     onMouseLeave={() => setIsCoursesDropdownOpen(false)}
//                                     className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[26rem] origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none py-3 px-2"
//                                 >
//                                     <div className="grid gap-2">
//                                         {courses.map((course) => (
//                                             <Link
//                                                 key={course.name}
//                                                 href={course.href}
//                                                 onClick={() => setIsCoursesDropdownOpen(false)}
//                                                 className="group flex items-start gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 transition-colors"
//                                             >
//                                                 <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                                                     {course.icon}
//                                                 </div>
//                                                 <div>
//                                                     <div className="font-semibold text-gray-900 group-hover:text-sky-600">{course.name}</div>
//                                                     <p className="mt-1 text-gray-600 text-xs">{course.description}</p>
//                                                 </div>
//                                             </Link>
//                                         ))}
//                                     </div>
//                                     <div className="mt-3 pt-3 border-t border-gray-200">
//                                         <Link
//                                             href="/courses"
//                                             onClick={() => setIsCoursesDropdownOpen(false)}
//                                             className="block text-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors py-2"
//                                         >
//                                             View All Courses <ArrowRight className="inline h-4 w-4 ml-1" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Desktop Auth Buttons */}
//                     <div className="hidden lg:flex items-center space-x-3">
//                         <Link
//                             href="/login"
//                             className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
//                         >
//                             Login
//                         </Link>
//                         <Link
//                             href="/register"
//                             className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors"
//                         >
//                             Sign Up
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="flex lg:hidden">
//                         <button
//                             type="button"
//                             aria-label="Toggle menu"
//                             onClick={toggleMobileMenu}
//                             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMobileMenuOpen ? (
//                                 <X className="h-6 w-6" aria-hidden="true" />
//                             ) : (
//                                 <Menu className="h-6 w-6" aria-hidden="true" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 ref={mobileMenuRef}
//                 className={`lg:hidden fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
//                     }`}
//                 style={{ paddingTop: "5rem" }} // Add padding to account for header height
//             >
//                 <div className="p-6">
//                     <div className="flow-root">
//                         <div className="-my-6 divide-y divide-gray-500/10">
//                             <div className="space-y-2 py-6">
//                                 <div>
//                                     <button
//                                         onClick={toggleMobileCourses}
//                                         className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                                     >
//                                         Courses
//                                         <ChevronDown
//                                             className={`h-5 w-5 flex-none transition-transform duration-200 ${isMobileCoursesOpen ? "rotate-180" : ""
//                                                 }`}
//                                             aria-hidden="true"
//                                         />
//                                     </button>
//                                     {isMobileCoursesOpen && (
//                                         <div className="mt-2 space-y-2 pl-4">
//                                             {courses.map((item) => (
//                                                 <Link
//                                                     key={item.name}
//                                                     href={item.href}
//                                                     onClick={closeMobileMenu}
//                                                     className="group -mx-3 flex items-start gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
//                                                 >
//                                                     <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                                                         {item.icon}
//                                                     </div>
//                                                     <div>
//                                                         {item.name}
//                                                         <p className="mt-0.5 text-xs text-gray-500 font-normal">{item.description}</p>
//                                                     </div>
//                                                 </Link>
//                                             ))}
//                                             <Link
//                                                 href="/courses"
//                                                 onClick={closeMobileMenu}
//                                                 className="block text-center text-sm font-semibold text-sky-600 hover:text-sky-700 py-2 border-t border-gray-200 mt-2"
//                                             >
//                                                 View All Courses <ArrowRight className="inline h-4 w-4 ml-1" />
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>
//                                 {navLinks.map((link) => (
//                                     <Link
//                                         key={link.name}
//                                         href={link.href}
//                                         onClick={closeMobileMenu}
//                                         className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                                     >
//                                         {link.icon}
//                                         {link.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                             <div className="py-6 space-y-3">
//                                 <Link
//                                     href="/login"
//                                     onClick={closeMobileMenu}
//                                     className="block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 text-center border border-gray-300"
//                                 >
//                                     Log in
//                                 </Link>
//                                 <Link
//                                     href="/register"
//                                     onClick={closeMobileMenu}
//                                     className="block w-full rounded-lg bg-sky-600 px-3 py-2.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-700 text-center"
//                                 >
//                                     Sign up
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    ChevronDown,
    Menu,
    X,
    Globe,
    Code,
    Database,
    Smartphone,
    Cloud,
    ShieldCheck,
    Users,
    DollarSign,
    Briefcase,
    MessageSquare,
    LifeBuoy,
    ArrowRight,
} from "lucide-react"

const courses = [
    {
        name: "Full Stack Web Development",
        description: "Master React, Node.js, and modern web technologies",
        icon: <Globe className="h-5 w-5 text-sky-500" />,
        href: "/courses/full-stack",
    },
    {
        name: "Frontend Development",
        description: "React, Vue.js, and modern frontend frameworks",
        icon: <Code className="h-5 w-5 text-emerald-500" />,
        href: "/courses/frontend",
    },
    {
        name: "Backend Development",
        description: "Node.js, Python, and server-side programming",
        icon: <Database className="h-5 w-5 text-amber-500" />,
        href: "/courses/backend",
    },
    {
        name: "Mobile App Development",
        description: "React Native and cross-platform development",
        icon: <Smartphone className="h-5 w-5 text-purple-500" />,
        href: "/courses/mobile",
    },
    {
        name: "Cloud Computing & DevOps",
        description: "AWS, Docker, Kubernetes, and deployment",
        icon: <Cloud className="h-5 w-5 text-rose-500" />,
        href: "/courses/devops",
    },
    {
        name: "AWS Certified Solutions Architect",
        description: "Prepare for the AWS Solutions Architect exam",
        icon: <ShieldCheck className="h-5 w-5 text-teal-500" />,
        href: "/courses/aws-solutions-architect",
    },
]

const navLinks = [
    { name: "About", href: "/about", icon: <Users className="h-5 w-5 lg:hidden" /> },
    { name: "Pricing", href: "/plans&pricing", icon: <DollarSign className="h-5 w-5 lg:hidden" /> },
    { name: "Careers", href: "/careers", icon: <Briefcase className="h-5 w-5 lg:hidden" /> },
    { name: "Blog", href: "/blogs", icon: <MessageSquare className="h-5 w-5 lg:hidden" /> },
    { name: "Support", href: "/help&support", icon: <LifeBuoy className="h-5 w-5 lg:hidden" /> },
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)
    const coursesDropdownRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        if (isMobileCoursesOpen) setIsMobileCoursesOpen(false)
    }

    const toggleMobileCourses = () => {
        setIsMobileCoursesOpen(!isMobileCoursesOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsMobileCoursesOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
                setIsCoursesDropdownOpen(false)
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !(event.target).closest('button[aria-label="Toggle menu"]')
            ) {
                closeMobileMenu()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflowX = "hidden"
            // Optionally, if you want to prevent vertical scrolling of the page behind the menu:
            // document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowX = ""
            // document.body.style.overflowY = '';
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            document.body.style.overflowX = ""
            // document.body.style.overflowY = '';
        }
    }, [isMobileMenuOpen])

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
                            <Image
                                src="/assets/images/codecrafter_logo.png"
                                alt="CoderCrafter Logo"
                                width={150}
                                height={35}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        <div className="relative" ref={coursesDropdownRef}>
                            <button
                                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                            >
                                Courses
                                <ChevronDown
                                    className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${isCoursesDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {isCoursesDropdownOpen && (
                                <div
                                    onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                                    onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[26rem] origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none py-3 px-2"
                                >
                                    <div className="grid gap-2">
                                        {courses.map((course) => (
                                            <Link
                                                key={course.name}
                                                href={course.href}
                                                onClick={() => setIsCoursesDropdownOpen(false)}
                                                className="group flex items-start gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    {course.icon}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 group-hover:text-sky-600">{course.name}</div>
                                                    <p className="mt-1 text-gray-600 text-xs">{course.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <Link
                                            href="/courses"
                                            onClick={() => setIsCoursesDropdownOpen(false)}
                                            className="block text-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors py-2"
                                        >
                                            View All Courses <ArrowRight className="inline h-4 w-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link
                            href="/login"
                            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            onClick={toggleMobileMenu}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`lg:hidden fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
                    }`}
                style={{ paddingTop: "5rem" }} // Add padding to account for header height
            >
                <div className="p-6">
                    <div className="flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div>
                                    <button
                                        onClick={toggleMobileCourses}
                                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Courses
                                        <ChevronDown
                                            className={`h-5 w-5 flex-none transition-transform duration-200 ${isMobileCoursesOpen ? "rotate-180" : ""
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    {isMobileCoursesOpen && (
                                        <div className="mt-2 space-y-2 pl-4">
                                            {courses.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={closeMobileMenu}
                                                    className="group -mx-3 flex items-start gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                                >
                                                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        {item.name}
                                                        <p className="mt-0.5 text-xs text-gray-500 font-normal">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                            <Link
                                                href="/courses"
                                                onClick={closeMobileMenu}
                                                className="block text-center text-sm font-semibold text-sky-600 hover:text-sky-700 py-2 border-t border-gray-200 mt-2"
                                            >
                                                View All Courses <ArrowRight className="inline h-4 w-4 ml-1" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6 space-y-3">
                                <Link
                                    href="/login"
                                    onClick={closeMobileMenu}
                                    className="block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 text-center border border-gray-300"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={closeMobileMenu}
                                    className="block w-full rounded-lg bg-sky-600 px-3 py-2.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-700 text-center"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
