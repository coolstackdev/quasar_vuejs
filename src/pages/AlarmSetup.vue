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
                  :selected="Sensors"
                  :options="options"
                >
                </q-select>
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6">
                <q-checkbox
                  v-model="setting.alarm1"
                  :label="$t('M_ALARMS_STR') + 1"
                  class="fontsize-16"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="setting.out1"
                  :label="$t('W_AL_OUT_STR') + 1"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6 ">
                <q-checkbox
                  v-model="setting.alarm2"
                  :label="$t('M_ALARMS_STR') + 2"
                  class="fontsize-20"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="setting.out2"
                  :label="$t('W_AL_OUT_STR') + 2"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxesa">
              <div class="col-6">
                <q-checkbox
                  v-model="setting.email"
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
                <input
                  type="email"
                  class="inputbox fontsize-12"
                  v-model="setting.emailText"
                  @input="onInputChange"
                  ref="input"
                  :class="{ error: hasError }"
                  @keyup.enter="enterPressed()"
                  @focus="showkeyboard = true"
                />
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
            <div class="keyboard-container">
              <input
                style="background-color:#FFF"
                type="email"
                class="inputbox fontsize-12"
                placeholder="Email"
                :value="input"
                @input="onInputChange"
                ref="input"
                :class="{ error: hasError }"
                @keyup.enter="enterPressed()"
                v-if="showkeyboard == true"
              />
              <span
                v-if="invalidEmail == true && hasError == true"
                class="invalidemail"
                >Invalid Email</span
              >
              <SimpleKeyboard
                style="background-color:#FFF;"
                @onChange="onChange"
                @onKeyPress="onKeyPress"
                :input="input"
                class="item"
                v-if="showkeyboard == true"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
import SimpleKeyboard from "../components/SimpleKeyboard";
export default {
  name: "Alarms",
  components: {
    SimpleKeyboard
  },

  data() {
    return {
      input: "",
      error: "",
      hasError: false,
      invalidEmail: false,
      showkeyboard: true,
      model: null,
      selectedname: null,
      setting: {
        alarm1: false,
        alarm2: false,
        out1: false,
        out2: false,
        email: false,
        emailText: ""
      },

      options: [
        this.$t("M_SENSORS_STR"),
        this.$t("SAM_LSEN_STR"),
        this.$t("SAM_LIMSW_STR"),
        this.$t("SAM_CAN_STR"),
        this.$t("SAM_MAX_STR"),
        this.$t("SAM_TEMP_STR")
      ]
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
    },
    isEmail(inputtxt) {
      var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (inputtxt.match(email)) {
        return true;
      } else {
        return false;
      }
    },
    onChange(input) {
      this.input = input;
      if (this.isEmail(input) === false) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    },
    onInputChange(input) {
      this.input = input.target.value;
      if (this.isEmail(this.input) === false) {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    },
    onKeyPress(button) {
      console.log("button", button);
      if (button == "{enter}") {
        if (this.hasError == true) {
          this.invalidEmail = true;
        }
        if (this.hasError == false) {
          this.showkeyboard = false;
          this.invalidEmail = false;
        }
      }
    }
  },
  watch: {
    "setting.email": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.out2": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.out1": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.alarm2": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.alarm1": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.emailText": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },

    //get setting from local storge
    model: function() {
      this.selectedname = this.model;
      this.setting = JSON.parse(localStorage.getItem(this.model));
    },

    input: function(val) {
      this.input = val;
      this.setting.emailText = val;
      this.$refs.input.focus();
    }
  },
  mounted() {
    var options = this.options;
    var setting = this.setting;
    for (var i = 0; i <= 6; i++) {
      if (!localStorage.getItem(this.options[i]) == true) {
        localStorage.setItem(options[i], JSON.stringify(setting));
      }
      if (!localStorage.getItem(this.options[i]) == false) {
        this.showkeyboard = false;
      }
    }
    this.$refs.input.focus();
  }
};
</script>
