
import { create } from 'zustand'
import { ShopModel } from '../shopModel'

const store = (set: any) => ({
    shops: <Array<ShopModel>>[
        
    ]
}) 

export const useShopStore = create(store)