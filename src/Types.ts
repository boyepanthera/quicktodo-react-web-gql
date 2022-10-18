import React from 'react';
export interface TaskInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface ReducerAction {
  payload: string;
  type: string;
}

export interface TaskComponentProps {
  task: TaskInterface;
  onUpdate: Function;
  onDelete: Function;
}

export interface ModalProps {
  children: JSX.Element;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateTaskProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface UpdateTaskProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task: TaskInterface;
}
