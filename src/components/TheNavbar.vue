<template>
  <nav id="navbar">
    <v-app-bar app fixed flat color="primary">
      <router-link to="/" exact tag="button">
        <v-toolbar-title class="d-flex text-uppercase grey--text">
          <Logo :color="'blue'" :size="'small'" :align="'left'" />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="mr-2" v-if="isAuthenticated">
          <span class="white--text font-weight-bold">{{ user.name }}</span>
        </div>
        <div class="mr-2" v-else>
          <span class="white--text font-weight-bold">Guest</span>
        </div>
        <v-tooltip bottom v-if="isAuthenticated">
          <template v-slot:activator="{ on }">
            <v-btn
              class="pa-0 px-sm-3 align-center"
              color="grey"
              text
              v-on="on"
            >
              <span class="mr-1 white--text">Sign out</span>
              <v-icon class="white--text">exit_to_app</v-icon>
            </v-btn>
          </template>
          <span>Sign user out</span>
        </v-tooltip>
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on }">
            <v-btn
              class="pa-0 px-sm-3 align-center"
              color="grey"
              text
              v-on="on"
            >
              <span class="mr-1 white--text">Sign in</span>
              <v-icon class="white--text">lock_open</v-icon>
            </v-btn>
          </template>
          <span>Sign user in</span>
        </v-tooltip>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Logo from "@/components/Logo";

export default {
  name: "Navbar",

  components: {
    Logo,
  },

  methods: {
    ...mapActions([
        "storeUser"
    ])
  },

  computed: {
    ...mapGetters([
        "isAuthenticated",
        "user"
    ]),
  },
};
</script>

<style lang="scss">
    #navbar {
        img {
            max-height: 3px;
        }
    }
</style>
