import "./typography.css";
import typography from "./typography.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Typography", decorators: [centered] };

export const headers = () => typography;
