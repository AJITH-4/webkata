 var container = document.createElement("div");
container.classname = "container";

var row = document.createElement("div");
row.classList.add ("row","m-4") ;

var column = document.createElement ("div");
column.classname = "column";

row.append (column);
container.append(row);




async function getdata(){
  try{
    let data = await fetch ("https://makeup-api.herokuapp.com/api/v1/products.json");  
       let dataresult = await data.json();
        // console.log(dataresult);
    for(i=0; i<=dataresult.length; i++){
        // console.log(dataresult[i].price);
            row.innerHTML +=`
                   
          <div class="card border-primary mb-3" style="width: 18rem;">
               <img src="${dataresult[i].api_featured_image}"  height="200px">
                  <h5 class="card-title">${dataresult[i].name}</h5>
                  <li class="list-group-item">Brand : ${dataresult[i].brand}</li>
                  <li class="list-group-item">Rs : ${dataresult[i].price}</li>
                    <p class="card-text">${dataresult[i].description}</p>
                    <a href="#" class="card-link">${dataresult[i].product_link}</a>
                    
            </div>`;
        document.body.append(container);
  
}  
    } 
    catch(error){
        console.log(error);
    }
  //   let pagesize = 6;
  // let curpage = 1;
  // async function pagination (page = 1) {
  //   await getdata()
  //   if (page == 1) {
  //     prevButton.style.visibility = "hidden";
  //   } else {
  //     prevButton.style.visibility = "visible";
  //   }
  
  //   if (page == numPages()) {
  //     nextButton.style.visibility = "hidden";
  //   } else {
  //     nextButton.style.visibility = "visible";
  //   }

  //   var page = "";
  //   coinsData.filter(( currow,index) => {
  //     let start = (curPage - 1) * pageSize;
  //     let end = curPage * pageSize;
  //     if (index >= start && index < end) return true;
  //   })
  //   document.getElementById("data").innerHTML = page;
  // }
  // function previousPage() {
  //   if (curPage > 1) {
  //     curPage--;
  //     pagination(curPage);
  //   }
  // }
  
  // function nextPage() {
  //   if ((curPage * pageSize) < dataresult.length) {
  //     curPage++;
  //     pagination(curPage);
  //   }
  // }
  
  // pagination()
  
  // function numPages() {
  //   return Math.ceil(dataresult.length / pageSize);
  // }
  
  // document.querySelector('nextButton').addEventListener('search', nextPage);
  // document.querySelector('prevButton').addEventListener('search', previousPage);

}

getdata();

