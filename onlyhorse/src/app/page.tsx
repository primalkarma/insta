import Image from "next/image";
import HomeScreen from "./components/home/home-screen/HomeScreen";
import AuthScreen from "./components/home/auth-screen/AuthScreen";

export default function Home() {
  const user = true;
  return (
    <main>
      <h1 className="text-primary">Only Horse</h1>
      {user ? (<HomeScreen/>) : (<AuthScreen/>)}
      
    </main>
  );
}
