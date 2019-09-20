<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12 title">
                <p class="fontsize-18 text-center">
                  {{ $t("NET_SETTINGS_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("IP_ADDR_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.ip_addr"
                  @focus="showKeyboard('ip_addr')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("NETMASK_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.netmask"
                  @focus="showKeyboard('netmask')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("NET_NETWORK_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.network"
                  @focus="showKeyboard('network')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("BROADCAST_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.broadcast"
                  @focus="showKeyboard('broadcast')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <button @click="$router.go(-1)" class="nav-button">
                  <i
                    class="fa fa-chevron-left margin-right-10"
                    aria-hidden="true"
                  ></i>
                  {{ $t("PREV_STR") }}
                </button>
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <button @click="$router.push('/')" class="nav-button">
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

            <!-- keyboard -->
            <div class="keyboard-container">
              <input
                type="text"
                class="inputbox fontsize-8"
                v-model="keyboardInput"
                v-if="isShowKeyboard"
                style="background-color:#FFF"
                :class="{ error: hasError }"
                @keyup.esc="closeKeyboards()"
              />
              <span v-if="hasError" class="invalid">{{ errorMsg }}</span>
              <SimpleKeyboard
                v-if="isShowKeyboard"
                style="background-color:#FFF;"
                :input="keyboardInput"
                @onChange="onChangeKeyboard"
                @onKeyPress="onKeyPressKeyboard"
                class="item"
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
  name: "NetworkSetting",
  components: {
    SimpleKeyboard
  },

  data() {
    return {
      errorMsg: "Invalid IP address",
      hasError: false,
      isShowKeyboard: false,
      keyboardInput: "",
      currentKeyword: "",
      input: "",

      dns: {
        ip_addr: "192.168.0.23",
        netmask: "255.255.254.0",
        network: "192.168.0.0",
        broadcast: "192.168.1.255"
      }
    };
  },
  methods: {
    // show & hide keyboard
    showKeyboard(keyword) {
      switch (keyword) {
        case "ip_addr":
          this.keyboardInput = this.dns.ip_addr;
          break;
        case "netmask":
          this.keyboardInput = this.dns.netmask;
          break;
        case "network":
          this.keyboardInput = this.dns.network;
          break;
        case "broadcast":
          this.keyboardInput = this.dns.broadcast;
          break;

        default:
          break;
      }

      this.isShowKeyboard = true;
      this.currentKeyword = keyword;
    },
    closeKeyboards() {
      if (!this.hasError) {
        this.isShowKeyboard = false;
        this.keyboardInput = "";
      }
    },

    // validation methods
    checkValidation() {
      let ipAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;

      let validationResult = this.keyboardInput.match(ipAddressRegex)
        ? true
        : false;

      return validationResult;
    },

    // keyboard event handler
    onChangeKeyboard(input) {
      this.keyboardInput = input;

      switch (this.currentKeyword) {
        case "ip_addr":
          this.dns.ip_addr = input;
          break;
        case "netmask":
          this.dns.netmask = input;
          break;
        case "network":
          this.dns.network = input;
          break;
        case "broadcast":
          this.dns.broadcast = input;
          break;

        default:
          break;
      }

      // check validation realtime
      if (this.checkValidation()) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    onKeyPressKeyboard(button) {
      if (button == "{enter}") {
        if (this.checkValidation()) {
          this.hasError = false;
          this.isShowKeyboard = false;
        } else {
          this.hasError = true;
        }
      } else if (button == "{bksp}") {
        console.log("backspace");
      }
    }
  },
  mounted() {},
  created() {
    window.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        if (!this.hasError) {
          this.closeKeyboards();
        }
      }
    });
  }
};
</script>
