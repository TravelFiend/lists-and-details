export default (pageNum) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${pageNum}`)
    .then(res => res.json());
};

export const CharacterDetail = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
