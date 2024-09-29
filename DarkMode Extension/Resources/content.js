browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});


browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

function calcRgbInvertedValue(strRgbValue) {
    
    const rgbValue = strRgbValue.match(/\d+/g).map(Number);
    
    if (rgbValue.some(value => value > 200)) {

        rgbValue[0] = 255 - rgbValue[0];
        rgbValue[1] = 255 - rgbValue[1];
        rgbValue[2] = 255 - rgbValue[2];
    }
    return `rgb(${rgbValue[0]}, ${rgbValue[2]}, ${rgbValue[2]})`;
}


const divs = document.querySelectorAll("*");

divs.forEach(div => {
    const divBgColor = getComputedStyle(div).backgroundColor;

    const invertedRgbValue = calcRgbInvertedValue(divBgColor);

    console.log(`the original value is ${divBgColor} and the inverted value is ${invertedRgbValue}`);

    div.style.backgroundColor = invertedRgbValue;
    div.style.color = "rgb(211, 211, 211)";
    
    if (div.tagName.toLowerCase() == "input"){
        div.style.border = "1px solid #cccccc";
    }
});


const body = document.querySelector("body");

body.style.backgroundColor = "rgb(0, 0, 0)";
