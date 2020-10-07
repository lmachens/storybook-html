import "./avatar.css";
import avatar from "./avatar.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Avatar", decorators: [centered] };

export const dog = () => avatar;
