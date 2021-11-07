import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/test-utils";
import UpdateForm from "./UpdateForm";

describe("Given a UpdateForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form with a button update", () => {
      renderWithProviders(<UpdateForm />);
      const elementForm = screen.getByRole("button", { name: /update/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
