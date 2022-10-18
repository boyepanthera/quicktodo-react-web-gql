import { useState } from 'react';
import SummaryCard from '../components/SummaryCard';
import AddButton from '../components/AddButton';
import Task from '../components/Task';
import Modal from '../components/Modal';
import CreateTask from '../components/CreateTask';
import UpdateTask from '../components/UpdateTask';
import DeleteTask from '../components/DeleteTask';
import '../TaskPage.css';
import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../queries/taskQuery';
import { TaskInterface } from '../Types';

function TaskPage() {
  const { loading, error, data } = useQuery(GET_TASKS, {
    variables: {
      userId: '633c4ddc2e1104f3a4c8c805',
    },
  });

  const [updateTask, setUpdateTask] = useState({
    id: '',
    title: '',
    completed: false,
  });
  const [deleteTask, setDeleteTask] = useState({
    id: '',
    title: '',
    completed: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}>
          <CreateTask setIsOpen={setIsOpen} />
        </Modal>
      ) : null}
      {isUpdateOpen ? (
        <Modal setIsOpen={setIsUpdateOpen}>
          <UpdateTask task={updateTask} setIsOpen={setIsUpdateOpen} />
        </Modal>
      ) : null}
      {isDeleteOpen ? (
        <Modal setIsOpen={setIsDeleteOpen}>
          <DeleteTask task={deleteTask} setIsOpen={setIsDeleteOpen} />
        </Modal>
      ) : null}
      <div className='container'>
        <div>
          <input className='search' type={'search'} placeholder='search task' />
        </div>
        <div className='summary-container'>
          <SummaryCard
            count={
              data?.getTasks.filter((task: TaskInterface) => {
                return task.completed;
              }).length
            }
            title={'Completed'}
          />
          <SummaryCard
            count={
              data?.getTasks.filter((task: TaskInterface) => {
                return !task.completed;
              }).length
            }
            title={'Pending'}
          />
        </div>
        <div className='task-header-container'>
          <div className='task-header-title'>My Tasks</div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <AddButton />
          </div>
        </div>
        <div>
          {data
            ? data.getTasks?.map((task: any) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onUpdate={() => {
                      setUpdateTask(task);
                      setIsUpdateOpen(true);
                    }}
                    onDelete={() => {
                      setDeleteTask(task);
                      setIsDeleteOpen(true);
                    }}
                  />
                );
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
