describe("Given an App component", () => {
  describe("When it renders and it contains some robots in the database", () => {
    test("Then it should render a robot card", async () => {
      renderWithProviders(<App />);
    });
  });
});
