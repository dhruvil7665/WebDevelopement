import './../scss/main.scss';

//Notifies Javascript Engine to load rxjs
let rxjs = require('rxjs');
let nextNode = document.getElementById('__next');
const tbl = document.getElementById('stockTable');
//creates an observable and attaches an event listener to the button
const event$ = rxjs.fromEvent(nextNode, 'click');

//subscribing to the observable
let subscription = event$.subscribe(function (x) {
    let userInput= document.getElementById('stockDataUser').value; //taking input from user

    //removing any existing nodes in the table
    while(tbl.hasChildNodes()){
        tbl.removeChild(tbl.firstChild);
    }

    //creating column headers for the table
    let header1=createNode('th');
    let header2=createNode('th');
    let header3=createNode('th');
    let header4=createNode('th');
    let header5=createNode('th');
    let header6=createNode('th');
    let header7=createNode('th');
    let header8=createNode('th');
    let header9=createNode('th');
    let header10=createNode('th');
    let header11=createNode('th');
    let header12=createNode('th');
    let header13=createNode('th');
    let header14=createNode('th');
    let header15=createNode('th');
    let header16=createNode('th');
    let header17=createNode('th');
    let header18=createNode('th');
    let header19=createNode('th');
    let header20=createNode('th');
    let header21=createNode('th');
    let header22=createNode('th');
    let header23=createNode('th');
    let header24=createNode('th');

    //Input values of the headers
    header1.innerHTML="Symbol";
    header2.innerHTML="Name";
    header3.innerHTML="Currency";
    header4.innerHTML="Price";
    header5.innerHTML="Price_open";
    header6.innerHTML="Day_high";
    header7.innerHTML="Day_low";
    header8.innerHTML="52_week_high";
    header9.innerHTML="52_week_low";
    header10.innerHTML="Day_change";
    header11.innerHTML="Change_percent";
    header12.innerHTML="Change_yesterday";
    header13.innerHTML="Market_cap";
    header14.innerHTML="Volume";
    header15.innerHTML="Volume_avg";
    header16.innerHTML="Shares";
    header17.innerHTML="Stock_Exchange_longName";
    header18.innerHTML="Stock_Exchange_shortName";
    header19.innerHTML="Timezone";
    header20.innerHTML="Timezone_name";
    header21.innerHTML="Gmt_Offset";
    header22.innerHTML="Last_Trade_Time";
    header23.innerHTML="PE";
    header24.innerHTML="EPS";

    //append the header nodes to the table
    append(tbl,header1);
    append(tbl,header2);
    append(tbl,header3);
    append(tbl,header4);
    append(tbl,header5);
    append(tbl,header6);
    append(tbl,header7);
    append(tbl,header8);
    append(tbl,header9);
    append(tbl,header10);
    append(tbl,header11);
    append(tbl,header12);
    append(tbl,header13);
    append(tbl,header14);
    append(tbl,header15);
    append(tbl,header16);
    append(tbl,header17);
    append(tbl,header18);
    append(tbl,header19);
    append(tbl,header20);
    append(tbl,header21);
    append(tbl,header22);
    append(tbl,header23);
    append(tbl,header24);

    //declaring the url from which data needs to be fetched
    let url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=inputData&api_token=QFLTvVFDNf3POYpXO8GCH8i8ngEC9bJ67x51L57Nc1iofCa5s4Fr5vWCYwiJ';
    //replacing default string with userInput for dynamic URL
    url = url.replace('inputData',userInput);
    //fetch used to get data from server file using promise
    fetch(url)
        //if promise is resolved then
        .then((resp) => resp.json())
        .then(function(data) {
            let stocks = data.data;
            //returning the table after populating the values after fetching
            return stocks.map(function(stock) {

                let row = createNode('tr');

                let td1= createNode('td');
                let td2= createNode('td');
                let td3= createNode('td');
                let td4= createNode('td');
                let td5= createNode('td');
                let td6= createNode('td');
                let td7= createNode('td');
                let td8= createNode('td');
                let td9= createNode('td');
                let td10= createNode('td');
                let td11= createNode('td');
                let td12= createNode('td');
                let td13= createNode('td');
                let td14= createNode('td');
                let td15= createNode('td');
                let td16= createNode('td');
                let td17= createNode('td');
                let td18= createNode('td');
                let td19= createNode('td');
                let td20= createNode('td');
                let td21= createNode('td');
                let td22= createNode('td');
                let td23= createNode('td');
                let td24= createNode('td');



                td1.innerHTML=`${stock.symbol}`;
                td2.innerHTML=`${stock.name}`;
                td3.innerHTML=`${stock.currency}`;
                td4.innerHTML=`${stock.price}`;
                td5.innerHTML=`${stock.price_open}`;
                td6.innerHTML=`${stock.day_high}`;
                td7.innerHTML=`${stock.day_low}`;
                td8.innerHTML=stock["52_week_high"];
                td9.innerHTML=stock["52_week_low"];
                td10.innerHTML=`${stock.day_change}`;
                td11.innerHTML=`${stock.change_pct}`;
                td12.innerHTML=`${stock.close_yesterday}`;
                td13.innerHTML=`${stock.market_cap}`;
                td14.innerHTML=`${stock.volume}`;
                td15.innerHTML=`${stock.volume_avg}`;
                td16.innerHTML=`${stock.shares}`;
                td17.innerHTML=`${stock.stock_exchange_long}`;
                td18.innerHTML=`${stock.stock_exchange_short}`;
                td19.innerHTML=`${stock.timezone}`;
                td20.innerHTML=`${stock.timezone_name}`;
                td21.innerHTML=`${stock.gmt_offset}`;
                td22.innerHTML=`${stock.last_trade_time}`;
                td23.innerHTML=`${stock.pe}`;
                td24.innerHTML=`${stock.eps}`;





                //adding table columns
                append(row,td1);
                append(row,td2);
                append(row,td3);
                append(row,td4);
                append(row,td5);
                append(row,td6);
                append(row,td7);
                append(row,td8);
                append(row,td9);
                append(row,td10);
                append(row,td11);
                append(row,td12);
                append(row,td13);
                append(row,td14);
                append(row,td15);
                append(row,td16);
                append(row,td17);
                append(row,td18);
                append(row,td19);
                append(row,td20);
                append(row,td21);
                append(row,td22);
                append(row,td23);
                append(row,td24);





                //adding the row
                append(tbl, row);

            })
        })
        //if promise is in rejected state
        .catch(function(error) {
            console.log(error);

            alert("Invalid Stock! Please enter name of stocks in Comma Separated Form")
            while(tbl.hasChildNodes()){
                tbl.removeChild(tbl.firstChild);
            }
        });
});

//function for creating an element
function createNode(element) {
    return document.createElement(element);
}

//function for appending a node to parent node
function append(parent, el) {
    return parent.appendChild(el);
}

window.onunload = function () {
    subscription.unsubscribe();
    console.log("unload");
}


