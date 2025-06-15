// import Image from "next/image"
// import Link from "next/link"
// import { Search, ChevronDown, Menu } from "lucide-react"
// import { FaLaptopCode, FaGlobe, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
// import { ChatBubbleLeftRightIcon, PlayCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid';
// import {
//   AcademicCapIcon,
//   PuzzlePieceIcon,
//   BriefcaseIcon,
//   DevicePhoneMobileIcon,
//   ClipboardDocumentCheckIcon,
//   UsersIcon,
// } from '@heroicons/react/24/solid';


// export default function Home() {
//   const logos = [
//     { src: "/assets/images/amazon.png", alt: "amazon" },
//     { src: "/assets/images/google.png", alt: "" },
//     { src: "/assets/images/netflix.png", alt: "" },
//     { src: "/assets/images/oracle.png", alt: "" },
//     { src: "/assets/images/sony.png", alt: "IBM" },
//     { src: "/assets/images/tcs.png", alt: "" },
//     { src: "/assets/images/hp.png", alt: "" },
//     { src: "/assets/images/microsoft.png", alt: "" },
//     { src: "/assets/images/apple.png", alt: "" },
//     { src: "/assets/images/images.jpeg", alt: "" },

//   ];

//   const contributors = [
//     {
//       icon: <FaLaptopCode className="text-indigo-600" />,
//       bold: "Practical Learning – ",
//       text: "We train you with real-world projects and modern tech stacks like React, Node.js, AWS, and more.",
//     },
//     {
//       icon: <FaGlobe className="text-green-600" />,
//       bold: "Global Reach – ",
//       text: "Students from over 10+ countries have trusted Codercrafter to level up their careers.",
//     },
//     {
//       icon: <FaUserGraduate className="text-yellow-500" />,
//       bold: "Career-First Focus – ",
//       text: "Our courses are aligned with current job market needs and are placement-ready.",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-pink-500" />,
//       bold: "Expert Mentors – ",
//       text: "Learn from experienced software engineers, DevOps architects, and full-stack developers.",
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="bg-blue-600 text-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
//             <div className="max-w-3xl">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//                 Build Your Tech Career with CoderCrafter
//               </h1>
//               <p className="text-lg mb-8">
//                 Master in-demand technologies through our industry-focused training programs.
//                 Get hands-on experience and personalized mentorship to launch your career.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/courses" className="bg-white hover:bg-gray-100 text-indigo-800 px-6 py-3 rounded-md font-medium text-center">
//                   Explore Programs
//                 </Link>
//                 <Link href="/contact" className=" text-white border border-white hover:bg-gray-100 hover:text-indigo-700 px-6 py-3 rounded-md font-medium text-center">
//                   Talk to an Advisor
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Notification Banner */}
//         <section className="bg-white border border-gray-200 rounded-lg mx-4 sm:mx-6 lg:mx-8 -mt-6 relative z-10">
//           <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
//             <div className="flex items-center mb-4 sm:mb-0">
//               <div className="bg-indigo-100 rounded-full p-2 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-medium">New Batch Starting Soon - Limited Seats Available</p>
//                 <p className="text-sm text-gray-600">Enroll now to secure your spot in our upcoming batches</p>
//               </div>
//             </div>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
//               Apply Now
//             </button>
//           </div>
//         </section>

//         {/* Popular Courses Section */}
//         <section className="py-16">
//           <div className="container mx-auto">
//             <h2 className="text-2xl  text-center mb-10 sm:text-3xl font-bold mb-4">
//               Our Students Work At Top Companies
//             </h2>
//             <div className="flex flex-wrap bg-white p-2 sm:p-4  lg:p-6 justify-center items-center gap-8">
//               {logos.map((logo, index) => (
//                 <img
//                   key={index}
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="h-15 sm:h-18 md:h-24 lg:h-32 transition duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-8">
//           <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
//               <div className="text-center flex flex-col gap-5 lg:text-left">
//                 <div className="text-start">
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Codercrafter</h2>
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 mb-4">
//                     Tech Learning Community
//                   </h2>
//                   <p className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-gray-600">
//                     Skill-Focused. Job-Oriented. Globally Trusted.
//                   </p>
//                 </div>
//                 <p className="text-lg leading-relaxed text-gray-500">
//                   Whether you're just starting out or looking to upskill, Codercrafter brings together aspiring engineers, working
//                   professionals, and tech mentors in one powerful ecosystem. Join our mission to build skilled developers across
//                   the globe.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
//                 {contributors.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 text-left border border-gray-200 hover:shadow-lg transition-shadow"
//                   >
//                     <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 lg:mb-4">{item.icon}</div>
//                     <p className="text-gray-700 text-sm sm:text-base">
//                       <strong>{item.bold}</strong>
//                       {item.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>




