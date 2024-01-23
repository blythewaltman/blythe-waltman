"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

const SplashScreen = ({ finishLoading }) => {
  var duration = 2000;
  var delay = 0;
  var fill = "#ff4258";
  var endDelay = 1500;
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const colors = anime.timeline({});

    const b = anime.timeline({
      complete: () => finishLoading(),
    });

    const l = anime.timeline({
      complete: () => finishLoading(),
    });

    const y = anime.timeline({
      complete: () => finishLoading(),
    });
    const t = anime.timeline({
      complete: () => finishLoading(),
    });
    const h = anime.timeline({
      complete: () => finishLoading(),
    });
    const e = anime.timeline({
      complete: () => finishLoading(),
    });

    b.add({
      targets: ["#b-svg polygon"],
      points: [
        {
          value:
            "0 0 0 200 130 200 154 196 170 188 178 180 184 170 188 160 190 150 190 132 184 118 174 108 162 102 148 96 160 92 172 84 180 74 184 62 184 50 182 34 172 20 160 10 146 4 124 0 0 0 64 44 106 44 118 52 118 68 106 78 64 78 64 120 110 120 120 130 120 150 110 158 64 158 64 44",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
    });

    l.add({
      targets: ["#l-svg polygon"],
      points: [
        {
          value: "0 0 0 200 200 200 200 130 70 130 70 0 0 0",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
      complete: () => finishLoading(),
    });

    y.add({
      targets: ["#y-svg polygon"],
      points: [
        {
          value: "0 0 70 0 100 50 130 0 200 0 140 90 140 200 60 200 60 90 0 0",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
      complete: () => finishLoading(),
    });

    t.add({
      targets: ["#t-svg polygon"],
      points: [
        {
          value: "0 0 200 0 200 60 140 60 140 200 60 200 60 60 0 60 0 0",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
      complete: () => finishLoading(),
    });

    h.add({
      targets: ["#h-svg polygon"],
      points: [
        {
          value:
            "0 0 70 0 70 70 130 70 130 0 200 0 200 200 130 200 130 130 70 130 70 200 0 200 0 0",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
      complete: () => finishLoading(),
    });

    e.add({
      targets: ["#e-svg polygon"],
      points: [
        {
          value:
            "0 0 200 0 200 50 70 50 70 80 180 80 180 120 70 120 70 150 200 150 200 200 0 200 0 0",
        },
      ],
      delay: delay,
      endDelay: endDelay,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: duration,
      loop: false,
      fill: fill,
      complete: () => finishLoading(),
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-stone-600 to-emerald-900">
      <div
        className="flex h-screen items-center justify-center"
        isMounted={isMounted}
      >
        <div className="flex gap-[-2rem] flex-row flex-wrap w-full h-auto scale-[.4] sm:scale-100 sm:h-[30rem] justify-center sm:justify-evenly items-center">
          <svg
            id="b-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 0 200, 130 200, 154 200, 170 200, 178 200, 200 200, 200 160, 200 150, 200 132, 200 118, 200 108, 200 102, 200 96, 200 92, 200 84, 200 74, 200 62, 200, 50 200, 34 200, 20 200, 10 200, 4 200, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            ></polygon>
          </svg>
          <svg
            id="l-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 0 200, 200 200, 200 130, 200 0, 70 0, 0 0"
            ></polygon>
          </svg>
          <svg
            id="y-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 70 0, 100 0, 130 0, 200 0, 200 90, 200 200, 0 200, 0 90, 0 0"
            ></polygon>
          </svg>
          <svg
            id="t-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 200 0, 200 60, 200 100, 200 200, 0 200, 0 100, 0 60, 0 0"
            ></polygon>
          </svg>
          <svg
            id="h-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 70 0, 70 0, 130 0, 130 0, 200 0, 200 200, 130 200, 130 200, 70 200, 70 200, 0 200, 0 0"
            ></polygon>
          </svg>
          <svg
            id="e-svg"
            className="fill-[#edaf9700] transform sm:scale-100 scale-[.3]"
            width="200"
            height="200"
          >
            <polygon
              stroke="BDCDD6"
              points="0 0, 200 0, 200 50, 200 50, 200 80, 200 80, 200 120, 200 120, 200 150, 200 150, 200 200, 0 200, 0 0"
            ></polygon>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default SplashScreen;
