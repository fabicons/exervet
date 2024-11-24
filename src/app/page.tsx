import Hero from '@/components/hero'
import Lake from '@/components/lake'
import PolygonCarousel from '@/components/polygon-carousel'

export default function Home() {
  return (
    <div className="container p-8 pb-20 sm:py-20">
      <main className="">
        <Hero />
        <PolygonCarousel />
        <Lake />
      </main>
    </div>
  )
}