//         <section className="w-full py-16 sm:py-20">
//           <div className="flex flex-col justify-center max-w-none xl:max-w-screen-2xl 2xl:max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//             <div className="text-center flex flex-col justify-center gap-4 items-center">
//               <p className="text-3xl sm:text-4xl font-bold text-gray-800">
//                 Welcome to CoderCrafter: Shaping Tomorrow’s Software Engineers
//               </p>
//               <p className="text-lg sm:text-xl text-gray-500 max-w-5xl">
//                 We offer hands-on, industry-driven training in Full Stack Development, Cloud & DevOps, Mobile App Development, and core programming languages. Learn from experts, build real projects, and join a vibrant community of future-ready engineers.
//               </p>
//             </div>

//             <div className="flex flex-col mt-16 sm:mt-20 gap-20 sm:gap-28 md:gap-32">
//               {/* Feature 1 */}
//               <div className="flex flex-col md:flex-row w-full items-center gap-10 md:gap-12 lg:gap-16">
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                   <div className="relative group w-full max-w-lg xl:max-w-xl">
//                     <Image
//                       src="/images/codercrafter-mentorship.png"
//                       width={520}
//                       height={312}
//                       className="w-full h-auto rounded-r-[30px] sm:rounded-r-[50px] shadow-md"
//                       alt="Mentor guiding students at CoderCrafter"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 max-w-lg md:max-w-xl">
//                   <p className="text-2xl sm:text-3xl font-semibold text-gray-800">Expert-Led, Project-Based Learning</p>
//                   <p className="text-base sm:text-[17px] text-gray-500 mt-3">
//                     Our instructors are seasoned professionals from top tech companies, passionate about teaching and mentoring.
//                     <span className="text-blue-600 font-semibold">
//                       {" "}You’ll learn by building real-world projects, not just watching lectures.
//                     </span>
//                   </p>
//                   <p className="text-gray-500 mt-4">
//                     Whether you’re mastering the MERN/MEAN stack, deploying to the cloud, or building your first mobile app, you’ll gain practical skills and a portfolio that stands out to employers.
//                   </p>
//                   <div className="mt-8">
//                     <Link
//                       href="/courses"
//                       className="inline-block text-white bg-blue-600 px-6 py-3 shadow-md rounded-xl hover:shadow-blue-400 transition-shadow"
//                     >
//                       Explore Courses
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex flex-col md:flex-row-reverse w-full items-center gap-10 md:gap-12 lg:gap-16 ">
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                   <div className="relative group w-full max-w-lg xl:max-w-xl">
//                     <Image
//                       src="/images/codercrafter-career.png"
//                       width={520}
//                       height={312}
//                       className="w-full h-auto rounded-l-[30px] sm:rounded-l-[50px] shadow-md"
//                       alt="Career support and job placement at CoderCrafter"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 max-w-lg md:max-w-xl md:text-left">
//                   <p className="text-2xl sm:text-3xl font-semibold text-gray-800">Career Support & Community</p>
//                   <p className="text-base sm:text-[17px] text-gray-500 mt-3">
//                     We’re more than a bootcamp — we’re your career partner.
//                     <span className="text-blue-600 font-semibold">
//                       {" "}Get resume reviews, mock interviews, and direct job placement assistance.
//                     </span>
//                   </p>
//                   <p className="text-gray-500 mt-4">
//                     Join our active alumni network, attend exclusive tech events, and connect with hiring partners. At CoderCrafter, your success is our mission.
//                   </p>
//                   <div className="mt-8">
//                     <Link
//                       href="/career-support"
//                       className="inline-block text-white bg-blue-600 px-6 py-3 shadow-md rounded-xl hover:shadow-blue-400 transition-shadow"
//                     >
//                       Learn About Career Support
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Feature 3 */}
//               <div className="flex flex-col md:flex-row w-full items-center gap-10 md:gap-12 lg:gap-16 ">
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                   <div className="relative group w-full max-w-lg xl:max-w-xl">
//                     <Image
//                       src="/images/codercrafter-flexible.png"
//                       width={520}
//                       height={312}
//                       className="w-full h-auto rounded-r-[30px] sm:rounded-r-[50px] shadow-md"
//                       alt="Flexible learning at CoderCrafter"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 max-w-lg md:max-w-xl">
//                   <p className="text-2xl sm:text-3xl font-semibold text-gray-800">Flexible, Modern Learning</p>
//                   <p className="text-base sm:text-[17px] text-gray-500 mt-3">
//                     Learn your way — online, in-person, or hybrid. Our platform is designed for busy lives and diverse learning styles.
//                     <span className="text-blue-600 font-semibold">
//                       {" "}Access interactive lessons, live sessions, and 24/7 support from anywhere.
//                     </span>
//                   </p>
//                   <p className="text-gray-500 mt-4">
//                     Start as a beginner or upskill as a pro. At CoderCrafter, you’re in control of your tech journey.
//                   </p>
//                   <div className="mt-8">
//                     <Link
//                       href="/about"
//                       className="inline-block text-white bg-blue-600 px-6 py-3 shadow-md  rounded-xl hover:shadow-blue-400 transition-shadow"
//                     >
//                       About CoderCrafter
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Why Choose Us Section */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//                 Why Choose CoderCrafter
//               </h2>
//               <p className="text-lg text-gray-600">
//                 We bridge the gap between academic learning and industry requirements,
//                 providing you with the skills that employers actually look for.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Approach</h3>
//                 <p className="text-gray-600 mb-6">
//                   At CoderCrafter, we believe in learning by doing. Our curriculum is designed around
//                   practical projects that simulate real-world challenges. You'll build a portfolio of work
//                   that demonstrates your skills to potential employers.
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   Our instructors are industry professionals who bring current best practices into the classroom.
//                   We keep our course content updated with the latest technologies and industry trends.
//                 </p>
//                 <Link href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
//                   Learn More About Us
//                 </Link>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//                 <Image
//                   src="/classroom-image.jpg"
//                   alt="CoderCrafter Classroom"
//                   width={600}
//                   height={400}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//                 Our Learning Experience
//               </h2>
//               <p className="text-lg text-gray-600">
//                 We provide an immersive environment that accelerates your learning and skill development
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <div className="text-indigo-600 mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Project-Based Learning</h3>
//                 <p className="text-gray-600">
//                   Work on real-world projects from day one. Build a portfolio that showcases your skills to employers.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <div className="text-indigo-600 mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Mentorship</h3>
//                 <p className="text-gray-600">
//                   Get personalized guidance from industry experts who are passionate about your success.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <div className="text-indigo-600 mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Career Support</h3>
//                 <p className="text-gray-600">
//                   Resume reviews, mock interviews, and job placement assistance to help you land your dream job.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 relative">
//           <div className="container mx-auto">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-white">
//               How We Help You Succeed
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Industry-Expert Instructors */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="font-bold mb-2">Industry-Expert Instructors</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Learn from professionals with real-world experience in top tech companies.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>Personalized mentorship</li>
//                   <li>Up-to-date curriculum</li>
//                   <li>Direct access to instructors</li>
//                 </ul>
//               </div>

