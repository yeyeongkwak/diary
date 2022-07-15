import React from "react";
import axios from "axios";
import styled from "styled-components";

const PagenationUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const PagenationLI = styled.li`
  padding: 15px;
  font-size: 25px;

  &:hover {
    cursor: pointer;
    color: green;
    border: 0.5px solid lightgray;
    background-color: whitesmoke;
  }
`;

const Pagenation = ({ postPerPage, totalPosts, setCurrentPage }) => {
  //   console.log(postPerPage, totalPosts);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <PagenationUL>
          {pageNumbers.map((pagenum) => {
            return (
              <PagenationLI key={pagenum}>
                <span
                  onClick={() => {
                    setCurrentPage(pagenum);
                    console.log(pagenum);
                  }}
                >
                  {pagenum}
                </span>
              </PagenationLI>
            );
          })}
        </PagenationUL>
      </div>
    </div>
  );
};

export default Pagenation;
