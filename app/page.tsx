import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="dash-bg">
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <Link href="/user">
          <div className="bg-cyan-400 hover:bg-sky-300 text-2xl text-white py-2 px-16 rounded-full focus:outline-none focus:shadow-outline relative shadow-md submit-button button-text-shadow">
            estudyante
          </div>
        </Link>
        <Link href="/admin">
          <div className="bg-cyan-400 hover:bg-sky-300 text-2xl text-white py-2 px-16 rounded-full focus:outline-none focus:shadow-outline relative shadow-md submit-button button-text-shadow">
            Guro/admin
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Page;
