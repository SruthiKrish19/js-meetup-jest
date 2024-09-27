const validDetails = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    phone: "1234567890",
    email: "john@xyz.com",
  },
  {
    name: "Jane Doe",
    age: 31,
    gender: "female",
    phone: "1234567899",
    email: "jane@xyz.com",
  },
];

const invalidDetails = [
  {
    name: "John Doe",
    age: "thirty-two",
    gender: "male",
    phone: "",
    email: "",
  },
  {
    name: "Jane Doe",
    age: "thirty-one",
    gender: "female",
    phone: "",
    email: "",
  },
];

module.exports = { validDetails, invalidDetails };
