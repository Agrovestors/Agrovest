import Image from "next/image";
import pngleaf from "@/images/pngleaf.png"; // Ensure path is correct
import banner from "@/images/newBanner.jpeg";
import { GiFarmTractor, GiGrain, GiPlantsAndAnimals, GiFarmer } from "react-icons/gi"; // Agricultural icons
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="w-full bg-[#022c22] flex flex-col items-center justify-center pb-10 relative">
      {/* Video Background Section */}
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://kickstart.org/wp-content/uploads/2023/08/landing-page-home_4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Hero Text and Button */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold fadeInUp slow delay-100ms">
            From poverty to prosperity in one season
          </h1>

          <a
            href="https://www.youtube.com/embed/Z20wTT1re28?rel=0&amp;autoplay=1"
            data-featherlight="iframe"
            data-featherlight-iframe-frameborder="0"
            data-featherlight-iframe-allow="autoplay; encrypted-media"
            data-featherlight-iframe-allowfullscreen="true"
            data-featherlight-iframe-style="display:block;border:none;height:85vh;width:85vw;"
            className="mt-8 text-white text-xl font-semibold bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition duration-200"
          >
            Watch the video
          </a>
        </div>
      </div>

      {/* Positioned background image (leaf) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={pngleaf}
          alt="leaf image"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Image Slider */}
      <div className="mt-56 w-full relative z-10">
        <Marquee gradient={false} speed={50} className="w-full mb-10">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center mx-6">
              <Image
                src={banner}
                alt="banner image"
                width={300}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* White Info Box with Text + Feature Boxes */}
      <div className="bg-[#f0f0f0] w-full lg:w-[98%] h-auto md:h-[600px] rounded-2xl mt-20 shadow-lg p-8 md:p-10 flex flex-col justify-center items-center relative z-10 overflow-hidden border border-gray-300">

        {/* Text Section (Now inside the box) */}
        <div className="text-center px-6 md:px-20 lg:px-40 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#022c22]">Delivering Prosperity</h2>
          <p className="text-lg md:text-xl text-gray-700 mt-2">
            Millions of farmers choose to work with Agrovestors to feed their families and improve their lives.
          </p>
        </div>

        {/* Green Boxes with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="bg-[#d4edda] rounded-lg p-5 flex flex-col items-center text-center shadow-md">
            <GiFarmTractor className="text-6xl text-[#155724] mb-4" />
            <h3 className="text-xl font-bold">Modern Farming Equipment</h3>
            <p className="text-sm mt-2">
              Using state-of-the-art farming machinery to enhance productivity.
            </p>
          </div>

          <div className="bg-[#d4edda] rounded-lg p-5 flex flex-col items-center text-center shadow-md">
            <GiGrain className="text-6xl text-[#155724] mb-4" />
            <h3 className="text-xl font-bold">Sustainable Crop Production</h3>
            <p className="text-sm mt-2">
              Committed to sustainable practices that preserve soil quality.
            </p>
          </div>

          <div className="bg-[#d4edda] rounded-lg p-5 flex flex-col items-center text-center shadow-md">
            <GiPlantsAndAnimals className="text-6xl text-[#155724] mb-4" />
            <h3 className="text-xl font-bold">Organic Livestock Farming</h3>
            <p className="text-sm mt-2">
              Raising livestock in a natural and eco-friendly environment.
            </p>
          </div>

          <div className="bg-[#d4edda] rounded-lg p-5 flex flex-col items-center text-center shadow-md">
            <GiFarmer className="text-6xl text-[#155724] mb-4" />
            <h3 className="text-xl font-bold">Empowering Local Farmers</h3>
            <p className="text-sm mt-2">
              Supporting and educating local farmers to improve livelihoods.
            </p>
          </div>

          <p>Note: It would be better to use images for this just like from agra.org homepage</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
