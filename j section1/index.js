




var x= "";
for(var i=0;i<10;i++){
        x += ` <div class="col-md-4">
        <div class="item">
        <img class="w-100" src="./img/mailchimp-mpwF3Mv2UaU-unsplash.jpg" alt="">
        </div>
        <div class="caption">
            <h2>text1</h2>
            <button class="show">show more</button>
        </div>
        
    </div>`
        
        
    }
document.getElementById("demo").innerHTML = x



// grade




 var h = document.getElementById("e").value;
if(h >= 90){
    alert("A");
}
else if(h >= 80){

alert("B");
}
else if(h >= 70){

alert("C");}

else if(h >=60){

alert("A");
}

else
{
    alert("F");
}





// factrial

  function show(){

    var i, no, fact;
    
    fact=1;
    
    no=Number(document.getElementById("num").value);
    
    for(i=1; i<=no; i++)
    
    {
    
    fact= fact*i;
    
    }
    
    document.getElementById("answer").value= fact;
    
    }