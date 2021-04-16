import { Order } from './../models/order.model';

export const ORDERS: Order[] = [
    {
        id: '1',
        category: 'tmp1',
        description: 'tmp1',
        contact: 'tmp1@gmail.com',
        state: 'Cancelled',
        priority: 'Top Priority',
        items: ['Chari1', 'Skateboard1'],
        parties: ['Ltd.1', 'OTP1'],
        notes: ['Be careful1', 'Don\'t touch it1'],
        orderDate: '2021-04-07',
        expectedDate: '2021-04-21',
        cancellationDate: '2021-04-09',
        cancellationReason: 'Just Because'
    },
    {
        id: '2',
        category: 'tmp2',
        description: 'tmp2',
        contact: 'tmp2@gmail.com',
        state: 'Acnkowledged',
        priority: 'Top Priority',
        items: ['Chari2', 'Skateboard2'],
        parties: ['Ltd.2', 'OTP2'],
        notes: ['Be careful2', 'Don\'t touch it2'],
        orderDate: '2021-04-07',
        expectedDate: '2021-04-21',
        cancellationDate: '',
        cancellationReason: ''
    },
    {
        id: '3',
        category: 'tmp3',
        description: 'tmp3',
        contact: 'tmp3@gmail.com',
        state: 'Completed',
        priority: 'Top Priority',
        items: ['Chari3', 'Skateboard3'],
        parties: ['Ltd.3', 'OTP3'],
        notes: ['Be careful3', 'Don\'t touch it3'],
        orderDate: '2021-04-07',
        expectedDate: '2021-04-21',
        cancellationDate: '',
        cancellationReason: ''
    }
];
