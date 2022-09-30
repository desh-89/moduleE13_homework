const btn = document.querySelector('.btn-get-json');
const content = document.querySelector('.json-info');

btn.addEventListener('click', ()=>{
  fetch('http://localhost:3000/profiles/')
    .then(response => response.json())
    .then(json => {
      json.forEach(element => {
        const p = document.createElement('p');
        p.innerHTML = `Id ${element.id} - Name ${element.name}`;
        content.appendChild(p);
      });
  }
)

});
