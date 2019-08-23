<template>
  <q-page padding>
    <div class="screen">
      <div class="content">
        <div class="small-6 medium-4 large-4 cell text-align-center padding-bottom-30-i">
          <p class="border-style-double width-250 font-size-50 margin-left-auto margin-right-auto">
            <a href="#">
              <i class="fa fa-tint" aria-hidden="true"></i>
            </a>
            <a id="amcid" href="#">00.0 %</a>
          </p>
          <p class="bold font-size-25">MARK</p>
          <p class="font-size-12 margin-bottom-0-i">Chain: Run</p>
          <p class="font-size-12">LSen: Off</p>
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
