const checkboxesConfig = [
    {
        name: 'fixedRate',
        key: 'checkBox1',
        label: 'Fixed and Variable Rate',
        component:"ExtraOptions",

    },

    {
        name: 'centMile',
        key: 'checkBox2',
        label: 'Cent Per Mile',
        component:"ExtraOptions"

    },
    {
        name: 'techOnly',
        key: 'checkBox3',
        label: 'Technology Only',
        component:"ExtraOptions"

    }
]
const extraOptionsCheckboxConfig = [
    {
        name: 'InsuranceDeclaration',
        key: 'checkBox4',
        label: 'Insurance Declaration'

    },
    {
        name: 'BVIF',
        key: 'checkBox5',
        label: 'Vehicle Information(BVIF)'
    },
    {
        name: 'MVR',
        key: 'checkBox6',
        label: 'Motor Vehicle Records(MVR)'
    },

]
export {
    checkboxesConfig,
    extraOptionsCheckboxConfig
}

