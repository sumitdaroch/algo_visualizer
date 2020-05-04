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

const container = document.querySelector(".data-container");
function create()
 {
    document.getElementById('start').style.visibility = 'hidden';
	var number = parseInt(localStorage.getItem("n"));
	
	var elements= localStorage.getItem("array")
	//var arr =elements.split(',');

    // covert string into number
    var arr = elements.split(',').map(function(item) {
    return parseInt(item, 10);
                             });
    // var box1 = document.getElementById("box1");

	// for (var i = 0; i <number; i++) 
	// {   
	// 	box1.innerHTML = box1.innerHTML +"<input style='text-align:center' value='"+arr[i]+"'class='box' type='text' id='mytext"+i+"' disabled>"
	// }
for (let i = 0; i < number; i += 1)
   {
    const value = arr[i];

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 3}px`;
    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }



    insertion();

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
      }, 1000);
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




    for(var i=0;i<blocks.length;i++)
    {
       
       var key = Number(blocks[i].childNodes[0].innerHTML);
         await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 500)
      );

       for(var y = 0;y<i;y++)
       {
          blocks[y].style.backgroundColor="green"
       }
       var x=i;
       await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 900)
      );
       for(var j=i-1;j>=0;j--)
       {
            
            var z=Number(blocks[j].childNodes[0].innerHTML);
            if( key < z )
            { 
              
              await swap(blocks[j], blocks[x]);
              blocks = document.querySelectorAll(".block");
             
             
            }
         x=x-1;   
       }
  
    
    }
    for(var i=0;i<blocks.length;i++)
    {blocks[i].style.backgroundColor="green";}
  



}