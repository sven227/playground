function fibomemo(position, cache) {

    cache = cache || [];
    if (cache[position]) return cache[position];
    else if (position < 3) return 1;
    else {
        return cache[position] = fibomemo(position - 1, cache) + fibomemo(position - 2, cache);
    }

}
console.log("\n fibomemo: ", fibomemo(1000));


// buttom up approach without recursion

function fiboButtomUp(position) {
    let array = [];
    array[0] = null;
    array[1] = 1;
    array[2] = 1;
    let maxValuefibo = 0;
    if (position <= 2) { return array }
    for (let i = 3; i <= position; i++) {

        array[i] = array[i - 1] + array[i - 2];

        if (array[i] <= Number.MAX_VALUE) {
            maxValuefibo = array[i];
          } else {
            console.log("\n El número es infinito");
            console.log("\n maximo numero calculado: ", maxValuefibo, i );
            break;
          }

    }
    return array[position];
}
// with this method javascript does not end in error of stack recursion
// but the limit is maximum number
console.log("\n fiboButtomUp: ", fiboButtomUp(5000));