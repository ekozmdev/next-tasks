import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).replace(/\//g, "-");

  try {
    await connectDb();
    const allTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate } // 現在時刻よりdueDateが小さい
    });

    return NextResponse.json({ message: "タスク取得成功", tasks: allTasks })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "タスク取得失敗" }, {status: 500} )
  }
}

// キャッシュせずに毎回新しいデータを取得する設定
export const dynamic = "force-dynamic"