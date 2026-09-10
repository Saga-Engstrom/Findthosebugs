import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";
import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";

describe("TodoList", () => {
  it("Should toggle the right todo", async () => {
    //Arrange
    const todos = [
      { id: 1, text: "A", completed: true },
      { id: 2, text: "B", completed: false },
      { id: 3, text: "C", completed: true },
    ];
    const user = userEvent.setup();
    const toggleTodo = vi.fn();
    const deleteTodo = vi.fn();
    const filteredTodos = todos;

    //Act
    render(<TodoStats todos={todos} />);

    render(
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />,
    );

    const checkbox = screen.getAllByRole("checkbox");

    await user.click(checkbox[0]);

    //Assert
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });
});
