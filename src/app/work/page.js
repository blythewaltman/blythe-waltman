"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import anime from "animejs";
import { useEffect } from "react";

function CleverStockImage() {
  const animate = () => {
    const square1 = anime.timeline({
      loop: true,
      easing: "linear",
      duration: 3000,

      direction: "alternate",
    });
    const square2 = anime.timeline({
      loop: true,
      easing: "linear",
      duration: 3000,

      direction: "alternate",
    });
    const square3 = anime.timeline({
      loop: true,
      easing: "linear",
      duration: 3000,
      direction: "alternate",
    });

    square1.add({
      targets: "#square1",
      background: "#ABDC3E",
    });

    square2.add({
      targets: "#square2",
      background: "#ABDC3E",
    });

    square3.add({
      targets: "#square3",
      background: "#ABDC3E",
    });
  };
  useEffect(() => {
    animate();
  }, []);
  return (
    <div className="grid grid-rows-2 gap-2 grid-cols-2 h-full w-full p-2 bg-black">
      <div
        id="square1"
        className="col-span-1 row-span-1 col-start-2  bg-[#D84AAE]"
      ></div>
      <div
        id="square2"
        className="col-span-1 row-span-1 col-start-1 row-start-2 bg-[#D84AAE]"
      ></div>
      <div
        id="square3"
        className="col-span-1 row-span-1 col-start-2 row-start-2  bg-[#D84AAE]"
      ></div>
    </div>
  );
}

function LingoportXSnapchatImage() {
  const animate = () => {
    const snapchat = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      duration: 3000,
    });
    const lingoport = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      duration: 3000,
    });

    snapchat
      .add({
        targets: "#snapchat",
        translateX: 80,
      })
      .add({
        targets: "#snapchat",
        translateY: 80,
      })
      .add({
        targets: "#snapchat",
        translateX: 0,
      })
      .add({
        targets: "#snapchat",
        translateY: 0,
      });

    lingoport
      .add({
        targets: "#lingoport",
        translateX: -80,
      })
      .add({
        targets: "#lingoport",
        translateY: -80,
      })
      .add({
        targets: "#lingoport",
        translateX: 0,
      })
      .add({
        targets: "#lingoport",
        translateY: 0,
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="grid grid-col-2 grid-row-2 h-full w-full">
      <div id="snapchat" className="h-auto w-auto col-start-1 row-start-1">
        <Image width={80} height={80} src="/snapchat.png" alt="" />
      </div>
      <div id="lingoport" className="h-auto w-auto col-start-2 row-start-2">
        <Image
          className="border rounded-xl"
          width={80}
          height={80}
          src="/lingoport.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

function CUXMindBeWellImage() {
  const animate = () => {
    const snapchat = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      duration: 3000,
    });
    const lingoport = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      duration: 3000,
    });

    snapchat
      .add({
        targets: "#cu",
        translateX: 80,
      })
      .add({
        targets: "#cu",
        translateY: 80,
      })
      .add({
        targets: "#cu",
        translateX: 0,
      })
      .add({
        targets: "#cu",
        translateY: 0,
      });

    lingoport
      .add({
        targets: "#mindBeWell",
        translateX: -80,
      })
      .add({
        targets: "#mindBeWell",
        translateY: -80,
      })
      .add({
        targets: "#mindBeWell",
        translateX: 0,
      })
      .add({
        targets: "#mindBeWell",
        translateY: 0,
      });
  };

  useEffect(() => {
    animate();
  }, []);
  return (
    <div className="grid grid-col-2 grid-row-2 h-full w-full">
      <div id="cu" className="h-auto w-auto col-start-1 row-start-1">
        <Image
          className="border rounded-xl"
          width={80}
          height={80}
          src="/cu_buff.webp"
          alt=""
        />
      </div>
      <div id="mindBeWell" className="h-auto w-auto col-start-2 row-start-2">
        <Image
          className="border rounded-xl"
          width={80}
          height={80}
          src="/mindBeWell2.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default function Work() {
  let workInfo = [
    {
      companyName: "CleverStock",
      description:
        "CleverStock emerged out of a necessity-driven idea! As a bootstrap company, we are dedicated to addressing the challenge of providing convenient access to building materials. Our mission is to simplify the process and make essential construction resources easily available.",
      image: <CleverStockImage />,
      skills: [
        "JavaScript",
        "TailwindCSS",
        "React",
        "JSX",
        "Node",
        "AWS",
        "SQL",
      ],
    },
    {
      companyName: "Lingoport x Snapchat",
      description:
        "Lingoport stands as a lead tech company in the realm of internationalization, based in the vibrant hub of Boulder. I had the honor of contributing to their team, serving as a contractor for the prominent client, Snapchat.",
      image: <LingoportXSnapchatImage />,
      skills: ["Python", "Kotlin", "i18n"],
    },
    {
      companyName: "CU Boulder x MindBeWell",
      description:
        "MindBeWell, headquartered in the vibrant city of Boulder, is dedicated to promoting holistic well-being. As part of my senior capstone project, I collaborated with a dynamic team of six engineers to craft a prototype for an Android journaling application tailored to MindBeWell's vision.",
      image: <CUXMindBeWellImage />,
      skills: ["Kotlin", "Scrum", "Agile"],
    },
  ];

  const backgroundColor =
    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-stone-600 to-emerald-900";
  const divHolderColor = "bg-[#2a627882]";
  const divBorderColor = "border-[#4695b582]";
  const textColor = "text-[#e4dabac2]";
  const fill = "fill-[#fff9e5c2]";
  const color = <div className="bg-[#66c7ee82]"></div>;

  return (
    <main
      className={`font-body min-h-screen flex items-center justify-center ${backgroundColor}`}
    >
      <Header />
      <div className=" mt-[5rem] lg:mt-[4rem] mb-[2rem] lg:w-[80rem] justify-center items-center align-center flex flex-col lg:flex-wrap lg:flex-row gap-[2rem] h-auto w-auto bg-transparent">
        {workInfo.map((company, index) => (
          <div
            key={index}
            class="group h-[30rem] w-[20rem] [perspective:1000px]"
          >
            <div
              class={`relative h-full w-full border ${divBorderColor}  ${divHolderColor} rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}
            >
              <div class="absolute flex flex-col gap-[3rem] justify-center items-center inset-0 h-full w-full">
                <div className={`${textColor} text-2xl`}>
                  {company.companyName}
                </div>
                <div className="h-1/3 w-1/2 bg-transparent">
                  {company.image}
                </div>
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-stone-700 text-stone-300 px-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex gap-[2rem] min-h-full flex-col items-center justify-center ">
                  <div className="border-b border-stone-500 pb-[2rem] leading-loose text-sm">
                    {company.description}
                  </div>

                  <ul
                    className={` gap-x-5 text-left list-disc list-inside inline-grid ${
                      company.skills.length >= 4 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {company.skills.map((skill, index) => (
                      <li className=" col-span-1" key={index}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
