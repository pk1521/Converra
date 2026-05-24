import { Navbar } from "@/components/navbar";
import { RealEstateHero } from "@/components/sections/real-estate/RealEstateHero";
import { RealEstateAbout } from "@/components/sections/real-estate/RealEstateAbout";
import { RealEstateServices } from "@/components/sections/real-estate/RealEstateServices";
import { RealEstateWhy } from "@/components/sections/real-estate/RealEstateWhy";
import { RealEstateProcess } from "@/components/sections/real-estate/RealEstateProcess";
import { RealEstateTestimonials } from "@/components/sections/real-estate/RealEstateTestimonials";
import { RealEstateCta } from "@/components/sections/real-estate/RealEstateCta";
import { RealEstateFooter } from "@/components/sections/real-estate/RealEstateFooter";

export default function RealEstate() {
  return (
    <div className="theme-classy min-h-screen bg-luxury-ivory overflow-x-hidden">
      <Navbar />
      <RealEstateHero />
      <RealEstateAbout />
      <RealEstateServices />
      <RealEstateWhy />
      <RealEstateProcess />
      <RealEstateTestimonials />
      <RealEstateCta />
      <RealEstateFooter />
    </div>
  );
}
