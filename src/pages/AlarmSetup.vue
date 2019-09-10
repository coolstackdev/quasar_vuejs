<template>
  <div class="AlarmSetup">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-2"></div>
              <div class="col-10">
                <p class="fontsize-16">
                  {{ $t("ALARM_CONFIG_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-6">
                <p class="fontsize-12">
                  {{ $t("SYS_ALARM_SU_STR") }}
                </p>
              </div>
              <div class="col-6">
                <q-select
                  color="teal"
                  filled
                  v-model="model"
                  :options="options"
                >
                </q-select>
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6">
                <q-checkbox
                  v-model="alarm1"
                  :label="$t('M_ALARMS_STR') + 1"
                  class="fontsize-16"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="out1"
                  :label="$t('W_AL_OUT_STR') + 1"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6 ">
                <q-checkbox
                  v-model="alarm2"
                  :label="$t('M_ALARMS_STR') + 2"
                  class="fontsize-20"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="out2"
                  :label="$t('W_AL_OUT_STR') + 2"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxesa">
              <div class="col-6">
                <q-checkbox
                  v-model="email"
                  :label="$t('EMAIL_STR')"
                  class="fontsize-16"
                />
              </div>
            </div>

            <div class="row screen-row alram-content">
              <div class="col-6 fontsize-12">
                <button class="fontsize-8">
                  100
                </button>
                {{ $t("SAM_MAX_STR") }}&nbsp;#
              </div>
              <div class="col-6 fontsize-12">
                <button class="fontsize-8">
                  {{ $t("TGL_ON_STR") }}
                </button>
                {{ $t("ENABLE_STR") }}
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-4">
                <p class="fontsize-12">{{ $t("EMAIL_STR") }}:</p>
              </div>
              <div class="col-8">
                <input type="email" class="inputbox fontsize-12" />
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
                <button class="nav-button" @click="home">
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
  name: "Alarms",
  methods: {
    home() {
      this.$router.push({ path: "/" });
    }
  },
  data() {
    return {
      alarm1: true,
      alarm2: false,
      out1: false,
      out2: false,
      email: false,
      model: null,
      options: [
        this.$t("M_SENSORS_STR"),
        this.$t("SAM_LSEN_STR"),
        this.$t("SAM_LIMSW_STR"),
        this.$t("SAM_CAN_STR"),
        this.$t("SAM_MAX_STR"),
        this.$t("SAM_TEMP_STR")
      ]
    };
  }
};
</script>
