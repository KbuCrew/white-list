import React, { Component } from 'react'
import { Table, Checkbox  } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const dataSource = [
    {
        key: <Checkbox onChange={onChange}/>,
        Malzeme: 'Ekmek',
        Adet: 2,
        Açıklama: 'Çiftli',
    },
    {
        key: <Checkbox onChange={onChange}/>,
        Malzeme: 'Yumurta',
        Adet: 1,
        Açıklama: '30\'lu',
    },
    {
        key: <Checkbox onChange={onChange}/>,
        Malzeme: 'Süt',
        Adet: 3,
        Açıklama: '1 lt yarım yağlı',
    },
];

const columns = [
    {
        title: 'Sıra',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Malzeme',
        dataIndex: 'Malzeme',
        key: 'Malzeme',
    },
    {
        title: 'Adet',
        dataIndex: 'Adet',
        key: 'Adet',
    },
    {
        title: 'Açıklama',
        dataIndex: 'Açıklama',
        key: 'Açıklama',
    },
];

export default class Tablelist extends Component {
    render() {
        return (
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}