var { EventEmitter } = require('fbemitter');
const globalAny=(global as any)
function initEmitter() {
    console.log("Sang");
    var myEmitter = new EventEmitter();
    globalAny.myEmitter = myEmitter;

  }
  export default initEmitter;
