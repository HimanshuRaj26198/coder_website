// import Link from "next/link"

// export default function Footer() {
//     const conversions = [
//         "RGB TO HEX",
//         "RGB To HSV",
//         "RGB TO CMYK",
//         "RGB To Pantone",
//         "HEX TO RGB",
//         "HEX TO HSV",
//         "HEX TO CMYK",
//         "HEX TO PANTONE",
//         "CMYK TO RGB",
//         "CMYK TO HEX",
//         "CMYK TO HSV",
//         "CMYK TO Pantone",
//         "Pantone To RGB",
//         "Pantone To HEX",
//         "Pantone TO HSV",
//         "Pantone TO CMYK",
//         "HSV TO RGB",
//         "HSV TO HEX",
//         "HSV TO CMYK",
//     ]

//     return (
//         <footer className="bg-gray-800 text-white">
//             {/* Main footer content */}
//             <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12">
//                 {/* Top section - Careers, Web Dev, Programming, IT Certs */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12">
//                     {/* In-demand Careers */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">In-demand Careers</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Full Stack Web Developer
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Cloud Engineer
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Project Manager
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Web Development */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">Web Development</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Web Development
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     React JS
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Angular
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Next JS
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Programming */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">Programming</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     JavaScript
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Python
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Java
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* IT Certifications */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">IT Certifications</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Amazon AWS
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     AWS Certified Cloud Practitioner
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Microsoft Azure Fundamentals
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Kubernetes
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Middle section - Certifications, Communication */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12">
//                     {/* Certifications */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">Certifications</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Project Management Certification
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Cloud Certification
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     HR Management Certification
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Communication */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">Communication</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Communication Skills
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Presentation Skills
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Public Speaking
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     PowerPoint
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     About us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="careers" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Careers
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Contact us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="blogs" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Blogs
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">Discover</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="/plans&pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Plans and Pricing
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/help&support" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                     Help and Support
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>


//                 </div>

//                 {/* Tools section with border separator */}
//                 <div className="border-t border-gray-700 pt-8 sm:pt-12">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6 lg:gap-8 mb-8 sm:mb-12">
//                         {/* Image Optimizer */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4 text-white">Image Tools</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <Link href="/tools/image-optimizer" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         Image Optimizer
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/tools/image-optimizer" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         Image Converter
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/tools/image-optimizer" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         Image Compressor
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Beautifiers */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4 text-white">Beautifiers</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         CSS Beautifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JS Beautifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON Beautifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML Beautifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         YAML Beautifier
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Minifiers */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4 text-white">Minifiers</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         CSS Minifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         HTML Minifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON Minifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JS Minifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         SQL Minifier
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML Minifier
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Color Converters */}
//                         <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2 2xl:col-span-1">
//                             <h3 className="text-lg font-semibold mb-4 text-white">Color Converters</h3>
//                             <ul className="space-y-2">
//                                 {conversions.map((conversion, index) => (
//                                     <li key={index}>
//                                         <Link
//                                             href={`#${conversion.toLowerCase().replace(/\s+/g, "-")}`}
//                                             className="text-gray-300 hover:text-white transition-colors text-sm block"
//                                         >
//                                             {conversion}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* XML Converters */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4 text-white">XML Converters</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To JSON
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To CSV
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To YAML
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To Excel
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To HTML
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To Java
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To Text
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To TSV
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         XML To XSL
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* JSON Converters */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4 text-white">JSON Converters</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To XML
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To CSV
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To YAML
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To Excel
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To HTML
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To Text
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON To TSV
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                                         JSON Formatter
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer bottom */}

//             <div className="border-t border-gray-600 py-8 text-center">
//                 <p className="text-sm text-gray-500">
//                     &copy; {new Date().getFullYear()} CoderCrafter. All rights reserved.
//                 </p>
//                 <div className="mt-4 flex justify-center space-x-6">
//                     <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
//                         Privacy Policy
//                     </Link>
//                     <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
//                         Terms & Conditions
//                     </Link>
//                     <Link href="/refund" className="text-sm text-gray-500 hover:text-gray-700">
//                         Refund Policy
//                     </Link>
//                     <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">
//                         Contact Us
//                     </Link>
//                 </div>
//             </div>

