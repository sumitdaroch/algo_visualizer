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

    if(x>12)
    {
    	alert("Number is Greater than 12");
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

document.getElementById('start1').innerHTML="Entered Values are : "+ localStorage.getItem("array");

const container = document.querySelector(".data-container");

var delay = 2000;

function speed()
{
	delay = ((11-(document.getElementById("speed").value))/2)* 1000;
}


function create()
 {
    document.getElementById('start').style.visibility = 'hidden';
	var number = parseInt(localStorage.getItem("n"));
    document.getElementById('label1').style.visibility = 'visible';
    document.getElementById('mytext1').style.visibility = 'visible';
	var elements= localStorage.getItem("array")
	//var arr =elements.split(',');

    // covert string into number
    var arr = elements.split(',').map(function(item) {
    return parseInt(item, 10);
                             });

for (let i = 0; i < number; i += 1)
   {
    const value = arr[i];

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = "100px"; /*`${value * 4}px`;*/
    block.style.transform = `translateX(${i * 50}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }



    insertion();


}

function swap(el1, el2) {
  return new Promise(resolve => 
  {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, delay);
    });
  });
}


async function insertion()
{
    let blocks = document.querySelectorAll(".block");

    // const style1 = window.getComputedStyle(blocks[0]);
    // const style2 = window.getComputedStyle(blocks[1]);

    // const transform1 = style1.getPropertyValue("transform");
    // const transform2 = style2.getPropertyValue("transform");

    // blocks[0].style.transform = transform2;
    // blocks[1].style.transform = transform1;

    // alert("Before 0 - "+Number(blocks[0].childNodes[0].innerHTML));
    // alert("Before 1 - "+Number(blocks[1].childNodes[0].innerHTML));    
 
    // await swap(blocks[0], blocks[1]);

    // blocks = document.querySelectorAll(".block");
    // alert("After 0 - "+Number(blocks[0].childNodes[0].innerHTML));
    // alert("After 1 - "+Number(blocks[1].childNodes[0].innerHTML));



    var myvalue = document.getElementById("working");
    for(var i=1;i<blocks.length;i++)
    {
       iteration=document.getElementById("iteration");
       iteration.innerHTML="ITERATION - "+(i);
       
       var key = Number(blocks[i].childNodes[0].innerHTML);
     

       for(var y = 0;y<i;y++)
       {
          blocks[y].style.backgroundColor="green"
       }
       var x=i;
       await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
       for(var j=i-1;j>=0;j--)
       {
            myvalue.value="Comparison Between "+Number(blocks[j].childNodes[0].innerHTML)+" and "+key ;
            blocks[x].style.backgroundColor="red";
            blocks[j].style.backgroundColor="red";	
            await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
            var z=Number(blocks[j].childNodes[0].innerHTML);

            if( key < z )
            { 

            myvalue.value="Since "+key+" is less than "+ z +" move "+key+" to the right side";
                          await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );    
             
             await swap(blocks[j], blocks[x]);
             blocks = document.querySelectorAll(".block");
             
             

            }

            else
            {
            	myvalue.value="Since "+key+" is Greater than or equal to "+ z +" do nothing";
            	                await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
            	                break;
            }

            blocks[x].style.backgroundColor="green";
                   await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

         x=x-1;   
       }
  
    


    }
    for(var i=0;i<blocks.length;i++)
    {blocks[i].style.backgroundColor="green";}
    myvalue.value="Done ! All the elements are sorted";



}