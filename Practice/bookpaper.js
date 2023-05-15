function paper(number1, number2, number3) {
    // console.log(number1, number2, number3);
    const totalPaperOfBook1 = number1 * 100;
    const totalPaperOfBook2 = number2 * 200;
    const totalPaperOfBook3 = number3 * 300;
    const allPaper = totalPaperOfBook1 + totalPaperOfBook2 + totalPaperOfBook3;
    return allPaper;
}

const book1 = 2;
const book2 = 4;
const book3 = 7;
const totalPaper = paper(book1, book2, book3)
console.log(totalPaper);