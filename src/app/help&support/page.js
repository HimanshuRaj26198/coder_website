// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import {
//     Search,
//     Book,
//     MessageCircle,
//     Video,
//     Download,
//     Users,
//     Headphones,
//     ChevronDown,
//     ChevronRight,
//     ExternalLink,
//     Clock,
//     Star,
//     CheckCircle,
//     AlertCircle,
//     FileText,
//     Play,
//     Zap,
//     Shield,
//     Code,
//     Smartphone,
//     Phone,
//     GraduationCap,
//     Notebook,
//     Monitor,
//     Globe,
//     User,
//     Mail,
// } from "lucide-react"

// export default function HelpSupport() {
//     const [searchQuery, setSearchQuery] = useState("")
//     const [expandedFaq, setExpandedFaq] = useState(null)
//     const [selectedCategory, setSelectedCategory] = useState("all")

//     const quickActions = [
//         {
//             icon: <MessageCircle className="h-8 w-8" />,
//             title: "Student Support",
//             description: "Get instant help from our academic team",
//             action: "Start Chat",
//             available: true,
//         },
//         {
//             icon: <Book className="h-8 w-8" />,
//             title: "Course Materials",
//             description: "Access all your learning resources",
//             action: "View Materials",
//             available: true,
//         },
//         {
//             icon: <Video className="h-8 w-8" />,
//             title: "Lecture Recordings",
//             description: "Review past classes and tutorials",
//             action: "Watch Now",
//             available: true,
//         },
//         {
//             icon: <Download className="h-8 w-8" />,
//             title: "Download Center",
//             description: "Get course software and tools",
//             action: "Download",
//             available: true,
//         },
//     ]

//     const supportChannels = [
//         {
//             icon: <MessageCircle className="h-6 w-6" />,
//             title: "Student Support Chat",
//             description: "Real-time academic assistance",
//             availability: "Mon-Fri, 9AM-8PM",
//             responseTime: "< 5 minutes",
//             status: "online",
//         },
//         {
//             icon: <Headphones className="h-6 w-6" />,
//             title: "Admissions Office",
//             description: "Questions about enrollment and programs",
//             availability: "Mon-Fri, 9AM-6PM",
//             responseTime: "Immediate",
//             status: "online",
//         },
//         {
//             icon: <Mail className="h-6 w-6" />,
//             title: "Email Support",
//             description: "Detailed academic support via email",
//             availability: "24/7 Available",
//             responseTime: "< 24 hours",
//             status: "online",
//         },
//         {
//             icon: <Users className="h-6 w-6" />,
//             title: "Student Community",
//             description: "Connect with fellow students",
//             availability: "Always Available",
//             responseTime: "Varies",
//             status: "online",
//         },
//     ]

//     const categories = [
//         { id: "all", name: "All Categories", count: 89 },
//         { id: "admissions", name: "Admissions", count: 15 },
//         { id: "courses", name: "Courses", count: 24 },
//         { id: "technical", name: "Technical Help", count: 18 },
//         { id: "payment", name: "Payments", count: 12 },
//         { id: "career", name: "Career Services", count: 10 },
//         { id: "resources", name: "Learning Resources", count: 10 },
//     ]

//     const popularArticles = [
//         {
//             title: "Getting Started with Full Stack Course",
//             category: "Courses",
//             readTime: "5 min read",
//             views: "1.2k views",
//             rating: 4.8,
//             icon: <Code className="h-5 w-5" />,
//         },
//         {
//             title: "How to Access Cloud Labs",
//             category: "Technical Help",
//             readTime: "3 min read",
//             views: "850 views",
//             rating: 4.5,
//             icon: <Monitor className="h-5 w-5" />,
//         },
//         {
//             title: "Payment Plan Options",
//             category: "Payments",
//             readTime: "4 min read",
//             views: "720 views",
//             rating: 4.7,
//             icon: <FileText className="h-5 w-5" />,
//         },
//         {
//             title: "Resume Preparation Guide",
//             category: "Career Services",
//             readTime: "6 min read",
//             views: "950 views",
//             rating: 4.9,
//             icon: <User className="h-5 w-5" />,
//         },
//         {
//             title: "MERN Stack Project Submission",
//             category: "Courses",
//             readTime: "4 min read",
//             views: "680 views",
//             rating: 4.6,
//             icon: <Globe className="h-5 w-5" />,
//         },
//         {
//             title: "Communication Skills Workshop",
//             category: "Courses",
//             readTime: "3 min read",
//             views: "540 views",
//             rating: 4.8,
//             icon: <MessageCircle className="h-5 w-5" />,
//         },
//     ]

