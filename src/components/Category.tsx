import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryListState, categoryState } from "../atoms";
import { FormBox } from "./CreateToDo";

const SelectBox = styled.select`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 10px;
  height: 30px;
  background-color: #55e6c1;
  color: white;
  font-weight: 700;
  font-size: 15px;
  margin-right: 10px;
  &:hover {
    background-color: #79bde4;
  }
  option {
    background-color: white;
    font-size: 15px;
    color: #79bde4;
    font-weight: 700;
  }
`;
const CategoryBox = styled.div`
  display: flex;
  width: 100%;
`;
interface IForm {
  newCate: string;
}

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ newCate }: IForm) => {
    setCategoryList((prev) => {
      const newCateList = [...prev, newCate];
      localStorage.setItem("category", JSON.stringify(newCateList));
      return newCateList;
    });
    setValue("newCate", "");
  };
  return (
    <CategoryBox>
      <SelectBox value={category} onInput={onInput}>
        {categoryList?.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </SelectBox>
      <FormBox onSubmit={handleSubmit(onValid)}>
        <input {...register("newCate")} placeholder="항목을 추가해 주세요" />
        <button>추가</button>
      </FormBox>
    </CategoryBox>
  );
}

export default Category;
