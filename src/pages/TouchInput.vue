<template>
  <q-page padding>
    <div class="screen">
      <div class="available_area">
        <input
          :value="input"
          class="inputbox"
          @input="onInputChange"
          :placeholder="$t('string_tap_to')"
          ref="input"
        />
        <p v-if="error" class="error">Please input valid integer value.</p>
      </div>
      <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input" />
    </div>
  </q-page>
</template>

<style scoped>
.available_area {
  padding: 20px;
  width: 100%;
  height: 170px;
  max-height: 170px;
  font-size: 24px;
}

.error {
  color: red;
  border-top: solid;
}

.inputbox {
  width: 100%;
  resize: none;
  box-shadow: none;
  box-sizing: border-box;
  /* background: transparent; */
}

.inputbox:focus {
  outline: none;
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
    input: "",
    error: false
  }),
  mounted() {
    this.$refs.input.focus();
  },
  watch: {
    input: function(val) {
      this.input = val;
      console.log("sd");
      this.$refs.input.focus();
    }
  },
  methods: {
    allnumeric(inputtxt) {
      var numbers = /^[0-9]+$/;
      if (inputtxt.match(numbers)) {
        return true;
      } else {
        return false;
      }
    },
    onChange(input) {
      this.input = input;
      if (this.allnumeric(input) === false) {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
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
