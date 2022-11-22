import logo from './logo.svg'; 
import './App.css'; 
 
 
function App() { 
  const contentsdata = [{ 
    h5: "free", 
    h2: "$0", 
    l1: "Single User", 
    l2: "5GB Storage", 
    l3: "Unlimited Public Projects", 
    l4: "Community Access", 
    l5: <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited 
      Private Projects</li>, 
    l6: <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated 
      Phone Support</li>, 
    l7: <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain 
    </li>, 
    l8: <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status 
      Reports</li> 
  }, 
  { 
    h5: "plus", 
    h2: "$9", 
    l1: <strong>5 Users</strong>, 
    l2: "50GB Storage", 
    l3: "Unlimited Public Projects", 
    l4: "Community Access", 
    l5: <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>, 
    l6: <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>, 
    l7: <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>, 
    l8: <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status 
      Reports</li> 
  }, 
  { 
    h5: "pro", 
    h2: "$49", 
    l1: <strong>Unlimited Users</strong>, 
    l2: "150GB Storage", 
    l3: "Unlimited Public Projects", 
    l4: "Community Access", 
    l5: <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>, 
    l6: <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>, 
    l7: <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free 
      Subdomains</li>, 
    l8: <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li> 
  } 
  ] 
 
  return ( 
    <div className="App"> 
      <section class="pricing py-5"> 
        <div class="container"> 
          <div class="row"> 
            {contentsdata.map((ele) => <Card h5={ele.h5} h2={ele.h2} l1={ele.l1} l2={ele.l2} l3={ele.l3} l4={ele.l4} l5={ele.l5} l6={ele.l6} l7={ele.l7} l8={ele.l8} />)} 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
} 
function Card({ h5, h2, l1, l2, l3, l4, l5, l6, l7, l8 }) { 
  return ( 
    <div class="col-lg-4"> 
      <div class="card mb-5 mb-lg-0"> 
        <div class="card-body"> 
          <h5 class="card-title text-muted text-uppercase text-center">{h5}</h5> 
          <h6 class="card-price text-center">{h2}<span class="period">/month</span></h6> 
          <hr /> 
          <ul class="fa-ul"> 
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{l1}</li> 
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{l2}</li> 
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{l3}</li> 
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{l4}</li> 
            {l5} 
            {l6} 
            {l7} 
            {l8} 
          </ul> 
          <div class="d-grid"> 
            <a href="#" class="btn btn-primary text-uppercase">Button</a> 
          </div> 
        </div> 

      </div> 
    </div> 
  ) 
} 
 
export default App;
