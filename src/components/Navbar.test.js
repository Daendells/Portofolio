import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./Navbar";

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

test("starts light and toggles dark mode, remembering the choice", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const toggle = screen.getByRole("button", { name: /dark mode/i });
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(toggle).toHaveAttribute("aria-pressed", "false");

  fireEvent.click(toggle);
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(toggle).toHaveAttribute("aria-pressed", "true");
  expect(window.localStorage.getItem("theme")).toBe("dark");
});
