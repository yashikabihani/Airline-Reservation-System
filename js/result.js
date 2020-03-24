var source = localStorage.getItem("source");
var destination = localStorage.getItem("destination");
var pass = localStorage.getItem("pass");

var object = [{
        "from": "Chennai",
        "to": "Delhi",
        "departureTime": "5.00 PM",
        "arrivalTime": "7.40 PM",
        "duration": "2.40",
        "airline": "Jet Airways",
        "seats": "1",
        "price": "6900"
    }, {
        "from": "Kolkata",
        "to": "Bengaluru",
        "departureTime": "9.40 PM",
        "arrivalTime": "12.10 AM",
        "duration": "2.30",
        "airline": "Air India",
        "seats": "1",
        "price": "7500"
    }, {
        "from": "Bengaluru",
        "to": "Kolkata",
        "departureTime": "7.00 AM",
        "arrivalTime": "9.30 AM",
        "duration": "2.30",
        "airline": "Jet Airways",
        "seats": "2",
        "price": "4000"
    },{
        "from": "Delhi",
        "to": "Chennai",
        "departureTime": "12.30 PM",
        "arrivalTime": "3.20 PM",
        "duration": "2.50",
        "airline": "Air India",
        "seats": "3",
        "price": "9000"
    },{
        "from": "Bengaluru",
        "to": "Kolkata",
        "departureTime": "5.00 PM",
        "arrivalTime": "7.00 PM",
        "duration": "2.00",
        "airline": "Air India",
        "seats": "3",
        "price": "10000"
    }, {
        "from": "Kolkata",
        "to": "Bengaluru",
        "departureTime": "9:30 PM",
        "arrivalTime": "12:10 AM",
        "duration": "2.40",
        "airline": "Jet Airways",
        "seats": "3",
        "price": "6300"
    },{
        "from": "Bengaluru",
        "to": "Kolkata",
        "departureTime": "6.00 PM",
        "arrivalTime": "8.00 PM",
        "duration": "2.00",
        "airline": "Indigo",
        "seats": "5",
        "price": "6000"
    },{
        "from": "Delhi",
        "to": "Chennai",
        "departureTime": "3.00 AM",
        "arrivalTime": "6.00 AM",
        "duration": "3.00",
        "airline": "Air India",
        "seats": "7",
        "price": "8000"
    },{
        "from": "Chennai",
        "to": "Delhi",
        "departureTime": "2.00 AM",
        "arrivalTime": "5.00 AM",
        "duration": "3.00",
        "airline": "Air India",
        "seats": "10",
        "price": "7000"
    }, {
        "from": "Kolkata",
        "to": "Bengaluru",
        "departureTime": "5.50 AM",
        "arrivalTime": "7.50 AM",
        "duration": "2.00",
        "airline": "Air India",
        "seats": "12",
        "price": "5699"
    },{
        "from": "Delhi",
        "to": "Chennai",
        "departureTime": "12.20 PM",
        "arrivalTime": "3.20 PM",
        "duration": "3.00",
        "airline": "Air India",
        "seats": "12",
        "price": "9000"
    }, {
        "from": "Bengaluru",
        "to": "Kolkata",
        "departureTime": "3.00 AM",
        "arrivalTime": "5.00 AM",
        "duration": "2.00",
        "airline": "Indigo",
        "seats": "21",
        "price": "6500"
    },{
        "from": "Kolkata",
        "to": "Bengaluru",
        "departureTime": "5.50 AM",
        "arrivalTime": "8.00 AM",
        "duration": "2.10",
        "airline": "Indigo",
        "seats": "21",
        "price": "5700"
    },{
        "from": "Chennai",
        "to": "Delhi",
        "departureTime": "4.50 PM",
        "arrivalTime": "7.00 PM",
        "duration": "2.10",
        "airline": "Air India",
        "seats": "24",
        "price": "5750"
    }, {
        "from": "Delhi",
        "to": "Chennai",
        "departureTime": "3.00 AM",
        "arrivalTime": "6.00 AM",
        "duration": "3.00",
        "airline": "Indigo",
        "seats": "25",
        "price": "7999"
    },{
        "from": "Chennai",
        "to": "Delhi",
        "departureTime": "5.00 AM",
        "arrivalTime": "8.00 AM",
        "duration": "3.00",
        "airline": "Air India",
        "seats": "26",
        "price": "8000"
    },{
        "from": "Bengaluru",
        "to": "Kolkata",
        "departureTime": "6.00 PM",
        "arrivalTime": "9.00 AM",
        "duration": "3.00",
        "airline": "Air India",
        "seats": "27",
        "price": "5000"
    },{
        "from": "Delhi",
        "to": "Chennai",
        "departureTime": "3.00 AM",
        "arrivalTime": "6.05 AM",
        "duration": "3.05",
        "airline": "Jet Airways",
        "seats": "29",
        "price": "7500"
    }, {
        "from": "Kolkata",
        "to": "Bengaluru",
        "departureTime": "2:30 AM",
        "arrivalTime": "4.50 AM",
        "duration": "2.20",
        "airline": "Air India",
        "seats": "36",
        "price": "4500"
    }, {
        "from": "Chennai",
        "to": "Delhi",
        "departureTime": "5.00 PM",
        "arrivalTime": "7.50 PM",
        "duration": "2.50",
        "airline": "Indigo",
        "seats": "56",
        "price": "4800"
    }];

