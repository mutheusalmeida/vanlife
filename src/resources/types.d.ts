declare module 'vanlife' {
  export type VanType = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    type: 'luxury' | 'simple' | 'rugged'
    hostId: string
  }

  export type ErrorType = {
    message: string
  }

  export type UserType = {
    name: string
    email: string
    id: string | undefined
  }
}
