import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 40510 });

wss.on('open', () => {
  console.log('connection open');
})

wss.on('connection', ws =>  {
  ws.on('message', message => console.log(`message: ${message}`));
  
  setInterval(() => ws.send(`${new Date()}`), 1000);
});



