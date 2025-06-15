// "use client";

// import React, { useState } from "react";

// /* === Material Design SVG Icon Components / You can swap as needed === */
// const PostIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" >
//         <rect width="20" height="14" x="2" y="5" rx="2" fill="#2563eb" opacity="0.13" />
//         <rect width="20" height="14" x="2" y="5" rx="2" stroke="#2563eb" strokeWidth="1.4" />
//         <rect width="14" height="2.5" x="5" y="8" rx="1.2" fill="#2563eb" />
//         <rect width="10" height="2.5" x="5" y="12" rx="1.2" fill="#2563eb" opacity=".65" />
//     </svg>
// );

// const CodeIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" stroke="currentColor" fill="none" >
//         <rect width="20" height="14" x="2" y="5" rx="2" fill="#facc15" opacity="0.10" />
//         <rect width="20" height="14" x="2" y="5" rx="2" stroke="#facc15" strokeWidth="1.4" />
//         <polyline points="9 9 7 12 9 15" stroke="#facc15" strokeWidth="2" fill="none" strokeLinecap="round" />
//         <polyline points="15 9 17 12 15 15" stroke="#facc15" strokeWidth="2" fill="none" strokeLinecap="round" />
//     </svg>
// );

// const CloudIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" >
//         <ellipse cx="12" cy="15" rx="7.5" ry="5.5" fill="#06b6d4" opacity="0.13" />
//         <ellipse cx="12" cy="15" rx="7.5" ry="5.5" stroke="#06b6d4" strokeWidth="1.4" />
//         <ellipse cx="10" cy="13" rx="2" ry="2" fill="#06b6d4" />
//         <ellipse cx="15" cy="14.5" rx="2" ry="2" fill="#06b6d4" opacity="0.85" />
//     </svg>
// );

// const MobileIcon = (props) => (
//     <svg {...props} viewBox="0 0 24 24" fill="none" >
//         <rect x="7" y="3" width="10" height="18" rx="3" fill="#8b5cf6" opacity="0.13" />
//         <rect x="7" y="3" width="10" height="18" rx="3" stroke="#8b5cf6" strokeWidth="1.4" />
//         <circle cx="12" cy="18" r="1.2" fill="#8b5cf6" />
//     </svg>
// );

// /* === Demo Blog Data === */
// const POSTS = [
//     {
//         id: 1,
//         title: "How to Ace Your First Coding Interview",
//         summary:
//             "Actionable tips and hands-on resources for preparing and excelling in your very first developer interview.",
//         date: "2024-06-09",
//         author: "Ananya Shah",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/708f1bd8-3029-4404-a801-6f854bd28d43.png",
//         alt: "Student at desk solving coding interview questions with laptop and notepad",
//         icon: <PostIcon className="w-6 h-6 text-blue-600" />,
//         featured: true,
//         category: "Career Prep",
//         tags: ["interview", "career", "advice"],
//     },
//     {
//         id: 2,
//         title: "The MERN Stack in 2024: What’s New?",
//         summary:
//             "An overview of new trends and must-learn tools for mastering MongoDB, Express, React, and Node this year.",
//         date: "2024-05-17",
//         author: "Nikhil Menon",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89cbc8cc-d9e7-4da8-a5b1-8eb5ba83fc13.png",
//         alt: "Abstract illustration representing MERN stack architecture with React, Node and MongoDB icons",
//         icon: <CodeIcon className="w-6 h-6 text-yellow-400" />,
//         featured: false,
//         category: "Full Stack",
//         tags: ["mern", "javascript", "webdev"],
//     },
//     {
//         id: 3,
//         title: "Cloud Computing Careers: Crash Course",
//         summary:
//             "What every newcomer should know about breaking into cloud, popular certs, and real-world hands-on skills.",
//         date: "2024-05-11",
//         author: "Maya Tripathi",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4967b79f-c72c-4bec-ab29-235eee561523.png",
//         alt: "Young developer connecting to cloud infrastructure with laptop, blue digital background",
//         icon: <CloudIcon className="w-6 h-6 text-cyan-500" />,
//         featured: false,
//         category: "Cloud & DevOps",
//         tags: ["cloud", "devops", "certification"],
//     },
//     {
//         id: 4,
//         title: "Mobile App Development: Flutter vs React Native",
//         summary:
//             "Compare the hottest cross-platform mobile frameworks for 2024 and how to choose the right one for you.",
//         date: "2024-05-01",
//         author: "Chris Okafor",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/304e0e2d-8e82-4bf2-800b-77cf17431d51.png",
//         alt: "Comparison of smartphones with Flutter and React Native logos on screen, modern vibrant style",
//         icon: <MobileIcon className="w-6 h-6 text-purple-500" />,
//         featured: false,
//         category: "Mobile",
//         tags: ["mobile", "flutter", "react native"],
//     },
//     {
//         id: 5,
//         title: "What is DevOps? A Beginner’s Roadmap",
//         summary:
//             "A friendly, modern roadmap with real project examples for absolute beginners to start in DevOps.",
//         date: "2024-04-25",
//         author: "Priyansh Gupta",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d76f4e59-deb8-4b80-959c-a764b6a3411c.png",
//         alt: "Team of engineers collaborating on DevOps tools, pipelines, and cloud infra dashboard",
//         icon: <CloudIcon className="w-6 h-6 text-indigo-500" />,
//         featured: false,
//         category: "Cloud & DevOps",
//         tags: ["devops", "cloud", "automation"],
//     },
//     {
//         id: 6,
//         title: "Programming Languages to Learn in 2024",
//         summary:
//             "Our picks for the most important programming languages to focus on for your future job or business.",
//         date: "2024-04-14",
//         author: "Arjun Iyer",
//         img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a07e76c2-41f8-496f-81d5-7048753e8fdc.png",
//         alt: "Modern developer workspace with books and icons of Python, JavaScript, Java, C++",
//         icon: <CodeIcon className="w-6 h-6 text-blue-600" />,
//         featured: false,
//         category: "Programming",
//         tags: ["python", "javascript", "java", "career"],
//     },
// ];

