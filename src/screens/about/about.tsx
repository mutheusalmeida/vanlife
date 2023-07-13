import { Button } from '@/button'
import { Title } from '@/title'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div
        aria-label="About banner"
        className="bg-[url('../assets/about-image.jpg')] bg-[center_top_20%] bg-cover h-[234px]"
      ></div>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Title
          heading="h1"
          className="mb-8 text-[2rem] font-bold leading-[1.1875em] max-w-lg"
        >
          Don’t squeeze in a sedan when you could relax in a van.
        </Title>

        <div className="[&>p:not(:last-child)]:mb-[1.375em]">
          <p className="text-base leading-[1.375em]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="text-base leading-[1.375em]">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>

        <div className="max-w-[494px] px-9 py-8 rounded-md bg-orange-300 mt-14">
          <Title heading="h2" className="text-2xl font-bold">
            Your destination is waiting. <br /> Your van is ready.
          </Title>

          <Button
            ele={Link}
            className="mt-6 w-max"
            variant="secondary"
            to="/vans"
          >
            Explore our vans
          </Button>
        </div>
      </div>
    </>
  )
}
