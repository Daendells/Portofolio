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

test("filters selected projects by category and search query", () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole("button", { name: "Time Series" }));

  expect(
    screen.getByText(/Stock Price Forecasting — Classical ML/i)
  ).toBeInTheDocument();
  expect(
    screen.queryByText(/RAG Akademik.*AI Chatbot Peraturan Kampus/i)
  ).not.toBeInTheDocument();
  // Internship work is never affected by the selected-projects filter.
  expect(
    screen.getByText("Intelligent Document Verification Platform")
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "All" }));
  fireEvent.change(
    screen.getByRole("searchbox", { name: "Search projects" }),
    { target: { value: "sentiment" } }
  );

  expect(
    screen.getByText("Indonesian App Review Sentiment Analysis")
  ).toBeInTheDocument();
  expect(
    screen.queryByText(
      "Multi-Class Image Classification with Transfer Learning"
    )
  ).not.toBeInTheDocument();
});

test("exposes the Dicoding training notebooks on the ML project cards", () => {
  render(<Projects />);

  const imageCard = screen
    .getByText("Multi-Class Image Classification with Transfer Learning")
    .closest(".project-card-view");
  const sentimentCard = screen
    .getByText("Indonesian App Review Sentiment Analysis")
    .closest(".project-card-view");

  expect(
    within(imageCard).getByRole("button", {
      name: "Training Notebook (.ipynb)",
    })
  ).toHaveAttribute(
    "href",
    "/assets/portfolio/machine-learning/image-classification-imagenette-notebook.ipynb"
  );
  expect(
    within(sentimentCard).getByRole("button", {
      name: "Training Notebook (.ipynb)",
    })
  ).toHaveAttribute(
    "href",
    "/assets/portfolio/machine-learning/sentiment-analysis-gojek-training.ipynb"
  );
});
