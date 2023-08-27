import { getDynamicId } from "./utils"
export const POPUP_INIT_STATE = {
    showPopup: false,
    componentName: "",
    title:"DEFAULT",
    selectedConfig: {},
    selectedEntry:{}
}

export const DB = {
    entyrList:"entries",
    configList:"configs"
    // entyrList:"liveConfig",
    // configList:"liveEntryList"
}

export const entryType = {
    vendors:"vendorS",
    materials:"MATERIALS"
}

export const INIT_CONFIG_STATE = {
    entryType: entryType.materials,
    vendorName:"",
    natureOfWork: [],
    id:"",
    materialType:"",
    vendorType:"",
    configId:getDynamicId(),
    vendorNames:[''],
    vendorNames:[''],
    materials:['']
    
    
}

export const entryStatus = {
    settled:"SETTLED",
    notSettled:"NOT_SETTLED"
}

export const INIT_ENTRY = {
    entryType:entryType.vendors,
    vendorType:"",
    materialType:"",
    vendorName:"",
    shopList:"",
    vendorList:"",
    natureOfWorks:[],
    selectedNatureOfWork:{},
    billAmount:0,
    paidAmountList:[],
    pendingAmount:0,
    status:"",
    discount:0,
    totalPaidAmt:0,
    workDate: new Date(),
    material:""
}

export const INIT_PAID_OBJ = {
    id:getDynamicId(),
    paidDate: "",
    paidAmt:"",
    balanceAmt:"", 
    modeOfPay:""
}
export const INIT_TOTAL_OBJ = {
    billAmt:0,
    pendingAmt:0,
    paidAmt:0
}