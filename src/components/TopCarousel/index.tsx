import { Carousel } from 'antd';
import { topEventData } from 'src/data/topEventData';

import { Button } from '@class101/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TopCarousel = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Container>
      <Carousel
        autoplay
        css={css`
          height: 100px;
          text-align: center;
        `}
      >
        {topEventData.map((data) => (
          <div
            key={data.id}
            css={css`
              background-color: ${data.bgColor};
              height: 100px;
              text-align: center;
            `}
          >
            <img src={data.img}></img>
            <div>{data.title}</div>
            <div>{data.badge}</div>
            <div>{data.subtitle}</div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};
export default TopCarousel;

const Container = styled.div`
  width: 100%;
  height: 455px;
`;

const CarouselDiv = styled.div``;
