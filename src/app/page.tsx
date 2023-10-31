"use client";
import Image from "next/image";
import { createRef, useEffect, useRef, useState } from "react"; 
import CardWrapper from "./components/CardWrapper";

export default function Home() {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
  ];

  const [sdsd, setSdsd] = useState([0, 0, 0]);
  const [loading, setLoading] = useState(false)
  const colors = ["blue", "red", "green", "yellow", "orange"];
  const childRef: any = useRef();
  const doClick = () => childRef?.current?.doClick();
  return (
    <div className="flex items-center justify-center">
    <div className="w-6/12">
      <button
        className="p-2 rounded bg-blue-900 text-white"
        onClick={() => {
          setSdsd((sdsd) => {
            return sdsd.map(() =>
              Math.floor(Math.random() * (colors.length * 2))
            );
          });
          setLoading(!loading)
          childRef?.current?.doClick();
        }}
      >
        click me
      </button>
      {/* Math.floor(Math.random() * (colors.length * 2)); */}
      {/* {JSON.stringify(sdsd)} */}
      <div className="w-62 h-40 border-8 rounded-lg border-black overflow-hidden ">
        <div className=" bay-card-wraepper flex gap-2 items-center justify-center">
          {images.map((sds, index) => {
            return (
              <CardWrapper
                key={index}
                loading={loading}
                colors={colors}
                ref={childRef}
                currentIndex={sdsd[index]}
              />
            );
          })}
        </div>
      </div>
    </div></div>
  );
}
