import socketio from './socket-socketio';
import sockjs from './socket-sockjs';

const PROTOCOLS = { socketio, sockjs };
export default function (socketUrl, customData, path, protocol,token, protocolOptions) {
  protocol = protocol || 'socketio';
  const socketProtocol = PROTOCOLS[protocol];

  if (socketProtocol !== undefined) {
    return socketio(socketUrl, customData, path,token, protocolOptions);
  }
  throw new Error(`Undefined socket protocol ${protocol}`);
}