// /* === Category List (dynamic from posts) === */
// const ALL_CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

// /* === Responsive Blog Header === */
// function ResponsiveHeader() {
//     const [open, setOpen] = useState(false);
//     return (
//         <header className="bg-blue-700 text-white sticky top-0 z-20 shadow">
//             <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
//                 <a className="font-bold text-2xl tracking-wider bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-500 bg-clip-text text-transparent" href="/" tabIndex={0}>
//                     CoderCrafter
//                 </a>
//                 <nav className="hidden md:flex gap-10 text-lg">
//                     <a href="/" className="hover:text-cyan-200 font-semibold transition" tabIndex={0}>Home</a>
//                     <a href="/courses" className="hover:text-cyan-200 font-semibold transition" tabIndex={0}>Courses</a>
//                     <a href="/blog" className="hover:text-cyan-200 font-semibold transition underline underline-offset-4" tabIndex={0}>Blog</a>
//                     <a href="/contact" className="hover:text-cyan-200 font-semibold transition" tabIndex={0}>Contact</a>
//                 </nav>
//                 <button
//                     className="md:hidden inline-flex items-center text-white focus:outline-none"
//                     aria-label="Open menu"
//                     aria-expanded={open}
//                     onClick={() => setOpen((v) => !v)}
//                 >
//                     <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="#fff" /><rect y="11" width="24" height="2" rx="1" fill="#fff" /><rect y="18" width="24" height="2" rx="1" fill="#fff" /></svg>
//                 </button>
//             </div>
//             {/* Mobile Nav */}
//             <nav className={`md:hidden bg-white text-blue-900 font-semibold transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-2" : "max-h-0 py-0"}`}>
//                 <a href="/" className="block px-7 py-3 hover:bg-blue-50 rounded-lg" tabIndex={0}>Home</a>
//                 <a href="/courses" className="block px-7 py-3 hover:bg-blue-50 rounded-lg" tabIndex={0}>Courses</a>
//                 <a href="/blog" className="block px-7 py-3 hover:bg-blue-50 rounded-lg underline underline-offset-2" tabIndex={0}>Blog</a>
//                 <a href="/contact" className="block px-7 py-3 hover:bg-blue-50 rounded-lg" tabIndex={0}>Contact</a>
//             </nav>
//         </header>
//     );
// }

