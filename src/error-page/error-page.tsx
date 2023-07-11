import { Title } from '@/title'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string }

  console.log(error.statusText)

  return (
    <div className="container flex flex-col items-center text-center justify-center">
      <Title heading="h2">Oh, no!</Title>

      <p>Sorry, our van has broken down.</p>
    </div>
  )
}
