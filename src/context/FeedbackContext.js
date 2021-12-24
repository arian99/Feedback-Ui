import {createContext,useState} from 'react'
import { v4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider =({children})=>{
      const [feedback,setFeedback]=useState([
          {
              id:1,
              text:'this is a text from context 1',
              rating:10
          },
          {
              id:2,
              text:'this is a text from context 2',
              rating:6
          },
          {
              id:3,
              text:'this is a text from context 3',
              rating:8
          },
      ]);
      const [feedbackEdit, setFeedbackEdit]=useState({
          item:{},
          edit:false
      });
    //   delete feedback
      const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };
    //   add feedback
  const addFeedback = (newFeedback) => {
      newFeedback.id = v4()
    setFeedback([newFeedback, ...feedback]);
  };
// update feedback
  const updateFeedback=(id,updItem)=>{
    setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...updItem} : item)))
  }
  const editFeedback=(item)=>{
      setFeedbackEdit({
          item,
          edit:true
      })
  }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext