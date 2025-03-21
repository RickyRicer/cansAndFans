
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Intro */}
      <section id="intro" className="py-10">
        <h1 className="text-3xl font-bold">Introducing Cans & Fans Rewards!</h1>
        <p className="mt-4 text-lg">Become a member and earn points and exclusive rewards every time you shop.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="mt-4">Earn. Redeem. Enjoy.</p>
      </section>

      {/* Using Your Points */}
      <section id="using-points" className="py-10">
        <h2 className="text-2xl font-semibold">How to Use Your Points</h2>
        <p className="mt-4">Spend your points on exclusive deals, discounts, and more!</p>
      </section>

      {/* Reward Tiers */}
      <section id="reward-tiers" className="py-10">
        <h2 className="text-2xl font-semibold">Our Reward Tiers</h2>
        <p className="mt-4">Unlock higher tiers for even better rewards as you earn more points.</p>
      </section>

      {/* Refer a Friend */}
      <section id="refer-a-friend" className="py-10">
        <h2 className="text-2xl font-semibold">Refer a Friend</h2>
        <p className="mt-4">Invite your friends and earn bonus points for every successful referral!</p>
      </section>
    </main>
  );
}
