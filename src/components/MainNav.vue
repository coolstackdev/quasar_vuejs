<template>
  <div class="row container-left-right nav-bar">
    <div class="col">
      <PrevButton />
    </div>
    <div class="col" style="display: flex; justify-content: center;">
      <HomeButton />
    </div>
    <div class="col">
      <NextButton v-if="next !== ''" v-bind:path="next" />
    </div>
  </div>
</template>

<style scoped></style>

<script>
import PrevButton from "../components/PrevButton";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
export default {
  name: "NavigationBar",
  components: {
    PrevButton,
    HomeButton,
    NextButton
  },
  props: ["next"]
};
</script>
