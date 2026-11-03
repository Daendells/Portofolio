import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

test("leads with the role and shows the measured results as final numbers", () => {
  renderHome();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/AI systems/i);
  const stats = screen.getByLabelText("Highlights");
  // Without IntersectionObserver (tests, old browsers) numbers render at their final value.
  expect(within(stats).getByText("0.84")).toBeInTheDocument();
  expect(within(stats).getByText("98.5%")).toBeInTheDocument();
});

test("lists selected work as cards with their live demos and code", () => {
  renderHome();
  const work = screen.getByRole("region", { name: "Selected work" });
  expect(within(work).getAllByRole("article").length).toBeGreaterThanOrEqual(5);
  expect(within(work).getByRole("link", { name: /RAG assistant.*demo/i })).toHaveAttribute(
    "href",
    "https://ragakademik.streamlit.app/"
  );
  expect(within(work).getByRole("link", { name: /BISINDO.*demo/i })).toHaveAttribute(
    "href",
    "https://daendells.github.io/bisindo/"
  );
  expect(within(work).getByRole("link", { name: /forecasting.*code/i })).toHaveAttribute(
    "href",
    "https://github.com/Daendells/idx-stock-forecasting"
  );
});

test("contains no em dashes in visible text", () => {
  renderHome();
  expect(document.body.textContent).not.toMatch(/\u2014/);
});
