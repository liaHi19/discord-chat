import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle/>
    </div>
  );
};

export default Home;
