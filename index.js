function add(){
    let VALUE = document.getElementById('select').value;

    if(VALUE == 1){
        let x = document.getElementById('price1').value;
        if(x < 0){
            document.getElementById('sumError').innerHTML = "Wrong Amount!!";
            setTimeout(() => {
                document.getElementById('sumError').innerHTML = "";
                location = '';
            }, 2000);
        }
        else{
            let result = parseFloat(x) * 0.012;
            document.getElementById('sum').innerHTML = "Total Amount = " + result.toFixed(2) + " dollar";
        }
    }

    else if(VALUE == 2){
        let x = document.getElementById('price1').value;
        if(x < 0){
            document.getElementById('sumError').innerHTML = "Wrong Amount!!";
            setTimeout(() => {
                document.getElementById('sumError').innerHTML = "";
                location = '';
            }, 2000);
        }
        else{
            let result = parseFloat(x) * 0.94;
            document.getElementById('sum').innerHTML = "Total Amount = " + result.toFixed(2) + " Afghan Afghani";
        }
    }

    else if(VALUE == 3){
        let x = document.getElementById('price1').value;
        if(x < 0){
            document.getElementById('sumError').innerHTML = "Wrong Amount!!";
            setTimeout(() => {
                document.getElementById('sumError').innerHTML = "";
                location = '';
            }, 2000);
        }
        else{
            let result = parseFloat(x) * 1.22;
            document.getElementById('sum').innerHTML = "Total Amount = " + result.toFixed(2) + " Albanian Lek";
        }
    }

    setTimeout(() => {
        document.getElementById('sum').innerHTML = "";
        location = '';
    }, 6000);

    
}

