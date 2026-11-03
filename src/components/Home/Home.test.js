import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

test("leads with the role and measured results instead of a typewriter", () => {
  renderHome();
  expect(screen.getByRole("heading", { level: 1, name: /Davin Jonathan Tanus/i })).toBeInTheDocument();
  const stats = screen.getByLabelText("Highlights");
  expect(within(stats).getByText("0.84")).toBeInTheDocument();
  expect(within(stats).getByText("98.5%")).toBeInTheDocument();
  expect(document.querySelector(".Typewriter")).toBeNull();
});

test("features three projects with their live demos", () => {
  renderHome();
  const featured = screen.getByRole("region", { name: "Featured projects" });
  expect(within(featured).getAllByRole("article")).toHaveLength(3);
  expect(within(featured).getByRole("link", { name: /RAG Academic Assistant.*demo/i })).toHaveAttribute(
    "href",
    "https://ragakademik.streamlit.app/"
  );
  expect(within(featured).getByRole("link", { name: /BISINDO.*demo/i })).toHaveAttribute(
    "href",
    "https://daendells.github.io/bisindo/"
  );
});
