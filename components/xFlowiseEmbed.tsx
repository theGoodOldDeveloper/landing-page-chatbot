"use client";
import React from "react";

export default function FlowiseEmbed({ lang }: { lang: string }) {
  const flowiseIds: any = {
    en: process.env.NEXT_PUBLIC_FLOWISE_ID_EN,
    hu: process.env.NEXT_PUBLIC_FLOWISE_ID_HU,
    fr: process.env.NEXT_PUBLIC_FLOWISE_ID_FR,
    de: process.env.NEXT_PUBLIC_FLOWISE_ID_DE,
  };
  const chatflowid = flowiseIds[lang] || flowiseIds["en"];
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
  Chatbot.init({
    chatflowid: "${chatflowid}",
    apiHost: "${process.env.NEXT_PUBLIC_FLOWISE_URL}",
  });
`,
      }}
    />
  );
}

{
  /* <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({ chatflowid: "${chatflowid}", apiHost: "${process.env.NEXT_PUBLIC_FLOWISE_URL}" })
      `,
      }}
    /> */
}

// return (
//   <script
//     type="module"
//     dangerouslySetInnerHTML={{
//       __html: `
// import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
// Chatbot.init({
//   chatflowid: "${chatflowid}",
//   apiHost: "${process.env.NEXT_PUBLIC_FLOWISE_URL}",
// });
// `,
//     }}
//   />
// );
