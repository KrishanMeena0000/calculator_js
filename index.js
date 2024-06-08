let txt = document.getElementById('txt');
let buttons = document.querySelectorAll('.buttons');
buttons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (txt.value === 'NAN' && txt.value === '0') {
            txt.value = '';
        }
        if (e.target.value != 'AC' && e.target.value != 'DEL' && e.target.value != '=') {
            txt.value += e.target.value.trim();
            console.log(txt.value);
        } 
        if(e.target.value === 'AC'){
            txt.value = '';
        }else if(e.target.value === 'DEL'){
            txt.value = txt.value.slice(0,-1);
        }
    });
});
let calculate = document.querySelectorAll('.op');
let equal = document.getElementById('equal');

calculate.forEach(function(item){
    item.addEventListener('click',function(e){
        
        console.log(e.target.value);
        let lastValue = txt.value.substring(txt.value.length,txt.value.length-1);
        if(!isNaN(lastValue) && e.target.value === '='){
            let result = eval(txt.value);
            if(result.toString().length > 12){
                result = result.toPrecision(12)
            }
            txt.value = result;
            txt.setAttribute('max','12');
        }else{
            if(!isNaN(lastValue)){
                txt.value += e.target.value;
            }
        }
    })
})

