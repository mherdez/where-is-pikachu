
import { writable } from 'svelte/store';


const init = () => {
  return [1, 2, 3, 4, 5].sort((a, b) => Math.random() - 0.5);
};

const pikachuStore = () => {
  const { subscribe, set, update } = writable(init());

  return {
    subscribe,
    setPika: (pikachu) => {
      update(n => n.filter( a => a != pikachu));
    },
    resetPika: () => {
      set(init());
    }
  };
};
export const pikachu = pikachuStore();

const pikaCollection = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    setCollection: (pikachu) => {
      update(n => [...n, pikachu]);
    },
    resetCollection: () =>{
      set([])
    }
  };
};
export const collection = pikaCollection();


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

const gameLevel = () => {
  const { subscribe, set, update } = writable(3);

  return {
    subscribe,
    setLevel: (lvl) => {
      set(lvl);
    },
  };

};
export let level = gameLevel()

const newGame = () => {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    setNewGame: (item) => {
      set(item);
    },
  };

};
export let newgame = newGame()

