var names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,20,21,22,23,24,25,26,27,28,29,30];

for (var i = 0; i <= names.length - 1; i++) {

    if (names[i] % 2 == 0) {
    console.log(names[i] + ' is even');
    }
    else {
    console.log(names[i] + ' is odd');
    }
}