// /* === Blog Page === */
// export default function BlogPage() {
//     const [selected, setSelected] = useState("All");
//     const [q, setQ] = useState("");

//     const filtered = POSTS.filter(
//         (p) =>
//             (selected === "All" || p.category === selected) &&
//             (p.title.toLowerCase().includes(q.toLowerCase()) ||
//                 p.summary.toLowerCase().includes(q.toLowerCase()))
//     );

//     const featured = POSTS.find((p) => p.featured);
//     const grid = filtered.filter((p) => !p.featured);

//     return (
//         <div className="min-h-screen flex flex-col text-gray-600 bg-gray-50">

//             {/* Hero header */}
//             <section className="bg-blue-600 text-white py-14 px-2 text-center">
//                 <div className="max-w-2xl mx-auto">
//                     <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight tracking-tight">
//                         CoderCrafter Blogs
//                     </h1>
//                     <p className="text-lg sm:text-xl font-medium opacity-80 mb-2">
//                         Insights, guides, and trends for modern developers.<br />
//                         Learn, grow, and craft a future in tech.
//                     </p>
//                 </div>
//             </section>

//             {/* Featured post */}
//             {featured && (
//                 <main className="max-w-6xl mx-auto px-4 mt-12">
//                     <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-0 flex flex-col sm:flex-row items-stretch hover:shadow-2xl transition-shadow">
//                         <div className="flex-none w-full sm:w-72 overflow-hidden rounded-2xl sm:rounded-l-2xl sm:rounded-r-none">
//                             <img
//                                 src={featured.img}
//                                 alt={featured.alt}
//                                 className="w-full h-full object-cover object-center block"
//                                 style={{ minHeight: 210, background: "#ecf0fa" }}
//                                 onError={(e) => (e.currentTarget.style.display = "none")}
//                             />
//                         </div>
//                         <div className="flex-1 py-7 px-5 sm:px-9 flex flex-col justify-center">
//                             <div className="flex items-center gap-3 text-blue-600 mb-2">
//                                 {featured.icon}
//                                 <span className="font-semibold tracking-wide text-xs bg-blue-100 px-2 py-px rounded-md">{featured.category}</span>
//                                 <span className="text-sm text-gray-500">{new Date(featured.date).toLocaleDateString()}</span>
//                             </div>
//                             <h2 className=" text-2xl sm:text-3xl font-semibold text-blue-800 mb-3">{featured.title}</h2>
//                             <p className="text-gray-600 text-lg mb-2">{featured.summary}</p>
//                             <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
//                                 <span className="text-[15px] text-blue-700 font-medium">{featured.author}</span>
//                                 <div className="flex gap-2 flex-wrap">
//                                     {featured.tags.map((tag) => (
//                                         <span key={tag} className="bg-blue-100 text-blue-600 rounded px-2 py-px text-xs">{tag}</span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             )}

//             <div className="max-w-6xl mx-auto grow w-full mt-12 px-4 flex flex-col md:flex-row gap-8">
//                 {/* Sidebar */}
//                 <aside className="md:w-72 flex-shrink-0 mb-6 md:mb-0 space-y-6">
//                     <div className="bg-white rounded-2xl shadow p-5">
//                         <label htmlFor="blog-search" className="text-gray-600 font-semibold mb-2 block text-sm">
//                             Search Articles
//                         </label>
//                         <input
//                             id="blog-search"
//                             type="search"
//                             value={q}
//                             onChange={(e) => setQ(e.target.value)}
//                             placeholder="Find a topic..."
//                             className="mt-1 w-full px-4 py-2 bg-gray-50 rounded-md border focus:ring-2 focus:ring-blue-400/40 outline-none"
//                             aria-label="Search blog posts"
//                         />
//                     </div>

//                     <div className="bg-white rounded-2xl shadow p-5">
//                         <h5 className="font-semibold text-gray-700 mb-2 text-sm">Categories</h5>
//                         <div className="flex flex-wrap gap-2">
//                             <button
//                                 aria-pressed={selected === "All"}
//                                 className={`px-3 py-1 rounded-full text-xs font-semibold ${selected === "All" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"}`}
//                                 onClick={() => setSelected("All")}
//                             >
//                                 All
//                             </button>
//                             {ALL_CATEGORIES.map((cat) => (
//                                 <button
//                                     key={cat}
//                                     aria-pressed={selected === cat}
//                                     className={`px-3 py-1 rounded-full text-xs font-semibold ${selected === cat ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"}`}
//                                     onClick={() => setSelected(cat)}
//                                 >
//                                     {cat}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </aside>

