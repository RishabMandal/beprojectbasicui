"use client";

import Image from "next/image";
import React, { useState } from "react";

const VideoPlayer = ({ currentCameraData }) => {
  const [CameraView, setCameraView] = useState("Normal");
  const [MultiScreenView, setMultiScreenView] = useState(false);
  return (
    <div className="p-5 bg-[#1d2440] min-h-full">
      <div className="flex flex-row justify-between items-center gap-2">
        <select className="flex-1 p-2 bg-[#2b4075] focus:outline-none rounded-lg cursor-pointer">
          {/* Camera {currentCameraData?.id} */}
          <option value="saab">Camera {currentCameraData?.id}</option>
          <option value="volvo">Camera 2</option>
          <option value="volvo">Camera 3</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer hover:scale-110 duration-200"
          onClick={() => setMultiScreenView(!MultiScreenView)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
      <div>
        {/* <iframe
          className="w-full h-[35vw] py-5"
          src="https://www.youtube.com/embed/k1CwNA5o018?mute=1"
          controls
        ></iframe> */}
        {!MultiScreenView && CameraView === "Normal" && (
          <Image
            src={currentCameraData.normalImage}
            alt="Camera Feed Not Available"
            className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
          />
        )}
        {!MultiScreenView && CameraView === "Thermal" && (
          <Image
            src={currentCameraData.thermalImage}
            alt="Camera Feed Not Available"
            className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
          />
        )}
        {!MultiScreenView && CameraView === "Night" && (
          <Image
            src={currentCameraData.nightImage}
            alt="Camera Feed Not Available"
            className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
          />
        )}
        {MultiScreenView && (
          <div className="flex flex-row">
            <Image
              src={currentCameraData.thermalImage}
              alt="Camera Feed Not Available"
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
            <Image
              src={currentCameraData.nightImage}
              alt="Camera Feed Not Available"
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
          </div>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="size-9 h-full cursor-pointer bg-[#2b4075] border border-[#48599a] p-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="size-9 h-full -ml-1 cursor-pointer bg-[#2b4075] border border-[#48599a] p-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>

        <div
          className={`cursor-pointer ${
            CameraView === "Normal" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 ml-3 hover:scale-105 duration-200`}
          onClick={() => setCameraView("Normal")}
        >
          Normal Vision
        </div>
        <div
          className={`cursor-pointer ${
            CameraView === "Thermal" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 hover:scale-105 duration-200`}
          onClick={() => setCameraView("Thermal")}
        >
          Thermal Vision
        </div>
        <div
          className={`cursor-pointer ${
            CameraView === "Night" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 hover:scale-105 duration-200`}
          onClick={() => setCameraView("Night")}
        >
          Night Vision
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;