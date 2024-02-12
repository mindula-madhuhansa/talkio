import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

async function RegisterPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Manage Your Membership{" "}
            {session?.user?.name?.split(" ")?.[0]}
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            style={{
              maskImage:
                "radial-gradient(circle closest-side, white, transparent)",
            }}
          >
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#7775d6" />
                <stop offset="1" stopColor="#1e5eec" />
              </radialGradient>
            </defs>
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
          </svg>
        </div>
      </div>

      <PricingCards redirect={false} />
    </div>
  );
}

export default RegisterPage;
