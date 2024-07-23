class List {
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1
    }

    appendNode(data){
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size +=1;
    }

    traversing(){
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.size){
            console.log(currentNode, '>>>>>>>>');
            currentNode = currentNode.next
            counter ++;
        }
    }
};

const list = new List(45);

list.appendNode(34)
list.appendNode(9)
// console.log(list);


list.traversing()


