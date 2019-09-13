<template>
  <q-page>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md full">
          <div class="row">
            <div class="col">
              <button class="fontsize-10">
                {{ $t("ALARM_STR") }}
              </button>
            </div>
            <div class="col">
              <p class="fontsize-12 min-line">{{ $t("FIRST_STR") }}</p>
              <p class="fontsize-12 min-line">{{ $t("LAST_STR") }}</p>
              <p class="fontsize-12 min-line">{{ $t("MEAN_STR") }}</p>
            </div>
            <div class="col">
              <p class="fontsize-12 min-line">{{ $t("RPT_STD_STR") }}</p>
            </div>
            <div class="col">
              <button
                class="fontsize-10"
                style="float: right; margin-right: 10px"
              >
                {{ $t("W_BTN_CLEAR_STR") }}
              </button>
            </div>
          </div>

          <div class="row ">
            <div class="col socket">
              <div id="chart" ref="barchart"></div>
            </div>
          </div>

          <div class="row">
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
              <button class="nav-button" @click="mainmenu">
                <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
                {{ $t("MENU_STR") }}
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
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  name: "Home3",
  methods: {
    mainmenu() {
      this.$router.push({ path: "/main" });
    }
  },
  mounted() {
    var i;

    this.options.xaxis.categories.push("<");
    this.series[0].data.push(0);
    for (i = 5; i <= 26; i++) {
      this.options.xaxis.categories.push(i);
      this.series[0].data.push(i);
    }
    this.options.xaxis.categories.push(">");
    this.series[0].data.push(0);

    new ApexCharts(this.$refs.barchart, {
      ...this.options,
      series: this.series
    }).render();
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
          type: "bar",
          width: 768,
          height: 270
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          data: []
        }
      ]
    };
  }
};
</script>