//               {/* Hands-on Projects */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="font-bold mb-2">Hands-on Projects</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Build portfolio-worthy projects during your training.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>Real-world scenarios</li>
//                   <li>Team collaboration</li>
//                   <li>Project reviews & feedback</li>
//                 </ul>
//               </div>

//               {/* Career Support */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">

//                 <h3 className="font-bold mb-2">Career Support</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Resume prep, mock interviews, and job placement assistance.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>1:1 career coaching</li>
//                   <li>LinkedIn & resume workshops</li>
//                   <li>Exclusive job board access</li>
//                 </ul>
//               </div>

//               {/* Flexible Learning */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">

//                 <h3 className="font-bold mb-2">Flexible Learning</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Choose from online, in-person, or hybrid formats to fit your schedule.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>Self-paced modules</li>
//                   <li>Live instructor sessions</li>
//                   <li>Mobile-friendly platform</li>
//                 </ul>
//               </div>

//               {/* Certification Prep */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">

//                 <h3 className="font-bold mb-2">Certification Prep</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Get ready for industry-recognized certifications with expert guidance.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>Practice exams</li>
//                   <li>Exam strategies</li>
//                   <li>Official certification support</li>
//                 </ul>
//               </div>

//               {/* Professional Network */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">

//                 <h3 className="font-bold mb-2">Professional Network</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Connect with alumni and industry professionals for ongoing support.
//                 </p>
//                 <ul className="text-xs text-gray-500 list-disc pl-4">
//                   <li>Alumni events</li>
//                   <li>Industry meetups</li>
//                   <li>Peer learning groups</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Get Started CTA */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8  text-gray-900">
//           <div className="container mx-auto text-center">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-12">Start Your Tech Journey Today</h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               {/* Free Consultation */}
//               <div className="flex flex-col items-center">
//                 <div className="bg-white rounded-full p-4 mb-4">
//                   <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold mb-2">Free Consultation</h3>
//                 <p className="text-sm mb-4">
//                   Schedule a free career counseling session with our experts.
//                 </p>
//                 <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium mt-auto">
//                   Book Now
//                 </button>
//               </div>

