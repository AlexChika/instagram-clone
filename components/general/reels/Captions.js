/* ------- video details/ captions ------- */
import { useState } from "react";
import { MusicIcon } from "utils/icons";

// ...
const Captions = () => {
  const [seeMore, setSeeMore] = useState(false);

  let handle = "Alex chika";
  let caption =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nulla. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nulla. ";

  return (
    <div className="mt-3">
      {/* ------------- caption text ------------ */}
      <div className="max-h-[250px] overflow-y-auto  sticky z-[3]">
        {seeMore ? (
          <>
            <h5 className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
              {caption}
            </h5>
          </>
        ) : (
          <>
            <h5 className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
              {caption.substr(0, 25)}{" "}
              <button onClick={() => setSeeMore(true)} className="opacity-50">
                ...more
              </button>
            </h5>
          </>
        )}
      </div>

      {/* --------- original audio texts -------- */}
      <div className="flex items-center my-3 sticky z-[3]">
        <span className="mr-2">
          <MusicIcon color={"#ffffff"} />
        </span>

        <p className="mr-2 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          {handle}
        </p>

        <p className="h-[3px] w-[3px] rounded-full bg-white mr-2"></p>

        <p className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          Original audio
        </p>
      </div>

      {/* ------------- overlay wrap ------------ */}
      <div
        onClick={() => setSeeMore(false)}
        className={`absolute bg-[#000000cc] bg-opacity-50 top-0 left-0 bottom-0 right-0 z-[0] transition-opacity ${
          seeMore ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Captions;
