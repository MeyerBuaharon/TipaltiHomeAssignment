class Person {
  constructor(person) {
    this.fullname = person.fullName;
    this.address = person.address;
  }

  equal = (otherPerson) =>
    this.fullname.equels(otherPerson.fullname) &&
    this.address.equels(otherPerson.address);

  isHavingDirectRelation = (otherPerson) =>
    this.FullName.equal(otherPerson.FullName) ||
    this.Address.equal(otherPerson.Address);
}

export default Person;
