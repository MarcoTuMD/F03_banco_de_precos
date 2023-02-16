import { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, TextField } from '@mui/material';
import TimeViewChart, { apiDataTime } from '../components/TimeViewChart';
import CityExpensesChart, { apiDataCity } from '../components/CityExpensesChart';
import LimitedSupplierTable, { apiDataTable } from '../components/LimitedSupplierTable';
import React from 'react';
import { post } from '../services/apiRequest';
import { entities } from '../constants/entities';
import { organs } from '../constants/organs';
import { functions } from '../constants/functions';
import { subFunctions } from '../constants/subFunctions';
import { natures } from '../constants/natures';
import { sources } from '../constants/sources';
import NavBar from '../components/NavBar';
import { table } from 'console';




function ExpenseMonitoring() {

    const [entity, setEntity] = useState("");
    const [organ, setOrgan] = useState("");
    const [role, setRole] = useState("");
    const [subRole, setSubRole] = useState("");
    const [nature, setNature] = useState("");
    const [font, setFont] = useState("");
    const [qtdCreditors, setQtdCreditors] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [monitoringOption, setMonitoringOption] = useState("");
    const [showChart, setShowChart] = useState(false);

    const [timeViewData, setTimeViewData] = useState<apiDataTime[]>([{
        ano_exercicio: "",
        mes_exercicio: "",
        vlr: 0,
        flag: ""
    }]);

    const [cityExpensesData, setCityExpensesData] = useState<apiDataCity[]>([{
        ano_exercicio: "",
        mes_exercicio: "",
        cod_municipio: "",
        sum_target: 0,
        avg_sum_similar: 0,
        std_sum_similar: 0,
        outlier: false,
    }]);

    const [tableData, setTableData] = useState<apiDataTable[]>([]);

    const handleChangeEntity = (event: SelectChangeEvent) => {
        setEntity(event.target.value as string);
    }

    const handleChangeOrgan = (event: SelectChangeEvent) => {
        setOrgan(event.target.value as string);
    }

    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    }

    const handleChangeSubRole = (event: SelectChangeEvent) => {
        setSubRole(event.target.value as string);
    }

    const handleChangeNature = (event: SelectChangeEvent) => {
        setNature(event.target.value as string);
    }

    const handleChangeFont = (event: SelectChangeEvent) => {
        setFont(event.target.value as string);
    }

    const handleChangeYear = (event: SelectChangeEvent) => {
        setYear(event.target.value);
    }

    const handleChangeMonth = (event: SelectChangeEvent) => {
        setMonth(event.target.value);
    }

    const handleChangeQtdCreditors = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setQtdCreditors(event.target.value);
    }



    const renderChart = () => {
        if (monitoringOption === "1") {
            return (<TimeViewChart apiData={timeViewData} />);
        } else if (monitoringOption === "2") {
            return (
                <CityExpensesChart apiData={cityExpensesData} />
            );
        } else if (monitoringOption === "3") {
            return (
                <>
                    <LimitedSupplierTable apiData={tableData} />

                </>);
        } else {
            return null;
        }
    };

    const renderFilters = () => {
        return (
            <Box>
                <Typography variant="body1" color="initial" sx={{ fontWeight: 'bold', m: 1 }}>Filtros: </Typography>
                <FormControl fullWidth size="small">
                    <InputLabel id="entidade-option">Entidade</InputLabel>
                    <Select
                        labelId="entidade-option"
                        id="entidade-option"
                        value={entity}
                        label="Entidade"
                        onChange={handleChangeEntity}
                    >
                        {entities.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                    <InputLabel id="orgao-option">Orgão</InputLabel>
                    <Select
                        labelId="orgao-option"
                        id="orgao-option"
                        value={organ}
                        label="Orgao"
                        onChange={handleChangeOrgan}
                    >
                        {organs.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Divider light />
                <Divider sx={{ m: 1, bgcolor: "blue" }} flexItem />
                <Typography variant="body1" color="initial" sx={{ fontWeight: 'bold', m: 1 }}>Dotação orçamentária </Typography>
                <FormControl fullWidth size="small">
                    <InputLabel id="funcao-option">Função</InputLabel>
                    <Select
                        labelId="funcao-option"
                        id="funcao-option"
                        value={role}
                        label="Funcao"
                        onChange={handleChangeRole}
                    >
                        {functions.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                    <InputLabel id="subFuncao-option">SubFunção</InputLabel>
                    <Select
                        labelId="subFuncao-option"
                        id="subFuncao-option"
                        value={subRole}
                        label="SubFuncao"
                        onChange={handleChangeSubRole}
                    >
                        {subFunctions.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                    <InputLabel id="natureza-option">Natureza</InputLabel>
                    <Select
                        labelId="natureza-option"
                        id="natureza-option"
                        value={nature}
                        label="Natureza"
                        onChange={handleChangeNature}
                    >
                        {natures.map(({ value, label }, index) => (
                            <MenuItem key={index} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                    <InputLabel id="fonte-option">Fonte de recurso</InputLabel>
                    <Select
                        labelId="fonte-option"
                        id="fonte-option"
                        value={font}
                        label="Fonte de recurso"
                        onChange={handleChangeFont}
                    >
                        {sources.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {monitoringOption === "3" &&
                    <>
                        <Divider sx={{ m: 1, bgcolor: "blue" }} flexItem />
                        <FormControl fullWidth size="small">
                            <TextField id="outlined-basic" label="Qtd. de credores" variant="outlined" size="small" type="number" value={qtdCreditors} onChange={handleChangeQtdCreditors} />
                        </FormControl>
                        <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                            <InputLabel id="year-option">Ano</InputLabel>
                            <Select
                                labelId="year-option"
                                id="year-option"
                                value={year}
                                label="Year"
                                onChange={handleChangeYear}
                            >
                                <MenuItem key={2014} value={2014}>2014</MenuItem>
                                <MenuItem key={2015} value={2015}>2015</MenuItem>
                                <MenuItem key={2016} value={2016}>2016</MenuItem>
                                <MenuItem key={2017} value={2017}>2017</MenuItem>
                                <MenuItem key={2018} value={2018}>2018</MenuItem>
                                <MenuItem key={2019} value={2019}>2019</MenuItem>
                                <MenuItem key={2020} value={2020}>2020</MenuItem>
                                <MenuItem key={2021} value={2021}>2021</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                            <InputLabel id="month-option">Mês</InputLabel>
                            <Select
                                labelId="month-option"
                                id="month-option"
                                value={month}
                                label="Mês"
                                onChange={handleChangeMonth}
                            >

                                <MenuItem key={1} value={"01"}>Janeiro</MenuItem>
                                <MenuItem key={2} value={"02"}>Fevereiro</MenuItem>
                                <MenuItem key={3} value={"03"}>Março</MenuItem>
                                <MenuItem key={4} value={"04"}>Abril</MenuItem>
                                <MenuItem key={5} value={"05"}>Maio</MenuItem>
                                <MenuItem key={6} value={"06"}>Junho</MenuItem>
                                <MenuItem key={7} value={"07"}>Julho</MenuItem>
                                <MenuItem key={8} value={"08"}>Agosto</MenuItem>
                                <MenuItem key={9} value={"09"}>Setembro</MenuItem>
                                <MenuItem key={10} value={"10"}>Outubro</MenuItem>
                                <MenuItem key={11} value={"11"}>Novembro</MenuItem>
                                <MenuItem key={12} value={"12"}>Dezembro</MenuItem>

                            </Select>
                        </FormControl>
                    </>
                }
                <Button variant="contained" sx={{ margin: '0 auto', mt: 3, display: "flex" }} disabled={monitoringOption !== "1" && monitoringOption !== "2" && monitoringOption !== "3"} onClick={useHandleClick}>Consultar</Button>
            </Box>
        )
    }

    const handleChange = (event: SelectChangeEvent) => {
        setMonitoringOption(event.target.value);
        setShowChart(false);
    };

    const useHandleClick = async () => {

        if (monitoringOption === "1") {
            try {
                const requestData = {
                    entidade: entity,
                    orgao: organ,
                    funcao: role,
                    subfuncao: subRole,
                    elemento: "",
                    natureza: nature,
                    fonte_do_recurso: font,
                }
                const resp = await post("forecast", requestData);
                setTimeViewData(resp);
                setShowChart(true);
            } catch (e) {
                setShowChart(false);
                throw (e);
            }
        } else if (monitoringOption === "2") {
            try {
                const requestData = {
                    entidade: entity,
                    orgao: organ,
                    funcao: role,
                    subfuncao: subRole,
                    elemento: "",
                    natureza: nature,
                    fonte_do_recurso: font,
                }
                const resp = await post("comparison_similar", requestData);
                setCityExpensesData(resp);
                setShowChart(true);
            } catch (e) {
                setShowChart(false);
                throw (e);
            }

        } else if (monitoringOption === "3") {
            try {
                const requestData = {
                    entidade: entity,
                    orgao: organ,
                    funcao: role,
                    subfuncao: subRole,
                    elemento: "",
                    natureza: nature,
                    fonte_do_recurso: font,
                    ano_exercicio: +year,
                    mes_exercicio: +month,
                    qtd_credores: +qtdCreditors
                }

                const resp = await post("limited_supplier", requestData);
                setTableData(resp);
                setShowChart(true);
            } catch (e) {
                setShowChart(false);
                throw (e);
            }
        }

    };

    return (
        <NavBar>
            <div className="w-full flex flex-col items-center text-center">
                <div className="p-9 w-1/2">
                    <Typography variant='h4'>Monitoramento de despesas</Typography>
                    <FormControl fullWidth size="small" sx={{ m: 2 }}>
                        <InputLabel id="monitoring-option">Selecione uma opção de monitoramento</InputLabel>
                        <Select
                            labelId="monitoring-option"
                            id="monitoring-option"
                            value={monitoringOption}
                            label="Selecione uma opção de monitoramento"
                            onChange={handleChange}
                        >
                            <MenuItem value={"1"}>Visualizações temporal dos valores das despesas com métricas de tendência</MenuItem>
                            <MenuItem value={"2"}>Municípios com despesas fora do padrão</MenuItem>
                            <MenuItem value={"3"}>Municípios com número de credores limitados </MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="w-11/12 flex flex-row ">
                    <div className="basis-1/4 max-w-sm">
                        {renderFilters()}
                    </div>
                    <Divider orientation="vertical" sx={{ m: 3, bgcolor: "blue" }} flexItem />
                    <div className="basis-9/12 flex justify-center justify-items-center place-items-center">
                        {showChart && renderChart()}
                    </div>

                </div>
            </div>
        </NavBar>

    );
}

export default ExpenseMonitoring;
