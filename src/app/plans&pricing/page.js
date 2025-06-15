// "use client"
// import { useState } from 'react';
// import { Check, Code, Users, Trophy, Briefcase, Clock, Star, ChevronDown } from 'lucide-react';

// export default function Pricing() {
//     const plans = [
//         {
//             name: "Foundation",
//             description: "Perfect for beginners starting their coding journey",
//             price: "$299",
//             duration: "3 months",
//             popular: false,
//             features: [
//                 "HTML, CSS & JavaScript Fundamentals",
//                 "Basic Git & Version Control",
//                 "Responsive Web Design",
//                 "2 Portfolio Projects",
//                 "Community Access",
//                 "Email Support",
//                 "Certificate of Completion",
//             ],
//             notIncluded: ["1-on-1 Mentorship", "Job Placement Assistance", "Advanced Frameworks", "Live Coding Sessions"],
//         },
//         {
//             name: "Professional",
//             description: "Comprehensive program for career-ready developers",
//             price: "$799",
//             duration: "6 months",
//             popular: true,
//             features: [
//                 "Everything in Foundation",
//                 "React & Node.js Development",
//                 "Database Design & Management",
//                 "API Development & Integration",
//                 "5 Real-world Projects",
//                 "1-on-1 Weekly Mentorship",
//                 "Resume & Portfolio Review",
//                 "Mock Interview Sessions",
//                 "Job Placement Assistance",
//                 "Live Coding Sessions",
//                 "Priority Support",
//             ],
//             notIncluded: ["Unlimited Mentorship", "Guaranteed Job Placement"],
//         },
//         {
//             name: "Elite",
//             description: "Premium program with guaranteed job placement",
//             price: "$1,499",
//             duration: "9 months",
//             popular: false,
//             features: [
//                 "Everything in Professional",
//                 "Advanced System Design",
//                 "Cloud Computing (AWS/Azure)",
//                 "DevOps & CI/CD Pipelines",
//                 "Microservices Architecture",
//                 "10+ Industry Projects",
//                 "Unlimited 1-on-1 Mentorship",
//                 "Guaranteed Job Placement*",
//                 "Salary Negotiation Coaching",
//                 "Alumni Network Access",
//                 "Lifetime Course Updates",
//                 "24/7 Priority Support",
//             ],
//             notIncluded: [],
//         },
//     ];

//     const faqs = [
//         {
//             question: "What if I can't find a job after completing the course?",
//             answer:
//                 "Our Elite program comes with a job placement guarantee. If you don't land a job within 6 months of graduation, we'll refund 100% of your tuition. Our Professional program includes job placement assistance with a 85% success rate.",
//         },
//         {
//             question: "Can I switch between plans during my enrollment?",
//             answer:
//                 "Yes! You can upgrade your plan at any time. The price difference will be prorated based on your remaining course duration.",
//         },
//         {
//             question: "Do you offer payment plans?",
//             answer:
//                 "We offer flexible payment options including monthly installments and income share agreements (ISA) for qualified students.",
//         },
//         {
//             question: "What's the time commitment required?",
//             answer:
//                 "We recommend 15-20 hours per week for optimal progress. Our flexible schedule allows you to learn at your own pace while meeting milestone deadlines.",
//         },
//         {
//             question: "Do I need any prior coding experience?",
//             answer:
//                 "No prior experience is required for our Foundation program. For Professional and Elite programs, basic programming knowledge is helpful but not mandatory.",
//         },
//         {
//             question: "What kind of support do you provide?",
//             answer:
//                 "All students get access to our community forum, email support, and course materials. Higher tiers include 1-on-1 mentorship, live sessions, and priority support.",
//         },
//     ];

//     const [openAccordion, setOpenAccordion] = useState(null);

//     const toggleAccordion = (index) => {
//         setOpenAccordion(openAccordion === index ? null : index);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900">
//             {/* Header */}
//             <div className="container mx-auto px-4 py-16">
//                 <div className="text-center mb-16">
//                     <div className="flex items-center justify-center mb-4">
//                         <Code className="h-8 w-8 text-blue-600 mr-2" />
//                         <h1 className="text-4xl font-bold text-gray-900">Coder Crafter</h1>
//                         <Code className="h-8 w-8 text-blue-600 ml-2" />
//                     </div>
//                     <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Transform Your Career with
//                         <span className="text-blue-600"> Expert Training</span>
//                     </h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Join thousands of successful graduates who've launched their software engineering careers with our
//                         comprehensive, industry-focused training programs.
//                     </p>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//                     <div className="text-center">
//                         <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
//                         <div className="text-gray-600">Graduates</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
//                         <div className="text-gray-600">Job Placement Rate</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-3xl font-bold text-blue-600 mb-2">$75k</div>
//                         <div className="text-gray-600">Average Starting Salary</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
//                         <div className="text-gray-600">Student Rating</div>
//                     </div>
//                 </div>

