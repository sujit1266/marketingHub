"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import ReachUsForm from "./ReachUsForm";
import "../../css/style.css";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[700px] max-w-8xl mx-auto overflow-hidden lg:mb-20 rounded-2xl cursor-pointer">
        {/* {!playVideo && (
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        )}
        {playVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>
        )} */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 w-full h-full object-cover"
        >
          <source src="/final-video2.mp4" type="video/mp4" />
        </video>
        <div className="form-wrapper absolute top-[10px] right-24 rounded-3xl">

          <ReachUsForm />
        </div>
        <div className="absolute top-10 left-10 text-[#ffa550] w-[55%] text-center">
        <h3 className="text-4xl">Ready to Stand Out?</h3>
        <p className="text-2xl">We’re here to turn your ideas into reality. Connect with us today and take the first step towards success!</p>
        </div>
      </div>
    </Container>
  );
}
