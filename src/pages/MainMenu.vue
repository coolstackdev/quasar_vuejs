<template>
  <q-page>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row content-row">
            <div class="col-4"></div>
            <div class="col-8">
              <button class="clear">
                <p class="fontsize-20">
                  {{ $t("string_mainmenu") }}
                </p>
              </button>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-6 left-menu-button">
              <button class="menu-button">
                {{ $t("string_markers") }}
              </button>
            </div>
            <div class="col-6">
              <button class="menu-button">
                {{ $t("string_material") }}
              </button>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-6 left-menu-button">
              <button class="menu-button">
                {{ $t("string_sensors") }}
              </button>
            </div>
            <div class="col-6">
              <button class="menu-button">
                {{ $t("string_options") }}
              </button>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-6 left-menu-button">
              <button class="menu-button">
                {{ $t("string_colibrate") }}
              </button>
            </div>
            <div class="col-6">
              <button class="menu-button">
                {{ $t("string_alarms") }}
              </button>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-6 left-menu-button">
              <button class="menu-button">
                {{ $t("string_system") }}
              </button>
            </div>
            <div class="col-6">
              <button class="menu-button">
                {{ $t("string_report") }}
              </button>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-6 left-menu-button">
              <button class="menu-button">
                {{ $t("string_version") }}
              </button>
            </div>
            <div class="col-6">
              <button class="menu-button">
                {{ $t("string_language") }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row container-left-right">
        <div class="col"></div>
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
.content-row {
  height: 16.66%;
}

.menu-button {
  width: 70%;
  margin: 0 0.4em 0 0.4em;
}

.left-menu-button {
  text-align: right;
}
</style>

<script>
export default {
  name: "MainMenu"
};
</script>
