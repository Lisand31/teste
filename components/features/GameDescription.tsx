"use client";

import Image from "next/image";
import { Gamepad2, Trophy, Users, Zap } from "lucide-react";

export default function GameDescription() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Epic Gaming Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Immerse yourself in stunning graphics and engaging gameplay. Experience the next level of gaming with our carefully curated selection of titles.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Feature 
                icon={<Gamepad2 className="h-6 w-6" />}
                title="4K Graphics"
                description="Ultra-high definition visuals"
              />
              <Feature 
                icon={<Trophy className="h-6 w-6" />}
                title="Achievements"
                description="Unlock exclusive rewards"
              />
              <Feature 
                icon={<Users className="h-6 w-6" />}
                title="Multiplayer"
                description="Play with friends online"
              />
              <Feature 
                icon={<Zap className="h-6 w-6" />}
                title="Fast Loading"
                description="Optimized performance"
              />
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/800/1000"
              alt="Game Screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}