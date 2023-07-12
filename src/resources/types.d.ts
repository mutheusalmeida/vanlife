declare module 'vans' {
  export type VanType = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    type: 'luxury' | 'simple' | 'rugged'
  }
}
