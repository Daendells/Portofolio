import { fireEvent, render, screen, within } from "@testing-library/react";
import Projects from "./Projects";

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
    .getByText("Route plan verification")
    .closest(".project-card-view");
  const conduitCard = screen
    .getByText(/CI\/CD pipeline on Google Cloud/i)
    .closest(".project-card-view");
  const ragCard = screen
    .getByText(/RAG assistant for ITS/i)
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
      name: "Preview Image classification with transfer learning",
    })
  );

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(
    within(screen.getByRole("dialog")).getByAltText(
      "Image classification with transfer learning preview"
    )
  ).toBeInTheDocument();
});

test("filters selected projects by category and search query", () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole("button", { name: "Machine Learning" }));

  expect(screen.getByText(/BISINDO fingerspelling/i)).toBeInTheDocument();
  expect(screen.queryByText(/Stock Price Forecasting/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/RAG assistant for ITS/i)
  ).not.toBeInTheDocument();
  // Internship work is never affected by the selected-projects filter.
  expect(
    screen.getByText("Route plan verification")
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "All" }));
  fireEvent.change(
    screen.getByRole("searchbox", { name: "Search projects" }),
    { target: { value: "sentiment" } }
  );

  expect(
    screen.getByText("Indonesian review sentiment")
  ).toBeInTheDocument();
  expect(
    screen.queryByText(
      "Image classification with transfer learning"
    )
  ).not.toBeInTheDocument();
});

test("links the BISINDO project to its live demo and repository", () => {
  render(<Projects />);

  const card = screen
    .getByText(/BISINDO fingerspelling/i)
    .closest(".project-card-view");

  expect(within(card).getByRole("button", { name: "Demo" })).toHaveAttribute(
    "href",
    "https://daendells.github.io/bisindo/"
  );
  expect(within(card).getByRole("button", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Daendells/bisindo"
  );
});

test("links the rebuilt sentiment study to its repository instead of the old notebook", () => {
  render(<Projects />);

  const imageCard = screen
    .getByText("Image classification with transfer learning")
    .closest(".project-card-view");
  const sentimentCard = screen
    .getByText("Indonesian review sentiment")
    .closest(".project-card-view");

  expect(
    within(imageCard).getByRole("button", { name: "Training Notebook (.ipynb)" })
  ).toHaveAttribute(
    "href",
    "/assets/portfolio/machine-learning/image-classification-imagenette-notebook.ipynb"
  );
  expect(within(sentimentCard).getByRole("button", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Daendells/indonesian-review-sentiment"
  );
  expect(within(sentimentCard).queryByRole("button", { name: /Notebook/ })).not.toBeInTheDocument();
  expect(within(sentimentCard).getAllByText(/macro-F1/i).length).toBeGreaterThan(0);
});

test("lists coursework in its own section, outside the filtered selection", () => {
  render(<Projects />);

  const coursework = screen.getByRole("region", { name: "Coursework" });
  const selected = screen.getByRole("region", { name: "Selected projects" });

  expect(within(coursework).getByText(/Risk management study/)).toBeInTheDocument();
  expect(within(selected).queryByText(/Risk management study/)).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Info Systems" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Machine Learning" }));
  expect(within(coursework).getByText(/Risk management study/)).toBeInTheDocument();
});

test("shows the walk-forward forecasting study and its naive-baseline finding", () => {
  render(<Projects />);

  const card = screen.getByText(/Stock Forecasting.*Walk-Forward/i).closest(".project-card-view");
  expect(within(card).getByText(/no model beat/i)).toBeInTheDocument();
  expect(within(card).getByRole("button", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Daendells/idx-stock-forecasting"
  );
  expect(screen.queryByRole("button", { name: "Time Series" })).not.toBeInTheDocument();
});

test("drops the AI-builder AssetHub prototypes and shows the rebuilt RAG assistant", () => {
  render(<Projects />);

  expect(screen.queryByText(/AssetHub/i)).not.toBeInTheDocument();
  const ragCard = screen.getByText(/RAG assistant for ITS/i).closest(".project-card-view");
  expect(within(ragCard).getByText(/official ITS academic regulation/i)).toBeInTheDocument();
});

test("lists the fuel consumption analytics work among the internship projects", () => {
  render(<Projects />);

  const internship = screen.getByRole("region", { name: "Internship work" });
  expect(within(internship).getByText(/Fleet fuel analytics/i)).toBeInTheDocument();
  expect(within(internship).getAllByText(/SSO/).length).toBeGreaterThan(0);
});
