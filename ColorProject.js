var pickedColor;
var totalSquares = 6;
var colors = [];
var square = document.querySelectorAll('.square');
var reset = document.querySelector('#reset');
var mode = document.querySelectorAll('.mode');
var head = document.getElementById('Heading'); //Heading
var current = document.getElementById('current');  //Rgb display
var message = document.getElementById('message');  //Correct, Try again
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');



init();

reset.addEventListener('click',function(){
    Defaults();  
});



function Correct(){
    //Change background color to correct color
    for(var i=0;i<totalSquares;i++){
        square[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(squares){ 
    // Return array of random colors
    var arr = []
    for(var i=0;i<squares;i++)
    {
        arr.push("rgb(" + Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")");
    }
    return arr;
}

function pickRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function Defaults()
{
    colors = pickColor(totalSquares);
    message.textContent = '';
    reset.textContent = 'New Colors';
    pickedColor = pickRandom(colors);
    head.style.background = 'steelblue';
    current.textContent = pickedColor;
    for(var i = 0; i<square.length;i++){
        if(colors[i])
        {
            square[i].style.display = 'block';  // Make all squares visible.
            square[i].style.background = colors[i];
        }
        else{
            square[i].style.display = 'none';  // Remove 3 squares when Easy mode.
        }
    }
}

function init(){
    
    modeButtons();
    setSquares();  
    Defaults();

}

function modeButtons(){
    for(var i =0; i<mode.length;i++)  // Mode buttons event listners
    {   
    mode[i].addEventListener('click',function()
    {
        mode[0].classList.remove('selected');
        mode[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent==='EASY'?totalSquares=3: totalSquares=6;
        Defaults();
    });
    }
}

function setSquares(){
    for(var i=0;i<totalSquares;i++){  // Square blocks event listeners
        square[i].addEventListener('click',function(){
            if (this.style.backgroundColor===pickedColor)
            {
                Correct();
                message.textContent = "Correct👍";
                head.style.background = pickedColor;
                reset.textContent = 'Play Again';
            }
            else{
                this.style.backgroundColor = 'black';
                message.textContent = "Try Again!🤘";
                reset.textContent = 'New Colors';
                
            }
        });
    }
}
