import { getDynamicId } from "./utils";

export const POPUP_INIT_STATE = {
    showPopup: false,
    componentName: "",
    title:"DEFAULT",
    selectedConfig: {},
    selectedEntry:{}
}

export const DB = {
    entyrList:"liveEntryList",
    configList:"liveConfig"
    // entyrList:"liveConfig",
    // configList:"liveEntryList"
}

export const entryType = {
    vendors:"vendorS",
    materials:"MATERIALS",
    others:"OTHERS"
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
    date: new Date(),
    material:"",
    materialAmtList:[],
    wagesAmtList:[],
    comment:"",
    isSelected:false
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
    amount:0,
    charges:0,
    comment:""
}

export const PRESELECT_MASON_LIST = [
    {
        name:"Kothanaar",
        qty:1,
        price:800,
        amount:800,
        charges:0,
        comment:""
    },
    {
        name:"PeriAal",
        qty:1,
        price:700,
        amount:700,
        charges:0,
        comment:""
    },
    {
        name:"SithaAl",
        qty:1,
        price:450,
        amount:450,
        charges:0,
        comment:""
    }
]

export const INIT_DATE_RANGE=[
{
    startDate: new Date(),
    endDate: null,
    key: 'selection'
}
]

// New Code=====================================================================================================

export const NATURE_OF_WORKS = [
    {
        id:"basemate-001",
        name:"THONDA"
    },
    {
        id:"basemate-002",
        name:"BASE_FILL_PANNA"
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
    },
    {
        id:"septictank-001",
        name:"SEPTIC_TANK"
    },
    {
        id:"JCP_WORK",
        name:"JCP_WORK"
    },
    {
        id:"Sengal-katty",
        name:"SENGAL_KATTU"
    },
    {
        id:"Belt-Congrete",
        name:"BELT_CONGRETE_BEEM"
    }
]