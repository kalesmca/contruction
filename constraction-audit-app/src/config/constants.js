import {formatAppDate} from './utils';
export const adminList = [{mobile:8682890117, auth:"SUPER_ADMIN_ACCESS"},{mobile:9994374553, auth:"ADMIN_ACCESS"},{mobile:9944419808, auth:"ADMIN_ACCESS"}]
export const DB = {
    players : "preDemo"
}

export const AUTH_STATUS = {
    "PENDING": "PENDING",
    "NOT_REGISTERED":"NOT_REGISTERED",
    "REGISTERED":"REGISTERED",
    "ADMIN_ACCESS":"ADMIN_ACCESS",
    "SUPER_ADMIN_ACCESS":"SUPER_ADMIN_ACCESS"
} 


export const EVENTS = {
    U_6_B:[{
        eventName: "50M",
        eventId:"U_6_B_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "BALL_THROW",
        eventId:"U_6_B_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "30M_Hurdles",
        eventId:"U_6_B_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_6_G:[{
        eventName: "50M",
        eventId:"U_6_G_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "BALL_THROW",
        eventId:"U_6_G_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "30M_Hurdles",
        eventId:"U_6_G_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_8_B:[{
        eventName: "50M",
        eventId:"U_8_B_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "80M",
        eventId:"U_8_B_EVENTS_2",
        selection: false,
        disable:false
    },{
        eventName: "BALL_THROW",
        eventId:"U_8_B_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_8_G:[{
        eventName: "50M",
        eventId:"U_8_G_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "80M",
        eventId:"U_8_G_EVENTS_2",
        selection: false,
        disable:false
    },{
        eventName: "BALL_THROW",
        eventId:"U_8_G_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_10_B:[{
        eventName: "50M",
        eventId:"U_10_B_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "80M",
        eventId:"U_10_B_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "SHUTTLE_RUN",
        eventId:"U_10_B_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_10_G:[{
        eventName: "50M",
        eventId:"U_10_G_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "80M",
        eventId:"U_10_G_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "SHUTTLE_RUN",
        eventId:"U_10_G_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_12_B:[{
        eventName: "80M",
        eventId:"U_12_B_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "400M",
        eventId:"U_12_B_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "LONG_JUMP",
        eventId:"U_12_B_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_12_G:[{
        eventName: "80M",
        eventId:"U_12_G_EVENTS_1",
        selection: false,
        disable:false
    },
    {
        eventName: "400M",
        eventId:"U_12_G_EVENTS_2",
        selection: false,
        disable:false
    },
    {
        eventName: "LONG_JUMP",
        eventId:"U_12_G_EVENTS_3",
        selection: false,
        disable:false
    }],
    U_14_B:[
        {
            eventName: "100M",
            eventId:"U_14_B_EVENTS_1",
            selection: false,
            disable:false
        },
        {
            eventName: "400M",
            eventId:"U_14_B_EVENTS_2",
            selection: false,
            disable:false
        },
        {
            eventName: "600M",
            eventId:"U_14_B_EVENTS_3",
            selection: false,
            disable:false
        },
        {
            eventName: "LONG_JUMP",
            eventId:"U_14_B_EVENTS_4",
            selection: false,
            disable:false
        },
        {
            eventName: "DISCUSS_THROW",
            eventId:"U_14_B_EVENTS_5",
            selection: false,
            disable:false
        },
        {
            eventName: "SHORT_PUT",
            eventId:"U_14_B_EVENTS_6",
            selection: false,
            disable:false
        }
    ],
    U_14_G:[
        {
            eventName: "400M",
            eventId:"U_14_G_EVENTS_1",
            selection: false,
            disable:false
        },
        {
            eventName: "100M",
            eventId:"U_14_G_EVENTS_2",
            selection: false,
            disable:false
        },
        {
            eventName: "600M",
            eventId:"U_14_B_EVENTS_3",
            selection: false,
            disable:false
        },
        {
            eventName: "DISCUSS_THROW",
            eventId:"U_14_G_EVENTS_4",
            selection: false,
            disable:false
        },
        {
            eventName: "LONG_JUMP",
            eventId:"U_14_G_EVENTS_5",
            selection: false,
            disable:false
        },
        
        {
            eventName: "SHORT_PUT",
            eventId:"U_14_G_EVENTS_6",
            selection: false,
            disable:false
        }
    ],
    U_17_B:[
        {
            eventName: "200M",
            eventId:"U_17_B_EVENTS_1",
            selection: false,
            disable:false
        },
        {
            eventName: "400M",
            eventId:"U_17_B_EVENTS_2",
            selection: false,
            disable:false
        },
        {
            eventName: "800M",
            eventId:"U_17_B_EVENTS_3",
            selection: false,
            disable:false
        },
        {
            eventName: "1500M",
            eventId:"U_17_B_EVENTS_4",
            selection: false,
            disable:false
        },
        {
            eventName: "DISCUSS_THROW",
            eventId:"U_17_B_EVENTS_5",
            selection: false,
            disable:false
        },
        {
            eventName: "SHORT_PUT",
            eventId:"U_17_B_EVENTS_6",
            selection: false,
            disable:false
        },{
            eventName: "JAWLIN_THROW",
            eventId:"U_17_B_EVENTS_7",
            selection: false,
            disable:false
        }
    ],
    U_17_G:[
        {
            eventName: "200M",
            eventId:"U_17_G_EVENTS_1",
            selection: false,
            disable:false
        },
        {
            eventName: "400M",
            eventId:"U_17_G_EVENTS_2",
            selection: false,
            disable:false
        },
        {
            eventName: "800M",
            eventId:"U_17_G_EVENTS_3",
            selection: false,
            disable:false
        },
        {
            eventName: "1500M",
            eventId:"U_17_G_EVENTS_4",
            selection: false,
            disable:false
        },
        {
            eventName: "LONG_JUMP",
            eventId:"U_17_G_EVENTS_5",
            selection: false,
            disable:false
        },
        {
            eventName: "SHORT_PUT",
            eventId:"U_17_G_EVENTS_6",
            selection: false,
            disable:false
        },{
            eventName: "DISCUSS_THROW",
            eventId:"U_17_G_EVENTS_7",
            selection: false,
            disable:false
        }]
}

