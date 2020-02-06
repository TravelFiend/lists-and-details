export default (pageNum) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${pageNum}`)
    .then(res => res.json());
};

export const CharacterDetail = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};
