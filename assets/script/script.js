  function onlyNumberKey(evt) { 
         
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
            return false; 
        return true; 
    }

  function onlyNumberCommaKey(evt) { 
         
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if(ASCIICode==44)
           return true; 
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
            return false; 
        return true; 
    }


function validateForm() 
{
	var x = parseInt(document.forms["myForm"]["number"].value);
	var y = document.forms["myForm"]["element"].value;
	var arr =y.split(',');
    localStorage.setItem("n",x);
    localStorage.setItem("array",y);
 //    var number1 = document.getElementById("name1");
	// var element1 = document.getElementById("element1");

    if(x>10)
    {
    	alert("Number is Greater than 10");
        // number1.style.border="solid 3px red";
    	return false;
    }
    else if(x != arr.length)
    {
    	alert("Number of elements and size is not same.");
    	// element1.style.border="solid 3px red";
    	return false;
    }
    else
    {
    	return true;
    }

}


function create()
 {
    document.getElementById('start').style.visibility = 'hidden';
	var number = localStorage.getItem("n");
	var elements= localStorage.getItem("array")
	var arr =elements.split(',');
	for (var i = 0; i <number; i++) 
	{   
		box.innerHTML = box.innerHTML +"<input style='text-align:center' class='box' type='text' name='mytext'+ i>"
	}
}