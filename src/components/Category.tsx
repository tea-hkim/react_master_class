import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.ToDo}>To Do</option>
      <option value={Categories.Doing}>Doing</option>
      <option value={Categories.Done}>Done</option>
    </select>
  );
}

export default Category;
