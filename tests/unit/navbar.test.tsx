import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/app/ui/Navbar";

describe("Navbar", () => {
  it("renders a heading", () => {
    render(
      <Navbar
        heading="Loïc Prosi"
        links={[
          { name: "Accueil", url: "/" },
          { name: "Projets", url: "/" }
        ]}
      />
    );
    expect(screen.getByText("Loïc Prosi"));
  });

  it("renders 'Accueil' link", () => {
    render(
      <Navbar
        heading="Loïc Prosi"
        links={[
          { name: "Accueil", url: "/" },
          { name: "Projets", url: "/" }
        ]}
      />
    );
    expect(screen.getByText("Accueil"));
  });

  it("renders 'Projets' link", () => {
    render(
      <Navbar
        heading="Loïc Prosi"
        links={[
          { name: "Accueil", url: "/" },
          { name: "Projets", url: "/" }
        ]}
      />
    );
    expect(screen.getByText("Projets"));
  });
});
