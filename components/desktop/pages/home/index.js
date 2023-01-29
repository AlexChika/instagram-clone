import React from "react";
import DesktopLayout from "components/desktop/layout";
import HomeNavTop from "components/desktop/layout/HomeNavTop";
import { App } from "pages/_app";

// ..........
const DesktopHomePage = () => {
  const { changeTheme } = App();
  return (
    <DesktopLayout NavTop={HomeNavTop}>
      <main className="justify-center items-center flex">
        <div>
          <h1>Desktop build in progress</h1> <br />
          <section className="p-[10px] pb-[54px]">
            <h2 className="text-lg font-extrabold">App in progress 25%...</h2>
            <br />
            <h5 className="font-bold">Pages Ready for review</h5>
            <h4 className="font-medium">1. Reels 60%</h4>
            <h4 className="font-medium">2. Home 15%</h4>
            <h4 className="font-medium">3. Search 7%</h4>
            <h4 className="font-medium">4. Explore 10%</h4> <br />
            <h5 className="font-bold">steps to completion</h5>
            <h4 className="font-medium">1. Building Mobile components 30%</h4>
            <h4 className="font-medium">1. Building Desktop components 15%</h4>
            <h4 className="font-medium">2. implementing the backend 7%</h4>
            <h4 className="font-medium">3. connecting the dots 10%</h4>
            <br />
            <button
              className="text-blue-600 font-bold italic border-2 border-blue-600 border-solid p-1 mx-auto block"
              onClick={changeTheme}
            >
              change theme
            </button>
            <br />
            <h3 className="text-center font-bold underline text-red-400">
              A short Story
            </h3>
            <br />
            <p>
              A group of blind men heard that a strange animal, called an
              elephant, had been brought to the town, but none of them were
              aware of its shape and form. <br /> <br />
              Out of curiosity, they said:{" "}
              {
                "We must inspect and know it by touch, of which we are capable"
              }. <br /> <br /> So, they sought it out, and when they found it
              they groped about it. <br /> <br />
              The first person, whose hand landed on the trunk, said,{" "}
              {"This being is like a thick snake"}. <br /> <br /> For another
              one whose hand reached its ear, it seemed like a kind of fan.{" "}
              <br /> <br /> As for another person, whose hand was upon its leg,
              said, the elephant is a pillar like a tree-trunk. <br /> <br />{" "}
              The blind man who placed his hand upon its side said the elephant,{" "}
              {"is a wall"}. Another who felt its tail, described it as a rope.{" "}
              <br />
              <br /> The last felt its tusk, stating the elephant is that which
              is hard, smooth and like a spear.
            </p>
            <h3 className="text-center font-bold underline text-red-400">
              conclusion
            </h3>
            <br />
            <p>
              The parable has been used to illustrate a range of truths and
              fallacies; broadly, the parable implies that {"one's "}subjective
              experience can be true, but that such experience is inherently
              limited by its failure to account for other truths or a totality
              of truth.
            </p>
            <br />
            <a
              className="text-purple-700 italic"
              href="https://en.wikipedia.org/wiki/Blind_men_and_an_elephant"
            >
              wikipedia source..
            </a>
          </section>
        </div>
      </main>
    </DesktopLayout>
  );
};

export default DesktopHomePage;
