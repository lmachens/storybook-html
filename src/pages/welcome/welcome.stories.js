import "./welcome.css";
import welcome from "./welcome.html";

export default {
    title: "Pages/Welcome",
    parameters: {
        notes: 'some documentation here',
    }
};

export const basic = () => welcome;

export const Large = basic.bind({});
Large.parameters = {
    controls: { hideNoControlsWarning: true },
};
