import React from "react";
import story from "./story.module.css";
import Image from "next/image";
import { PlusIconRound } from "utils/icons";

const Story = () => {
  return (
    <article className="flex flex-col items-center self-center w-[59px] mr-4 ">
      <div
        className={`${story.story} flex justify-center items-center rounded-full w-[59px] h-[59px]`}
      >
        <div className="relative w-[95%] h-[95%] bg-green-500 rounded-full border-2 dark:border-black border-white cursor-pointer">
          <Image
            className="rounded-full"
            layout="fill"
            src="/alex.png"
            alt="users profile pic"
          />
        </div>
      </div>
      <p
        className={`w-[59px] text-[12px] overflow-x-hidden text-clip text-center whitespace-nowrap`}
      >
        vaneelah
      </p>
    </article>
  );
};

const UserStory = () => {
  return (
    <>
      {false ? (
        <Story />
      ) : (
        <article className="relative flex flex-col items-center self-center w-[59px] mr-4 pointernone">
          <button
            className={` flex justify-center items-center w-[59px] h-[59px] relative`}
          >
            <Image
              className="rounded-full"
              layout="fill"
              src="/alex.png"
              alt="users profile pic"
            />

            <span className="absolute bottom-0 right-0 rounded-full bg-white dark:bg-black">
              <PlusIconRound class="h-[20px] w-[20px]" />
            </span>
          </button>

          <p
            className={`w-[59px] text-[12px] overflow-x-hidden text-clip text-center whitespace-nowrap`}
          >
            Your story
          </p>
        </article>
      )}
    </>
  );
};

export { UserStory }; // used when there is not story by the user

export default Story;
