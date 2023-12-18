"use client";
import { checkForThala } from "./utils/checkForThala";
import { useRef } from "react";
import Head from "next/head";
export default function Home() {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const ThalaAudio = "/audio/ThalaAudio.mp3";
    const result = checkForThala(inputRef.current.value);
    if (result !== null) {
      const audio = new Audio(ThalaAudio);
      audio
        .play()
        .then(() => {
          alert(result);
        })
        .catch((error) => {
          console.error("Audio playback error:", error);
          alert(result);
        });
    } else {
      alert("Not matching Thala");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-yellow-500 text-black items-center justify-center p-8">
      <div className="mb-6">
        <img
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS_Q-fRFfDWAEfOcz_R0vktnglTXYO4EKn9z8bBlX6mgl4cobbtQ8K4KZFq46SSM4ArMq51ma5AZGxc62Y"
          alt="Dhoni"
          className="w-52 h-52 rounded-md shadow-lg"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          ref={inputRef}
          className="h-12 w-72 bg-transparent border-2 text-white border-white placeholder:text-gray-200 rounded-md px-4 text-lg mb-4"
          type="text"
          placeholder="Type something"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Check for Thala!
        </button>
      </form>
    </main>
  );
}
