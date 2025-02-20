import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import Todo from "../Todos/Todo";

describe("Todo Component", () => {
  const mockDeleteTodo = vi.fn();
  const mockCompleteTodo = vi.fn();

  afterEach(() => {
    // Reset mocks after each test
    cleanup();
    vi.clearAllMocks();
  });

  it("renders the todo text", () => {
    const todo = { text: "Complete this todo sometime", done: false };
    render(
      <Todo
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    );

    expect(screen.getByText("Complete this todo sometime")).toBeInTheDocument();
  });

  it('shows "This todo is not done" if `done` is false', () => {
    const todo = { text: "Check if this todo is done", done: false };
    render(
      <Todo
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    );

    expect(screen.getByText("This todo is not done")).toBeInTheDocument();
    expect(screen.queryByText("This todo is done")).not.toBeInTheDocument();
  });

  it('shows "This todo is done" if `done` is true', () => {
    const todo = { text: "Learn React", done: true };
    render(
      <Todo
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    );

    expect(screen.getByText("This todo is done")).toBeInTheDocument();
    expect(screen.queryByText("This todo is not done")).not.toBeInTheDocument();
  });
});
