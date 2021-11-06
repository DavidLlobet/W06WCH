import { render, screen } from "@testing-library/react";
import UpdateForm from "./UpdateForm";

describe("Given a UpdateForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form", () => {
      render(<UpdateForm />);
      const elementForm = screen.getByRole("button", { name: /update/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
