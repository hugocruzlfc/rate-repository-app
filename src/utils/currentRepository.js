export function currentRepository(repositories, id) {
  return repositories.find((repository) => repository.node.id === id);
}
