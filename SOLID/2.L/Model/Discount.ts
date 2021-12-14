export interface Discount {
    readonly _value: number;
    // readonly _type: discountType;

    apply(price : number) : number;
    showCalculation(price : number) : string;
}