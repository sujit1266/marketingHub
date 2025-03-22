"use client"

import Branding from "@/components/services single page/Branding";
import ContentMark from "@/components/services single page/ContentMark";
import EmailMark from "@/components/services single page/EmailMark";
import GraphicDesign from "@/components/services single page/GraphicDesign";
import Ppc from "@/components/services single page/Ppc";
import Seo from "@/components/services single page/seo";
import Smm from "@/components/services single page/Smm";
import WebDev from "@/components/services single page/WebDev";
import { useParams } from "next/navigation";



const DigitalMarketingService = () => {
  const params = useParams();
  const serviceName = params.name;
  return (
    <>
      {
        serviceName === "seo" ? (
          <Seo />
        ) : serviceName === "ppc" ? (
          <Ppc />
        ) : serviceName === "smm" ? (
          <Smm />
        ) : serviceName === "web-development" ? (
          <WebDev />
        ) : serviceName === "graphic-design" ? (
          <GraphicDesign />
        ) : serviceName === "email-marketing" ? (
          <EmailMark />
        ): serviceName === "content-marketing" ? (
          <ContentMark />
        ): serviceName === "branding" ? (
          <Branding />
        ) : (
          <h1>Service not found</h1>
        )
      }
    </>
  );
};

export default DigitalMarketingService;