import { AboutSection } from "./about-section";
import { Banner } from "./banner";
import { Carousel } from "./carousel";
import { Footer } from "./footer";
import { Form } from "./form";
import Info from "./info";

export const LandingPage = () => {
  return (
    <div className="">
      <Banner />
      <AboutSection />
      <Info />
      <Carousel />
      <Form />
      <Footer />
    </div>
  );
};
