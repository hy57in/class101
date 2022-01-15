export interface IopenSoonData {
  id: number;
  title: string;
  creator: string;
  like: number;
  img: string;
  cheer: {
    goal: number;
    score: number;
    finishDate: string; // timestamp
  };
}

export const openSoonData: IopenSoonData[] = [
  {
    id: 1,
    title: '평범한 직장인에게 적합한 유튜브 전략 짜기',
    creator: 'YOUTUBE',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 150,
      finishDate: '2022.02.10',
    },
  },
  {
    id: 2,
    title: '스쳐지나가는 월급을 붙잡는 재테크 비법 초급편',
    creator: '재테크천재',
    img: 'https://images.velog.io/images/kados22/post/beac4073-47b2-419e-8d6f-4e346132f825/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%202.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 120,
      finishDate: '2022.02.10',
    },
  },
  {
    id: 3,
    title: '스쳐지나가는 월급을 불리는 재테크 비법 고급편',
    creator: '재테크천재',
    img: 'https://images.velog.io/images/kados22/post/73e8a652-e52d-401f-b24f-4a46ab0758ae/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%204.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 10,
      finishDate: '2022.02.10',
    },
  },
  {
    id: 4,
    title: '내일 출근 안하는 사람처럼 놀고 출근 잘 하는 방법',
    creator: '인싸이더',
    img: 'https://images.velog.io/images/kados22/post/0e43ee9f-3ecf-46af-9885-b70a5a78ed2e/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%203.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 30,
      finishDate: '2022.02.12',
    },
  },
  {
    id: 5,
    title: '통장 사정에 맞는 적절한 점심 메뉴 고르는 비법 전수',
    creator: '메뉴추천왕',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 35,
      finishDate: '2022.02.12',
    },
  },
  {
    id: 6,
    title: '(회색 후드티❌) 개발자의 멋을 잃지 않는 새로운 패션 노하우',
    creator: '개발자패션왕',
    img: 'https://images.velog.io/images/kados22/post/beac4073-47b2-419e-8d6f-4e346132f825/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%202.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 70,
      finishDate: '2022.02.12',
    },
  },
  {
    id: 7,
    title: '실리콘밸리 개발자와 함께 읽는 소프트웨어 장인 정신',
    creator: '소프트왕',
    img: 'https://images.velog.io/images/kados22/post/73e8a652-e52d-401f-b24f-4a46ab0758ae/%EC%9D%BC%EB%B0%98%20Class%20Card%20%EC%8D%B8%EB%84%A4%EC%9D%BC%204.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 98,
      finishDate: '2022.02.14',
    },
  },
  {
    id: 8,
    title: '서로의 성장을 이끌어내는 코드 리뷰 노하우',
    creator: '코드리뷰하면나야나',
    img: 'https://images.velog.io/images/kados22/post/0e43ee9f-3ecf-46af-9885-b70a5a78ed2e/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%203.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 112,
      finishDate: '2022.02.14',
    },
  },
  {
    id: 9,
    title: '얼리어댑터를 위한 지속가능한 기기 사용법',
    creator: '지속가능얼리어댑터',
    img: 'https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png',
    like: 101,
    cheer: {
      goal: 200,
      score: 150,
      finishDate: '2022.02.15',
    },
  },
];
