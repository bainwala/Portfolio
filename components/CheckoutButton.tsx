"use client";

import { useSession } from "next-auth/react";
import React from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const createCheckoutSession = async () => {
    if (!session) return;
  };

  return (
    <div
      className="mt-8 block rounded-md bg-indigo-800 px-4 py-2 text-center text-sm 
              font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
    >
      <button onClick={() => createCheckoutSession()}>Checkout</button>
    </div>
  );
}

export default CheckoutButton;
