<template>
    <md-card class="card-item">
        <md-card-content class="card-item__content">
        <img :src="product.image" alt="Bottle" class="card-item__content__image">
        <div class="card-item__content__text">{{product.name}}</div>
        <div class="card-item__content__text">{{product.price}} THB</div>
        </md-card-content>
    </md-card>
</template>

<script>
  export default {
      props: {
        product: Object
      },
  }

</script>

<style lang="scss" scoped>

  .container {
      padding: 0rem 4rem 1rem 4rem;
  }

  .card-item {
    margin: 1vw;
    background: rgba(249, 249, 249, 0.54);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    &__content {
      text-align: center;
      &__image {
        max-height: 250px;
      }
      &__text {
        font-weight: bold;
        font-size: 18px;
        line-height: 16px;
        color: #6200EE;
        text-transform: uppercase;
        margin: 10px
      }
    }
  }

</style>