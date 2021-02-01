<template>
  <div class="container">
    <div class="md-layout md-gutter">
      <div
        v-for="product in products"
        :key="product.id"
        class="md-layout-item md-xlarge-size-25 md-medium-size-25 md-large-size-25 md-xsmall-size-25"
      >
        <product :product="product" />
      </div>
    </div>
    <selected-product/>
  </div>
</template>

<script>
import Vue from "vue";
import Product from "@/components/Product";
import SelectedProduct from "@/components/SelectedProduct";

Vue.use(Product);
Vue.use(SelectedProduct);

export default {
  components: { Product },
  layout: "machine",
  computed: {
    products() {
      return this.$store.state.machine.products.filter(
        product => product.showing
      );
    }
  }
};
</script>
