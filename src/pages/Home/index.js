import React from 'react'
import './styles.css';
import Details from '../Details';
import andoni from "../../assets/images/andoni.png"
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <> 
        <div className='bigbox'>
            <div className='bigbox2'>  
                <NavLink style={{ textDecoration: 'none'}} to="/Details">
                    <div className='herobox'>
                        <div className="names">
                            <img className='image1' src={andoni} />
                            <div className='title0'>
                                <p className="title1">Captain america</p>
                                <p className='title2'>Steve rogers</p>
                            </div>
                        </div> 
                        <div className='buttons'>
                        <NavLink to="/update"><button className='form2'><i  className="fas fa-pencil-alt"></i></button></NavLink> 
                            <button className='form1'><i  className="fas fa-times"></i></button>
                        </div>
                            
                    </div> 
                </NavLink>
        
                <NavLink style={{ textDecoration: 'none'}} to="/Details">
                    <div className='herobox'>
                        <div className="names">
                            <img className='image1' src={andoni} />
                            <div className='title0'>
                            <p className="title1">Captain america</p>
                                <p className='title2'>Steve rogers</p>
                            </div>
                        </div> 
                        <div className='buttons'>
                        <NavLink to="/update"><button className='form2'><i  className="fas fa-pencil-alt"></i></button></NavLink>
                            <button className='form1'><i  className="fas fa-times"></i></button>
                        </div>      
                    </div>
                </NavLink>
        
                <NavLink style={{ textDecoration: 'none'}} to="/Details">
                    <div className='herobox'>
                        <div className="names">
                            <img className='image1' src={andoni} />
                            <div className='title0'>
                                <p className="title1">Captain america</p>
                                <p className='title2'>Steve rogers</p>
                            </div>
                        </div> 
                        <div className='buttons'>
                        <NavLink to="/update"><button to="" className='form2'><i  className="fas fa-pencil-alt"></i></button></NavLink>
                            <button className='form1'><i  className="fas fa-times"></i></button>
                        </div>      
                    </div>
                </NavLink>
            </div>
        </div>  
        
        </>
    )
}

export default Home
