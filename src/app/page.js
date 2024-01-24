"use client";

import Image from "next/image";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import anime from "animejs";
import { useEffect } from "react";

import Header from "./components/Header";

export default function Home() {
  const backgroundColor =
    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-stone-600 to-emerald-900";
  const iconBackgroundColor = "bg-[#0e2f3cee]";
  const imageBorderColor = "border-stone-600";
  const divHolderColor = "bg-[#2a627882]";
  const divBorderColor = "border-[#4695b582]";
  const textColor = "text-[#e4dabac2]";
  const fill = "fill-[#fff9e5c2]";

  const animate = () => {
    const iconAnimation = anime.timeline({});

    iconAnimation
      .add({
        targets: "#githubBackground",
        opacity: [0, 1],
        delay: 10,
        easing: "easeInOutQuad",
        duration: 500,
        scale: 1.5,
      })
      .add({
        targets: "#githubBackground",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#linkedinBackground",
        opacity: [0, 1],
        delay: 10,
        easing: "easeInOutQuad",
        duration: 500,
        scale: 1.5,
      })
      .add({
        targets: "#linkedinBackground",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };
  useEffect(() => {
    animate();
  }, []);

  const description = (
    <div>
      <p>
        Hello! I&apos;m Blythe, a dynamic and motivated Full Stack Junior
        Software Engineer with a keen interest in web development, mobile app
        development, and AWS services.{" "}
      </p>
      <br></br>
      <p>
        I am actively seeking opportunities to contribute my skills and passion
        to a dynamic team. If you are looking for a junior software engineer who
        is dedicated, adaptable, and eager to learn, let&apos;s connect!
      </p>
    </div>
  );

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${backgroundColor}`}
    >
      <Header />
      <div className="relative justify-center align-center flex flex-row mt-[6rem]">
        <div
          className={`flex flex-col border ${divBorderColor} border-r-transparent lg:flex-row w-3/4 lg:w-3/4 gap-4 justify-center items-center h-auto p-[2rem] ${divHolderColor} `}
        >
          <Image
            loading="lazy"
            className={`border ${imageBorderColor} shadow-lg rounded-lg`}
            width={250}
            height={100}
            src="/profile.jpeg"
            alt=""
          />
          <div
            className={`flex justify-center align-center items-center text-sm lg:text-lg ${textColor} font-body`}
          >
            {description}
          </div>
        </div>
        <div
          className={`flex border ${divBorderColor} flex-col gap-5 justify-center items-center p-[2rem] ${divHolderColor} w-[10rem]`}
        >
          <div
            id="linkedinBackground"
            className={`${iconBackgroundColor} opacity-0 w-[4rem] h-[4rem]`}
          >
            <a
              href="https://www.linkedin.com/in/blythewaltman/"
              target="_blank"
            >
              <FaLinkedin
                id="linkedinIcon"
                className={`w-full h-full ${fill}`}
              ></FaLinkedin>
            </a>
          </div>
          <div
            id="githubBackground"
            className={`${iconBackgroundColor} opacity-0 w-[4rem] h-[4rem]`}
          >
            <a href="https://github.com/blythewaltman" target="_blank">
              <FaGithubSquare className={`w-full h-full ${fill}`} />
            </a>
          </div>
          <div
            id="socialsLine"
            className="bg-slate-400 w-[.05rem] h-[20rem]"
          ></div>
        </div>
      </div>
    </main>
  );
}
