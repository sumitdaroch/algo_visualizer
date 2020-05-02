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
	//var arr =elements.split(',');
    // covert string into number
    var arr = elements.split(',').map(function(item) {
    return parseInt(item, 10);
                             });
    var box1 = document.getElementById("box1");

	for (var i = 0; i <number; i++) 
	{   
		box1.innerHTML = box1.innerHTML +"<input style='text-align:center' value='"+arr[i]+"'class='box' type='text' id='mytext"+i+"' disabled>"
	}
   
    insertionsort();

	//Algo 

    // let blocks = document.querySelectorAll(".box");

    // for (var i = 1; i < number; i++) 
    // {  
    // 	blocks[i].style.backgroundColor = "#FF4949"; 

    // 	await new Promise(resolve =>
    //     setTimeout(() => {
    //       resolve();
    //     }, 1000)
    //   );

    //     var key = arr[i];  
    //     var j = i - 1;  
 
    //     while (j >= 0 && arr[j] > key) 
    //     {  
    //         arr[j + 1] = arr[j];  
    //         j = j - 1;  
    //     }  
    //     arr[j + 1] = key; 
    // } 
    // alert(arr);

}

async function insertionsort() {
	var number = localStorage.getItem("n");
	var elements= localStorage.getItem("array")
    var arr = elements.split(',').map(function(item) {
    return parseInt(item, 10);
                             });

	let blocks = document.querySelectorAll(".box");
    for (var i = 1; i < number; i++) 
    {
 
       

        await new Promise(resolve =>
        setTimeout(() => {
          resolve();
                    }, 1000)
                              );
        blocks[i].style.backgroundColor = "#FF4949";

        blocks[i].style.animation = "mynewmove 5s";

        await new Promise(resolve =>
        setTimeout(() => {
          resolve();
                    }, 1000)
                              );
        //sorted side
        var key = blocks[i].value;

        for(var j=i;j>=0;j--)
        {
        	blocks[j].style.backgroundColor="green";
        	if(key<blocks[j].value)
        	{
                blocks[j].style.animation="mynewmoveleft 5s";
                blocks[j+1].style.animation="mynewmoveright 5s";
        	}

        }
        
        //unsorted side
        for(var j=i+1;j<number;j++)
        {
        	blocks[j].style.backgroundColor="white";
        }   
















 
    //     while (j >= 0 && arr[j] > key) 
    //     {  

    //        await new Promise(resolve =>
    //     setTimeout(() => {
    //       resolve();
    //     }, 1000)
    //   );
    //        blocks[j].style.backgroundColor="white";

    //         arr[j + 1] = arr[j];  
    //         blocks[j+1].style.animation="mynewmoveleft 2s"
    //         j = j - 1;  
    //     }  
    //     arr[j + 1] = key;
        

    } 
    
	
}
