import React from "react";

const List = (props) => {
    return (
        <ul>
            {props.items.map((item,key) => (
                <li key={key} className="">
                  {item.task}
                <div className="actions">
                    <span className={ item.completed? "hide": "done"} onClick={() => props.markAsCompleted(item.id)}>
                        <i className={item.completed? "fas fa-check-square": "far fa-check-square" }> </i>
                    </span>
                    <br/>
                    <span className="trash" onClick={() => props.removeTask(item.id)}>
                        <i className="far fa-trash-alt"> </i>
                    </span>
                </div> 
                </li>
            ))}
        </ul>
    );
}

export default List;