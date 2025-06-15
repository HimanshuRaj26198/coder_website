import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
    return (
        <div className="bg-white py-12 text-gray-600 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-blue prose-lg mx-auto">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            CoderCrafter ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our courses.
                        </p>
                        <p className="mt-4">
                            By using our services, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Personal Information</h3>
                        <p>
                            We may collect personally identifiable information including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Full name and contact details (email, phone number, address)</li>
                            <li>Demographic information (age, gender, education level)</li>
                            <li>Payment information for course enrollment</li>
                            <li>Academic records and course progress</li>
                            <li>Technical skills and employment information for placement services</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Usage Data</h3>
                        <p>
                            We automatically collect information about how you interact with our website:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>IP address and browser type</li>
                            <li>Pages visited and time spent on site</li>
                            <li>Device information and operating system</li>
                            <li>Cookies and tracking technologies (see Section 5)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected data for various purposes:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>To provide and maintain our training services</li>
                            <li>To process enrollments and payments</li>
                            <li>To communicate with you about courses, updates, and offers</li>
                            <li>To improve our website and course offerings</li>
                            <li>To monitor and evaluate student progress</li>
                            <li>To provide career services and placement assistance</li>
                            <li>To detect, prevent, and address technical issues</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Service Providers</h3>
                        <p>
                            We may employ third-party companies to facilitate our services (payment processors, hosting providers, analytics). These third parties have access to your information only to perform specific tasks on our behalf.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 Business Transfers</h3>
                        <p>
                            If CoderCrafter is involved in a merger, acquisition, or asset sale, your personal data may be transferred.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.3 Legal Requirements</h3>
                        <p>
                            We may disclose your information when required by law or in response to valid requests by public authorities.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.4 Placement Partners</h3>
                        <p>
                            With your explicit consent, we may share your information with potential employers as part of our placement services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                        </p>
                        <p className="mt-4">
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Data Protection Rights</h2>
                        <p>Depending on your location, you may have certain rights regarding your personal data:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>Access:</strong> Request copies of your personal data</li>
                            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                            <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Restriction:</strong> Request restriction of processing</li>
                            <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                            <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                        </ul>
                        <p className="mt-4">
                            To exercise any of these rights, please contact us using the information below.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                        <p>
                            Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Email: <Link href="mailto:privacy@codercrafter.com" className="text-blue-600 hover:text-blue-800">privacy@codercrafter.com</Link></span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                                <span>Phone: <Link href="tel:+911234567890" className="text-blue-600 hover:text-blue-800">+91 12345 67890</Link></span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Address: 123 Tech Park, Bangalore, Karnataka 560001, India</span>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}