import { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, TextField } from '@mui/material';
import TimeViewChart, { apiData } from '../components/TimeViewChart';
import CityExpensesChart from '../components/CityExpensesChart';
import React from 'react';
import { post } from '../services/apiRequest';
import { entities } from '../constants/entities';
import { organs } from '../constants/organs';
import { functions } from '../constants/functions';
import { subFunctions } from '../constants/subFunctions';
import { natures } from '../constants/natures';
import { sources } from '../constants/sources';

const cityExpensesData = [
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 2384978.3295059204,
        "avg_sum_similar": 46311218.11728033,
        "std_sum_similar": 45987781.08248354,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 24698293.5707016,
        "avg_sum_similar": 62713293.588755764,
        "std_sum_similar": 59429588.65862053,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 26071230.019737244,
        "avg_sum_similar": 69123831.3145189,
        "std_sum_similar": 57215019.27628202,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 29793550.124464035,
        "avg_sum_similar": 69396381.11615382,
        "std_sum_similar": 57800141.07100859,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 32607078.52332306,
        "avg_sum_similar": 90503090.38076818,
        "std_sum_similar": 89167033.8613817,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 31006466.864656687,
        "avg_sum_similar": 72242900.2267998,
        "std_sum_similar": 62187439.57630424,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 29530273.39221573,
        "avg_sum_similar": 87265620.00560482,
        "std_sum_similar": 70035424.0941819,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 27420709.678741455,
        "avg_sum_similar": 81765493.19187164,
        "std_sum_similar": 74549235.94034824,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 34479605.105638504,
        "avg_sum_similar": 77561745.21228456,
        "std_sum_similar": 68587951.39092267,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 36606581.70982361,
        "avg_sum_similar": 76449674.58078395,
        "std_sum_similar": 71139544.57590649,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 43916947.35397339,
        "avg_sum_similar": 78712286.41143782,
        "std_sum_similar": 70882598.00047971,
        "outlier": false
    },
    {
        "ano_exercicio": "2014",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 30609723.063102722,
        "avg_sum_similar": 80910436.93125522,
        "std_sum_similar": 58678476.54391796,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 8633182.610721588,
        "avg_sum_similar": 21262954.112846375,
        "std_sum_similar": 8023045.852928446,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 25249999.18560028,
        "avg_sum_similar": 58855036.14426613,
        "std_sum_similar": 42255591.91878139,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 36916580.35580444,
        "avg_sum_similar": 63806043.33944329,
        "std_sum_similar": 51082186.946731105,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 29604856.98373413,
        "avg_sum_similar": 75645227.01177256,
        "std_sum_similar": 66618420.14761033,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 33514335.41567993,
        "avg_sum_similar": 73780692.87947147,
        "std_sum_similar": 52847204.30207375,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 30235032.48348999,
        "avg_sum_similar": 80993883.80343764,
        "std_sum_similar": 73450539.12760958,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 32277148.756015778,
        "avg_sum_similar": 90094315.56376211,
        "std_sum_similar": 77057314.32997945,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 35854356.665626526,
        "avg_sum_similar": 72322375.53422277,
        "std_sum_similar": 62158138.479106896,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 33501326.274101257,
        "avg_sum_similar": 89971702.27274863,
        "std_sum_similar": 84725061.06655018,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 34494045.57913971,
        "avg_sum_similar": 70992992.2298147,
        "std_sum_similar": 52302649.67292167,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 28362030.995182037,
        "avg_sum_similar": 92300152.45662999,
        "std_sum_similar": 87495289.79633254,
        "outlier": false
    },
    {
        "ano_exercicio": "2015",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 50877316.72815704,
        "avg_sum_similar": 106310472.96036571,
        "std_sum_similar": 80361154.61225434,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 2913825.626159668,
        "avg_sum_similar": 17429832.842158,
        "std_sum_similar": 7498187.616469335,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 23534008.910247803,
        "avg_sum_similar": 65079796.753941216,
        "std_sum_similar": 59044157.92339215,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 27350470.49407196,
        "avg_sum_similar": 65470106.91333512,
        "std_sum_similar": 50505317.46262116,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 31760426.011810303,
        "avg_sum_similar": 71923273.31415486,
        "std_sum_similar": 53815407.59649114,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 31069117.80315399,
        "avg_sum_similar": 72071480.75699084,
        "std_sum_similar": 56485900.8806078,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 35509785.24555206,
        "avg_sum_similar": 86260107.27130668,
        "std_sum_similar": 64856883.376910456,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 32808744.284965515,
        "avg_sum_similar": 82438903.80768998,
        "std_sum_similar": 70441469.3637168,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 36286285.28037262,
        "avg_sum_similar": 100980308.75990503,
        "std_sum_similar": 98519812.034319,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 33980522.83869934,
        "avg_sum_similar": 81341405.6584696,
        "std_sum_similar": 64536096.94187358,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 37939077.60085297,
        "avg_sum_similar": 101833157.92550676,
        "std_sum_similar": 108106329.5762545,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 46978162.9281044,
        "avg_sum_similar": 88676717.92047688,
        "std_sum_similar": 75032747.79195423,
        "outlier": false
    },
    {
        "ano_exercicio": "2016",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 53123623.84508133,
        "avg_sum_similar": 118653347.60281448,
        "std_sum_similar": 108567343.9606893,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 4622111.567956537,
        "avg_sum_similar": 17785406.368252117,
        "std_sum_similar": 13335620.235715292,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 24750006.421180725,
        "avg_sum_similar": 63408026.4261357,
        "std_sum_similar": 51142355.351402655,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 37558163.84887695,
        "avg_sum_similar": 83984767.61463387,
        "std_sum_similar": 71540396.72585168,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 34134761.83570862,
        "avg_sum_similar": 77679561.65392192,
        "std_sum_similar": 54493985.66287694,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 34161240.87119293,
        "avg_sum_similar": 100484059.73701732,
        "std_sum_similar": 101405188.19841117,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 36491360.908691406,
        "avg_sum_similar": 80549189.8214113,
        "std_sum_similar": 56208573.418656945,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 32206339.417373657,
        "avg_sum_similar": 96796160.23526669,
        "std_sum_similar": 88521401.91710202,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 38319187.35188866,
        "avg_sum_similar": 82849887.71772136,
        "std_sum_similar": 71292247.85456528,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 40320240.95639038,
        "avg_sum_similar": 88198447.14394712,
        "std_sum_similar": 74544439.01266894,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 57618151.2891407,
        "avg_sum_similar": 93228954.70866315,
        "std_sum_similar": 84917433.85764405,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 38930057.01098633,
        "avg_sum_similar": 90482511.50911944,
        "std_sum_similar": 79438350.07451832,
        "outlier": false
    },
    {
        "ano_exercicio": "2017",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 47341212.32820892,
        "avg_sum_similar": 124910885.19496424,
        "std_sum_similar": 109287159.83134948,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 3605488.263584137,
        "avg_sum_similar": 15156780.144987741,
        "std_sum_similar": 12034858.34853847,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 32206548.109825134,
        "avg_sum_similar": 50234007.35295855,
        "std_sum_similar": 27263824.909104623,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 55965602.80825806,
        "avg_sum_similar": 83045390.83674447,
        "std_sum_similar": 74139187.69645648,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 37236812.262405396,
        "avg_sum_similar": 89869203.34625457,
        "std_sum_similar": 79920597.96877931,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 34548069.54498291,
        "avg_sum_similar": 91261487.57700765,
        "std_sum_similar": 78988566.70852463,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 42593471.32646942,
        "avg_sum_similar": 99982481.64691298,
        "std_sum_similar": 94407647.0456974,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 40641455.96762085,
        "avg_sum_similar": 111393802.76219814,
        "std_sum_similar": 100575394.49437161,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 40838955.76776123,
        "avg_sum_similar": 101243877.32707874,
        "std_sum_similar": 98517474.79281086,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 37966719.47831726,
        "avg_sum_similar": 95085128.61864264,
        "std_sum_similar": 75317939.79957554,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 45317788.590423584,
        "avg_sum_similar": 107299888.2124242,
        "std_sum_similar": 114835615.91611196,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 40998671.2776947,
        "avg_sum_similar": 106216425.51652186,
        "std_sum_similar": 94395138.05136289,
        "outlier": false
    },
    {
        "ano_exercicio": "2018",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 48339500.292907715,
        "avg_sum_similar": 146293872.0831842,
        "std_sum_similar": 140711485.74673712,
        "outlier": true
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 20093275.782470703,
        "avg_sum_similar": 19240194.596659023,
        "std_sum_similar": 15791627.57163305,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 39137511.54109192,
        "avg_sum_similar": 65708730.00994364,
        "std_sum_similar": 46166298.18572356,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 35802725.098464966,
        "avg_sum_similar": 111698943.59327571,
        "std_sum_similar": 116062031.62456445,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 45759986.22113955,
        "avg_sum_similar": 140471643.92055714,
        "std_sum_similar": 159155427.38930526,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 42519308.579574585,
        "avg_sum_similar": 124728487.77169609,
        "std_sum_similar": 133368439.7183722,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 39779950.25487518,
        "avg_sum_similar": 113773424.17387994,
        "std_sum_similar": 116960035.07480073,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 42977425.87401581,
        "avg_sum_similar": 121565236.6431055,
        "std_sum_similar": 115406469.1251005,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 42811287.89666748,
        "avg_sum_similar": 110289930.32670403,
        "std_sum_similar": 108133874.2887036,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 40718632.04394531,
        "avg_sum_similar": 112336635.17924292,
        "std_sum_similar": 111032555.00836006,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 42116089.86846924,
        "avg_sum_similar": 110328714.80234973,
        "std_sum_similar": 101225285.6044387,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 47337250.49630833,
        "avg_sum_similar": 127323886.05335061,
        "std_sum_similar": 129742797.0158937,
        "outlier": false
    },
    {
        "ano_exercicio": "2019",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 50211798.0351429,
        "avg_sum_similar": 148119422.61493722,
        "std_sum_similar": 161529116.26929757,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 27975987.64452362,
        "avg_sum_similar": 21118386.91116969,
        "std_sum_similar": 23041560.864751417,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 39788320.42448425,
        "avg_sum_similar": 41646606.072517395,
        "std_sum_similar": 8570522.788683906,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 41777496.06050873,
        "avg_sum_similar": 50426584.69011021,
        "std_sum_similar": 7136979.9319699835,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 55673025.35824585,
        "avg_sum_similar": 57843965.53057766,
        "std_sum_similar": 6649780.893390588,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 44243310.98917389,
        "avg_sum_similar": 50290734.12917423,
        "std_sum_similar": 10905069.265548166,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 42951733.665130615,
        "avg_sum_similar": 52855230.67030692,
        "std_sum_similar": 9780719.339233367,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "07",
        "cod_municipio": "3118601",
        "sum_target": 52601929.718826294,
        "avg_sum_similar": 61535125.54466617,
        "std_sum_similar": 7200228.21194852,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "08",
        "cod_municipio": "3118601",
        "sum_target": 48536917.15682793,
        "avg_sum_similar": 62157968.729858875,
        "std_sum_similar": 9709892.758218989,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "09",
        "cod_municipio": "3118601",
        "sum_target": 52146700.49391174,
        "avg_sum_similar": 63519911.27874327,
        "std_sum_similar": 13716167.707661586,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "10",
        "cod_municipio": "3118601",
        "sum_target": 77071170.09819031,
        "avg_sum_similar": 65930857.49273372,
        "std_sum_similar": 3931986.225458093,
        "outlier": true
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "11",
        "cod_municipio": "3118601",
        "sum_target": 53927872.07324219,
        "avg_sum_similar": 74079684.54979706,
        "std_sum_similar": 3370282.756225121,
        "outlier": false
    },
    {
        "ano_exercicio": "2020",
        "mes_exercicio": "12",
        "cod_municipio": "3118601",
        "sum_target": 69180654.87216187,
        "avg_sum_similar": 112527943.58208656,
        "std_sum_similar": 14973150.168168096,
        "outlier": false
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "01",
        "cod_municipio": "3118601",
        "sum_target": 29840554.106445312,
        "avg_sum_similar": 22060474.24139023,
        "std_sum_similar": 23907441.990047265,
        "outlier": false
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "02",
        "cod_municipio": "3118601",
        "sum_target": 37730457.22186279,
        "avg_sum_similar": 53351652.026031375,
        "std_sum_similar": 17563667.457929246,
        "outlier": false
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "03",
        "cod_municipio": "3118601",
        "sum_target": 49379829.4977417,
        "avg_sum_similar": 64769224.82576227,
        "std_sum_similar": 18990135.121314853,
        "outlier": false
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "04",
        "cod_municipio": "3118601",
        "sum_target": 49922804.000514984,
        "avg_sum_similar": 67419901.96574593,
        "std_sum_similar": 16936829.370045632,
        "outlier": false
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "05",
        "cod_municipio": "3118601",
        "sum_target": 99359705.05043793,
        "avg_sum_similar": 69784457.41315806,
        "std_sum_similar": 22125345.05774643,
        "outlier": true
    },
    {
        "ano_exercicio": "2021",
        "mes_exercicio": "06",
        "cod_municipio": "3118601",
        "sum_target": 53597848.52825928,
        "avg_sum_similar": 68442770.39139089,
        "std_sum_similar": 4297614.862414692,
        "outlier": false
    }
];

