import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
