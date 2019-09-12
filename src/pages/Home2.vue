<template>
  <div class="Home2">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <button class="alert">
                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                  {{ $t("ALARMS_STR") }}
                </button>
              </div>
              <div class="col-8">
                <button class="clear">
                  <p class="fontsize-18">
                    {{ $t("MATERIAL_STR") }}
                    {{ $t("EMPTY_STR") }}
                  </p>
                  <!-- <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i> -->
                </button>
              </div>
            </div>

            <div class="row">
              <div style="text-align: center; width: 100%;">
                <p class="fontsize-12">{{ $t("LAST_BD_STR") }}</p>
                <p class="fontsize-12">{{ $t("MKL_PEAK_STR") }}</p>
                <div class="row">
                  <div class="col-5"></div>
                  <button class="dash col-2">
                    <a href="#"><i class="fa fa-tint" aria-hidden="true" style="margin-right: 12px"></i></a>
                    <a id="avgavgid" style="color: black">00.0 %</a>
                  </button>
                </div>
                <p class="fontsize-12">{{ $t("AVGH2_STR") }}</p>
                <div class="row">
                  <div class="col-5"></div>
                  <button class="dash col-2">
                    <a href="#"><i class="fa fa-tint" aria-hidden="true" style="margin-right: 12px"></i></a>
                    <a id="peakavgid" style="color: black">00.0 %</a>
                  </button>
                </div>
                <p class="fontsize-12">
                  {{
                    $t("MARKH2_STR")
                  }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
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
                <button class="nav-button" @click="mainmenu">
                  <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
                  {{ $t("MENU_STR") }}
                </button>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right">
                  {{ $t("NEXT_STR") }}
                  <i
                    class="fa fa-chevron-right margin-left-10"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: "Home2",
  methods: {
    mainmenu() {
      this.$router.push({ path: "/main" });
    }
  }
};
</script>
