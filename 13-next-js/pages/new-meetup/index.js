import React from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (param) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
