"use client";
import React from "react";

export default function FlowiseEmbed({ lang }: { lang: string }) {
  const flowiseIds: any = {
    en: process.env.NEXT_PUBLIC_FLOWISE_ID_EN,
    hu: process.env.NEXT_PUBLIC_FLOWISE_ID_HU,
    fr: process.env.NEXT_PUBLIC_FLOWISE_ID_FR,
    de: process.env.NEXT_PUBLIC_FLOWISE_ID_DE,
  };

  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
  Chatbot.init({
    chatflowid: "${flowiseIds[lang] || flowiseIds["en"]}",
    apiHost: "${process.env.NEXT_PUBLIC_FLOWISE_URL}",
    chatflowConfig: {},
    observersConfig: {},
    theme: {
      button: {
        backgroundColor: '#3B81F6',
        right: 20,
        bottom: 20,
        size: 48,
        dragAndDrop: true,
        iconColor: 'white',
        customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        autoWindowOpen: {
          autoOpen: true,  // ⬅ HA EZ TRUE, AKKOR AUTOMATIKUSAN MEGNYÍLIK
          openDelay: 7,  // ⬅ ENNYI MÁSODPERC UTÁN NYÍLIK MEG
          autoOpenOnMobile: false // ⬅ HA TRUE, AKKOR MOBILON IS AUTOMATIKUSAN MEGNYÍLIK
        }
      },
      tooltip: {
        showTooltip: true,
        tooltipMessage: 'Hi There 👋!',
        tooltipBackgroundColor: 'black',
        tooltipTextColor: 'white',
        tooltipFontSize: 16
      },
      disclaimer: {
        title: 'Disclaimer',
        message: "By using this chatbot, you agree to the <a target='_blank' href='https://flowiseai.com/terms'>Terms & Condition</a>",
        textColor: 'black',
        buttonColor: '#3b82f6',
        buttonText: 'Start Chatting',
        buttonTextColor: 'white',
        blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundColor: 'white'
      },
      customCSS: '',
      chatWindow: {
        showTitle: true,
        showAgentMessages: true,
        title: 'Flowise Bot',
        titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        welcomeMessage: 'Hello! This is a custom welcome message',
        errorMessage: 'This is a custom error message',
        backgroundColor: '#ffffff',
        backgroundImage: '',
        height: 700,
        width: 400,
        fontSize: 16,
        starterPrompts: [
          "What is a bot?",
          "Who are you?"
        ],
        starterPromptFontSize: 15,
        clearChatOnReload: false,
        sourceDocsTitle: 'Sources:',
        renderHTML: true,
        botMessage: {
          backgroundColor: '#f7f8ff',
          textColor: '#303235',
          showAvatar: true,
          avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
        },
        userMessage: {
          backgroundColor: '#3B81F6',
          textColor: '#ffffff',
          showAvatar: true,
          avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
        },
        textInput: {
    placeholder: 'Type your question',
    backgroundColor: '#ffffff',
    textColor: '#303235',
    sendButtonColor: '#3B81F6',
    maxChars: 50,
    maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
    autoFocus: true,
    sendMessageSound: true,
    sendSoundLocation: '/api/static/send_message.mp3',  // ⬅ MÓDOSÍTVA API ÚTVONALRA
    receiveMessageSound: true,
    receiveSoundLocation: '/api/static/receive_message.mp3'  // ⬅ MÓDOSÍTVA API ÚTVONALRA
}

,
        feedback: {
          color: '#303235'
        },
        dateTimeToggle: {
          date: true,
          time: true
        },
        footer: {
          textColor: '#303235',
          text: 'Powered by',
          company: 'The Good Old Developer',
          companyLink: 'https://thegoodolddeveloper.com'
        }
      }
    }
  });
        `,
      }}
    />
  );
}