//     const videoTutorials = [
//         {
//             title: "Full Stack Development Orientation",
//             duration: "12:45",
//             views: "1.5k",
//             thumbnail: "/placeholder.svg?height=180&width=320",
//             category: "Courses",
//         },
//         {
//             title: "Cloud Engineering Lab Setup",
//             duration: "8:32",
//             views: "1.2k",
//             thumbnail: "/placeholder.svg?height=180&width=320",
//             category: "Technical Help",
//         },
//         {
//             title: "Final Project Submission Guide",
//             duration: "6:18",
//             views: "980",
//             thumbnail: "/placeholder.svg?height=180&width=320",
//             category: "Courses",
//         },
//         {
//             title: "Interview Preparation Tips",
//             duration: "15:27",
//             views: "1.1k",
//             thumbnail: "/placeholder.svg?height=180&width=320",
//             category: "Career Services",
//         },
//     ]

//     const faqs = [
//         {
//             question: "How do I enroll in a course?",
//             answer:
//                 "You can enroll through our website by selecting your desired course and completing the application form. Our admissions team will contact you within 24 hours to guide you through the next steps.",
//             category: "admissions",
//         },
//         {
//             question: "What are the prerequisites for Full Stack Development?",
//             answer:
//                 "Basic knowledge of HTML, CSS, and JavaScript is recommended but not required. We offer introductory modules for beginners to get up to speed before diving into advanced topics.",
//             category: "courses",
//         },
//         {
//             question: "Can I get a refund if I'm not satisfied?",
//             answer:
//                 "We offer a 14-day refund policy from the course start date. If you're not satisfied with the program, you can request a full refund within this period.",
//             category: "payment",
//         },
//         {
//             question: "How do I access course materials?",
//             answer:
//                 "Once enrolled, you'll receive login credentials for our Learning Management System (LMS) where all course materials, assignments, and resources are available.",
//             category: "resources",
//         },
//         {
//             question: "What career support do you provide?",
//             answer:
//                 "We offer resume reviews, mock interviews, portfolio building, and job placement assistance through our dedicated career services team.",
//             category: "career",
//         },
//         {
//             question: "Are there any discounts available?",
//             answer:
//                 "We offer early-bird discounts, group discounts, and scholarships for meritorious students. Contact our admissions team for current offers.",
//             category: "payment",
//         },
//         {
//             question: "Can I switch between online and in-person classes?",
//             answer:
//                 "Yes, we offer flexible learning options. You can switch between formats by contacting our student support team at least one week before the new batch starts.",
//             category: "courses",
//         },
//         {
//             question: "How long do I have access to course materials?",
//             answer:
//                 "You'll have lifetime access to all course materials, including updates we make to the curriculum in the future.",
//             category: "resources",
//         },
//     ]

//     const systemStatus = [
//         { service: "Learning Portal", status: "operational", uptime: "99.9%" },
//         { service: "Video Lectures", status: "operational", uptime: "99.8%" },
//         { service: "Cloud Labs", status: "operational", uptime: "99.7%" },
//         { service: "Assignment Submission", status: "operational", uptime: "100%" },
//         { service: "Student Dashboard", status: "operational", uptime: "99.9%" },
//     ]

//     const filteredFaqs = selectedCategory === "all" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="absolute inset-0 bg-black opacity-20"></div>
//                 <div className="relative container mx-auto text-center">
//                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                         Student Support
//                     </h1>
//                     <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//                         Find answers, get academic support, and make the most of your learning experience
//                     </p>

//                     {/* Search Bar */}
//                     <div className="max-w-2xl mx-auto mb-8">
//                         <div className="relative">
//                             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search for course help, FAQs, or resources..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl border-0 focus:ring-2 focus:ring-yellow-400 text-lg"
//                             />
//                         </div>
//                     </div>