function createData(
    id: number,
    municipio: string,
    data: string,
    dotacao: string,
    qtd: number,
) {
    return { id, municipio, data, dotacao, qtd };
}

const rows = [
    createData(1, "Abaete", "04/2019", "02.20062.10.302.0012.000.3.1.90.04.000.102", 1),
    createData(2, "Olaria", "04/2019", "02.20062.10.302.0012.000.3.1.90.04.000.102", 2),
    createData(3, "Timóteo", "04/2019", "02.20062.10.302.0012.000.3.1.90.04.000.102", 1),
    createData(4, "Ipatinga", "04/2019", "02.20062.10.302.0012.000.3.1.90.04.000.102", 2),
];


function ExpenseMonitoring() {

    const [entity, setEntity] = useState("");
    const [organ, setOrgan] = useState("");
    const [role, setRole] = useState("");
    const [subRole, setSubRole] = useState("");
    const [nature, setNature] = useState("");
    const [font, setFont] = useState("");
    const [monitoringOption, setMonitoringOption] = useState("");
    const [showChart, setShowChart] = useState(false);
    const [data, setData] = useState<apiData[]>([{
        ano_exercicio: "",
        mes_exercicio: "",
        vlr: 0,
        flag: ""
    }]);

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


    const renderChart = () => {
        if (monitoringOption === "1") {
            return (<TimeViewChart apiData={data} />);
        } else if (monitoringOption === "2") {
            return (
                <CityExpensesChart apiData={cityExpensesData} />
            );
        } else if (monitoringOption === "3") {
            return (
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="center">Município</TableCell>
                                <TableCell align="center">Ano/Mes Exercício</TableCell>
                                <TableCell align="center">Dotação Orçamentária</TableCell>
                                <TableCell align="center">Qtd. Credores</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.municipio}</TableCell>
                                    <TableCell align="center">{row.data}</TableCell>
                                    <TableCell align="center">{row.dotacao}</TableCell>
                                    <TableCell align="center">{row.qtd}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>);
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
                        {natures.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
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
                    <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Qtd. de credores" variant="outlined" size="small" type="number" />
                    </FormControl>
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
            const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            setData(resp);
        } else if (monitoringOption === "2") {
            //const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            //setData(resp);
        } else if (monitoringOption === "3") {
            //const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            //setData(resp);
        }
        setShowChart(true);
    };

    return (
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
    );
}

export default ExpenseMonitoring;
