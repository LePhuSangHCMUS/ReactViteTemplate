
var { EventEmitter } = require('fbemitter');
import io from 'socket.io-client';
const globalAny=(global as any)
  function initSocket() {
    const socket = io('', { path: '/ws' });
    socket.on('news', (data) => {
      console.log(data);
      socket.emit('my other event', { my: 'data from client' });
    });
    socket.on('msg', (data) => {
      console.log(data);
    });
    return socket;
  }
  
  function initEmitter() {
    console.log("Sang");
    var myEmitter = new EventEmitter();
    return myEmitter
  }


const init=()=>{
    const myEmitter = initEmitter();
    const socket = initSocket();
    globalAny.socket = socket;
    globalAny.myEmitter = myEmitter;
}
export {globalAny}
export default init;