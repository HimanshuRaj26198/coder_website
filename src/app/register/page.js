// "use client"

// import { useState } from "react"
// import { User, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function RegisterPage() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         phone: "",
//         courseInterest: ""
//     })
//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//     const [error, setError] = useState("")
//     const [success, setSuccess] = useState("")
//     const [loading, setLoading] = useState(false)

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setLoading(true)
//         setError("")
//         setSuccess("")

//         // Basic validation
//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match")
//             setLoading(false)
//             return
//         }

//         try {
//             // Replace with your actual registration API call
//             // const response = await registerUser(formData)
//             // if (!response.ok) throw new Error("Registration failed")

//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 1500))

//             setSuccess("Registration successful! Redirecting to login...")
//             // Redirect to login after 2 seconds
//             setTimeout(() => {
//                 window.location.href = "/login"
//             }, 2000)
//         } catch (err) {
//             setError(err.message || "Registration failed. Please try again.")
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//                     Register your student account
//                 </h2>
//                 <p className="mt-2 text-center text-sm text-gray-600">
//                     Already have an account?{" "}
//                     <Link
//                         href="/login"
//                         className="font-medium text-blue-600 hover:text-blue-500"
//                     >
//                         Sign in here
//                     </Link>
//                 </p>
//             </div>

//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     {error && (
//                         <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
//                             <div className="flex">
//                                 <div className="flex-shrink-0">
//                                     <AlertCircle className="h-5 w-5 text-red-500" />
//                                 </div>
//                                 <div className="ml-3">
//                                     <p className="text-sm text-red-700">{error}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {success && (
//                         <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4">
//                             <div className="flex">
//                                 <div className="flex-shrink-0">
//                                     <CheckCircle className="h-5 w-5 text-green-500" />
//                                 </div>
//                                 <div className="ml-3">
//                                     <p className="text-sm text-green-700">{success}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                                     First name
//                                 </label>
//                                 <div className="mt-1 relative rounded-md shadow-sm">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <User className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="firstName"
//                                         name="firstName"
//                                         type="text"
//                                         autoComplete="given-name"
//                                         required
//                                         value={formData.firstName}
//                                         onChange={handleChange}
//                                         className="py-2 pl-10 block text-gray-700 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                         placeholder="John"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                                     Last name
//                                 </label>
//                                 <div className="mt-1 relative rounded-md shadow-sm">
//                                     <input
//                                         id="lastName"
//                                         name="lastName"
//                                         type="text"
//                                         autoComplete="family-name"
//                                         required
//                                         value={formData.lastName}
//                                         onChange={handleChange}
//                                         className="py-2 px-3 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                         placeholder="Doe"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email address
//                             </label>
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="py-2 pl-10 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="example@gmail.com"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                                 Phone number
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="phone"
//                                     name="phone"
//                                     type="tel"
//                                     autoComplete="tel"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className="py-2 px-3 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="00 0000 0000"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">
//                                 Course of interest
//                             </label>
//                             <div className="mt-1">
//                                 <select
//                                     id="courseInterest"
//                                     name="courseInterest"
//                                     value={formData.courseInterest}
//                                     onChange={handleChange}
//                                     className="py-2 px-3 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 >
//                                     <option value="">Select a course</option>
//                                     <option value="full-stack">Full Stack Development</option>
//                                     <option value="cloud-engineering">Cloud Engineering</option>
//                                     <option value="mern-stack">MERN Stack</option>
//                                     <option value="mean-stack">MEAN Stack</option>
//                                     <option value="communication">Communication Skills</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                     Password
//                                 </label>
//                                 <div className="mt-1 relative rounded-md shadow-sm">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type={showPassword ? "text" : "password"}
//                                         autoComplete="new-password"
//                                         required
//                                         minLength={8}
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                         className="py-2 pl-10 pr-10 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                         placeholder="••••••••"
//                                     />
//                                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                                         >
//                                             {showPassword ? (
//                                                 <EyeOff className="h-5 w-5" />
//                                             ) : (
//                                                 <Eye className="h-5 w-5" />
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <p className="mt-1 text-xs text-gray-500">
//                                     Must be at least 8 characters
//                                 </p>
//                             </div>

