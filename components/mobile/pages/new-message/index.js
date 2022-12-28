import React from "react";
import MobileLayout from "../../layout";
import NewMessageNavTop from "../../layout/NewMessageNavTop";
// app
const NewMessagePage = () => {
  return (
    <MobileLayout showBottomNav={true} TopNav={NewMessageNavTop}>
      <h1 className="text-2xl">App in progress ...</h1>
    </MobileLayout>
  );
};

export default NewMessagePage;
