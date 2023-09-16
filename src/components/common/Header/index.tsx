import { Heading } from "./components/Heading";
import { NavigationMenu } from "./components/NavigationMenu";

export const Header = () => {
  return (
    <header className="relative flex justify-center gap-1 p-4 shadow-md">
      <Heading />

      <NavigationMenu />
    </header>
  );
};
