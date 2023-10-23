import React from "react";
import Link from "next/link";

function CheckoutButton() {
  return (
    <Link
      href={"/checkout"}
      className="mt-8 block rounded-md bg-indigo-800 px-4 py-2 text-center text-sm 
              font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
    >
      Checkout
    </Link>
  );
}

export default CheckoutButton;
