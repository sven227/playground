// linkedlist with 2 properties head-node and tail-node
// each node will have a next and a prev pointer


//create contructor functions - initialising head and tail node
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;

}

//adding new node to head 
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    //handle case where a head is present - head 
    if (this.head) this.head.prev = newNode; // this references linkedlist function
    else this.tail = newNode;  //if head does not exist new node will be head and tail
    this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
    newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}




LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.prev = null;
    else this.head = null;
    return val;
}

LinkedList.prototype.search = function (searchvalue) {
    var currentNode = this.head;

    while (currentNode) {

        if (currentNode.value === searchvalue) {
            return currentNode.value;
        };
        currentNode = currentNode.next;
    }
    return null;
}
LinkedList.prototype.indexof = function (value) {
    var currentNode = this.head;
    var index = 0;
    var results = [];
    while (currentNode) {

        if (currentNode.value === value) {
            results.push(index);

        };
        currentNode = currentNode.next;
        index++;

    }
    return results;
}


var myll = new LinkedList();
myll.addToTail(3);
myll.addToTail(5);
myll.addToTail(3);
myll.addToTail(8);
//console.log(myll.removeTail());
console.log(myll.search(3));
console.log(myll.indexof(3));


//console.log(myll);
//console.log(myll.tail.prev.prev); 
