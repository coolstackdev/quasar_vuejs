<template>
  <div class="CalculationResults">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CALC_RESULTS_STR") }}
                </p>
              </div>
              <div class="col-1"></div>
              <div class="col-11 fontsize-18">
                <p class="fontsize-18">
                  {{ $t("MATERIAL_STR") }} 5 {{ $t("EMPTY_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row text-content">
              <div class="col-1"></div>
              <div class="col-5">
                <p class="fontsize-18"><span>M:</span> 0.0000000</p>
                <p class="fontsize-18"><span>B:</span> 0.00</p>
                <p class="fontsize-18"><span>R2</span> 0.0000000</p>
              </div>
              <div class="col-5">
                <button style="float: right;">{{ $t("AH_UPDATE_STR") }}</button>
              </div>
              <div class="col-1"></div>
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
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
