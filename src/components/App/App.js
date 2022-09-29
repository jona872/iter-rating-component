import logo from './logo.svg';
import l2 from '../../assets/images/icon-star.svg';
import './App.css';
import Qualification from '../../components/Qualification/Qualification';
import { useState } from 'react';
import Result from '../Result/Result';

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
    <div className="card">
      {
        submited ?
          <Result value={selectedId}/>
          :
          <>
            <div className="App--logo--container">
              <img src={l2} className="App--logo" alt="fav lo" />
            </div>
            <h1>How did we do?</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus aspernatur earum necessitatibus illo officia. doloribus? </span>

            <div className="card--qualification">
              {qualifications}
            </div>

            <button className="card--button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </>
      }

    </div>
  )
}

export default App;