//                             <div>
//                                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                                     Confirm password
//                                 </label>
//                                 <div className="mt-1 relative rounded-md shadow-sm">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="confirmPassword"
//                                         name="confirmPassword"
//                                         type={showConfirmPassword ? "text" : "password"}
//                                         autoComplete="new-password"
//                                         required
//                                         value={formData.confirmPassword}
//                                         onChange={handleChange}
//                                         className="py-2 pl-10 pr-10 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                         placeholder="••••••••"
//                                     />
//                                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                             className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                                         >
//                                             {showConfirmPassword ? (
//                                                 <EyeOff className="h-5 w-5" />
//                                             ) : (
//                                                 <Eye className="h-5 w-5" />
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center">
//                             <input
//                                 id="terms"
//                                 name="terms"
//                                 type="checkbox"
//                                 required
//                                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                             />
//                             <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
//                                 I agree to the{" "}
//                                 <Link href="/terms" className="text-blue-600 hover:text-blue-500">
//                                     Terms of Service
//                                 </Link>{" "}
//                                 and{" "}
//                                 <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
//                                     Privacy Policy
//                                 </Link>
//                             </label>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//                             >
//                                 {loading ? (
//                                     <span className="flex items-center">
//                                         <svg
//                                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <circle
//                                                 className="opacity-25"
//                                                 cx="12"
//                                                 cy="12"
//                                                 r="10"
//                                                 stroke="currentColor"
//                                                 strokeWidth="4"
//                                             ></circle>
//                                             <path
//                                                 className="opacity-75"
//                                                 fill="currentColor"
//                                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                             ></path>
//                                         </svg>
//                                         Creating account...
//                                     </span>
//                                 ) : (
//                                     "Create account"
//                                 )}
//                             </button>
//                         </div>
//                     </form>

//                     <div className="mt-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300"></div>
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-white text-gray-500">
//                                     Or register with
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="mt-6 grid grid-cols-2 gap-3">
//                             <div>
//                                 <Link
//                                     href="#"
//                                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                                 >
//                                     <span className="sr-only">Register with Google</span>
//                                     <svg
//                                         className="w-5 h-5"
//                                         aria-hidden="true"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
//                                     </svg>
//                                 </Link>
//                             </div>

//                             <div>
//                                 <Link
//                                     href="#"
//                                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                                 >
//                                     <span className="sr-only">Register with Microsoft</span>
//                                     <svg
//                                         className="w-5 h-5"
//                                         aria-hidden="true"
//                                         fill="currentColor"
//                                         viewBox="0 0 16 16"
//                                     >
//                                         <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
//                                     </svg>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import React from "react"
import { useState } from "react"
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    AlertTriangle,
    CheckCircle2,
    Phone,
    BookOpen,
    LogIn,
    UserPlus,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Placeholder for social login icons
const GoogleIcon = () => (
    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
)

const MicrosoftIcon = () => (
    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
    </svg>
)

