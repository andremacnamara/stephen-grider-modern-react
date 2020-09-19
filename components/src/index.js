import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          content="It's a nice day" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails 
          author="Alex" 
          timeAgo="Today at 2:00AM" 
          content="I can't wait until Christmas" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails 
          author="Jane" 
          timeAgo="Today at 5:00PM" 
          content="The PL is back" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));