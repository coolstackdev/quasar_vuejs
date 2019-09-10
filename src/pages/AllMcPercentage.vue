<template>
  <div class="AllMcPercentage">
    <q-page padding>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col">
                <p class="fontsize-18">
                  {{ $t("SENSORS_TTL_STR") }}
                </p>
              </div>
              <div class="col">
                <p class="fontsize-18">
                  {{ $t("SEN_MC_STR") }}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <button class="nav-button fontsize-12" style="float: right">
                  {{ $t("SEN_ZERO_STR") }}
                </button>
              </div>
              <div class="col"></div>
            </div>

            <div class="row">
              <div class="col">
                <div v-for="sensor in leftRow" v-bind:key="sensor.id">
                  <div class="row">
                    <div class="col-3">
                      <p class="fontsize-20">{{ sensor.id }}:</p>
                    </div>
                    <div class="col-8" style="text-align: right;">
                      <p class="fontsize-20">
                        {{ toFloat2(sensor.percentage) }}%
                      </p>
                    </div>
                    <div class="col-1" />
                  </div>
                  <p v-if="sensor.isAlarm" class="fontsize-8 alarm">
                    {{ $t("ALARM_STR") }}
                  </p>
                </div>
              </div>

              <div class="col">
                <div v-for="sensor in rightRow" v-bind:key="sensor.id">
                  <div class="row">
                    <div class="col-3">
                      <p class="fontsize-20">{{ sensor.id }}:</p>
                    </div>
                    <div class="col-8" style="text-align: right;">
                      <p class="fontsize-20">
                        {{ toFloat2(sensor.percentage) }}%
                      </p>
                    </div>
                    <div class="col-1" />
                  </div>
                  <p v-if="sensor.isAlarm" class="fontsize-8 alarm">
                    {{ $t("ALARM_STR") }}
                  </p>
                </div>
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
  name: "AllMc",
  methods: {
    toFloat2(val) {
      var num = val;
      if (typeof val === "string") {
        num = parseFloat(val);
      }

      return num.toFixed(2);
    },
    mainmenu() {
      this.$router.push({ path: "/main" });
    }
  },
  computed: {
    leftRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id <= 4;
      });
    },
    rightRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id > 4;
      });
    }
  },
  data() {
    return {
      sensors: [
        {
          id: 1,
          percentage: -4.5,
          isAlarm: true
        },
        {
          id: 2,
          percentage: 0,
          isAlarm: false
        },
        {
          id: 3,
          percentage: 12.03,
          isAlarm: false
        },
        {
          id: 4,
          percentage: 0,
          isAlarm: true
        },
        {
          id: 5,
          percentage: 0,
          isAlarm: false
        },
        {
          id: 6,
          percentage: 1.8,
          isAlarm: true
        },
        {
          id: 7,
          percentage: 0,
          isAlarm: false
        },
        {
          id: 8,
          percentage: 0,
          isAlarm: false
        }
      ]
    };
  }
};
</script>
