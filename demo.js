function generateName() {
  const Name = [
    "Hi:Alfi",
    "Hi:Abdikadir",
    "Hi:Andrea",
    "Hi:Brett",
    "Hi:Daniel",
    "Hi:Dante",
    "Hi:Lupe",
    "Hi:Jaranesca",
    "Hi:Jesus",
    "Hi:Kaaliyah",
    "Hi:Kadiatou",
    "Hi:Kayla",
    "Hi:Leslie",
    "Hi:Maximo",
    "Hi:Moncerrat",
    "Hi:Niran",
    "Hi:Remsey",
    "Hi:Rene",
    "Hi:Sabrina",
    "Hi:Uriel",
    "Hi:Victor",
  ];

  // Randomly select a Name
  const index = Math.floor(Math.random() * Name.length);

  document.getElementById("displayName").innerHTML = Name[index];
  // return Name[index];
}

// Example usage:
let thequestion = generateName();
