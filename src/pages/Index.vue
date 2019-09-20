<template>
  <div class="Index">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">              
               <AlarmButton />
              </div>
              <div class="col-8">
                <button class="clear">
                  <p class="fontsize-16">
                    <span @click='material'>{{ $t("MATERIAL_STR") }}</span>
                    {{ $t("EMPTY_STR") }}
                  </p>
                  <!-- <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i> -->
                </button>
              </div>
            </div>

            <div class="row">
              <div style="text-align: center; width: 100%;">
                <button class="blue dash fontsize-16">
                  <a href="#"><i class="fa fa-tint" aria-hidden="true" style="margin-right: 12px"></i></a>
                  <a id="amcid" @click="allvolt">00.0 %</a>
                </button>
                <p class="fontsize-16" style="margin-top: 5px;" @click="markers">
                  {{ $t("MARKH2_STR") }}
                </p>
                <p class="fontsize-10" style="margin-top: 5px;">
                  {{ $t("CHAIN_STR") }} :
                  {{ $t("RUN_STR") }}
                </p>
                <p class="fontsize-10">
                  {{ $t("LSEN_STR") }} :
                  {{ $t("TGL_OFF_STR") }}
                </p>
              </div>
            </div>

            <NavigationBar v-bind:next="next" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import AlarmButton from "../components/AlarmButton";
  import NavigationBar from "../components/NavigationBar";
  export default {
    name: "Index",
    components: {
      AlarmButton,
      NavigationBar,
    },
    data: function () {
      return {
        next: "/home2",
      }
    },
    methods: {
      material() {
        this.$router.push({ path: '/material' });
      },
      allvolt() {
        this.$router.push({ path: '/allvolt' });
      },
      markers() {
        this.$router.push({ path: '/markers' });
      },
    },
  };
</script>
