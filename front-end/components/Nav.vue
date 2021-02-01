<template>
  <div class="md-layout md-gutter md-alignment-center container">
    <div class="md-layout-item md-size-25 nav-content">
      <span class="logo"> Magic<span class="logo__last">Drink</span> </span>
    </div>
    <div class="md-layout-item md-size-75">
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

export default {
  computed: {
    filters() {
      return this.$store.state.machine.filters;
    }
  },
  methods: {
    getBtnClassName(filter) {
      let className = "filter-button";
      return filter.applied ? `${className}--active` : className;
    },
    handleToggleFilter(filter) {
      this.$store.commit("machine/toggleFilter", filter.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}

.logo {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 4vw;
  margin-left: 2vw;
  color: #dadada;
  &__last {
    color: #6200ee;
  }
}

.filter-button {
  color: #6200ee;
  width: 9vw;
  height: 50px;
  border: 1px solid #dadada;
  font-size: 1rem;
  &--active {
    @extend .filter-button;
    background-color: #6200ee;
    color: #ffff;
  }
}
</style>
