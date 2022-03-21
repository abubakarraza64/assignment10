
var d = [12,34,12,34,56,78,-58,-89,-90];
function raza() {

 document.getElementById("asf").innerHTML= d;
}
function ansari() {
  var d4  = d.filter(f => f < 0);
  document.getElementById("az").innerHTML=d4;
}




  

var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

// var negatives = myArray.filter(e => e < 0);

// console.log(negatives);
function add() {
    var sum = 0;
    for (let index = 0; index < d.length; index++) {
     sum = sum + d [index];
      
    }
    document.getElementById("ax").innerHTML=sum;
      
    
}
 
function max() {
    document.getElementById("av").innerHTML=Math.max(...d);
    
}
function min() {
    document.getElementById("av").innerHTML=Math.min(...d);
    
} 
function sab() {

    var d5  = d.filter(r => r < 0);
  document.getElementById("an").innerHTML=d5.length;
}



function gh() {
    d.push(...myArray);
    document.getElementById("am").innerHTML=d;
}
function hh() {
    var num = document.getElementById("al").value;
    
// d.push(num);
// var s = ""
// for (let index = 0; index < d.length; index++) {
    
//     s = s + d[index]

// }
// c
d.push(num)
document.getElementById("ab").innerHTML=d;
}
function hk() {
 var num3 =   document.getElementById("b").value;
if (num3==1) {
    d.splice(0,1)
    document.getElementById("c").innerHTML=d;
}
else if (num3==2) {

    d.splice(1,1);
    document.getElementById("c").innerHTML=d;
}
else  if (num3==3) {
    d.splice(2,1)
    document.getElementById("c").innerHTML=d;
}
else if (num3==4) {
    d.splice(3,1)
    document.getElementById("c").innerHTML=d;
}
else  if (num3==5) {
    d.splice(4,1)
    document.getElementById("c").innerHTML=d;
}
else  if (num3==6) {
    d.splice(5,1)
    document.getElementById("c").innerHTML=d;
}
else  if (num3==7) {
    d.splice(6,1)
    document.getElementById("c").innerHTML=d;
}
else{
    document.getElementById("c").innerHTML="please insert number between 1-7 because length of array is 7"
}
}
function e() {
   var num4 = [... new Set (d)];
   document.getElementById("f").innerHTML=num4;
            
        }
 function fr() {
        var num7;    
      
 var num5 = document.getElementById("gle").value;

 switch (num5) {
case  "1":
    num7 = "today is monday"

  break;
case  '2':
    num7 = "today is tuesday"
 break;
         
 case '3':
    num7 = "today is wednesday"
 break;
 case '4':
    num7 = "today is thursday"

 break;
         
    case '5':
        num7 = "today is friday"
  break;
case '6':
    num7 = "today is saturday"
  break;
 case '7':
    num7 = "today is sunday"
 break;
                   
 default:
 break;
 }
 document.getElementById("h").innerHTML=num7;
        }
       function fbr() {
           
      var month;
     var num6 =  document.getElementById("fle").value;
           
 switch (num6) {
           case  "1":
            month= "january has 31 days"
             break;
           case  "2":
            month= "february has 28 days"
            break;
                    
            case "3":
                month= "march has 31 days"
            break;
            case "4":
                month= "april has 30 days"
            break;
                    
               case "5":
                month= "may has 31 days"
             break;
           case "6":
            month= "june has 30 days"
             break;
             case '7':
                month= "july has 31 days"
            break;
            case "8":
                month= "august has 31 days"
            break;
            case '9':
                month= "september has 30 days"
            break;
            case "10":
                month= "october has 31 days"
            break;   
        case "11":
            month= "november has 30 days"
        break;
        case"12":
            month= "december has 31 days"
        break;
        
                              
            default:
           month = "please enter number beetween 1-12"

            break;
            }
            document.getElementById("hz").innerHTML=month;
                   }
  function fbs() {
  var num1 = document.getElementById("fjh").value;
  var num2 = document.getElementById("fk").value;
  switch (num1>num2) {
      case true:
        document.getElementById("hj").innerHTML=" number"+num1+" is greater";
          break;
          case false:
            document.getElementById("hj").innerHTML="number"+num2+" is greater";
              break;
  
      
  }
 }
 function fbg() {
    var num = document.getElementById("fu").value;
   
    switch ((num % 2)===0) {
        case true:
            document.getElementById("hm").innerHTML="number "+num+" is even";            
            break;
            case false:
                document.getElementById("hm").innerHTML="number "+num+" is odd";            
                break;
      
    }
 }
 function fbj() {
     var char = document.getElementById("fm").value;
     switch (char === "a"  || char === "e"|| char === "i" || char === "o" || char === "u" ) {
         case true:
            document.getElementById("hl").innerHTML=""+char+" is vowel"; 
             break;
     
         default:
            document.getElementById("hl").innerHTML=""+char+" is consonant"; 
             break;
     }
 }
//  function fbo() {
//     var result;
//     var num9 = document.getElementById("fo").value;
   
// switch (num9) {
//  case (num9 > 0):

// document.getElementById("ho").innerHTML=""+num9+" is positive";             
//  break;
//  case (num9 < 0):
//     // result= ""+num9+" is negative";
//     document.getElementById("ho").innerHTML=""+num9+" is negative";             
//      break;
         
     
// case (num9===0):
//     // result= ""+num9+" is zero";
//         document.getElementById("ho").innerHTML=""+num9+" is zero";             
//          break;
             

//      }
//     //  document.getElementById("ho").innerHTML=result; 
//  }
function fbo() {
    var num9 = document.getElementById("fo").value; 
    switch (num9 > 0) {
        case true :
            document.getElementById("ho").innerHTML=""+num9+" is positive";              
            break;
            case false :
                document.getElementById("ho").innerHTML=""+num9+" is negative";              
                break;
                // case num9 == 0 :
                //     document.getElementById("ho").innerHTML=""+num9+" is zero";              
                //     break;
            
    
        default:
            document.getElementById("ho").innerHTML=""+num9+" is zero"; 
            break;
    }
}
function calculator() {
 var num1 =document.getElementById("fnum").value; 
var num2= document.getElementById("snum").value;  
var opr= document.getElementById("selector").value;    
switch (opr) {
    case "+":
        result = parseFloat (num1) + parseFloat (num2);

        break;
        case "-":
            result = parseFloat (num1) - parseFloat (num2);
           
            break;
        case "*":
            result = parseFloat (num1) * parseFloat (num2);
      
            break;
            case "/":
                result = parseFloat (num1) / parseFloat (num2);
                
                break;   
    default:
        break;
} 
document.getElementById("output").innerHTML=result;
}
 function root() {
     var a1 = document.getElementById("fval").value;
    var b2 = document.getElementById("sval").value;
    var c3 =  document.getElementById("tval").value;
   var root = b2 * b2 - 4 * a1 * c3;

  var bottom = 2 * a1;  
  var root1 =(-b2 + root)/ bottom;
  var root2 =(-b2 - root)/ bottom;
  document.getElementById("output1").innerHTML="First root: "+root1+"  ";
  document.getElementById("output2").innerHTML="second root: "+root2+"  ";
}