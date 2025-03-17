import { Leaf, Globe, ShieldCheck, Package } from "lucide-react";

export default function ContentSection() {
  return (
    <section
      id="intro"
      className="py-12 md:py-24 bg-zinc-100 dark:bg-transparent "
    >
      <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-16">
        <div className="mx-auto max-w-4xl space-y-8 text-center md:space-y-16 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            SuryaVriksha – Growing Global Connections Through Quality Produce
          </h2>
          <p>
            At SuryaVriksha, we are committed to bridging international markets
            with premium farm-fresh vegetables, seasonal fruits, and essential
            grocery items. With a strong focus on quality, sustainability, and
            seamless logistics, we ensure that every product meets the highest
            industry standards while supporting responsible sourcing and
            eco-friendly practices.
          </p>
        </div>
        <Image
          className="rounded-(--radius) "
          src="/assets/herosectionsv.jpeg"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="size-6 text-primary" />
              <h3 className="text-sm font-medium">Fresh & Organic</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Sourced from trusted farmers to ensure premium quality and
              freshness.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="size-6 text-primary" />
              <h3 className="text-sm font-medium">Global Reach</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Seamlessly connecting markets with efficient distribution
              worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-6 text-primary" />
              <h3 className="text-sm font-medium">Quality Assurance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Committed to the highest industry standards with rigorous quality
              checks.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="size-6 text-primary" />
              <h3 className="text-sm font-medium">Sustainable Packaging</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Eco-friendly packaging that preserves freshness while reducing
              waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
