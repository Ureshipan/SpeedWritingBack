document.getElementById('loadStreets').addEventListener('click', async () => {
  const response = await fetch('http://127.0.0.1:5000/api/streets');
  const data = await response.json();
  const list = document.getElementById('streetsList');
  list.innerHTML = '';

  if (data.streets) {
    data.streets.forEach(street => {
      const li = document.createElement('li');
      li.textContent = street;
      list.appendChild(li);
    });
  } else {
    list.innerHTML = '<li>Ошибка загрузки данных</li>';
  }
});
