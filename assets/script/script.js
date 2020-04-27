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




function validateForm() {
	var x = parseInt(document.forms["myForm"]["number"].value);
	var y = document.forms["myForm"]["element"].value;
	var arr =y.split(',');

	

    if(x>10)
    {
    	alert("Number is Greater than 10");
    	return false;
    }
    else if(x != arr.length)
    {
    	alert("Number of elements and size is not same.");
    	return false;
    }
 
}

