import { useEffect, useState, useRef } from "react";

const Hero = ({
  title = "We Are Your Realtors!",
  subtitle = "Buy And Sell Your Properties Here",
}) => {
  const [backgroundImage, setBackgroundImage] = useState(
    "url('src/assets/images/BG-LOW.jpg')" // Low-resolution placeholder
  );
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Lazy loading logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the image is loaded
        }
      });
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // Set the high-quality background image when the component is visible
  useEffect(() => {
    if (isVisible) {
      const highResImage = new Image();
      highResImage.src = "src/assets/images/BG.jpg"; // High-resolution image
      highResImage.onload = () => {
        setBackgroundImage(`url('src/assets/images/BG.jpg')`);
      };
    }
  }, [isVisible]);

  const backGround = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out", // Smooth transition
  };

  return (
    <div
      ref={heroRef}
      className="w-full py-40 mb-4 border-b border-b-orange-400"
      style={backGround}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mt-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl font-bold">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
