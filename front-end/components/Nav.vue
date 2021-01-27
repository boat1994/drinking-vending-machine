<template>
  <div class="md-layout md-gutter md-alignment-center container">
    <div class="md-layout-item md-size-20 logo">
      <span> Magic<span class="last">Drink</span> </span>
    </div>
    <div class="md-layout-item md-size-80">
      <md-button
        v-for="filter in filters"
        :key="`filter-${filter.name}`"
        :class="getBtnClassName(filter)"
        v-on:click="handleToggleFilter(filter)"
      >
        {{ filter.name }}
      </md-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    filters() {
      return this.$store.state.machine.filters;
    }
  },
  methods: {
    getBtnClassName(filter) {
      let className = "filter-button";
      return filter.applied ? `${className} active` : className;
    },
    handleToggleFilter(filter) {
      this.$store.commit("machine/toggleFilter", filter.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
.container {
  padding: 1rem;
}

.logo {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 4vw;
  color: #dadada;
}

.last {
  color: #6200ee;
}

.filter-button {
  color: #6200ee;
}

.active {
  background-color: #6200ee;
  color: #ffff;
}
</style>
