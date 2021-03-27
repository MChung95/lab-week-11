let todoList = [
    {todo: "clone repo for starter code", status: "complete"},
    {todo: "change external links in index", status: "complete"},
    {todo: "write JS code", status: "started"},
    {todo: "push to github", status: "started"}
];

let completedTodos = []

for(const obj of todoList) {
    if (obj["status"] == "complete") {
        completedTodos.push(obj);
    }
}

console.log(completedTodos)

for(let {todo, status = "Unknown"} of completedTodos) {
    console.log(todo)
    }