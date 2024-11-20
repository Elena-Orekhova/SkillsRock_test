// 1. Fetch API — Случайные пользователи
function fetchRandomUsers() {
  const userList = document.getElementById('user-list');
  const loadingMessage = document.getElementById('loading-message');
  const errorMessage = document.getElementById('error-message');
  
  // Сообщение о загрузке
  loadingMessage.textContent = "Загрузка...";
  errorMessage.textContent = "";

  // Запрос к API
  fetch('https://randomuser.me/api/?results=10')
    .then(response => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить пользователей');
      }
      return response.json();
    })
    .then(data => {
      while (userList.firstChild) {
        userList.removeChild(userList.firstChild);
      }

      // Отображаем каждого пользователя
      data.results.forEach(user => {
        const listItem = document.createElement('li');
        listItem.classList.add('user');
        const img = document.createElement('img');
        img.src = user.picture.thumbnail;
        img.alt = `${user.name.first} ${user.name.last}`;
        listItem.appendChild(img);

        const namePara = document.createElement('p');
        namePara.textContent = `Имя: ${user.name.first} ${user.name.last}`;
        listItem.appendChild(namePara);

        const emailPara = document.createElement('p');
        emailPara.textContent = `Email: ${user.email}`;
        listItem.appendChild(emailPara);

        userList.appendChild(listItem);
      });
      loadingMessage.textContent = '';
    })
    .catch(error => {
      errorMessage.textContent = error.message;
      loadingMessage.textContent = '';
    });
}

// 2. Карусель изображений
let currentIndex = 0;
let images = []; // Массив для хранения URL изображений

// Генерация случайных изображений
function getRandomImageUrl() {
  return `https://picsum.photos/300?random=${Math.random()}`;
}

// Заполнение массива случайными изображениями
function loadImages() {
  for (let i = 0; i < 20; i++) {
    images.push(getRandomImageUrl());
  }
  console.log(images);
}

// Отображение изображения и переход
function showImage(index) {
  const imgElement = document.getElementById('carousel-image');
  if (images.length > 0) {
    imgElement.src = images[index % images.length];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Загружаем изображения и запускаем карусель
loadImages();
setInterval(nextImage, 3000);
showImage(currentIndex);
