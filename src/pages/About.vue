<template>
  <q-page class="fixed-padding">
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row" style="margin-bottom: 1em;">
            <div class="col">
              <p class="fontsize-24">
                {{ $t("string_about") }}
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-5 left-label">
              <p class="fontsize-20">{{ $t("string_model") }}:&nbsp;</p>
            </div>
            <div class="col-7">
              <p class="fontsize-20">&nbsp;{{ $t("string_omega") }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-5 left-label">
              <p class="fontsize-20">{{ $t("string_version") }}:&nbsp;</p>
            </div>
            <div class="col-7">
              <p class="fontsize-20">&nbsp;{{ version }}</p>
            </div>
          </div>

          <div class="row row-column">
            <p class="fontsize-20">
              {{ $t("string_aboutus") }}
            </p>
            <p class="fontsize-20">
              {{ $t("string_phonenumber") }}
            </p>
            <p class="fontsize-12">
              {{ $t("string_url") }}
            </p>
          </div>
        </div>
      </div>

      <div class="row container-left-right">
        <div class="col">
          <button class="nav-button">
            <i
              class="fa fa-chevron-left margin-right-10"
              aria-hidden="true"
            ></i>
            {{ $t("string_previous") }}
          </button>
        </div>
        <div class="col" style="display: flex; justify-content: center;">
          <button class="nav-button">
            <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
            {{ $t("string_home") }}
          </button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.fixed-padding {
  padding: 16px;
}

.left-label {
  text-align: right;
}

.row-column {
  display: block;
  text-align: center;
  margin-top: 3em;
}
</style>

<script>
export default {
  name: "About",
  data() {
    return {
      version: "05.28"
    };
  }
};
</script>
