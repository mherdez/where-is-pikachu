
import { writable } from 'svelte/store';

const iniPika = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
  };
};


export const numPika = iniPika();

const pikachuStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    setPika: (pikachu) => {
      update(n => [...n, pikachu]);
    },

  };

};

export const pikachu = pikachuStore();


const heartStore = () => {
  const { subscribe, set, update } = writable(3);

  return {
    subscribe,
    setHeart: (heart) => {
      set(heart);
    },
    updateHeart: () => {
      update(n => n - 1);
    }

  };

};

export let hearts = heartStore();


const gameStore = () => {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    setGame: (game) => {
      set(game);
    },
  };

};

export let game = gameStore()

