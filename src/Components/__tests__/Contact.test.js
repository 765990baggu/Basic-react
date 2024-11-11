import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Cases", () => {
  test("Should load Contact us Component", () => {
    render(<Contact />);
    //Query
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us Component", () => {
    render(<Contact />);
    //Query
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load Contact us Component", () => {
    render(<Contact />);
    //Query
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 inputboxes inside contact us Component", () => {
    render(<Contact />);
    //querying
    const inputboxes = screen.getAllByRole("textbox");
    //console.log(inputboxes.length);
    //Assertion
    expect(inputboxes.length).toBe(2);
  });
});
