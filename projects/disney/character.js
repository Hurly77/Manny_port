const url = 'https://api.disneyapi.dev/characters';
const id = window.location.hash.split('#').join('');

function createCharacter(data) {
  const container = document.createElement('div');
  container.className = 'bg-base-100 flex bg-base-300 h-52 m-10';

  const containerContent = document.createElement('div');
  containerContent.className = 'h-32';

  const name = document.createElement('h2');
  name.className = 'card-title text-2xl text-black mx-4';
  name.innerHTML = data.name;

  const image = document.createElement('img');
  image.className = 'h-full';
  image.style.objectFit = 'cover';
  image.src = data.imageUrl;

  const figure = document.createElement('figure');
  figure.className = 'h-52 overflow-hidden rounded';

  containerContent.appendChild(name);
  containerContent.appendChild(name);

  figure.appendChild(image);

  container.appendChild(figure);
  container.appendChild(containerContent);
  return container;
}

function fetchCharacterById(id) {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const character = createCharacter(data);
      document.getElementById('char-card').appendChild(character);

      const shows = document.getElementById('shows');
      if (data.tvShows.length) {
        for (let show = 0; show < data.tvShows.length; show++) {
          const li = document.createElement('li');
          li.className = 'text-primary italic';
          li.innerHTML = data.tvShows[show];
          shows.appendChild(li);
        }
      } else {
        const li = document.createElement('li');
        li.className = 'text-accent italic';
        li.innerHTML = 'No Tv Shows';
        shows.appendChild(li);
      }

      const films = document.getElementById('films');
      if (data.films.length) {
        console.log(data.films);
        for (let film = 0; film < data.films.length; film++) {
          const li = document.createElement('li');
          li.className = 'text-primary italic';
          li.innerHTML = data.films[film];
          films.appendChild(li);
        }
      }
      if (!data.films.length) {
        const li = document.createElement('li');
        li.className = 'text-accent italic';
        li.innerHTML = 'No Films';
        films.appendChild(li);
      }
    });
}

fetchCharacterById(id);
