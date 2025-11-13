import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  const data = [
    {
      name: "Samir Islam",
      role: "Student",
      message:
        "Studying Physics here has really improved my understanding and confidence in the subject.",
      image: "https://i.ibb.co/VWvHVhTm/studymateimage-3.jpg",
    },
    {
      name: "Hasiba Alam",
      role: "Student",
      message:
        "I loved the interactive learning experience in Chemistry. The guided practice is top-notch!",
      image: "https://i.ibb.co/KxPyrRBf/studymateimg-1.jpg",
    },
    {
      name: "Ziaul Hoque Arafat",
      role: "Student",
      message:
        "English lessons here are practical and engaging. My communication skills have improved significantly.",
      image: "https://avatars.githubusercontent.com/u/85094984?v=4",
    },
    {
      name: "Tasnima Hoque",
      role: "Student",
      message:
        "Business Entrepreneurship sessions helped me understand real-world strategies and start thinking like an entrepreneur.",
      image: "https://i.ibb.co/PvhqRRHN/studymateimage-2.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 w-11/12 mx-auto">
      <h2 className="font-montserrat text-4xl mb-12 text-center font-bold text-[#05305a] dark:text-white">
        What Our Students Say
      </h2>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="px-3 h-95 py-10">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 hover:scale-105 transform transition duration-300 h-full flex flex-col items-center text-center">
              <img
                src={d.image}
                alt={d.name}
                className="w-24 h-24 rounded-full border-4 border-[#05305a] mb-5 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#05305a] dark:text-white">
                {d.name}
              </h3>
              <p className="text-gray-500 mb-3 dark:text-gray-400">{d.role}</p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {d.message}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
