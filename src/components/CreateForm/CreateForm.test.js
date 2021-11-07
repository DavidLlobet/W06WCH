import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/test-utils";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form with a button create", () => {
      renderWithProviders(<CreateForm />);
      const elementForm = screen.getByRole("button", { name: /create/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
