import Image from "next/image";
import AddButton from './_component/Button';
export default function Home() {
  return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
        <AddButton/>
      </div>
  );
}
