import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";

describe("TodoStats", () => {
  it("Should print right amount of tasks", () => {
    //Arrange
    //Act
    render(
      <TodoStats
        todos={[
          { id: 1, text: "A", completed: true },
          { id: 2, text: "B", completed: false },
          { id: 3, text: "C", completed: true },
        ]}
      />,
    );

    //Assert
    expect(screen.getByText("1 kvar av 3")).toBeInTheDocument();
  });
});
