import { render, screen, within } from "@testing-library/react";
import App from "./App";

jest.mock("./components/ScrollToTop", () => function ScrollToTopMock() {
  return null;
});

test("renders Davin's portfolio navigation", () => {
  render(<App />);
  const nav = within(screen.getByRole("navigation"));
  expect(nav.getByRole("link", { name: "Projects" })).toBeInTheDocument();
  expect(nav.getByRole("link", { name: "Credentials" })).toBeInTheDocument();
});
