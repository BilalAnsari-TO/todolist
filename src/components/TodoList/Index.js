import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../../API/data.json";
import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "../../API/TodoApi";

const Index = () => {
  const [cardData, seCardData] = useState(data);

  const todoQuery = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });
  useEffect(() => {
    if (todoQuery.isSuccess) {
      seCardData(todoQuery.data);
    }
  }, [todoQuery]);

  if (todoQuery.isLoading) return <h1>isLoading...</h1>;
  if (todoQuery.status === "error") {
    return <h1>{JSON.stringify(todoQuery.error)}</h1>;
  }

  console.log("data", todoQuery?.data);
  return (
    <>
      <div className="bg-slate-100	min-h-full rounded-lg m-5">
        <div className="flex gap-5 flex-wrap p-10 pt-5">
          {cardData.map((data, id) => (
            <Card
              key={id}
              priority={data.priority}
              description={data.description}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
