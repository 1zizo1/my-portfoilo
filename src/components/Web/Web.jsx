
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

export  function Web() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Image Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index}`} className="w-3/4 h-auto rounded shadow-md mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
