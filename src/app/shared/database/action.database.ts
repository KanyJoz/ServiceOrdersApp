import { Action } from './../models/action.model';

export const ACTIONS: Action[] = [
    {
        text: 'Create Order',
        icon: 'add',
        value: 'add',
        url: '/add'
    },
    {
        text: 'List All Orders',
        icon: 'view_list',
        value: 'list-all',
        url: '/list-all'
    },
    {
        text: 'List Completed Orders',
        icon: 'done',
        value: 'list-completed',
        url: '/list-completed'
    },
    {
        text: 'List Cancelled Orders',
        icon: 'close',
        value: 'list-cancelled',
        url: '/list-cancelled'
    }
];
