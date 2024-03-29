import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  {
    name: "Basic",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Chat Anywhere, Anytime: Get Started Now!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant Limit in Chat",
      "3 Chat Room Limit",
      "Supports 2 Languages",
      "48-Hour Support Response Time",
    ],
  },

  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "$4.99",
    description: "Unlock Premium Benefits with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia Support in Chats [Coming Soon]",
      "1-hour Dedicated Support Response Time",
      "Early Access to New Features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-[#1e5eec]"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-[#1e5eec]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {redirect ? (
              <Link
                href={"/register"}
                className="mt-8 block rounded-md bg-[#1e5eec] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2879EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e5eec] cursor-pointer disabled:opacity-80"
              >
                Get Started Today
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
