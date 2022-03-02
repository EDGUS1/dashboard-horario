const socket = io();

const App = document.querySelector('#app');

function crearCuadros(a) {
  let cadena = '';
  for (let i = 0; i < a.length; i++) {
    cadena += `<div
    class="cuadrado h-36 w-36 p-6 m-1 rounded ${
      a[i].restantes > 0 ? 'bg-slate-300 hover:bg-slate-500' : 'bg-red-300'
    } shadow cursor-pointer  flex flex-col items-center justify-center"
  ><h1 class="text-xl font-bold italic">Dia: ${a[i].dia}</h1><p>Total: ${
      a[i].total
    }</p><p>Restantes: ${a[i].restantes}</p></div>`;
  }
  return cadena;
}

socket.on('connected', () => {
  console.log('%cServidor conectado', 'background: #222; color: #bada55');
});

socket.on('render', data => {
  App.innerHTML = crearCuadros(data.elementos);
  const cuadrados = document.querySelectorAll('.cuadrado');
  cuadrados.forEach(e =>
    e.addEventListener('click', () =>
      socket.emit('client:select', {
        dia: e.childNodes[0].textContent.split(' ')[1],
      })
    )
  );
});
