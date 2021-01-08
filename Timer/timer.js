var hours=document.getElementById("hrs");
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var x;
function start_timer(){
    var timeleft=(hours.value*3600)+(minutes.value*60)+(seconds.value*1);
    document.getElementById("start").style.pointerEvents="none";
    if(timeleft>0){
        x= setInterval(function(){
            timeleft--;
            var c_hrs=Math.floor(timeleft/3600);
            var c_rem_hrs=Math.floor(timeleft%3600);
            var c_min=Math.floor(c_rem_hrs/60);
            var c_sec=Math.floor(c_rem_hrs%60);
            hours.value=String(c_hrs).padStart(2,"0");
            minutes.value=String(c_min).padStart(2,"0");
            seconds.value=String(c_sec).padStart(2,"0");
            if(timeleft<=0){
                clearInterval(x);
                clearInterval(x);
                x =setInterval(function(){},0);
                hours.value=minutes.value=seconds.value="";
                $(".pop_msg").addClass(" pop_msg1")
                            .removeClass(" pop_msg2");
                            document.getElementById("start").style.pointerEvents="auto";
            }
        },1000)
    }
    
}

$(document).on("click","#back",function(){
        $(".pop_msg").addClass(" pop_msg2")
                    .removeClass(" pop_msg1");

})


function stop_timer(){
    clearInterval(x);
    x =setInterval(function(){},0);
    hours.value=minutes.value=seconds.value="";
    document.getElementById("start").style.pointerEvents="auto";
}

function scroll_up(){
    $(".section1").addClass(" active")
                  .removeClass(" home");
    document.getElementsByClassName("fa-chevron-circle-up")[0].style.display="block";
}

function scroll_down(){
    $(".section1").removeClass(" active")
                  .addClass(" home");
    document.getElementsByClassName("fa-chevron-circle-up")[0].style.display="none";
}