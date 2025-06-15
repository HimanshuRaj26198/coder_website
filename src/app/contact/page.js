// "use client"


// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import {
//     Mail,
//     Phone,
//     MapPin,
//     Clock,
//     MessageSquare,
//     Users,
//     Headphones,
//     Building,
//     Globe,
//     Send,
//     CheckCircle,
//     ArrowRight,
// } from "lucide-react"

// export default function ContactUs() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         company: "",
//         subject: "",
//         message: "",
//         inquiryType: "general",
//     })

//     const [isSubmitted, setIsSubmitted] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // Handle form submission here
//         setIsSubmitted(true)
//         setTimeout(() => setIsSubmitted(false), 3000)
//     }

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const contactMethods = [
//         {
//             icon: <Mail className="h-6 w-6" />,
//             title: "Email Us",
//             description: "Send us an email and we'll respond within 24 hours",
//             contact: "hello@codercrafter.com",
//             action: "mailto:hello@codercrafter.com",
//         },
//         {
//             icon: <Phone className="h-6 w-6" />,
//             title: "Call Us",
//             description: "Speak directly with our support team",
//             contact: "+1 (555) 123-4567",
//             action: "tel:+15551234567",
//         },
//         {
//             icon: <MessageSquare className="h-6 w-6" />,
//             title: "Live Chat",
//             description: "Chat with us in real-time for instant support",
//             contact: "Available 24/7",
//             action: "#",
//         },
//         {
//             icon: <Headphones className="h-6 w-6" />,
//             title: "Support Center",
//             description: "Browse our knowledge base and tutorials",
//             contact: "help.codercrafter.com",
//             action: "#",
//         },
//     ]

//     const offices = [
//         {
//             city: "San Francisco",
//             country: "USA",
//             address: "123 Tech Street, Suite 100",
//             zipCode: "San Francisco, CA 94105",
//             phone: "+1 (555) 123-4567",
//             email: "sf@codercrafter.com",
//             image: "/placeholder.svg?height=200&width=300",
//         },
//         {
//             city: "London",
//             country: "UK",
//             address: "456 Innovation Lane",
//             zipCode: "London, EC2A 4DP",
//             phone: "+44 20 7123 4567",
//             email: "london@codercrafter.com",
//             image: "/placeholder.svg?height=200&width=300",
//         },
//         {
//             city: "Tokyo",
//             country: "Japan",
//             address: "789 Digital Avenue",
//             zipCode: "Tokyo, 100-0001",
//             phone: "+81 3 1234 5678",
//             email: "tokyo@codercrafter.com",
//             image: "/placeholder.svg?height=200&width=300",
//         },
//     ]

//     const departments = [
//         {
//             icon: <Users className="h-8 w-8" />,
//             title: "Sales",
//             description: "Questions about pricing, plans, or custom solutions",
//             email: "sales@codercrafter.com",
//             phone: "+1 (555) 123-4567",
//         },
//         {
//             icon: <Headphones className="h-8 w-8" />,
//             title: "Support",
//             description: "Technical support and troubleshooting",
//             email: "support@codercrafter.com",
//             phone: "+1 (555) 123-4568",
//         },
//         {
//             icon: <Building className="h-8 w-8" />,
//             title: "Partnerships",
//             description: "Business partnerships and integrations",
//             email: "partners@codercrafter.com",
//             phone: "+1 (555) 123-4569",
//         },
//         {
//             icon: <Globe className="h-8 w-8" />,
//             title: "Media & Press",
//             description: "Press inquiries and media relations",
//             email: "press@codercrafter.com",
//             phone: "+1 (555) 123-4570",
//         },
//     ]

//     const faqs = [
//         {
//             question: "What are your support hours?",
//             answer:
//                 "Our support team is available 24/7 via live chat and email. Phone support is available Monday-Friday, 9 AM - 6 PM PST.",
//         },
//         {
//             question: "How quickly do you respond to inquiries?",
//             answer:
//                 "We typically respond to emails within 24 hours. Live chat responses are usually within minutes during business hours.",
//         },
//         {
//             question: "Do you offer custom solutions?",
//             answer:
//                 "Yes! We offer custom development solutions for enterprise clients. Contact our sales team to discuss your specific needs.",
//         },
//         {
//             question: "Can I schedule a demo?",
//             answer:
//                 "You can schedule a personalized demo with our team through the contact form or by calling our sales department.",
//         },
//     ]

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Hero Section */}
//             <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="absolute inset-0 bg-black opacity-20"></div>
//                 <div className="relative container mx-auto text-center">
//                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                         Get in <span className="text-yellow-400">Touch</span>
//                     </h1>
//                     <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//                         We're here to help! Whether you have questions, need support, or want to explore partnerships, our team is
//                         ready to assist you.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link
//                             href="#contact-form"
//                             className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
//                         >
//                             Send Message <Send className="ml-2 h-4 w-4" />
//                         </Link>
//                         <Link
//                             href="#offices"
//                             className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             Find Our Offices
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Methods Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">How Can We Help?</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Choose the best way to reach us based on your needs
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {contactMethods.map((method, index) => (
//                             <Link
//                                 key={index}
//                                 href={method.action}
//                                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
//                             >
//                                 <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">{method.icon}</div>
//                                 <h3 className="text-xl font-bold mb-3 text-gray-900">{method.title}</h3>
//                                 <p className="text-gray-600 mb-4 text-sm leading-relaxed">{method.description}</p>
//                                 <p className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
//                                     {method.contact}
//                                 </p>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form Section */}
//             <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
//                         <p className="text-xl text-gray-600">
//                             Fill out the form below and we'll get back to you as soon as possible
//                         </p>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
//                         {isSubmitted ? (
//                             <div className="text-center py-12">
//                                 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
//                                 <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
//                             </div>
//                         ) : (
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                                             Full Name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="name"
//                                             name="name"
//                                             required
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                                             placeholder="Your full name"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                                             Email Address *
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             required
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                                             placeholder="your.email@example.com"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                                             Company
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="company"
//                                             name="company"
//                                             value={formData.company}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                                             placeholder="Your company name"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
//                                             Inquiry Type
//                                         </label>
//                                         <select
//                                             id="inquiryType"
//                                             name="inquiryType"
//                                             value={formData.inquiryType}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                                         >
//                                             <option value="general">General Inquiry</option>
//                                             <option value="sales">Sales</option>
//                                             <option value="support">Technical Support</option>
//                                             <option value="partnership">Partnership</option>
//                                             <option value="press">Press & Media</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                                         Subject *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="subject"
//                                         name="subject"
//                                         required
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                                         placeholder="Brief description of your inquiry"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                                         Message *
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         required
//                                         rows={6}
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
//                                         placeholder="Please provide details about your inquiry..."
//                                     ></textarea>
//                                 </div>

//                                 <div className="text-center">
//                                     <button
//                                         type="submit"
//                                         className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
//                                     >
//                                         Send Message <Send className="ml-2 h-4 w-4" />
//                                     </button>
//                                 </div>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//             </section>

//             {/* Departments Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Contact by Department</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Reach out to the right team for faster, more targeted assistance
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {departments.map((dept, index) => (
//                             <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                                 <div className="text-blue-600 mb-4">{dept.icon}</div>
//                                 <h3 className="text-xl font-bold mb-3 text-gray-900">{dept.title}</h3>
//                                 <p className="text-gray-600 mb-6 text-sm leading-relaxed">{dept.description}</p>
//                                 <div className="space-y-2">
//                                     <Link
//                                         href={`mailto:${dept.email}`}
//                                         className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
//                                     >
//                                         <Mail className="h-4 w-4 mr-2" />
//                                         {dept.email}
//                                     </Link>
//                                     <Link
//                                         href={`tel:${dept.phone.replace(/\s/g, "")}`}
//                                         className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
//                                     >
//                                         <Phone className="h-4 w-4 mr-2" />
//                                         {dept.phone}
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Office Locations Section */}
//             <section id="offices" className="py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Global Offices</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Visit us in person or connect with our local teams around the world
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                         {offices.map((office, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//                             >
//                                 <div className="relative h-48">
//                                     <Image
//                                         src={office.image || "/placeholder.svg"}
//                                         alt={`${office.city} office`}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                                     <div className="absolute bottom-4 left-4 text-white">
//                                         <h3 className="text-xl font-bold">{office.city}</h3>
//                                         <p className="text-sm">{office.country}</p>
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="space-y-3">
//                                         <div className="flex items-start">
//                                             <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
//                                             <div>
//                                                 <p className="text-gray-900">{office.address}</p>
//                                                 <p className="text-gray-600 text-sm">{office.zipCode}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <Phone className="h-5 w-5 text-gray-400 mr-3" />
//                                             <Link
//                                                 href={`tel:${office.phone.replace(/\s/g, "")}`}
//                                                 className="text-blue-600 hover:text-blue-700"
//                                             >
//                                                 {office.phone}
//                                             </Link>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <Mail className="h-5 w-5 text-gray-400 mr-3" />
//                                             <Link href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700">
//                                                 {office.email}
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Business Hours Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//                 <div className="container mx-auto">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl sm:text-4xl font-bold mb-6">Business Hours</h2>
//                             <p className="text-xl text-gray-300 mb-8">
//                                 Our team is available to assist you during the following hours
//                             </p>

//                             <div className="space-y-4">
//                                 <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
//                                     <span className="font-medium">Monday - Friday</span>
//                                     <span className="text-gray-300">9:00 AM - 6:00 PM PST</span>
//                                 </div>
//                                 <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
//                                     <span className="font-medium">Saturday</span>
//                                     <span className="text-gray-300">10:00 AM - 4:00 PM PST</span>
//                                 </div>
//                                 <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
//                                     <span className="font-medium">Sunday</span>
//                                     <span className="text-gray-300">Closed</span>
//                                 </div>
//                                 <div className="flex items-center justify-between p-4 bg-blue-600 rounded-lg">
//                                     <span className="font-medium">Live Chat & Email</span>
//                                     <span>24/7 Available</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-gray-800 p-8 rounded-xl">
//                             <div className="flex items-center mb-6">
//                                 <Clock className="h-8 w-8 text-yellow-400 mr-3" />
//                                 <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
//                             </div>
//                             <p className="text-gray-300 mb-6">
//                                 For urgent matters outside business hours, use our live chat or email support. We monitor these channels
//                                 24/7 and will respond as quickly as possible.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
//                                     Start Live Chat
//                                 </button>
//                                 <Link
//                                     href="mailto:urgent@codercrafter.com"
//                                     className="border border-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
//                                 >
//                                     Send Urgent Email
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
//                         <p className="text-xl text-gray-600">Quick answers to common questions about contacting us</p>
//                     </div>

//                     <div className="space-y-6">
//                         {faqs.map((faq, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
//                             >
//                                 <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
//                                 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-12">
//                         <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
//                         <Link
//                             href="#contact-form"
//                             className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
//                         >
//                             Contact us directly <ArrowRight className="ml-2 h-4 w-4" />
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <div className="container mx-auto text-center">
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
//                     <p className="text-xl mb-8 max-w-3xl mx-auto">
//                         Join thousands of developers who trust CoderCrafter for their web development needs. Let's build something
//                         amazing together!
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link
//                             href="/signup"
//                             className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             Start Free Trial
//                         </Link>
//                         <Link
//                             href="/demo"
//                             className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             Schedule Demo
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }
"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageSquare,
    Users,
    Headphones,
    Building,
    Globe,
    Send,
    CheckCircle,
    ArrowRight,
    ChevronDown,
} from "lucide-react"

// Helper component for the FAQ accordion
const FaqItem = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button
            onClick={onClick}
            className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800 hover:text-sky-600 focus:outline-none"
        >
            <span>{faq.question}</span>
            <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <div
            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
        >
            <div className="overflow-hidden">
                <p className="pt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
        </div>
    </div>
)

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(0) // Default first FAQ to be open

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
                inquiryType: "general",
            })
        }, 4000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const contactMethods = [
        {
            icon: <Mail className="h-7 w-7" />,
            title: "Email Us",
            description: "For general inquiries and support.",
            contact: "hello@codercrafter.com",
            action: "mailto:hello@codercrafter.com",
        },
        {
            icon: <Phone className="h-7 w-7" />,
            title: "Call Us",
            description: "Speak directly with our sales team.",
            contact: "+1 (555) 123-4567",
            action: "tel:+15551234567",
        },
        {
            icon: <MessageSquare className="h-7 w-7" />,
            title: "Live Chat",
            description: "For instant support and questions.",
            contact: "Chat Now",
            action: "#",
        },
        {
            icon: <Headphones className="h-7 w-7" />,
            title: "Support Center",
            description: "Find answers in our knowledge base.",
            contact: "Visit Help Center",
            action: "#",
        },
    ]

    const offices = [
        {
            city: "San Francisco",
            country: "USA",
            address: "123 Tech Street, Suite 100, CA 94105",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            city: "London",
            country: "UK",
            address: "456 Innovation Lane, London, EC2A 4DP",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            city: "Tokyo",
            country: "Japan",
            address: "789 Digital Avenue, Tokyo, 100-0001",
            image: "/placeholder.svg?height=400&width=600",
        },
    ]

    const departments = [
        {
            icon: <Users className="h-8 w-8" />,
            title: "Sales",
            description: "Pricing, plans, or custom solutions.",
            email: "sales@codercrafter.com",
        },
        {
            icon: <Headphones className="h-8 w-8" />,
            title: "Support",
            description: "Technical support and troubleshooting.",
            email: "support@codercrafter.com",
        },
        {
            icon: <Building className="h-8 w-8" />,
            title: "Partnerships",
            description: "Business partnerships and integrations.",
            email: "partners@codercrafter.com",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Media & Press",
            description: "Press inquiries and media relations.",
            email: "press@codercrafter.com",
        },
    ]

    const faqs = [
        {
            question: "What are your support hours?",
            answer:
                "Our support team is available 24/7 via live chat and email. Phone support is available Monday-Friday, 9 AM - 6 PM PST.",
        },
        {
            question: "How quickly do you respond to inquiries?",
            answer:
                "We typically respond to emails within 24 hours. Live chat responses are usually within minutes during business hours.",
        },
        {
            question: "Do you offer custom solutions?",
            answer:
                "Yes! We offer custom development solutions for enterprise clients. Contact our sales team to discuss your specific needs.",
        },
        {
            question: "Can I schedule a demo?",
            answer:
                "You can schedule a personalized demo with our team through the contact form or by calling our sales department.",
        },
    ]

    return (
        <div className="min-h-screen bg-slate-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                <div className="relative container mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We're here to help! Whether you have questions, need support, or want to explore partnerships, our team is
                        ready to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact-form"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-sky-500/30"
                        >
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="#offices"
                            className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                        >
                            Find Our Offices
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">How Can We Help?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose the best way to reach us based on your needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <Link
                                key={index}
                                href={method.action}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-sky-500/50"
                            >
                                <div className="mb-5 flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                                    {method.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{method.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{method.description}</p>
                                <span className="font-semibold text-sky-600 group-hover:text-sky-700 transition-colors flex items-center">
                                    {method.contact}{" "}
                                    <ArrowRight className="ml-1.5 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Business Hours Section */}
            <section id="contact-form" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Form */}
                        <div>
                            <div className="text-left mb-10">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
                                <p className="text-lg text-gray-600">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-200/80">
                                {isSubmitted ? (
                                    <div className="text-center py-12 transition-all duration-500 ease-in-out">
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Inquiry Type
                                                </label>
                                                <select
                                                    id="inquiryType"
                                                    name="inquiryType"
                                                    value={formData.inquiryType}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                >
                                                    <option value="general">General Inquiry</option>
                                                    <option value="sales">Sales</option>
                                                    <option value="support">Technical Support</option>
                                                    <option value="partnership">Partnership</option>
                                                    <option value="press">Press & Media</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Brief description of your inquiry"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-input resize-none"
                                                placeholder="Please provide details about your inquiry..."
                                            ></textarea>
                                        </div>
                                        <div className="text-center pt-2">
                                            <button
                                                type="submit"
                                                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg hover:shadow-sky-600/40 w-full justify-center sm:w-auto"
                                            >
                                                Send Message <Send className="ml-2 h-4 w-4" />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                        {/* Business Hours */}
                        <div className="lg:mt-24">
                            <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-white">
                                <div className="flex items-center mb-6">
                                    <Clock className="h-8 w-8 text-sky-400 mr-4" />
                                    <h3 className="text-2xl font-bold">Business Hours</h3>
                                </div>
                                <p className="text-slate-300 mb-8">Our team is available to assist you during the following hours.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg text-sm">
                                        <span className="font-medium">Monday - Friday</span>
                                        <span className="text-slate-300">9:00 AM - 6:00 PM PST</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg text-sm">
                                        <span className="font-medium">Saturday</span>
                                        <span className="text-slate-300">10:00 AM - 4:00 PM PST</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg text-sm">
                                        <span className="font-medium">Sunday</span>
                                        <span className="text-slate-300">Closed</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-sky-500/20 border border-sky-500/30 rounded-lg text-sm">
                                        <span className="font-medium text-sky-300">Live Chat & Email</span>
                                        <span className="font-semibold">24/7 Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Contact by Department</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Reach out to the right team for faster, more targeted assistance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-200/60"
                            >
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-5">
                                    {dept.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{dept.title}</h3>
                                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{dept.description}</p>
                                <Link
                                    href={`mailto:${dept.email}`}
                                    className="font-semibold text-sky-600 hover:text-sky-700 text-sm inline-flex items-center"
                                >
                                    Email {dept.title} <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Locations Section */}
            <section id="offices" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Global Offices</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Visit us in person or connect with our local teams around the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden group transition-shadow hover:shadow-2xl"
                            >
                                <div className="relative h-56">
                                    <Image
                                        src={office.image || "/placeholder.svg"}
                                        alt={`${office.city} office`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <h3 className="text-2xl font-bold">{office.city}</h3>
                                        <p className="text-sm opacity-90">{office.country}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-gray-400 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">{office.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Quick answers to common questions about contacting us.</p>
                    </div>
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/80">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                faq={faq}
                                isOpen={openFaq === index}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                        <Link
                            href="#contact-form"
                            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
                        >
                            Contact us directly <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Add this to your globals.css or a relevant CSS file for the form input styles
/*
@layer components {
  .form-input {
    @apply block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors placeholder:text-gray-400;
  }
}
*/
