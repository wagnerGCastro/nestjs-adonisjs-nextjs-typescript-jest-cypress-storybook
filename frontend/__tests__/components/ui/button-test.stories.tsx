import { storiesOf } from "@storybook/react";
import Button from "../../../src/components/ui/button-test";

storiesOf("Button", module).add("with text", () => <Button text="Hello World" />);
storiesOf("Button", module).add("with emoji", () => <Button text="😀 😎 👍 💯" />);
