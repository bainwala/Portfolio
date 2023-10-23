import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import PricingCards from "@/components/PricingCards";
import React from "react";

async function Register() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black dark:text-white">
      <h1 className="text-6xl font-bold mb-8">
        Let us handle your membership {session?.user?.name?.split(" ")[0]}!
      </h1>
      <PricingCards redirect={false} />
    </div>
  );
}

export default Register;
