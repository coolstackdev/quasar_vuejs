<template>
  <div class="MainMenu">
    <q-page>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md" style="padding:10px">
            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-8 text-center">
                <button class="clear">
                  <p class="fontsize-18">
                    {{ $t("MAIN_MENU_STR") }}
                  </p>
                </button>
              </div>
              <div class="col-2"></div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8" @click="markers">
                  <i class="fa fa-map-marker" aria-hidden="true"></i> {{ $t("MARK_CONFIG_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8" @click="material">
                  <i class="fa fa-tree" aria-hidden="true"></i> {{ $t("W_MATERIAL_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8" @click="sensors">
                  <i class="fa fa-podcast" aria-hidden="true"></i> {{ $t("M_SENSORS_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8" @click="options">
                  <i class="fa fa-wrench" aria-hidden="true"></i> {{ $t("OPTIONS_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8" @click="calibrate">
                  <i class="fa fa-tint" aria-hidden="true"></i> {{ $t("SEN_CAL_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8" @click="alarms">
                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{ $t("ALM_ALARMS_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8" @click="system">
                  <i class="fa fa-cogs" aria-hidden="true"></i> {{ $t("M_SYSTEM_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8" @click="report">
                  <i class="fa fa-list-alt" aria-hidden="true"></i> {{ $t("REPORT_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button ">
                <button class="menu-button fontsize-8" @click="version">
                  <i class="fa fa-file-text-o" aria-hidden="true"></i> {{ $t("M_VERSION_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8" @click="language">
                  <i class="fa fa-language" aria-hidden="true"></i> {{ $t("M_LANGUAGE_STR") }}
                </button>
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col"></div>
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
  name: "MainMenu",
  methods: {
    markers() {
      this.$router.push({ path: '/markers' });
    },
    sensors() {
      this.$router.push({ path: '/sensors' });
    },
    calibrate() {
      this.$router.push({ path: '/calibrate' });
    },
    system() {
      this.$router.push({ path: '/system' });
    },
    version() {
      this.$router.push({ path: '/about' });
    },
    material() {
      this.$router.push({ path: '/material' });
    },
    options() {
      this.$router.push({ path: '/options' });
    },
    alarms() {
      this.$router.push({ path: '/alarms' });
    },
    report() {
      this.$router.push({ path: '/report' });
    },
    language() {
      this.$router.push({ path: '/language' });
    },
    home() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
