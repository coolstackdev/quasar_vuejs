<template>
  <div class="about">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row" style="margin-bottom: 5px;">
              <div class="col">
                <p class="fontsize-20">
                  {{ $t("ABOUT_STR") }}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-5 left-label">
                <p class="fontsize-16">{{ $t("ABT_MODEL_STR") }}&nbsp;</p>
              </div>
              <div class="col-7">
                <p class="fontsize-16">&nbsp;{{ $t("string_omega") }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-5 left-label">
                <p class="fontsize-16">{{ $t("ABT_VER_STR") }}&nbsp;</p>
              </div>
              <div class="col-7">
                <p class="fontsize-16">&nbsp;{{ version }}</p>
              </div>
            </div>

            <div class="row row-column">
              <p class="fontsize-14">
                {{ $t("string_aboutus") }}
              </p>
              <p class="fontsize-14">
                {{ $t("string_phonenumber") }}
              </p>
              <p class="fontsize-12">
                {{ $t("string_url") }}
              </p>
            </div>
            <div class="row container-left-right nav-bar">
              <div class="col">
                <button class="nav-button">
                  <i
                    class="fa fa-chevron-left margin-right-10"
                    aria-hidden="true"
                  ></i>
                  {{ $t("PREV_STR") }}
                </button>
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <button class="nav-button">
                  <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
                  {{ $t("W_HOME_STR") }}
                </button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

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
