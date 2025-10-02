import AboutPage from "./aboute";
import Add from "./add";
import Maps from "./maps";
import News from "./news";
import SwiperComponent from "./swiper";

const Homepage = () => {
  return (
    <div>
    <SwiperComponent/>
    <AboutPage/>
    <Maps/>
    <Add/>
    <News/>
    </div>
  );
};
export default Homepage;