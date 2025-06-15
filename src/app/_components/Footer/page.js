const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo Column */}
                    <div>
                        <a href="/" aria-label="Home">
                            {/* Replace with your logo path */}
                            <img
                                src="/assets/images/codecrafter_logo.png"
                                alt="CoderCrafter"
                                className="h-12 w-auto mb-4"
                            />
                        </a>
                        <p className="text-sm text-gray-400">
                            Empowering learners with cutting-edge technology courses.
                        </p>
                    </div>

                    {/* Courses Column */}
                    <div>
                        <strong className="text-lg">Courses</strong>
                        <ul className="mt-4 space-y-2">
                            {[{ name: "MERN Stack", path: "/courses/3/mern-stack-developer-course" }, { name: "MEAN Stack", path: "/courses/8/mean-stack" }, { name: "AWS DevOps", path: "/courses/5/aws-cloud-computing-course" }, { name: "Azure DevOps", path: "/courses/6/azure-training-certification" }, { name: "Web Development", path: "/courses/9/advance-full-stack-developer" }].map((title, i) => (
                                <li key={i}>
                                    <a
                                        href={title.path}
                                        title={title.name}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {title.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blogs Column */}
                    <div>
                        <strong className="text-lg">Blogs</strong>
                        <ul className="mt-4 space-y-2">
                            {[{ name: "JavaScript", path: "/blogs/javascript" }, { name: "NodeJS", path: "/blogs/nodejs" }, { name: "DevOps", path: "/blogs/devops" }, { name: "Node.js", path: "/blogs/nodejs" }, { name: "Python", path: "/blogs/python" }, { name: "IT Trends", path: "/blogs/tech" }].map((title, i) => (
                                <li key={i}>
                                    <a
                                        href={title.path}
                                        className="hover:text-blue-400 transition-colors"
                                        title={title.name}
                                    >
                                        {title.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages Column */}
                    <div>
                        <strong className="text-lg">Pages</strong>
                        <ul className="mt-4 space-y-2">
                            {[{ name: "Home", path: "/" }, { name: "Courses", path: "/" }, { name: "Blogs", path: "/blogs" }, { name: "About Us", path: "/about-us" }, { name: "Contact Us", path: "/contact-us" }].map((title, i) => (
                                <li key={i}>
                                    <a
                                        href={title.path}
                                        className="hover:text-blue-400 transition-colors"
                                        title={title.name}
                                    >
                                        {title.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer >
    );
};

export default Footer;
