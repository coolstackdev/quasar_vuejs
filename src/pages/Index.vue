<template>
  <q-page padding>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md">
          <div class="row">
            <p>
              <a href="#" class="hollow alert button">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Alarm
              </a>
            </p>
            <p>
              <a href="#" class="font-size-17-i line-height-1-i clear button">
                Material 12 Empty
                <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i>
              </a>
            </p>
          </div>

          <div class="row">
            <div class="small-6 medium-4 large-4 cell text-align-center padding-bottom-30-i">
              <p
                class="border-style-double width-250 font-size-50 margin-left-auto margin-right-auto"
              >
                <a href="#">
                  <i class="fa fa-tint" aria-hidden="true"></i>
                </a>
                <a id="amcid" href="#">15.4 %</a>
              </p>
              <p class="bold font-size-25">{{$t('string_mark')}}</p>
              <p class="font-size-12 margin-bottom-0-i">{{$t('string_chain')}}</p>
              <p class="font-size-12">{{$t('string_lsen')}}</p>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  </q-page>
</template>

<style scoped>
</style>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "PageIndex",
  components: {
    Navigation
  }
};
</script>
