import React from 'react'
import './styles.css';
import andoni from "../../assets/images/andoni.png"
import { NavLink } from "react-router-dom";

function Details() {
    return (
        <>
            <div className='bigbox'>
                <div className='bigbox2'>  
                    <div className='bigbox'>
                        <img className='image0' src={andoni} />
                    </div>
                        <p className="title1">Captain america</p>
                        <p className='title3'>Steve rogers</p>
                        <p className="description">Captain America is a
                        superhero appearing in American comic books
                        published by Marvel Comics. Created by cartoonists
                        Joe Simon and Jack Kirby, the character first appeared
                            in Captain America Comics #1 from Timely Comics, a predecessor
                            of Marvel Comics.</p>
                </div>
            </div>
            
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

export default Details
