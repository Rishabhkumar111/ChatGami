import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading:false,
  messages: [
    {
      id: 1,
      sender: "me",
      text: "tredrtyd  ggvhgvjhgvv",
    },
    {
        id:2,
        sender:"bot",
        text:'hii  ggvhgvjhgvv'
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
        text: action.payload.text,
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
