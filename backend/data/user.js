import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "User1",
    email: "user1@example.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "User2",
    email: "user2@example.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

export default users;
