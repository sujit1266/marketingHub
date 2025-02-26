import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";
import TagScroll from "../components/TagscrollingSection";
import Aboutus from "@/components/Aboutus";
 

import { benefitOne } from "@/components/data";
import Services from "@/components/Services";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle
        preTitle="Site Benefits"
        title=" Testing Purpose with This Landing "
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        reiciendis quos natus accusantium soluta quidem, quam, vero optio alias
        aliquam autem ipsam quibusdam sunt accusamus quod? Esse culpa voluptates
        dolorem?
      </SectionTitle> */}
      {/* <Aboutus/> */}

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <TagScroll key={1}/>
      <Services  />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        "We believe the best way to showcase our success is through the words of those who matter most—our clients. Hear directly from them how we've helped elevate their brands and achieve their goals."
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      Our Frequently Asked Questions (FAQ) section provides quick answers to common inquiries about our marketing services, processes, pricing.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
