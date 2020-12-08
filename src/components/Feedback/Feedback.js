import React, {Component} from 'react';
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'
import s from './Feedback.module.css'

class Feedback extends Component {

    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    feedbackCounter = (e) => {
        const currentFeedback = e.target.dataset.action
       
        this.setState(prevState => {
            return { [currentFeedback]: prevState[currentFeedback] + 1 };
    })

    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad)
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return good ? Math.round((good / this.countTotalFeedback()) * 100) : 0
    }


    render() {
        const { good, neutral, bad} = this.state;
        const total = this.countTotalFeedback()
        const positiveFeedback = this.countPositiveFeedbackPercentage()
        const options = ['good', 'bad', 'neutral']
        return (
            <div className={s.feedback}>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={options}
                        onFeedbackCounter={this.feedbackCounter}
                    />
                
                
</Section>
                
                <Section title={'Statistics'}>
                    {total ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
              
                    />) : (
            <Notification message="No feedback given" />
          )}
                
                    </Section>
            

            </div>
        )
    }
}

export default Feedback