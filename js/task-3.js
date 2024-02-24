'use strict'

function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingtWidth = parseFloat(padding);
    const bordertWidth = parseFloat(border);

    const totalWidth = contentWidth + paddingtWidth * 2 + bordertWidth * 2;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200















// function getElementWidth(content, padding, border) {
//     // Перетворюємо рядки у числа, відкидаючи "px"
//     const contentWidth = parseFloat(content);
//     const paddingWidth = parseFloat(padding);
//     const borderWidth = parseFloat(border);

//     // Обчислюємо загальну ширину елемента, враховуючи box-sizing: border-box
//     const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    
//     return totalWidth;
// }

// // Приклади виклику функції для перевірки її коректності
// console.log(getElementWidth("50px", "8px", "4px"));   // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px"));  // 200