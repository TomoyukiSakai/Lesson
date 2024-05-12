const todos = [
    {
        id: 1,
        title:'ゼミ受講',
        completed: true
    },
    {
        id: 2,
        title:'卵を買う',
        completed: true
    },
    {
        id: 3,
        title:'プログラミング',
        completed: false
    }
]

for(let i in todos){
    let todo = todos[i];
    if(!todo.completed){
        console.log(i, todo.title);
    }
}