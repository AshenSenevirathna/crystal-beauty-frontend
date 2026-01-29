import Footer from "../components/footer";
import { useState } from "react";

// const faqs = [
//     {
//         question: "Are the products 100% authentic?",
//         answer:
//             "Yes. Crystal Beauty Cosmetics only sells 100% authentic and genuine products sourced from trusted suppliers and authorized distributors.",
//     },
//     {
//         question: "How long does delivery take?",
//         answer:
//             "Delivery within Colombo usually takes 1–2 working days. For other areas, delivery may take 2–4 working days depending on your location.",
//     },
//     {
//         question: "What happens if an item is out of stock?",
//         answer:
//             "If a product is marked as out of stock, it is currently unavailable. Popular items are restocked regularly, and you may contact us to check restock dates.",
//     },
//     {
//         question: "How can I track my order?",
//         answer:
//             "Once your order is confirmed and dispatched, tracking details will be shared via WhatsApp or email. You can also contact our support team for updates.",
//     },
// ];

// const FAQSection = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

export default function ContactPage() {
    return (
        <div className="w-full h-full bg-primary">
            <section className="relative w-full h-[70vh] flex items-center justify-center">

                {/* Background image / gradient */}
                {/* <div
                    className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-300"
                ></div> */}
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/contact_hero.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>


                {/* Overlay (optional for readability) */}
                <div className="absolute inset-0 bg-white/30"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Contact Us
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        We're here to help - and to help you find the perfect beauty products
                    </p>

                    {/* <button
                        onClick={() =>
                            document.getElementById("products").scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                        Explore Our Products
                    </button> */}
                </div>

            </section>

            <section className="w-full bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Get in Touch Instantly
                        </h2>
                        <p className="text-gray-500 mt-2">
                            We’re here to help you with products, orders, and availability
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/94764533827"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition">
                                📱
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                WhatsApp
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Chat with us instantly for quick support
                            </p>
                            <span className="mt-3 text-pink-600 font-medium">
                                +94 76 453 3827
                            </span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+94112345678"
                            className="group border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition">
                                ☎️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Phone
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Call us for immediate assistance
                            </p>
                            <span className="mt-3 text-pink-600 font-medium">
                                +94 11 234 5678
                            </span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:support@crystalbeautycosmetics.lk"
                            className="group border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition">
                                📧
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Email
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Send us your questions anytime
                            </p>
                            <span className="mt-3 text-pink-600 font-medium">
                                support@crystalbeautycosmetics.lk
                            </span>
                        </a>

                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-50 py-14 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Contact Support
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Have a detailed inquiry? Send us a message and we’ll get back to you shortly.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value=""
                                onChange=""
                                placeholder="Enter your name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value=""
                                onChange=""
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Reason for Contact
                            </label>
                            <select
                                name="reason"
                                required
                                value=""
                                onChange=""
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            >
                                <option value="">Select a reason</option>
                                <option value="order">Order Related</option>
                                <option value="product">Product Inquiry</option>
                                <option value="general">General Question</option>
                            </select>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                value=""
                                onChange=""
                                placeholder="Type your message here..."
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </section>

            <section className="w-full bg-white py-14 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Business Details */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Crystal Beauty Cosmetics
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Enhancing natural beauty with carefully curated, skin-safe, and
                            authentic cosmetic products you can trust.
                        </p>

                        {/* Address */}
                        <div className="mb-3">
                            <h4 className="font-medium text-gray-700">📍 Address</h4>
                            <p className="text-gray-500">
                                No. 45, Galle Road, Colombo 04, Sri Lanka
                            </p>
                        </div>

                        {/* Business Hours */}
                        <div className="mb-3">
                            <h4 className="font-medium text-gray-700">🕒 Business Hours</h4>
                            <p className="text-gray-500">
                                Monday – Saturday: 9:00 AM – 7:00 PM
                            </p>
                            <p className="text-gray-500">
                                Sunday & Holidays: Closed
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                                aria-label="Instagram"
                            >
                                📸
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                                aria-label="Facebook"
                            >
                                👍
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                                aria-label="TikTok"
                            >
                                🎵
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full bg-gray-50 py-14 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Delivery & Availability Information
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Everything you need to know before placing your order
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Stock Policy */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-3">📦</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Stock Updates
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Product availability is updated in real time. If a product shows
                                “Out of Stock”, it is currently unavailable for purchase.
                            </p>
                        </div>

                        {/* Delivery Timeline */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-3">🚚</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Delivery Timeline
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Orders within Colombo are delivered within 1–2 working days.
                                Other areas may take 2–4 working days.
                            </p>
                        </div>

                        {/* Restock Info */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-3">🔄</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Restock Information
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Popular products are restocked regularly. You can contact us to
                                check restock dates or request notifications.
                            </p>
                        </div>

                        {/* Urgent Support */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Urgent Orders
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Need a product urgently? Reach us via WhatsApp or phone for
                                immediate assistance on availability and delivery.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="w-full bg-white py-14 px-4">
                    <div className="max-w-4xl mx-auto">

                        
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Quick answers to common questions about our products and delivery
                            </p>
                        </div>

                        
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                                    >
                                        <span className="font-medium text-gray-800">
                                            {faq.question}
                                        </span>
                                        <span className="text-xl">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-6 pb-4 text-gray-600 text-sm">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </section> */}

            <section className="w-full bg-gray-50 py-14 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Map Embed */}
                    <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-sm">
                        <iframe
                            title="Crystal Beauty Cosmetics Location"
                            src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Location Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Visit Crystal Beauty Cosmetics
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Our store is based in Colombo, Sri Lanka. Customers are welcome to
                            reach out to us online or visit us for product inquiries and support.
                        </p>

                        <div className="space-y-3">
                            <div>
                                <h4 className="font-medium text-gray-700">
                                    📍 Service Area
                                </h4>
                                <p className="text-gray-500">
                                    Island-wide delivery available across Sri Lanka
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-700">
                                    🚚 Delivery Coverage
                                </h4>
                                <p className="text-gray-500">
                                    Fast delivery within Colombo and nearby areas
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-700">
                                    🕒 Visit Hours
                                </h4>
                                <p className="text-gray-500">
                                    Monday – Saturday: 9:00 AM – 7:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>

    );
}



