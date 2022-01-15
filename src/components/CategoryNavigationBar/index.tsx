import SearchField from 'components/SearchField';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CategoryNavigationBar = () => {
  return (
    <Container>
      <CategoryNavigationTab>
        전체 카테고리
        <BottomArrowSVG />
      </CategoryNavigationTab>
      <CategoryNavigationTab>
        1월 가입혜택
        <Point />
      </CategoryNavigationTab>
      <CategoryNavigationTab>이벤트</CategoryNavigationTab>
      <CategoryNavigationTab>바로 수강</CategoryNavigationTab>
      <CategoryNavigationTab>신규 클래스</CategoryNavigationTab>
      <CategoryNavigationTab>오픈 예정</CategoryNavigationTab>
      <CategoryNavigationSubTab style={{ marginLeft: '30px' }}>시그니처</CategoryNavigationSubTab>
      <CategoryNavigationSubTab>키즈</CategoryNavigationSubTab>
      <CategoryNavigationSubTab>원포인트 클래스</CategoryNavigationSubTab>
    </Container>
  );
};

export default CategoryNavigationBar;

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
`;

const CategoryNavigationTab = styled.button`
  display: flex;
  position: relative;
  margin-right: 28px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  font-weight: bold;
  padding: 8px 0px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(26, 26, 26);
  :hover {
    font-weight: bold;
    &::after {
      transform: scaleX(1);
    }
  }
  &::after {
    transform: scaleX(0);
    content: '';
    display: block;
    background-color: black;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 10px;
    z-index: 999;
  }
`;

const CategoryNavigationSubTab = styled(CategoryNavigationTab)`
  font-weight: 400;
`;

const Point = styled.div`
  margin-left: 6px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: rgb(243, 33, 59);
`;

const BottomArrowSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M17 10l-5 5-5-5h10z" fill="#000"></path>
    </svg>
  );
};
