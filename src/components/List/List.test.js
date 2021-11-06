import { render } from "@testing-library/react";
import List from "./List";

describe("Given a List component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<List />);
    });
  });
});