//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                         {quickActions.map((action, index) => (
//                             <button
//                                 key={index}
//                                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-xl transition-all duration-300 text-center group"
//                             >
//                                 <div className="text-yellow-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
//                                     {action.icon}
//                                 </div>
//                                 <h3 className="font-semibold mb-1 text-sm">{action.title}</h3>
//                                 <p className="text-xs text-gray-300">{action.description}</p>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Support Channels Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Get Academic Support</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Connect with our support teams through your preferred channel
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {supportChannels.map((channel, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div className="text-blue-600">{channel.icon}</div>
//                                     <div
//                                         className={`w-3 h-3 rounded-full ${channel.status === "online" ? "bg-green-500" : "bg-yellow-500"}`}
//                                     ></div>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2 text-gray-900">{channel.title}</h3>
//                                 <p className="text-gray-600 mb-4 text-sm">{channel.description}</p>
//                                 <div className="space-y-2 text-sm">
//                                     <div className="flex items-center text-gray-500">
//                                         <Clock className="h-4 w-4 mr-2" />
//                                         {channel.availability}
//                                     </div>
//                                     <div className="flex items-center text-gray-500">
//                                         <Zap className="h-4 w-4 mr-2" />
//                                         Response: {channel.responseTime}
//                                     </div>
//                                 </div>
//                                 <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
//                                     Contact Now
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Knowledge Base Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Student Resources</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Browse our comprehensive collection of academic guides and tutorials
//                         </p>
//                     </div>

//                     {/* Categories */}
//                     <div className="flex flex-wrap justify-center gap-4 mb-12">
//                         {categories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setSelectedCategory(category.id)}
//                                 className={`px-6 py-3 rounded-full font-medium transition-colors ${selectedCategory === category.id
//                                     ? "bg-blue-600 text-white"
//                                     : "bg-white text-gray-700 hover:bg-gray-100"
//                                     }`}
//                             >
//                                 {category.name} ({category.count})
//                             </button>
//                         ))}
//                     </div>

//                     {/* Popular Articles */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {popularArticles.map((article, index) => (
//                             <Link
//                                 key={index}
//                                 href="#"
//                                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
//                             >
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div className="text-blue-600">{article.icon}</div>
//                                     <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{article.category}</span>
//                                 </div>
//                                 <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
//                                     {article.title}
//                                 </h3>
//                                 <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
//                                     <span>{article.readTime}</span>
//                                     <span>{article.views}</span>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center">
//                                         <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                                         <span className="text-sm text-gray-600">{article.rating}</span>
//                                     </div>
//                                     <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Video Tutorials Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Video Tutorials</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">Learn with our step-by-step instructional videos</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {videoTutorials.map((video, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//                             >
//                                 <div className="relative">
//                                     <Image
//                                         src={video.thumbnail || "/placeholder.svg"}
//                                         alt={video.title}
//                                         width={320}
//                                         height={180}
//                                         className="w-full h-40 object-cover"
//                                     />
//                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
//                                         <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
//                                             <Play className="h-6 w-6 text-blue-600" />
//                                         </div>
//                                     </div>
//                                     <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                                         {video.duration}
//                                     </div>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
//                                         {video.title}
//                                     </h3>
//                                     <div className="flex items-center justify-between text-sm text-gray-500">
//                                         <span>{video.views} views</span>
//                                         <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">{video.category}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-12">
//                         <Link
//                             href="#"
//                             className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             View All Tutorials <ExternalLink className="ml-2 h-4 w-4" />
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
//                         <p className="text-xl text-gray-600">Quick answers to common student questions</p>
//                     </div>

//                     <div className="space-y-4">
//                         {filteredFaqs.map((faq, index) => (
//                             <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//                                 <button
//                                     onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                                     className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
//                                 >
//                                     <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
//                                     {expandedFaq === index ? (
//                                         <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
//                                     ) : (
//                                         <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
//                                     )}
//                                 </button>
//                                 {expandedFaq === index && (
//                                     <div className="px-6 pb-4">
//                                         <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-12">
//                         <p className="text-gray-600 mb-4">Still have questions?</p>
//                         <Link
//                             href="/contact"
//                             className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
//                         >
//                             Contact our support team <ChevronRight className="ml-1 h-4 w-4" />
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* System Status Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Learning Platform Status</h2>
//                         <p className="text-xl text-gray-600">Current status of our educational systems</p>
//                     </div>

//                     <div className="bg-gray-50 rounded-xl p-8">
//                         <div className="flex items-center justify-between mb-8">
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-900">All Systems Operational</h3>
//                                 <p className="text-gray-600">Last updated: 2 minutes ago</p>
//                             </div>
//                             <div className="flex items-center">
//                                 <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
//                                 <span className="text-green-600 font-semibold">Operational</span>
//                             </div>
//                         </div>

//                         <div className="space-y-4">
//                             {systemStatus.map((service, index) => (
//                                 <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
//                                     <div className="flex items-center">
//                                         <div
//                                             className={`w-3 h-3 rounded-full mr-3 ${service.status === "operational"
//                                                 ? "bg-green-500"
//                                                 : service.status === "maintenance"
//                                                     ? "bg-yellow-500"
//                                                     : "bg-red-500"
//                                                 }`}
//                                         ></div>
//                                         <span className="font-medium text-gray-900">{service.service}</span>
//                                     </div>
//                                     <div className="flex items-center space-x-4">
//                                         <span className="text-sm text-gray-500">Uptime: {service.uptime}</span>
//                                         <span
//                                             className={`text-sm font-medium ${service.status === "operational"
//                                                 ? "text-green-600"
//                                                 : service.status === "maintenance"
//                                                     ? "text-yellow-600"
//                                                     : "text-red-600"
//                                                 }`}
//                                         >
//                                             {service.status === "operational"
//                                                 ? "Operational"
//                                                 : service.status === "maintenance"
//                                                     ? "Maintenance"
//                                                     : "Down"}
//                                         </span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="mt-8 text-center">
//                             <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
//                                 View detailed status page <ExternalLink className="ml-2 h-4 w-4" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Community Section */}
//             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Student Community</h2>
//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                             Connect with fellow students, share knowledge, and grow together
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="bg-gray-800 p-8 rounded-xl text-center">
//                             <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
//                             <h3 className="text-xl font-bold mb-3">Student Forum</h3>
//                             <p className="text-gray-300 mb-6">
//                                 Join academic discussions, ask questions, and share your learning journey.
//                             </p>
//                             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
//                                 Join Forum
//                             </button>
//                         </div>

//                         <div className="bg-gray-800 p-8 rounded-xl text-center">
//                             <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
//                             <h3 className="text-xl font-bold mb-3">Study Groups</h3>
//                             <p className="text-gray-300 mb-6">
//                                 Collaborate with peers in dedicated course study groups.
//                             </p>
//                             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
//                                 Find Groups
//                             </button>
//                         </div>

//                         <div className="bg-gray-800 p-8 rounded-xl text-center">
//                             <GraduationCap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
//                             <h3 className="text-xl font-bold mb-3">Alumni Network</h3>
//                             <p className="text-gray-300 mb-6">Connect with our successful graduates for mentorship.</p>
//                             <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
//                                 Join Network
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Support CTA */}
//             <div className="py-20">
//                 <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//                     <div className="container mx-auto text-center">
//                         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Academic Support?</h2>
//                         <p className="text-xl mb-8 max-w-3xl mx-auto">
//                             Our student support team is dedicated to helping you succeed in your learning journey.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
//                                 <MessageCircle className="mr-2 h-5 w-5" />
//                                 Student Support Chat
//                             </button>
//                             <Link
//                                 href="/contact"
//                                 className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
//                             >
//                                 Contact Academic Advisor
//                             </Link>
//                             <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
//                                 <Phone className="mr-2 h-5 w-5" />
//                                 Call Admissions
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }


"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search, BookOpen, MessageSquare, PlaySquare, DownloadCloud, Users, Headphones, ChevronDown, ChevronRight, ExternalLink, Clock, Star, CheckCircle, FileText, Zap, ShieldCheck, Code2, Smartphone, GraduationCap, Mail, LifeBuoy, ThumbsUp, TrendingUp, Settings2, AlertTriangle, Cloud } from 'lucide-react'

// --- Reusable Style Constants ---
const buttonBaseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
const buttonPrimaryClasses = `${buttonBaseClasses} bg-sky-600 text-white hover:bg-sky-700 shadow-md`
const buttonOutlineClasses = `${buttonBaseClasses} border-2 border-sky-600 text-sky-600 hover:bg-sky-100`
const buttonSizeMdClasses = "px-6 py-2.5 text-sm"
const buttonSizeLgClasses = "px-8 py-3 text-base"

// --- Page Data ---
const quickActions = [
    {
        Icon: MessageSquare,
        title: "Student Support",
        description: "Get instant help from our academic team.",
        actionText: "Start Chat",
        href: "#support-channels",
    },
    {
        Icon: BookOpen,
        title: "Course Materials",
        description: "Access all your learning resources.",
        actionText: "View Materials",
        href: "#knowledge-base",
    },
    {
        Icon: PlaySquare,
        title: "Lecture Recordings",
        description: "Review past classes and tutorials.",
        actionText: "Watch Now",
        href: "#video-tutorials",
    },
    {
        Icon: DownloadCloud,
        title: "Download Center",
        description: "Get course software and tools.",
        actionText: "Download",
        href: "#", // Placeholder
    },
]

const supportChannels = [
    {
        Icon: MessageSquare,
        title: "Live Chat Support",
        description: "Real-time academic & technical assistance.",
        availability: "Mon-Fri, 9AM-8PM EST",
        responseTime: "< 5 mins",
        status: "online",
        actionText: "Chat Now",
    },
    {
        Icon: Headphones,
        title: "Admissions Office",
        description: "Enrollment & program queries.",
        availability: "Mon-Fri, 9AM-6PM EST",
        responseTime: "Immediate (Call)",
        status: "online",
        actionText: "Call Admissions",
    },
    {
        Icon: Mail,
        title: "Email Support",
        description: "Detailed academic support via email.",
        availability: "24/7 Available",
        responseTime: "< 12 hours",
        status: "online",
        actionText: "Send Email",
    },
    {
        Icon: Users,
        title: "Student Community",
        description: "Connect with peers & mentors.",
        availability: "Always Active",
        responseTime: "Varies",
        status: "online",
        actionText: "Join Community",
    },
]

const categories = [
    { id: "all", name: "All Topics", Icon: LifeBuoy },
    { id: "admissions", name: "Admissions", Icon: GraduationCap },
    { id: "courses", name: "Courses & Curriculum", Icon: BookOpen },
    { id: "technical", name: "Technical Issues", Icon: Settings2 },
    { id: "payment", name: "Billing & Payments", Icon: FileText },
    { id: "career", name: "Career Services", Icon: TrendingUp },
]

const popularArticles = [
    {
        title: "Getting Started with Your Full Stack Course",
        category: "courses",
        Icon: Code2,
        href: "#",
    },
    {
        title: "How to Access and Use Cloud Labs Effectively",
        category: "technical",
        Icon: Cloud,
        href: "#",
    },
    {
        title: "Understanding Your Payment Plan Options",
        category: "payment",
        Icon: FileText,
        href: "#",
    },
    {
        title: "Comprehensive Resume Preparation Guide",
        category: "career",
        Icon: Users, // Changed to Users for career focus
        href: "#",
    },
    {
        title: "Submitting Your MERN Stack Capstone Project",
        category: "courses",
        Icon: Smartphone, // Changed to Smartphone for project
        href: "#",
    },
    {
        title: "Effective Communication Skills Workshop Recap",
        category: "career",
        Icon: MessageSquare,
        href: "#",
    },
]

const videoTutorials = [
    {
        title: "Full Stack Development: Course Orientation",
        duration: "12:45",
        thumbnail: "/placeholder.svg?width=320&height=180",
        category: "courses",
    },
    {
        title: "Setting Up Your Cloud Engineering Lab Environment",
        duration: "8:32",
        thumbnail: "/placeholder.svg?width=320&height=180",
        category: "technical",
    },
    {
        title: "Step-by-Step Guide to Final Project Submission",
        duration: "6:18",
        thumbnail: "/placeholder.svg?width=320&height=180",
        category: "courses",
    },
    {
        title: "Mastering Technical Interview: Tips & Tricks",
        duration: "15:27",
        thumbnail: "/placeholder.svg?width=320&height=180",
        category: "career",
    },
]

const faqs = [
    {
        question: "How do I enroll in a CoderCrafter course?",
        answer:
            "You can enroll directly through our website. Navigate to the desired course page and click 'Enroll Now'. Our admissions team will then contact you within 24 hours to finalize your registration and guide you through the next steps.",
        category: "admissions",
    },
    {
        question: "What are the prerequisites for the Full Stack Development program?",
        answer:
            "While no prior professional experience is required, a basic understanding of HTML, CSS, and JavaScript is beneficial. We offer introductory modules for complete beginners to build a solid foundation before diving into more advanced topics.",
        category: "courses",
    },
    {
        question: "What is your refund policy?",
        answer:
            "We offer a 14-day satisfaction guarantee. If you're not satisfied with the program for any reason, you can request a full refund within 14 days of your official course start date. Please refer to our terms and conditions for full details.",
        category: "payment",
    },
    {
        question: "How do I access my course materials and lecture recordings?",
        answer:
            "Upon enrollment, you'll receive access to our Learning Management System (LMS). All course materials, assignments, lecture recordings, and supplementary resources are available 24/7 within the LMS.",
        category: "courses", // Changed from resources
    },
    {
        question: "What kind of career support services do you offer?",
        answer:
            "Our comprehensive career services include personalized resume and cover letter reviews, mock interview sessions (technical and behavioral), portfolio development workshops, LinkedIn profile optimization, and direct job placement assistance with our network of hiring partners.",
        category: "career",
    },
]

const systemStatus = [
    { service: "Learning Portal (LMS)", status: "operational", Icon: BookOpen },
    { service: "Live Video Lectures", status: "operational", Icon: PlaySquare },
    { service: "Cloud Lab Environments", status: "operational", Icon: Cloud },
    { service: "Assignment Submissions", status: "operational", Icon: FileText },
    { service: "Student Dashboard", status: "operational", Icon: Users },
    { service: "Support Chat System", status: "maintenance", Icon: MessageSquare },
]

export default function HelpSupportPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [expandedFaq, setExpandedFaq] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredFaqs =
        selectedCategory === "all" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

    const handleSearch = (e) => {
        // Basic search: filter FAQs and popular articles
        // In a real app, this would likely hit an API
        setSearchQuery(e.target.value)
        // For demo, just log it. Actual filtering would be more complex.
        console.log("Searching for:", e.target.value)
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <header className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Help & Support Center</h1>
                    <p className="text-lg sm:text-xl text-sky-100 mb-10 max-w-3xl mx-auto">
                        Find answers, get academic support, and make the most of your CoderCrafter learning experience.
                    </p>
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Search our knowledge base (e.g., 'enrollment', 'React setup')"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg border-0 focus:ring-4 focus:ring-sky-300 focus:outline-none text-base sm:text-lg"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Actions Section */}
            <section className="py-16 sm:py-20 -mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
                            >
                                <div className="bg-sky-100 p-4 rounded-full mb-4 group-hover:bg-sky-200 transition-colors">
                                    <action.Icon className="h-8 w-8 text-sky-600" />
                                </div>
                                <h3 className="text-lg font-semibold mb-1 text-gray-900">{action.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 flex-grow">{action.description}</p>
                                <span
                                    className={`${buttonPrimaryClasses} ${buttonSizeMdClasses} w-full mt-auto group-hover:bg-sky-700`}
                                >
                                    {action.actionText}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Channels Section */}
            <section id="support-channels" className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Personalized Support</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our dedicated teams are here to assist you every step of the way.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supportChannels.map((channel, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col hover:border-sky-300 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-sky-100 p-3 rounded-full">
                                        <channel.Icon className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <span
                                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${channel.status === "online"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {channel.status === "online" ? "Online" : "Busy"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{channel.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 flex-grow">{channel.description}</p>
                                <div className="text-xs text-gray-500 space-y-1 mb-6">
                                    <div className="flex items-center">
                                        <Clock className="h-3.5 w-3.5 mr-1.5" /> {channel.availability}
                                    </div>
                                    <div className="flex items-center">
                                        <Zap className="h-3.5 w-3.5 mr-1.5" /> Response: {channel.responseTime}
                                    </div>
                                </div>
                                <button className={`${buttonOutlineClasses} ${buttonSizeMdClasses} w-full mt-auto`}>
                                    {channel.actionText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Base Section */}
            <section id="knowledge-base" className="py-16 sm:py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Knowledge Base</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore articles, guides, and resources to help you succeed.
                        </p>
                    </div>
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${selectedCategory === category.id
                                    ? "bg-sky-600 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 border border-gray-200"
                                    }`}
                            >
                                <category.Icon className="h-4 w-4 mr-2" />
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Popular Articles */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center sm:text-left">Popular Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {popularArticles
                                .filter((article) => selectedCategory === "all" || article.category === selectedCategory)
                                .map((article, index) => (
                                    <Link
                                        key={index}
                                        href={article.href}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 flex flex-col"
                                    >
                                        <div className="flex items-center text-sky-600 mb-3">
                                            <article.Icon className="h-5 w-5 mr-2" />
                                            <span className="text-xs font-medium uppercase tracking-wider">{article.category}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-sky-700 transition-colors flex-grow">
                                            {article.title}
                                        </h4>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
                                            <span className="flex items-center">
                                                <ThumbsUp className="h-4 w-4 mr-1.5" /> Helpful
                                            </span>
                                            <ExternalLink className="h-4 w-4 group-hover:text-sky-600 transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            {(selectedCategory !== "all" &&
                                popularArticles.filter((article) => article.category === selectedCategory).length === 0) && (
                                    <p className="md:col-span-2 lg:col-span-3 text-center text-gray-500 py-8">
                                        No popular articles found for this category.
                                    </p>
                                )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Tutorials Section */}
            <section id="video-tutorials" className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Video Tutorials</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Learn visually with our step-by-step instructional videos.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {videoTutorials.map((video, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200"
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={video.thumbnail || "/placeholder.svg"}
                                        alt={video.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                                            <PlaySquare className="h-8 w-8 text-sky-600" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">
                                        {video.category}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="#" className={`${buttonPrimaryClasses} ${buttonSizeLgClasses}`}>
                            View All Tutorials <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Quick answers to common student questions.</p>
                    </div>
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                    <ChevronDown
                                        className={`h-5 w-5 text-sky-500 flex-shrink-0 transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-1">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                        <Link href="/contact" className={`${buttonOutlineClasses} ${buttonSizeLgClasses}`}>
                            Contact Support <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* System Status Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">System Status</h2>
                        <p className="text-lg text-gray-600">Current operational status of our learning platforms.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">All Systems Operational</h3>
                                <p className="text-sm text-gray-500">Last updated: Just now</p>
                            </div>
                            <div className="flex items-center mt-4 sm:mt-0">
                                <ShieldCheck className="h-6 w-6 text-green-500 mr-2" />
                                <span className="text-green-600 font-semibold">Fully Operational</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {systemStatus.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow border border-gray-200"
                                >
                                    <div className="flex items-center">
                                        <service.Icon
                                            className={`h-5 w-5 mr-3 ${service.status === "operational"
                                                ? "text-green-500"
                                                : service.status === "maintenance"
                                                    ? "text-yellow-500"
                                                    : "text-red-500"
                                                }`}
                                        />
                                        <span className="font-medium text-gray-900">{service.service}</span>
                                    </div>
                                    <span
                                        className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${service.status === "operational"
                                            ? "bg-green-100 text-green-700"
                                            : service.status === "maintenance"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {service.status === "operational"
                                            ? "Operational"
                                            : service.status === "maintenance"
                                                ? "Maintenance"
                                                : "Outage"}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="#" className="inline-flex items-center text-sky-600 hover:text-sky-800 font-semibold">
                                View Detailed Status Page <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}