import * as bootstrap from "bootstrap/dist/js/bootstrap";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bootstrap: bootstrap,
    },
  };
});
