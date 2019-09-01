<template>
  <q-page>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row content-row">
            <div class="col-12 align-center">
              <p class="fontsize-20">
                {{ $t("string_supervisor_login") }}
              </p>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-4">
              <p class="fontsize-20">{{ $t("string_password") }}:</p>
            </div>
            <div class="col-8">
              <input type="password" class="inputbox fontsize-20" />
            </div>
          </div>

          <div class="row content-row">
            <div class="col-12 align-center">
              <p class="fontsize-20">
                {{ $t("string_change_password") }}
              </p>
            </div>
          </div>

          <div class="row content-row">
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_old_pass") }}
              </p>
            </div>
            <div class="col-8">
              <input type="password" class="inputbox fontsize-20" />
            </div>
          </div>

          <div class="row content-row">
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_new_pass") }}
              </p>
            </div>
            <div class="col-8">
              <input type="password" class="inputbox fontsize-20" />
            </div>
          </div>

          <div class="row content-row">
            <div class="col-4">
              <p class="fontsize-20">
                {{ $t("string_confirm") }}
              </p>
            </div>
            <div class="col-8">
              <input type="password" class="inputbox fontsize-20" />
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
            {{ $t("string_login") }}
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
            {{ $t("string_change") }}
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
.align-center {
  text-align: center;
}

.content-row {
  height: 16.66%;
}

.inputbox {
  width: 100%;
  resize: none;
  box-shadow: none;
  box-sizing: border-box;
  background: transparent;
  border-radius: 15px;
  padding: 1px 0.5em;
  border-color: black;
}

.inputbox:focus {
  outline: none;
}
</style>

<script>
export default {
  name: "Password"
};
</script>
