import Banner from "../components/Banner/Banner";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Testimonial from "../components/Testimonial/Testimonial";
import TopStudyPartners from "../components/TopStudyPartners/TopStudyPartners";

const Home = () => {
  return (
    <div className="bg-[#dee6f0]">
      <Banner />
      <h1>This is Homepage</h1>
      <TopStudyPartners />
      <HowItWorks />
      <Testimonial />
    </div>
  );
};

export default Home;
