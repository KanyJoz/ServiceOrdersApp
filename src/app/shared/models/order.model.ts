export interface Order {
    id: string;
    category: string;
    description: string;
    contact: string;
    state: string;
    priority: string;

    items: string[];
    parties: string[];
    notes: string[];

    orderDate: string;
    expectedDate: string;

    cancellationDate: string;
    cancellationReason: string;
}
