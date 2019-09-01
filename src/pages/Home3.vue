<template>
  <q-page padding>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md full">
          <div class="row">
            <div class="col">
              <button>
                {{ $t("string_alarm") }}
              </button>
            </div>
            <div class="col">
              <p class="fontsize-12 min-line">{{ $t("string_first") }}:</p>
              <p class="fontsize-12 min-line">{{ $t("string_last") }}:</p>
              <p class="fontsize-12 min-line">{{ $t("string_mean") }}:</p>
            </div>
            <div class="col">
              <p class="fontsize-12 min-line"></p>
              <p class="fontsize-12 min-line"></p>
              <p class="fontsize-12 min-line">{{ $t("string_STD") }}:</p>
            </div>
            <div class="col">
              <button style="float: right">{{ $t("string_clear") }}</button>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div id="chart" ref="barchart"></div>
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
            {{ $t("string_previous") }}
          </button>
        </div>
        <div class="col" style="display: flex; justify-content: center;">
          <button class="nav-button">
            <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
            {{ $t("string_menu") }}
          </button>
        </div>
        <div class="col">
          <button class="nav-button" style="float: right">
            {{ $t("string_next") }}
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

<style scoped></style>

<script>
import ApexCharts from "apexcharts";

export default {
  name: "Home3",
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
          type: "bar"
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