const courseOptions = [
    { value: "", label: "Select a course (optional)" },
    { value: "full-stack", label: "Full Stack Development" },
    { value: "cloud-devops", label: "Cloud Engineering & DevOps" },
    { value: "mobile-react-native", label: "Mobile App Development (React Native)" },
    { value: "data-science-ml", label: "Data Science & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity Analyst Program" },
    { value: "ui-ux-design", label: "UI/UX Design Fundamentals" },
    { value: "advanced-js-ts", label: "Advanced JavaScript & TypeScript" },
    { value: "python-data-automation", label: "Python for Data Analysis & Automation" },
    { value: "game-dev-unity", label: "Game Development with Unity" },
    { value: "digital-marketing-seo", label: "Digital Marketing & SEO" },
    { value: "blockchain-fundamentals", label: "Blockchain Development Fundamentals" },
    { value: "ai-prompt-engineering", label: "AI & Prompt Engineering" },
]

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        courseInterest: "",
        terms: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type } = e.target
        const checked = (e.target).checked
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.")
            setLoading(false)
            return
        }
        if (!formData.terms) {
            setError("You must agree to the Terms of Service and Privacy Policy.")
            setLoading(false)
            return
        }

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Example success/error
        if (formData.email.includes("test")) {
            setSuccess("Registration successful! Redirecting to login...")
            setTimeout(() => {
                // In a real app, use Next.js Router
                // router.push('/login');
                alert("Redirecting to login page... (Simulated)")
            }, 2000)
        } else {
            setError("Registration failed. An account with this email might already exist.")
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl lg:grid lg:grid-cols-2 bg-white shadow-2xl rounded-xl overflow-hidden">
                {/* Left Side - Branding/Image */}
                <div className="relative hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 to-sky-600/70 p-12 text-white flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-8">
                                <Image
                                    src="/assets/images/codecrafter_logo.png"
                                    alt="CoderCrafter Logo"
                                    width={180}
                                    height={45}
                                    className="filter brightness-0 invert"
                                />
                            </Link>
                            <h1 className="text-4xl font-bold leading-tight mb-4">Join CoderCrafter Today!</h1>
                            <p className="text-lg opacity-90">
                                Start your journey to becoming a skilled developer. Create your account and access a world of learning.
                            </p>
                        </div>
                        <p className="text-sm opacity-70">© {new Date().getFullYear()} CoderCrafter. All rights reserved.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">

                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center lg:text-left">Create Your Account</h2>
                    <p className="text-sm text-gray-600 mb-8 text-center lg:text-left">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                            Sign In <LogIn className="inline h-4 w-4 ml-1" />
                        </Link>
                    </p>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-lg">
                            <div className="flex items-center">
                                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                <p className="ml-3 text-sm text-red-700 font-medium">{error}</p>
                            </div>
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-lg">
                            <div className="flex items-center">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <p className="ml-3 text-sm text-green-700 font-medium">{success}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="form-input pl-11 border-b border-gray-600 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="form-input border-b border-gray-600 outline-none"
                                />
                            </div>

                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="form-input pl-11 border-b border-gray-600 outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone (Optional)
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className="form-input pl-11 border-b border-gray-600 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-1">
                                    Course Interest
                                </label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                    <select
                                        name="courseInterest"
                                        id="courseInterest"
                                        value={formData.courseInterest}
                                        onChange={handleChange}
                                        className="form-input appearance-none pl-11 border-b border-gray-600 outline-none"
                                    >
                                        {courseOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        required
                                        minLength={8}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="form-input pl-11 border-b border-gray-600 outline-none pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-sky-600"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                <p className="mt-1 text-xs text-gray-500">Min. 8 characters</p>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="form-input pl-11 pr-12 border-b border-gray-600 outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-sky-600"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700">
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-sky-600 hover:text-sky-700">
                                        Terms of Service
                                    </Link>{" "}
                                    &{" "}
                                    <Link href="/privacy" className="text-sky-600 hover:text-sky-700">
                                        Privacy Policy
                                    </Link>
                                    .
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        Create Account <UserPlus className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-500">Or register with</span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="#" className="social-button">
                                <GoogleIcon />
                                <span className="ml-2">Google</span>
                            </Link>
                            <Link href="#" className="social-button">
                                <MicrosoftIcon />
                                <span className="ml-2">Microsoft</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Add this to your globals.css or a relevant CSS file for the input styles
/*
@layer components {
  .form-input {
    @apply block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors;
  }
  .social-button {
    @apply w-full inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors;
  }
}
*/
