import './create-task.css';
import { CreateTaskProps } from '../Types';
function CreateTask({ setIsOpen }: CreateTaskProps): JSX.Element {
  return (
    <div className='create-task'>
      Hello here is a demo modal{' '}
      <span onClick={() => setIsOpen((open) => !open)}>Close X</span>
    </div>
  );
}

export default CreateTask;
