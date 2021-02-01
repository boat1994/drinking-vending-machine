<template>
  <md-card :class="getContainerClass()" @click.native="selectProduct">
    <md-card-content class="card-item__content">
      <img
        :src="require(`/assets/images/${product.image}.jpg`)"
        alt="Bottle"
        class="card-item__content__image"
      />
      <div class="card-item__content__text">{{ product.name }}</div>
      <div class="card-item__content__text">{{ product.price }} THB</div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    getContainerClass () {
      return this.product.qty ? "card-item": "card-item--out-of-stock"
    },
    selectProduct () {
      if (this.product.qty) {
        this.$store.commit("machine/selectProduct", this.product);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-item {
  cursor: pointer;
  margin: 1vw;
  background: rgba(249, 249, 249, 0.54);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  &--out-of-stock {
      @extend .card-item;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      cursor: default;
  }
  &__content {
    text-align: center;

    &__image {
      max-height: 250px;
    }
    &__text {
      font-weight: bold;
      font-size: 18px;
      line-height: 16px;
      color: #6200ee;
      text-transform: uppercase;
      margin: 10px;
    }
  }
}
</style>
