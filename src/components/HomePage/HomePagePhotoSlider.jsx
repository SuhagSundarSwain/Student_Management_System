import { useState, useEffect } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HomePagePhotoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prevSlide) =>
      prevSlide ? prevSlide - 1 : images.length - 1
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-slide-to={index}
            className={currentSlide === index ? "active" : ""}
          />
        ))}
      </ol>
      <div
        className="carousel-inner"
        style={{ maxHeight: "400px", overflow: "hidden" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentSlide === index ? "active" : ""
            }`}
          >
            <img
              className="d-block w-100"
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        <ArrowLeftIcon />
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default HomePagePhotoSlider;
