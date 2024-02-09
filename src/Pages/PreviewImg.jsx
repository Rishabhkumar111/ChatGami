import React from 'react'

const PreviewImg = ({setimgURL, imgURL}) => {
  return (
    <div className="absolute right-0 top-0 w-full h-[91vh] sm:w-[82vw] sm:h-[88vh]">
          <div
            className="bg-[#8A8A8A] absolute w-full h-full"
            style={{ opacity: 0.8 }}
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