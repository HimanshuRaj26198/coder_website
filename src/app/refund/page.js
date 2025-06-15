import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RefundPolicy() {
    return (
        <div className="bg-white text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Refund Policy
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-blue prose-lg mx-auto">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                        <p>
                            At CoderCrafter, we strive to provide the highest quality technical education. If you're not satisfied with your purchase, we offer refunds under the conditions outlined in this policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Course Enrollment Refunds</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Standard Courses</h3>
                        <p>
                            You may request a full refund within <strong>7 days</strong> of your enrollment date, provided you have not:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Accessed more than 20% of the course content</li>
                            <li>Downloaded any course materials</li>
                            <li>Submitted any assignments or projects</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Bootcamps & Intensive Programs</h3>
                        <p>
                            For our intensive programs (4+ weeks duration), refunds are available as follows:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>100% refund</strong> if requested before the program start date</li>
                            <li><strong>50% refund</strong> if requested within the first 3 days</li>
                            <li><strong>No refund</strong> after 3 days into the program</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Refunds</h2>
                        <p>
                            For monthly/annual subscriptions:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>You may cancel within <strong>3 days</strong> of initial purchase for a full refund</li>
                            <li>After 3 days, refunds are prorated based on unused time</li>
                            <li>No refunds for partial months of usage</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Items</h2>
                        <p>
                            The following are not eligible for refunds:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Certification exam fees</li>
                            <li>Any purchased course materials (books, software licenses, etc.)</li>
                            <li>Services already rendered (tutoring sessions, career coaching)</li>
                            <li>Courses purchased during promotional periods unless otherwise stated</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Refunds</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 How to Request</h3>
                        <p>
                            To request a refund, email us at <Link href="mailto:refunds@codercrafter.com" className="text-blue-600 hover:text-blue-800">refunds@codercrafter.com</Link> with:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Your full name</li>
                            <li>Order/receipt number</li>
                            <li>Course/program name</li>
                            <li>Reason for refund request</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Processing Time</h3>
                        <p>
                            Approved refunds will be processed within <strong>7-10 business days</strong>. The refund will be issued to the original payment method.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Special Circumstances</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Technical Issues</h3>
                        <p>
                            If you experience technical difficulties preventing course access, we will first attempt to resolve the issue. If unresolved after 48 hours, a refund may be issued.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.2 Course Cancellation</h3>
                        <p>
                            If CoderCrafter cancels a course before completion, you will receive a full refund or option to transfer to another course.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
                        <p>
                            If you disagree with our refund decision, you may request a review by our academic committee within 14 days of the original decision. Email <Link href="mailto:disputes@codercrafter.com" className="text-blue-600 hover:text-blue-800">disputes@codercrafter.com</Link> with:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Original refund request details</li>
                            <li>Evidence supporting your claim</li>
                            <li>Desired resolution</li>
                        </ul>
                        <p className="mt-4">
                            The committee will respond within 10 business days with a final determination.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                        <p>For refund-related inquiries:</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Email: <Link href="mailto:refunds@codercrafter.com" className="text-blue-600 hover:text-blue-800">refunds@codercrafter.com</Link></span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                                <span>Phone: <Link href="tel:+911234567890" className="text-blue-600 hover:text-blue-800">+91 12345 67890</Link> (Mon-Fri, 9AM-5PM IST)</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Mailing Address: CoderCrafter Refunds, 123 Tech Park, Bangalore, Karnataka 560001, India</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}