var a = document.getElementsByClassName("expander");
var i;
var counter=0;
var flag = 0;
var interval;
function decrease(obj){
    var val = obj.nextSibling.innerHTML;
    if(val>1){
        val--;
        obj.nextSibling.innerHTML= val;
    }
}
function increase(obj){
    var val = obj.previousSibling.innerHTML;
    val++;
    obj.previousSibling.innerHTML= val;
}

function start(){
    flag++;
    var break_length = document.getElementsByClassName("break-value");
    var  sess = document.getElementsByClassName("session");
    var sec = document.getElementsByClassName("seconds");
    var clk = document.getElementsByClassName('clock');
    var  min = document.getElementsByClassName("minutes");
    var val = document.getElementsByClassName("session-value");
    if(flag==1){
        i=0;
        min[0].innerHTML = val[0].innerHTML;
        sec[0].innerHTML = 0;
        if(min[0].innerHTML<11)
            min[0].innerHTML = "0"+(min[0].innerHTML)+"";
        if(sec[0].innerHTML<11)
            sec[0].innerHTML = "0"+(sec[0].innerHTML)+"";
    }
    var decrement = val[0].innerHTML;
    interval = setInterval(myFunction,1000);
    function myFunction(){
        if((flag%2)==0)
        {
            clearInterval(interval);
            return;
        }
        if((min[0].innerHTML==0)&&(sec[0].innerHTML==0)){
            if(counter==0)
                counter=1;
            else
                counter=0;
            a[0].style.height="300px";
            if(counter==1){
                clk[0].style.backgroundColor = "#039BE5";
                sess[0].innerHTML = "Break!";
                if(break_length[0].innerHTML<11)
                    min[0].innerHTML = "0"+break_length[0].innerHTML;
                else
                    min[0].innerHTML = break_length[0].innerHTML;
                decrement = min[0].innerHTML;
                sec[0].innerHTML = "0"+0;
                i=0;
            }
            else{
                clk[0].style.backgroundColor = "#00897B";
                sess[0].innerHTML = "Session";
                min[0].innerHTML = val[0].innerHTML;
                sec[0].innerHTML = 0;
                if(min[0].innerHTML<11)
                    min[0].innerHTML = "0"+(min[0].innerHTML)+"";
                if(sec[0].innerHTML<11)
                    sec[0].innerHTML = "0"+(sec[0].innerHTML)+"";
                decrement = min[0].innerHTML;
                sec[0].innerHTML = "0"+0;
                i=0;
            }
        }
        else{
            if(sec[0].innerHTML<1)
            {
                sec[0].innerHTML = 59;
                if(min[0].innerHTML<11)
                    min[0].innerHTML = "0"+(min[0].innerHTML - 1)+"";
                else
                    min[0].innerHTML = min[0].innerHTML - 1;
            }
            else{
                if(sec[0].innerHTML<11)
                    sec[0].innerHTML = "0"+(sec[0].innerHTML-1)+"";
                else
                    sec[0].innerHTML = sec[0].innerHTML - 1;
            }
            a[0].style.height = (300 - (i*(300/(decrement*60))))+"px";
            i++;
        }
    }
}
function reset(){
    clearInterval(interval);
    var sec = document.getElementsByClassName("seconds");
    var clk = document.getElementsByClassName('clock');
    var  min = document.getElementsByClassName("minutes");
    var val = document.getElementsByClassName("session-value");
    if(val[0].innerHTML<11)
        min[0].innerHTML = "0"+val[0].innerHTML;
    else
        min[0].innerHTML = val[0].innerHTML;
    sec[0].innerHTML = "0" + 0;
    a[0].style.height="300px";
    flag = 0;
    return;
}