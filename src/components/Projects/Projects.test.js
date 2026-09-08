import { fireEvent, render, screen, within } from "@testing-library/react";
import Projects from "./Projects";

jest.mock("../Particle", () => function ParticleMock() {
  return <div data-testid="particle-background" />;
});

test("combines machine-learning work with the selected projects collection", () => {
  render(<Projects />);

  expect(
    screen.getByRole("heading", { name: "Internship Work" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 2, name: "Selected Projects" })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Machine Learning" })
  ).not.toBeInTheDocument();
});

test("opens image previews and keeps the retired GCP project GitHub-only", () => {
  render(<Projects />);

  const privateCard = screen
    .getByText("Intelligent Document Verification Platform")
    .closest(".project-card-view");
  const conduitCard = screen
    .getByText(/Conduit.*Full CI\/CD Pipeline on GCP/i)
    .closest(".project-card-view");
  const ragCard = screen
    .getByText(/RAG Akademik.*AI Chatbot Peraturan Kampus/i)
    .closest(".project-card-view");

  expect(
    within(privateCard).queryByRole("button", { name: "Demo" })
  ).not.toBeInTheDocument();
  expect(within(conduitCard).getByRole("button", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Daendells/Conduit-CI-CD"
  );
  expect(within(conduitCard).queryByRole("button", { name: "Demo" })).not.toBeInTheDocument();
  expect(within(ragCard).getByRole("button", { name: "Demo" })).toHaveAttribute(
    "href",
    "https://ragakademik.streamlit.app/"
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: "Preview Multi-Class Image Classification with Transfer Learning",
    })
  );

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(
    within(screen.getByRole("dialog")).getByAltText(
      "Multi-Class Image Classification with Transfer Learning preview"
    )
  ).toBeInTheDocument();
});
