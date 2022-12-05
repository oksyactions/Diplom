
class Products{
    render(data){
        
        let htmlCatalog='';
        (data || CATALOG).forEach(({id, name, price, img}) =>{



            htmlCatalog+= `
            <li class="products-element" >
           
            <img class="products-element__img" src="${img}"/>
             <span class="products-element__name">${name}</span>
            <span class="products-element__price"  > ${price.toLocaleString()} RUB </span>
            <button class="products-element__order" onclick="toForma()"> Заказать </button>
            </li>
            
            `;
        });

        const html = `
        
        <ul class="products-container" > 

        ${htmlCatalog}
         </ul>
        `;
        const ROOT_PRODUCTS = document.getElementById(`products`);
        ROOT_PRODUCTS.innerHTML=html;
    }
}
let productsPage = new Products();
productsPage.render();


function filterByType(type) {
    const filtered = CATALOG.filter(function (obj) {
      return obj.type === type;
    });

    let productsPage = new Products();
    productsPage.render(filtered);
  }

  function getAll() {
    let productsPage = new Products();
    productsPage.render();
  }