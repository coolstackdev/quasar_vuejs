<template>
  <q-page padding>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md full">
          <div class="row">
            <div class="col">Sensors</div>
            <div class="col">Volts</div>
          </div>

          <div class="row">
            <div class="col">
              <a href="#" class="hollow button width-112" style="float: right">Zero</a>
            </div>
            <div class="col"></div>
          </div>

          <div class="row">
            <div class="col">
              <div v-for="sensor in leftRow" v-bind:key="sensor.id">
                {{sensor.id}}: {{toFloat2(sensor.voltage)}}
                <p v-if="sensor.isAlarm" class="alarm">Alarm</p>
              </div>
            </div>

            <div class="col">
              <div v-for="sensor in rightRow" v-bind:key="sensor.id">
                {{sensor.id}}: {{toFloat2(sensor.voltage)}}
                <p v-if="sensor.isAlarm" class="alarm">Alarm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  </q-page>
</template>

<style lang="css" scoped>
.screen {
  outline: solid;
  outline-width: 20px;
  width: 600px !important;
  margin: 0 auto;
}

.alarm {
  font-size: 13px;
  line-height: 0;
  position: absolute;
}

.content {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default {
  name: "PageIndex",
  components: {
    Navigation
  },
  methods: {
    toFloat2(val) {
      var num = val;
      if (typeof val === "string") {
        num = parseFloat(val);
      }

      return num.toFixed(2);
    }
  },
  computed: {
    leftRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id <= 4;
      });
    },
    rightRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id > 4;
      });
    }
  },
  data() {
    return {
      sensors: [
        {
          id: 1,
          voltage: 0,
          isAlarm: true
        },
        {
          id: 2,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 3,
          voltage: 12.03,
          isAlarm: false
        },
        {
          id: 4,
          voltage: 0,
          isAlarm: true
        },
        {
          id: 5,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 6,
          voltage: 1.8,
          isAlarm: true
        },
        {
          id: 7,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 8,
          voltage: 0,
          isAlarm: false
        }
      ]
    };
  }
};
</script>
