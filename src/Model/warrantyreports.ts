import { ProductModel } from './product-model';

export class  WarrantyreportsModel {
    id: number;
    serialNo:number;
    deliveryDate: string;
    customer: string;
    nsn: string;
    value: number;
    warrantyTill: string;
    partNo: number;
    location: string;
    designation: string;
    type: string;
    warrantyPeriod: number;

    productId: number;
    product: ProductModel[];
}
