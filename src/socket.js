let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    if (socket) return;
    socket = socketio(url);

}

export const emit = (event, ...args) => socket.emit(event, ...args);