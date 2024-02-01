import React from 'react'

const PreviewImg = ({setimgURL, imgURL, forSendingImg}) => {
  return (
    <div className="absolute right-0 top-0 w-[82vw] h-[88vh]">
          <div
            className="bg-pink-500 absolute w-full h-full"
            style={{ opacity: 0.6 }}
          ></div>
          <div className="absolute w-full h-full flex items-center justify-center p-10">
            <button
              onClick={() => setimgURL('')}
              className="absolute top-0 left-0 m-4 p-2 bg-gray-800 text-white rounded-full cursor-pointer"
            >
              Close
            </button>
            <img
              src={imgURL}
              className="object-contain max-w-full max-h-full"
              alt="Image"
            />
          </div>
        </div>
  )
}

export default PreviewImg