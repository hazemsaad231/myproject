import AboutPage from "./aboute";
import Add from "./add";
import Maps from "./maps";
import News from "./news";
import Slider from "./slider";

const Homepage = () => {
  return (
    <div>
    <Slider/>
    <AboutPage/>
    <Maps/>
    <Add/>
    <News/>
    </div>
  );
};
export default Homepage;