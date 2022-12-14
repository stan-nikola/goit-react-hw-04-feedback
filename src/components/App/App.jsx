import { useState } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Box } from 'components/Box/Box';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const leaveFeedback = btnLabel => {
    switch (btnLabel) {
      case 'good':
        setGood(state => (state += 1));
        break;

      case 'neutral':
        setNeutral(state => (state += 1));
        break;
      case 'bad':
        setBad(state => (state += 1));
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const goodPercentage = good / (good + neutral + bad);

    if (isNaN(goodPercentage)) {
      return 0;
    }
    return Math.round(goodPercentage * 100);
  };

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={50}
      mx="auto"
      p={15}
      maxWidth={400}
      borderRadius="normal"
      bg="primary"
      boxShadow="items"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          statOptions={options}
          total={() => good + neutral + bad}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </Box>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = btnLabel => {
//     this.setState(prevState => ({ [btnLabel]: (prevState[btnLabel] += 1) }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const goodPercentage = good / this.countTotalFeedback();

//     if (isNaN(goodPercentage)) {
//       return 0;
//     }
//     return Math.round(goodPercentage * 100);
//   };

//   render() {
//     return (
//       <Box
//         as="main"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mt={50}
//         mx="auto"
//         p={15}
//         maxWidth={400}
//         borderRadius="normal"
//         bg="primary"
//         boxShadow="items"
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.leaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             statOptions={this.state}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </Box>
//     );
//   }
// }
