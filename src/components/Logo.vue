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

        .logo {
            position: absolute;
            height: 128px;
            width: 112px;
            top: -16px;
            left: 16px;
            z-index: 10;

			.v-image__image {
				background-size: contain;
			}
        }

        .logo-text {
            margin-left: 144px !important;
            z-index: 9;
        }
    }
</style>
