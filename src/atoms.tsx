import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const categoryState = atom({
  key: "categoryState",
  default: "ToDo",
});

export const categoryListState = atom({
  key: "categoryList",
  default: ["ToDo", "Doing", "Done"],
});
