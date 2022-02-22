window.onload = () =>{
    main();
}

function main(){
    const main = document.getElementById('main');
    const btn = document.getElementById('change');

    btn.addEventListener('click', function(){
        const bgColor = generateRGBcolor();
        main.style.backgroundColor = bgColor;
    })
}


function generateRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}