<template>
    <md-dialog :md-active.sync="showSelectedProduct">
      <md-dialog-content  class="md-layout md-gutter">
          <div class="md-layout-item">
              <product :product="selectedProduct" class="selected-product" />
          </div>
          <div class="md-layout-item rigth">
            <div>
                <md-button class="button--buy" @click="buy"> Buy</md-button>
            </div>
            <div>
                <md-button class="button--cancel" @click="showSelectedProduct = false"> Cancel</md-button>
            </div>
          </div>
      </md-dialog-content>
    </md-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        showSelectedProduct: false
    }),
    methods: {
        buy() {
            this.$store.commit("machine/buyProduct");
        }
    },
    watch: {
        showSelectedProduct(showSelectedProduct) {
            if (! showSelectedProduct) {
              this.$store.commit("machine/unSelectProduct");
            }
        }
    },
    computed: {
        selectedProduct() {
            const selectedProductFromStore = this.$store.state.machine.selectedProduct;
            this.showSelectedProduct = selectedProductFromStore ? true : false;
            return selectedProductFromStore;
        }
    }
}
</script>

<style lang='scss' scoped>
    .selected-product {
        width: 330px;
        height: 330px;
    }
.rigth {
    margin-top: 150px;
}
    .button {
        color: #6200ee;
        width: 9vw;
        height: 50px;
        border: 1px solid #dadada;
        font-size: 1rem;
        &--buy {
            @extend .button;
            background-color: #6200ee;
            color: #ffff;
        }
        &--cancel {
            @extend .button;
            background-color: red;
            color: #ffff;
        }
    }
</style>