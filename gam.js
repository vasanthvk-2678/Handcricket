function id(x){
    return document.getElementById(x)
}

var your=prompt("What is your name?")
while(your==" " || your==null || your=="" ||your=="Computer"){
    var your=prompt("Enter your name..")
}

     myArray =[1,2,3,4,5,6]
 var rand = myArray[Math.floor(Math.random() * myArray.length)]; 
 
 tossopt=["BAT","BOWL"]
 var toss= tossopt[Math.floor(Math.random() * tossopt.length)];
 
 
 cointosscomp=["Heads","tails"]
 var cointosscompu=cointosscomp[Math.floor(Math.random() * cointosscomp.length)];


var name="some"
var cointoss="Heads" 
function coinhead(){
    if(cointoss==cointosscompu ){
    }
    else{
        alert("You lose the toss")
      id("optto").innerText = "Computer has opt to " +toss;
    }
} 
function cointail(){
    if (cointoss==cointosscompu){
        alert("You lose the toss")
      id("optto").innerText = "Computer has opt to " +toss; 
    }
    else{
    }
}

var chosecomp=toss
var name;
var name1;
if(chosecomp=="BAT"){
    name="Computer"
    name1=your
}
else if(chosecomp=="BOWL"){
    name=your
    name1="Computer"
}
function batting1(){
    alert("You have chosen to BAT")
    name=your
    name1="Computer"
  }
function bowling1(){
    alert("You have chosen to BOWL") 
    name="Computer"
    name1=your
}


var score=0
function start12(){
id("score").innerText=name+" has scored: "+score  
 alert("Hii!! "+your+", All the Best\nRemember that you should score atleast 1 run more than Computer to win\nIf both scores are equal.\nThen, It will be declared as 'Computer won the match'") 
}
function bigc(x){
    bigArray = ["1","2","3","4","5","6"]
    y=x-1
    var sym=bigArray[y]
    id("bigc").innerText=sym
    id("bigicons").style.display="block"
    id("compchose").style.display="none"
    id("playerchose").style.display="none"
    id("cc").innerText="Comp: "+x
}
function bigm(a){
    bigArray = ["1","2","3","4","5","6"]
    b=a-1
    var sym2=bigArray[b]
    id("bigm").innerText=sym2
    id("bigicons").style.display="block"
    id("playerchose").style.display="none"
    id("compchose").style.display="none"
    id("uu").innerText="You: "+a
}
function one(){
    var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=1
    id("compchose").innerText="Computer chose:"+ rand1
    id("playerchose").innerText="You chose: "+chosenumber
    bigc(rand1);
    bigm(chosenumber);
    if(rand1==chosenumber){
  var targe=score+1
        alert(name+" is  out")          
document.getElementById("numball").style.display="none"   

id("bigicons").style.display="none"
 document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe
    }
else if(name==your){
        score=score+1
        id("score").innerText =name+" has scored: "+score; 
    }
     else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score;    
}
}
function two(){
var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 

var chosenumber=2    
  id("compchose").innerText="Computer chose:"+ rand1
 id("playerchose").innerText="You chose: "+chosenumber 
 bigc(rand1);
 bigm(chosenumber);
    if(rand1==chosenumber){
    id("bigicons").style.display="none"
    var targe=score+1
       alert(name+" is out..")            
document.getElementById("numball").style.display="none"   

  document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe
    }
    else if(name==your){
        score=score+2
        id("score").innerText =name+" has scored: "+score; 
    }
    else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score; 
    }
}

