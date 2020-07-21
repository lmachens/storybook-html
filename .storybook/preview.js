import { addDecorator } from "@storybook/html"; // <- or your storybook framework
import { withA11y } from "@storybook/addon-a11y";
import "@storybook/addon-console";
import centered from "@storybook/addon-centered/html";
import "../src/global.css";

addDecorator(centered);
addDecorator(withA11y);
