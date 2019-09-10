<template>
  <div class="Alarms">
    <q-page class="fixed-padding ">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-4">
                <p class="fontsize-18">
                  {{ $t("ALARMS_STR") }}
                </p>
              </div>
              <div class="col-7 fontsize-18">
                <button style="float: right;">
                  {{ $t("AL_RESET_STR") }}
                </button>
              </div>
              <div class="col-1"></div>
            </div>

            <div class="row screen-row">
              <div class="col-5">
                <p class="fontsize-18">
                  {{ $t("AL_ACTIVE_STR") }}
                </p>
              </div>
              <div class="col-5">
                <p class="fontsize-18">
                  {{ $t("VIEW_LOG_STR") }}
                </p>
              </div>
              <div class="col-1">
                <button style="width: 100%; height: 100%;"></button>
              </div>
              <div class="col-1"></div>
            </div>
            <div class="row screen-row alram-content">
              <p class="fontsize-14" v-for="item in alarms" :key="item">
                {{ item }}
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
  name: "Alarms",
  data() {
    return {
      alarms: ["CAN Bus Error", "Max Alarm Count"]
    };
  }
};
</script>
