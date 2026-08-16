import { FeaturedProject } from '#/routes/-components/modules/featured'
import { TitlePage } from '#/routes/-components/modules/title'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <TitlePage />
    <FeaturedProject />
  </>
}
