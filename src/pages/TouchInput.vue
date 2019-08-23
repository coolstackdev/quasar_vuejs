<template>
  <q-page padding>
    <div class="screen">
      <textarea
        :value="input"
        class="inputbox"
        rows="5"
        @input="onInputChange"
        placeholder="Tap on the virtual keyboard to start"
      />
      <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input" />
    </div>
  </q-page>
</template>

<style lang="styl" scoped>
.inputbox {
  width: 100%;
  height: 170px;
  max-height: 170px;
  resize: none;
  padding: 20px;
  font-size: 30px;
  border: none;
  box-sizing: border-box;
  background: transparent;
}
</style>

<script>
import SimpleKeyboard from "../components/SimpleKeyboard";

export default {
  name: "TouchPage",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    input: ""
  }),
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
};
</script>
