<template>
  <v-footer id="footer" class="pa-0 ma-0" dark fixed>
    <v-card class="flex" flat tile>
      <v-row class="py-2 text-center text-uppercase">
        <v-col class="grey--text">
          &copy; {{ new Date().getFullYear() }} —
          <span class="font-weight-black">VUE</span>
          <span>CHALLENGE</span>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<style lang="scss">
    #footer {
        //
    }
</style>
