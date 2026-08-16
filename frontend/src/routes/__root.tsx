import { Background } from '#/routes/-components/background'
import { Navbar } from '#/routes/-components/modules/navbar'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import '../styles.css'

export const Route = createRootRouteWithContext()({
  component: RootComponent,

})

function RootComponent() {
  return (
    <>
      <Background />
      <div className='content'>
        <Navbar />
        <Outlet />
      </div>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
