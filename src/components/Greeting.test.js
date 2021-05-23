import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..not

    //Assert
    const titleElement = screen.getByText(/Hello World/i, { exact: false });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    // const button = screen.qu
    const textElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const textElement = screen.getByText("Changed!", { exact: true });
    expect(textElement).toBeInTheDocument();
  });

  test("does not renders good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const textElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
