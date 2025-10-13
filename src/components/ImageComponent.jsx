import { Image, buildSrc } from "@imagekit/react";
import { useState, useRef, useCallback } from "react";

const ImageComponent = ({ src, width, height, alt }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="eager" // To ensure the image starts loading immediately
      ref={imgRef}
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: "https://ik.imagekit.io/ikmedia",
                src: "/default-image.jpg",
                transformation: [
                  // {}, // Any other transformation you want to apply to the placeholder image
                  {
                    quality: 10,
                    blur: 90,
                  },
                ],
              })})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    />
  );
};

export default ImageComponent;
