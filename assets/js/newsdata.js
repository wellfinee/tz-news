import { news } from "./data.js"
const root = document.getElementById("news--root")

console.log(news)
const render = news.map(item => (
    `<div class="news__element">
      <div class="element__text">
          <p class="element__data">${item.data}</p>
          <h2 class="element__title">${item.title}</h2>
          <button onClick="openModal(${item.id})">Читать далее</button>
      </div>
  
      <div class="element__image">
          <img src="${item.img}">
      </div>
    </div>`
  ));
  
console.log(render)

root.innerHTML = render.join("")