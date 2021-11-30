    
    var side = document.getElementById("sideBar")
    var string = ""
    var sidebarCart = ""
    var cart1 = ""
    var total = 0
document.getElementById("cart").onclick = function(){
    side.style.transform = "translate(0%,0%)"
    document.getElementById("overlay").style.display = "block"
   
}
closeSideBar.onclick = function(){
    side.style.transform = "translate(100%,0%)"
    document.getElementById("overlay").style.display = "none"

}

document.getElementById("overlay").onclick = function(){
    side.style.transform = "translate(100%,0%)"
    document.getElementById("overlay").style.display = "none"
}


document.getElementById("bottom").innerHTML = `<h3>Total:- $ ${total}</h3>`

var filterData = []
var data = [
            {name:"DeWALT Nail Gun",price:120,path:"cat2-p-1-300x300.jpg"},
            {name:"Bostitch Nail Gun",price:135,path:"cat2-p-2-300x300 (1).jpg"},
            {name:"Stapler",price:145,path:"cat2-p-3-300x300.jpg"},
            {name:"Bosstitch Drum Nail Gun",price:150,path:"cat2-p-4-300x300 (1).jpg"},
            {name:"DeWALT Small Nail Gun",price:154,path:"cat2-p-5-300x300.jpg"},
            {name:"Bostitch Hand Saw",price:147,path:"cat4-p-1-300x300.jpg"}
        ]

        
function cart(value)
{
            var x = value.children
            
            string = x[1].innerText
            
            var selectedItem = new Object();
                selectedItem.pname = string;
                selectedItem.count = 1;

            filterData.push(selectedItem)
            
            
            for(i=0;i<filterData.length;i++)
            {   
                for(j=i+1;j<filterData.length;j++)
                {
                    if(filterData[i].pname==filterData[j].pname)
                    {
                        filterData.splice(j,1)
                        filterData[i].count++;
                        
                    }
                }
            }
        

            data.forEach(key => {
                filterData.forEach(value => {
                    if(key.name==value.pname){
                        total=total+(key.price*value.count)
                        sidebarCart+=`
                        <div class="card flex justify align">
                                <div class="imgBox">
                                    <img src="${key.path}" alt="">
                                </div>
                                <div class="textBox">
                                    <h3 class="textHead" id="pprice">${key.name}</h3>
                                    <p class="price">${key.price}</p>
                                </div>
                                <div>${value.count}</div>
                                <div><i class="far fa-trash-alt" onclick="deleteItem(this.parentElement)"></i></div>
                        </div>
                        `
                    }
                });
            });
            console.log(total)
            document.getElementById("bottom").innerHTML = `<h3>Total:- $ ${total}</h3>`
            total = 0
            document.getElementById("card").innerHTML = sidebarCart
            sidebarCart = ""
        
    
    
}

function deleteItem(value){
    var x = value.parentElement.children[1].children[0].innerText
            filterData.forEach(y => {
                if(y.pname==x){
                    y.count--;
                }
            });



            data.forEach(key => {
                filterData.forEach(value => {
                    if(value.count == 0)
                    {
                        value.pname = ""
                    }
                    if(key.name==value.pname){
                        total=total+(key.price*value.count)
                        sidebarCart+=`
                        <div class="card flex justify align">
                                <div class="imgBox">
                                    <img src="${key.path}" alt="">
                                </div>
                                <div class="textBox">
                                    <h3 class="textHead" id="pprice">${key.name}</h3>
                                    <p class="price">${key.price}</p>
                                </div>
                                <div>${value.count}</div>
                                <div class="cursor"><i class="far fa-trash-alt" onclick="deleteItem(this.parentElement)"></i></div>
                        </div>
                        `
                    }
                });
            });
            console.log(total)
            document.getElementById("bottom").innerHTML = `<h3>Total:- $ ${total}</h3>`
            total = 0
            document.getElementById("card").innerHTML = sidebarCart
            sidebarCart = ""
}


function displayCart(){
    data.forEach(val => {
        cart1+=` <div class="card">
        <div class="imgBox">
           
            <img src="${val.path}" alt="">
        </div>
        <div class="textBox">
            <button id="add" onclick="cart(this.parentElement)" class="cursor">Add to Cart</button>
            <h3 class="textHead" id="pprice">${val.name}</h3>
            <p class="price">$ ${val.price}</p>
        </div>
    </div>`
    });
    document.getElementById("cardBox").innerHTML = cart1
}

displayCart()



