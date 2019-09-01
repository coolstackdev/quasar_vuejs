<template>
  <q-page class="fixed-padding">
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-4">
              <button class="alert">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {{ $t("string_alarm") }}
              </button>
            </div>
            <div class="col-8">
              <button class="clear">
                <p class="fontsize-20">
                  {{ $t("string_material_12_empty") }}
                </p>
                <!-- <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i> -->
              </button>
            </div>
          </div>

          <div class="row">
            <div style="text-align: center; width: 100%;">
              <p class="fontsize-16">{{ $t("string_lastboard") }}</p>
              <p class="fontsize-16">{{ $t("string_peak") }}</p>
              <button class="dash">
                0.0
              </button>
              <p class="fontsize-16">{{ $t("string_average") }}</p>
              <button class="dash">
                0.0
              </button>
              <p class="fontsize-13">
                {{
                  $t("string_mark_")
                }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
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
            <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
            {{ $t("string_menu") }}
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
  padding: 16px;
}
</style>

<script>
export default {
  name: "Home2"
};
</script>
