import HeaderComponent from "~/components/Partials/HeaderComponent";
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import React from "react";
import PostInputContainer from "~/components/Home/PostInputContainer";

export default function Home() {
  return (
    <DefaultLayout title="T3 Tutorial | Home">
      <HeaderComponent />
      <PostInputContainer />
    </DefaultLayout>
  );
}
