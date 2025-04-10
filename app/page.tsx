"use client"
import Link from "next/link";

import { useState, useEffect } from "react";
export default function Home() {

  const arr = ["H", "e", "l", "l", "o", " W", "o", "r", "l", "d"];
  const FrontEnd = [
    { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", text: "HTML" },
    { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", text: "Vanila CSS" },
    { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", text: "Tailwind CSS" },
    { id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", text: "JavaScript" },
    { id: 5, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", text: "ReactJs" },
    { id: 6, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", text: "NextJs" },
    { id: 7, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", text: "TypeScript"},
    { id: 8, image: "/pugg.png", text: "PUG" }
  ]
  const BackEnd = [
    { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", text: "NodeJs" },
    { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", text: "ExpressJs"},
    { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", text: "MongoDb"},
    { id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", text: "FireBase"},
  ]
  const Programming = [
    {id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", text: "C prgramming"},
    {id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", text: "C++"},
    {id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", text: "Java"},
    {id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", text: "Python"}
  ]
  const tolls = [
    {id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", text: "Vs Code"},
    {id: 2, image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", text: "Figma"},
    {id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", text: "Git"},
    {id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", text: "GitHub"}
  ]
  const [text, setText] = useState("");
  const letteranimation = () => {
    useEffect(() => {
      let tempText = "";
      arr.forEach((letter, index) => {
        setTimeout(() => {
          tempText += letter;
          setText(tempText);
        }, index * 400);
      });
    }, []);
  }
  letteranimation();
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-8 bg-white sm:mr-40">
        <div className="flex flex-col items-center text-3xl font-semibold bg-black text-white gap-5 p-10 sm:shadow-lg sm:shadow-gray-500" >
          <div className="text-5xl">{text}</div>
          <div>By</div>
          <div>&lt;<span className="text-emerald-400">Chinmay Patil</span>  / &gt;</div>
          <div className="text-lg text-gray-400">|Web Developer|</div>
          <div className="w-full text-sm font-normal flex justify-center sm:justify-end"><a href="/resumechinmay.pdf" download="resumechinmay.pdf"><button className="border-2 border-white rounded-2xl p-2 cursor-pointer">Download Resume</button></a></div>
          
        </div>

        


        <div className="flex flex-col gap-8 pl-5 bg-white pt-8 sm:pt-0">
          <div className="text-3xl font-bold text-amber-400">💡Skills And Tolls</div>

          <div className="text-2xl font-extrabold text-emerald-600">Front End :</div>

          <div className=" grid grid-cols-2 gap-10 sm:gap-5 sm:grid-cols-8 sm:grid">
            {FrontEnd.map((skill) => (
             
                <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                  <img src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy"/>{skill.text}
                </Link>
            ))}
            <Link href="/projects" className="smskill flex items-center w-35 h-40 text-black font-semibold sm:h-45"><div className="w-25 h-25 text-center text-pink-700 bg-lime-500 rounded-full pt-9 sm:pt-12 sm:w-30 sm:h-30">&lt;%=EJS%&gt;</div> Ejs</Link>
          </div>

          <div className="text-2xl font-extrabold text-emerald-600">Back End :</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {BackEnd.map((skill) => (
             
                <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                  <img src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy"/>{skill.text}
                </Link>
            ))}
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">Programming</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {Programming.map((skill) => (
             
                <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                  <img src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy"/>{skill.text}
                </Link>
            ))}
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">Tolls</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {tolls.map((skill) => (
             
                <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                  <img src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy"/>{skill.text}
                </Link>
            ))}
          </div>
        </div>



      </div>

    </>
  );
}
