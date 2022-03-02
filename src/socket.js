const pool = require('./database');

function generarElementos() {
  let datos = [];
  for (let i = 0; i < 10; i++) {
    let gn = Math.ceil(Math.random() * 10);
    datos.push({
      dia: i + 1,
      total: gn,
      restantes: gn,
    });
  }
  return datos;
}

let elementos = generarElementos();

function test() {
  const respuesta = pool
    .query('select * from usuario')
    .then(a => console.log(a.rows));
}
function test_create() {
  pool
    .query('create table test (nombre varchar(30), clave varchar(10))')
    .then(res => console.log(res));
}

export default io => {
  io.on('connection', socket => {
    const address = socket.handshake;

    console.log('Nueva conexión', socket.id);
    console.log('Ip: ', address.headers['x-forwarded-for']);
    test();

    socket.emit('connected');
    socket.emit('render', { elementos });

    socket.on('client:select', data => {
      const res = elementos.findIndex(e => e.dia == data.dia);
      if (elementos[res].restantes != 0)
        elementos[res].restantes = elementos[res].restantes - 1;

      io.emit('render', { elementos });
    });
  });
};
