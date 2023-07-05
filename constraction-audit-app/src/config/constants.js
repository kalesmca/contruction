import { getDynamicId } from "./utils"
export const POPUP_INIT_STATE = {
    showPopup: false,
    componentName: "",
    title:"DEFAULT"
}

export const DB = {
    entyrList:"ENTRY_LIST",
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