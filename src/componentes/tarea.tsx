import React from 'react';

export type TareaType ={
    id: string,
    titulo: string, 
    isCompleted: boolean
}

export default function Tarea({infoTarea, cambiarCompletado, borrarTarea}:{infoTarea: TareaType, cambiarCompletado: Function, borrarTarea: (id: string) => void}){
    return React.createElement('li', null,
        React.createElement('input', {type: 'checkbox', checked: infoTarea.isCompleted, onChange: () => cambiarCompletado(infoTarea.id)}),
        React.createElement('span', {style: {textDecoration: infoTarea.isCompleted ? 'line-through' : 'none'}}, infoTarea.titulo),
        React.createElement('span', {onClick: () => borrarTarea(infoTarea.id), style: {color: 'red'}}, ' x ')
    );
}