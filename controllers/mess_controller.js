const { messages } = require('../models');

function appendMess(nick, mess, color, date){
    messages.create({nick: nick, mess: mess, date: date, color: color});
}
function returnMess(){
    messages.findAll().then(messages => {
        console.log("А это из функции: "  + messages);
        return messages;
    });
}
module.exports = {
    appendMess,
    returnMess
}