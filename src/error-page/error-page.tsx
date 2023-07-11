import notFoundImg from '@/assets/van-illustration.png'
import { Title } from '@/title'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string } | { message: string }
  let errorMsg

  if ('statusText' in error) {
    errorMsg = error.statusText
  } else {
    errorMsg = error.message
  }

  return (
    <div className="container h-full mx-auto flex flex-col items-center text-center justify-center">
      <Title heading="h2">Oh, no!</Title>

      <p className="mt-5">Sorry, our van has broken down.</p>

      <img src={notFoundImg} className="w-60 my-6" />

      <p className="text-sm">{errorMsg}</p>
    </div>
  )
}
