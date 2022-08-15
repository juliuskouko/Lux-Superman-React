import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="main">
        <nav className="navbar navbar-default navbar-home">
            <div className="container-fluid">
              
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">LUX </a>
              </div>
          
              
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                 
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Plans</a></li>
                </ul>
              </div>
            </div>
        </nav>


        <div className="container-fluid">
            <div className="row">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                  
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                  
                    
                    <div className="carousel-inner carousel-content" role="listbox">
                        <div className="item active">
                            <img src="images/5.jpg" alt="photograph"/>
                           
                        </div>
        
                        <div className="item">
                            <img src="images/3.jpg" alt="food"/>
                           
                        </div>
        
                        <div className="item">
                            <img src="images/8.jpg" alt="family"/>
                           
                        </div>
                      
                    </div>
                  
                    
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
           
        </div>

        <div className="container plan">
            <div className="row">
                <h3 className="text-center">Our Plans</h3>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/9.jpg" alt="conference"/>
                        <div className="caption">
                          <h3><a href="#">Conference Room</a></h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe nesciunt unde
                                placeat facere harum quaerat, minus 
                                voluptatem quia sint, officia culpa rem
                                quae veniam laboriosam, eaque mollitia
                                cum voluptatibus ut!
                            </p>
                           
                          
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/16.jpg" alt="Office"/>
                        <div className="caption">
                            <h3><a href="#">Ofice/Workstations</a></h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe nesciunt unde
                                placeat facere harum quaerat, minus 
                                voluptatem quia sint, officia culpa rem
                                quae veniam laboriosam, eaque mollitia
                                cum voluptatibus ut!
                            </p>
                           
                          
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/12.jpg" alt="gamin Room"/>
                        <div className="caption">
                            <h3><a href="#">Play Room</a></h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe nesciunt unde
                                placeat facere harum quaerat, minus 
                                voluptatem quia sint, officia culpa rem
                                quae veniam laboriosam, eaque mollitia
                                cum voluptatibus ut!
                            </p>
                           
                         
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/19.jpg" alt="conference"/>
                        <div className="caption">
                            <h3><a href="#">Mini Movie Theater</a></h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe nesciunt unde
                                placeat facere harum quaerat, minus 
                                voluptatem quia sint, officia culpa rem
                                quae veniam laboriosam, eaque mollitia
                                cum voluptatibus ut!
                            </p>
                           
                          
                        </div>
                    </div>
                </div>

            </div>

           
        </div>

        <footer className="end">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="text-center">Location</h4>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Quisquam voluptatibus,
                             
                               
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h4 className="text-center">Contact Info</h4>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Quisquam voluptatibus,
                             
                              
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h4 className="text-center">Visit Us</h4>
                        <p className="text-center">
                            www.lux.yourcomfort.org <br/>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quisquam voluptatibus,
                              
                        </p>
                    </div>
                </div>

            </div>
           
        </footer>

    
    </div>
  );
}

export default App;
