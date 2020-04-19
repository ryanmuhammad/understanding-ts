// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // Array
//   role: [number, string]; // Tuple Fixed-length array
// } = {

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // by default 0, 1, 2

const person = {
  name: "Riyan",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
  //   role: [2, "author"] // Tuple
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
  console.log("is admin");
}
