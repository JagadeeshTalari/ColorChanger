
let btn = document.querySelector("#button");


btn.addEventListener("click", () => {

    let canvas = document.querySelector("#canvas");
    canvas.style.backgroundColor = colorFunc();
    

    function colorFunc(){
        let hexValue = "0123456789ABCDEF";
        let color = "#";
        for (let i=0; i<6; i++){
            let digit = Math.round(Math.random() * 15);
            
            color = color + hexValue[digit];
        }
        console.log(color);
        return color;

    }

})