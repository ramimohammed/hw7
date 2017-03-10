// 1-giv values for A,B,C,D,E 
// 2- set x as a counter for each true statement +1  to cheak this counter in the end of program
// cheak the statemen one after one if its true print the requested coler and increment x by 1


	var a = ?
	var b = ?
	var c = ?
	var d = ?
	var e = ?
	var x=0;   
	
	if (a%2===0) {console.log("Blue");x=x+1;}
	if (b%2===0) && c>5  {console.log("Green");x=x+1;}
	if (b%2===0) && c<5 && e%2!==0  {console.log("Yellow");x=x+1;}
	if (a%2===0) && b%2===0 && c<0 {console.log("Orang");x=x+1;}
	if (c+d+e) > (a+c){console.log("Purple");x=x+1;}
	
	if(  (x>=2) &&  (c%2)!==0) || (c<b)) ){console.log("Red");}
  
