import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading:false,
  messages: [
    {
      id: 1,
      sender: "me",
      type:"text",
      text: "Hello bro, how can i help you?",
      img:null
    },
    {
        id:2,
        sender:"bot",
        type:"text",
        text:'hii  ggvhgvjhgvv',
        img:null
    }
  ],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: nanoid(),
        sender: action.payload.sender,
        type:action.payload.type,
        text: action.payload.text,
        img:action.payload.img
      };
      state.messages.push(message);
    },
    toddleLoading:(state, action)=>{
      state.isLoading = action.payload.isLoading
    }
    // addUserInfo
  },
});

export const { addMessage, toddleLoading } = messageSlice.actions;
export default messageSlice.reducer;
