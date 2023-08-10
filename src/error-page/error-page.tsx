import notFoundImg from '@/assets/van-illustration.png'
import { Button } from '@/button'
import { Title } from '@/title'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string } | { message: string }
  let errorMsg

  if ('statusText' in error) {
    errorMsg = error.statusText
  } else {
    errorMsg = error.message
  }

  console.log(error)

  return (
    <div className="container max-w-md px-4 h-full mx-auto flex flex-col items-center text-center justify-center">
      <Title heading="h2">Oh, no!</Title>

      <p className="mt-5">Sorry, our van has broken down.</p>

      <img src={notFoundImg} className="w-60 h-40 my-6" />

      <p className="text-sm">{errorMsg}</p>

      <Button ele={Link} to="/" className="w-full my-7" variant="secondary">
        Return to home
      </Button>
    </div>
  )
}
