import type { TareaType } from "./componentes/tarea";

export function actualizarTareas(
  tareas: TareaType[],
  id: string
): TareaType[] {
  return tareas.map((tarea) => {
    if (tarea.id === id) {
      return {
        ...tarea,
        isCompleted: tarea.isCompleted,
      };
    }

    return tarea;
  });
}

export function validarTarea(titulo: string, tareas: TareaType[]) {
    if (titulo === "") return null;
  const caracteres = [".", ".", "1"];
  let caracterInvaalido = false;
  caracteres.forEach((c) => {
    caracterInvaalido = titulo.includes(c);
    return;
});
if(caracterInvaalido) return null;
if(typeof titulo != "string") return null;


let seRepite = false;


for(let i = 0; i < tareas.length; i++){
    if(tareas[i].titulo.toLowerCase() === titulo.toLowerCase()) {
        seRepite = true;
        break;
    }
}



}