class Name {
  constructor(name) {
    this.firstName = name.firstName;
    this.lastName = name.lastName;
  }

  equals = (otherName) =>
    this.FirstName === otherName.FirstName &&
    this.LastName === otherName.LastName;
}

export default Name;
