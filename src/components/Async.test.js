import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    //Arrange
    render(<Async />);
    //Action
    //..not
    //Assert
    const element = await screen.findAllByRole("listitem", {}, {});
    expect(element).not.toHaveLength(0);
  });
});