function three(){
   var rand1= myArray[Math.floor(Math.random() * myArray.length)];  
   var chosenumber=3
   id("compchose").innerText="Computer chose:"+ rand1  
  id("playerchose").innerText="You chose: "+chosenumber 
   bigc(rand1);
 bigm(chosenumber);
       if(rand1==chosenumber){
       var targe=score+1
    alert(name+" is out..")
    id("bigicons").style.display="none"
 document.getElementById("numball").style.display="none"   
 document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe
    }
    else if(name==your){
        score=score+3
        id("score").innerText =name+" has scored: "+score; 
    }
  else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score;    
}  
}
function four(){
    var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=4
    id("playerchose").innerText="You chose: "+chosenumber
   id("compchose").innerText="Computer chose:"+ rand1   
    bigc(rand1);
 bigm(chosenumber);
      if(rand1==chosenumber){
      id("bigicons").style.display="none"
      var targe=score+1
  alert(name+" is out")       
  document.getElementById("numball").style.display="none"   
 document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe
    }
    else if(name==your){
        score=score+4
         id("score").innerText =name+" has scored: "+score;
    }  
 else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score;    
}   
}

function five(){
    var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber =5
 id("playerchose").innerText="You chose: "+chosenumber   
     id("compchose").innerText="Computer chose:"+ rand1 
      bigc(rand1);
 bigm(chosenumber);
     if(rand1==chosenumber){
alert(name+" is out")      
 var targe=score+1
 id("bigicons").style.display="none"
 document.getElementById("numball").style.display="none"   
 document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe  
    }
    else if(name==your){
        score=score+5
         id("score").innerText =name+" has scored: "+score;
    }   
 else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score;    
}   
}

function six(){
    var rand1 = myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=6
    id("playerchose").innerText="You chose: "+chosenumber
  id("compchose").innerText="Computer chose:"+ rand1    
  bigc(rand1);
 bigm(chosenumber); 

       if(rand1==chosenumber){
       id("bigicons").style.display="none"
     var targe=score+1  
 alert(name+" is out")       
 document.getElementById("numball").style.display="none"   
 document.getElementById("bnxt").style.display="block"    
 id("out").innerText=name+" is out\nIt's "+name1+"'s turn to BAT"
 id("score").innerText=name1+" has to score:"+targe
    }
    else if(name==your){ 
        score=score+6
        id("score").innerText =name+" has scored: "+score; 
    }
else if(name=="Computer"){
        score=score+rand1
          id("score").innerText =name+" has scored: "+score;    
}    
}


function onenxt(){
    var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=1
id("playerchose").innerText="You chose: "+chosenumber    
  id("compchose").innerText="Computer chose:"+ rand1    
   bigc(rand1);
 bigm(chosenumber);
    if(rand1==chosenumber){
        alert(name1+" is  out")
document.getElementById("nmballs").style.display="none"
id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-1
        id("score").innerText =name1+" has to score: "+score; 
    }
    else if(name1=="Computer" ){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
    }
     if(score<=0){
    id("score").innerText=name1+" has won the match"
document.getElementById("nmballs").style.display="none"    
}   
}
function twonxt(){
  var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=2
   id("playerchose").innerText="You chose: "+chosenumber 
      id("compchose").innerText="Computer chose:"+ rand1
       bigc(rand1);
 bigm(chosenumber);
    if(rand1==chosenumber){
        alert(name1+" is  out")
document.getElementById("nmballs").style.display="none"
id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-2
        id("score").innerText =name1+" has to score: "+score; 
    }
else if(name1=="Computer"){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
    }    
       if(score<=-1){
    id("score").innerText=name1+" has won the match"
document.getElementById("nmballs").style.display="none"    
}   
 
}
function threenxt(){
        var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=3
    id("playerchose").innerText="You chose: "+chosenumber
    id("compchose").innerText="Computer chose:"+ rand1  
     bigc(rand1);
 bigm(chosenumber);
    if(rand1==chosenumber){
        alert(name1+" is  out")
 document.getElementById("nmballs").style.display="none"
   id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-3
        id("score").innerText =name1+" has to score: "+score; 
    }
    else if(name1=="Computer"){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
   }
     if(score<=-1){
    id("score").innerText=name1+" has won the match"
document.getElementById("nmballs").style.display="none"    
}   
}

