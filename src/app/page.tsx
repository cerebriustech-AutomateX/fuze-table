import { EnquiryPanel } from "@/components/home/EnquiryPanel";
import { EditorialGallery } from "@/components/home/EditorialGallery";
import { SignatureExperiences } from "@/components/home/SignatureExperiences";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HeroScene } from "@/components/home/HeroScene";
import { PackageTeaser } from "@/components/home/PackageTeaser";
import { RitualSteps } from "@/components/home/RitualSteps";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroScene />
      <EnquiryPanel />
      <SignatureExperiences />
      <RitualSteps />
      <EditorialGallery />
      <PackageTeaser />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
