import Footer from "../components/footer";

export default function AboutPage() {
    return (
        <div className="w-full h-full bg-primary">
            <section className="relative w-full h-[70vh] flex items-center justify-center">

                {/* Background image / gradient */}
                {/* <div
                    className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-300"
                ></div> */}
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about_hero.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>


                {/* Overlay (optional for readability) */}
                <div className="absolute inset-0 bg-white/30"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Crystal Beauty Cosmetics
                    </h1>
                    

                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Enhancing natural beauty with carefully curated cosmetics.
                    </p>

                    {/* <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        All Products
                    </h1> */}

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
            <section className="w-full bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="bg-blue-300">
                        <h2 className=" text-3xl font-bold text-gray-900 mb-6">
                            Our Story
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Crystal Beauty Cosmetics was created with a simple belief — beauty should
                            feel authentic, safe, and empowering. We started our journey to bring
                            carefully selected cosmetic products that enhance natural beauty while
                            respecting every skin type.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Every product we offer is chosen with attention to quality, originality,
                            and skin safety. We work only with trusted brands to ensure you receive
                            genuine cosmetics that you can rely on with confidence.
                        </p>

                        {/* Values */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">✔</span>
                                <p className="text-gray-800">
                                    <strong>Quality:</strong> Carefully curated, premium products
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">✔</span>
                                <p className="text-gray-800">
                                    <strong>Authenticity:</strong> 100% genuine and trusted brands
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">✔</span>
                                <p className="text-gray-800">
                                    <strong>Confidence:</strong> Beauty that empowers self-expression
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual / Highlight Box */}
                    <div className="bg-accent rounded-2xl p-8 shadow-md">
                        <h3 className="text-2xl font-semibold text-dark mb-4">
                            Our Promise
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            We are committed to offering skin-safe, cruelty-conscious, and carefully
                            tested cosmetics. Crystal Beauty Cosmetics ensures that every product you
                            use meets high standards of safety, quality, and authenticity — because
                            your skin deserves the best.
                        </p>
                    </div>

                </div>
            </section>
            <section id="products" className="w-full bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                        Our Products
                    </h2>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                        {/* Product Card */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
                            <img
                                src="/images/product1.jpg"
                                alt="Product"
                                className="h-48 w-full object-cover rounded-xl mb-4"
                            />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Matte Lipstick
                            </h3>

                            <p className="text-sm text-gray-500 mb-1">
                                Makeup • Lips
                            </p>

                            <p className="text-primary font-bold text-lg mb-2">
                                Rs. 2,450
                            </p>

                            {/* Stock Status */}
                            <span className="text-sm font-semibold text-green-600 mb-3">
                                In Stock
                            </span>

                            {/* Actions */}
                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 bg-primary text-white py-2 rounded-xl hover:opacity-90 transition">
                                    Add to Cart
                                </button>

                                <button className="flex-1 border border-primary text-primary py-2 rounded-xl hover:bg-primary hover:text-white transition">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Out of Stock Example */}
                        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col opacity-80">
                            <img
                                src="/images/product2.jpg"
                                alt="Product"
                                className="h-48 w-full object-cover rounded-xl mb-4"
                            />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Hydrating Face Serum
                            </h3>

                            <p className="text-sm text-gray-500 mb-1">
                                Skincare • Serum
                            </p>

                            <p className="text-primary font-bold text-lg mb-2">
                                Rs. 3,950
                            </p>

                            {/* Stock Status */}
                            <span className="text-sm font-semibold text-red-500 mb-3">
                                Out of Stock
                            </span>

                            <button
                                disabled
                                className="bg-gray-300 text-gray-500 py-2 rounded-xl cursor-not-allowed"
                            >
                                Out of Stock
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                    />

                    {/* Category */}
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none">
                        <option value="">All Categories</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Haircare">Haircare</option>
                    </select>

                    {/* Sub-category */}
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none">
                        <option value="">All Sub-Categories</option>
                        <option value="Lipstick">Lipstick</option>
                        <option value="Foundation">Foundation</option>
                        <option value="Serum">Serum</option>
                    </select>

                    {/* Price Range */}
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none">
                        <option value="">Any Price</option>
                        <option value="0-2000">Below Rs. 2,000</option>
                        <option value="2000-5000">Rs. 2,000 – 5,000</option>
                        <option value="5000+">Above Rs. 5,000</option>
                    </select>

                    {/* In-stock */}
                    <label className="flex items-center gap-2 text-gray-700">
                        <input type="checkbox" className="accent-primary" />
                        In Stock Only
                    </label>

                </div>
            </div>

            <section className="w-full bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Choose Crystal Beauty?
                    </h2>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">

                        {/* Feature 1 */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-4xl mb-4">✔</div>
                            <h3 className="font-semibold text-lg mb-2">
                                100% Authentic Products
                            </h3>
                            <p className="text-gray-600 text-sm">
                                We guarantee genuine cosmetics sourced directly from trusted brands.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-4xl mb-4">✔</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Carefully Selected Brands
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Each brand is chosen for quality, safety, and performance.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-4xl mb-4">✔</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Skin-Friendly Formulations
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Products suitable for different skin types and sensitivities.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-4xl mb-4">✔</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Affordable Luxury
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Premium cosmetics at prices that feel just right.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-4xl mb-4">✔</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Trusted by Customers
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Loved by customers for reliability, service, and care.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        What Our Customers Say
                    </h2>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Testimonial Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* Stars */}
                                <div className="flex text-yellow-400 text-lg">
                                    ★ ★ ★ ★ ★
                                </div>
                            </div>

                            <p className="text-gray-700 italic mb-4">
                                “Absolutely love the quality of products from Crystal Beauty.
                                Everything feels authentic and gentle on my skin.”
                            </p>

                            <p className="font-semibold text-gray-900">
                                — Nethmi S.
                            </p>
                        </div>

                        {/* Testimonial Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 text-lg">
                                    ★ ★ ★ ★ ☆
                                </div>
                            </div>

                            <p className="text-gray-700 italic mb-4">
                                “Fast delivery and amazing customer service.
                                The skincare products are perfect for sensitive skin.”
                            </p>

                            <p className="font-semibold text-gray-900">
                                — Kavindi P.
                            </p>
                        </div>

                        {/* Testimonial Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 text-lg">
                                    ★ ★ ★ ★ ★
                                </div>
                            </div>

                            <p className="text-gray-700 italic mb-4">
                                “Crystal Beauty Cosmetics has become my go-to store.
                                Affordable prices and premium-quality products!”
                            </p>

                            <p className="font-semibold text-gray-900">
                                — Dilani R.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Stock & Availability
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Real-Time Stock */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Real-Time Stock Updates
                            </h3>
                            <p className="text-gray-700">
                                Product availability is updated in real time, so you always know
                                what’s currently in stock before placing your order.
                            </p>
                        </div>

                        {/* Low Stock Warning */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Low Stock Alerts
                            </h3>
                            <p className="text-gray-700">
                                When stock is running low, we’ll notify you with alerts like
                                <span className="font-semibold text-red-500">
                                    {" "}“Only a few items left!”
                                </span>
                                {" "}so you don’t miss out.
                            </p>
                        </div>

                        {/* Delivery & Restock Policy */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Delivery & Restock Policy
                            </h3>
                            <p className="text-gray-700">
                                Orders are processed quickly, and out-of-stock items are restocked
                                regularly. If a product is unavailable, check back soon or contact
                                us for restock updates.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Contact & Support
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <p className="text-gray-700">
                                Need help or have a question? We’re always happy to assist you.
                                Reach out to Crystal Beauty Cosmetics through any of the channels below.
                            </p>

                            {/* Phone / WhatsApp */}
                            <div className="flex items-center gap-4">
                                <span className="text-primary text-2xl">📱</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Phone / WhatsApp</p>
                                    <p className="text-gray-700">+94 76 453 3827</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <span className="text-primary text-2xl">📧</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-gray-700">support@crystalbeautycosmetics.com</p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex items-center gap-4">
                                <span className="text-primary text-2xl">🌐</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Follow Us</p>
                                    <div className="flex gap-4 mt-1">
                                        <a href="#" className="text-primary hover:underline">Instagram</a>
                                        <a href="#" className="text-primary hover:underline">Facebook</a>
                                        <a href="#" className="text-primary hover:underline">TikTok</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location / Map */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Our Location
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Colombo, Sri Lanka
                            </p>

                            {/* Map Placeholder */}
                            <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                                Map Placeholder
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />






        </div>





    );
}