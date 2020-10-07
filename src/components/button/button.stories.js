import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Button", decorators: [centered] };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
