
import io from 'socket.io-client';
const globalAny = (global as any)
function initSocket() {
    const socket = io('', { path: '/ws' });
    socket.on('news', (data) => {
        console.log(data);
        socket.emit('my other event', { my: 'data from client' });
    });
    socket.on('msg', (data) => {
        console.log(data);
    });
    globalAny.socket = socket;
    return socket;
}

export default initSocket