<template>
  <div class="CalibrationDataEditor">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CAL_EDIT_STR") }}
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
                  <span>N:</span>
                  <button class="col-1">1</button>
                  <button class="col-1">&#171;</button>
                  <button class="col-1">-</button>
                  <button class="col-1">+</button>
                  <button class="col-1">&#187;</button>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">X:</span> <span>0</span>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span>Y:</span><button class="col-3">0.0</button>
                </p>
                <p class="fontsize-18 row screen-row " style="margin-top:3px;">
                  <span class="col-3">Ignore:</span
                  ><button class="col-1">No</button>
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
              <div class="col">
                <button class="nav-button" style="float: right">
                  {{ $t("AUTO_START_STR") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
