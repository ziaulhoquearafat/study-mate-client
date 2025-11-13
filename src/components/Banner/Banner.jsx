import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Vpt5NKp7/jacket-banknote-education-dollar.jpg",
      title: "Find Your Perfect Study Partner",
      subtitle: "Connect with students who share your goals and grow together.",
      buttonText: "Get Started",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/d07dZ4JJ/book-laptop-pencil-clock-wooden-table.jpg",
      title: "Learn Collaboratively, Succeed Confidently",
      subtitle: "Study smarter with personalized match and real-time sessions.",
      buttonText: "Join Now",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/HDqdzJ94/young-students-learning-together-group.jpg",
      title: "Expand Your Knowledge Network",
      subtitle:
        "Build connections, share ideas, and master new skills together.",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div className="w-full h-[85vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[85vh] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-20 space-y-6">
                <h1 className="font-montserrat text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 max-w-xl">
                  {slide.subtitle}
                </p>
                <button className="font-montserrat px-8 py-3 bg-[#05305a] text-white rounded-full text-lg font-semibold hover:bg-[#06386b] hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
