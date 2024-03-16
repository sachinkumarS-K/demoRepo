const user1 = {
  name: "John",
  class: "10",
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

// const user2 = JSON.parse(JSON.stringify(user1));
const { address: add, ...info } = user1;
const user2 = { ...info };
user2.address = { ...add, city: "Delhi" };
// console.log(user2);
user2.name = "SACHIN";
// user2.address.city = "Patna";
// console.log(add);
// console.log(user2);
// console.log(user1);

// console.log(user2);
const arr = [];
function countDown(n) {
  if (n <= 0) return;
  arr.push(n);
  const count = countDown(n - 1);
}

countDown(10);
console.log(arr);