//                 {/* Blog grid */}
//                 <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
//                     {grid.length === 0 ? (
//                         <div className="col-span-full text-center text-gray-400 pt-12 text-lg">No articles found.</div>
//                     ) : (
//                         grid.map((post) => (
//                             <article
//                                 key={post.id}
//                                 className="relative bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col group"
//                                 tabIndex={0}
//                                 aria-labelledby={`post-title-${post.id}`}
//                             >
//                                 <div className="flex items-center gap-2 mb-2 text-blue-500">
//                                     {post.icon}
//                                     <span className="text-xs bg-blue-100 px-2 rounded">{post.category}</span>
//                                 </div>
//                                 <img
//                                     src={post.img}
//                                     alt={post.alt}
//                                     className="rounded-lg w-full h-40 object-cover object-center mb-4"
//                                     onError={(e) => (e.currentTarget.style.display = "none")}
//                                 />
//                                 <h3
//                                     id={`post-title-${post.id}`}
//                                     className="font-black text-lg mb-2 text-gray-800 group-hover:text-blue-700 transition"
//                                 >
//                                     {post.title}
//                                 </h3>
//                                 <div className="flex gap-2 items-center text-xs text-gray-500 mb-2">
//                                     <span>{new Date(post.date).toLocaleDateString()}</span>
//                                     <span>&bull;</span>
//                                     <span className="font-semibold text-blue-700">{post.author}</span>
//                                 </div>
//                                 <p className="text-[15px] text-gray-600 mb-3">{post.summary}</p>
//                                 <div className="flex flex-wrap gap-1 mt-auto mb-2">
//                                     {post.tags.map((t) => (
//                                         <span key={t} className="bg-blue-100 text-blue-700 rounded px-2 py-px text-xs">
//                                             {t}
//                                         </span>
//                                     ))}
//                                 </div>
//                                 <a href="#" className="text-blue-600 font-bold text-base hover:underline mt-auto pt-2 block transition">
//                                     Read More
//                                 </a>
//                             </article>
//                         ))
//                     )}
//                 </section>
//             </div>
//         </div>
//     )
// }


"use client"

import { useState } from "react"
import { Search, Newspaper, Code2, Cloud, Smartphone, Calendar, User, ArrowRight } from "lucide-react"

// --- Demo Blog Data ---
const POSTS = [
    {
        id: 1,
        title: "How to Ace Your First Coding Interview",
        summary:
            "Actionable tips and hands-on resources for preparing and excelling in your very first developer interview.",
        date: "2024-06-09",
        author: "Ananya Shah",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Student at desk solving coding interview questions with laptop and notepad",
        Icon: Newspaper,
        featured: true,
        category: "Career Prep",
        tags: ["interview", "career", "advice"],
    },
    {
        id: 2,
        title: "The MERN Stack in 2024: What’s New?",
        summary:
            "An overview of new trends and must-learn tools for mastering MongoDB, Express, React, and Node this year.",
        date: "2024-05-17",
        author: "Nikhil Menon",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Abstract illustration representing MERN stack architecture",
        Icon: Code2,
        featured: false,
        category: "Full Stack",
        tags: ["mern", "javascript", "webdev"],
    },
    {
        id: 3,
        title: "Cloud Computing Careers: Crash Course",
        summary:
            "What every newcomer should know about breaking into cloud, popular certs, and real-world hands-on skills.",
        date: "2024-05-11",
        author: "Maya Tripathi",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Developer connecting to cloud infrastructure with laptop",
        Icon: Cloud,
        featured: false,
        category: "Cloud & DevOps",
        tags: ["cloud", "devops", "certification"],
    },
    {
        id: 4,
        title: "Mobile App Development: Flutter vs React Native",
        summary: "Compare the hottest cross-platform mobile frameworks for 2024 and how to choose the right one for you.",
        date: "2024-05-01",
        author: "Chris Okafor",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Comparison of smartphones with Flutter and React Native logos",
        Icon: Smartphone,
        featured: false,
        category: "Mobile",
        tags: ["mobile", "flutter", "react native"],
    },
    {
        id: 5,
        title: "What is DevOps? A Beginner’s Roadmap",
        summary: "A friendly, modern roadmap with real project examples for absolute beginners to start in DevOps.",
        date: "2024-04-25",
        author: "Priyansh Gupta",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Team collaborating on DevOps tools and pipelines",
        Icon: Cloud,
        featured: false,
        category: "Cloud & DevOps",
        tags: ["devops", "cloud", "automation"],
    },
    {
        id: 6,
        title: "Programming Languages to Learn in 2024",
        summary: "Our picks for the most important programming languages to focus on for your future job or business.",
        date: "2024-04-14",
        author: "Arjun Iyer",
        image: "/placeholder.svg?width=800&height=450",
        alt: "Developer workspace with icons of Python, JavaScript, Java",
        Icon: Code2,
        featured: false,
        category: "Programming",
        tags: ["python", "javascript", "java", "career"],
    },
]

