import type { NextPage } from "next";
import ReviewCard from "./components/ReviewCard";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen bg-[#131518]">
      <ReviewCard />;
    </div>
  );
};

export default Home;
