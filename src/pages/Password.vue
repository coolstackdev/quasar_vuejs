<template>
  <div class="Password">
    <q-page>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row content-row">
              <div class="col-12 align-center">
                <p class="fontsize-14">
                  {{ $t("SUPLOGIN_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">{{ $t("PASSWORD_STR") }}</p>
              </div>
              <div class="col-8">
                <input type="password" class="inputbox fontsize-14" />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-12 align-center">
                <p class="fontsize-14">
                  {{ $t("CHANGEPASS_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("OLDPASS_STR") }}
                </p>
              </div>
              <div class="col-8">
                <input type="password" class="inputbox fontsize-14" />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("New Pass") }}
                </p>
              </div>
              <div class="col-8">
                <input type="password" class="inputbox fontsize-14" />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("CONFIRM_STR") }}
                </p>
              </div>
              <div class="col-8">
                <input type="password" class="inputbox fontsize-14" />
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <button class="nav-button">
                  <i
                    class="fa fa-chevron-left margin-right-10"
                    aria-hidden="true"
                  ></i>
                  {{ $t("PLOGIN_STR") }}
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
                  {{ $t("CHANGE_STR") }}
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

<script>
export default {
  name: "Password"
};
</script>
