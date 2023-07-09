import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main>
      <section aria-label="Hero attention grabber" className="bg-[url('../assets/hero-image.png')] bg-black-100 bg-blend-overlay bg-center bg-cover flex justify-center">
        <div className="max-w-lg flex flex-col px-7 py-16 gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-4xl leading-[42px] font-extrabold">You got the travel plans, we got the travel vans.</h2>

            <p className="text-white font-medium">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          </div>

          <Link className="font-bold bg-orange px-4 h-[50px] flex justify-center rounded-md leading-[50px] text-white hover:text-gray-100 hover:bg-orange-700 transition-all" to="/vans">Find your van</Link>
        </div>
      </section>

      <section className="container max-w-4xl mx-auto py-14 px-4">
        <h2 className="mb-8 text-[2rem] font-bold leading-[1.1875em] max-w-lg">Gain the freedom to travel the world on wheels</h2>

        <div className="[&>p:not(:last-child)]:mb-[1.375em]">
          <p className="text-base leading-[1.375em]">
            Traveling in a van is a totally unique experience. Not only for all the places you'll discover and the people you'll meet, but because spending so much time in such a small space will make you realize that you actually need very little to live happily.
          </p>

          <p  className="text-base leading-[1.375em]">
            The van trips will help you appreciate things that can’t be bought—a sunset on a mountain, a thunderstorm in the middle of the night, or a coffee with a view of the sea. Once you’re comfortable with a minimalist lifestyle, you can decide to sell or donate everything at home that's not essential, and travel even lighter than before.
          </p>
        </div>
      </section>
    </main>
  )
}
