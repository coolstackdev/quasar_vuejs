<template>
  <div>
    <div class="row container-left-right">
      <div class="col">
        <button class="nav-button">
          <i class="fa fa-chevron-left margin-right-10" aria-hidden="true"></i>
          {{ $t("string_previous") }}
        </button>
      </div>
      <div class="col" style="display: flex; justify-content: center;">
        <button class="nav-button">
          <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
          {{ $t("string_menu") }}
        </button>
      </div>
      <div class="col">
        <button class="nav-button" style="float: right">
          {{ $t("string_next") }}
          <i class="fa fa-chevron-right margin-left-10" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: "Navigation"
};
</script>
