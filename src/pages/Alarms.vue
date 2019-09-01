<template>
  <q-page class="fixed-padding">
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row screen-row">
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_alarms") }}
              </p>
            </div>
            <div class="col-7">
              <button style="float: right;">
                {{ $t("string_reset") }}
              </button>
            </div>
            <div class="col-1"></div>
          </div>

          <div class="row screen-row">
            <div class="col-5">
              <p class="fontsize-20">
                {{ $t("string_active") }}
              </p>
            </div>
            <div class="col-5">
              <p class="fontsize-20">
                {{ $t("string_view_log") }}
              </p>
            </div>
            <div class="col-1">
              <button style="width: 100%; height: 100%;"></button>
            </div>
            <div class="col-1"></div>
          </div>

          <div class="row screen-row alram-content">
            <p class="fontsize-18" v-for="item in alarms" :key="item">
              {{ item }}
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
      alarms: ["CAN Bus Error", "Max Alarm Count"]
    };
  }
};
</script>
