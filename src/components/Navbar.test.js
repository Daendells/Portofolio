import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./Navbar";

test("shows the name as the home link and the main sections", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(screen.getByRole("link", { name: "Davin Jonathan Tanus" })).toHaveAttribute("href", "/");
  for (const name of ["Work", "About", "Credentials", "CV"]) {
    expect(screen.getByRole("link", { name })).toBeInTheDocument();
  }
  expect(screen.queryByRole("button", { name: /dark mode/i })).not.toBeInTheDocument();
});
