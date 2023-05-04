import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};


export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    },
    
  },
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme
    }
  }
});