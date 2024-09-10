import Hero from "../Components/Hero";
import Herocards from "../Components/Herocards";
import PropertyListings from "../Components/PropertyListings";
import Viewmore from "../Components/Viewmore";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Herocards />
      <PropertyListings isHome={true} />
      <Viewmore />
    </>
  );
};

export default HomePage;
