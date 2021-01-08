var create =document.getElementsByClassName("create");
var completed =document.getElementsByClassName("completed");
var pending =document.getElementsByClassName("pending");
var content =document.getElementById("content");
var tasks =document.getElementsByClassName("task");
var task_items =document.getElementsByClassName("task_item");
var completed_tasks =document.getElementsByClassName("completed_task");
var pending_tasks =document.getElementsByClassName("pending_task");
var completed_task_spans =document.getElementsByClassName("completed_task_span");
var pending_task_spans =document.getElementsByClassName("pending_task_span");
var pending_numbers =document.getElementsByClassName("pending_number");
var completed_numbers =document.getElementsByClassName("completed_number");
var circles =document.getElementsByClassName("circle");
var checks =document.getElementsByClassName("fa-check");
var hero=document.getElementById("hero");
var slides=document.getElementById("instruction_content");
var slider_spans=document.getElementsByClassName("slider_span");
var lis =document.getElementsByClassName("li");

var item =document.getElementById("input_box");
var n=0;
var check_bool=[0];
function push(){
    check_bool.push(0);
}
function show1(){
    slides.style.transform ="translateX(0)";
    slides.style.transition ="0.7s ease-in-out";
    span_color(0);
}
function show2(){
    slides.style.transform ="translateX(-100%)";
    slides.style.transition ="0.7s ease-in-out";
    span_color(1);
}
function show3(){
    slides.style.transform ="translateX(-200%)";
    slides.style.transition ="0.7s ease-in-out";
    span_color(2);
}
function show4(){
    slides.style.transform ="translateX(-300%)";
    slides.style.transition ="0.7s ease-in-out";
    span_color(3);
}
function showback(){
    hero.style.transform ="translateY(0vh)";
    hero.style.transition ="0.7s ease-in-out";
}
function showhelp(){
    hero.style.transform ="translateY(100vh)";
    hero.style.transition ="0.7s ease-in-out";
}
function showtodo(){
    hero.style.transform ="translateY(-100vh)";
    hero.style.transition ="0.7s ease-in-out";
}
function showcreate(){            
    content.style.transform ="translateX(0)";
    content.style.transition ="0.7s ease-in-out";
    showborder(0);
   
}
function showcompleted(){            
    content.style.transform ="translateX(-200%)";
    content.style.transition ="0.7s ease-in-out";
    showborder(2);
   
}
function showpending(){
    content.style.transform ="translateX(-100%)";
    content.style.transition ="0.7s ease-in-out";
    showborder(1);
   
}
function span_color(p){
   for(var i=0;i<slider_spans.length;i++){
       slider_spans[i].style.backgroundColor="#fff";
       slider_spans[i].style.color="#19d3da";
   }
   slider_spans[p].style.backgroundColor="rgba(0,0,0,0.1)";
   slider_spans[p].style.color="#fff";
}
function showborder(p){
   for(var i=0;i<lis.length;i++){
       lis[i].style.borderBottom="3px solid #373a40";
   }
   lis[p].style.borderBottom="3px solid #fff";

}
function img1display(){
    var stil=0;
    for(var i=0;i<tasks.length;i++){
        if(window.getComputedStyle(tasks[i]).getPropertyValue("display")=="flex"){
            stil=1;
        }
    }
    if(tasks.length==1 || stil==0 ){
        $(".image_1").css("display","block");
    }
    else{
        $(".image_1").css("display","none");
    }
}

function img2display(){
    var stil=0;
    for(var i=0;i<pending_tasks.length;i++){
        if(window.getComputedStyle(pending_tasks[i]).getPropertyValue("display")=="flex"){
            stil=1;
        }
    }
    if(pending_tasks.length==1 || stil==0){
        $(".image_2").css("display","block");
    }
    else{
        $(".image_2").css("display","none");
    }
}

function img3display(){
    var stil=0;
    for(var i=0;i<completed_tasks.length;i++){
        if(window.getComputedStyle(completed_tasks[i]).getPropertyValue("display")=="flex"){
            stil=1;
        }
    }
    if(completed_tasks.length==1 || stil==0){
        $(".image_3").css("display","block");
    }
    else{
        $(".image_3").css("display","none");
    }
}

function add_pending_nos(){
    var x=0;
    for(var i=1;i<pending_tasks.length;i++){
        var stil =window.getComputedStyle(pending_tasks[i]).getPropertyValue("display");
        if(stil=="flex"){
          x++;
          pending_numbers[i].innerHTML=x+".";
        }
    }
}

function add_completed_nos(){
    var x=0;
    for(var i=1;i<completed_tasks.length;i++){
        var stil =window.getComputedStyle(completed_tasks[i]).getPropertyValue("display");
        if(stil=="flex"){
          x++;
          completed_numbers[i].innerHTML=x+".";
        }
    }
}

function add_completed(){
    for(var i=0;i<tasks.length;i++){
        completed_tasks[i].style.display="none";
        var stil =window.getComputedStyle(checks[i]).getPropertyValue("display");
        if(stil == "block"){
            completed_tasks[i].style.display="flex";
        }
    }
}

function add_task(){
   if(item.value!=""){
    n++;
    $(tasks[0]).clone()
               .appendTo("#task_list")
               .css("display","flex");
    $(pending_tasks[0]).clone()
               .appendTo("#pending_list")
               .css("display","flex");
    $(completed_tasks[0]).clone()
               .appendTo("#completed_list")
               .css("display","flex");
   task_items[n].innerHTML=item.value;
   completed_task_spans[n].innerHTML=item.value;
   pending_task_spans[n].innerHTML=item.value;
   item.value="";
   add_completed();
   img1display();
   img2display();
   img3display();
   add_pending_nos();
   add_completed_nos();
   push();
   }    
}

$(document).ready(function(){
    $(tasks[0]).css("display","none");
    $(completed_tasks[0]).css("display","none");
    $(pending_tasks[0]).css("display","none");
    img1display();
    img2display();
    img3display();
    span_color(0);
    showborder(0);

    $(document).on('click','.fa-times',function(){
        var index = $(this).parent().index();
        $(completed_tasks[index]).remove();
        $(pending_tasks[index]).remove();
        $(tasks[index]).remove();
        img1display();
        img2display();
        img3display();
        add_pending_nos();
        add_completed_nos();
        n--;
        check_bool.splice(index,1);
    })
    
    $(document).on('click','.circle',function(){
        var index = $(this).parent().index();
        if(check_bool[index]==0){
            $(checks[index]).css("display","block");
            check_bool[index]=1;
            completed_tasks[index].style.display="flex";
            pending_tasks[index].style.display="none";
        }
        else{
            $(checks[index]).css("display","none");
            completed_tasks[index].style.display="none";
            pending_tasks[index].style.display="flex";
            check_bool[index]=0;
        }
        img1display();
        img2display();
        img3display();
        add_pending_nos();
        add_completed_nos()
    })

})