//                 {/* Pricing Cards */}
//                 <div className="grid md:grid-cols-3 gap-8 mb-16">
//                     {plans.map((plan, index) => (
//                         <div
//                             key={index}
//                             className={`relative bg-white rounded-xl border ${plan.popular ? "border-blue-500 border-2 shadow-xl scale-105" : "border-gray-200"
//                                 }`}
//                         >
//                             {plan.popular && (
//                                 <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
//                                     Most Popular
//                                 </span>
//                             )}
//                             <div className="p-6 text-center pb-4">
//                                 <h3 className="text-2xl font-bold">{plan.name}</h3>
//                                 <p className="text-gray-600">{plan.description}</p>
//                                 <div className="mt-4">
//                                     <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                                     <span className="text-gray-600">/{plan.duration}</span>
//                                 </div>
//                             </div>
//                             <div className="px-6 pb-6 space-y-4">
//                                 <div>
//                                     <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
//                                     <ul className="space-y-2">
//                                         {plan.features.map((feature, featureIndex) => (
//                                             <li key={featureIndex} className="flex items-start">
//                                                 <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
//                                                 <span className="text-gray-700 text-sm">{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 {plan.notIncluded.length > 0 && (
//                                     <div>
//                                         <h4 className="font-semibold text-gray-500 mb-3 text-sm">Not included:</h4>
//                                         <ul className="space-y-1">
//                                             {plan.notIncluded.map((feature, featureIndex) => (
//                                                 <li key={featureIndex} className="flex items-start">
//                                                     <span className="text-gray-400 mr-2">×</span>
//                                                     <span className="text-gray-500 text-sm">{feature}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="p-6 pt-0">
//                                 <button
//                                     className={`w-full py-3 px-4 rounded-lg font-medium ${plan.popular
//                                         ? "bg-blue-600 hover:bg-blue-700 text-white"
//                                         : "bg-gray-900 hover:bg-gray-800 text-white"
//                                         }`}
//                                 >
//                                     Get Started
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Features Section */}
//                 <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
//                     <h3 className="text-3xl font-bold text-center mb-12">Why Choose Coder Crafter?</h3>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <div className="text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Users className="h-8 w-8 text-blue-600" />
//                             </div>
//                             <h4 className="font-semibold mb-2">Expert Mentors</h4>
//                             <p className="text-gray-600 text-sm">Learn from industry professionals with 10+ years of experience</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Briefcase className="h-8 w-8 text-blue-600" />
//                             </div>
//                             <h4 className="font-semibold mb-2">Real Projects</h4>
//                             <p className="text-gray-600 text-sm">Build portfolio-worthy projects used by real companies</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Trophy className="h-8 w-8 text-blue-600" />
//                             </div>
//                             <h4 className="font-semibold mb-2">Job Guarantee</h4>
//                             <p className="text-gray-600 text-sm">Get hired or get your money back with our Elite program</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Clock className="h-8 w-8 text-blue-600" />
//                             </div>
//                             <h4 className="font-semibold mb-2">Flexible Schedule</h4>
//                             <p className="text-gray-600 text-sm">Learn at your own pace with our self-paced curriculum</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Testimonials */}
//                 <div className="mb-16">
//                     <h3 className="text-3xl font-bold text-center mb-12">What Our Graduates Say</h3>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="bg-white rounded-lg shadow">
//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                                     ))}
//                                 </div>
//                                 <p className="text-gray-700 mb-4">
//                                     "Coder Crafter transformed my career completely. The mentorship and real-world projects gave me the
//                                     confidence to land my dream job at a top tech company."
//                                 </p>
//                                 <div className="flex items-center">
//                                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                         <span className="text-blue-600 font-semibold">SJ</span>
//                                     </div>
//                                     <div>
//                                         <div className="font-semibold">Sarah Johnson</div>
//                                         <div className="text-sm text-gray-600">Software Engineer at Google</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-lg shadow">
//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                                     ))}
//                                 </div>
//                                 <p className="text-gray-700 mb-4">
//                                     "The job placement assistance was incredible. They helped me with everything from resume writing to
//                                     salary negotiation. Worth every penny!"
//                                 </p>
//                                 <div className="flex items-center">
//                                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                         <span className="text-blue-600 font-semibold">MC</span>
//                                     </div>
//                                     <div>
//                                         <div className="font-semibold">Mike Chen</div>
//                                         <div className="text-sm text-gray-600">Full Stack Developer at Spotify</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-lg shadow">
//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                                     ))}
//                                 </div>
//                                 <p className="text-gray-700 mb-4">
//                                     "From zero coding experience to landing a $80k job in 9 months. The curriculum is perfectly structured
//                                     and the support is amazing."
//                                 </p>
//                                 <div className="flex items-center">
//                                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                         <span className="text-blue-600 font-semibold">AR</span>
//                                     </div>
//                                     <div>
//                                         <div className="font-semibold">Alex Rodriguez</div>
//                                         <div className="text-sm text-gray-600">Backend Developer at Netflix</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
//                     <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
//                     <div className="max-w-3xl mx-auto space-y-4">
//                         {faqs.map((faq, index) => (
//                             <div key={index} className="border-b border-gray-200 pb-4">
//                                 <button
//                                     className="flex justify-between items-center w-full text-left"
//                                     onClick={() => toggleAccordion(index)}
//                                 >
//                                     <h4 className="font-medium text-lg">{faq.question}</h4>
//                                     <ChevronDown
//                                         className={`h-5 w-5 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
//                                     />
//                                 </button>
//                                 {openAccordion === index && (
//                                     <div className="mt-2 text-gray-600">{faq.answer}</div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* CTA Section */}
//                 <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
//                     <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
//                     <p className="text-xl mb-8 opacity-90">
//                         Join the next cohort and transform your career in software engineering
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium">
//                             Schedule Free Consultation
//                         </button>
//                         <button className="border border-white text-white hover:bg-white hover:text-blue-600 py-3 px-6 rounded-lg font-medium">
//                             Download Curriculum
//                         </button>
//                     </div>
//                     <p className="text-sm mt-6 opacity-75">
//                         * Job placement guarantee applies to Elite program graduates who complete all requirements
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client"
import { useState } from "react"
import { Check, X, Users, Trophy, Briefcase, Clock, Star, ChevronDown } from "lucide-react"