function fournxt(){
    var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=4
   id("playerchose").innerText="You chose: "+chosenumber 
  id("compchose").innerText="Computer chose:"+ rand1    
   bigc(rand1);
 bigm(chosenumber);
    if(rand1==chosenumber){
        alert(name1+" is  out")
 document.getElementById("nmballs").style.display="none"
 id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-4
        id("score").innerText =name1+" has to score: "+score; 
    } 
  else if(name1=="Computer"){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
    }    
     if(score<=-1){
    id("score").innerText=name1+" has won the match"
 document.getElementById("nmballs").style.display="none"
}     
}
function fivenxt(){
     var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=5
id("playerchose").innerText="You chose: "+chosenumber    
  id("compchose").innerText="Computer chose:"+ rand1    
  bigc(rand1);
 bigm(chosenumber); 
    if(rand1==chosenumber){
        alert(name1+" is  out")
document.getElementById("nmballs").style.display="none"
id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-5
        id("score").innerText =name1+" has to score: "+score; 
    }
  else if(name1=="Computer"){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
    }    
    if(score<=-1){
    id("score").innerText=name1+" has won the match"
 document.getElementById("nmballs").style.display="none"
 
}   
}
function sixnxt(){
  var rand1= myArray[Math.floor(Math.random() * myArray.length)]; 
    var chosenumber=6
 id("playerchose").innerText="You chose: "+chosenumber   
  id("compchose").innerText="Computer chose:"+ rand1    
  bigc(rand1);
 bigm(chosenumber); 
    if(rand1==chosenumber){
        alert(name1+" is  out")
 document.getElementById("nmballs").style.display="none"
 id("score").innerText=name+" has won the match"
    }
 else if(name1==your){
        score=score-6
        id("score").innerText =name1+" has to score: "+score;
    }   
  else if(name1=="Computer"){
        score=score-rand1
        id("score").innerText=name1+" has to score: "+score;
    }    
 if(score<=-1){
    id("score").innerText=name1+" has won the match"
  document.getElementById("nmballs").style.display="none"

}    
}
function bnxt1(){
    var score=score+1
}

     </script>
	 <script>
function rls(){
    $(".rls2").show();
    $(".rls").show();
    $(".ex").show();    //Jquery
    $(".s2").show();
    $(".overs").hide();
    $(".s1").hide();

		

}
function main(){
    $(".rls2").hide();
    $(".selectcoin").hide();
    $("#bnxt").hide();
    $("#nmballs").hide();
    $(".real").hide();
    $(".selectany2").hide();
    $(".rls").hide();
    $(".tosspg").hide();
    $(".num").hide();
   
    $(".ex").hide();
    $(".s2").hide();
		$("#bnxt3").hide();

}

function start(){
    $(".mainpg").hide();
    $(".gif").hide();
    $(".overs").hide();
    $(".tosspg").show();

    $(".selectcoin").show();
    $(".selectany").hide();

}

function coinheadot(){

if(cointoss==cointosscompu){
    $(".selectany").show();
    $(".selectany2").show();  
    $(".coinbuttons").hide();
}
else{
      $(".selectany").hide();
       $(".coinbuttons").hide();
   $(".real").show();    
       $(".selectany2").show();
}
	$("#bnxt3").hide();

}
function cointailot(){

    if(cointoss==cointosscompu){
       $(".selectany").hide();
   $(".real").show();    
       $(".coinbuttons").hide();
       $(".selectany2").show();
    }
    else{
        $(".selectany").show();
        $(".selectany2").show();
        $(".coinbuttons").hide();
    }
		$("#bnxt3").hide();

}

function batting(){
    $(".real").show();
   $(".selectany").hide();

}

function bowling(){
    $(".real").show();
    $(".selectany").hide();

}

function start1(){
    $(".selectcoin").hide();
    $(".match").show();
    $(".num").show();
		    $("#bnxt3").hide();


}

function bnxt(){
    $("#nmballs").show();
    $("#out").hide();
    $("#bnxt").hide();
		$("#bnxt3").show();

}
function bnxt3()
{
 location.reload();
}