const ALL_CATEGORIES = ["All", ...new Set(POSTS.map((p) => p.category))]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = POSTS.filter(
        (p) =>
            (selectedCategory === "All" || p.category === selectedCategory) &&
            (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.summary.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    const featuredPost = POSTS.find((p) => p.featured)
    const regularPosts = filteredPosts.filter((p) => !p.featured)

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <header className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 sm:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">CoderCrafter Blog</h1>
                    <p className="text-lg sm:text-xl text-sky-100 max-w-3xl mx-auto">
                        Insights, guides, and trends for modern developers. Learn, grow, and craft your future in tech.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 sm:py-16">
                {/* Featured Post */}
                {featuredPost && (
                    <section className="mb-16">
                        <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200">
                            <div className="relative aspect-video rounded-xl overflow-hidden">
                                <img
                                    src={featuredPost.image || "/placeholder.svg"}
                                    alt={featuredPost.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-700">
                                        <featuredPost.Icon className="w-4 h-4 mr-2" />
                                        {featuredPost.category}
                                    </span>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{new Date(featuredPost.date).toLocaleDateString("en-US", { dateStyle: "long" })}</span>
                                    </div>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 hover:text-sky-700 transition-colors">
                                    <a href="#">{featuredPost.title}</a>
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">{featuredPost.summary}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm">
                                        <User className="w-4 h-4 mr-2 text-gray-500" />
                                        <span className="font-semibold">{featuredPost.author}</span>
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                                    >
                                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                )}

                {/* Main Content: Sidebar + Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                            <div className="relative">
                                <input
                                    type="search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Find a topic..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                                    aria-label="Search blog posts"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <div className="flex flex-col space-y-2">
                                {ALL_CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        aria-pressed={selectedCategory === category}
                                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                                            ? "bg-sky-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-sky-100 hover:text-sky-700"
                                            }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Blog Grid */}
                    <section className="lg:col-span-9">
                        {regularPosts.length > 0 ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {regularPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group border border-gray-200 hover:shadow-xl transition-shadow"
                                    >
                                        <div className="relative aspect-video">
                                            <img
                                                src={post.image || "/placeholder.svg"}
                                                alt={post.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-700">
                                                    <post.Icon className="w-3.5 h-3.5 mr-1.5" />
                                                    {post.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow group-hover:text-sky-700 transition-colors">
                                                <a href="#">{post.title}</a>
                                            </h3>
                                            <div className="flex items-center text-xs text-gray-500 mb-4">
                                                <User className="w-3.5 h-3.5 mr-1.5" />
                                                <span className="font-medium">{post.author}</span>
                                                <span className="mx-2">&bull;</span>
                                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                                <span>{new Date(post.date).toLocaleDateString("en-US", { dateStyle: "medium" })}</span>
                                            </div>
                                            <a
                                                href="#"
                                                className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-800 transition-colors mt-auto text-sm"
                                            >
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-20">
                                <h3 className="text-2xl font-semibold mb-2">No Articles Found</h3>
                                <p>Try adjusting your search or category filters.</p>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    )
}
