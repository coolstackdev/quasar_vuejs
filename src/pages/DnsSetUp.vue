<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18 text-center">
                  {{ $t("DNS_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row dns">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("SEARCH_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="inputbox fontsize-14"
                  value="emacinc.com"
                />
              </div>
            </div>
            <div class="row content-row dns">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("PRI_DNS_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="inputbox fontsize-14"
                  value="10.0.2.1"
                />
              </div>
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ALT_DNS_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="inputbox fontsize-14"
                  value="0.0.0.0"
                />
              </div>
            </div>
            <div class="text-content"></div>
            <div class="row content-row dns">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ALC_EMAIL_STR") }}</p>
                <p class="fontsize-14">{{ $t("SERVER_STR") }}</p>
              </div>
              <div class="col-7">
                <input type="text" class="inputbox fontsize-14" />
              </div>
            </div>

            <div class="row content-row dns">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("EMAIL_FROM_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="inputbox fontsize-14"
                  value="apex@wanger.net"
                />
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
                  {{ $t("NEXT_STR") }}
                  <i
                    class="fa fa-chevron-right margin-left-10"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
