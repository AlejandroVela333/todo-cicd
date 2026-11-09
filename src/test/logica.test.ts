import { describe, it, expect } from "vitest";
import { actualizarTareas } from "../logica";

describe("actualizarTareas", () => {
  it("marca una tarea pendiente como completada", () => {
    // Arrange
    const tareas = [
      {
        id: "1",
        titulo: "Estudiar Vitest",
        isCompleted: false,
      },
    ];

    // Act
    const resultado = actualizarTareas(tareas, "1");

    // Assert
    expect(resultado[0].isCompleted).toBe(true);
  });

  it("no modifica otras tareas", () => {
    const tareas = [
      { id: "1", titulo: "Estudiar", isCompleted: false },
      { id: "2", titulo: "Practicar", isCompleted: false },
    ];

    const resultado = actualizarTareas(tareas, "1");

    expect(resultado[1].isCompleted).toBe(false);
  });

  it("conserva las tareas si el ID no existe", () => {
    const tareas = [
      { id: "1", titulo: "Estudiar", isCompleted: false },
    ];

    const resultado = actualizarTareas(tareas, "99");

    expect(resultado).toEqual(tareas);
  });
});