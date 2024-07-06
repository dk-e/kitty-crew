const users = ["yanis", "jamari", "dan", "gov", "nick", "oliver", "zaahir"];
const randomUser = users[Math.floor(Math.random() * users.length)];

function massOfUser() {
  if (randomUser === "gov") {
    const mass = 99364558;
    console.log(randomUser, "weighs", mass, "kg.");
  } else {
    const mass = Math.floor(Math.random() * 100) + 1;
    console.log(randomUser, "weighs", mass, "kg.");
  }
}

massOfUser();
