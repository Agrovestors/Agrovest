import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../src/app/style/globals.css";

const AboutPage = () => {
    return (
        <div>
            <Navbar />

            {/* Header Section */}
            <header className="relative w-full h-[600px] flex items-center justify-center"> {/* Increased height */}
                <div className="absolute top-20 w-full h-full overflow-hidden">
                    <img
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_1296+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/what-we-do/themes/006.jpg"
                        alt="Header Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold">Seed Systems/CESSA</h1>
                </div>
            </header>


            {/* Waves Section */}
            <section className="relative -mt-20">
                <svg
                    className="waves absolute bottom-0 w-full h-16 animate-waving"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                    viewBox="0 24 150 28"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
                        />
                    </defs>
                    <g className="parallax">
                        <use fill="rgba(228,229,23,0.7)" xlinkHref="#gentle-wave" x="48" y="0"></use>
                        <use fill="rgba(255,255,255,0.5)" xlinkHref="#gentle-wave" x="48" y="3"></use>
                        <use fill="rgba(255,255,255,0.3)" xlinkHref="#gentle-wave" x="48" y="5"></use>
                        <use fill="#fff" xlinkHref="#gentle-wave" x="48" y="7"></use>
                    </g>
                </svg>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
