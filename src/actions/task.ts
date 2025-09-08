"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    // zodでバリデーションを追加するのが望ましい
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  }

  try {
    await connectDb()
    await TaskModel.create(newTask)
  } catch (error) {
    state.error = "タスクの作成に失敗しました。"
    return state
  }
  
  // 作成に成功したらリダイレクト
  // try-catchの中だと上手く動かないらしい
  redirect("/")
}