"use client";

import Image from "next/image";

const galleryImages = [
  "/media/sliding_image_0.jpg",
  "/media/academics_carousel_2.jpeg",
  "/media/sliding_image_2.jpg",
  "/media/sliding_image_4.jpg",
  "/media/certification_1.jpeg",
];

export default function SlidingGallery() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="flex animate-slide-left gap-4">
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={320}
              height={240}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
