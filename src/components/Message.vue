<template>
  <div>
    <!-- <button @click="toggleLike">
      {{ $store.state.isLiked ? 'Unlike' : 'Like' }}
    </button>
    <p>Global Likes: {{ $store.state.likeCount }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'MessageS',
  data() {
    return {
      liked: false,
      likeCount: 0,
      userId: null,
    };
  },
  methods: {
    toggleLike() {
      this.$store.commit('toggleLike');
    },
  },
};
</script>
<style>
.buttonlik img{
    height: 20px;
}
</style>
