import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SearchField = () => {
  return (
    <Container>
      <Input type="search" placeholder="찾으시는 취미가 있으신가요?" />
      <SearchButton>
        <SearchSVG />
      </SearchButton>
    </Container>
  );
};

export default SearchField;

const Container = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 420px;
  height: 46px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  background: rgb(248, 248, 249);
  color: rgb(26, 26, 26);
  border: 1px solid rgb(248, 248, 249);
  border-radius: 24px;
  padding: 12px 52px 12px 16px;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
`;
const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M15.907 17.059A8.468 8.468 0 0110.5 19a8.5 8.5 0 110-17 8.5 8.5 0 018.5 8.5 8.468 8.468 0 01-1.941 5.407L23 21l-2 2-5.093-5.941zM17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 1113 0z"
        fill="#1a1a1a"
      ></path>
    </svg>
  );
};
