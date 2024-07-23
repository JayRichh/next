import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavbarTwoColumns />

    <Hero />

    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
