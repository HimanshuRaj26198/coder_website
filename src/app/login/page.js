// "use client"

// import { useState } from "react"
// import { Lock, Mail, Eye, EyeOff, AlertCircle } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function LoginPage() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [showPassword, setShowPassword] = useState(false)
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setLoading(true)
//         setError("")

//         try {
//             // Replace with your actual authentication logic
//             // const response = await signIn(email, password)
//             // if (!response.ok) throw new Error("Invalid credentials")

//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 1000))

//             // Redirect after successful login
//             window.location.href = "/dashboard"
//         } catch (err) {
//             setError(err.message || "Login failed. Please try again.")
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">

//                 <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//                     Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-center text-sm text-gray-600">
//                     Or{" "}
//                     <Link
//                         href="/register"
//                         className="font-medium text-blue-600 hover:text-blue-500"
//                     >
//                         create a new account
//                     </Link>
//                 </p>
//             </div>

//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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

//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Email
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
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="py-2 pl-10 block text-gray-700 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="example@gmail.com"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label
//                                 htmlFor="password"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Password
//                             </label>
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type={showPassword ? "text" : "password"}
//                                     autoComplete="current-password"
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="py-2 pl-10 text-gray-400 pr-10 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="••••••••"
//                                 />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                                     >
//                                         {showPassword ? (
//                                             <EyeOff className="h-5 w-5" />
//                                         ) : (
//                                             <Eye className="h-5 w-5" />
//                                         )}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     id="remember-me"
//                                     name="remember-me"
//                                     type="checkbox"
//                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                                 />
//                                 <label
//                                     htmlFor="remember-me"
//                                     className="ml-2 block text-sm text-gray-900"
//                                 >
//                                     Remember me
//                                 </label>
//                             </div>

//                             <div className="text-sm">
//                                 <Link
//                                     href="/forgot-password"
//                                     className="font-medium text-blue-600 hover:text-blue-500"
//                                 >
//                                     Forgot your password?
//                                 </Link>
//                             </div>
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
//                                         Signing in...
//                                     </span>
//                                 ) : (
//                                     "Sign in"
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
//                                     Or continue with
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="mt-6 grid grid-cols-2 gap-3">
//                             <div>
//                                 <Link
//                                     href="#"
//                                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                                 >
//                                     <span className="sr-only">Sign in with Google</span>
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
//                                     <span className="sr-only">Sign in with Microsoft</span>
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
import { Lock, Mail, Eye, EyeOff, AlertTriangle, LogIn, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Placeholder for social login icons if you don't want to use SVG directly
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

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        if (email === "test@example.com" && password === "password") {
            // In a real app, you'd redirect using Next.js Router
            // For now, just log success
            console.log("Login successful")
            // router.push('/dashboard'); // Example redirect
            alert("Login successful! (Simulated - redirect to dashboard)")
        } else {
            setError("Invalid email or password. Please try again.")
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl lg:grid lg:grid-cols-2 bg-white shadow-2xl rounded-xl overflow-hidden">
                {/* Left Side - Branding/Image */}
                <div className="relative hidden lg:block">

                    <div className="absolute flex justify-between items-center inset-0 bg-gradient-to-br from-sky-600/70 to-purple-700/70 p-12 text-white flex flex-col justify-between">
                        <div>
                            {/* <Link href="/" className="inline-block mb-8">
                                <Image
                                    src="/assets/images/codecrafter_logo.png" // Assuming logo is white or light-colored for dark bg
                                    alt="CoderCrafter Logo"
                                    width={180}
                                    height={45}
                                    className="filter brightness-0 invert shadow-lg shadow-white" // Makes logo white
                                />
                            </Link> */}
                            <h1 className="text-4xl mt-28 font-bold leading-tight mb-4">Welcome Back to CoderCrafter!</h1>
                            <p className="text-lg opacity-90">
                                Unlock your potential. Continue your journey in mastering the art of code.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm opacity-70">© {new Date().getFullYear()} CoderCrafter. All rights reserved.</p>

                        </div>
                    </div>

                </div>

                {/* Right Side - Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="lg:hidden text-center mb-8">
                        <Link href="/">
                            <Image
                                src="/assets/images/codecrafter_logo.png"
                                alt="CoderCrafter Logo"
                                width={150}
                                height={40}
                                className="mx-auto"
                            />
                        </Link>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center lg:text-left">Sign In</h2>
                    <p className="text-sm text-gray-600 mb-8 text-center lg:text-left">
                        New to CoderCrafter?{" "}
                        <Link href="/register" className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                            Create an account <UserPlus className="inline h-4 w-4 ml-1" />
                        </Link>
                    </p>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <AlertTriangle className="h-5 w-5 text-red-500" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700 font-medium">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-sky-600 focus:outline-none transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded transition-colors"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className="font-medium text-sky-600 hover:text-sky-700 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
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
                                        Signing In...
                                    </>
                                ) : (
                                    <>
                                        Sign In <LogIn className="ml-2 h-5 w-5" />
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
                                <span className="px-3 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                href="#"
                                className="w-full inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                            >
                                <GoogleIcon />
                                <span className="ml-2">Google</span>
                            </Link>
                            <Link
                                href="#"
                                className="w-full inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                            >
                                <MicrosoftIcon />
                                <span className="ml-2">Microsoft</span>
                            </Link>
                        </div>
                    </div>
                    <p className="mt-10 text-center text-xs text-gray-500">
                        By signing in, you agree to our{" "}
                        <Link href="/terms" className="font-medium text-gray-700 hover:text-sky-600">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="font-medium text-gray-700 hover:text-sky-600">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
