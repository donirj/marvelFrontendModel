import React from 'react'
import './styles.css';

function create() {
    return (
        <>
   
        <div className='box0'>
            <div className='box1'>
                <input
                type='text' 
                className='input1'
                placeholder='Original Name'
                />

                <input
                type='text' 
                className='input1'
                placeholder='Aka'
                />

            </div>  
            
            <div className='box1'>
            <div className='box2'>
                <input
                type='text' 
                className='input2'
                placeholder='Image URL'
                />
    
                <input
                type='text' 
                className='input3'
                placeholder='Name'
                />

                <button className='button2'>
                    Save changes
                </button>      
            </div>  
            </div>
          
        </div>
        </>
    )
}

export default create
