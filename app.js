/*  document.addEventListener("keydown", function(event){
    alert(event.key);
    }); */


var butt = document.getElementsByTagName("button");
var keyy;
var code;
var loc;
var keyCode;
document.addEventListener("keydown", function(event){
    keyy= event.key;
    code= event.code;
    loc = event.location;
    
    
    event.preventDefault();

    if(keyy === "Escape"){
        
        document.getElementById("Esc").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "F1"){
        
        document.getElementById("F1").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "`"){
        
        document.getElementById("`").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit1"){
        
        document.getElementById("1").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit2"){
        
        document.getElementById("2").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "Tab"){
        
        document.getElementById("TAB").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "q" || keyy ==="Q"){
        
        document.getElementById("Q").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    
    if(keyy === "w" || keyy ==="W"){
        
        document.getElementById("W").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "CapsLock"){
        
        document.getElementById("CPS").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "a" || keyy ==="A"){
        
        document.getElementById("A").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "s" || keyy ==="S"){
        
        document.getElementById("S").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "ShiftLeft"){
        
        document.getElementById("LEFT_SHIFT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    if(keyy === "z" || keyy ==="Z"){
        
        document.getElementById("Z").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "x" || keyy ==="X"){
        
        document.getElementById("X").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(code === "ControlLeft"){
        
        document.getElementById("LEFT_CTRL").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    
    if(code === "MetaLeft"){
        
        document.getElementById("WND").setAttribute("class","border");
        document.getElementById("text").innerText = "Window Key";
    }
    if(code === "AltLeft"){
        
        document.getElementById("LEFT_ALT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    if(keyy === "F2"){
        
        document.getElementById("F2").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "F3"){
        
        document.getElementById("F3").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit3"){
        
        document.getElementById("3").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit4"){
        
        document.getElementById("4").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "e" || keyy === "E"){
        
        document.getElementById("E").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "r" || keyy === "R"){
        
        document.getElementById("R").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "d" || keyy === "D"){
        
        document.getElementById("D").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "f" || keyy === "F"){
        
        document.getElementById("F").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "c" || keyy === "C"){
        
        document.getElementById("C").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "v" || keyy === "V"){
        
        document.getElementById("V").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Space"){
        
        document.getElementById("SPACE").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    if(keyy === "F4"){
        
        document.getElementById("F4").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "F5"){
        
        document.getElementById("F5").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "F6"){
        
        document.getElementById("F6").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    
    if(code === "Digit5"){
        
        document.getElementById("5").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit6"){
        
        document.getElementById("6").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Digit7"){
        
        document.getElementById("7").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "t" || keyy === "T"){
        
        document.getElementById("T").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "u" || keyy === "U"){
        
        document.getElementById("U").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "y" || keyy === "Y"){
        
        document.getElementById("Y").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "g" || keyy === "G"){
        
        document.getElementById("G").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "h" || keyy === "H"){
        
        document.getElementById("H").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "j" || keyy === "J"){
        
        document.getElementById("J").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "b" || keyy === "B"){
        
        document.getElementById("B").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "n" || keyy === "N"){
        
        document.getElementById("N").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "m" || keyy === "M"){
        
        document.getElementById("M").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F7"){
        
        document.getElementById("F7").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F8"){
        
        document.getElementById("F8").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F9"){
        
        document.getElementById("F9").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F10"){
        
        document.getElementById("F10").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F11"){
        
        document.getElementById("F11").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "F12"){
        
        document.getElementById("F12").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    
    /*
    if(code === "PrintScreen"){
        
        document.getElementById("PS").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    } */
    if(keyy === "ScrollLock"){
        
        document.getElementById("SL").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "Pause"){
        
        document.getElementById("PB").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }


    if(code === "Digit8"){
        
        document.getElementById("8").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    

    if(code === "Digit9"){
        
        document.getElementById("9").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(code === "Digit0"){
        
        document.getElementById("0").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(code === "Minus"){
        
        document.getElementById("-").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "="){
        
        document.getElementById("=").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "Backspace"){
        
        document.getElementById("BS").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "Insert"){
        
        document.getElementById("INS").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    if(code === "Home"){
        
        document.getElementById("HM").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "PageUp"){
        
        document.getElementById("PU").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(keyy === "NumLock"){
        
        document.getElementById("NL").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "NumpadDivide"){
        
        document.getElementById("NUM/").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    
    if(keyy === "*"){
        
        document.getElementById("NUM*").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(code === "NumpadSubtract"){
        
        document.getElementById("NUM-").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
     
    if(keyy === "i" || keyy === "I"){
        
        document.getElementById("I").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "o" || keyy === "O"){
        
        document.getElementById("O").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "p" || keyy === "P"){
        
        document.getElementById("P").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    if(keyy === "["){
        
        document.getElementById("[").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "]"){
        
        document.getElementById("]").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }
    
    

    if(keyy === "Enter"){
        
        document.getElementById("Enter_Left1").style.color ="red";
        document.getElementById("text").innerText = code;
    }

    
    if(code === "Delete"){
        
        document.getElementById("DEL").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "End"){
        
        document.getElementById("END").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "PageDown"){
        
        document.getElementById("PD").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad7"){
        
        document.getElementById("NUM7").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad8"){
        
        document.getElementById("NUM8").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad9"){
        
        document.getElementById("NUM9").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    
    if(code === "NumpadAdd"){
        
        document.getElementById("NUM+").style.border = "2px solid red ";
        document.getElementById("text").innerText = keyy;
    }

    
    if(keyy === "k" || keyy === "K"){
        
        document.getElementById("K").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(keyy === "l" || keyy === "L"){
        
        document.getElementById("L").setAttribute("class","border");
        document.getElementById("text").innerText = keyy;
    }

    if(code === "Semicolon"){
        
        document.getElementById(";").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Quote"){
        
        document.getElementById("'").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Backslash"){
        
        document.getElementById("'").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad4"){
        
        document.getElementById("NUM4").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad5"){
        
        document.getElementById("NUM5").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad6"){
        
        document.getElementById("NUM6").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Comma"){
        
        document.getElementById(",").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    

    if(code === "Period"){
        
        document.getElementById(".").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Slash"){
        
        document.getElementById("/").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "ShiftRight"){
        
        document.getElementById("RIGHT_SHIFT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "ArrowUp"){
        
        document.getElementById("UP").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad1"){
        
        document.getElementById("NUM1").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
 

    if(code === "Numpad2"){
        
        document.getElementById("NUM2").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad3"){
        
        document.getElementById("NUM3").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    if(code === "NumpadEnter"){
        
        document.getElementById("RIGHT_ENTER").style.border = "2px solid red ";
        document.getElementById("text").innerText = keyy;
    }

    if(code === "AltRight"){
        
        document.getElementById("RIGHT_ALT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    
    if(keyy === "ContextMenu"){
        
        document.getElementById("MENU").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    
    }
   
     

    if(code === "RightClick"){
        
        document.getElementById("MENU").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "ControlRight"){
        
        document.getElementById("RIGHT_CTRL").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "ArrowLeft"){
        
        document.getElementById("LEFT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "ArrowDown"){
        
        document.getElementById("DWN").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }
    
    if(code === "ArrowRight"){
        
        document.getElementById("RIGHT").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "Numpad0"){
        
        document.getElementById("NUM0").setAttribute("class","border");
        document.getElementById("text").innerText = code;
    }

    if(code === "NumpadDecimal"){
        
        document.getElementById("NUM.").setAttribute("class","border");
        document.getElementById("text").innerText = "Num decimal";
    }
    



}); 

  