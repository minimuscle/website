import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Nav } from "./_index/-components/nav"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 relative">
      <Nav />
      {/* Floating Orbs Background using Tailwind only */}
      <div className="pointer-events-none absolute inset-0 z-1">
        {/* Pink Orb */}
        <div
          className="absolute w-[28rem] h-[28rem] bg-pink-500 rounded-full blur-3xl opacity-40"
          style={{ top: "8%", left: "4%", animation: "float-orb1 8s ease-in-out infinite alternate" }}
        />
        {/* Amber Orb */}
        <div
          className="absolute w-[22rem] h-[22rem] bg-amber-400 rounded-full blur-3xl opacity-40"
          style={{ top: "60%", left: "60%", animation: "float-orb2 20s ease-in-out infinite alternate" }}
        />
        {/* Yellow Orb */}
        <div
          className="absolute w-[20rem] h-[20rem] bg-yellow-300 rounded-full blur-3xl opacity-40"
          style={{ top: "30%", left: "70%", animation: "float-orb3 22s ease-in-out infinite alternate" }}
        />
        {/* Keyframes for floating orbs */}
        <style>{`
          @keyframes float-orb1 {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-70px) scale(1.05); }
            100% { transform: translateY(40px) scale(0.98); }
          }
          @keyframes float-orb2 {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.03); }
            100% { transform: translateY(30px) scale(0.97); }
          }
          @keyframes float-orb3 {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-50px) scale(1.07); }
            100% { transform: translateY(50px) scale(0.96); }
          }
        `}</style>
      </div>
      <div className="py-10 px-30 flex-1 relative">
        <Outlet />
      </div>
    </div>
  )
}
