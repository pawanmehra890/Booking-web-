

import { GetHotelsReq,GetHotelsSuccess,GetHotelsFail ,fGetHotelsReq ,fGetHotelsSuccess,fGetHotelsFail,
    cGetHotelsReq ,cGetHotelsSuccess,cGetHotelsFail,GetHotelByidReq,GetHotelByidSuccess,GetHotelByidFails,GetRommslByidReq,GetRommslByidSuccess,GetRommslByidFails

} from "../constant/constant";
let initialState={
    Hotels:[],
    FHotels:[],
    cHotels:[],
    HotelId:[]
}


export const HotelReducer=(state=initialState,action)=>{
   
    switch(action.type){
        case GetHotelsReq:
            return{
                ...state
            }

            case GetHotelsSuccess:
                return{
                    ...state,
                    Hotels:action.payload
                }
                case GetHotelsFail:
                    return{
                        ...state
                    }


                    case fGetHotelsReq:
                        return{
                            ...state
                        }
            
                        case fGetHotelsSuccess:
                            return{
                                ...state,
                                FHotels:action.payload
                            }
                            case fGetHotelsFail:
                                return{
                                    ...state
                                }


                                case cGetHotelsReq:
                        return{
                            ...state
                        }
            
                        case cGetHotelsSuccess:
                            return{
                                ...state,
                                cHotels:action.payload?.list
                            }
                            case cGetHotelsFail:
                                return{
                                    ...state
                                }


                                case GetHotelByidReq:
                        return{
                            ...state
                        }
            
                        case GetHotelByidSuccess:
                            return{
                                ...state,
                                HotelId:action.payload?.Hotels
                            }
                            case GetHotelByidFails:
                                return{
                                    ...state
                                }

                                case GetRommslByidReq:
                        return{
                            ...state
                        }
            
                        case GetRommslByidSuccess:
                            return{
                                ...state,
                                HotelId:action.payload
                            }
                            case GetRommslByidFails:
                                return{
                                    ...state
                                }
    }
    return state
}