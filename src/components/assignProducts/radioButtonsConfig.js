const monthConfig=[
    {
        name: 'Month',
        key: 'radiobutton9',
        label: 'November',
        value:'november',
    },
    {
        name: 'paymentMethod',
        key: 'radiobutton10',
        label: 'December',
        value:'december',
    }

]
const radioButtonConfig = [
    {
        name: 'paymentMethod',
        key: 'radiobutton1',
        label: 'Direct Deposit',
        value:'directdeposit',


    },

    {
        name: 'paymentMethod',
        key: 'radiobutton2',
        label: 'Concur',
        value:'concur'



    },
    {
        name: 'paymentMethod',
        key: 'radiobutton3',
        label: 'Payroll File',
        value:'payrollfile'


    }
]

const DriverManagement=[
    {
        name: 'DriverManagement',
        key: 'radiobutton4',
        label: 'Self Service',


    },

    {
        name: 'DriverManagement',
        key: 'radiobutton5',
        label: 'HRIS Feed',


    },
    {
        name: 'DriverManagement',
        key: 'radiobutton2',
        label: 'Motus Api',


    },


]

const FixedPaymentSchedule=[
    {
        name: 'FPS',
        key: 'radiobutton6',
        label: 'Prior Month',


    },

    {
        name: 'FPS',
        key: 'radiobutton7',
        label: 'Current Month',


    },

]

const paymentFrequency=[
    {
        name:"paymentFrequency",
        key:"radiobutton8",
        label:"monthly  "
    }
]



export {
    monthConfig,
    radioButtonConfig,
    paymentFrequency,
    FixedPaymentSchedule,
    DriverManagement
}