<template>  
  <div class="col">
    <button v-bind:class="buttonclass" v-bind:style="customStyle" @click="link">
      <i
         v-show="left"
         class="fa margin-right-10"
         v-bind:class="iconclass"
         aria-hidden="true"></i>
      {{ label }}
      <i
         v-show="right"
         class="fa margin-left-10"
         v-bind:class="iconclass"
         aria-hidden="true"></i>
    </button>
  </div>    
</template>

<script>
export default {
    name: "LinkButton",
    props: ["buttonclass", "iconclass", "left", "right", "label", "path", "customStyle"],
    methods: {
      link() {
        this.$router.push({ path: this.path });
      },
    },
};
</script>
