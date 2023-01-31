import React from "react";
import Story from "./story";
import story from "./story.module.css";
import { UserStory } from "./story";

// ............................
const Stories = () => {
  return (
    <div
      className={`flex py-3 px-1 bg-neutral-100 dark:bg-neutral-900 border-b border-b-slate-300 dark:border-b-gray-700 overflow-x-auto ${story.stories__wrapper}`}
    >
      <UserStory />

      {[1, 2, 3, 4, 5, 6, 7].map((s, i) => {
        return <Story key={i} />;
      })}
    </div>
  );
};

export default Stories;
