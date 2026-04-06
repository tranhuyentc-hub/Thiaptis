import { Question } from './types';

export const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    type: 'grammar',
    text: '"If I had known about the change in schedule, I ______ the meeting much earlier than I actually did."',
    options: [
      { id: 'a', text: 'would have joined' },
      { id: 'b', text: 'will join' },
      { id: 'c', text: 'would join' },
      { id: 'd', text: 'joined' }
    ],
    correctOptionId: 'a',
    explanation: 'Đây là câu điều kiện loại 3, diễn tả một giả thiết trái ngược với thực tế trong quá khứ. Cấu trúc: If + S + had + P2, S + would have + P2.',
    vocabulary: [
      { word: 'Had known', definition: 'Third conditional structure used for hypothetical past situations.' },
      { word: 'Schedule', definition: 'A plan that gives expected times for different things to happen.' }
    ]
  },
  {
    id: '2',
    type: 'listening',
    text: 'Listen to the speaker. What is the main reason the speaker is calling the office?',
    options: [
      { id: 'a', text: 'To complain about a late delivery' },
      { id: 'b', text: 'To reschedule an appointment' },
      { id: 'c', text: 'To ask for directions' },
      { id: 'd', text: 'To confirm a meeting time' }
    ],
    correctOptionId: 'b',
    explanation: 'Người nói đề cập đến việc bận đột xuất và muốn dời lịch hẹn sang tuần sau.',
    vocabulary: [
      { word: 'Reschedule', definition: 'To change the time or date of a planned event.' }
    ]
  },
  {
    id: '3',
    type: 'reading',
    text: 'According to the text, what is the primary benefit of the new software update?',
    options: [
      { id: 'a', text: 'It reduces the cost of the subscription' },
      { id: 'b', text: 'It improves the processing speed by 20%' },
      { id: 'c', text: 'It adds a new user interface' },
      { id: 'd', text: 'It fixes all previous bugs' }
    ],
    correctOptionId: 'b',
    explanation: 'Đoạn văn nêu rõ: "The latest version enhances performance, resulting in a 20% increase in speed."',
    vocabulary: [
      { word: 'Enhance', definition: 'To improve the quality, amount, or strength of something.' }
    ]
  },
  {
    id: '4',
    type: 'grammar',
    text: 'By the time the manager arrived, the staff ______ the report for over two hours.',
    options: [
      { id: 'a', text: 'have been preparing' },
      { id: 'b', text: 'had been preparing' },
      { id: 'c', text: 'were preparing' },
      { id: 'd', text: 'prepared' }
    ],
    correctOptionId: 'b',
    explanation: 'Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous) dùng để nhấn mạnh khoảng thời gian của một hành động đã xảy ra trước một thời điểm khác trong quá khứ.',
    vocabulary: [
      { word: 'By the time', definition: 'Used to say that something has already happened when something else happens.' }
    ]
  }
];
