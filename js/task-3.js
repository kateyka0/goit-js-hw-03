function getElementWidth(content, padding, border) {
    const contentWidt = Number.parseFloat(content); 
    const paddingWidth = Number.parseFloat(padding);
    const borderWidth = Number.parseFloat(border);
    const getElementWidt = contentWidt + 2 * paddingWidth + 2 * borderWidth;
    return getElementWidt
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));