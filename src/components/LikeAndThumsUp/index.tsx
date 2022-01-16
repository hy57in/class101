import React from 'react';
import { ItimeDealData } from 'src/data/timeDealData';

import { Badge, Colors, Icon } from '@class101/ui';

type TimeDealCardProps = Pick<ItimeDealData, 'like' | 'thumsUp'>;

const LikeAndThumsUp = ({ like, thumsUp }: TimeDealCardProps) => {
  return <>
  {!!like && (
    <Badge
      icon={<Icon.Heart fillColor={Colors.gray400} />}
      backgroundColor="transparent"
      color={Colors.gray600}
      size="sm"
    >
      {like}
    </Badge>
  )}
  {!!thumsUp && (
    <Badge
      icon={<Icon.Like fillColor={Colors.gray400} />}
      backgroundColor="transparent"
      color={Colors.gray600}
      size="sm"
    >
      {thumsUp}%
    </Badge>
  )}
</>;
};

export default LikeAndThumsUp;
