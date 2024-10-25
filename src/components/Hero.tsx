import Image from "next/image";
import pngleaf from "@/images/pngleaf.png"; // Ensure path is correct
import banner from "@/images/newBanner.jpeg";
import { GiFarmTractor, GiGrain, GiPlantsAndAnimals, GiFarmer } from "react-icons/gi"; // Agricultural icons
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh+1000px)] bg-[#022c22] flex flex-col items-center justify-center pb-10 relative">
      {/* Positioned image behind the text and set to cover the entire screen */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={pngleaf}
          alt="leaf image"
          layout="fill" // Ensures the image covers the entire screen
          objectFit="cover" // Maintains aspect ratio while covering the screen
          className="opacity-20" // Adjust opacity as needed
        />
      </div>

      {/* Agrovestors text */}
      <h1 className="text-7xl lg:text-[150px] font-bold text-gray-100 mt-64 mb-48 relative z-10">
        AGROVESTORS
      </h1>

      {/* Image Slider with consistent margin between images and rounded corners */}
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

      {/* Redesigned white box */}
      <div className="bg-[#f0f0f0] w-full lg:w-[98%] h-auto md:h-[600px] rounded-2xl mt-20 shadow-lg p-8 md:p-10 flex flex-wrap justify-center items-start relative z-10 overflow-hidden border border-gray-300">
        {/* Green boxes with icons and goals text */}
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
