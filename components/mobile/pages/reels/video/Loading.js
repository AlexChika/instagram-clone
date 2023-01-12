import React from "react";
import Spinner from "../../../../general/Spinner";

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Spinner stop={true} style={{ color: "white" }} />
      </div>
    );
  }
};

export default Loading;
// stop={loading ? false : true}