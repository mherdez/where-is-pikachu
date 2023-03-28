
import { writable } from 'svelte/store'

const pokemonStore = () => {
  const { subscribe, set, update } = writable('')

  return {
      subscribe,
      setPika: ( pikachu ) => {
          set( pikachu )
      },

  }

}

export const pikachu = pokemonStore()