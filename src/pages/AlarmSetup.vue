<template>
  <q-page class="fixed-padding">
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row screen-row">
            <div class="col-2"></div>
            <div class="col-10">
              <p class="fontsize-20">
                {{ $t("string_alarm_configuartion") }}
              </p>
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-6">
              <p class="fontsize-16">
                {{ $t("string_system_alarm_setup") }}
              </p>
            </div>
            <div class="col-6">
              <q-select color="teal" filled v-model="model" :options="options">
              </q-select>
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-6">
              <q-checkbox
                v-model="alarm1"
                :label="$t('string_alarm') + 1"
                class="fontsize-20"
              />
            </div>
            <div class="col-6">
              <q-checkbox
                v-model="out1"
                :label="$t('string_out') + 1"
                class="fontsize-20"
              />
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-6">
              <q-checkbox
                v-model="alarm2"
                :label="$t('string_alarm') + 2"
                class="fontsize-20"
              />
            </div>
            <div class="col-6">
              <q-checkbox
                v-model="out2"
                :label="$t('string_out') + 2"
                class="fontsize-20"
              />
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-6">
              <q-checkbox
                v-model="email"
                :label="$t('string_email')"
                class="fontsize-16"
              />
            </div>
          </div>

          <div class="row screen-row alram-content">
            <div class="col-6 fontsize-16">
              <button>
                100
              </button>
              {{ $t("string_max") }}&nbsp;#
            </div>
            <div class="col-6 fontsize-16">
              <button>
                {{ $t("string_on") }}
              </button>
              {{ $t("string_enable") }}
            </div>
          </div>

          <div class="row screen-row">
            <div class="col-4">
              <p class="fontsize-20">{{ $t("string_email") }}:</p>
            </div>
            <div class="col-8">
              <input type="email" class="inputbox fontsize-20" />
            </div>
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
  padding: 0;
}

.q-pa-md {
  padding: 0;
}

.alram-content {
  border-top: solid;
  padding-top: 0.5em !important;
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
  padding: 0 0.5em;
  height: 13%;
}

.inputbox {
  width: 100%;
  resize: none;
  box-shadow: none;
  box-sizing: border-box;
  background: transparent;
  border-radius: 15px;
  padding: 1px 0.5em;
  border-color: black;
}

.inputbox:focus {
  outline: none;
}
</style>

<script>
export default {
  name: "Alarms",
  data() {
    return {
      alarm1: true,
      alarm2: false,
      out1: false,
      out2: false,
      email: false,
      model: null,
      options: [
        this.$t("string_sensors"),
        this.$t("string_light_sensor"),
        this.$t("string_limit_switch"),
        this.$t("string_can_bus"),
        this.$t("string_max_limit"),
        this.$t("string_temperature")
      ]
    };
  }
};
</script>
