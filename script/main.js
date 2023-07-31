let meterInput = document.getElementById('inMeter');
let centimeterInput = document.getElementById('inCentimeter');
let kilometerInput = document.getElementById('inKilometer');

let btn = document.getElementById('button');

function roundNumber(number) {
    return Math.round(number*10000000)/10000000
};

meterInput.addEventListener('input', function(){
    let mLength = parseFloat(meterInput.value);
    let cmLength = mLength * 100;
    let kmLength = mLength / 1000;

    centimeterInput.value = roundNumber(cmLength);
    kilometerInput.value = roundNumber(kmLength);
});

centimeterInput.addEventListener('input', function(){
    let cmLength = parseFloat(centimeterInput.value);
    let mLength = cmLength / 100;
    let kmLength = cmLength / 100000;

    meterInput.value = roundNumber(mLength);
    kilometerInput.value = roundNumber(kmLength);
});

kilometerInput.addEventListener('input', function(){
    let kmLength = parseFloat(kilometerInput.value);
    let mLength = kmLength * 1000;
    let cmLength = kmLength * 100000;

    meterInput.value = roundNumber(mLength);
    centimeterInput.value = roundNumber(cmLength);
});

btn.addEventListener('click', ()=> {
    meterInput.value = "";
    centimeterInput.value = "";
    kilometerInput.value = "";
});