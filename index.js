function getHistory(){
  var x=document.querySelector("#history-value");
  return x.innerHTML;
}

function printHistory(num)
{
var y=document.querySelector("#history-value");
y.innerHTML=num;
}
function getOutput()
{
  var y=document.querySelector("#output-value");
  return y.innerText;
}
function printOutput(num){
  if(num=="")
  {
    document.querySelector("#output-value").innerText=num;
  }
  else{
    document.querySelector("#output-value").innerText=getFormattedNumber(num);
  }
}
function getFormattedNumber(num){
  if(num=="-")
  {
    return "";
  }
  var n=Number(num);
  var value=n.toLocaleString("en");
  return value;
}
// function reverse number format...
function reverseNumberFormat(num)
{
  return Number(num.replace(/,/g,''));
}

// operation starts over there..

var operator=document.querySelectorAll(".operator");

for(var i=0;i<operator.length;i++)
{
  operator[i].addEventListener("click",function(){
    if(this.id=='clear')
    {
      printHistory("");
      printOutput("");
    }
    else if(this.id=="backspace")
    {
      var output=reverseNumberFormat(getOutput()).toString();
      if(output)
      {
        output=output.substr(0,output.length-1);
        printOutput(output);
      }
    }
    else{
      var output=getOutput();
      var history=getHistory();
      if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var res=eval(history);
					printOutput(res);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
    }
  });
}

// get the numbers...
var number=document.querySelectorAll(".number");

for(var i=0;i<number.length;i++)
{
  number[i].addEventListener("click",function(){
    var output=reverseNumberFormat(getOutput());
    if(output!=NaN)
    {
      output+=this.id;
      printOutput(output);
    }
  });
}
