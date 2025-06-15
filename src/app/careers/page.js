// "use client"
// const Careers = () => {
//     return (
//         <div className="bg-gray-100 text-gray-900">
//             <div className="max-w-6xl mx-auto px-4 py-12">
//                 <h1 className="text-4xl font-bold mb-4 text-center">Careers at Codercrafter</h1>
//                 <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//                     At Codercrafter, we’re more than just a training institute. We’re a movement empowering thousands of aspiring developers and engineers to build real careers in tech. Join our growing team and make an impact in the lives of future coders.
//                 </p>

//                 <div className=" p-6 rounded-lg mb-10">
//                     <h2 className="text-2xl font-semibold mb-2">Why Work With Us?</h2>
//                     <ul className="list-disc ml-6 text-gray-700 space-y-2">
//                         <li>Flexible remote work options</li>
//                         <li>Opportunity to mentor the next generation of tech professionals</li>
//                         <li>Performance-based bonuses & recognition</li>
//                         <li>Collaborative and fast-growing work culture</li>
//                     </ul>
//                 </div>

//                 <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {[
//                         {
//                             title: 'ReactJS Instructor',
//                             location: 'Remote',
//                             type: 'Part-Time',
//                             desc: 'Looking for a passionate frontend developer who can break down React concepts and help students build live projects.',
//                         },
//                         {
//                             title: 'DevOps Trainer',
//                             location: 'Remote / Bangalore',
//                             type: 'Full-Time',
//                             desc: 'Train engineers in DevOps tools such as Docker, Jenkins, AWS, and Kubernetes. Should be good at delivering hands-on workshops.',
//                         },
//                         {
//                             title: 'Content Creator (YouTube / Blog)',
//                             location: 'Remote',
//                             type: 'Freelance',
//                             desc: 'Create engaging video tutorials or blogs on trending tech topics, interview prep, or career advice.',
//                         },
//                     ].map((job, idx) => (
//                         <div key={idx} className="border p-6 rounded-lg shadow hover:shadow-md transition">
//                             <h3 className="text-xl font-semibold">{job.title}</h3>
//                             <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
//                             <p className="text-gray-700 mt-2">{job.desc}</p>
//                             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                                 Apply Now
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default Careers;

"use client"
import { MapPin, Clock, Users, Award, Zap, MessageSquare, Send, Lightbulb, Users2, BookOpen, Heart } from "lucide-react" // Added new icons

// --- Reusable Style Constants ---
const buttonBaseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
const buttonPrimaryClasses = `${buttonBaseClasses} bg-sky-600 text-white hover:bg-sky-700 shadow-md`
const buttonOutlineClasses = `${buttonBaseClasses} border-2 border-sky-600 text-sky-600 hover:bg-sky-100`
const buttonSizeMdClasses = "px-6 py-2.5 text-sm"
const buttonSizeLgClasses = "px-8 py-3 text-base"

// --- Page Data ---
const companyBenefits = [
    {
        Icon: Clock,
        title: "Flexible Work",
        description: "Enjoy remote work options and a schedule that fits your life.",
    },
    {
        Icon: Award,
        title: "Impactful Role",
        description: "Mentor and shape the next generation of tech professionals.",
    },
    {
        Icon: Zap,
        title: "Growth & Recognition",
        description: "Benefit from performance-based bonuses and career advancement.",
    },
    {
        Icon: Users,
        title: "Vibrant Culture",
        description: "Thrive in a collaborative, innovative, and fast-growing environment.",
    },
]

const cultureHighlights = [
    {
        Icon: Lightbulb,
        title: "Innovation at Heart",
        description: "We encourage creative thinking and provide the freedom to explore new ideas and technologies.",
    },
    {
        Icon: Users2,
        title: "Collaborative Spirit",
        description: "Teamwork is key. We foster an environment where everyone's voice is heard and valued.",
    },
    {
        Icon: BookOpen,
        title: "Continuous Learning",
        description: "We invest in your growth with access to courses, workshops, and conferences.",
    },
    {
        Icon: Heart,
        title: "Inclusivity & Diversity",
        description: "We celebrate diverse perspectives and strive to create a welcoming space for all.",
    },
]

const instructorProfiles = [
    {
        name: "Dr. Anya Sharma",
        expertise: "Lead Full Stack & AI Instructor",
        image: "/placeholder.svg?height=150&width=150",
        bio: "Anya brings 12+ years of industry experience from top tech firms, specializing in scalable web architectures and machine learning applications. She's passionate about demystifying complex concepts.",
    },
    {
        name: "Ben Carter",
        expertise: "Senior DevOps & Cloud Architect Trainer",
        image: "/placeholder.svg?height=150&width=150",
        bio: "With a background in building resilient cloud infrastructures for Fortune 500 companies, Ben empowers students to master AWS, Docker, and Kubernetes with practical, real-world insights.",
    },
    {
        name: "Chloe Davis",
        expertise: "Mobile Development & UX Lead",
        image: "/placeholder.svg?height=150&width=150",
        bio: "Chloe is an award-winning mobile app developer and UX designer. She focuses on teaching students how to build intuitive, user-centric applications for both iOS and Android using React Native.",
    },
]

