import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

// function CreateToDo() {
// const [ToDos, setToDos] = useRecoilState(toDoState);
// const category = useRecoilValue(categoryState);
// const { register, handleSubmit, setValue } = useForm<IForm>();
// const onSubmit = (data: IForm) => {
//   setToDos((oldtodos) => {
//     const updateItem = [
//       { text: data.toDo, id: Date.now(), category },
//       ...oldtodos,
//     ];
//     window.localStorage.setItem("todo", JSON.stringify(updateItem));
//     return updateItem;
//   });
//   //2 window.localStorage.setItem('todo',JSON.stringify(ToDos))
//   setValue("toDo", "");
// };

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(setToDos);
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
