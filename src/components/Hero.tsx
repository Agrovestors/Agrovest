import Image from "next/image";
import { GiChemicalDrop, GiWheat, GiSmart, GiFamilyHouse } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Hero = () => {
  const bannerImages = [
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/841c6d1d3954145c2f05b8b9434fd73edb271896-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/465558871988fa4f0825046104f962ecd320ebb7-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/1e4601cb66d8b40440242306d74e75e8bb4ea439-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/02c36527d76228020abdd6c5611f16afaf2dce79-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/55d7270b6e212a11ed9bee49caddb011646e97c2-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9b6a6993201ad796a10d63c32286eaddd5a49331-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/5f33181a09049d495bfed18a149249265ecce591-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9b105d80aa4a56f4713caa45136a986cd86a5d10-3600x2880.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/990093866f62a14b5ead06b1bdece3efecc4ddb3-2880x3600.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/deae6e3099145544421b9d6283cfd5ba2db1db5d-2880x3600.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b129c8dda2071a91e71f4456975652641e96dcf3-2880x3600.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0fea87ee1975573250ba35d98935d7344b330acf-2880x3600.jpg",
    "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9a36b1b8bedcd34d6c12a316ae1cd0808cddf763-2880x3600.jpg",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#022c22] to-[#065f46] flex flex-col items-center justify-center pb-10 relative">
      {/* Video Background Section */}
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/files/1f6e677e3420c22300f0cb2fb0a0cb147825d9a2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Hero Text and Button */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold fade-in-left">
            From poverty to prosperity in one season
          </h1>
          <a
            href="https://www.youtube.com/watch?v=1RmDfbRKSpQ"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 cursor-pointer mt-8 text-white text-xl font-semibold bg-green-500 px-6 py-3 rounded-full hover:bg-green-400 transition duration-200 glow-hover"
          >
            Watch the video
          </a>
        </div>
      </div>

      {/* Positioned background image (leaf) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8637c25a4a4f98bd29fbbf0502dea0402560946a-5000x5000.png"
          alt="leaf image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
          priority
          quality={80}
        />
      </div>

      {/* Image Slider */}
      <div className="mt-56 w-full relative z-10">
        <Marquee gradient={false} speed={100} className="w-full mb-10">
          {bannerImages.map((image, index) => (
            <div key={index} className="flex items-center mx-6 relative group">
              <Image
                src={image}
                alt={`banner image ${index + 1}`}
                width={300}
                height={150}
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                quality={75}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <Link
                  href="/media/gallery"
                  className="text-white text-lg font-semibold bg-green-500 px-4 py-2 rounded-full hover:bg-green-400 transition duration-300 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.7)]"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Info Box */}
      <div className="bg-gray-800 w-full lg:w-[98%] min-h-screen rounded-2xl mt-20 shadow-lg p-8 md:p-10 flex flex-col justify-center items-center relative z-10 overflow-hidden border border-gray-600 fade-in-left">
        {/* Text Section */}
        {/* <div className="text-center px-6 md:px-20 lg:px-40 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white bounce-in">
            Transforming African Agriculture
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Agrovestors is revolutionizing farming across Africa with bold
            innovation, smart tech, and vibrant communities, empowering farmers
            to thrive like never before.
          </p>
        </div> */}

        {/* Feature Boxes */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="bg-gray-700 rounded-lg p-5 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-600 glow-hover">
            <GiChemicalDrop className="text-6xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">
              Research & Production
            </h3>
            <p className="text-sm text-gray-200 mt-2">
              Cutting feed costs by up to 40% with sustainable, locally sourced
              livestock feeds, driven by world-class R&D.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-5 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-600 glow-hover">
            <GiWheat className="text-6xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">
              Food Security & Welfare
            </h3>
            <p className="text-sm text-gray-200 mt-2">
              Empowering farmers with capital, training, and support to grow
              affordable, nutritious food for all of Africa.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-5 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-600 glow-hover">
            <GiSmart className="text-6xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">
              Tech & Smart Management
            </h3>
            <p className="text-sm text-gray-200 mt-2">
              Revolutionizing farms with IntelliFeed360, our AI-powered
              platform for smarter, more profitable management.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-5 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-600 glow-hover">
            <GiFamilyHouse className="text-6xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">
              Media & Community
            </h3>
            <p className="text-sm text-gray-200 mt-2">
              Inspiring farmers with epic stories and digital communities,
              making Agrovestors the agri-tech voice of Africa.
            </p>
          </div>
        </div> */}
              {/* //database issue */}

        {/* Image Section */}
        <div className="mt-8 w-full">
          <Image
            src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/cb1caf99a068ab9b027bbf3185d6c2890b2e0e39-2560x1346.png"
            alt="agriculture showcase"
            width={1200}
            height={200}
            sizes="100vw"
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 pulse-hover"
            quality={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
