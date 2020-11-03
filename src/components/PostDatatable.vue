<template>
  <div class="post-data-table">
      <v-card
        class="mx-auto"
        max-width="800"
        elevation="0"
        tile
    >
        <v-card-title>
            <h2 class="font-weight-bold">
                {{ title }}
            </h2>
        </v-card-title>
    </v-card>
    <v-card-text class="headline font-weight-bold text-center">
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "PostDatatable",
  props: {
    title: { type: String, default: '', required: true }
  }
};
</script>

<style lang="scss">
.post-data-table {
    //
}
</style>
