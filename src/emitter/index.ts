var { EventEmitter } = require('fbemitter');
const globalAny=(global as any)
function initEmitter() {
    var myEmitter = new EventEmitter();
    globalAny.myEmitter = myEmitter;

}

const EVENT_TYPE={
  EVENT_LOG:"EVEN_LOG"
}
export {
  EVENT_TYPE
};
  export default initEmitter;
