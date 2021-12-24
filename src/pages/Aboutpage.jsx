import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

const Aboutpage = () => {
    return (
        <Card>
            <h3>About us</h3>
            <Link to="/">Back home</Link> 
        </Card>
    )
}

export default Aboutpage
