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


function create(value)
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


    if(value == 1)
    insertion();
    else if(value == 2)
    selection(); 
    else if(value == 5)
    bubble(); 


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
      }, 250);
    });
  });
}


async function insertion()
{
    
    let blocks = document.querySelectorAll(".block");



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

            myvalue.value="Since "+key+" is less than "+ z +", move "+key+" to the right side";
                          await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );    
             
             await swap(blocks[j], blocks[x]);
             blocks = document.querySelectorAll(".block");
             
             

            }

            else if(key > z)
            {
            	myvalue.value="Since "+key+" is Greater than "+ z +", do nothing";
            	                await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
            	                break;
            }

        else{

        myvalue.value="Since "+key+" is equal to "+ z +", do nothing";
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



//selection sort

async function selection()
{
    
    let blocks = document.querySelectorAll(".block");
    // await swap(blocks[0],blocks[3])
    // alert(Number(blocks[0].childNodes[0].innerHTML));
    // blocks = document.querySelectorAll(".block");
    // alert(Number(blocks[0].childNodes[0].innerHTML));

    var i, j, min_idx;  
    var n = blocks.length;
    // One by one move boundary of unsorted subarray  
    for (i = 0; i < n-1; i++)  
    {  
        // Find the minimum element in unsorted array  
        min_idx = i;  
        for (j = i+1; j < n; j++) 
        { 
        var value1 = Number(blocks[j].childNodes[0].innerHTML);
        var value2 = Number(blocks[min_idx].childNodes[0].innerHTML);
        if (value1 < value2 )  
            min_idx = j; 
        }     
  
        // Swap the found minimum element with the first element  
        alert(min_idx);
        alert(i);
        alert(Number(blocks[min_idx].childNodes[0].innerHTML));
        alert(Number(blocks[i].childNodes[0].innerHTML));
        await swap(blocks[i], blocks[min_idx]); 
        blocks = document.querySelectorAll(".block");
        alert(Number(blocks[min_idx].childNodes[0].innerHTML));
        alert(Number(blocks[i].childNodes[0].innerHTML));
        break;
    }  
 
}



async function bubble() {
  let blocks = document.querySelectorAll(".block");
  var myvalue = document.getElementById("working");
  for (let i = 0; i < blocks.length - 1; i += 1) {
    iteration=document.getElementById("iteration");
    iteration.innerHTML="ITERATION - "+(i+1);
    for (let j = 0; j < blocks.length - i - 1; j += 1) {






      // await new Promise(resolve =>
      //   setTimeout(() => {
      //     resolve();
      //   }, delay)
      // );
      
      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      myvalue.value="Comparison Between "+value1+" and "+value2;
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

            await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );


      if (value1 > value2) {
        myvalue.value="Since  "+value1+" is Greater than "+value2+ " so swap the values";

                         await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay/2)
      );
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
                                 await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay/2)
      );

      }

      else if(value1< value2)
      {
         myvalue.value="Since  "+value1+" is less than "+value2+ ", do nothing";
                  await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      }

      else
      {
        myvalue.value="Since  "+value1+" is equal to "+value2+ ", do nothing";
        await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      }

      blocks[j].style.backgroundColor = "#58B7FF";
      blocks[j + 1].style.backgroundColor = "#58B7FF";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
  blocks[0].style.backgroundColor = "#13CE66";
  myvalue.style.color="red";
  myvalue.value="Done ! All the elements are sorted";

}