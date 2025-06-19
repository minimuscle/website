import { Link } from "@tanstack/react-router"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const Nav = () => {
  return (
    <div className="flex justify-between pt-15 px-25">
      <div className="flex items-center">
        <p className="text-2xl font-bold bg-gradient-to-tr from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Dumblydorr
        </p>
        <p className="text-2xl font-bold bg-gradient-to-tr from-orange-500 to-yellow-300 text-transparent bg-clip-text">
          .online
        </p>
      </div>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Resume</Link>
      </div>
    </div>
  )
}
