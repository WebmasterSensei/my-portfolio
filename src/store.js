// store.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    likeCount: 0,
    isLiked: false,
  },
  mutations: {
    toggleLike(state) {
      state.isLiked = !state.isLiked;
      state.likeCount += state.isLiked ? 1 : -1;
    },
    setLikeCount(state, likeCount) {
      state.likeCount = likeCount;
    },
  },
});
