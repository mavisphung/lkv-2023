import React from "react";
import { Link } from "react-router-dom";
import { myTabs } from "../../shared";

const MyDrawer = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  const handleClick = (_: any, index: number) => {
    setIndex(index);
  };

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};

export default MyDrawer;
