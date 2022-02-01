import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   return (
//     <div>
//       <form>
//         <h1>{toDo}</h1>
//         <input
//           type="text"
//           placeholder="Write your to do list"
//           value={toDo}
//           onChange={handleChange}
//         />
//         <button>add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  Eamil?: string;
  Password?: string;
  PasswordConfirm?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      Eamil: "@naver.com",
    },
  });

  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Eamil", { required: "write email" })} />
        <span>{errors?.Eamil?.message}</span>
        <input {...register("Password", { required: "write password " })} />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("PasswordConfirm", {
            required: "write password confirm",
          })}
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