// --- Reusable Style Constants ---
const buttonBaseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
const buttonPrimaryClasses = `${buttonBaseClasses} bg-sky-600 text-white hover:bg-sky-700 shadow-md`
const buttonOutlineClasses = `${buttonBaseClasses} border-2 border-sky-600 text-sky-600 hover:bg-sky-100`
const buttonSizeLgClasses = "px-6 py-3 text-base"

// --- Page Data ---
const plans = {
    monthly: [
        {
            name: "Foundation",
            description: "Perfect for beginners starting their coding journey.",
            price: "$99",
            duration: "/month",
            popular: false,
            features: [
                "HTML, CSS & JavaScript Fundamentals",
                "Basic Git & Version Control",
                "Responsive Web Design",
                "2 Portfolio Projects",
                "Community Access",
                "Email Support",
            ],
            notIncluded: ["1-on-1 Mentorship", "Job Placement Assistance", "Advanced Frameworks"],
        },
        {
            name: "Professional",
            description: "For career-ready developers aiming for top roles.",
            price: "$199",
            duration: "/month",
            popular: true,
            features: [
                "Everything in Foundation",
                "React & Node.js Development",
                "Database & API Integration",
                "5 Real-world Projects",
                "1-on-1 Weekly Mentorship",
                "Resume & Portfolio Review",
                "Job Placement Assistance",
            ],
            notIncluded: ["Guaranteed Job Placement", "Unlimited Mentorship"],
        },
        {
            name: "Elite",
            description: "Premium program with guaranteed job placement.",
            price: "$349",
            duration: "/month",
            popular: false,
            features: [
                "Everything in Professional",
                "Advanced System Design",
                "Cloud Computing (AWS/Azure)",
                "Unlimited 1-on-1 Mentorship",
                "Guaranteed Job Placement*",
                "Lifetime Course Updates",
            ],
            notIncluded: [],
        },
    ],
    yearly: [
        {
            name: "Foundation",
            description: "Perfect for beginners starting their coding journey.",
            price: "$999",
            duration: "/year",
            popular: false,
            features: [
                "HTML, CSS & JavaScript Fundamentals",
                "Basic Git & Version Control",
                "Responsive Web Design",
                "2 Portfolio Projects",
                "Community Access",
                "Email Support",
            ],
            notIncluded: ["1-on-1 Mentorship", "Job Placement Assistance", "Advanced Frameworks"],
        },
        {
            name: "Professional",
            description: "For career-ready developers aiming for top roles.",
            price: "$1,999",
            duration: "/year",
            popular: true,
            features: [
                "Everything in Foundation",
                "React & Node.js Development",
                "Database & API Integration",
                "5 Real-world Projects",
                "1-on-1 Weekly Mentorship",
                "Resume & Portfolio Review",
                "Job Placement Assistance",
            ],
            notIncluded: ["Guaranteed Job Placement", "Unlimited Mentorship"],
        },
        {
            name: "Elite",
            description: "Premium program with guaranteed job placement.",
            price: "$3,499",
            duration: "/year",
            popular: false,
            features: [
                "Everything in Professional",
                "Advanced System Design",
                "Cloud Computing (AWS/Azure)",
                "Unlimited 1-on-1 Mentorship",
                "Guaranteed Job Placement*",
                "Lifetime Course Updates",
            ],
            notIncluded: [],
        },
    ],
}

