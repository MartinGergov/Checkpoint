const contenedor = document.querySelector(".container");
let username = "manuelbenitez";
let url = `https://api.github.com/users/${username}/repos`;

async function showRepo() {
  const repos = await fetch(url);
  const data = await repos.json();
  data.forEach((repo) => {
    const titulo = document.createElement("h1");
    titulo.textContent = repo.name;
    contenedor.appendChild(titulo);
  });
  console.log(data);
}

showRepo();
