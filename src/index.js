import Graph from "node-dijkstra";

const route = new Graph();

const initPerson = (people) => {
  for (let i = 0; i < person.length; i++) {
    let relations = {};
    for (let j = 0; j < person.length; j++) {
      if (person[i].isHavingDirectRelation(person[j])) {
        relations[person[j]] = 1;
      }
    }
    route.addNode(person[i], relations);
  }
};

const findMinRelationLevel = (personA, personB) => {
  return route.path(personA, personB);
};
