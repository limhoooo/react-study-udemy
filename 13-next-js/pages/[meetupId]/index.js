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

export default MeetupDetails;
