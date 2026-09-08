import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => function ParticleMock() {
  return <div data-testid="particle-background" />;
});

jest.mock("./components/ScrollToTop", () => function ScrollToTopMock() {
  return null;
});

test("renders Davin's portfolio navigation", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /credentials/i })).toBeInTheDocument();
});
