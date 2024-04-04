import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const Client = () => {
  const pathname = usePathname();
  const [clientId, setClientId] = useState(null);

  console.log(pathname, "aye ");
  useEffect(()=>{
    if (pathname) {
        const id = parseInt(pathname.split("/").pop());
        setClientId(id);
      }
  },[pathname])

  return (
    <>
      <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="lg:text-5xl text-3xl bg-black text-white text-center py-4">
          Client {clientId }
        </h2>
      </div>
    </>
  );
};
export default Client;
