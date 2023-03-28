
export const createPokemonSet = () => {
  const pokemones = new Set();

  const pika = [1, 2, 3, 4, 5].sort((a, b) => Math.random() - 0.5);

  const pikachu = () => {
    const id = pika.shift();
    return {
      id: `p${id}`,
      url: `/assets/images/pika${id}.svg`
    };

  };


  while (pokemones.size < 2) {
    const p = Math.floor(Math.random() * 600 + 1);
    if (p != 25 && p != 26) {
      pokemones.add({ id: p, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p}.svg` });
    }
  }
  pokemones.add(pikachu());

  const order = [0,1,2].sort( () => Math.random() - 0.5)

  const p = [...pokemones]
  return [p[order[0]],p[order[1]],p[order[2]],];
};