//               {/* Demo Class */}
//               <div className="flex flex-col items-center">
//                 <div className="bg-white rounded-full p-4 mb-4">
//                   <PlayCircleIcon className="h-10 w-10 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold mb-2">Attend a Demo Class</h3>
//                 <p className="text-sm mb-4">Experience our teaching methodology first-hand.</p>
//                 <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium mt-auto">
//                   Register
//                 </button>
//               </div>

//               {/* Talk to Admissions */}
//               <div className="flex flex-col items-center">
//                 <div className="bg-white rounded-full p-4 mb-4">
//                   <UserGroupIcon className="h-10 w-10 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold mb-2">Talk to Admissions</h3>
//                 <p className="text-sm mb-4">
//                   Get all your questions answered about programs and payment options.
//                 </p>
//                 <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium mt-auto">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div >

//   )
// }


import Image from "next/image"
import Link from "next/link"
import {
  Laptop,
  Globe2,
  GraduationCap,
  UsersRound,
  Users,
  MessagesSquare,
  PlayCircle,
  Briefcase,
  Award,
  Network,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  CalendarDays,
  ChevronRight,
} from "lucide-react"

// Define base styles for buttons to ensure consistency
const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
const buttonPrimaryClasses = `${buttonBaseClasses} bg-sky-600 text-white hover:bg-sky-700 shadow-md`
const buttonOutlineClasses = `${buttonBaseClasses} border border-white text-white hover:bg-white hover:text-sky-700 shadow-md`
const buttonSecondaryClasses = `${buttonBaseClasses} bg-white text-sky-700 hover:bg-sky-50 shadow-md`

const buttonSizeLgClasses = "px-6 py-3 text-lg" // Adjusted from px-8 to be closer to original
const buttonSizeMdClasses = "px-4 py-2 text-base" // Default size

const cardBaseClasses = "bg-white rounded-lg shadow-lg border border-gray-200"
const cardContentClasses = "p-6" // Default padding for card content
const cardHeaderClasses = "p-6" // Default padding for card header

const companyLogos = [
  { src: "/assets/images/amazon.png", alt: "Amazon" },
  { src: "/assets/images/google.png", alt: "Google" },
  { src: "/assets/images/netflix.png", alt: "Netflix" },
  { src: "/assets/images/oracle.png", alt: "Oracle" },
  { src: "/assets/images/sony.png", alt: "Sony" },
  { src: "/assets/images/tcs.png", alt: "TCS" },
  { src: "/assets/images/hp.png", alt: "HP" },
  { src: "/assets/images/microsoft.png", alt: "Microsoft" },
  { src: "/assets/images/apple.png", alt: "Apple" },
  { src: "/assets/images/images.jpeg", alt: "Accenture" },
]

