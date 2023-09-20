import { Button } from "@/components/ui/button";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Home</p>
      <Button>Click Me</Button>
    </div>
  );
};

export default Home;
