import { useState } from 'react';
import SummaryCard from '../components/SummaryCard';
import AddButton from '../components/AddButton';
import Task from '../components/Task';
import Modal from '../components/Modal';
import CreateTask from '../components/CreateTask';
import '../TaskPage.css';
import { useQuery } from '@apollo/client';
import GET_TASKS from '../queries/taskQuery';
// import { TaskInterface, ReducerAction } from '../Types';

function TaskPage() {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [isOpen, setIsOpen] = useState(false);
  //   const [completed, setCompleted] = useState(0);
  //   const [total, setTotal] = useState(data.user.tasks.length);
  //   const initialState = [
  //     {
  //       id: '0',
  //       title: 'Work Out',
  //       checked: false,
  //     },
  //     {
  //       id: '1',
  //       title: 'Fix Breakfast',
  //       checked: false,
  //     },
  //     {
  //       id: '2',
  //       title: 'Setup work space',
  //       checked: false,
  //     },
  //     {
  //       id: '3',
  //       title: 'Take my bath',
  //       checked: true,
  //     },
  //   ];

  //   function reducer(state: TaskInterface[], action: ReducerAction) {
  //     switch (action.type) {
  //       case 'reverseCheck':
  //         let stateCopy = [...state];
  //         stateCopy[Number(action.payload)] = {
  //           ...stateCopy[Number(action.payload)],
  //           checked: !stateCopy[Number(action.payload)].checked,
  //         };

  //         return stateCopy;

  //       default:
  //         return state;
  //     }
  //   }

  //   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}>
          <CreateTask setIsOpen={setIsOpen} />
        </Modal>
      ) : null}
      <div className='container'>
        <div>
          <input className='search' type={'search'} placeholder='search task' />
        </div>
        <div className='summary-container'>
          <SummaryCard count={0} title={'Completed'} />
          <SummaryCard count={4} title={'Pending'} />
        </div>
        <div className='task-header-container'>
          <div className='task-header-title'>My Tasks</div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <AddButton />
          </div>
        </div>
        <div>
          {data
            ? data?.user?.tasks?.map((task: any) => {
                return <Task key={task.id} task={task} />;
              })
            : null}
          {loading && <div>Loading tasks...</div>}
          {error && <div>Issues loading your tasks</div>}
        </div>
      </div>
    </>
  );
}

export default TaskPage;
