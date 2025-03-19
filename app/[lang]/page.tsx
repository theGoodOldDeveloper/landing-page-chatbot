import React from "react";
import { getDictionary } from "../../lib/getDictionary";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import ChatbotBubble from "../../components/ChatbotBubble";
import FlowiseEmbed from "../../components/FlowiseEmbed";

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  return (
    <>
      <Navbar lang={params.lang} />
      <Hero dict={dict} />
      <Cards dict={dict} />
      <Footer dict={dict} />
      <ChatbotBubble />
      <FlowiseEmbed lang={params.lang} />
    </>
  );
}
