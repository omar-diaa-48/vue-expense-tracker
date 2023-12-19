export class TransactionModel {
    constructor(id: number, text: string, amount: number) {
        this.id = id;
        this.text = text;
        this.amount = amount
    }

    id: number;
    text: string;
    amount: number;
}