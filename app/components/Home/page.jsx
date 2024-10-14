"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { getBase64, ImagetoBase64 } from "react-image-base64";
import base64ImageLoader from "base64-image-loader";
import thermalCamera1 from "../../../assets/thermal/Camera 1.jpg";

const page = () => {
  const { data, setCurrentCameraData } = useContext(GlobalContext);
  const router = useRouter();
  const [CameraView, setCameraView] = useState("Thermal");

  //   const [deployeddata, setDeployeddata] = useState();

  //
  //   const [base64, setBase64] = useState("");
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result; // This is the base64 string

        // Send the base64 string via Axios
        axios({
          method: "POST",
          url: "https://detect.roboflow.com/drone-4uxky/1",
          params: {
            api_key: "NJIolqxzPmiYii3VJAJt",
          },
          data: {
            image: base64Image,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(selectedFile); // Convert to base64
    }
  };
  //   useEffect(() => {
  //     getBase64(thermalCamera1)
  //       .then((base64Image) => {
  //         // Send the base64 string via Axios
  //         return axios({
  //           method: "POST",
  //           url: "https://detect.roboflow.com/drone-4uxky/1",
  //           params: {
  //             api_key: "NJIolqxzPmiYii3VJAJt",
  //           },
  //           data: {
  //             image: base64Image,
  //           },
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         });
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error.message);
  //       });
  //   }, []);

  return (
    <div className="bg-[#1d2440] min-h-screen text-white">
      <div className="flex flex-row">
        <div className="w-[30vw] bg-[#25314f] p-2">
          {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
          <select className="flex-1 p-2 bg-[#2b4075] rounded-lg w-full focus:outline-none cursor-pointer">
            <option value="volvo">Camera View: Thermal Vision</option>
            <option value="volvo">Camera View: Normal Vision</option>
            <option value="saab">Camera View: Night Vision</option>
          </select>
          <div className="px-2 bg-[#2b4075] rounded-lg w-full min-h-[100vh] mt-2">
            {data?.map((cam, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer pt-2"
                  onClick={() => {
                    setCurrentCameraData(cam);
                    router.push("/components/DetailedVideoSection");
                  }}
                >
                  <div className="flex flex-row gap-5 pb-2">
                    <Image
                      src={cam.thermalImage}
                      alt="Cam"
                      className="w-[40%] rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-xl">Zone 1</div>
                      <div className="font-semibold">Block A</div>
                      <div className="text-gray-400">
                        Thermal Camera <br />
                        Time <br />
                        Location
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
            {/* <div
              className="cursor-pointer"
              onClick={() => {
                setCurrentCameraData(data[0]);
                router.push("/components/DetailedVideoSection");
              }}
            >
              <div className="flex flex-row gap-5 pb-2">
                <Image
                  src={data[0].thermalImage}
                  alt="Cam"
                  className="w-[40%] rounded-lg"
                />
                <div className="flex-1">
                  <div className="font-bold text-xl">Zone 1</div>
                  <div className="font-semibold">Block A</div>
                  <div className="text-gray-400">
                    Thermal Camera <br />
                    Time <br />
                    Location
                  </div>
                </div>
              </div>
              <hr />
            </div> */}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-row flex-1 p-5 gap-5">
            <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
              <Image
                src={data[0].thermalImage}
                alt="Camera Img"
                onClick={() => {
                  setCurrentCameraData(data[0]);
                  router.push("/components/DetailedVideoSection");
                }}
                className="w-full h-full border-2 border-[#334c8e] bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
              />
            </div>
            <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
              <Image
                src={data[1].thermalImage}
                alt="Camera Img"
                onClick={() => {
                  setCurrentCameraData(data[1]);
                  router.push("/components/DetailedVideoSection");
                }}
                className="w-full h-full border-2 border-[#334c8e] bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
              />
            </div>
          </div>
          <div className="flex flex-row flex-1 px-5 pb-5 gap-5">
            <div className="flex-1 w-full h-[54vh] bg-black rounded-lg">
              <Image
                src={data[2].thermalImage}
                alt="Camera Img"
                onClick={() => {
                  setCurrentCameraData(data[2]);
                  router.push("/components/DetailedVideoSection");
                }}
                className="w-full h-full border-2 border-[#334c8e] bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
              />
            </div>
            <div className="flex-1 w-full h-[54vh] flex justify-center items-center bg-black rounded-lg">
              {/* <Image
                src={data[0].thermalImage}
                alt="Camera Img"
                className="w-full h-full rounded-lg object-contain cursor-pointer"
              /> */}
              <div className="text-center text-7xl cursor-pointer hover:scale-125 duration-200">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
