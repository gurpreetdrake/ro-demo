import { ProductModel } from './productmodel';

export class  WarrantyreportsModel {
    id: number;
    serialNo:number;
    deliveryDate: string;
    customer: string;
    warrantyTill: string;
    location: string;
    product: ProductModel;
}
