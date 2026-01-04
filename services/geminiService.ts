
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `당신은 '강대근한의원'의 전문 상담 AI 어시스턴트입니다. 
        사용자의 건강 고민에 대해 한의학적 관점에서 친절하게 조언하고, 
        강대근한의원의 주요 진료 과목인 '다이어트 한약', '여드름/피부 교정', '안면비대칭 교정'을 자연스럽게 추천하세요. 
        전문적이지만 부드러운 말투를 사용하고, 구체적인 진단은 내원하여 원장님과 상담해야 함을 강조하세요.`,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 잠시 후 다시 시도해주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "상담 서비스를 일시적으로 사용할 수 없습니다. 전화 문의(02-1234-5678)를 이용해 주세요.";
  }
};
