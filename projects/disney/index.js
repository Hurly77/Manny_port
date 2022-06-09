let url = 'https://api.disneyapi.dev/characters';

// function grabs data from url and console logs it

function createCharacter(id, name, imageUrl) {
  const listItem = document.createElement('div');
  const image = document.createElement('img');
  const link = document.createElement('a');

  image.src = imageUrl;
  image.className = 'w-full h-full overflow-hidden bg-black';
  image.style.objectFit = 'contain';
  link.innerHTML = name;
  link.className = 'link link-hover text-info card-title p-4';
  link.href = `character.html#${id}`;

  listItem.className = 'card m-2 w-56 h-72 bg-base-100 rounded shadow-xl';
  listItem.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

function fetchData(url) {
  loading = true;
  fetch(url)
    .then((res) => res.json())
    .then(function (result) {
      console.log(result);
      const characters = result.data;
      const length = characters.length;

      const unorderedList = document.createElement('div');
      let buttonGrp;
      if (document.getElementById('button-grp')) {
        buttonGrp = document.getElementById('button-grp');
      } else {
        buttonGrp = document.createElement('div');
        buttonGrp.className = 'btn-group  py-2 h-32 justify-center w-full items-center bg-neutral';
        buttonGrp.id = 'button-grp';
      }
      const nextBtn = document.createElement('button');
      nextBtn.id = 'next-btn';
      nextBtn.className = 'btn btn-sm rounded btn-accent btn-outline w-fit px-10';
      nextBtn.innerHTML = 'Next';
      const prevBtn = document.createElement('button');
      prevBtn.id = 'prev-btn';
      prevBtn.className = 'btn btn-sm rounded btn-accent btn-outline w-fit px-10';
      prevBtn.innerHTML = 'Previous';

      nextBtn.addEventListener('click', () => {
        const oldPrevButton = document.getElementById('prev-btn');
        const oldNextButton = document.getElementById('next-btn');
        if (oldNextButton && oldPrevButton) {
          buttonGrp.removeChild(oldPrevButton);
          buttonGrp.removeChild(oldNextButton);
        }
        if (result.nextPage) {
          fetchData(result.nextPage);
        }
      });

      buttonGrp.appendChild(prevBtn);
      buttonGrp.appendChild(nextBtn);

      prevBtn.addEventListener('click', () => {
        const oldPrevButton = document.getElementById('prev-btn');
        const oldNextButton = document.getElementById('next-btn');

        if (oldNextButton && oldPrevButton) {
          buttonGrp.removeChild(oldPrevButton);
          buttonGrp.removeChild(oldNextButton);
        }
        if (result.previousPage) {
          fetchData(result.previousPage);
        }
      });

      for (let i = 0; i < length; i++) {
        const character = characters[i];
        const name = character.name;
        const image = character.imageUrl;
        const id = character._id;
        const characterListItem = createCharacter(id, name, image);
        unorderedList.appendChild(characterListItem);
      }
      unorderedList.className =
        'flex flex-wrap justify-between px-4 pb-10 h-[90vh] overflow-y-auto';

      const chars = document.getElementById('characters');
      chars.innerHTML = '';
      chars.appendChild(unorderedList);
      document.querySelector('body').appendChild(buttonGrp);
    });
}

fetchData('https://api.disneyapi.dev/characters');
