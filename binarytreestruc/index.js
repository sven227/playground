
function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

BST.prototype.contains = function (value) {
    if (this.value === value) return true;
    if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
    }
    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
    return false;
};

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this);
};

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var queue = [this];
    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
};

BST.prototype.getMinVal = function () {
    if (this.left) return this.left.getMinVal();
    else return this.value;
};

BST.prototype.getMaxVal = function () {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
};

function bstTest() {

    var bst = new BST(50);

    bst.insert(30);
    bst.insert(70);
    bst.insert(100);
    bst.insert(60);
    bst.insert(59);
    bst.insert(20);
    bst.insert(45);
    bst.insert(35);
    bst.insert(85);
    bst.insert(105);
    bst.insert(10);
    console.log(bst.value);

    function log(node) {
        console.log(node.value);
    }


    let bstArray = [];

    function addParent(node) {
        if (node.left) {
            bstArray.push({ key: node.left.value.toString(), parent: node.value.toString(), name: node.left.value.toString() });
        }
        if (node.right) {
            bstArray.push({ key: node.right.value.toString(), parent: node.value.toString(), name: node.right.value.toString() });
        }
        return bstArray;
    }

    function addRoot(node) {
        bstArray.push({ key: node.value.toString(), name: node.value.toString() });
        return bstArray;
    }

    //   bst.depthFirstTraversal(log, 'in-order');
    console.log("********")
    addRoot(bst);
    bst.depthFirstTraversal(addParent, 'in-order');
    console.log("\n", bstArray);
    return bstArray;
    //bst.breadthFirstTraversal(log);
    //console.log("\n", "min value:", bst.getMinVal());
    //console.log("\n", "max value:", bst.getMaxVal());
}


//******************************************************* */
var $ = go.GraphObject.make;
var myDiagram =
    $(go.Diagram, "myDiagramDiv",
        {
            initialContentAlignment: go.Spot.Center, // center Diagram contents
            "undoManager.isEnabled": false, // enable Ctrl-Z to undo and Ctrl-Y to redo
            layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                { angle: 90, layerSpacing: 35 })
        });

// define a simple Node template

myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "Ellipse", { fill: "#0000FF", stroke: null }),
      
        $(go.TextBlock,
            "Default Text",  // the initial value for TextBlock.text
            // some room around the text, a larger font, and a white stroke:
            { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
            new go.Binding("text", "key"))
    );

//  myDiagram.nodeTemplate =
//   $(go.Node, "Horizontal",
//     // the entire node will have a light-blue background
//     { background: "#44CCFF" },
//     $(go.TextBlock,
//       "Default Text",  // the initial value for TextBlock.text
//       // some room around the text, a larger font, and a white stroke:
//       { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
//       // TextBlock.text is data bound to the "name" attribute of the model data
//       new go.Binding("text", "name"))
//   ); 


// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
    $(go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape


var model = $(go.TreeModel);
model.nodeDataArray = bstTest(); //returns bstArray 
//   [ // the "key" and "parent" property names are required,
//     // but you can add whatever data properties you need for your app
//     { key: "1",              name: "Don Meaw",   source: "cat1.png" },
//     { key: "2", parent: "1", name: "Demeter",    source: "cat2.png" },
//     { key: "3", parent: "1", name: "Copricat",   source: "cat3.png" },
//     { key: "4", parent: "3", name: "Jellylorum", source: "cat4.png" },
//     { key: "5", parent: "3", name: "Alonzo",     source: "cat5.png" },
//     { key: "6", parent: "2", name: "Munkustrap", source: "cat6.png" }
//   ];
myDiagram.model = model;