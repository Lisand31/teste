import ProductCard from "@/components/features/ProductCard";
import GameDescription from "@/components/features/GameDescription";
import ChatWidget from "@/components/features/ChatWidget";

const featuredGames = [
  {
    title: "Cyber Adventure 2077",
    price: 59.99,
    rating: 4.8,
    imageUrl: "https://picsum.photos/800/600",
  },
  {
    title: "Epic Quest Chronicles",
    price: 49.99,
    rating: 4.6,
    imageUrl: "https://picsum.photos/801/600",
  },
  {
    title: "Space Warriors",
    price: 39.99,
    rating: 4.7,
    imageUrl: "https://picsum.photos/802/600",
  },
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20 z-10" />
            <img
              src="https://picsum.photos/1920/1080"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Gateway to Epic Gaming Adventures
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest and greatest games from top developers worldwide.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity">
              Explore Games
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <ProductCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Game Description */}
      <GameDescription />

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  );
}