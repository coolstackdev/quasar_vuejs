<template>
  <div class="row container-left-right nav-bar">
    <div class="col">
      <PrevButton />
    </div>
    <div class="col" style="display: flex; justify-content: center;">
      <MenuButton />
    </div>
    <div class="col">
      <NextButton v-bind:path="next" />
    </div>
  </div>
</template>

<style scoped></style>

<script>
import PrevButton from "../components/PrevButton";
import MenuButton from "../components/MenuButton";
import NextButton from "../components/NextButton";
export default {
  name: "NavigationBar",
  components: {
    PrevButton,
    MenuButton,
    NextButton
  },
  props: ["next"]
};
</script>
