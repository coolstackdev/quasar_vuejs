<template>
  <div class="ClibrationDataEntry">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CAL_ENTRY_STR") }}
                </p>
              </div>
              <div class="col-1"></div>
              <div class="col-11 fontsize-18">
                <p class="fontsize-18">
                  1 OAK
                </p>
              </div>
            </div>

            <div class="row screen-row text-content">
              <div class="col-1"></div>
              <div class="col-11">
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">N:</span>
                  <span class="col-4">1</span>
                  <button class="col-4">{{ $t("CLEAR_ALL_STR") }}</button>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-1">X:</span>
                  <span class="col-4">-406</span>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-1">Y:</span
                  ><button class="col-3">0.0</button>
                  <span class="col-2"></span>
                  <button class="col-4">{{ $t("W_CALCULATE_STR") }}</button>
                </p>
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
                <button class="nav-button">
                  <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
                  {{ $t("W_HOME_STR") }}
                </button>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right">
                  {{ $t("EDIT_BTN_STR") }}
                  <!-- <i
                    class="fa fa-chevron-right margin-left-10"
                    aria-hidden="true"
                  ></i> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
