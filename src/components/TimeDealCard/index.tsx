import LikeAndThumsUp from 'components/LikeAndThumsUp';
import React from 'react';
import { ItimeDealData } from 'src/data/timeDealData';

import { Badge, Caption1, Card, Colors, Divider, Icon } from '@class101/ui';

type TimeDealCardProps = Pick<
  ItimeDealData,
  'title' | 'creator' | 'img' | 'like' | 'thumsUp' | 'price' | 'coupon'
>;

const TimeDealCard = ({
  title,
  creator,
  img,
  like,
  thumsUp,
  price: { salePrice, originalPrice, installment },
  coupon,
}: TimeDealCardProps) => {
  return (
    <Card
      to={'/'}
      title={title}
      coverImage={img}
      extraTop={
        <Caption1 fontWeight={600} color={Colors.gray900}>
          {creator}
        </Caption1>
      }
      extraBottom={
        <div style={{ marginLeft: '-4px', lineHeight: '0' }}>
          <LikeAndThumsUp like={like} thumsUp={thumsUp} />
        </div>
      }
    >
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Divider color="#F2F4F5" />
      </div>
      <Badge
        size="sm"
        color={Colors.gray600}
        backgroundColor={Colors.gray000}
        style={{ marginTop: '8px' }}
      >
        바로수강가능
      </Badge>
    </Card>
  );
};

export default TimeDealCard;
