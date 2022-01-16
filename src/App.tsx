import TimeDealCard from 'components/TimeDealCard';
import { CategoryNavigationBar, Header, TopCarousel } from 'components/index';
import React from 'react';

import {
  Badge,
  Caption1,
  Card,
  Col,
  Colors,
  Divider,
  Grid,
  Icon,
  Row,
  Section,
} from '@class101/ui';

import { timeDealDatas } from './data/timeDealData';

export function App() {
  return (
    <div>
      <Grid>
        <Row>
          <Header />
          <CategoryNavigationBar />
        </Row>
      </Grid>
      {/* <TopCarousel /> */}
      <div style={{ backgroundColor: 'grey', width: '100%', height: '445px' }}></div>
      <Grid>
        <Row>
          <Col lg={12}>
            <Section title="오늘의 특가! TIME DEAL" to="/" linkText="전체 클래스 보기">
              {timeDealDatas.map((timeDealData) => (
                <TimeDealCard
                  key={timeDealData.id}
                  title={timeDealData.title}
                  creator={timeDealData.creator}
                  img={timeDealData.img}
                  like={timeDealData.like}
                  thumsUp={timeDealData.thumsUp}
                  price={timeDealData.price}
                  coupon={timeDealData.coupon}
                />
              ))}
            </Section>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
