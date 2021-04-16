import { Action } from './../models/action.model';

export const ACTIONS: Action[] = [
    {
        text: 'Create Order',
        icon: 'add',
        value: 'add',
        url: '/add'
    },
    {
        text: 'List Orders',
        icon: 'view_list',
        value: 'list',
        url: '/list'
    }
];
