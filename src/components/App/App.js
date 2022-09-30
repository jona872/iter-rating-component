import './App.css';
import Qualification from '../../components/Qualification/Qualification';
import { useState } from 'react';
import Result from '../Result/Result';
import Layout from '../Layout/Layout';
import Card from '../Card/Card';

function App() {
  const [qualification, setQualification] = useState(initializeState());
  const [selectedId, setSelectedId] = useState(0);
  const [submited, setSubmited] = useState(false);

  function initializeState() {
    return [
      { val: 1, active: false },
      { val: 2, active: false }, { val: 3, active: false },
      { val: 4, active: false }, { val: 5, active: false }
    ];
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);
    console.log(selectedId);

  }

  function toogler(q) {
    setQualification(initializeState());
    setSelectedId(q.val);
    setQualification(prevState => prevState.map(quali => {
      return (quali.val === q.val) ?
        {
          ...quali,
          active: !q.active
        }
        :
        quali
    }))
  }

  const qualifications = qualification.map((q) => {
    return (<Qualification key={q.val} id={q.val}
      value={q.val} holded={q.active}
      handleClick={() => toogler(q)} />
    )
  });

  return (
    <Layout>
      {
        submited ?
          <Result value={selectedId} />
          :
          <Card qualifications={qualifications}
            onSubmit={handleSubmit} />
      }

    </Layout>
  )
}

export default App;
