import React, { useState, useEffect } from "react";
import story from "./story.module.css";
import Story, { UserStory } from "components/mobile/pages/home/stories/story";
import { CaretLeftIcon } from "utils/icons";

// ............................
const Stories = () => {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

  // effect for showing and hiding arrows on the story
  useEffect(() => {
    const stories = [...document.querySelectorAll("[data-name='story']")];
    let first = stories[0]; //this represent the first story element;
    let last = stories[stories.length - 1]; //this represent the last story element;

    const elements = [first, last];

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    function observerHandler(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === first) setLeftArrow(false);
          if (entry.target === last) setRightArrow(false);
        } else {
          if (entry.target === first) setLeftArrow(true);
          if (entry.target === last) setRightArrow(true);
        }
      });
    }

    let observer = new IntersectionObserver(observerHandler, options);

    elements.forEach((story) => {
      observer.observe(story);
    });
  }, []); //dependency when stories changes

  let idx = 0;
  const options = {
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  };

  function scrollLeft() {
    const stories = [...document.querySelectorAll("[data-name='story']")];

    idx = idx - 6;
    if (idx < 0) {
      idx = 0;
    }

    stories[idx].scrollIntoView(options);
  }

  function scrollRight() {
    const stories = [...document.querySelectorAll("[data-name='story']")];

    idx = idx + 6;
    if (idx >= stories.length) {
      idx = idx - 6;
    }

    stories[idx].scrollIntoView(options);
  }

  // .............................
  return (
    <div
      className={`flex py-3 px-1 overflow-x-auto relative ${story.stories__wrapper}`}
    >
      <UserStory />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((s, i) => {
        return <Story key={i} />;
      })}

      {leftArrow && (
        <button
          onClick={scrollLeft}
          className="sticky w-6 h-6 translate-y-[-50%] top-[50%] right-[calc(100%-40px)] p-[6px] bg-white flex items-center justify-center rounded-full drop-shadow-lg"
        >
          <CaretLeftIcon class={"text-neutral-400"} />
        </button>
      )}

      {rightArrow && (
        <button
          onClick={scrollRight}
          className=" sticky w-6 h-6 translate-y-[-50%] top-[50%] right-[20px] p-[6px] bg-white flex items-center justify-center rounded-full drop-shadow-lg"
        >
          {/* serving as right icon (rotated) */}
          <CaretLeftIcon class={"rotate-[180deg] text-neutral-400"} />
        </button>
      )}
    </div>
  );
};

export default Stories;
