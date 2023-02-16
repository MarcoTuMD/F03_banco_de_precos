import React from 'react';
import { FunctionComponent } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart, Dot } from 'recharts';

interface Data {
    name: string;
    Despesas_do_municipio: number;
    Media_municipios_similares: number;
    outlier: boolean;
}

export interface apiDataCity {
    ano_exercicio: string;
    mes_exercicio: string;
    cod_municipio: string;
    sum_target: number;
    avg_sum_similar: number;
    std_sum_similar: number;
    outlier: boolean;
};

interface TimeViewChartProps {
    apiData: apiDataCity[];
}

const CustomizedDot: FunctionComponent<any> = (props: any) => {
    const { cx, cy, stroke, payload, fill, r, strokeWidth } = props;

    if (payload.outlier) {
        return (
            <Dot cx={cx} cy={cy} r={r} stroke="red" fill={fill} strokeWidth={strokeWidth}></Dot>
        );
    }

    return (
        <Dot cx={cx} cy={cy} r={r} stroke={stroke} fill={fill} strokeWidth={strokeWidth}></Dot>
    );
};
function CityExpensesChart({ apiData }: TimeViewChartProps) {
    let data: Data[] = [];

    const createData = () => {
        data = [];
        for (let i = 0; i < apiData.length; i++) {

            let aux: Data = {
                name: apiData[i].ano_exercicio.concat("/").concat(apiData[i].mes_exercicio),
                Despesas_do_municipio: +apiData[i].sum_target.toFixed(2),
                Media_municipios_similares: +apiData[i].avg_sum_similar.toFixed(2),
                outlier: apiData[i].outlier,
            };

            data.push(aux)
        }
    };
    const formatter = (value: any) => `R$${value}`;
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
            <Line type="monotone" dataKey="Despesas_do_municipio" stroke="#1A5276" dot={<CustomizedDot />} />
            <Line type="monotone" dataKey="Media_municipios_similares" stroke="#27AE60" dot={<CustomizedDot />} />
        </LineChart>
    </ResponsiveContainer>);
}

export default CityExpensesChart;