//         </footer>
//     )
// }


import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, ExternalLink } from "lucide-react"

const footerSections = [
    {
        title: "Learn",
        links: [
            { name: "Full Stack Development", href: "/courses" },
            { name: "Cloud & DevOps", href: "/courses" },
            { name: "Mobile App Development", href: "/courses" },
            { name: "MEAN/MERN Stack", href: "/courses" },
            { name: "Programming Languages", href: "/courses" },
            { name: "View All Courses", href: "/courses" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Blogs", href: "/blogs" },
            { name: "Press", href: "/press" }, // Added
            { name: " Plans", href: "/ plans&pricing" }, // Added
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help & Support", href: "/help&support" },
            { name: "Contact Us", href: "/contact" }, // Added
            { name: "Community Forum", href: "/community" }, // Added
            { name: "FAQs", href: "/faq" }, // Added
            { name: "Developer Tools", href: "/tools" }, // Consolidated tools link
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Refund Policy", href: "/refund" },
            { name: "Cookie Policy", href: "/cookies" }, // Added
        ],
    },
]

const socialLinks = [
    { name: "Facebook", Icon: Facebook, href: "https://facebook.com/codercrafter" },
    { name: "Twitter", Icon: Twitter, href: "https://twitter.com/codercrafter" },
    { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com/company/codercrafter" },
    { name: "Instagram", Icon: Instagram, href: "https://instagram.com/codercrafter" },
    { name: "YouTube", Icon: Youtube, href: "https://youtube.com/codercrafter" },
    { name: "GitHub", Icon: Github, href: "https://github.com/codercrafter" },
]

const IT = [
    { name: "Amazon AWS", href: "" },
    { name: "AWS Certified Cloud Practitioner", href: "" },
    { name: "Microsoft Azure Fundamentals", href: "" },
    { name: "Kubernetes", href: "" }, // Added
]

const popularTools = [
    { name: "Image Optimizer", href: "/tools/image-optimizer" },
    { name: "Code Beautifiers", href: "/tools" },
    { name: "Code Minifiers", href: "/tools" },
    { name: "Color Converters", href: "/tools" },
    { name: "JSON Tools", href: "/tools" },
    { name: "XML Tools", href: "/tools" },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
            <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Logo and About Section */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/images/codecrafter_logo.png"
                                alt="CoderCrafter Logo"
                                width={160}
                                height={40}
                                className="filter brightness-0 invert" // Makes logo white for dark background
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            Empowering the next generation of tech talent with industry-leading courses and hands-on learning
                            experiences.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-gray-400 hover:text-sky-400 transition-colors"
                                >
                                    <social.Icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Link Sections */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-base font-semibold text-white mb-5 tracking-wider uppercase">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm hover:text-sky-400 transition-colors duration-200 ease-in-out flex items-center group"
                                            >
                                                {link.name}
                                                {link.href.startsWith("http") && (
                                                    <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h3 className="text-base font-semibold text-white mb-5 tracking-wider uppercase">IT Certifications</h3>
                            <ul className="space-y-3">
                                {IT.map((link) => (

                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-sky-400 transition-colors duration-200 ease-in-out flex items-center group"
                                        >
                                            {link.name}

                                        </Link>
                                    </li>

                                ))}

                            </ul>
                        </div>
                        {/* Popular Tools Section - more compact */}
                        <div>
                            <h3 className="text-base font-semibold text-white mb-5 tracking-wider uppercase">Popular Tools</h3>
                            <ul className="space-y-3">
                                {popularTools.map((tool) => (
                                    <li key={tool.name}>
                                        <Link
                                            href={tool.href}
                                            className="text-sm hover:text-sky-400 transition-colors duration-200 ease-in-out flex items-center group"
                                        >
                                            {tool.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href="/tools"
                                        className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-200 ease-in-out flex items-center group"
                                    >
                                        All Developer Tools <ArrowRight className="ml-1.5 h-4 w-4" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CoderCrafter. All rights reserved.</p>
                    <p className="mt-2 text-xs text-gray-500">
                        Built with <span className="text-red-400">&hearts;</span> by the CoderCrafter Team.
                    </p>
                </div>
            </div>
        </footer>
    )
}

// Helper component for ArrowRight, if not already available
const ArrowRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
)
