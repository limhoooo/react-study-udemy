import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://picsum.photos/600/600/?random"
      title="A First Meet up"
      address="Some address 5, 12345 Some City"
      description="This a first meetup"
    />
  );
};

// 동적으로 라우팅 기능
// 서버에서 받아온 데이터로 path 정보를 설정해줌
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const meetupId = context.params.meetupId;
  // 브라우저가 아닌 터미널에서 보여짐
  console.log(meetupId);
  return {
    props: {
      meetupsData: {
        id: meetupId,
        title: "A First Meet up",
        image: "https://picsum.photos/600/600/?random",
        address: "Some address 5, 12345 Some City",
        description: "This a first meetup",
      },
    },
  };
}

export default MeetupDetails;
