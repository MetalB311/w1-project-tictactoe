import React from 'react'


const Square = (props) =>{
    const handleClick =()=>{
        if (!props.squareValue) {
            if(props.player) {
                props.squares.splice(props.index, 1, 'X')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }else {
                props.squares.splice(props.index, 1, 'O')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
        }
    }
    return (
        <div className = 'square' onClick={handleClick} >
            {props.squareValue === 'X' ? <img src= {require('./demon.jpg')} /> : props.squareValue} 

            <div className = 'square' onClick={handleClick} >
            {props.squareValue === 'O' ? <img src= {require('./angel2.jpg')} /> : props.squareValue} 

        </div>
        </div>
        
    )
    // return (
    //     <div className = 'square' onClick={handleClick} >
    //         {props.squareValue === 'X' ? <img src= {require('./angel.jpg')} /> : props.squareValue} 

    //     </div>
    // )
}



export default Square