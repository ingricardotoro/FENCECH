//@refresh
import { Metadata } from "next";
import OnlineCourse from "./online-course/page";

export const metadata: Metadata = {
  title: "FENCECH - Honduras",
};

const Home = () => {
  return (
      <OnlineCourse />
  );
}

export default Home