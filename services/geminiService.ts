import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export async function getBeautyAdvice(userMessage: string) {
  try {
    // Initializing the Gemini API client directly with the environment variable as per guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Calling generateContent with the model name and message directly.
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Você é o assistente técnico da Consultora Rebeca Nóbrega, especialista em Mirra Cosméticos e Maison Visagé. Seu público-alvo são cabeleireiros profissionais e donos de salões de beleza. Ajude-os a escolher os melhores protocolos de tratamento e produtos técnicos baseados nas necessidades de seus clientes. Seja extremamente profissional, educado e use termos técnicos de colorimetria e tricologia quando apropriado. Lembre sempre que os produtos são de VENDA EXCLUSIVA PARA PROFISSIONAIS. Responda em Português do Brasil.",
      },
    });

    // The 'text' property is used directly to extract generated content as per latest SDK.
    return response.text || "Poderia reformular sua dúvida técnica?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Olá, colega profissional! Tive uma pequena instabilidade técnica ao acessar minha base de conhecimentos. Poderia repetir sua dúvida sobre nossos protocolos?";
  }
}