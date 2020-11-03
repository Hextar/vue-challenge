import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1a6094",
        secondary: "#22d1ca",
        accent: "#22d1ca",
        success: "#3cd1c2",
        info: "#3cd1c2",
        warning: "#f58223",
        error: "#f83e70",
        background: colors.grey.lighten4
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});
