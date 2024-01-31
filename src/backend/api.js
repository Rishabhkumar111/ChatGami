import { addMessage, toddleLoading } from "../app/slice";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const userMessageReceivingFun = async (dispatch, text) => {
  
  try {
    dispatch(toddleLoading({isLoading:true}));
    const reply = await run(text);
    dispatch(addMessage({ sender: "bot",type:"text", text: reply }));
  } catch (error) {
    console.error("Error in userMessageReceivingFun:", error);
    toast.error('An error occurred. Please try again.'); // Show error toast
  }finally{
    dispatch(toddleLoading({isLoading:false}));
  }
};

async function run(question) {
  try {
    const api = import.meta.env.VITE_GEMINI_API;

    const genAI = new GoogleGenerativeAI(api);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error in run:", error);
    throw error; 
  }
}

export const userMessageAndImageReceivingFun = async (dispatch, text) => {
  
  try {
    dispatch(toddleLoading({isLoading:true}));
    const reply = await runImage(text);
    dispatch(addMessage({ sender: "bot",type:"text", text: reply }));
  } catch (error) {
    console.error("Error in userMessageReceivingFun:", error);
    toast.error('An error occurred. Please try again.'); 
  }finally{
    dispatch(toddleLoading({isLoading:false}));
  }
};

async function runImage(question) {
  try {
    const api = import.meta.env.VITE_GEMINI_API;

    const genAI = new GoogleGenerativeAI(api);

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const fileInputEl = document.querySelector("input[type=file]");
    const imageParts = await Promise.all(
      [...fileInputEl.files].map(fileToGenerativePart)
    );

    const result = await model.generateContent([question, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error in run:", error);
    throw error;
  }
}

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}
