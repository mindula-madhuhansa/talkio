import PricingCards from "@/components/PricingCards";

function PricingPage() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-[#3a8ef0]">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Discover Your Ideal Price,{" "}
            <br className="hidden sm:inline lg:hidden" />
            Pricing Options Tailored for You
          </p>
        </div>

        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            We&apos;re 99% Certain Our Plans Will Meet 100% of Your Needs
          </p>
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

      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={true} />
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
