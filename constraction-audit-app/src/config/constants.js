import { getDynamicId } from "./utils"
export const POPUP_INIT_STATE = {
    showPopup: false,
    componentName: "",
    title:"DEFAULT",
    selectedConfig: {},
    selectedEntry:{}
}

export const DB = {
    entyrList:"entryList",
    configList:"configList"
}

export const entryType = {
    wages:"WAGES",
    materials:"MATERIALS"
}

export const INIT_CONFIG_STATE = {
    entryType: entryType.materials,
    wageName: "",
    shopName:"",
    natureOfWork: [],
    id:"",
    materialType:"",
    wageType:"",
    configId:getDynamicId()
    
}

export const entryStatus = {
    settled:"SETTLED",
    notSettled:"NOT_SETTLED"
}

export const INIT_ENTRY = {
    entryType:entryType.wages,
    wageType:"",
    materialType:"",
    wageName:"",
    shopName:"",
    natureOfWorks:[],
    selectedNatureOfWork:{},
    billAmount:"",
    paidAmountList:[],
    pendingAmount:0,
    status:"",
    discount:0,
    totalPaidAmt:0
}

export const INIT_PAID_OBJ = {
    id:getDynamicId(),
    paidDate: "",
    paidAmt:"",
    balanceAmt:"", 
    modeOfPay:""
}