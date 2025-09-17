import Container from "@/components/Container";
import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/5f33181a09049d495bfed18a149249265ecce591-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b92391be10f0b8fe0041feb472afa5137b9254ed-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/e67830f4a53917af6e2753eca721ea004dfc5f5c-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/bf6c050a5f2cc20ddc5c969d8a1ed2768988d306-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9cd40dd50c08db09b3be441201b8762f911893a8-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9b105d80aa4a56f4713caa45136a986cd86a5d10-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/35de83fe143d8e79e0eb73971b9982bdeaaa6198-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/34cb9984c8558547c286d73034b314a2d8ea54ae-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/3a56dcb0b18dd22af4334dadb40b5edd1b2b0b59-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/aec887a37d75b7b23cea20f96cf151ab07699628-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7f3cbf9dcca346c8b43a2dc8c24a5e22ad1b9649-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6d40ae57cc0601d99dd60c54c4d8523e7ba0e7a6-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b131c95226fca477724b0bb099cc6987c95c160f-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/f02baaf3daa0f0f954d363c3be0696ad07bb0caf-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/deae6e3099145544421b9d6283cfd5ba2db1db5d-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/1781b65d373c81c1c6e32987365bce519c101fdc-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/221b701219f9496a4855c77f1649b7b6c144dac0-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/fd0fe97b0a655d6e3798a4c423b2550fbebcb66a-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/d43e3c7b8ebccc81e15ba2ccfcacf4ff058151cf-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/68b12dc1199bb68e6a7f0722ce76026a81335eae-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/41dc307d31a6def37b2737214719f7b5168152fb-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/990093866f62a14b5ead06b1bdece3efecc4ddb3-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9d85a5eea885bee7f843c834496d9619e9aabbd1-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/02c36527d76228020abdd6c5611f16afaf2dce79-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/c2d4e4a42b103460cb49b7a626b901159ef57453-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7a4dac4e1e7013481a0a3f068630ce32bc36a7a5-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/64e1246d4a6bbf1749622a8003040324698c61ca-3600x2403.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b129c8dda2071a91e71f4456975652641e96dcf3-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/75b5bebe292acdf2ce047b4bfe742bbc2891f2e6-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/ae8d3a966a5b83fc933a099b47a17193c698d4f1-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/efa55da51d64855ebe65b43f42ec291cd51af95d-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/94d07baffb4b25f12c516816fce160690e86bf77-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/465558871988fa4f0825046104f962ecd320ebb7-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/aa30596b5eff564c3e096c534b076d703870c8a9-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/19ab850ba3cc30bba1595ad1c90d46e467113072-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/c2fe64d44fec09ba12632356b0b439c77fee4a39-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/06e9041693c1a4cc0f940e6e2e3c729e756d75e8-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/418bafaead414116b31e49bfae43e979c253cb99-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9a36b1b8bedcd34d6c12a316ae1cd0808cddf763-2880x3600.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/69839bb6ad1893ccde773102f57a18973a72f5d2-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0a9a0b64b0ab632e21edbf81c3d3c190a2ee9204-3600x2880.jpe" },
    { imageUrl: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/16f036bcef04af164fd324a87d26e2f60438c77b-2880x3600.jpe" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 fade-in-left">Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 fade-in-left" style={{ animationDelay: "100ms" }}>
            Explore Moments Captured Live from Our Site
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 break-inside-avoid">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="mb-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 fade-in-left border border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={item.imageUrl}
                  alt={`Gallery image ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full object-contain rounded-lg transition-transform duration-300 aspect-auto object-top"
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}