import { addParameters } from "@storybook/html"; // <- or your storybook framework
import "@storybook/addon-console";
import "../src/global.css";

addParameters({
  a11y: {
    config: {},
    options: {},
  },
  layout: "fullscreen",
});
