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
        key: 'radiobutton1',
        label: 'Self Service',


    },

    {
        name: 'DriverManagement',
        key: 'radiobutton2',
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
        key: 'radiobutton1',
        label: 'Prior Month',


    },

    {
        name: 'FPS',
        key: 'radiobutton2',
        label: 'Current Month',


    },

]

const paymentFrequency=[
    {
        name:"paymentFrequency",
        key:"radiobutton",
        label:"monthly  "
    }
]



export {
    radioButtonConfig,
    paymentFrequency,
    FixedPaymentSchedule,
    DriverManagement
}