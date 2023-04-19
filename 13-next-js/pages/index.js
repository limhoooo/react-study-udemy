import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meet up",
    image: "https://picsum.photos/600/600/?random",
    address: "Some address 5, 12345 Some City",
    description: "This a first meetup",
  },
  {
    id: "m2",
    title: "A 2 Meet up",
    image: "https://picsum.photos/600/600/?random",
    address: "222Some address 5, 12345 Some City",
    description: "222This a first meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// getServerSideProps : 동적으로 데이터를 요청해야할시 (SSR)
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// getStaticProps : 빌드 시 데이터를 fetch하여 static 페이지를 생성 (SSG)
// 서버측에서 실행되게 하는 함수
// page 컴포넌트에서만 동작함
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // 시간설정에 따라서 데이터를 가져오는 프로퍼티
    revalidate: 1,
  };
}

export default HomePage;
