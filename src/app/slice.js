import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userInfo: {
    name: "",
    email: "",
    initials: "",
  },
  isClickedfun:false,
  messages: [],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: nanoid(),
        sender: action.payload.sender,
        type: action.payload.type,
        text: action.payload.text,
        img: action.payload.img,
      };
      state.messages.push(message);
    },
    deleteMessage:(state, action)=>{
      state.messages = []
    },
    toddleLoading: (state, action) => {
      state.isLoading = action.payload.isLoading
    },
    updateSink:(state, action)=>{
      state.isClickedfun = action.payload.value;
    },
    addUserInfo: (state, action) => {
      const findInitials = (name) => {
        const names = name.split(" ");
        if (names.length === 1) {
          return names[0][0].toUpperCase();
        } else {
          return (
            names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase()
          );
        }
      };
      const info = {
        name: action.payload.name,
        email: action.payload.email,
        initials: findInitials(action.payload.name),
      };
      console.log(info)
      state.userInfo = info;
    },
  },
});

export const { addMessage, toddleLoading, addUserInfo, updateSink, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
