<template>
  <div id="logo" class="d-flex flex-row">
    <v-img class="logo" src="@/assets/logo.png" alt="vue-logo" />
    <p class="logo-text pa-0 ma-0 d-flex justify-center align-center">
        <span class="text-uppercase white--text font-weight-black">VUE</span>
        <span class="text-uppercase white--text">CHALLENGE</span>
    </p>
  </div>
</template>

<style lang="scss">
    #logo {
        position: relative;
        max-height: 48px;

        .logo {
            position: absolute;
            height: 112px;
            width: 112px;
            top: -8px;
            left: 16px;
            z-index: 10;
        }

        .logo-text {
            margin-left: calc(96px + 16px) !important;
            z-index: 9;
        }
    }
</style>
