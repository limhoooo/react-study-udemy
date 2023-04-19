import { MongoClient } from "mongodb";

import MeetupList from "./../components/meetups/MeetupList";

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
  const client = await MongoClient.connect(
    "mongodb+srv://limhoooo:dlagh12@cluster0.tqob8j2.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollention = db.collection("meetups");
  const meetups = await meetupsCollention.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    // 시간설정에 따라서 데이터를 가져오는 프로퍼티
  };
}

export default HomePage;