const jobOpenings = [
    {
        title: "Senior ReactJS Instructor",
        location: "Remote",
        type: "Part-Time",
        description:
            "Passionate frontend expert to break down complex React concepts and guide students through live, impactful projects.",
        responsibilities: [
            "Deliver engaging lectures and workshops on React and modern frontend practices.",
            "Provide 1-on-1 mentorship and code reviews.",
            "Develop and update course curriculum for React-focused modules.",
        ],
        qualifications: [
            "5+ years of professional React development experience.",
            "Proven teaching or mentorship experience.",
            "Excellent communication and presentation skills.",
        ],
    },
    {
        title: "Lead DevOps Trainer",
        location: "Remote / Bangalore",
        type: "Full-Time",
        description:
            "Experienced DevOps professional to train engineers in tools like Docker, Jenkins, AWS, and Kubernetes through hands-on workshops.",
        responsibilities: [
            "Design and deliver comprehensive DevOps training programs.",
            "Create practical lab exercises and real-world deployment scenarios.",
            "Stay updated with the latest DevOps trends and cloud technologies.",
        ],
        qualifications: [
            "Strong experience with CI/CD, IaC (Terraform/CloudFormation), and cloud platforms (AWS preferred).",
            "Ability to explain complex topics clearly and concisely.",
            "Relevant industry certifications (e.g., AWS Certified DevOps Engineer, CKA).",
        ],
    },
    {
        title: "Tech Content Creator (Video & Blog)",
        location: "Remote",
        type: "Freelance",
        description:
            "Creative individual to produce engaging video tutorials, blog posts, and social media content on trending tech topics, interview prep, and career advice.",
        responsibilities: [
            "Research and identify trending topics in software development and tech careers.",
            "Create high-quality, engaging video and written content for various platforms.",
            "Optimize content for SEO and audience engagement.",
        ],
        qualifications: [
            "Proven experience in creating tech-focused content (portfolio required).",
            "Strong writing and/or video production and editing skills.",
            "Ability to explain technical concepts simply and effectively.",
        ],
    },
    {
        title: "Admissions Counselor",
        location: "Remote",
        type: "Full-Time",
        description:
            "Empathetic and driven individual to guide prospective students through our program offerings and help them make informed career decisions.",
        responsibilities: [
            "Respond to inquiries from prospective students via email, phone, and chat.",
            "Conduct consultations to understand student goals and recommend suitable programs.",
            "Explain program details, curriculum, and career outcomes clearly.",
            "Assist students with the enrollment and onboarding process.",
        ],
        qualifications: [
            "Excellent communication, interpersonal, and active listening skills.",
            "Previous experience in sales, student admissions, or educational counseling.",
            "Passion for helping others achieve their career aspirations in tech.",
        ],
    },
    {
        title: "Full Stack Web Development Instructor",
        location: "Remote",
        type: "Full-Time / Part-Time",
        description:
            "Inspire and educate aspiring full-stack developers, covering everything from frontend (React/Vue) to backend (Node.js/Python) and databases.",
        responsibilities: [
            "Teach comprehensive full-stack curriculum including MERN/MEAN stacks.",
            "Guide students in building complex, end-to-end web applications.",
            "Facilitate project-based learning and collaborative assignments.",
        ],
        qualifications: [
            "Extensive experience as a Full Stack Developer (React, Node.js, Express, MongoDB/SQL).",
            "Prior experience in teaching, mentoring, or curriculum development.",
            "Ability to adapt teaching style to diverse learning needs.",
        ],
    },
    {
        title: "Frontend Development Specialist (Vue.js)",
        location: "Remote",
        type: "Part-Time",
        description:
            "Seeking a Vue.js expert to lead specialized frontend development modules, focusing on modern UI/UX principles and state management.",
        responsibilities: [
            "Deliver advanced Vue.js training sessions.",
            "Mentor students on building interactive and responsive user interfaces.",
            "Contribute to the development of Vue.js course materials.",
        ],
        qualifications: [
            "Deep expertise in Vue.js, Vuex/Pinia, and the Vue ecosystem.",
            "Strong understanding of HTML, CSS, JavaScript, and modern frontend tooling.",
            "Experience with UI/UX design principles is a plus.",
        ],
    },
    {
        title: "Backend Development Instructor (Python/Django)",
        location: "Remote",
        type: "Part-Time",
        description:
            "Teach robust backend development using Python, Django/Flask, database design, and API development best practices.",
        responsibilities: [
            "Conduct lectures and hands-on labs on Python backend frameworks.",
            "Cover topics like RESTful APIs, ORMs, authentication, and deployment.",
            "Assist students in developing scalable server-side applications.",
        ],
        qualifications: [
            "Professional experience in backend development with Python (Django/Flask).",
            "Solid understanding of database systems (SQL/NoSQL) and API design.",
            "Experience with microservices architecture is beneficial.",
        ],
    },
    {
        title: "Mobile App Development Instructor (React Native)",
        location: "Remote",
        type: "Full-Time",
        description:
            "Lead our React Native bootcamp, guiding students to build cross-platform mobile applications for iOS and Android.",
        responsibilities: [
            "Teach React Native fundamentals and advanced concepts.",
            "Oversee the development of student mobile app projects from ideation to deployment.",
            "Cover native module integration and mobile-specific UX/UI considerations.",
        ],
        qualifications: [
            "Significant experience in React Native mobile app development.",
            "Proficiency in JavaScript/TypeScript and mobile development lifecycles.",
            "Published apps on App Store or Google Play is a strong plus.",
        ],
    },
    {
        title: "AWS Certified Solutions Architect Trainer",
        location: "Remote",
        type: "Part-Time / Contract",
        description:
            "Prepare students for the AWS Certified Solutions Architect - Associate exam through targeted training, practice exams, and real-world case studies.",
        responsibilities: [
            "Deliver exam-focused training sessions covering all AWS CSA-A domains.",
            "Administer and review practice exams, providing detailed feedback.",
            "Share practical tips and strategies for exam success.",
        ],
        qualifications: [
            "Must hold an active AWS Certified Solutions Architect - Associate or Professional certification.",
            "Proven experience in designing and deploying solutions on AWS.",
            "Previous experience as an AWS trainer or instructor highly preferred.",
        ],
    },
]

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <header className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 sm:py-28 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Join Our Mission</h1>
                    <p className="text-lg sm:text-xl text-sky-100 max-w-3xl mx-auto">
                        At CoderCrafter, we’re empowering future tech leaders. Be part of a passionate team dedicated to
                        transforming lives through education and innovation.
                    </p>
                </div>
            </header>

            {/* Why Work With Us Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why CoderCrafter?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover a rewarding career where your work makes a real difference.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-sky-100 p-4 rounded-full">
                                        <benefit.Icon className="h-8 w-8 text-sky-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Culture Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Culture: Innovate, Collaborate, Grow</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We're building more than just products; we're building a community where everyone can thrive.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cultureHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-sky-100 p-4 rounded-full">
                                        <highlight.Icon className="h-8 w-8 text-sky-700" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-sky-700">{highlight.title}</h3>
                                <p className="text-gray-600 text-sm">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learn from Industry Experts Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Learn from Industry Experts</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our instructors are seasoned professionals passionate about sharing their knowledge and guiding your
                            success.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {instructorProfiles.map((instructor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center border border-gray-200 hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={instructor.image || "/placeholder.svg"}
                                    alt={instructor.name}
                                    width={120}
                                    height={120}
                                    className="rounded-full mb-4 object-cover ring-4 ring-sky-200"
                                />
                                <h3 className="text-xl font-semibold text-sky-700">{instructor.name}</h3>
                                <p className="text-sm text-sky-600 font-medium mb-2">{instructor.expertise}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{instructor.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Current Openings</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find your next opportunity and grow with us. We're looking for talented individuals to join our team.
                        </p>
                    </div>
                    {jobOpenings.length > 0 ? (
                        <div className="space-y-8">
                            {jobOpenings.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-sky-700 mb-2 sm:mb-0">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700">
                                                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                                                {job.location}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700">
                                                <Clock className="w-3.5 h-3.5 mr-1.5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">{job.description}</p>

                                    {job.responsibilities && job.responsibilities.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                                {job.responsibilities.map((resp, i) => (
                                                    <li key={i}>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {job.qualifications && job.qualifications.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-700 mb-2">Qualifications:</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                                {job.qualifications.map((qual, i) => (
                                                    <li key={i}>{qual}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <button className={`${buttonPrimaryClasses} ${buttonSizeMdClasses}`}>
                                        Apply Now
                                        <Send className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600 text-lg">
                            We currently don't have any open positions. Please check back later!
                        </p>
                    )}
                </div>
            </section>

            {/* Don't See a Fit? Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-sky-50 p-8 sm:p-12 rounded-2xl text-center shadow-lg border border-sky-100">
                        <MessageSquare className="h-12 w-12 text-sky-600 mx-auto mb-6" />
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Don't See a Role That Fits?</h2>
                        <p className="text-gray-600 max-w-xl mx-auto mb-8">
                            We're always looking for passionate and talented individuals. If you believe you can contribute to our
                            mission, we'd love to hear from you.
                        </p>
                        <button className={`${buttonOutlineClasses} ${buttonSizeLgClasses}`}>Submit Your Resume</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

