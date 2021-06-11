import React from "react";

const List = (props) => {
    return (
        <ul>
            {props.items.map((item,key) => (
                <li key={key} className={`${item.completed? "completado": "pendiente"}`}>
                  {item.task}
                <div className="actions">
                    <span className={item.completed? 'hide': 'done'} onClick={() => props.markAsCompleted(item.id)}>
                        hacer
                    </span>
                    <br/>
                    <span className="trash" onClick={() => props.removeTask(item.id)}>
                        borrar
                    </span>
                </div> 
                </li>
            ))}
        </ul>
    );
}

export default List;