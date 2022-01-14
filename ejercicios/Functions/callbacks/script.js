
//helper function to format currency 

const formatter = (locale= "es-SV", currency="USD",value)=>{
    let formattedValue = new Intl.NumberFormat(locale,{
        style: "currency",
        currency: currency,
    }).format(value);

    return formattedValue;
}


//callback function 

const printHtml = (finalTip)=>{
const tipTable = document.createElement("div");
//tip.table.innerHtml
tipTable.innerHTML =
 `<div class="container">
 <div class="row ">
 <div class="col-sm-2 dashed">Sum before tip</div>
 <div class="col-sm-2 dashed">${finalTip.sum}</div>
 </div>
 <div class="row">
 <div class="col-sm-2 dashed">Tip Percentage</div>
 <div class="col-sm-2 dashed">${finalTip.percentage}</div>
</div>
<div class="row ">
<div class="col-sm-2 dashed">Tip</div>
    <div class="col-sm-2 dashed">${finalTip.total}</div>
<div>
</div>
 `;
 

//usar query selector para obtener el main y hacer append tip table 
document.querySelector("main").append(tipTable);
};

const tipCalculator =(sum,percentage,locale,currency,callback)=>{
let tip= sum * (percentage/100);
let total = sum + tip;

const finalTip={
    sum: formatter(locale,currency,sum),
    percentage: percentage + " %",
    tip: formatter(locale,currency,tip),
    total: formatter(locale,currency,total)
};
callback(finalTip);
}; 

tipCalculator(29.95, 10, "es-SV","USD",printHtml);


//console.log(formatter("es-SV","USD",30));

/*const saludar = (name)=>{
alert('hello ' + name);
}

const processUserInput =(callback)=>{
var name= prompt('Please enter your name. ');
callback(name);
}

processUserInput(saludar);*/