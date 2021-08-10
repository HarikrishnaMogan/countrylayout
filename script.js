
let xml = new XMLHttpRequest();
xml.open("GET","https://restcountries.eu/rest/v2/all")
xml.onload = function()
{
   let data = JSON.parse(this.response);
   createflag(data);
}
xml.onerror =function()
{
  console.log("error",this.status);
}
xml.send();

function createflag(data)
{
  let flex=document.createElement("div");
  flex.setAttribute("class","rows")
  for(let i=0;i<5;i++)
  {
    let container=document.createElement("div");
    container.innerHTML = `<img src="${data[i].flag}">
    <div class="country-details">
    <h2>${data[i].name}</h2>
    <p>Population:<span>${data[i].population}</span></p>
    <p>Region:<span>${data[i].region}</span></p>
    <p>Capital:<span>${data[i].capital}</span></p>
    </div>
    `;
    container.setAttribute("class","main");
    flex.append(container);
  }

  document.body.append(flex);
}





































/*function createflag()
{
  let main = document.createElement("div");
  main.innerHTML=`<img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png">
  <div>
  <h2>Germany</h2>
  <p>Population:81,770,900</p>
  <p>Region:Europe</p>
  <p>Capital:Berlin</p>
  </div>
  `;
  document.body.append(main);
  main.className="main";
}
for(let i=0;i<1;i++)
{
  createflag();
}*/