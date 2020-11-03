<template>
  <section class="homepage">
    <v-container
      class="fill-height"
      fluid
      justify="center"
      align="center"
    >
      <v-row
        class="d-flow justify-center align-center"
      >
        <v-col
            class="pa-0 pa-sm-3"
            cols="12"
            sm="12"
            md="10"
            lg="6"
        >
          <PostDatatable :title="'title'" :items="items" class="pa-0 ma-0" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PostDatatable from "@/components/PostDatatable.vue";

export default {
  name: "Homepage",
  components: {
    PostDatatable
  },
  data: () => ({
      items: []
  })
}
</script>