function filterByProperty(object, from, fromvalue, to, toValue, pass, passValue){
    var filtered = []
    for (var i = 0; i < object.length; i++){
        var obj = object[i];
            if((obj[from] == fromvalue)&&(obj[to] == toValue) && (obj[pass] >= passValue)){
                    filtered.push(obj);
            }
        }
    return filtered;
}

var filteredArray = filterByProperty(object,"from",source,"to", destination,"seats", pass);


/*function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}*/

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(filteredArray[0]);
//generateTableHead(table, data);
generateTable(table, filteredArray);


  function sort(value){
    deleteRows()
    filteredArray.sort(function compareValues(a,b){
      key = value 
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return comparison
    });
    generateTable(table, filteredArray);

  }

  function filter(value){
    if(value=="price")
      filterbyPrice(value);
    else if(value=="duration"){
      document.getElementById('radio').classList.remove("hidden"); 
      document.getElementById('myRange').classList.add("hidden");
      document.getElementById('airlineradio').classList.add("hidden");
      document.getElementById('time').classList.add("hidden"); 
    }
    else if(value=="airline"){
      document.getElementById('radio').classList.add("hidden"); 
      document.getElementById('myRange').classList.add("hidden");
      document.getElementById('airlineradio').classList.remove("hidden"); 
      document.getElementById('time').classList.add("hidden"); 
    }
    else if(value=="departure"){
      document.getElementById('radio').classList.add("hidden"); 
      document.getElementById('myRange').classList.add("hidden");
      document.getElementById('airlineradio').classList.add("hidden");  
      document.getElementById('time').classList.remove("hidden");
      filterbyTime(1)
    }
    else if(value=="arrival"){
      document.getElementById('radio').classList.add("hidden"); 
      document.getElementById('myRange').classList.add("hidden");
      document.getElementById('airlineradio').classList.add("hidden"); 
      document.getElementById('time').classList.remove("hidden"); 
      filterbyTime(1) 
    }
}
  function deleteRows() {
    var x = document.getElementById("table");
    while(x.rows.length  >= 2){
      document.getElementById("table").deleteRow(-1);
    }
  }

  function filterbyPrice(value){
    deleteRows()
    generateTable(table, filteredArray);
    document.getElementById('radio').classList.add("hidden"); 
    document.getElementById('myRange').classList.remove("hidden"); 
    document.getElementById('airlineradio').classList.add("hidden");
    document.getElementById('time').classList.add("hidden"); 
    document.getElementById('textInput').value=value; 
    console.log(value)
    var filteredbyProp = [];
    for (var i = 0; i < filteredArray.length; i++){
      var obj = filteredArray[i];
          if(obj["price"] <= value){
            filteredbyProp.push(obj);
          }
      }
  deleteRows()
  generateTable(table, filteredbyProp);
  }

  function filterbyDuration(){
    var value
    deleteRows()
    generateTable(table, filteredArray);
    document.getElementById('myRange').classList.add("hidden"); 
    var ele = document.getElementsByName('radio'); 
    for(i = 0; i < ele.length; i++) { 
      if(ele[i].checked) 
      value = ele[i].value; 
    } 
    console.log(value)
    var filteredbyProp = [];
    for (var i = 0; i < filteredArray.length; i++){
      var obj = filteredArray[i];
      console.log(obj["duration"])
      console.log(parseFloat(obj["duration"]) < parseFloat(value))
          if(parseFloat(obj["duration"]) < parseFloat(value) && value == 2)
            filteredbyProp.push(obj);
          else if((parseFloat(obj["duration"]) >= 2) && (parseFloat(obj["duration"]) < 3) && value == 3)
            filteredbyProp.push(obj);
          else if((parseFloat(obj["duration"]) >= 3) && value == 4)
            filteredbyProp.push(obj);
      }
      console.log(filteredbyProp)
  deleteRows()
  generateTable(table, filteredbyProp);
  }

  function filterbyAirline(value){
    var value
    deleteRows()
    generateTable(table, filteredArray);
    document.getElementById('myRange').classList.add("hidden"); 
    var ele = document.getElementsByName('radio'); 
    for(i = 0; i < ele.length; i++) { 
      if(ele[i].checked) 
      value = ele[i].value; 
    } 
    console.log(value)
    var filteredbyProp = [];
    for (var i = 0; i < filteredArray.length; i++){
      var obj = filteredArray[i];
      console.log(obj["airline"])
          if(obj["airline"] =="Indigo" && value == 2)
            filteredbyProp.push(obj);
          else if((obj["airline"]) =="Air India" && value == 3)
            filteredbyProp.push(obj);
          else if((obj["airline"]) == "Jet Airways" && value == 4)
            filteredbyProp.push(obj);
      }
      console.log(filteredbyProp)
  deleteRows()
  generateTable(table, filteredbyProp);

  }

  function filterbyTime(value){
    var filteredbyProp = [];
    for (var i = 0; i < filteredArray.length; i++){
      var obj = filteredArray[i];
      var numericvalue = (obj["departureTime"]).split(" ",1);
          if(((numericvalue <= 2.59) || (numericvalue == 12.00)) && value == 1)
            filteredbyProp.push(obj);
          else if((numericvalue > 2.59) && (numericvalue <= 5.59) && value == 2)
            filteredbyProp.push(obj);
          else if((numericvalue > 5.59) && (numericvalue <= 8.59) && value == 3)
            filteredbyProp.push(obj);
          else if((numericvalue > 8.59) && (numericvalue <= 11.59) && value == 3)
            filteredbyProp.push(obj);
      }
      console.log(filteredbyProp)
  deleteRows()
  generateTable(table, filteredbyProp);
  }