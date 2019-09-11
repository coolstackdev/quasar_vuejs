<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("ENC_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row " style="margin-top:30px;">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_TYPE_STR") }}</p>
              </div>
              <button class="col-2">{{ $t("TGL_QUAD_STR") }}</button>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_DIR_STR") }}</p>
              </div>
              <button class="col-1">{{ $t("TGL_CCW_STR") }}</button>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_CPI_STR") }}</p>
              </div>
              <button class="col-2">0.0</button>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-6">
                <p class="fontsize-14">{{ $t("ENC_COUNT_STR") }}</p>
              </div>
              <p class="col-2 fontsize-14">0</p>
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
                <button class="nav-button">
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
