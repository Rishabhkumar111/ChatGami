import React from 'react'
import ChatArea from './ChatArea'
import TextArea from './TextArea'

const MessageArea = ({css}) => {
  return (
    <div className={`flex flex-col bg-[#000000] ${css}`}>
        <ChatArea />
        <TextArea />
    </div>
  )
}

export default MessageArea