import { render, screen } from "@testing-library/react";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form", () => {
      render(<CreateForm />);
      const elementForm = screen.getByRole("button", { name: /create/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
