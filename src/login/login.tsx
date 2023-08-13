import { BaseInput } from '@/base-input'
import { Button } from '@/button'
import { ShowPassword } from '@/show-password'
import { Title } from '@/title'
import { useLocation } from 'react-router-dom'

export const Login = () => {
  const location = useLocation()

  return (
    <div className="max-w-4xl mx-auto pt-12 pb-16 px-4">
      <h1>{location.state?.message}</h1>

      <Title heading="h2" className="text-3xl text-center mb-11">
        Sign in to your account
      </Title>

      <form className="max-w-[30.875em] mx-auto flex flex-col gap-5">
        <div className="flex flex-col rounded-md border border-gray-200 overflow-hidden [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-200">
          <BaseInput>
            <input
              className="outline-none min-h-[2.625em] text-base placeholder:text-black-100 px-4 leading--[2.625em] w-full"
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
            />
          </BaseInput>

          <BaseInput>
            <ShowPassword>
              {({ show }) => (
                <input
                  className="outline-none min-h-[2.625em] text-base placeholder:text-black-100 px-4 leading--[2.625em] w-full"
                  id="password"
                  type={show ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
              )}
            </ShowPassword>
          </BaseInput>
        </div>

        <Button ele="button" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  )
}
