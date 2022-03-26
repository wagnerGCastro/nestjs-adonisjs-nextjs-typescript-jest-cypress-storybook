import renderer from "react-test-renderer";
import Button from "@/components/ui/button-test";

it("renders correctly", () => {
  const tree = renderer.create(<Button text="Some Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
