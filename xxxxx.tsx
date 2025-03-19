return (
  <script
    type="module"
    dangerouslySetInnerHTML={{
      __html: `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({ chatflowid: "${chatflowid}", apiHost: "${process.env.NEXT_PUBLIC_FLOWISE_URL}" })
      `,
    }}
  />
);
