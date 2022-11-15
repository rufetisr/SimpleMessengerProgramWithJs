class Message{
    constructor(authorName, sendTime, textMessage){
        this.AuthorName = authorName; 
        this.SendTime = sendTime; 
        this.TextMessage =textMessage; 
    }
    toString(){
        return `${this.SendTime} ${this.AuthorName} ${this.TextMessage}`;
    }
}

class Messenger extends Message{
    constructor(){
        super();
        this.arr = [];
    }

    show_history(){
        this.arr.forEach(element => {
           console.log(element.toString());
        });
    }

    send(author, text){
        this.AuthorName = author;
        this.TextMessage = text;
        this.SendTime = this.gettime();
        let message = new Message(author, this.gettime() ,text);
        this.arr.push(message);
    }

    gettime(){
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
}

let messenger = new Messenger();
messenger.send("Rufet", "salam necesen");
console.log(messenger.toString());
messenger.send("Nezrin", "salam yaxsiyam");
console.log(messenger.toString());
messenger.show_history();