const coreFeatures = [
  {
    IconComponent: Laptop,
    iconColor: "text-sky-500",
    titleBold: "Practical Learning",
    description: "We train you with real-world projects and modern tech stacks like React, Node.js, AWS, and more.",
  },
  {
    IconComponent: Globe2,
    iconColor: "text-green-500",
    titleBold: "Global Reach",
    description: "Students from over 10+ countries have trusted Codercrafter to level up their careers.",
  },
  {
    IconComponent: GraduationCap,
    iconColor: "text-amber-500",
    titleBold: "Career-First Focus",
    description: "Our courses are aligned with current job market needs and are placement-ready.",
  },
  {
    IconComponent: UsersRound,
    iconColor: "text-pink-500",
    titleBold: "Expert Mentors",
    description: "Learn from experienced software engineers, DevOps architects, and full-stack developers.",
  },
]

const learningExperienceItems = [
  {
    IconComponent: Sparkles,
    title: "Project-Based Learning",
    description: "Work on real-world projects from day one. Build a portfolio that showcases your skills to employers.",
    iconColor: "text-sky-500",
  },
  {
    IconComponent: Users,
    title: "Mentorship",
    description: "Get personalized guidance from industry experts who are passionate about your success.",
    iconColor: "text-green-500",
  },
  {
    IconComponent: Briefcase,
    title: "Career Support",
    description: "Resume reviews, mock interviews, and job placement assistance to help you land your dream job.",
    iconColor: "text-amber-500",
  },
]

const successFactors = [
  {
    IconComponent: UsersRound,
    title: "Industry-Expert Instructors",
    description: "Learn from professionals with real-world experience in top tech companies.",
    points: ["Personalized mentorship", "Up-to-date curriculum", "Direct access to instructors"],
  },
  {
    IconComponent: Laptop,
    title: "Hands-on Projects",
    description: "Build portfolio-worthy projects during your training.",
    points: ["Real-world scenarios", "Team collaboration", "Project reviews & feedback"],
  },
  {
    IconComponent: TrendingUp,
    title: "Career Support",
    description: "Resume prep, mock interviews, and job placement assistance.",
    points: ["1:1 career coaching", "LinkedIn & resume workshops", "Exclusive job board access"],
  },
  {
    IconComponent: CalendarDays,
    title: "Flexible Learning",
    description: "Choose from online, in-person, or hybrid formats to fit your schedule.",
    points: ["Self-paced modules", "Live instructor sessions", "Mobile-friendly platform"],
  },
  {
    IconComponent: Award,
    title: "Certification Prep",
    description: "Get ready for industry-recognized certifications with expert guidance.",
    points: ["Practice exams", "Exam strategies", "Official certification support"],
  },
  {
    IconComponent: Network,
    title: "Professional Network",
    description: "Connect with alumni and industry professionals for ongoing support.",
    points: ["Alumni events", "Industry meetups", "Peer learning groups"],
  },
]

