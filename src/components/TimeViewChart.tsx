import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';

interface Data {
    name: string;
    Dados_Reais?: number;
    Previsao?: number;
}

export interface apiData {
    ano_exercicio: string,
    mes_exercicio: string,
    vlr: number,
    flag: string
};

interface TimeViewChartProps {
    apiData: apiData[];
}
function TimeViewChart({ apiData }: TimeViewChartProps) {
    let data: Data[] = [];

    const createData = () => {
        data = [];
        for (let i = 0; i < apiData.length; i++) {

            let aux: Data = {
                name: '',
                Dados_Reais: 0,
                Previsao: 0
            };

            if (apiData[i].flag === "train") {
                aux = {
                    name: apiData[i].ano_exercicio.concat("/").concat(apiData[i].mes_exercicio),
                    Dados_Reais: +apiData[i].vlr.toFixed(2),
                }
            } else {
                aux = {
                    name: apiData[i].ano_exercicio.concat("/").concat(apiData[i].mes_exercicio),
                    Previsao: +apiData[i].vlr.toFixed(2),
                }
            }
            data.push(aux)
        }
    };

    const formatter = (value: any) => `R$${value / 1000000000}B`;

    createData();

    return (<ResponsiveContainer width="95%" height="95%">
        <LineChart
            width={400}
            height={100}
            data={data}
            margin={{
                top: 50,
                right: 30,
                left: 50,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatter} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Dados_Reais" stroke="#1A5276" />
            <Line type="monotone" dataKey="Previsao" stroke="#27AE60" />
        </LineChart>
    </ResponsiveContainer >);
}

export default TimeViewChart;
