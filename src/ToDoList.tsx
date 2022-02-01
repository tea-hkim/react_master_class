import React from "react";
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
  extraError: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Eamil: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.Password !== data.PasswordConfirm) {
      setError("PasswordConfirm", {
        message: "Password are not the same",
      });
      // setError("extraError", {message: "Server Error"})
    }
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Eamil", {
            required: "write email",
            validate: {
              noNick: (value) => !value?.includes("nick") || "no nicos allowed",
            },
          })}
        />
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
