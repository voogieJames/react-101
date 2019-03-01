export const getTodos = (date) => {
    return fetch(`http://localhost:8686/${date}`)
        .then(resp => resp.json())
}

export const createTodo = (newTodo,date) => {
    return fetch(`http://localhost:8686/${date}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(resp => resp.json())
}

export const updateTodo = (todo,date) => {
    return fetch(`http://localhost:8686/${date}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
}

export const removeToDo = (todo,date) => {
    return fetch(`http://localhost:8686/${date}/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(resp =>  resp)
}