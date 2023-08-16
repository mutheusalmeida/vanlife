import { Button } from '@/button'
import { Input } from '@/input'
import { InputError } from '@/input-error'
import { InputWrapper } from '@/input-wrapper'
import { signInUser } from '@/resources/api'
import { ShowPassword } from '@/show-password'
import { Title } from '@/title'
import { Toast } from '@/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
})

type FormSchemaType = z.infer<typeof formSchema>

export const SingIn = () => {
  const location = useLocation()
  const locationTo = location.state?.from || '/'
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })
  const [error, setError] = useState('')

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      setError('')
      await signInUser(data)
      navigate(locationTo, { replace: true })
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(err.customData?.message as string)
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto pt-12 pb-16 px-4">
      {location.state?.message && (
        <Toast type="error" title="Ops!" content="You must login first" />
      )}

      {error && <Toast type="error" title="Ops!" content={error} />}

      <Title heading="h2" className="text-3xl text-center mb-11">
        Sign in to your account
      </Title>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[30.875em] mx-auto flex flex-col gap-5"
      >
        <fieldset
          className={twMerge(
            'appearance-none flex flex-col rounded-md border border-gray-200 overflow-hidden [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-200',
            isSubmitting ? '[&_*]:opacity-70 [&_*]:cursor-not-allowed' : ''
          )}
        >
          <InputWrapper>
            <Input
              id="email"
              type="email"
              disabled={isSubmitting}
              placeholder="Email address"
              {...register('email')}
            />

            {errors.email && <InputError message={errors.email.message} />}
          </InputWrapper>

          <InputWrapper>
            <ShowPassword>
              {({ show }) => (
                <Input
                  id="password"
                  type={show ? 'text' : 'password'}
                  disabled={isSubmitting}
                  placeholder="Password"
                  {...register('password')}
                />
              )}
            </ShowPassword>

            {errors.password && (
              <InputError message={errors.password.message} />
            )}
          </InputWrapper>
        </fieldset>

        <Button
          className={twMerge(
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          )}
          disabled={isSubmitting}
          ele="button"
          type="submit"
        >
          Sign in
        </Button>
      </form>

      <p className="mt-12 text-center">
        Don’t have an account?{' '}
        <Link className="text-orange-600 font-bold" to="/sign-up">
          Create one now
        </Link>
      </p>
    </div>
  )
}
