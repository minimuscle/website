import { TitlePage } from '#/routes/-components/title'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <TitlePage />
  </>
}
