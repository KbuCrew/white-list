import React, { Component } from 'react'
import { Table, Input, Button } from 'antd';

const dataSource = [
    {
        Malzeme: <Input placeholder="Basic usage" />,
        Adet: <Input placeholder="Basic usage" />,
        Açıklama: <Input placeholder="Basic usage" />,
    },
    {
        Malzeme: '',
        Adet: '',
        Açıklama: <div>
                    <Button type="primary">Sil</Button>
                    <Button type="primary">Ekle</Button>
                 </div>,
    },
];

const columns = [
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


export default class Menu extends Component {
    render() {
        return (
            <Table dataSource={dataSource} columns={columns}>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <Input />
                        </td>
                        <td>
                            <Input />
                        </td>
                        <td>
                            <Input />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}