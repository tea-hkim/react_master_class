import { atom, selector } from "recoil";

export enum Categories {
  "ToDo" = "Todo",
  "Doing" = "Doing",
  "Done" = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
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

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.ToDo,
});

export const categoryListState = atom({
  key: "categoryList",
  default: [Categories.ToDo, Categories.Doing, Categories.Done],
});
