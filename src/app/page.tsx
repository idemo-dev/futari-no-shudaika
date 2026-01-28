import {
  Hero,
  BrandStatement,
  FreeTrial,
  ForYou,
  Service,
  Pricing,
  Process,
  Sample,
  FAQ,
  FooterCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <FreeTrial />
      <ForYou />
      <Service />
      <Pricing />
      <Process />
      <Sample />
      <FAQ />
      <FooterCTA />
    </main>
  );
}
