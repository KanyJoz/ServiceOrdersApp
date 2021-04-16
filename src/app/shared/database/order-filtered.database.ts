import { Order } from './../models/order.model';

export const ORDERS_FILTERED: Order[] = [
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
