// declaring action types
const FULLSCREEN = "FULLSCREEN";
const PLAY = "PLAY";
const SHOW_BUTTONS = "SHOW_BUTTONS";
const LIKED = "LIKED";
const LIKES = "LIKES";
const COMMENTS = "COMMENTS";

// writting actions exp
function fullscreen(d) {
  if (!d) throw new Error("dispatch function is required");
  d({ type: FULLSCREEN });
}

function play(d, video) {
  if (!d) throw new Error("dispatch function is required");

  if (!video) return;

  if (video.paused) {
    video.dataset.stop = "";
    video.play();
    d({ type: PLAY, payload: true });
  } else {
    video.pause();
    video.dataset.stop = "true";
    d({ type: PLAY, payload: false });
  }
}

function showButtons(d, load) {
  if (!d) throw new Error("dispatch function is required");
  d({ type: SHOW_BUTTONS, payload: load });
}

function liked(d) {
  if (!d) throw new Error("dispatch function is required");
  d({ type: LIKED });
}

function likes(d, load) {
  if (!d) throw new Error("dispatch function is required");
  d({ type: LIKES, payload: load });
}

function comments(d, load) {
  if (!d) throw new Error("dispatch function is required");
  d({ type: COMMENTS, payload: load });
}

export const a = {
  fullscreen,
  play,
  showButtons,
  liked,
  likes,
  comments,
};

function reducer(state, action) {
  // .....fullscreen
  if (action.type === FULLSCREEN) {
    return {
      ...state,
      fullscreen: !state.fullscreen,
    };
  }

  // ....play
  if (action.type === PLAY) {
    return {
      ...state,
      play: action.payload,
    };
  }

  // ....show_buttons
  if (action.type === SHOW_BUTTONS) {
    return {
      ...state,
      showBtns: action.payload,
    };
  }

  // ......Liked
  if (action.type === LIKED) {
    return {
      ...state,
      liked: !state.liked,
    };
  }

  // ......likes
  if (action.type === LIKES) {
    return {
      ...state,
      likes: action.payload,
    };
  }

  // ......comments
  if (action.type === COMMENTS) {
    return {
      ...state,
      comments: action.payload,
    };
  }
}

export default reducer;
