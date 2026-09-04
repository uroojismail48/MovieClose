        import { Link } from "react-router-dom";
function Page404() {
  return (
    <div>


    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1
        style={{ WebkitTextStroke: "1px white" }}
        className="font-bold text-9xl text-transparent"
      >
        404
      </h1>

      <p className="text-2xl font-semibold">This page doesn't exist.</p>
      <p className="text-gray-400 max-w-md text-center">
        Looks like this scene got cut. Let's get you back to something worth watching.
      </p>

      <Link
        to="/"
        className="bg-red-600 px-8 py-3 rounded-md font-bold hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>



    </div>
  )
}

export default Page404;