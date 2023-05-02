import Image from "next/image";
import PjtTile from "../pjtTile";

export default function Projects() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900">
            Projects
          </h1>
          <PjtTile />
        </div>
      </div>
    </>
  );
}
