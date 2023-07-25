var hour=1;
var min=30;
var sec=15;
setInterval(function(){
    if(hour==0 && min==0 && sec==1){
        document.getElementById("counter").innerHTML="00:00:00";
        hour=1;
        min=30;
        sec=15;
    }
    else{
        sec--;
        if(sec==0){
            min--;
            sec=60;
            if(min==0){
                hour--
                min=60;
                if(hour==0){
                    hour=hour;
                }

            }
        }
        if(hour.toString().length==1){
            hour="0"+hour;
        }
        if(min.toString().length==1){
            min="0"+min;
        }
        if(sec.toString().length==1){
            sec="0"+sec;
        }
        document.getElementById("counter").innerHTML= hour+":"+min+":"+sec;
    }
},1000)