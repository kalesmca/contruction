import { getDynamicId } from "./utils";

export const NATURE_OF_WORKS = [
    {
        id:"basemate-001",
        name:"THONDA"
    },
    {
        id:"basemate-002",
        name:"FILL_PANNA"
    },
     {
        id:"basemate-003",
        name:"KALVARI"
    },
     {
        id:"new-current-connection-001",
        name:"NEW_CURRENT_CONNECTION"
    },
     {
        id:"borewell-001",
        name:"BOREWELL_TRACTER"
    },
     {
        id:"borewell-002",
        name:"BOREWELL_MOTOR_CONNECTION"
    }
]
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
    material:"",
    materialAmtList:[],
    wagesAmtList:[]
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

export const INIT_MATERIAL_AMT_OBJ = {
    name:"",
    qty:0,
    price:0,
    amount:0
}