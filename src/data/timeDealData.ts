export interface ItimeDealData {
  id: number;
  title: string;
  creator: string;
  img: string;
  like: number;
  thumsUp?: number | null; // 없을 시 null
  price: {
    originalPrice: number;
    salePrice: number;
    installment: number; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon?: number | null; // 없을 시 null // number만원 쿠폰
}

export const timeDealData: ItimeDealData[] = [
  {
    id: 1,
    title: '허리 건강을 지키는 스트레칭',
    creator: '테트리스',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 101,
    thumsUp: 99,
    price: {
      originalPrice: 292000,
      salePrice: 204000,
      installment: 5,
    },
    coupon: 6,
  },
  {
    id: 2,
    title: '건강을 지키는 장비 세팅',
    creator: '중장비기사님',
    img: 'https://images.velog.io/images/kados22/post/beac4073-47b2-419e-8d6f-4e346132f825/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%202.png',
    like: 509,
    thumsUp: 97,
    price: {
      originalPrice: 198000,
      salePrice: 99000,
      installment: 5,
    },
    coupon: 6,
  },
  {
    id: 3,
    title: '평범한 개발자의 컨퍼런스 발표 도전하기',
    creator: '써니송',
    img: 'https://images.velog.io/images/kados22/post/73e8a652-e52d-401f-b24f-4a46ab0758ae/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%204.png',
    like: 685,
    thumsUp: 99,
    price: {
      originalPrice: 207000,
      salePrice: 139000,
      installment: 5,
    },
    coupon: 7,
  },
  {
    id: 4,
    title: '비개발자를 위한 개발자의 언어 개선 팁',
    creator: '통통구',
    img: 'https://images.velog.io/images/kados22/post/0e43ee9f-3ecf-46af-9885-b70a5a78ed2e/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%203.png',
    like: 222,
    thumsUp: 99,
    price: {
      originalPrice: 358000,
      salePrice: 279000,
      installment: 5,
    },
    coupon: 6,
  },
  {
    id: 5,
    title: '프로 수면러지만 잠이 부족한 직장인의 꿀잠 비법 전수',
    creator: '직장인 홍',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 527,
    thumsUp: 100,
    price: {
      originalPrice: 314,
      salePrice: 128,
      installment: 5,
    },
    coupon: 7,
  },
  {
    id: 6,
    title: '직장인 투잡 이모티콘 강의',
    creator: '도롱이',
    img: 'https://images.velog.io/images/kados22/post/beac4073-47b2-419e-8d6f-4e346132f825/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%202.png',
    like: 8967,
    thumsUp: 98,
    price: {
      originalPrice: 398000,
      salePrice: 191000,
      installment: 5,
    },
    coupon: 5,
  },
  {
    id: 7,
    title: '해외 취업 10년차에게 배우는 비즈니스 영어',
    creator: 'Kelly',
    img: 'https://images.velog.io/images/kados22/post/73e8a652-e52d-401f-b24f-4a46ab0758ae/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%204.png',
    like: 31638,
    thumsUp: 98,
    price: {
      originalPrice: 544000,
      salePrice: 245000,
      installment: 5,
    },
    coupon: 5,
  },
  {
    id: 8,
    title: 'NFT 작품 올리기',
    creator: '포트레이트',
    img: 'https://images.velog.io/images/kados22/post/0e43ee9f-3ecf-46af-9885-b70a5a78ed2e/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%203.png',
    like: 2951,
    thumsUp: 100,
    price: {
      originalPrice: 437000,
      salePrice: 179000,
      installment: 5,
    },
    coupon: 6,
  },
  {
    id: 9,
    title: '일정관리의 달인에게 배우는 째깍째깍 일정 관리',
    creator: '체계치',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 12529,
    thumsUp: 99,
    price: {
      originalPrice: 443000,
      salePrice: 168000,
      installment: 5,
    },
    coupon: 6,
  },
  {
    id: 10,
    title: '오늘도 안된다고 말해야하는 개발자들을 위한 스피치 클래스',
    creator: '노맨',
    img: 'https://images.velog.io/images/kados22/post/beac4073-47b2-419e-8d6f-4e346132f825/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%202.png',
    like: 3846,
    thumsUp: 97,
    price: {
      originalPrice: 281000,
      salePrice: 169000,
      installment: 5,
    },
    coupon: 7,
  },
];
