import React from "react";
import Navbar from "../src/components/Navbar"; // Ensure the path is correct
import Footer from "../src/components/Footer"; // Adjust the path based on your project structure
import "../src/app/style/globals.css"; // Ensure this CSS file is correctly linked



const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted! (Implement actual logic)");
    };

    return (
        <div className="contact-page">
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-20 bg-[#022c22] text-white rounded-lg">
                <div className="w-full lg:max-w-[465px] text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg lg:pr-16">
                        If you have any questions or need more information, feel free to reach out to us. We'd love to hear from you!
                    </p>
                </div>
            </div>

            <form className="bg-white shadow-lg rounded-lg w-full max-w-xl my-10 mx-auto p-8 space-y-6">
                <div className="w-full">
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write something..."
                    className="w-full max-w-md h-28 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                ></textarea>


                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                >
                    Submit
                </button>
            </form>



            <div className="mt-12 text-left">
                <h3 className="text-2xl font-semibold text-gray-800">We are Here for You!</h3>
                <p className="text-gray-600 mt-2">
                    At Agrovestors Farm-Tech, we are committed to helping you find the best solutions for your agricultural needs.
                    Whether you have inquiries about our services or need further information, don’t hesitate to reach out.
                </p>

                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-700">Our Office Location:</h4>
                    <p className="text-gray-600">Agrovestors Farm-Tech Headquarters</p>
                    <p className="text-gray-600">1234 Agro Street, Farmville, Abuja, Nigeria.</p>

                    <h4 className="text-lg font-semibold text-gray-700 mt-4">Contact Information:</h4>
                    <p className="text-gray-600">
                        Email: <a href="mailto:info@agrovestors.com" className="text-green-600 hover:underline">info@agrovestors.com</a>
                    </p>
                    <p className="text-gray-600">Phone: +234 123 456 7890</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
