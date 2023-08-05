import React, { useState } from "react";
import DropDown from "../../commonComponents/DropDown/GenericDropDown";
import { EllipsisOutlined } from "@ant-design/icons";
import Card from "./Card";
import data from "../../API/data.json";

const Index = () => {
  const [cardData, seCardData] = useState(data);
  // console.log(data);
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
