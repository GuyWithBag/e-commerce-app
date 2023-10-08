
import { create } from 'zustand'
import { ProductTypeModel } from '../productTypeModel'

const store = (set: any) => ({
    itemTypes: <Map<string, ProductTypeModel>> new Map([
        
    ])
}) 

export const useProductTypesStore = create(store) 

