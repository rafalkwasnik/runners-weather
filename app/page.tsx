import Cities from "./components/Cities";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <Cities />
    </main>
  );
}
