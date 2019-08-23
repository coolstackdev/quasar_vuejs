<template>
  <div>
    <div class="row container-left-right">
      <div class="col">
        <a href="#" class="hollow button width-112">
          <i class="fa fa-chevron-left margin-right-10" aria-hidden="true"></i>
          {{$t('button_previous')}}
        </a>
      </div>
      <div class="col" style="display: flex; justify-content: center;">
        <a href="#" class="hollow button width-112">
          <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
          {{$t('button_menu')}}
        </a>
      </div>
      <div class="col">
        <a href="#" class="hollow button width-112" style="float: right">
          {{$t('button_next')}}
          <i class="fa fa-chevron-right margin-left-10" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-left-right {
  margin: 0 15px;
}
</style>

<script>
export default {
  name: "Navigation"
};
</script>