export const U_14_EVENTS = ["100M, 200M, 600M", "SHORT_PUT", "LONG_JUMP", "DISCUSS_THROW"]
export const U_17_EVENTS = ["100M, 400M, 1500M", "SHORT_PUT", "LONG_JUMP", "DISCUSS_THROW", "JAWLIN_THROW"]
export const U_19_EVENTS = ["100M, 200M, 1500M", "SHORT_PUT", "LONG_JUMP"]

export const U_6_TIME = 1514764800000;  //01/01/2018  
export const U_8_TIME = 1451606400000;  //01/01/20016  
export const U_10_TIME = 1388534400000;  //01/01/2014 
export const U_12_TIME = 1325376000000;  //01/01/2012  
export const U_14_TIME = 1262304000000;  //01/01/2010  
export const U_17_TIME = 1167696000000;  //01/01/2007  
export const U_19_TIME = 1072915200000;  //01/01/2004  

export const playerCategories = ["U_12", "U_14", "U_17", "U_19"]

export const U_12 = "U_12";
export const U_14 = "U_14";
export const U_17 = "U_17";
export const U_19 = "U_19";
export const PAYMENT_STATUS = ["PAYMENT_VERIFIED", "PAYMENT_NOT_VERIFIED", "NOT_PAID"]
export const PLAYER_STATUS = ["ACTIVE", "IN_ACTIVE"]

export const initPlayerData = {
    name:"",
    adharNumber:"",
    clubName: "",
    dob:"",
    playerCategory:"",
    events:[],
    gender:"MALE",
    upi:"",
    mobile:"",
    selectedEvents: [],
    paymentStatus: PAYMENT_STATUS[1],
    status: PLAYER_STATUS[0],
    updatedByList: [],
    chestNumber: ""
}

export const initError = {
    name:{touched:false,err: false},
    adharNumber: {touched:false,err: false},
    dob:{touched:false,err: false},
    upi:{touched:false,err: false},
    mobile:{touched:false,err: false},
}