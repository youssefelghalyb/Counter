var count = 0 ;



function changenum (num){
    count += num 

    document.getElementById('count').innerHTML = count;

    if (count > 0 ){
        document.getElementById('count').style.color = "#0f0"
    }
    else if (count < 0 ){
        document.getElementById('count').style.color = "#f00"  
    }
    else{
        document.getElementById('count').style.color = "#000"
    }
}