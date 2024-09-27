const ageIsNumber = (data) => {
  return data.map((person) => typeof person.age === "number");
};

const hasContactDetails = (data) => {
  return data.map(
    (person) =>
      (person.hasOwnProperty("phone") && person.phone !== "") ||
      (person.hasOwnProperty("email") && person.email !== "")
  );
};

module.exports = { ageIsNumber, hasContactDetails };
