import Hero from '@/components/hero'
import Blob from '@/components/blob'
// import PolygonCarousel from '@/components/polygon-carousel'

export default function Home() {
  return (
    // <div className="h-screen w-screen p-8 pb-20 sm:py-20">
    <main className="relative h-screen overflow-hidden">
      <div className="container">
        <Hero />

        {/* <PolygonCarousel /> */}
      </div>
      {/* <div className="absolute h-screen w-screen"> */}
      <div className="animate-fade-left animate-duration-1000 animate-delay-500">
        <Blob
          className="fill-pastel-pink -right-80 top-0 h-[1000px] w-[1000px]"
          path="M32.8,-56.4C44.1,-50.2,55.9,-44.7,65.2,-35.4C74.4,-26.1,81.1,-13,80.8,-0.2C80.5,12.7,73.3,25.4,64.2,35.1C55.2,44.8,44.4,51.4,33.3,53.6C22.3,55.9,11.2,53.7,-0.2,54.1C-11.6,54.4,-23.1,57.3,-37.5,57C-51.8,56.6,-68.9,53.2,-78.2,43.1C-87.4,33.1,-88.7,16.6,-84.9,2.2C-81,-12.1,-72,-24.2,-64.8,-37.8C-57.6,-51.4,-52.3,-66.4,-41.8,-73C-31.3,-79.7,-15.7,-78,-2.5,-73.7C10.7,-69.5,21.5,-62.6,32.8,-56.4Z"
        />
        <Blob
          className="fill-pastel-blue animate-fade-left animate-duration-700 animate-delay-800 right-0 top-0 h-[1000px] w-[1000px]"
          path="M42.2,-49.1C45.8,-38.6,33.6,-19.3,27.7,-5.9C21.7,7.4,22,14.9,18.4,23.4C14.9,32,7.4,41.7,-0.4,42.1C-8.2,42.5,-16.5,33.6,-22.9,25.1C-29.3,16.5,-33.9,8.2,-33.3,0.6C-32.7,-7,-26.9,-14,-20.5,-24.6C-14,-35.1,-7,-49.2,6.1,-55.3C19.3,-61.5,38.6,-59.7,42.2,-49.1Z"
        />
        <Blob
          className="fill-pastel-yellow  animate-fade-right top-36 -right-96 h-[1000px] w-[1000px]"
          path="M37,-70C45,-59.4,46.6,-43.6,50,-31.1C53.3,-18.5,58.6,-9.3,57.9,-0.4C57.3,8.5,50.7,17,47.3,29.5C43.9,42,43.6,58.5,36.2,65.8C28.8,73.2,14.4,71.5,-0.7,72.6C-15.7,73.8,-31.5,77.8,-42.7,72.6C-54,67.5,-60.8,53.2,-65.1,39.6C-69.5,26,-71.5,13,-67.9,2C-64.4,-8.9,-55.3,-17.8,-48.3,-26.9C-41.3,-36,-36.4,-45.3,-28.7,-56.1C-21,-66.8,-10.5,-79,2,-82.5C14.5,-85.9,29,-80.6,37,-70Z"
        ></Blob>
        <Blob
          className="fill-pastel-green/70 animate-fade-up top-36 -right-44 h-[1000px] w-[1000px]"
          path="M31.8,-54.9C43.9,-48,58.3,-45,62.2,-36.5C66,-28,59.3,-14,59,-0.2C58.8,13.7,64.9,27.3,62.9,39.1C60.9,50.9,50.9,60.8,39,63.5C27.2,66.2,13.6,61.7,1.7,58.8C-10.2,55.8,-20.4,54.4,-33.7,52.6C-47,50.7,-63.5,48.4,-74.7,39.6C-86,30.8,-92.1,15.4,-86.3,3.4C-80.5,-8.7,-62.8,-17.4,-51.1,-25.5C-39.4,-33.6,-33.8,-41.1,-26.3,-50.7C-18.7,-60.2,-9.4,-71.7,0.2,-72.1C9.8,-72.4,19.6,-61.7,31.8,-54.9Z"
        ></Blob>
      </div>
      {/* </div> */}
    </main>
  )
}
