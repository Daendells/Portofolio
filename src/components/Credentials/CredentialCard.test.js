import { fireEvent, render, screen } from "@testing-library/react";
import CredentialCard from "./CredentialCard";

test("sends certificate files to the in-page preview", () => {
  const onPreview = jest.fn();
  const credential = {
    title: "Test Certificate",
    issuer: "Test Issuer",
    issued: "2026",
    description: "A test credential.",
    skills: ["Testing"],
    files: [{ name: "View credential", link: "/certificate.pdf" }],
  };

  render(
    <CredentialCard
      credential={credential}
      type="certificate"
      onPreview={onPreview}
    />
  );

  fireEvent.click(
    screen.getByRole("button", { name: "Preview certificate" })
  );

  expect(onPreview).toHaveBeenCalledWith({
    src: "/certificate.pdf",
    title: "Test Certificate",
    type: "pdf",
  });
});
