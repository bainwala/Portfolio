"use client";

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "bfacgfhsjgkbdgj",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
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
