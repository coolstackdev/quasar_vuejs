<template>
  <div class="AlarmLog">
    <q-page class="fixed-padding ">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-2"></div>
              <div class="col-10">
                <p class="fontsize-16">
                  {{ $t("ALARM_HISTORY_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-4">
                <p class="fontsize-16">
                  {{ $t("AH_TIME_STR") }}
                </p>
              </div>
              <div class="col-4">
                <p class="fontsize-16">
                  {{ $t("AH_DESC_STR") }}
                </p>
              </div>
              <div class="col-4">
                <button
                  class="fontsize-12"
                  style="float: right; margin-right: 10px"
                >
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  {{ $t("AH_UPDATE_STR") }}
                </button>
              </div>
            </div>

            <div
              class="row screen-row alram-content"
              style="height:250px;"
              :class="{ overflowscroll: showScroll }"
            >
              <p class="fontsize-8" v-for="item in alarms" :key="item.id">
                {{ item.timestamp }}&nbsp;{{ item.message }}
              </p>
            </div>
            <div class="row container-left-right nav-bar">
              <div class="col">
                <button class="nav-button">
                  <i
                    class="fa fa-chevron-left margin-right-10 "
                    aria-hidden="true"
                  ></i>
                  {{ $t("PREV_STR") }}
                </button>
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <button class="nav-button" @click="home">
                  <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
                  {{ $t("W_HOME_STR") }}
                </button>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right">
                  {{ $t("CLEAR_STR") }}
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
  methods: {
    home() {
      this.$router.push({ path: "/" });
    }
  },
  data() {
    return {
      alarmsCount: null,
      showScroll: false,
      alarms: [
        {
          id: 1,
          timestamp: "01/01/2003 00:01:14",
          message: "Too Many CAN BUS Errors"
        },
        {
          id: 2,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 3,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 4,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 5,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 6,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 7,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 8,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 9,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 10,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        },
        {
          id: 11,
          timestamp: "01/01/2003 00:01:14",
          message: "CAN BUS Error 60"
        }
      ]
    };
  },
  mounted() {
    this.alarmsCount = this.alarms.length;
    if (this.alarmsCount > 10) {
      this.showScroll = true;
    }
  }
};
</script>
