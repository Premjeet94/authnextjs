import PageSection, {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/IntroLoader/PageSection";

const whatWeDo = [
  {
    icon: "ri-map-pin-line",
    title: "Get You Discovered",
    desc: "We set up and optimize your Google Maps presence so customers can actually find you.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Build Trust Online",
    desc: "Reviews, Instagram presence, and credibility signals that make customers choose you.",
  },
  {
    icon: "ri-whatsapp-line",
    title: "Make Contact Easy",
    desc: "WhatsApp Business setup with smart auto-replies so you never miss enquiries.",
  },
  {
    icon: "ri-layout-2-line",
    title: "Turn Visits Into Enquiries",
    desc: "Fast, mobile-first websites designed to convert visitors into real leads.",
  },
  {
    icon: "ri-shopping-cart-line",
    title: "Sell & Scale",
    desc: "Online stores, ordering systems, or apps when your business is ready to grow.",
  },
];

export default function WhatWeDo() {
  return (
    <PageSection className="py-24 px-4">
      <StaggerContainer className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <StaggerItem>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              What We Do <span className="text-green-400">(And Why It Works)</span>
            </h2>
            <p className="text-white/70 text-lg">
              We don’t sell random services. We build a clear digital system that
              helps local businesses get customers online.
            </p>
          </div>
        </StaggerItem>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, i) => (
            <StaggerItem key={i}>
              <div className="
                h-full rounded-2xl
                bg-white/5 border border-white/10
                p-6
                hover:bg-white/10
                transition
              ">
                <i className={`${item.icon} text-3xl text-green-400 mb-4 block`} />
                <h3 className="text-xl font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </PageSection>
  );
}
