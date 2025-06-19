import { createFileRoute, Link } from "@tanstack/react-router"
import profile from "../../assets/images/profile_dark.png"

export const Route = createFileRoute("/_index/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative flex flex-col justify-between items-center min-h-screen overflow-hidden">
      <div className="flex w-full justify-between items-center pt-10 max-w-[1250px] z-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="pl-2 text-xl">Hi 👋 I'm Josh,</h2>
            <h1 className="text-8xl font-bold">
              Frontend
              <br />
              Developer
            </h1>
          </div>
          <p className="text-lg text-gray-400">
            I build things for the web with React.JS and Typescript.
            <br />I create beatiful and user-friendly websites and applications for others to enjoy.
          </p>
          <div className="flex gap-5">
            <div className="bg-gradient-to-tr from-pink-500 to-amber-500 h-[50] w-[150] justify-center items-center flex rounded-xl">
              <Link
                to="/about"
                className=" m-px px-8 py-4 items-center flex justify-center text-lg font-bold text-white rounded-xl"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gradient-to-tr from-pink-500 to-amber-500 h-[50] w-[150] justify-center items-center flex rounded-xl">
              <Link
                to="/contact"
                className="bg-gray-900 h-[48] w-[148] m-px px-8 py-4 items-center flex justify-center text-lg text-white font-medium rounded-xl"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <img
          src={profile}
          alt="profile"
          className="w-125 h-125 border-5 object-cover object-top border-gray-800 rounded-full"
        />
      </div>
    </div>
  )
}
