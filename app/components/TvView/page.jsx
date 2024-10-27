"use client";

import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const { data, setCurrentCameraData, alertCameraData } =
    useContext(GlobalContext);
  const [CameraView, setCameraView] = useState("Thermal");

  useEffect(() => {
    if (alertCameraData) {
    }
  }, [alertCameraData]);

  return (
    <div className="bg-[#1d2440]">
      <div className="flex-1">
        <div className="flex flex-row flex-1 p-5 gap-5">
          <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
            <Image
              src={
                CameraView === "Thermal"
                  ? data[0].thermalImage
                  : CameraView === "Normal"
                  ? data[0].normalImage
                  : CameraView === "Night"
                  ? data[0].nightImage
                  : null // or a placeholder image if needed
              }
              alt="Camera Img"
              onClick={() => {
                setCurrentCameraData(data[0]);
                router.push("/components/DetailedVideoSection");
              }}
              className={`w-full h-full ${
                alertCameraData?.id == 1
                  ? "border-4 border-red-600"
                  : "border-2 border-[#334c8e]"
              } bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105`}
            />
          </div>
          <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
            <Image
              src={
                CameraView === "Thermal"
                  ? data[1]?.thermalImage
                  : CameraView === "Normal"
                  ? data[1]?.normalImage
                  : CameraView === "Night"
                  ? data[1]?.nightImage
                  : null // or a placeholder image if needed
              }
              alt="Camera Img"
              onClick={() => {
                setCurrentCameraData(data[1]);
                router.push("/components/DetailedVideoSection");
              }}
              className={`w-full h-full ${
                alertCameraData?.id == 2
                  ? "border-4 border-red-600"
                  : "border-2 border-[#334c8e]"
              } bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105`}
            />
          </div>
        </div>
        <div className="flex flex-row flex-1 px-5 pb-5 gap-5">
          <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
            <Image
              src={
                CameraView === "Thermal"
                  ? data[2]?.thermalImage
                  : CameraView === "Normal"
                  ? data[2]?.normalImage
                  : CameraView === "Night"
                  ? data[2]?.nightImage
                  : null // or a placeholder image if needed
              }
              alt="Camera Img"
              onClick={() => {
                setCurrentCameraData(data[2]);
                router.push("/components/DetailedVideoSection");
              }}
              className={`w-full h-full ${
                alertCameraData?.id == 3
                  ? "border-4 border-red-600"
                  : "border-2 border-[#334c8e]"
              } bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105`}
            />
          </div>
          <div className="flex-1 w-full h-[54vh] flex justify-center items-center bg-black rounded-lg">
            {/* <Image
                src={data[0].thermalImage}
                alt="Camera Img"
                className="w-full h-full rounded-lg object-contain cursor-pointer"
              /> */}
            <div
              //   onClick={handleOpen}
              className="text-center text-7xl cursor-pointer hover:scale-125 duration-200"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
