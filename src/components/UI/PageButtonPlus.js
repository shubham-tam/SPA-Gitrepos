import React from "react";

export const PageButtonPlus = (props) => {
  return (
    <div>
      {" "}
      {/* <button onClick={props.onClick}> {props.page}</button> */}
      <button onClick={props.onClick}> {props.page + 1}</button>
      {/* {!totalUsers ? (
      ""
    ) : (
      <button onClick={handleNextPage}> {pagenation}</button>
    )} */}
    </div>
  );
};
