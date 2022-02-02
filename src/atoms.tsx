import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "ToDo" | "Doing" | "Done";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "ToDo"),
      toDos.filter((toDo) => toDo.category === "Doing"),
      toDos.filter((toDo) => toDo.category === "Done"),
    ];
  },
});
