const getDestacada = () => {
  console.log("ejecutando GET IMAGEN");
  let imagen = window.localStorage.getItem("Destacada");
  let categoria = window.localStorage.getItem("Categoria");
  let descripcion = window.localStorage.getItem("Descripcion")
  let contenedor = document.getElementById("container-img");
  let descripciondest= document.getElementById("descripcion-dest")

  if (categoria == "Romanticas") {
    contenedor.innerHTML = `
    <img src=${imagen}>
    `;
    descripciondest.innerHTML = `
    <p>${descripcion}</p>`
  } else {
    contenedor.innerHTML = `
    <img src="https://pics.filmaffinity.com/five_feet_apart-293759292-large.jpg"> 
    `
    descripciondest.innerHTML = `
    <p>Stella, de 17 años, está ingresada en un hospital porque padece fibrosis quística. Su monótona existencia cambia cuando llega Will, un adolescente con la misma dolencia. Sin embargo, las normas del hospital prohíben el contacto entre ellos.</p>
    `
  }
};

getDestacada();

const obtenerPelis = async () => {
  const results = await fetch("http://localhost:3000/movies");
  const pelis = await results.json();
  return pelis;
};

const mapeoPeliculas = async () => {
  const peli = await obtenerPelis();
  const div = document.getElementById("container_peliculas");
  console.log("Agregando pelicula");

  const peliculas = peli.filter(a => a.categoria == 'Romanticas')

  const peliculas2 = peliculas.map(a => `
  <div class="card mb-3">
      <img src="${a.img}" class="card-img-top col-lg-3" alt="...">
      <div class="card-body">
        <h5 class="card-title">${a.titulo}</h5>
        <p class="card-text">Año: ${a.anio}</p>
        <p class="card-text">Duracion: ${a.duracion}</p>
        <p clas"card-text">Genero: ${a.categoria} </p>
        <p class="card-text">${a.descripcion}</p>
      </div>
    </div>
  `)
 
  div.innerHTML = peliculas2.join("");
}

mapeoPeliculas()

