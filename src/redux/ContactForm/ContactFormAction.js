import { createAction, nanoid } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactActions = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
