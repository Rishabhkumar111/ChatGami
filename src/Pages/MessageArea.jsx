import React from 'react'
import ChatArea from './ChatArea'
import TextArea from './TextArea'

const MessageArea = () => {
  return (
    <div className='flex flex-col flex-grow bg-blue-500'>
        <ChatArea />
        <TextArea />
    </div>
  )
}

export default MessageArea