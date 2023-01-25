/* ---- Name component/ reels acct name --- */
import Link from "next/link";
import Image from "next/image";

// ....
const Name = () => {
  let handle = "Alex chika";
  return (
    <div className="flex items-center sticky z-[3]">
      <div className="h-[35px] w-[35px] relative mr-2">
        <Link href="/profile" passHref>
          <a>
            <Image
              layout="fill"
              src={"/alex.png"}
              alt={`${handle} profile image`}
              className="rounded-full"
            />
          </a>
        </Link>
      </div>

      <h5
        className={`mr-2 font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]`}
      >
        {handle}
      </h5>

      <h5 className="block h-[6px] w-[6px] rounded-full bg-white mr-2 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]"></h5>

      <button
        onClick={() => console.log("I was clicked")}
        className={`mr-2 pointernone`}
      >
        <h5 className="font-bold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          Follow
        </h5>
      </button>
    </div>
  );
};

export default Name;
