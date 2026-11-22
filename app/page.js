import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Toc from "@/components/Toc";
import AppInfo from "@/components/AppInfo";
import WhatIs from "@/components/WhatIs";
import Features from "@/components/Features";
import HowToInstall from "@/components/HowToInstall";
import Tips from "@/components/Tips";
import WhyChoose from "@/components/WhyChoose";
import Comparison from "@/components/Comparison";
import Problems from "@/components/Problems";
import Conclusion from "@/components/Conclusion";
import Faqs from "@/components/Faqs";
import { faqs } from "@/lib/content";

const HOME_FAQ_COUNT = 3;

export default function Home() {
  return (
    <>
      <JsonLd app faqs={faqs.slice(0, HOME_FAQ_COUNT)} />
      <Hero />
      <Toc />
      <AppInfo />
      <WhatIs />
      <Features />
      <HowToInstall />
      <Tips />
      <WhyChoose />
      <Comparison />
      <Problems />
      <Conclusion />
      <Faqs limit={HOME_FAQ_COUNT} />
    </>
  );
}