const ctaItems = [
  {
    IconComponent: MessagesSquare,
    title: "Free Consultation",
    description: "Schedule a free career counseling session with our experts.",
    buttonText: "Book Now",
    href: "/consultation",
  },
  {
    IconComponent: PlayCircle,
    title: "Attend a Demo Class",
    description: "Experience our teaching methodology first-hand.",
    buttonText: "Register",
    href: "/demo-class",
  },
  {
    IconComponent: Users,
    title: "Talk to Admissions",
    description: "Get all your questions answered about programs and payment options.",
    buttonText: "Contact Us",
    href: "/contact",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 text-center md:text-left">
            <div className="max-w-3xl">
              <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your Tech Career with <span className="text-sky-300">CoderCrafter</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-100 mb-10">
                Master in-demand technologies through our industry-focused training programs. Get hands-on experience
                and personalized mentorship to launch your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/courses" className={`${buttonSecondaryClasses} ${buttonSizeLgClasses}`}>
                  Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className={`${buttonOutlineClasses} ${buttonSizeLgClasses}`}>
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Banner */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className={`${cardBaseClasses} bg-white`}>
            <div className={`${cardContentClasses} p-4 sm:p-6`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="bg-sky-100 rounded-full p-3 mr-4">
                    <CalendarDays className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">New Batch Starting Soon - Limited Seats!</p>
                    <p className="text-sm text-gray-600">Enroll now to secure your spot in our upcoming batches.</p>
                  </div>
                </div>
                <Link href="/apply" className={`${buttonPrimaryClasses} ${buttonSizeMdClasses} shrink-0`}>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-bold mb-12 text-gray-800">Our Graduates Work At Top Companies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={50}
                    className="object-contain h-10 sm:h-12 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Learning Community Section */}
        <section className="py-16 sm:py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-sky-600 text-sky-600 bg-sky-50 mb-4">
                    CoderCrafter
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Tech Learning Community</h2>
                  <p className="text-xl lg:text-2xl font-semibold text-gray-600 mb-6">
                    Skill-Focused. Job-Oriented. Globally Trusted.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  Whether you're just starting out or looking to upskill, Codercrafter brings together aspiring
                  engineers, working professionals, and tech mentors in one powerful ecosystem. Join our mission to
                  build skilled developers across the globe.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreFeatures.map((item, index) => (
                  <div key={index} className={`${cardBaseClasses} text-left hover:shadow-xl transition-shadow`}>
                    <div className={cardHeaderClasses}>
                      <item.IconComponent className={`w-10 h-10 mb-2 ${item.iconColor}`} />
                      <h3 className="text-lg font-semibold text-gray-800">{item.titleBold}</h3>
                    </div>
                    <div className={`${cardContentClasses} pt-0`}>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section / Features */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Welcome to CoderCrafter</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Shaping Tomorrow’s Software Engineers with hands-on, industry-driven training in Full Stack Development,
                Cloud & DevOps, Mobile App Development, and core programming languages.
              </p>
            </div>

            <div className="flex flex-col gap-20 md:gap-28">
              {[
                {
                  title: "Expert-Led, Project-Based Learning",
                  text1:
                    "Our instructors are seasoned professionals from top tech companies, passionate about teaching and mentoring.",
                  highlight: "You’ll learn by building real-world projects, not just watching lectures.",
                  text2:
                    "Whether you’re mastering the MERN/MEAN stack, deploying to the cloud, or building your first mobile app, you’ll gain practical skills and a portfolio that stands out to employers.",
                  imgSrc: "/placeholder.svg?width=520&height=350",
                  imgAlt: "Mentor guiding students at CoderCrafter",
                  linkHref: "/courses",
                  linkText: "Explore Courses",
                  imgPosition: "left",
                },
                {
                  title: "Career Support & Community",
                  text1: "We’re more than a bootcamp — we’re your career partner.",
                  highlight: "Get resume reviews, mock interviews, and direct job placement assistance.",
                  text2:
                    "Join our active alumni network, attend exclusive tech events, and connect with hiring partners. At CoderCrafter, your success is our mission.",
                  imgSrc: "/placeholder.svg?width=520&height=350",
                  imgAlt: "Career support and job placement at CoderCrafter",
                  linkHref: "/career-support",
                  linkText: "Learn About Career Support",
                  imgPosition: "right",
                },
                {
                  title: "Flexible, Modern Learning",
                  text1:
                    "Learn your way — online, in-person, or hybrid. Our platform is designed for busy lives and diverse learning styles.",
                  highlight: "Access interactive lessons, live sessions, and 24/7 support from anywhere.",
                  text2:
                    "Start as a beginner or upskill as a pro. At CoderCrafter, you’re in control of your tech journey.",
                  imgSrc: "/placeholder.svg?width=520&height=350",
                  imgAlt: "Flexible learning at CoderCrafter",
                  linkHref: "/about",
                  linkText: "About CoderCrafter",
                  imgPosition: "left",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${feature.imgPosition === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group w-full max-w-lg xl:max-w-xl">
                      <Image
                        src={feature.imgSrc || "/placeholder.svg"}
                        width={520}
                        height={350}
                        className={`w-full h-auto rounded-xl shadow-2xl object-cover ${feature.imgPosition === "left" ? "md:rounded-r-2xl" : "md:rounded-l-2xl"}`}
                        alt={feature.imgAlt}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 max-w-lg md:max-w-xl text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 mt-4">
                      {feature.text1}
                      <span className="text-sky-600 font-semibold"> {feature.highlight} </span>
                    </p>
                    <p className="text-gray-600 mt-3">{feature.text2}</p>
                    <Link href={feature.linkHref} className={`${buttonPrimaryClasses} ${buttonSizeLgClasses} mt-8`}>
                      {feature.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/* <section className="py-16 sm:py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose CoderCrafter?</h2>
              <p className="text-lg text-gray-600">
                We bridge the gap between academic learning and industry requirements, providing you with the skills
                that employers actually look for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Unique Approach</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <Target className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Learning by Doing:</strong> Our curriculum is designed around practical projects that
                      simulate real-world challenges. You'll build a portfolio that demonstrates your skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Industry-Relevant Skills:</strong> Our instructors are professionals who bring current
                      best practices. We keep content updated with the latest technologies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Supportive Community:</strong> Join a network of peers, mentors, and alumni to support
                      your growth long after you graduate.
                    </span>
                  </li>
                </ul>
                <Link href="/about" className={`${buttonPrimaryClasses} ${buttonSizeLgClasses} mt-8`}>
                  Learn More About Us
                </Link>
              </div>
              <div className="bg-white p-2 rounded-xl shadow-2xl border border-gray-200">
                <Image
                  src="/placeholder.svg?width=600&height=450"
                  alt="CoderCrafter Classroom Environment"
                  width={600}
                  height={450}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-16 sm:py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl">Why Choose CoderCrafter?</h2>
              <p className="text-lg text-gray-600">
                We bridge the gap between academic learning and industry requirements, providing you with the skills
                that employers actually look for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Unique Approach</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <Target className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Learning by Doing:</strong> Our curriculum is designed around practical projects that
                      simulate real-world challenges. You'll build a portfolio that demonstrates your skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Industry-Relevant Skills:</strong> Our instructors are professionals who bring current
                      best practices. We keep content updated with the latest technologies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-sky-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong>Supportive Community:</strong> Join a network of peers, mentors, and alumni to support
                      your growth long after you graduate.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 text-center md:text-left">
                  <Link
                    href="/about"
                    className={`${buttonPrimaryClasses} ${buttonSizeLgClasses} w-full sm:w-auto md:inline-flex`}
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200">
                <Image
                  src="/placeholder.svg?width=600&height=450"
                  alt="CoderCrafter Classroom Environment"
                  width={600}
                  height={450}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learning Experience Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">An Immersive Learning Experience</h2>
              <p className="text-lg text-gray-600">
                We provide an environment that accelerates your learning and skill development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningExperienceItems.map((item, index) => (
                <div key={index} className={`${cardBaseClasses} text-center hover:shadow-xl transition-shadow`}>
                  <div className={cardHeaderClasses}>
                    <div className="flex justify-center mb-4">
                      <div
                        className={`bg-opacity-10 p-4 rounded-full ${item.iconColor.replace("text-", "bg-").replace("500", "100")}`}
                      >
                        <item.IconComponent className={`h-10 w-10 ${item.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <div className={`${cardContentClasses} pt-0`}>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help You Succeed Section */}
        <section className="py-16 sm:py-20 bg-sky-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">How We Help You Succeed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {successFactors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-sky-600 border border-sky-500 rounded-lg shadow-lg text-sky-50 hover:bg-sky-500 transition-colors"
                >
                  <div className={cardHeaderClasses}>
                    <div className="flex items-center gap-3 mb-2">
                      <factor.IconComponent className="h-8 w-8 text-sky-300" />
                      <h3 className="text-xl font-semibold">{factor.title}</h3>
                    </div>
                    <p className="text-sky-200 text-sm">{factor.description}</p>
                  </div>
                  <div className={`${cardContentClasses} pt-0`}>
                    <ul className="text-sm text-sky-100 list-disc pl-5 space-y-1">
                      {factor.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-16">Start Your Tech Journey Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ctaItems.map((item, index) => (
                <div
                  key={index}
                  className={`${cardBaseClasses} flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow`}
                >
                  <div className="bg-sky-100 rounded-full p-4 mb-6">
                    <item.IconComponent className="h-10 w-10 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>
                  <Link href={item.href} className={`${buttonPrimaryClasses} ${buttonSizeMdClasses} w-full mt-auto`}>
                    {item.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
