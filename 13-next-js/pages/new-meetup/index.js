import React from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
