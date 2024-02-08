import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/app/ui/Footer";

describe("Footer", () => {
  it("renders main text", () => {
    render(
      <Footer
        text="Loïc Prosi - 2024"
        link={{ name: "Code source", url: "/" }}
      />
    );
    expect(screen.getByText("Loïc Prosi - 2024"));
  });

  it("renders 'Code source' link", () => {
    render(
      <Footer
        text="Loïc Prosi - 2024"
        link={{ name: "Code source", url: "/" }}
      />
    );
    expect(screen.getByText("Code source"));
  });
});
