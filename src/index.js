module.exports = function reverse(n) {
    let massiv = n.toString().split('');
    let massiv_reverse = n.toString().split('').reverse();
    let end_simbol = massiv_reverse.length-1;
    let last_simbol = massiv_reverse[end_simbol];
    
    
    if (Number.isInteger(+last_simbol)) {
        return massiv_reverse.join('');
    }
    else {
        let result = massiv.splice(0, 1);
        return massiv.reverse().join('');
    }
    
    
    
    
}
