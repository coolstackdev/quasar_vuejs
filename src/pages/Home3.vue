<template>
  <q-page padding>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md full">
          <div class="row">
            <div class="col">
              <a href="#" class="hollow button width-112">{{$t('button_alarm')}}</a>
            </div>
            <div class="col">
              <p class="sub_item">{{$t('string_first')}}:</p>
              <p class="sub_item">{{$t('string_last')}}:</p>
              <p class="sub_item">{{$t('string_mean')}}:</p>
            </div>
            <div class="col">
              <p class="sub_item"></p>
              <p class="sub_item"></p>
              <p class="sub_item">{{$t('string_STD')}}:</p>
            </div>
            <div class="col">
              <a
                href="#"
                class="hollow button width-112"
                style="float: right"
              >{{$t('button_clear')}}</a>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div id="chart" ref="barchart"></div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  </q-page>
</template>

<style scoped>
.alarm {
  font-size: 13px;
  line-height: 0;
  position: absolute;
}

.sub_item {
  font-size: 13px;
  line-height: 0;
  height: 1px;
}

.full {
  width: 100%;
  height: 100%;
  font-size: 2.5em;
  font-family: monospace;
  font-weight: bold;
}
</style>>

<script>
import Navigation from "../components/Navigation.vue";
import ApexCharts from "apexcharts";

export default {
  name: "Home3",
  components: {
    Navigation
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
          height: 280
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
