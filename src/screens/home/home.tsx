import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <section aria-label="Main content" className="bg-[url('../assets/hero-image.png')] bg-black-100 bg-blend-overlay bg-center bg-cover flex justify-center mx-auto">
      <div className="max-w-lg flex flex-col px-7 py-16 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-4xl leading-[42px] font-extrabold">You got the travel plans, we got the travel vans.</h2>

          <p className="text-white font-medium">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        </div>

        <Link className="font-bold bg-orange px-4 h-[50px] flex justify-center rounded-md leading-[50px] text-white" to="/vans">Find your van</Link>
      </div>
    </section>
  )
}
