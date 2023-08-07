import request from "./axios";

export function getTodoList() {
  const res = request.get("/todos");
  // console.log("here", Promise.resolve(res), Promise.all([res,res1,res2]));
  return res;
}
