import request from "./axios";

export function getTodoList() {
  const res = request.get("/todos");
  // console.log("here", Promise.resolve(res), Promise.all([res,res1,res2]));
  return res;
}
export function createTodo({ title, description, priority }) {
  console.log("data", title, description, priority);
  const res = request.post("/todos", {
    title,
    description,
    priority,
    userId: 1,
    id: Date.now(),
  });
  return res;
}

export function deleteTodo({ id }) {
  const res = request.delete(`/todos/${id}`);
  return res;
}
