type Result = {
  id: number
  url: string
  name: string
  image: string
  __typename: string
}

type Pokemons = {
  count: number
  next: string
  previous?: null | number
  status: boolean
  message: string
  results: Result[]
  __typename: string
}

type Sprites = {
  front_default: string
  __typename: string
}

type Move2 = {
  name: string
  __typename: string
}

type Move = {
  move: Move2
  __typename: string
}

type Ability2 = {
  name: string
  __typename: string
}

type Ability = {
  ability: Ability2
  is_hidden: boolean
  slot: number
  __typename: string
}

type Type2 = {
  name: string
  __typename: string
}

type Type = {
  slot: number
  type: Type2
  __typename: string
}

type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  sprites: Sprites
  base_experience: number
  message: string
  status: boolean
  order: number
  moves: Move[]
  abilities: Ability[]
  types: Type[]
  __typename: string
}
