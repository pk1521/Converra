import { Navbar } from "@/components/navbar";
import { RealEstateHero } from "@/components/sections/real-estate/RealEstateHero";
import { RealEstateAbout } from "@/components/sections/real-estate/RealEstateAbout";
import { RealEstateServices } from "@/components/sections/real-estate/RealEstateServices";
import { RealEstateWhy } from "@/components/sections/real-estate/RealEstateWhy";
import { RealEstateProcess } from "@/components/sections/real-estate/RealEstateProcess";
import { RealEstatePortfolio } from "@/components/sections/real-estate/RealEstatePortfolio";
import { RealEstateTestimonials } from "@/components/sections/real-estate/RealEstateTestimonials";
import { RealEstateCta } from "@/components/sections/real-estate/RealEstateCta";
import { RealEstateFooter } from "@/components/sections/real-estate/RealEstateFooter";

export default function RealEstate() {
  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      <Navbar />
      <RealEstateHero />
      <RealEstateAbout />
      <RealEstateServices />
      <RealEstateWhy />
      <RealEstateProcess />
      <RealEstatePortfolio />
      <RealEstateTestimonials />
      <RealEstateCta />
      <RealEstateFooter />
    </div>
  );
}
