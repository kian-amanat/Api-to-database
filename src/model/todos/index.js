import { query } from "../../core/database/postgres-service.js";

async function getTodos() {
  const sql = `select * from public.tasks `;
  const result = await query(sql);
  return result.rows;
}

async function getTodoById(id) {
  const sql = `
  select * from public.tasks
  where id = $1 `;
  const result = await query(sql, [id]);
  return result;
}

async function createTodo(title, description, isCompleted) {
  const sql = `
 insert into public.tasks 
 (title, description, is_completed) 
 values 
 ($1 , $2 , $3) ;
 `;
  const result = await query(sql, [title, description, isCompleted]);
  return result;
}
export { getTodos, getTodoById, createTodo };
