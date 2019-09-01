<template>
  <q-page class="fixed-padding">
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row screen-row">
            <div class="col-2"></div>
            <div class="col-10">
              <p class="fontsize-20">
                {{ $t("string_alarm_history_log") }}
              </p>
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_time") }}
              </p>
            </div>
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_desc") }}
              </p>
            </div>
            <div class="col-4">
              <button style="float: right;">
                {{ $t("string_update") }}
              </button>
            </div>
          </div>

          <div class="row screen-row alram-content">
            <p class="fontsize-12" v-for="item in alarms" :key="item.id">
              {{ item.timestamp }}&nbsp;{{ item.message }}
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
        <div class="col">
          <button class="nav-button" style="float: right">
            {{ $t("string_next") }}
            <i
              class="fa fa-chevron-right margin-left-10"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.fixed-padding {
  padding: 0;
}

.q-pa-md {
  padding: 0;
}

.alram-content {
  border-top: solid;
  display: block;
}

@media only screen and (max-width: 800px) {
  .alram-content {
    border-top: none;
  }
}

p {
  padding-left: 10px;
}

.screen-row {
  margin: 5px 0;
}
</style>

<script>
export default {
  name: "Alarms",
  data() {
    return {
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
        }
      ]
    };
  }
};
</script>
