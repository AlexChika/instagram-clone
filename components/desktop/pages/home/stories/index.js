import React, { useState, useEffect } from "react";
import story from "./story.module.css";
import Story, { UserStory } from "components/mobile/pages/home/stories/story";
import { CaretLeftIcon } from "utils/icons";

// ............................
const Stories = () => {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

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
        <button className="sticky w-6 h-6 translate-y-[-50%] top-[50%] right-[calc(100%-40px)] p-[6px] bg-neutral-500 dark:bg-white flex items-center justify-center rounded-full">
          <CaretLeftIcon class={"text-white dark:text-black"} />
        </button>
      )}

      {rightArrow && (
        <button className=" sticky w-6 h-6 translate-y-[-50%] top-[50%] right-[20px] p-[6px] bg-neutral-500 dark:bg-white flex items-center justify-center rounded-full">
          {/* serving as right icon (rotated) */}
          <CaretLeftIcon
            class={"rotate-[180deg] text-[transparent] dark:text-black"}
          />
        </button>
      )}
    </div>
  );
};

export default Stories;
