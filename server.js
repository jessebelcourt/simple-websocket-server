import express from 'express';
import ws from 'ws';

const WebSocketServer = ws.Server;
const wss = new WebSocketServer({port: 40510});

wss.on('connection', ws => {
  ws.on('message', message => console.log('message'));
})