const faqs = [
    {
        question: "What if I can't find a job after completing the course?",
        answer:
            "Our Elite program comes with a job placement guarantee. If you don't land a job within 6 months of graduation and meet all program requirements, we'll refund 100% of your tuition. Our Professional program includes extensive job placement assistance with a high success rate.",
    },
    {
        question: "Can I switch between plans during my enrollment?",
        answer:
            "Yes! You can upgrade your plan at any time. The price difference will be prorated based on your remaining course duration.",
    },
    {
        question: "Do you offer payment plans?",
        answer:
            "We offer flexible payment options including monthly installments and income share agreements (ISA) for qualified students. Please contact our admissions team for more details.",
    },
    {
        question: "What's the time commitment required?",
        answer:
            "We recommend 15-20 hours per week for optimal progress. Our flexible schedule allows you to learn at your own pace while meeting milestone deadlines.",
    },
]

const features = [
    {
        Icon: Users,
        title: "Expert Mentors",
        description: "Learn from industry professionals with 10+ years of experience.",
    },
    { Icon: Briefcase, title: "Real Projects", description: "Build portfolio-worthy projects used by real companies." },
    { Icon: Trophy, title: "Job Guarantee", description: "Get hired or get your money back with our Elite program." },
    { Icon: Clock, title: "Flexible Schedule", description: "Learn at your own pace with our self-paced curriculum." },
]

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Software Engineer at Google",
        quote:
            "CoderCrafter transformed my career completely. The mentorship and real-world projects gave me the confidence to land my dream job at a top tech company.",
        avatar: "SJ",
    },
    {
        name: "Mike Chen",
        role: "Full Stack Developer at Spotify",
        quote:
            "The job placement assistance was incredible. They helped me with everything from resume writing to salary negotiation. Worth every penny!",
        avatar: "MC",
    },
    {
        name: "Alex Rodriguez",
        role: "Backend Developer at Netflix",
        quote:
            "From zero coding experience to landing a $80k job in 9 months. The curriculum is perfectly structured and the support is amazing.",
        avatar: "AR",
    },
]

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState("monthly")
    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }

    const currentPlans = plans[billingCycle]

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="py-20 sm:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Find the Perfect Plan</h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        Join thousands of successful graduates who've launched their software engineering careers with our
                        comprehensive, industry-focused training programs.
                    </p>

                    {/* Billing Cycle Toggle */}
                    <div className="flex justify-center items-center space-x-4">
                        <span className={`font-medium ${billingCycle === "monthly" ? "text-sky-600" : "text-gray-500"}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200"
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                                    }`}
                            />
                        </button>
                        <span className={`font-medium ${billingCycle === "yearly" ? "text-sky-600" : "text-gray-500"}`}>
                            Yearly
                        </span>
                        <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">SAVE 20%</span>
                    </div>
                </div>
            </header>

            {/* Pricing Cards */}
            <main className="container mx-auto px-4 pb-20 sm:pb-24">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {currentPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl border p-8 flex flex-col h-full ${plan.popular ? "border-sky-500 border-2 shadow-2xl" : "border-gray-200 shadow-lg"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sky-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600">{plan.duration}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <X className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-500 line-through">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className={`${plan.popular ? buttonPrimaryClasses : buttonOutlineClasses} ${buttonSizeLgClasses} w-full`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-8">
                    * Job placement guarantee applies to Elite program graduates who complete all requirements.
                </p>
            </main>

            {/* Features Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose CoderCrafter?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide everything you need to succeed in the tech industry.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-sky-100 p-4 rounded-full">
                                        <feature.Icon className="h-8 w-8 text-sky-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Graduates Say</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Real stories from students who changed their lives with CoderCrafter.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-sky-600 font-bold text-lg">{testimonial.avatar}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions? We've got answers.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    className="flex justify-between items-center w-full text-left p-6"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h4 className="font-semibold text-lg">{faq.question}</h4>
                                    <ChevronDown
                                        className={`h-6 w-6 transition-transform text-sky-500 ${openAccordion === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-sky-600 to-sky-800 rounded-2xl p-12 text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join the next cohort and transform your career in software engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className={`${buttonBaseClasses} bg-white text-sky-600 hover:bg-gray-100 ${buttonSizeLgClasses}`}>
                                Schedule Free Consultation
                            </button>
                            <button
                                className={`${buttonBaseClasses} border-2 border-white text-white hover:bg-white/10 ${buttonSizeLgClasses}`}
                            >
                                Download Curriculum
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
