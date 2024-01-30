import { addMessage, toddleLoading } from "../app/slice";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const userMessageReceivingFun = async (dispatch, text) => {
  
  try {
    dispatch(toddleLoading({isLoading:true}));
    const reply = await run(text);
    dispatch(addMessage({ sender: "bot", text: reply }));
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
