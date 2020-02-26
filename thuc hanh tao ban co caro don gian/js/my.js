let b = document.getElementById('game');
let board = [];
let data = '';
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0, 0);
}
for (let i = 0; i < 5; i++) {
    data += '<br>';
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + '&nbsp;&nbsp;';
    }
}
b.innerHTML = data;

function changeValue() {
    let x = parseInt(prompt('Nhap hang: '));
    let y = parseInt(prompt('Nhap cot'));
    board[x-1][y-1] = 'x';
    data='';
    for (let i = 0; i < 5; i++) {
        data += '<br>';
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&nbsp;&nbsp;';
        }
    }
    b.innerHTML = data;

}