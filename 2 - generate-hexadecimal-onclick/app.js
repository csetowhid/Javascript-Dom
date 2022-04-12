window.onload = () =>{
    main();
}

function main(){
    const main = document.getElementById('main');
    const btn = document.getElementById('change');
    const output = document.getElementById('output');

    btn.addEventListener('click', function(){
        const bgColor = generateHexcolor();
        main.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}


function generateHexcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}