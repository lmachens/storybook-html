import { addDecorator, addParameters } from "@storybook/html"; // <- or your storybook framework
import { withA11y } from "@storybook/addon-a11y";
import "@storybook/addon-console";
import centered from "@storybook/addon-centered/html";

addDecorator(centered);
addDecorator(withA11y);
addParameters({
  backgrounds: [
    { name: "light", value: "#fff", default: true },
    { name: "dark", value: "#000" },
  ],
});
