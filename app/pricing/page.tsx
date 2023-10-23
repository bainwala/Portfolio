import PricingCards from "@/components/PricingCards";
import React from "react";

function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black dark:text-white">
      <h1 className="text-6xl font-bold mb-8">Time To Discuss the Money.</h1>
      <PricingCards redirect={true} />
    </div>
  );
}

export default PricingPage;
