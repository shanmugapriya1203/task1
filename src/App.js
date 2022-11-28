
import { useState } from 'react';
import './App.css'; 
 
 
 
function App() { 
  const [cart,setCart]=useState(0);
    const data = [ 
        { 
          h5: "Fancy product", 
          price: <span>$40.00 - $80.00</span>, 
          price1: "", 
          star: "", 
          addedToCart: false ,
          islinethrough:false,
        }, 
        { 
          h5: "Special Item", 
          price: "$20.00",
          price1: <span>$18.00</span>, 
          star: "⭐️⭐️⭐️⭐️⭐️", 
          addedToCart: false ,
          islinethrough:true,
        }, 
        { 
          h5: "Sale Item", 
          price: "$50.00",
          price1: <span>$25.00</span>, 
          star: "", 
          addedToCart: false ,
          islinethrough:true,
     
        }, 
        { 
          h5: "Popular Item", 
          price: <span>$40.00</span>, 
          price1: "", 
          star: "⭐️⭐️⭐️⭐️⭐️", 
          addedToCart: false ,
          islinethrough:false,  
        }, 
        { 
          h5: "Sale Item", 
          price: "$50.00" , 
          price1: <span>$25.00</span>, 
          star: "", 
          addedToCart: false ,
          islinethrough:true,
        }, 
        { 
          h5: "Fancy product", 
          price: <span>$120.00 - $280.00</span>, 
          price1: "", 
          star: "", 
          addedToCart: false ,
          islinethrough:false,  
        }, 
        { 
          h5: "Special Item", 
          price: "$20.00" , 
          price1: <span>$18.00</span>, 
          star: "⭐️⭐️⭐️⭐️⭐️", 
          addedToCart: false ,
          islinethrough:true,
        }, 
        { 
          h5: "Popular Item", 
          price: <span>$40.00</span>, 
          price1: "", 
          star: "⭐️⭐️⭐️⭐️⭐️", 
          addedToCart: false,
          islinethrough:false, 


        } 
      ]
    return(
        <div className='App'>

         <Nav cartCount={cart}/>
        <Header/>
         
        
         <section class="py-5"> 
        <div class="container px-4 px-lg-5 mt-5"> 
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> 
            {data.map((ele) => <Content content={ele} cart={cart}setCart={setCart} />)} 
          </div> 
        </div> 

      </section>
      <Footer/>
       </div>
    );


    
}
function Nav({cartCount}){
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="container"> 
                <a className="navbar-brand" href="#">Start Bootstrap</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span> 
                </button> 
                <div className="collapse navbar-collapse" id="navbarNavDropdown"> 
                    <ul className="navbar-nav"> 
                        <li className="nav-item"> 
                            <a className="nav-link active" aria-current="page" href="#">Home</a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">About</a> 
                        </li> 
 
                        <li className="nav-item dropdown"> 
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                Shop 
                            </a> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                                <li><a className="dropdown-item" href="#">All Products</a></li> 
                                <li><hr className="dropdown-divider" /></li> 
                                <li><a className="dropdown-item" href="#">Popular items</a></li> 
                                <li><a className="dropdown-item" href="#">New arrivals</a></li> 
                            </ul> 
                        </li> 
                    </ul> 
                </div> 
                <button className='btn btn-outline-dark' type='submit'> 
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp;Cart<span className='badge bg-dark text-white ms-1 rounded-pill'>{cartCount}</span> 
                </button> 
            </div> 
        </nav>
    );
}
function Content({content,cart,setCart}) { 

  const[isShow,setShow]=useState(true);
  function Increase(){
    return setCart(cart+1);
  }
  function Decrese(){
    return setCart(cart-1);
  }
 
    return ( 
      <div class="col mb-5"> 
        <div class="card h-100"> 
          <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> 
          <div class="card-body p-4"> 
            <div class="text-center"> 
              <h5 class="fw-bolder">{content.h5}</h5> 
             <div class="d-flex justify-content-center small text-warning mb-2">{content.star}</div>
                            {content.islinethrough?<span><span className={content.islinethrough?"text-muted text-decoration-line-through":""}>{content.price}</span><span> {content.price1}</span></span>:<span>{content.price}</span>}
                        </div>
          </div> 
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent"> 
          <button type="button" class="btn btn-light" onClick={()=>{
            setShow(!isShow);
            isShow ? Increase():Decrese()
          }}> {isShow ?"Add to cart" :"Remove"}</button>
          </div> 
        </div> 

      </div> 
   
    ) 
  }

  function Header() { 
    return ( 
      <header class="bg-dark py-5"> 
        <div class="container px-4 px-lg-5 my-5"> 
          <div class="text-center text-white"> 
            <h1 class="display-4 fw-bolder">Shop in style</h1> 
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p> 
          </div> 
        </div> 
      </header> 
    ) 
  }

  function Footer() { 
    return ( 
      <footer class="py-5 bg-dark"> 
        <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div> 
      </footer> 
    ) 
  }



 
export default App;
