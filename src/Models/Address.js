class Address {
  constructor(address) {
    this.street = address.street;
    this.city = address.city;
  }

  equels = (adressToEquel) => {
    return (
      this.street === adressToEquel.Street && this.city === adressToEquel.City
    );
  };
}
export default Address;
