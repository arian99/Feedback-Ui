import React,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
const Feedbackstate = () => {
  const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
    return (
        <div className="feedback-state">
            <h4>{feedback.length} Review</h4>
            <h4>Average Rating: ({isNaN(average) ? 0 : average})</h4>
        </div>
    )
}

export default Feedbackstate
