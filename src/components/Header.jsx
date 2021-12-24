import React from 'react'

const Header = ({text, bgColor, textColor}) => {
    const styleHeader={
        backgroundColor:bgColor,
        color:textColor
    }
    return (
        <header style={styleHeader}>
            <div className="container">
              <h1>{text}</h1>
            </div>
            
        </header>
    )
}
Header.defaultProps={
    bgColor:"#b2a255",
    textColor:"#333",
    text:"Feedback UI"
}
export default Header
