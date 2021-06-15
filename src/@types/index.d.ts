type Bids = {
    amount: number;
    channel: string;
    createdAt: string;
    dealership: string;
}

type Offer = {
    bids: [Bids];
    id: string;
    imageUrl: string;
    km: number;
    make: string;
    model: string;
    remainingTime: number;
    version: string;
    year: number;
}