import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

// Server Actionsで後で削除処理を実行する予定

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <form action="">
        <button type="submit">
            <FaTrashAlt className="hover:text-gray-700 text-lg cursor-pointer"/>
        </button>
    </form>
  )
}

export default TaskDeleteButton
