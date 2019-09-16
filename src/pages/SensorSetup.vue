<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("SEN_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row ">
              <div class="col-1"></div>
              <div class="col-2">
                <p class="fontsize-10">{{ $t("NUMBER_SEN_STR") }}</p>
              </div>
              <button class="col-1 fontsize-10">1</button>
            </div>

            <div class="row content-row ">
              <div class="col-1"></div>
              <div class="col-2">
                <p class="fontsize-10">{{ $t("SEN_TYPE_STR") }}</p>
              </div>
              <button class="col-2 fontsize-10">21860</button>
            </div>

            <div class="text-content" style="padding:0"></div>
            <div class="row content-row">
              <div class="col-6" style="border-right:5px solid #000">
                <p class="fontsize-14">
                  <i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
                  {{ $t("SAM_TEMP_STR") }} <span> 0</span>
                </p>
                <div class="row content-row ">
                  <p class="fontsize-14 col-6">{{ $t("TEMP_ENA_STR") }}</p>
                  <button class="fontsize-10 col-4">
                    {{ $t("TGL_OFF_STR") }}
                  </button>
                </div>
              </div>

              <div class="row content-row">
                <div class="col-6">
                  <p class="fontsize-8">{{ $t("TARGET_STR") }}</p>
                  <p class="fontsize-14">0.0F</p>
                </div>
                <div class="col-6">
                  <p class="fontsize-8">{{ $t("HEAD_STR") }}</p>
                  <p class="fontsize-14">0</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" style="padding:5px;">
            <p class="fontsize-14 text-center">{{ $t("WARNING_STR") }}</p>

            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN1_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN2_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN3_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN4_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN5_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN6_STR") }}</p>
            <p class="fontsize-5 error-text">{{ $t("TEMP_WARN7_STR") }}</p>
          </div>
        </div>

        <div class="row content-row">
          <div class="col-6 ">
            <div class="row content-row">
              <button class="col-4" style="font-size:12px!important">
                {{ $t("HEAD_STR") }}
                <br />
                {{ $t("M_CALIBRATE_STR") }}
              </button>
              <p class="col-6 text-center">000</p>
            </div>
          </div>
          <div class="col-6 ">
            <div class="row content-row">
              <button class="col-5">
                {{ $t("OK_STR") }}
              </button>
              <div class="col-2"></div>
              <button class="col-5">
                {{ $t("CANCEL_STR") }}
              </button>
            </div>
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
          <div class="col"></div>
        </div>
      </div>
    </q-page>
  </div>
</template>
