import { Action } from './../models/action.model';

export const ACTIONS: Action[] = [
    {
        text: 'create order',
        icon: 'add',
        value: 'add',
        url: '/add'
    },
    {
        text: 'list all orders',
        icon: 'view_list',
        value: 'list-all',
        url: '/list-all'
    },
    {
        text: 'list completed orders',
        icon: 'done',
        value: 'list-completed',
        url: '/list-completed'
    },
    {
        text: 'list cancelled orders',
        icon: 'close',
        value: 'list-cancelled',
        url: '/list-cancelled'
    }
];
