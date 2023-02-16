import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { entities } from "../constants/entities";
import { functions } from "../constants/functions";
import { natures } from "../constants/natures";
import { organs } from "../constants/organs";
import { sources } from "../constants/sources";
import { subFunctions } from "../constants/subFunctions";

export interface apiDataTable {
    ano_exercicio: string,
    mes_exercicio: string,
    qtd_credores: number,
    entidade?: string,
    orgao?: string,
    funcao?: string,
    sub_funcao?: string,
    natureza?: string,
    fonte_do_recurso?: string,
};

interface TimeViewChartProps {
    apiData: apiDataTable[];
}
function LimitedSupplierTable({ apiData }: TimeViewChartProps) {
    return (
        <>
            {apiData.length > 0 && <TableContainer sx={{ maxHeight: 500 }} component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="center">Ano</TableCell>
                            <TableCell align="center">Mes</TableCell>
                            <TableCell align="center">Qtd. Credores</TableCell>
                            {apiData[0].entidade && <TableCell align="center">Município</TableCell>}
                            {apiData[0].orgao && <TableCell align="center">Orgão</TableCell>}
                            {apiData[0].funcao && <TableCell align="center">Função</TableCell>}
                            {apiData[0].sub_funcao && <TableCell align="center">Sub-Função</TableCell>}
                            {apiData[0].natureza && <TableCell align="center">Natureza</TableCell>}
                            {apiData[0].fonte_do_recurso && <TableCell align="center">Fonte</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map((row, index) => (
                            <TableRow
                                key={index}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="center">{row.ano_exercicio}</TableCell>
                                <TableCell align="center">{row.mes_exercicio}</TableCell>
                                <TableCell align="center"> {row.qtd_credores}</TableCell>
                                {row.entidade && <TableCell align="center">{entities.find(function (entity) { return entity.value === Number(row.entidade); })?.label}</TableCell>}
                                {row.orgao && <TableCell align="center">{organs.find(function (organ) { return organ.value === Number(row.orgao); })?.label}</TableCell>}
                                {row.funcao && <TableCell align="center">{functions.find(function (func) { return func.value === Number(row.funcao); })?.label}</TableCell>}
                                {row.sub_funcao && <TableCell align="center">{subFunctions.find(function (subfunc) { return subfunc.value === Number(row.sub_funcao); })?.label}</TableCell>}
                                {row.natureza && <TableCell align="center">{natures.find(function (nature) { return nature.value === row.natureza; })?.label}</TableCell>}
                                {row.fonte_do_recurso && <TableCell align="center">{sources.find(function (source) { return source.value === Number(row.fonte_do_recurso); })?.label}</TableCell>}
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}

        </>);
}
export default LimitedSupplierTable;
