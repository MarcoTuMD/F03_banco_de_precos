import { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, TextField } from '@mui/material';
import TimeViewChart, { apiData } from '../components/TimeViewChart';
import CityExpensesChart from '../components/CityExpensesChart';
import React from 'react';
import { post } from '../services/apiRequest';

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
        if (monitoringOption == "1") {
            return (<TimeViewChart apiData={data} />);
        } else if (monitoringOption == "2") {
            return (
                <CityExpensesChart apiData={cityExpensesData} />
            );
        } else if (monitoringOption == "3") {
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
                        <MenuItem value={3100104}>ABADIA DOS DOURADOS</MenuItem>
                        <MenuItem value={3100203}>ABAETE</MenuItem>
                        <MenuItem value={3101003}>AGUAS VERMELHAS</MenuItem>
                        <MenuItem value={3101201}>AIURUOCA</MenuItem>
                        <MenuItem value={3101409}>ALBERTINA</MenuItem>
                        <MenuItem value={3101508}>ALEM PARAIBA</MenuItem>
                        <MenuItem value={3101607}>ALFENAS</MenuItem>
                        <MenuItem value={3101631}>ALFREDO VASCONCELOS</MenuItem>
                        <MenuItem value={3102001}>ALTEROSA</MenuItem>
                        <MenuItem value={3102050}>ALTO CAPARAO</MenuItem>
                        <MenuItem value={3102308}>ALVINOPOLIS</MenuItem>
                        <MenuItem value={3102407}>ALVORADA DE MINAS</MenuItem>
                        <MenuItem value={3102605}>ANDRADAS</MenuItem>
                        <MenuItem value={3102852}>ANGELANDIA</MenuItem>
                        <MenuItem value={3103009}>ANTONIO DIAS</MenuItem>
                        <MenuItem value={3103306}>ARACITABA</MenuItem>
                        <MenuItem value={3103603}>ARANTINA</MenuItem>
                        <MenuItem value={3103702}>ARAPONGA</MenuItem>
                        <MenuItem value={3103751}>ARAPORA</MenuItem>
                        <MenuItem value={3104007}>ARAXA</MenuItem>
                        <MenuItem value={3104205}>ARCOS</MenuItem>
                        <MenuItem value={3104304}>AREADO</MenuItem>
                        <MenuItem value={3104502}>ARINOS</MenuItem>
                        <MenuItem value={3104700}>ATALEIA</MenuItem>
                        <MenuItem value={3105004}>BALDIM</MenuItem>
                        <MenuItem value={3105103}>BAMBUI</MenuItem>
                        <MenuItem value={3105202}>BANDEIRA</MenuItem>
                        <MenuItem value={3105301}>BANDEIRA DO SUL</MenuItem>
                        <MenuItem value={3105608}>BARBACENA</MenuItem>
                        <MenuItem value={3105707}>BARRA LONGA</MenuItem>
                        <MenuItem value={3105905}>BARROSO</MenuItem>
                        <MenuItem value={3106002}>BELA VISTA DE MINAS</MenuItem>
                        <MenuItem value={3106200}>BELO HORIZONTE</MenuItem>
                        <MenuItem value={3106408}>BELO VALE</MenuItem>
                        <MenuItem value={3106507}>BERILO</MenuItem>
                        <MenuItem value={3106705}>BETIM</MenuItem>
                        <MenuItem value={3106804}>BIAS FORTES</MenuItem>
                        <MenuItem value={3107109}>BOA ESPERANCA</MenuItem>
                        <MenuItem value={3107208}>BOCAINA DE MINAS</MenuItem>
                        <MenuItem value={3107406}>BOM DESPACHO</MenuItem>
                        <MenuItem value={3107505}>BOM JARDIM DE MINAS</MenuItem>
                        <MenuItem value={3107703}>BOM JESUS DO AMPARO</MenuItem>
                        <MenuItem value={3107901}>BOM REPOUSO</MenuItem>
                        <MenuItem value={3108206}>BONFINOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={3108255}>BONITO DE MINAS</MenuItem>
                        <MenuItem value={3108503}>BOTUMIRIM</MenuItem>
                        <MenuItem value={3108701}>BRAS PIRES</MenuItem>
                        <MenuItem value={3108800}>BRAUNAS</MenuItem>
                        <MenuItem value={3108909}>BRAZOPOLIS</MenuItem>
                        <MenuItem value={3109006}>BRUMADINHO</MenuItem>
                        <MenuItem value={3109204}>BUENOPOLIS</MenuItem>
                        <MenuItem value={3109253}>BUGRE</MenuItem>
                        <MenuItem value={3109451}>CABECEIRA GRANDE</MenuItem>
                        <MenuItem value={3109501}>CABO VERDE</MenuItem>
                        <MenuItem value={3109600}>CACHOEIRA DA PRATA</MenuItem>
                        <MenuItem value={3109709}>CACHOEIRA DE MINAS</MenuItem>
                        <MenuItem value={3110004}>CAETE</MenuItem>
                        <MenuItem value={3110202}>CAJURI</MenuItem>
                        <MenuItem value={3110301}>CALDAS</MenuItem>
                        <MenuItem value={3110400}>CAMACHO</MenuItem>
                        <MenuItem value={3110707}>CAMBUQUIRA</MenuItem>
                        <MenuItem value={3110905}>CAMPANHA</MenuItem>
                        <MenuItem value={3111002}>CAMPESTRE</MenuItem>
                        <MenuItem value={3111705}>CANAA</MenuItem>
                        <MenuItem value={3112000}>CANDEIAS</MenuItem>
                        <MenuItem value={3112109}>CAPARAO</MenuItem>
                        <MenuItem value={3112307}>CAPELINHA</MenuItem>
                        <MenuItem value={3112406}>CAPETINGA</MenuItem>
                        <MenuItem value={3112653}>CAPITAO ANDRADE</MenuItem>
                        <MenuItem value={3112703}>CAPITAO ENEAS</MenuItem>
                        <MenuItem value={3112901}>CAPUTIRA</MenuItem>
                        <MenuItem value={3113008}>CARAI</MenuItem>
                        <MenuItem value={3113107}>CARANAIBA</MenuItem>
                        <MenuItem value={3113206}>CARANDAI</MenuItem>
                        <MenuItem value={3113404}>CARATINGA</MenuItem>
                        <MenuItem value={3113602}>CAREACU</MenuItem>
                        <MenuItem value={3113701}>CARLOS CHAGAS</MenuItem>
                        <MenuItem value={3113909}>CARMO DA CACHOEIRA</MenuItem>
                        <MenuItem value={3114105}>CARMO DE MINAS</MenuItem>
                        <MenuItem value={3114303}>CARMO DO PARANAIBA</MenuItem>
                        <MenuItem value={3114808}>CARVALHOS</MenuItem>
                        <MenuItem value={3115201}>CONCEICAO DA BARRA DE MINAS</MenuItem>
                        <MenuItem value={3115359}>CATAS ALTAS</MenuItem>
                        <MenuItem value={3115458}>CATUJI</MenuItem>
                        <MenuItem value={3115474}>CATUTI</MenuItem>
                        <MenuItem value={3115508}>CAXAMBU</MenuItem>
                        <MenuItem value={3115607}>CEDRO DO ABAETE</MenuItem>
                        <MenuItem value={3115805}>CENTRALINA</MenuItem>
                        <MenuItem value={3115904}>CHACARA</MenuItem>
                        <MenuItem value={3116209}>CHIADOR</MenuItem>
                        <MenuItem value={3116308}>CIPOTANEA</MenuItem>
                        <MenuItem value={3116407}>CLARAVAL</MenuItem>
                        <MenuItem value={3116506}>CLARO DOS POCOES</MenuItem>
                        <MenuItem value={3116605}>CLAUDIO</MenuItem>
                        <MenuItem value={3116803}>COLUNA</MenuItem>
                        <MenuItem value={3116902}>COMENDADOR GOMES</MenuItem>
                        <MenuItem value={3117009}>COMERCINHO</MenuItem>
                        <MenuItem value={3117207}>CONCEICAO DAS PEDRAS</MenuItem>
                        <MenuItem value={3117306}>CONCEICAO DAS ALAGOAS</MenuItem>
                        <MenuItem value={3117504}>CONCEICAO DO MATO DENTRO</MenuItem>
                        <MenuItem value={3117603}>CONCEICAO DO PARA</MenuItem>
                        <MenuItem value={3117702}>CONCEICAO DO RIO VERDE</MenuItem>
                        <MenuItem value={3117801}>CONCEICAO DOS OUROS</MenuItem>
                        <MenuItem value={3118007}>CONGONHAS</MenuItem>
                        <MenuItem value={3118106}>CONGONHAS DO NORTE</MenuItem>
                        <MenuItem value={3118403}>CONSELHEIRO PENA</MenuItem>
                        <MenuItem value={3118502}>CONSOLACAO</MenuItem>
                        <MenuItem value={3118601}>CONTAGEM</MenuItem>
                        <MenuItem value={3118700}>COQUEIRAL</MenuItem>
                        <MenuItem value={3118809}>CORACAO DE JESUS</MenuItem>
                        <MenuItem value={3118908}>CORDISBURGO</MenuItem>
                        <MenuItem value={3119906}>CORREGO DO BOM JESUS</MenuItem>
                        <MenuItem value={3120003}>CORREGO NOVO</MenuItem>
                        <MenuItem value={3120102}>COUTO DE MAGALHAES DE MINAS</MenuItem>
                        <MenuItem value={3120201}>CRISTAIS</MenuItem>
                        <MenuItem value={3120300}>CRISTALIA</MenuItem>
                        <MenuItem value={3120607}>CRUCILANDIA</MenuItem>
                        <MenuItem value={3120839}>CUPARAQUE</MenuItem>
                        <MenuItem value={3120870}>CURRAL DE DENTRO</MenuItem>
                        <MenuItem value={3121001}>DATAS</MenuItem>
                        <MenuItem value={3121209}>DELFINOPOLIS</MenuItem>
                        <MenuItem value={3121308}>DESCOBERTO</MenuItem>
                        <MenuItem value={3121506}>DESTERRO DO MELO</MenuItem>
                        <MenuItem value={3121605}>DIAMANTINA</MenuItem>
                        <MenuItem value={3121803}>DIONISIO</MenuItem>
                        <MenuItem value={3122108}>DIVINO DAS LARANJEIRAS</MenuItem>
                        <MenuItem value={3122306}>DIVINOPOLIS</MenuItem>
                        <MenuItem value={3122454}>DIVISOPOLIS</MenuItem>
                        <MenuItem value={3122603}>DOM JOAQUIM</MenuItem>
                        <MenuItem value={3122702}>DOM SILVERIO</MenuItem>
                        <MenuItem value={3122801}>DOM VICOSO</MenuItem>
                        <MenuItem value={3122900}>DONA EUZEBIA</MenuItem>
                        <MenuItem value={3123007}>DORES DE CAMPOS</MenuItem>
                        <MenuItem value={3123403}>DORESOPOLIS</MenuItem>
                        <MenuItem value={3123502}>DOURADOQUARA</MenuItem>
                        <MenuItem value={3123528}>DURANDE</MenuItem>
                        <MenuItem value={3123858}>ENTRE FOLHAS</MenuItem>
                        <MenuItem value={3124104}>ESMERALDAS</MenuItem>
                        <MenuItem value={3124203}>ESPERA FELIZ</MenuItem>
                        <MenuItem value={3124609}>ESTRELA DALVA</MenuItem>
                        <MenuItem value={3124708}>ESTRELA DO INDAIA</MenuItem>
                        <MenuItem value={3124807}>ESTRELA DO SUL</MenuItem>
                        <MenuItem value={3125002}>EWBANK DA CAMARA</MenuItem>
                        <MenuItem value={3125101}>EXTREMA</MenuItem>
                        <MenuItem value={3125200}>FAMA</MenuItem>
                        <MenuItem value={3125606}>FELISBURGO</MenuItem>
                        <MenuItem value={3125903}>FERROS</MenuItem>
                        <MenuItem value={3125952}>FERVEDOURO</MenuItem>
                        <MenuItem value={3126000}>FLORESTAL</MenuItem>
                        <MenuItem value={3126307}>FORTALEZA DE MINAS</MenuItem>
                        <MenuItem value={3126406}>FORTUNA DE MINAS</MenuItem>
                        <MenuItem value={3126604}>FRANCISCO DUMONT</MenuItem>
                        <MenuItem value={3126703}>FRANCISCO SA</MenuItem>
                        <MenuItem value={3127073}>FRUTA DE LEITE</MenuItem>
                        <MenuItem value={3127370}>GOIABEIRA</MenuItem>
                        <MenuItem value={3127388}>GOIANA</MenuItem>
                        <MenuItem value={3127404}>GONCALVES</MenuItem>
                        <MenuItem value={3128105}>GUAPE</MenuItem>
                        <MenuItem value={3128204}>GUARACIABA</MenuItem>
                        <MenuItem value={3128501}>GUARARA</MenuItem>
                        <MenuItem value={3128709}>GUAXUPE</MenuItem>
                        <MenuItem value={3128808}>GUIDOVAL</MenuItem>
                        <MenuItem value={3128907}>GUIMARANIA</MenuItem>
                        <MenuItem value={3129004}>GUIRICEMA</MenuItem>
                        <MenuItem value={3129103}>GURINHATA</MenuItem>
                        <MenuItem value={3129608}>IBIAI</MenuItem>
                        <MenuItem value={3129657}>IBIRACATU</MenuItem>
                        <MenuItem value={3129707}>IBIRACI</MenuItem>
                        <MenuItem value={3129806}>IBIRITE</MenuItem>
                        <MenuItem value={3130002}>IBITURUNA</MenuItem>
                        <MenuItem value={3130408}>IJACI</MenuItem>
                        <MenuItem value={3130507}>ILICINEA</MenuItem>
                        <MenuItem value={3130556}>IMBE DE MINAS</MenuItem>
                        <MenuItem value={3130655}>INDAIABIRA</MenuItem>
                        <MenuItem value={3131109}>INIMUTABA</MenuItem>
                        <MenuItem value={3131158}>IPABA</MenuItem>
                        <MenuItem value={3131307}>IPATINGA</MenuItem>
                        <MenuItem value={3131406}>IPIACU</MenuItem>
                        <MenuItem value={3131505}>IPUIUNA</MenuItem>
                        <MenuItem value={3132008}>ITACAMBIRA</MenuItem>
                        <MenuItem value={3132107}>ITACARAMBI</MenuItem>
                        <MenuItem value={3132503}>ITAMARANDIBA</MenuItem>
                        <MenuItem value={3132701}>ITAMBACURI</MenuItem>
                        <MenuItem value={3132800}>ITAMBE DO MATO DENTRO</MenuItem>
                        <MenuItem value={3133006}>ITAMONTE</MenuItem>
                        <MenuItem value={3133105}>ITANHANDU</MenuItem>
                        <MenuItem value={3133204}>ITANHOMI</MenuItem>
                        <MenuItem value={3133402}>ITAPAGIPE</MenuItem>
                        <MenuItem value={3133600}>ITAPEVA</MenuItem>
                        <MenuItem value={3133709}>ITATIAIUCU</MenuItem>
                        <MenuItem value={3133758}>ITAU DE MINAS</MenuItem>
                        <MenuItem value={3134301}>ITUMIRIM</MenuItem>
                        <MenuItem value={3134806}>JACUI</MenuItem>
                        <MenuItem value={3134905}>JACUTINGA</MenuItem>
                        <MenuItem value={3135050}>JAIBA</MenuItem>
                        <MenuItem value={3135076}>JAMPRUCA</MenuItem>
                        <MenuItem value={3135357}>JAPONVAR</MenuItem>
                        <MenuItem value={3135456}>JENIPAPO DE MINAS</MenuItem>
                        <MenuItem value={3135506}>JEQUERI</MenuItem>
                        <MenuItem value={3135704}>JEQUITIBA</MenuItem>
                        <MenuItem value={3135803}>JEQUITINHONHA</MenuItem>
                        <MenuItem value={3135902}>JESUANIA</MenuItem>
                        <MenuItem value={3136009}>JOAIMA</MenuItem>
                        <MenuItem value={3136108}>JOANESIA</MenuItem>
                        <MenuItem value={3136306}>JOAO PINHEIRO</MenuItem>
                        <MenuItem value={3136504}>JORDANIA</MenuItem>
                        <MenuItem value={3136520}>JOSE GONCALVES DE MINAS</MenuItem>
                        <MenuItem value={3136959}>JUVENILIA</MenuItem>
                        <MenuItem value={3137106}>LAGAMAR</MenuItem>
                        <MenuItem value={3137403}>LAGOA DOURADA</MenuItem>
                        <MenuItem value={3137502}>LAGOA FORMOSA</MenuItem>
                        <MenuItem value={3137601}>LAGOA SANTA</MenuItem>
                        <MenuItem value={3138005}>LARANJAL</MenuItem>
                        <MenuItem value={3138104}>LASSANCE</MenuItem>
                        <MenuItem value={3138203}>LAVRAS</MenuItem>
                        <MenuItem value={3138658}>LONTRA</MenuItem>
                        <MenuItem value={3138674}>LUISBURGO</MenuItem>
                        <MenuItem value={3138682}>LUISLANDIA</MenuItem>
                        <MenuItem value={3138708}>LUMINARIAS</MenuItem>
                        <MenuItem value={3138906}>MACHACALIS</MenuItem>
                        <MenuItem value={3139003}>MACHADO</MenuItem>
                        <MenuItem value={3139102}>MADRE DE DEUS DE MINAS</MenuItem>
                        <MenuItem value={3139300}>MANGA</MenuItem>
                        <MenuItem value={3139607}>MANTENA</MenuItem>
                        <MenuItem value={3140100}>MARILAC</MenuItem>
                        <MenuItem value={3140209}>MARIPA DE MINAS</MenuItem>
                        <MenuItem value={3140308}>MARLIERIA</MenuItem>
                        <MenuItem value={3140506}>MARTINHO CAMPOS</MenuItem>
                        <MenuItem value={3140555}>MATA VERDE</MenuItem>
                        <MenuItem value={3140605}>MATERLANDIA</MenuItem>
                        <MenuItem value={3140803}>MATIAS BARBOSA</MenuItem>
                        <MenuItem value={3140852}>MATIAS CARDOSO</MenuItem>
                        <MenuItem value={3140902}>MATIPO</MenuItem>
                        <MenuItem value={3141009}>MATO VERDE</MenuItem>
                        <MenuItem value={3141108}>MATOZINHOS</MenuItem>
                        <MenuItem value={3141306}>MEDEIROS</MenuItem>
                        <MenuItem value={3141405}>MEDINA</MenuItem>
                        <MenuItem value={3141603}>MERCES</MenuItem>
                        <MenuItem value={3141702}>MESQUITA</MenuItem>
                        <MenuItem value={3141801}>MINAS NOVAS</MenuItem>
                        <MenuItem value={3142106}>MIRADOURO</MenuItem>
                        <MenuItem value={3142205}>MIRAI</MenuItem>
                        <MenuItem value={3142304}>MOEDA</MenuItem>
                        <MenuItem value={3142502}>MONJOLOS</MenuItem>
                        <MenuItem value={3142601}>MONSENHOR PAULO</MenuItem>
                        <MenuItem value={3142809}>MONTE ALEGRE DE MINAS</MenuItem>
                        <MenuItem value={3143203}>MONTE SANTO DE MINAS</MenuItem>
                        <MenuItem value={3143302}>MONTES CLAROS</MenuItem>
                        <MenuItem value={3143401}>MONTE SIAO</MenuItem>
                        <MenuItem value={3143708}>MORRO DO PILAR</MenuItem>
                        <MenuItem value={3143807}>MUNHOZ</MenuItem>
                        <MenuItem value={3144003}>MUTUM</MenuItem>
                        <MenuItem value={3144102}>MUZAMBINHO</MenuItem>
                        <MenuItem value={3144359}>NAQUE</MenuItem>
                        <MenuItem value={3144409}>NATERCIA</MenuItem>
                        <MenuItem value={3144656}>NINHEIRA</MenuItem>
                        <MenuItem value={3144672}>NOVA BELEM</MenuItem>
                        <MenuItem value={3144805}>NOVA LIMA</MenuItem>
                        <MenuItem value={3145000}>NOVA PONTE</MenuItem>
                        <MenuItem value={3145208}>NOVA SERRANA</MenuItem>
                        <MenuItem value={3145307}>NOVO CRUZEIRO</MenuItem>
                        <MenuItem value={3145356}>NOVO ORIENTE DE MINAS</MenuItem>
                        <MenuItem value={3145406}>OLARIA</MenuItem>
                        <MenuItem value={3145604}>OLIVEIRA</MenuItem>
                        <MenuItem value={3145703}>OLIVEIRA FORTES</MenuItem>
                        <MenuItem value={3145802}>ONCA DE PITANGUI</MenuItem>
                        <MenuItem value={3145877}>ORIZANIA</MenuItem>
                        <MenuItem value={3145901}>OURO BRANCO</MenuItem>
                        <MenuItem value={3146107}>OURO PRETO</MenuItem>
                        <MenuItem value={3146305}>PADRE PARAISO</MenuItem>
                        <MenuItem value={3146404}>PAINEIRAS</MenuItem>
                        <MenuItem value={3146503}>PAINS</MenuItem>
                        <MenuItem value={3146552}>PAI PEDRO</MenuItem>
                        <MenuItem value={3147105}>PARA DE MINAS</MenuItem>
                        <MenuItem value={3147204}>PARAGUACU</MenuItem>
                        <MenuItem value={3147303}>PARAISOPOLIS</MenuItem>
                        <MenuItem value={3147402}>PARAOPEBA</MenuItem>
                        <MenuItem value={3147501}>PASSABEM</MenuItem>
                        <MenuItem value={3147600}>PASSA QUATRO</MenuItem>
                        <MenuItem value={3148509}>PAVAO</MenuItem>
                        <MenuItem value={3148608}>PECANHA</MenuItem>
                        <MenuItem value={3148707}>PEDRA AZUL</MenuItem>
                        <MenuItem value={3148806}>PEDRA DO ANTA</MenuItem>
                        <MenuItem value={3148905}>PEDRA DO INDAIA</MenuItem>
                        <MenuItem value={3149101}>PEDRALVA</MenuItem>
                        <MenuItem value={3149309}>PEDRO LEOPOLDO</MenuItem>
                        <MenuItem value={3149705}>PERDIGAO</MenuItem>
                        <MenuItem value={3149804}>PERDIZES</MenuItem>
                        <MenuItem value={3150158}>PIEDADE DE CARATINGA</MenuItem>
                        <MenuItem value={3150208}>PIEDADE DE PONTE NOVA</MenuItem>
                        <MenuItem value={3150307}>PIEDADE DO RIO GRANDE</MenuItem>
                        <MenuItem value={3150802}>PIRANGA</MenuItem>
                        <MenuItem value={3151107}>PIRAPETINGA</MenuItem>
                        <MenuItem value={3151206}>PIRAPORA</MenuItem>
                        <MenuItem value={3151305}>PIRAUBA</MenuItem>
                        <MenuItem value={3151404}>PITANGUI</MenuItem>
                        <MenuItem value={3151503}>PIUMHI</MenuItem>
                        <MenuItem value={3151602}>PLANURA</MenuItem>
                        <MenuItem value={3151701}>POCO FUNDO</MenuItem>
                        <MenuItem value={3151800}>POCOS DE CALDAS</MenuItem>
                        <MenuItem value={3152105}>PONTE NOVA</MenuItem>
                        <MenuItem value={3152204}>PORTEIRINHA</MenuItem>
                        <MenuItem value={3152402}>POTE</MenuItem>
                        <MenuItem value={3152501}>POUSO ALEGRE</MenuItem>
                        <MenuItem value={3152600}>POUSO ALTO</MenuItem>
                        <MenuItem value={3152709}>PRADOS</MenuItem>
                        <MenuItem value={3152907}>PRATAPOLIS</MenuItem>
                        <MenuItem value={3153004}>PRATINHA</MenuItem>
                        <MenuItem value={3153202}>PRESIDENTE JUSCELINO</MenuItem>
                        <MenuItem value={3153301}>PRESIDENTE KUBITSCHEK</MenuItem>
                        <MenuItem value={3153400}>PRESIDENTE OLEGARIO</MenuItem>
                        <MenuItem value={3153707}>QUARTEL GERAL</MenuItem>
                        <MenuItem value={3153806}>QUELUZITO</MenuItem>
                        <MenuItem value={3153905}>RAPOSOS</MenuItem>
                        <MenuItem value={3154002}>RAUL SOARES</MenuItem>
                        <MenuItem value={3154150}>REDUTO</MenuItem>
                        <MenuItem value={3154200}>RESENDE COSTA</MenuItem>
                        <MenuItem value={3154408}>RESSAQUINHA</MenuItem>
                        <MenuItem value={3154457}>RIACHINHO</MenuItem>
                        <MenuItem value={3154507}>RIACHO DOS MACHADOS</MenuItem>
                        <MenuItem value={3154705}>RIBEIRAO VERMELHO</MenuItem>
                        <MenuItem value={3154804}>RIO ACIMA</MenuItem>
                        <MenuItem value={3155405}>RIO NOVO</MenuItem>
                        <MenuItem value={3155504}>RIO PARANAIBA</MenuItem>
                        <MenuItem value={3155603}>RIO PARDO DE MINAS</MenuItem>
                        <MenuItem value={3155801}>RIO POMBA</MenuItem>
                        <MenuItem value={3156304}>RODEIRO</MenuItem>
                        <MenuItem value={3156403}>ROMARIA</MenuItem>
                        <MenuItem value={3156452}>ROSARIO DA LIMEIRA</MenuItem>
                        <MenuItem value={3156700}>SABARA</MenuItem>
                        <MenuItem value={3156809}>SABINOPOLIS</MenuItem>
                        <MenuItem value={3156908}>SACRAMENTO</MenuItem>
                        <MenuItem value={3157005}>SALINAS</MenuItem>
                        <MenuItem value={3157104}>SALTO DA DIVISA</MenuItem>
                        <MenuItem value={3157203}>SANTA BARBARA</MenuItem>
                        <MenuItem value={3157278}>SANTA BARBARA DO MONTE VERDE</MenuItem>
                        <MenuItem value={3157302}>SANTA BARBARA DO TUGURIO</MenuItem>
                        <MenuItem value={3157500}>SANTA EFIGENIA DE MINAS</MenuItem>
                        <MenuItem value={3157658}>SANTA HELENA DE MINAS</MenuItem>
                        <MenuItem value={3157906}>SANTA MARGARIDA</MenuItem>
                        <MenuItem value={3158003}>SANTA MARIA DE ITABIRA</MenuItem>
                        <MenuItem value={3158300}>SANTANA DA VARGEM</MenuItem>
                        <MenuItem value={3158409}>SANTANA DE CATAGUASES</MenuItem>
                        <MenuItem value={3158508}>SANTANA DE PIRAPAMA</MenuItem>
                        <MenuItem value={3158904}>SANTANA DO MANHUACU</MenuItem>
                        <MenuItem value={3158953}>SANTANA DO PARAISO</MenuItem>
                        <MenuItem value={3159001}>SANTANA DO RIACHO</MenuItem>
                        <MenuItem value={3159308}>SANTA RITA DE JACUTINGA</MenuItem>
                        <MenuItem value={3159357}>SANTA RITA DE MINAS</MenuItem>
                        <MenuItem value={3159407}>SANTA RITA DE IBITIPOCA</MenuItem>
                        <MenuItem value={3159506}>SANTA RITA DO ITUETO</MenuItem>
                        <MenuItem value={3160306}>SANTO ANTONIO DO JACINTO</MenuItem>
                        <MenuItem value={3160405}>SANTO ANTONIO DO MONTE</MenuItem>
                        <MenuItem value={3160454}>SANTO ANTONIO DO RETIRO</MenuItem>
                        <MenuItem value={3160504}>SANTO ANTONIO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={3161007}>SAO DOMINGOS DO PRATA</MenuItem>
                        <MenuItem value={3161056}>SAO FELIX DE MINAS</MenuItem>
                        <MenuItem value={3161106}>SAO FRANCISCO</MenuItem>
                        <MenuItem value={3161205}>SAO FRANCISCO DE PAULA</MenuItem>
                        <MenuItem value={3161502}>SAO GERALDO</MenuItem>
                        <MenuItem value={3161601}>SAO GERALDO DA PIEDADE</MenuItem>
                        <MenuItem value={3161700}>SAO GONCALO DO ABAETE</MenuItem>
                        <MenuItem value={3162005}>SAO GONCALO DO SAPUCAI</MenuItem>
                        <MenuItem value={3162500}>SAO JOAO DEL REI</MenuItem>
                        <MenuItem value={3162658}>SAO JOAO DO PACUI</MenuItem>
                        <MenuItem value={3162708}>SAO JOAO DO PARAISO</MenuItem>
                        <MenuItem value={3162948}>SAO JOSE DA BARRA</MenuItem>
                        <MenuItem value={3163003}>SAO JOSE DA SAFIRA</MenuItem>
                        <MenuItem value={3163102}>SAO JOSE DA VARGINHA</MenuItem>
                        <MenuItem value={3163201}>SAO JOSE DO ALEGRE</MenuItem>
                        <MenuItem value={3163300}>SAO JOSE DO DIVINO</MenuItem>
                        <MenuItem value={3163409}>SAO JOSE DO GOIABAL</MenuItem>
                        <MenuItem value={3163508}>SAO JOSE DO JACURI</MenuItem>
                        <MenuItem value={3163607}>SAO JOSE DO MANTIMENTO</MenuItem>
                        <MenuItem value={3163805}>SAO MIGUEL DO ANTA</MenuItem>
                        <MenuItem value={3164100}>SAO PEDRO DO SUACUI</MenuItem>
                        <MenuItem value={3164209}>SAO ROMAO</MenuItem>
                        <MenuItem value={3164308}>SAO ROQUE DE MINAS</MenuItem>
                        <MenuItem value={3164407}>SAO SEBASTIAO DA BELA VISTA</MenuItem>
                        <MenuItem value={3164803}>SAO SEBASTIAO DO RIO PRETO</MenuItem>
                        <MenuItem value={3165206}>SAO TOME DAS LETRAS</MenuItem>
                        <MenuItem value={3165503}>SARDOA</MenuItem>
                        <MenuItem value={3166105}>SENHORA DO PORTO</MenuItem>
                        <MenuItem value={3166303}>SERICITA</MenuItem>
                        <MenuItem value={3166501}>SERRA AZUL DE MINAS</MenuItem>
                        <MenuItem value={3166709}>SERRA DOS AIMORES</MenuItem>
                        <MenuItem value={3166808}>SERRA DO SALITRE</MenuItem>
                        <MenuItem value={3166956}>SERRANOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={3167301}>SILVEIRANIA</MenuItem>
                        <MenuItem value={3167400}>SILVIANOPOLIS</MenuItem>
                        <MenuItem value={3167509}>SIMAO PEREIRA</MenuItem>
                        <MenuItem value={3167707}>SOBRALIA</MenuItem>
                        <MenuItem value={3167905}>TABULEIRO</MenuItem>
                        <MenuItem value={3168002}>TAIOBEIRAS</MenuItem>
                        <MenuItem value={3168051}>TAPARUBA</MenuItem>
                        <MenuItem value={3168309}>TAQUARACU DE MINAS</MenuItem>
                        <MenuItem value={3168606}>TEOFILO OTONI</MenuItem>
                        <MenuItem value={3168804}>TIRADENTES</MenuItem>
                        <MenuItem value={3168903}>TIROS</MenuItem>
                        <MenuItem value={3169000}>TOCANTINS</MenuItem>
                        <MenuItem value={3169208}>TOMBOS</MenuItem>
                        <MenuItem value={3169356}>TRES MARIAS</MenuItem>
                        <MenuItem value={3169703}>TURMALINA</MenuItem>
                        <MenuItem value={3169802}>TURVOLANDIA</MenuItem>
                        <MenuItem value={3169901}>UBA</MenuItem>
                        <MenuItem value={3170008}>UBAI</MenuItem>
                        <MenuItem value={3170206}>UBERLANDIA</MenuItem>
                        <MenuItem value={3170503}>URUCANIA</MenuItem>
                        <MenuItem value={3170529}>URUCUIA</MenuItem>
                        <MenuItem value={3170651}>VARGEM GRANDE DO RIO PARDO</MenuItem>
                        <MenuItem value={3170750}>VARJAO DE MINAS</MenuItem>
                        <MenuItem value={3170800}>VARZEA DA PALMA</MenuItem>
                        <MenuItem value={3171030}>VERDELANDIA</MenuItem>
                        <MenuItem value={3171071}>VEREDINHA</MenuItem>
                        <MenuItem value={3171402}>VIEIRAS</MenuItem>
                        <MenuItem value={3171501}>MATHIAS LOBATO</MenuItem>
                        <MenuItem value={3171709}>VIRGINIA</MenuItem>
                        <MenuItem value={3171907}>VIRGOLANDIA</MenuItem>
                        <MenuItem value={3100302}>ABRE CAMPO</MenuItem>
                        <MenuItem value={3100401}>ACAIACA</MenuItem>
                        <MenuItem value={3100500}>ACUCENA</MenuItem>
                        <MenuItem value={3100609}>AGUA BOA</MenuItem>
                        <MenuItem value={3100708}>AGUA COMPRIDA</MenuItem>
                        <MenuItem value={3100807}>AGUANIL</MenuItem>
                        <MenuItem value={3100906}>AGUAS FORMOSAS</MenuItem>
                        <MenuItem value={3101102}>AIMORES</MenuItem>
                        <MenuItem value={3101300}>ALAGOA</MenuItem>
                        <MenuItem value={3101706}>ALMENARA</MenuItem>
                        <MenuItem value={3101805}>ALPERCATA</MenuItem>
                        <MenuItem value={3101904}>ALPINOPOLIS</MenuItem>
                        <MenuItem value={3102100}>ALTO RIO DOCE</MenuItem>
                        <MenuItem value={3102209}>ALVARENGA</MenuItem>
                        <MenuItem value={3102506}>AMPARO DO SERRA</MenuItem>
                        <MenuItem value={3102704}>CACHOEIRA DE PAJEU</MenuItem>
                        <MenuItem value={3102803}>ANDRELANDIA</MenuItem>
                        <MenuItem value={3102902}>ANTONIO CARLOS</MenuItem>
                        <MenuItem value={3103108}>ANTONIO PRADO DE MINAS</MenuItem>
                        <MenuItem value={3103207}>ARACAI</MenuItem>
                        <MenuItem value={3103405}>ARACUAI</MenuItem>
                        <MenuItem value={3103504}>ARAGUARI</MenuItem>
                        <MenuItem value={3103801}>ARAPUA</MenuItem>
                        <MenuItem value={3103900}>ARAUJOS</MenuItem>
                        <MenuItem value={3104106}>ARCEBURGO</MenuItem>
                        <MenuItem value={3104403}>ARGIRITA</MenuItem>
                        <MenuItem value={3104452}>ARICANDUVA</MenuItem>
                        <MenuItem value={3104601}>ASTOLFO DUTRA</MenuItem>
                        <MenuItem value={3104809}>AUGUSTO DE LIMA</MenuItem>
                        <MenuItem value={3104908}>BAEPENDI</MenuItem>
                        <MenuItem value={3105400}>BARAO DE COCAIS</MenuItem>
                        <MenuItem value={3105509}>BARAO DE MONTE ALTO</MenuItem>
                        <MenuItem value={3106101}>BELMIRO BRAGA</MenuItem>
                        <MenuItem value={3106309}>BELO ORIENTE</MenuItem>
                        <MenuItem value={3106606}>BERTOPOLIS</MenuItem>
                        <MenuItem value={3106655}>BERIZAL</MenuItem>
                        <MenuItem value={3106903}>BICAS</MenuItem>
                        <MenuItem value={3107000}>BIQUINHAS</MenuItem>
                        <MenuItem value={3107307}>BOCAIUVA</MenuItem>
                        <MenuItem value={3107604}>BOM JESUS DA PENHA</MenuItem>
                        <MenuItem value={3107802}>BOM JESUS DO GALHO</MenuItem>
                        <MenuItem value={3108008}>BOM SUCESSO</MenuItem>
                        <MenuItem value={3108107}>BONFIM</MenuItem>
                        <MenuItem value={3108305}>BORDA DA MATA</MenuItem>
                        <MenuItem value={3108404}>BOTELHOS</MenuItem>
                        <MenuItem value={3108552}>BRASILANDIA DE MINAS</MenuItem>
                        <MenuItem value={3108602}>BRASILIA DE MINAS</MenuItem>
                        <MenuItem value={3109105}>BUENO BRANDAO</MenuItem>
                        <MenuItem value={3109303}>BURITIS</MenuItem>
                        <MenuItem value={3109402}>BURITIZEIRO</MenuItem>
                        <MenuItem value={3109808}>CACHOEIRA DOURADA</MenuItem>
                        <MenuItem value={3109907}>CAETANOPOLIS</MenuItem>
                        <MenuItem value={3110103}>CAIANA</MenuItem>
                        <MenuItem value={3110509}>CAMANDUCAIA</MenuItem>
                        <MenuItem value={3110608}>CAMBUI</MenuItem>
                        <MenuItem value={3110806}>CAMPANARIO</MenuItem>
                        <MenuItem value={3111101}>CAMPINA VERDE</MenuItem>
                        <MenuItem value={3111150}>CAMPO AZUL</MenuItem>
                        <MenuItem value={3111200}>CAMPO BELO</MenuItem>
                        <MenuItem value={3111309}>CAMPO DO MEIO</MenuItem>
                        <MenuItem value={3111408}>CAMPO FLORIDO</MenuItem>
                        <MenuItem value={3111507}>CAMPOS ALTOS</MenuItem>
                        <MenuItem value={3111606}>CAMPOS GERAIS</MenuItem>
                        <MenuItem value={3111804}>CANAPOLIS</MenuItem>
                        <MenuItem value={3111903}>CANA VERDE</MenuItem>
                        <MenuItem value={3112059}>CANTAGALO</MenuItem>
                        <MenuItem value={3112208}>CAPELA NOVA</MenuItem>
                        <MenuItem value={3112505}>CAPIM BRANCO</MenuItem>
                        <MenuItem value={3112604}>CAPINOPOLIS</MenuItem>
                        <MenuItem value={3112802}>CAPITOLIO</MenuItem>
                        <MenuItem value={3113305}>CARANGOLA</MenuItem>
                        <MenuItem value={3113503}>CARBONITA</MenuItem>
                        <MenuItem value={3113800}>CARMESIA</MenuItem>
                        <MenuItem value={3114006}>CARMO DA MATA</MenuItem>
                        <MenuItem value={3114204}>CARMO DO CAJURU</MenuItem>
                        <MenuItem value={3114402}>CARMO DO RIO CLARO</MenuItem>
                        <MenuItem value={3114501}>CARMOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={3114550}>CARNEIRINHO</MenuItem>
                        <MenuItem value={3114600}>CARRANCAS</MenuItem>
                        <MenuItem value={3114709}>CARVALHOPOLIS</MenuItem>
                        <MenuItem value={3114907}>CASA GRANDE</MenuItem>
                        <MenuItem value={3115003}>CASCALHO RICO</MenuItem>
                        <MenuItem value={3115102}>CASSIA</MenuItem>
                        <MenuItem value={3115300}>CATAGUASES</MenuItem>
                        <MenuItem value={3115409}>CATAS ALTAS DA NORUEGA</MenuItem>
                        <MenuItem value={3115706}>CENTRAL DE MINAS</MenuItem>
                        <MenuItem value={3116001}>CHALE</MenuItem>
                        <MenuItem value={3116100}>CHAPADA DO NORTE</MenuItem>
                        <MenuItem value={3116159}>CHAPADA GAUCHA</MenuItem>
                        <MenuItem value={3116704}>COIMBRA</MenuItem>
                        <MenuItem value={3117108}>CONCEICAO DA APARECIDA</MenuItem>
                        <MenuItem value={3117405}>CONCEICAO DE IPANEMA</MenuItem>
                        <MenuItem value={3117836}>CONEGO MARINHO</MenuItem>
                        <MenuItem value={3117876}>CONFINS</MenuItem>
                        <MenuItem value={3117900}>CONGONHAL</MenuItem>
                        <MenuItem value={3118205}>CONQUISTA</MenuItem>
                        <MenuItem value={3118304}>CONSELHEIRO LAFAIETE</MenuItem>
                        <MenuItem value={3119005}>CORDISLANDIA</MenuItem>
                        <MenuItem value={3119104}>CORINTO</MenuItem>
                        <MenuItem value={3119203}>COROACI</MenuItem>
                        <MenuItem value={3119302}>COROMANDEL</MenuItem>
                        <MenuItem value={3119401}>CORONEL FABRICIANO</MenuItem>
                        <MenuItem value={3119500}>CORONEL MURTA</MenuItem>
                        <MenuItem value={3119609}>CORONEL PACHECO</MenuItem>
                        <MenuItem value={3119708}>CORONEL XAVIER CHAVES</MenuItem>
                        <MenuItem value={3119807}>CORREGO DANTA</MenuItem>
                        <MenuItem value={3119955}>CORREGO FUNDO</MenuItem>
                        <MenuItem value={3120151}>CRISOLITA</MenuItem>
                        <MenuItem value={3120409}>CRISTIANO OTONI</MenuItem>
                        <MenuItem value={3120508}>CRISTINA</MenuItem>
                        <MenuItem value={3120706}>CRUZEIRO DA FORTALEZA</MenuItem>
                        <MenuItem value={3120805}>CRUZILIA</MenuItem>
                        <MenuItem value={3120904}>CURVELO</MenuItem>
                        <MenuItem value={3121100}>DELFIM MOREIRA</MenuItem>
                        <MenuItem value={3121258}>DELTA</MenuItem>
                        <MenuItem value={3121407}>DESTERRO DE ENTRE RIOS</MenuItem>
                        <MenuItem value={3121704}>DIOGO DE VASCONCELOS</MenuItem>
                        <MenuItem value={3121902}>DIVINESIA</MenuItem>
                        <MenuItem value={3122009}>DIVINO</MenuItem>
                        <MenuItem value={3122207}>DIVINOLANDIA DE MINAS</MenuItem>
                        <MenuItem value={3122355}>DIVISA ALEGRE</MenuItem>
                        <MenuItem value={3122405}>DIVISA NOVA</MenuItem>
                        <MenuItem value={3122470}>DOM BOSCO</MenuItem>
                        <MenuItem value={3122504}>DOM CAVATI</MenuItem>
                        <MenuItem value={3123106}>DORES DE GUANHAES</MenuItem>
                        <MenuItem value={3123205}>DORES DO INDAIA</MenuItem>
                        <MenuItem value={3123304}>DORES DO TURVO</MenuItem>
                        <MenuItem value={3123601}>ELOI MENDES</MenuItem>
                        <MenuItem value={3123700}>ENGENHEIRO CALDAS</MenuItem>
                        <MenuItem value={3123809}>ENGENHEIRO NAVARRO</MenuItem>
                        <MenuItem value={3123908}>ENTRE RIOS DE MINAS</MenuItem>
                        <MenuItem value={3124005}>ERVALIA</MenuItem>
                        <MenuItem value={3124302}>ESPINOSA</MenuItem>
                        <MenuItem value={3124401}>ESPIRITO SANTO DO DOURADO</MenuItem>
                        <MenuItem value={3124500}>ESTIVA</MenuItem>
                        <MenuItem value={3124906}>EUGENOPOLIS</MenuItem>
                        <MenuItem value={3125309}>FARIA LEMOS</MenuItem>
                        <MenuItem value={3125408}>FELICIO DOS SANTOS</MenuItem>
                        <MenuItem value={3125507}>SAO GONCALO DO RIO PRETO</MenuItem>
                        <MenuItem value={3125705}>FELIXLANDIA</MenuItem>
                        <MenuItem value={3125804}>FERNANDES TOURINHO</MenuItem>
                        <MenuItem value={3126109}>FORMIGA</MenuItem>
                        <MenuItem value={3126208}>FORMOSO</MenuItem>
                        <MenuItem value={3126505}>FRANCISCO BADARO</MenuItem>
                        <MenuItem value={3126752}>FRANCISCOPOLIS</MenuItem>
                        <MenuItem value={3126802}>FREI GASPAR</MenuItem>
                        <MenuItem value={3126901}>FREI INOCENCIO</MenuItem>
                        <MenuItem value={3126950}>FREI LAGONEGRO</MenuItem>
                        <MenuItem value={3127008}>FRONTEIRA</MenuItem>
                        <MenuItem value={3127057}>FRONTEIRA DOS VALES</MenuItem>
                        <MenuItem value={3127107}>FRUTAL</MenuItem>
                        <MenuItem value={3127206}>FUNILANDIA</MenuItem>
                        <MenuItem value={3127305}>GALILEIA</MenuItem>
                        <MenuItem value={3127339}>GAMELEIRAS</MenuItem>
                        <MenuItem value={3127354}>GLAUCILANDIA</MenuItem>
                        <MenuItem value={3127503}>GONZAGA</MenuItem>
                        <MenuItem value={3127602}>GOUVEIA</MenuItem>
                        <MenuItem value={3127701}>GOVERNADOR VALADARES</MenuItem>
                        <MenuItem value={3127800}>GRAO MOGOL</MenuItem>
                        <MenuItem value={3127909}>GRUPIARA</MenuItem>
                        <MenuItem value={3128006}>GUANHAES</MenuItem>
                        <MenuItem value={3128253}>GUARACIAMA</MenuItem>
                        <MenuItem value={3128303}>GUARANESIA</MenuItem>
                        <MenuItem value={3128402}>GUARANI</MenuItem>
                        <MenuItem value={3128600}>GUARDA-MOR</MenuItem>
                        <MenuItem value={3129202}>HELIODORA</MenuItem>
                        <MenuItem value={3129301}>IAPU</MenuItem>
                        <MenuItem value={3129400}>IBERTIOGA</MenuItem>
                        <MenuItem value={3129509}>IBIA</MenuItem>
                        <MenuItem value={3129905}>IBITIURA DE MINAS</MenuItem>
                        <MenuItem value={3130051}>ICARAI DE MINAS</MenuItem>
                        <MenuItem value={3130101}>IGARAPE</MenuItem>
                        <MenuItem value={3130200}>IGARATINGA</MenuItem>
                        <MenuItem value={3130309}>IGUATAMA</MenuItem>
                        <MenuItem value={3130606}>INCONFIDENTES</MenuItem>
                        <MenuItem value={3130705}>INDIANOPOLIS</MenuItem>
                        <MenuItem value={3130804}>INGAI</MenuItem>
                        <MenuItem value={3130903}>INHAPIM</MenuItem>
                        <MenuItem value={3131000}>INHAUMA</MenuItem>
                        <MenuItem value={3131208}>IPANEMA</MenuItem>
                        <MenuItem value={3131604}>IRAI DE MINAS</MenuItem>
                        <MenuItem value={3131703}>ITABIRA</MenuItem>
                        <MenuItem value={3131802}>ITABIRINHA</MenuItem>
                        <MenuItem value={3131901}>ITABIRITO</MenuItem>
                        <MenuItem value={3132206}>ITAGUARA</MenuItem>
                        <MenuItem value={3132305}>ITAIPE</MenuItem>
                        <MenuItem value={3132404}>ITAJUBA</MenuItem>
                        <MenuItem value={3132602}>ITAMARATI DE MINAS</MenuItem>
                        <MenuItem value={3132909}>ITAMOGI</MenuItem>
                        <MenuItem value={3133303}>ITAOBIM</MenuItem>
                        <MenuItem value={3133501}>ITAPECERICA</MenuItem>
                        <MenuItem value={3133808}>ITAUNA</MenuItem>
                        <MenuItem value={3133907}>ITAVERAVA</MenuItem>
                        <MenuItem value={3134004}>ITINGA</MenuItem>
                        <MenuItem value={3134103}>ITUETA</MenuItem>
                        <MenuItem value={3134202}>ITUIUTABA</MenuItem>
                        <MenuItem value={3134400}>ITURAMA</MenuItem>
                        <MenuItem value={3134509}>ITUTINGA</MenuItem>
                        <MenuItem value={3134608}>JABOTICATUBAS</MenuItem>
                        <MenuItem value={3134707}>JACINTO</MenuItem>
                        <MenuItem value={3135001}>JAGUARACU</MenuItem>
                        <MenuItem value={3135100}>JANAUBA</MenuItem>
                        <MenuItem value={3135209}>JANUARIA</MenuItem>
                        <MenuItem value={3135308}>JAPARAIBA</MenuItem>
                        <MenuItem value={3135407}>JECEABA</MenuItem>
                        <MenuItem value={3135605}>JEQUITAI</MenuItem>
                        <MenuItem value={3136207}>JOAO MONLEVADE</MenuItem>
                        <MenuItem value={3136405}>JOAQUIM FELICIO</MenuItem>
                        <MenuItem value={3136553}>JOSE RAYDAN</MenuItem>
                        <MenuItem value={3136579}>JOSENOPOLIS</MenuItem>
                        <MenuItem value={3136603}>NOVA UNIAO</MenuItem>
                        <MenuItem value={3136652}>JUATUBA</MenuItem>
                        <MenuItem value={3136702}>JUIZ DE FORA</MenuItem>
                        <MenuItem value={3136801}>JURAMENTO</MenuItem>
                        <MenuItem value={3136900}>JURUAIA</MenuItem>
                        <MenuItem value={3137007}>LADAINHA</MenuItem>
                        <MenuItem value={3137205}>LAGOA DA PRATA</MenuItem>
                        <MenuItem value={3137304}>LAGOA DOS PATOS</MenuItem>
                        <MenuItem value={3137536}>LAGOA GRANDE</MenuItem>
                        <MenuItem value={3137700}>LAJINHA</MenuItem>
                        <MenuItem value={3137809}>LAMBARI</MenuItem>
                        <MenuItem value={3137908}>LAMIM</MenuItem>
                        <MenuItem value={3138302}>LEANDRO FERREIRA</MenuItem>
                        <MenuItem value={3138351}>LEME DO PRADO</MenuItem>
                        <MenuItem value={3138401}>LEOPOLDINA</MenuItem>
                        <MenuItem value={3138500}>LIBERDADE</MenuItem>
                        <MenuItem value={3138609}>LIMA DUARTE</MenuItem>
                        <MenuItem value={3138625}>LIMEIRA DO OESTE</MenuItem>
                        <MenuItem value={3138807}>LUZ</MenuItem>
                        <MenuItem value={3139201}>MALACACHETA</MenuItem>
                        <MenuItem value={3139250}>MAMONAS</MenuItem>
                        <MenuItem value={3139409}>MANHUACU</MenuItem>
                        <MenuItem value={3139508}>MANHUMIRIM</MenuItem>
                        <MenuItem value={3139706}>MARAVILHAS</MenuItem>
                        <MenuItem value={3139805}>MAR DE ESPANHA</MenuItem>
                        <MenuItem value={3139904}>MARIA DA FE</MenuItem>
                        <MenuItem value={3140001}>MARIANA</MenuItem>
                        <MenuItem value={3140159}>MARIO CAMPOS</MenuItem>
                        <MenuItem value={3140407}>MARMELOPOLIS</MenuItem>
                        <MenuItem value={3140530}>MARTINS SOARES</MenuItem>
                        <MenuItem value={3140704}>MATEUS LEME</MenuItem>
                        <MenuItem value={3141207}>MATUTINA</MenuItem>
                        <MenuItem value={3141504}>MENDES PIMENTEL</MenuItem>
                        <MenuItem value={3141900}>MINDURI</MenuItem>
                        <MenuItem value={3142007}>MIRABELA</MenuItem>
                        <MenuItem value={3142254}>MIRAVANIA</MenuItem>
                        <MenuItem value={3142403}>MOEMA</MenuItem>
                        <MenuItem value={3142700}>MONTALVANIA</MenuItem>
                        <MenuItem value={3142908}>MONTE AZUL</MenuItem>
                        <MenuItem value={3143005}>MONTE BELO</MenuItem>
                        <MenuItem value={3143104}>MONTE CARMELO</MenuItem>
                        <MenuItem value={3143153}>MONTE FORMOSO</MenuItem>
                        <MenuItem value={3143450}>MONTEZUMA</MenuItem>
                        <MenuItem value={3143500}>MORADA NOVA DE MINAS</MenuItem>
                        <MenuItem value={3143609}>MORRO DA GARCA</MenuItem>
                        <MenuItem value={3143906}>MURIAE</MenuItem>
                        <MenuItem value={3144201}>NACIP RAYDAN</MenuItem>
                        <MenuItem value={3144300}>NANUQUE</MenuItem>
                        <MenuItem value={3144375}>NATALANDIA</MenuItem>
                        <MenuItem value={3144508}>NAZARENO</MenuItem>
                        <MenuItem value={3144607}>NEPOMUCENO</MenuItem>
                        <MenuItem value={3144706}>NOVA ERA</MenuItem>
                        <MenuItem value={3144904}>NOVA MODICA</MenuItem>
                        <MenuItem value={3145059}>NOVA PORTEIRINHA</MenuItem>
                        <MenuItem value={3145109}>NOVA RESENDE</MenuItem>
                        <MenuItem value={3145372}>NOVORIZONTE</MenuItem>
                        <MenuItem value={3145455}>OLHOS-D'AGUA</MenuItem>
                        <MenuItem value={3145505}>OLIMPIO NORONHA</MenuItem>
                        <MenuItem value={3145851}>ORATORIOS</MenuItem>
                        <MenuItem value={3146008}>OURO FINO</MenuItem>
                        <MenuItem value={3146206}>OURO VERDE DE MINAS</MenuItem>
                        <MenuItem value={3146255}>PADRE CARVALHO</MenuItem>
                        <MenuItem value={3146602}>PAIVA</MenuItem>
                        <MenuItem value={3146701}>PALMA</MenuItem>
                        <MenuItem value={3146750}>PALMOPOLIS</MenuItem>
                        <MenuItem value={3146909}>PAPAGAIOS</MenuItem>
                        <MenuItem value={3147006}>PARACATU</MenuItem>
                        <MenuItem value={3147709}>PASSA TEMPO</MenuItem>
                        <MenuItem value={3147808}>PASSA VINTE</MenuItem>
                        <MenuItem value={3147907}>PASSOS</MenuItem>
                        <MenuItem value={3147956}>PATIS</MenuItem>
                        <MenuItem value={3148004}>PATOS DE MINAS</MenuItem>
                        <MenuItem value={3148103}>PATROCINIO</MenuItem>
                        <MenuItem value={3148202}>PATROCINIO DO MURIAE</MenuItem>
                        <MenuItem value={3148301}>PAULA CANDIDO</MenuItem>
                        <MenuItem value={3148400}>PAULISTAS</MenuItem>
                        <MenuItem value={3148756}>PEDRA BONITA</MenuItem>
                        <MenuItem value={3149002}>PEDRA DOURADA</MenuItem>
                        <MenuItem value={3149150}>PEDRAS DE MARIA DA CRUZ</MenuItem>
                        <MenuItem value={3149200}>PEDRINOPOLIS</MenuItem>
                        <MenuItem value={3149408}>PEDRO TEIXEIRA</MenuItem>
                        <MenuItem value={3149507}>PEQUERI</MenuItem>
                        <MenuItem value={3149606}>PEQUI</MenuItem>
                        <MenuItem value={3149903}>PERDOES</MenuItem>
                        <MenuItem value={3149952}>PERIQUITO</MenuItem>
                        <MenuItem value={3150000}>PESCADOR</MenuItem>
                        <MenuItem value={3150109}>PIAU</MenuItem>
                        <MenuItem value={3150406}>PIEDADE DOS GERAIS</MenuItem>
                        <MenuItem value={3150505}>PIMENTA</MenuItem>
                        <MenuItem value={3150539}>PINGO-D'AGUA</MenuItem>
                        <MenuItem value={3150570}>PINTOPOLIS</MenuItem>
                        <MenuItem value={3150604}>PIRACEMA</MenuItem>
                        <MenuItem value={3150703}>PIRAJUBA</MenuItem>
                        <MenuItem value={3150901}>PIRANGUCU</MenuItem>
                        <MenuItem value={3151008}>PIRANGUINHO</MenuItem>
                        <MenuItem value={3151909}>POCRANE</MenuItem>
                        <MenuItem value={3152006}>POMPEU</MenuItem>
                        <MenuItem value={3152131}>PONTO CHIQUE</MenuItem>
                        <MenuItem value={3152170}>PONTO DOS VOLANTES</MenuItem>
                        <MenuItem value={3152303}>PORTO FIRME</MenuItem>
                        <MenuItem value={3152808}>PRATA</MenuItem>
                        <MenuItem value={3153103}>PRESIDENTE BERNARDES</MenuItem>
                        <MenuItem value={3153509}>ALTO JEQUITIBA</MenuItem>
                        <MenuItem value={3153608}>PRUDENTE DE MORAIS</MenuItem>
                        <MenuItem value={3154101}>RECREIO</MenuItem>
                        <MenuItem value={3154309}>RESPLENDOR</MenuItem>
                        <MenuItem value={3154606}>RIBEIRAO DAS NEVES</MenuItem>
                        <MenuItem value={3154903}>RIO CASCA</MenuItem>
                        <MenuItem value={3155009}>RIO DOCE</MenuItem>
                        <MenuItem value={3155108}>RIO DO PRADO</MenuItem>
                        <MenuItem value={3155207}>RIO ESPERA</MenuItem>
                        <MenuItem value={3155306}>RIO MANSO</MenuItem>
                        <MenuItem value={3155702}>RIO PIRACICABA</MenuItem>
                        <MenuItem value={3155900}>RIO PRETO</MenuItem>
                        <MenuItem value={3156007}>RIO VERMELHO</MenuItem>
                        <MenuItem value={3156106}>RITAPOLIS</MenuItem>
                        <MenuItem value={3156205}>ROCHEDO DE MINAS</MenuItem>
                        <MenuItem value={3156502}>RUBELITA</MenuItem>
                        <MenuItem value={3156601}>RUBIM</MenuItem>
                        <MenuItem value={3157252}>SANTA BARBARA DO LESTE</MenuItem>
                        <MenuItem value={3157336}>SANTA CRUZ DE MINAS</MenuItem>
                        <MenuItem value={3157377}>SANTA CRUZ DE SALINAS</MenuItem>
                        <MenuItem value={3157401}>SANTA CRUZ DO ESCALVADO</MenuItem>
                        <MenuItem value={3157609}>SANTA FE DE MINAS</MenuItem>
                        <MenuItem value={3157708}>SANTA JULIANA</MenuItem>
                        <MenuItem value={3157807}>SANTA LUZIA</MenuItem>
                        <MenuItem value={3158102}>SANTA MARIA DO SALTO</MenuItem>
                        <MenuItem value={3158201}>SANTA MARIA DO SUACUI</MenuItem>
                        <MenuItem value={3158607}>SANTANA DO DESERTO</MenuItem>
                        <MenuItem value={3158706}>SANTANA DO GARAMBEU</MenuItem>
                        <MenuItem value={3158805}>SANTANA DO JACARE</MenuItem>
                        <MenuItem value={3159100}>SANTANA DOS MONTES</MenuItem>
                        <MenuItem value={3159209}>SANTA RITA DE CALDAS</MenuItem>
                        <MenuItem value={3159605}>SANTA RITA DO SAPUCAI</MenuItem>
                        <MenuItem value={3159704}>SANTA ROSA DA SERRA</MenuItem>
                        <MenuItem value={3159803}>SANTA VITORIA</MenuItem>
                        <MenuItem value={3159902}>SANTO ANTONIO DO AMPARO</MenuItem>
                        <MenuItem value={3160009}>SANTO ANTONIO DO AVENTUREIRO</MenuItem>
                        <MenuItem value={3160108}>SANTO ANTONIO DO GRAMA</MenuItem>
                        <MenuItem value={3160207}>SANTO ANTONIO DO ITAMBE</MenuItem>
                        <MenuItem value={3160603}>SANTO HIPOLITO</MenuItem>
                        <MenuItem value={3160702}>SANTOS DUMONT</MenuItem>
                        <MenuItem value={3160801}>SAO BENTO ABADE</MenuItem>
                        <MenuItem value={3160900}>SAO BRAS DO SUACUI</MenuItem>
                        <MenuItem value={3160959}>SAO DOMINGOS DAS DORES</MenuItem>
                        <MenuItem value={3161304}>SAO FRANCISCO DE SALES</MenuItem>
                        <MenuItem value={3161403}>SAO FRANCISCO DO GLORIA</MenuItem>
                        <MenuItem value={3161650}>SAO GERALDO DO BAIXIO</MenuItem>
                        <MenuItem value={3161809}>SAO GONCALO DO PARA</MenuItem>
                        <MenuItem value={3161908}>SAO GONCALO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={3162104}>SAO GOTARDO</MenuItem>
                        <MenuItem value={3162203}>SAO JOAO BATISTA DO GLORIA</MenuItem>
                        <MenuItem value={3162252}>SAO JOAO DA LAGOA</MenuItem>
                        <MenuItem value={3162302}>SAO JOAO DA MATA</MenuItem>
                        <MenuItem value={3162401}>SAO JOAO DA PONTE</MenuItem>
                        <MenuItem value={3162450}>SAO JOAO DAS MISSOES</MenuItem>
                        <MenuItem value={3162559}>SAO JOAO DO MANHUACU</MenuItem>
                        <MenuItem value={3162575}>SAO JOAO DO MANTENINHA</MenuItem>
                        <MenuItem value={3162609}>SAO JOAO DO ORIENTE</MenuItem>
                        <MenuItem value={3162807}>SAO JOAO EVANGELISTA</MenuItem>
                        <MenuItem value={3162906}>SAO JOAO NEPOMUCENO</MenuItem>
                        <MenuItem value={3162922}>SAO JOAQUIM DE BICAS</MenuItem>
                        <MenuItem value={3162955}>SAO JOSE DA LAPA</MenuItem>
                        <MenuItem value={3163706}>SAO LOURENCO</MenuItem>
                        <MenuItem value={3163904}>SAO PEDRO DA UNIAO</MenuItem>
                        <MenuItem value={3164001}>SAO PEDRO DOS FERROS</MenuItem>
                        <MenuItem value={3164431}>SAO SEBASTIAO DA VARGEM ALEGRE</MenuItem>
                        <MenuItem value={3164472}>SAO SEBASTIAO DO ANTA</MenuItem>
                        <MenuItem value={3164506}>SAO SEBASTIAO DO MARANHAO</MenuItem>
                        <MenuItem value={3164605}>SAO SEBASTIAO DO OESTE</MenuItem>
                        <MenuItem value={3164704}>SAO SEBASTIAO DO PARAISO</MenuItem>
                        <MenuItem value={3164902}>SAO SEBASTIAO DO RIO VERDE</MenuItem>
                        <MenuItem value={3165008}>SAO TIAGO</MenuItem>
                        <MenuItem value={3165107}>SAO TOMAS DE AQUINO</MenuItem>
                        <MenuItem value={3165305}>SAO VICENTE DE MINAS</MenuItem>
                        <MenuItem value={3165404}>SAPUCAI-MIRIM</MenuItem>
                        <MenuItem value={3165537}>SARZEDO</MenuItem>
                        <MenuItem value={3165552}>SETUBINHA</MenuItem>
                        <MenuItem value={3165560}>SEM-PEIXE</MenuItem>
                        <MenuItem value={3165578}>SENADOR AMARAL</MenuItem>
                        <MenuItem value={3165602}>SENADOR CORTES</MenuItem>
                        <MenuItem value={3165701}>SENADOR FIRMINO</MenuItem>
                        <MenuItem value={3165800}>SENADOR JOSE BENTO</MenuItem>
                        <MenuItem value={3165909}>SENADOR MODESTINO GONCALVES</MenuItem>
                        <MenuItem value={3166006}>SENHORA DE OLIVEIRA</MenuItem>
                        <MenuItem value={3166204}>SENHORA DOS REMEDIOS</MenuItem>
                        <MenuItem value={3166402}>SERITINGA</MenuItem>
                        <MenuItem value={3166600}>SERRA DA SAUDADE</MenuItem>
                        <MenuItem value={3166907}>SERRANIA</MenuItem>
                        <MenuItem value={3167004}>SERRANOS</MenuItem>
                        <MenuItem value={3167103}>SERRO</MenuItem>
                        <MenuItem value={3167202}>SETE LAGOAS</MenuItem>
                        <MenuItem value={3167608}>SIMONESIA</MenuItem>
                        <MenuItem value={3167806}>SOLEDADE DE MINAS</MenuItem>
                        <MenuItem value={3168101}>TAPIRA</MenuItem>
                        <MenuItem value={3168200}>TAPIRAI</MenuItem>
                        <MenuItem value={3168408}>TARUMIRIM</MenuItem>
                        <MenuItem value={3168507}>TEIXEIRAS</MenuItem>
                        <MenuItem value={3168705}>TIMOTEO</MenuItem>
                        <MenuItem value={3169059}>TOCOS DO MOJI</MenuItem>
                        <MenuItem value={3169109}>TOLEDO</MenuItem>
                        <MenuItem value={3169307}>TRES CORACOES</MenuItem>
                        <MenuItem value={3169406}>TRES PONTAS</MenuItem>
                        <MenuItem value={3169505}>TUMIRITINGA</MenuItem>
                        <MenuItem value={3169604}>TUPACIGUARA</MenuItem>
                        <MenuItem value={3170057}>UBAPORANGA</MenuItem>
                        <MenuItem value={3170107}>UBERABA</MenuItem>
                        <MenuItem value={3170305}>UMBURATIBA</MenuItem>
                        <MenuItem value={3170404}>UNAI</MenuItem>
                        <MenuItem value={3170438}>UNIAO DE MINAS</MenuItem>
                        <MenuItem value={3170479}>URUANA DE MINAS</MenuItem>
                        <MenuItem value={3170578}>VARGEM ALEGRE</MenuItem>
                        <MenuItem value={3170602}>VARGEM BONITA</MenuItem>
                        <MenuItem value={3170701}>VARGINHA</MenuItem>
                        <MenuItem value={3170909}>VARZELANDIA</MenuItem>
                        <MenuItem value={3171006}>VAZANTE</MenuItem>
                        <MenuItem value={3171105}>VERISSIMO</MenuItem>
                        <MenuItem value={3171154}>VERMELHO NOVO</MenuItem>
                        <MenuItem value={3171204}>VESPASIANO</MenuItem>
                        <MenuItem value={3171303}>VICOSA</MenuItem>
                        <MenuItem value={3171600}>VIRGEM DA LAPA</MenuItem>
                        <MenuItem value={3171808}>VIRGINOPOLIS</MenuItem>
                        <MenuItem value={3172004}>VISCONDE DO RIO BRANCO</MenuItem>
                        <MenuItem value={3172103}>VOLTA GRANDE</MenuItem>
                        <MenuItem value={3172202}>WENCESLAU BRAZ</MenuItem>

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
                        <MenuItem value={10}>CAMARA MUNICIPAL DE ABRE CAMPO</MenuItem>
                        <MenuItem value={1000}>PREFEITURA MUNICIPAL DE ITAVERAVA</MenuItem>
                        <MenuItem value={1002}>CAMARA MUNICIPAL DE ITINGA</MenuItem>
                        <MenuItem value={1003}>CAMARA MUNICIPAL DE ITUETA</MenuItem>
                        <MenuItem value={1005}>CAMARA MUNICIPAL DE ITUIUTABA</MenuItem>
                        <MenuItem value={1007}>SUPERINTENDENCIA DE AGUA E ESGOTOS DE ITUIUTABA</MenuItem>
                        <MenuItem value={1009}>CAIXA DE APOSENTADORIA DOS SERVIDORES DE ITUIUTABA-CASMI</MenuItem>
                        <MenuItem value={1011}>CAMARA M. ITUMIRIM</MenuItem>
                        <MenuItem value={1012}>PREFEITURA M. DE ITUMIRIM</MenuItem>
                        <MenuItem value={1013}>MUNICIPIO DE ITURAMA CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1014}>PREFEITURA MUNICIPAL DE ITURAMA</MenuItem>
                        <MenuItem value={1015}>CAMARA MUNICIPAL DE ITUTINGA</MenuItem>
                        <MenuItem value={1016}>PREFEITURA MUNICIPAL DE ITUTINGA</MenuItem>
                        <MenuItem value={1019}>FUNDACAO MUNICIPAL DE CULTURA</MenuItem>
                        <MenuItem value={102}>CAMARA MUNICIPAL DE ARAPORA</MenuItem>
                        <MenuItem value={1021}>CAMARA MUNICIPAL DE JACINTO</MenuItem>
                        <MenuItem value={1022}>CAMARA MUNICIPAL DE JACUI</MenuItem>
                        <MenuItem value={1023}>PREFEITURA MUNICIPAL DE JACUI</MenuItem>
                        <MenuItem value={1026}>CAMARA MUNICIPAL DE JAGUARACU</MenuItem>
                        <MenuItem value={1027}>PREFEITURA MUNICIPAL DE JAGUARACU</MenuItem>
                        <MenuItem value={1029}>PREFEITURA MUNICIPAL DE JAIBA</MenuItem>
                        <MenuItem value={1030}>CAMARA MUNICIPAL DE JAMPRUCA</MenuItem>
                        <MenuItem value={1031}>PREFEITURA MUNICIPAL DE JAMPRUCA</MenuItem>
                        <MenuItem value={1036}>FUNDACAO HOSPITALAR DE JANAUBA</MenuItem>
                        <MenuItem value={104}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO DE ARAPORA</MenuItem>
                        <MenuItem value={1040}>CAMARA MUNICIPAL DE JAPARAIBA</MenuItem>
                        <MenuItem value={1042}>FUNDO DE PREVID.SOCIAL DOS FUNCION.PUBLICOS MUNICIPAIS DE JAPARAIBA - MG</MenuItem>
                        <MenuItem value={1043}>CAMARA MUNICIPAL DE JAPONVAR</MenuItem>
                        <MenuItem value={1044}>PREFEITURA MUNICIPAL DE JAPONVAR</MenuItem>
                        <MenuItem value={1047}>PREFEITURA MUNICIPAL DE JECEABA</MenuItem>
                        <MenuItem value={1049}>PREFEITURA MUNICIPAL DE JENIPAPO DE MINAS</MenuItem>
                        <MenuItem value={105}>PREFEITURA MUNICIPAL DE ARAPUA</MenuItem>
                        <MenuItem value={1050}>PREFEITURA MUNICIPAL DE JEQUERI</MenuItem>
                        <MenuItem value={1052}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1053}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE JEQUERI</MenuItem>
                        <MenuItem value={1054}>CAMARA MUNICIPAL DE JEQUITAI</MenuItem>
                        <MenuItem value={1056}>PREFEITURA MUNICIPAL DE JEQUTIBA</MenuItem>
                        <MenuItem value={1057}>CAMARA MUNICIPAL DE JEQUTIBA</MenuItem>
                        <MenuItem value={1058}>CAMARA MUNICIPAL DE JEQUITINHONHA</MenuItem>
                        <MenuItem value={1059}>PREFEITURA MUNICIPAL DE JEQUITINHONHA</MenuItem>
                        <MenuItem value={106}>CAMARA MUNICIPAL DE ARAPUA</MenuItem>
                        <MenuItem value={1062}>PREFEITURA MUNICIPAL DE JOAIMA</MenuItem>
                        <MenuItem value={1064}>CAMARA MUNICIPAL DE JOANESIA</MenuItem>
                        <MenuItem value={1065}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1069}>FUNDACAO CASA DE CULTURA DE JOAO MONLEVADE</MenuItem>
                        <MenuItem value={1074}>CAMARA MUNICIPAL DE JOAQUIM FELICIO</MenuItem>
                        <MenuItem value={1075}>PREFEITURA MUNICIPAL DE JOAQUIM FELICIO</MenuItem>
                        <MenuItem value={1076}>PREFEITURA MUNICIPAL DE JORDANIA</MenuItem>
                        <MenuItem value={1079}>PREFEITURA MUNICIPAL DE JOSE GONCALVES DE MINAS</MenuItem>
                        <MenuItem value={1080}>CAMARA MUNICIPAL DE JOSE RAYDAN</MenuItem>
                        <MenuItem value={1081}>PREFEITURA MUNICIPAL DE JOSE RAYDAN</MenuItem>
                        <MenuItem value={1087}>PREFEITURA MUNICIPAL DE JUATUBA</MenuItem>
                        <MenuItem value={1088}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE JUATUBA</MenuItem>
                        <MenuItem value={1089}>CAMARA MUNICIPAL DE JUIZ DE FORA</MenuItem>
                        <MenuItem value={1092}>FUNDACAO MUSEU MARIANO PROCOPIO</MenuItem>
                        <MenuItem value={1093}>AGENCIA DE PROTECAO E DEFESA DO CONSUMIDOR DE JUIZ DE FORA</MenuItem>
                        <MenuItem value={1097}>PREFEITURA MUNICIPAL DE JURAMENTO</MenuItem>
                        <MenuItem value={1098}>CAMARA MUNICIPAL DE JURAMENTO</MenuItem>
                        <MenuItem value={11}>PREFEITURA MUNICIPAL DE ABRE CAMPO</MenuItem>
                        <MenuItem value={110}>CAMARA MUNICIPAL DE ARAXA</MenuItem>
                        <MenuItem value={1100}>CAMARA MUNICIPAL DE JURUAIA</MenuItem>
                        <MenuItem value={1101}>PREFEITURA MUNICIPAL DE JURUAIA</MenuItem>
                        <MenuItem value={1102}>FUNDO MUNICIPAL DE PREVIDENCIA SOCIAL DE JURUAIA</MenuItem>
                        <MenuItem value={1103}>CAMARA MUNICIPAL DE JUVENILIA</MenuItem>
                        <MenuItem value={1104}>PREFEITURA MUNICIPAL JUVENILIA</MenuItem>
                        <MenuItem value={1106}>PREFEITURA MUNICIPAL DE LADAINHA</MenuItem>
                        <MenuItem value={1109}>CAMARA MUNICIPAL DE LAGOA DA PRATA</MenuItem>
                        <MenuItem value={111}>PREFEITURA MUNICIPAL DE ARAXA</MenuItem>
                        <MenuItem value={1110}>PREFEITURA MUNICIPAL DE LAGOA DA PRATA</MenuItem>
                        <MenuItem value={1113}>PREFEITURA MUNICIPAL DE LAGOA DOS PATOS</MenuItem>
                        <MenuItem value={1116}>PREFEITURA MUNICIPAL DE LAGOA FORMOSA</MenuItem>
                        <MenuItem value={1117}>CAMARA MUNICIPAL DE LAGOA FORMOSA</MenuItem>
                        <MenuItem value={1118}>SISTEMA DE BENEFICENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE LAGOA FORMOSA</MenuItem>
                        <MenuItem value={1121}>PREFEITURA MUNICIPAL DE LAGOA GRANDE</MenuItem>
                        <MenuItem value={1123}>PREFEITURA MUNICIPAL DE LAGOA SANTA</MenuItem>
                        <MenuItem value={1126}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1127}>CAMARA MUNICIPAL DE LAMBARI</MenuItem>
                        <MenuItem value={1130}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE LAMBARI</MenuItem>
                        <MenuItem value={1131}>CAMARA MUNICIPAL DE LAMIM</MenuItem>
                        <MenuItem value={1132}>MUNICIPIO DE LAMIM</MenuItem>
                        <MenuItem value={1134}>PREFEITURA MUNICIPAL DE LARANJAL</MenuItem>
                        <MenuItem value={1137}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1139}>PREFEITURA MUNICIPAL DE LAVRAS</MenuItem>
                        <MenuItem value={1140}>LAVRASPREV - INSTITUTO DE PREVIDENCIA DO MUNICIPIO</MenuItem>
                        <MenuItem value={1143}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE LEANDRO FERREIRA</MenuItem>
                        <MenuItem value={1144}>CAMARA MUNICIPAL DE LEME DO PRADO</MenuItem>
                        <MenuItem value={1145}>PREFEITURA MUNICIPAL DE LEME DO PRADO</MenuItem>
                        <MenuItem value={1147}>CAMARA MUNICIPAL DE LEOPOLDINA</MenuItem>
                        <MenuItem value={1155}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO DE LIMA DUARTE</MenuItem>
                        <MenuItem value={1156}>CAMARA MUNICIPAL DE LIMEIRA DO OESTE</MenuItem>
                        <MenuItem value={1157}>PREFEITURA MUNICIPAL DE LIMEIRA DO OESTE</MenuItem>
                        <MenuItem value={1158}>CAMARA MUNICIPAL DE LONTRA</MenuItem>
                        <MenuItem value={1159}>PREFEITURA MUNICIPAL DE LONTRA</MenuItem>
                        <MenuItem value={1162}>CAMARA MUNICIPAL DE LUISLANDIA</MenuItem>
                        <MenuItem value={1163}>PREFEITURA MUNICIPAL DE LUISLANDIA</MenuItem>
                        <MenuItem value={1164}>CAMARA MUNICIPAL DE LUMINARIAS</MenuItem>
                        <MenuItem value={1165}>PREFEITURA MUNICIPAL DE LUMINARIAS</MenuItem>
                        <MenuItem value={1167}>PREFEITURA MUNICIPAL DE LUZ</MenuItem>
                        <MenuItem value={117}>CAMARA MUNICIPAL DE ARCEBURGO</MenuItem>
                        <MenuItem value={1170}>CAMARA MUNICIPAL DE MACHACALIS</MenuItem>
                        <MenuItem value={1171}>PREFEITURA MUNICIPAL DE MACHACALIS</MenuItem>
                        <MenuItem value={1172}>CAMARA MUNICIPAL DE MACHADO</MenuItem>
                        <MenuItem value={1177}>FUNDACAO MUNICIPAL DE SAUDE DE MADRE DE DEUS DE MINAS</MenuItem>
                        <MenuItem value={1179}>PREFEITURA MUNICIPAL DE MALACACHETA</MenuItem>
                        <MenuItem value={1180}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE MALACACHETA</MenuItem>
                        <MenuItem value={1183}>CAMARA MUNICIPAL DE MANGA</MenuItem>
                        <MenuItem value={1190}>SERVICO AUTONOMO DE AGUA E ESGOTO DE MANHUMIRIM - MG</MenuItem>
                        <MenuItem value={1191}>CAMARA MUNICIPAL DE MANHUMIRIM</MenuItem>
                        <MenuItem value={1192}>CAMARA MUNICIPAL DE MANTENA</MenuItem>
                        <MenuItem value={1194}>SERVICO AUTONOMO DE AGUA E ESGOTO DE MANTENA - SAAE</MenuItem>
                        <MenuItem value={1196}>CAMARA MUNICIPAL DE MARAVILHAS</MenuItem>
                        <MenuItem value={1197}>PREFEITURA MUNICIPAL DE MARAVILHAS</MenuItem>
                        <MenuItem value={1199}>PREFEITURA MUNICIPAL DE MAR DE ESPANHA</MenuItem>
                        <MenuItem value={12}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1201}>PREFEITURA MUNICIPAL DE MARIA DA FE - MG</MenuItem>
                        <MenuItem value={1202}>FUNDACAO MUNICIPAL DE SAUDE DE MARIA DA FE - MG</MenuItem>
                        <MenuItem value={1204}>PREFEITURA MUNICIPAL DE MARIANA</MenuItem>
                        <MenuItem value={1206}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1207}>PREFEITURA MUNICIPAL DE MARILAC</MenuItem>
                        <MenuItem value={1209}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={121}>PREFEITURA MUNICIPAL DE ARCOS</MenuItem>
                        <MenuItem value={1211}>CAMARA MUNICIPAL DE MARIPA DE MINAS</MenuItem>
                        <MenuItem value={1213}>CAMARA MUNICIPAL DE MARLIERIA</MenuItem>
                        <MenuItem value={1218}>PREFEITURA MUNICIPAL DE MARTINHO CAMPOS</MenuItem>
                        <MenuItem value={1219}>CAMARA MUNICIPAL DE MARTINS SOARES</MenuItem>
                        <MenuItem value={122}>FUNDACAO MUNICIPAL DE SAUDE E ASSISTENCIA DE ARCOS</MenuItem>
                        <MenuItem value={1220}>PREFEITURA MUNICIPAL DE MARTINS SOARES</MenuItem>
                        <MenuItem value={1221}>PREFEITURA MUNICIPAL DE MATA VERDE</MenuItem>
                        <MenuItem value={1222}>CAMARA MUNICIPAL DE MATA VERDE</MenuItem>
                        <MenuItem value={1224}>PREFEITURA MUNICIPAL DE MATERLANDIA</MenuItem>
                        <MenuItem value={1225}>PREFEITURA MUNICIPAL DE MATEUS LEME</MenuItem>
                        <MenuItem value={1227}>CAMARA MUNICIPAL DE MATIAS BARBOSA</MenuItem>
                        <MenuItem value={1228}>PREFEITURA MUNICIPAL DE MATIAS BARBOSA</MenuItem>
                        <MenuItem value={1231}>CAMARA MUNICIPAL DE MATIPO</MenuItem>
                        <MenuItem value={1232}>PREFEITURA MUNICIPAL DE MATIPO</MenuItem>
                        <MenuItem value={1235}>CAMARA MUNICIPAL DE MATOZINHOS</MenuItem>
                        <MenuItem value={1237}>CAMARA MUNICIPAL DE MATUTINA</MenuItem>
                        <MenuItem value={1239}>CAMARA MUNICIPAL DE MEDEIROS</MenuItem>
                        <MenuItem value={124}>PREFEITURA MUNICIPAL DE AREADO</MenuItem>
                        <MenuItem value={1240}>PREFEITURA MUNICIPAL DE MEDEIROS</MenuItem>
                        <MenuItem value={1241}>CAMARA MUNICIPAL DE MEDINA</MenuItem>
                        <MenuItem value={1242}>PREFEITURA MUNICIPAL DE MEDINA</MenuItem>
                        <MenuItem value={1244}>CAMARA MUNICIPAL DE MENDES PIMENTEL</MenuItem>
                        <MenuItem value={1245}>CAMARA MUNICIPAL DE MERCES</MenuItem>
                        <MenuItem value={1246}>PREFEITURA MUNICIPAL DE MERCES</MenuItem>
                        <MenuItem value={1248}>CAMARA MUNICIPAL DE MESQUITA</MenuItem>
                        <MenuItem value={1249}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1250}>CAMARA MUNICIPAL DE MINAS NOVAS</MenuItem>
                        <MenuItem value={1252}>CAMARA MUNICIPAL DE MINDURI</MenuItem>
                        <MenuItem value={1253}>PREFEITUTRA MUNICIPAL DE MINDURI</MenuItem>
                        <MenuItem value={1256}>PREFEITURA MUNICIPAL DE MIRABELA</MenuItem>
                        <MenuItem value={1257}>CAMARA MUNICIPAL DE MIRADOURO</MenuItem>
                        <MenuItem value={1258}>PREFEITURA MUNICIPAL DE MIRADOURO</MenuItem>
                        <MenuItem value={1259}>PREFEITURA MUNICIPAL DE MIRAI</MenuItem>
                        <MenuItem value={126}>CAMARA MUNICIPAL DE ARGIRITA</MenuItem>
                        <MenuItem value={1262}>CAMARA MUNICIPAL DE MIRAVANIA</MenuItem>
                        <MenuItem value={1267}>CAMARA MUNICIPAL DE MOEMA</MenuItem>
                        <MenuItem value={1269}>ENTIDADE MUNICIPAL DE SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1270}>PREFEITURA MUNICIPAL DE MONJOLOS</MenuItem>
                        <MenuItem value={1271}>CAMARA MUNICIPAL DE MONJOLOS</MenuItem>
                        <MenuItem value={1272}>CAMARA MUNICIPAL DE MONSENHOR PAULO</MenuItem>
                        <MenuItem value={1273}>PREFEITURA MUNICIPAL DE MONSENHOR PAULO</MenuItem>
                        <MenuItem value={1274}>CAMARA MUNICIPAL DE MONTALVANIA</MenuItem>
                        <MenuItem value={1275}>PREFEITURA MUNICIPAL DE MONTALVANIA</MenuItem>
                        <MenuItem value={1278}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE MONTE ALEGRE DE MINAS</MenuItem>
                        <MenuItem value={1279}>PREFEITURA MUNICIPAL DE MONTE AZUL</MenuItem>
                        <MenuItem value={1281}>CAMARA MUNICIPAL DE MONTE BELO</MenuItem>
                        <MenuItem value={1282}>PREFEITURA MUNICIPAL DE MONTE BELO</MenuItem>
                        <MenuItem value={1283}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE MONTE BELO</MenuItem>
                        <MenuItem value={1284}>CAMARA MUNICIPAL DE MONTE CARMELO</MenuItem>
                        <MenuItem value={1285}>PREFEITURA MUNICIPAL DE MONTE CARMELO</MenuItem>
                        <MenuItem value={1290}>CAMARA MUNICIPAL DE MONTE SANTO DE MINAS</MenuItem>
                        <MenuItem value={1291}>CAMARA MUNICIPAL DE MONTES CLAROS</MenuItem>
                        <MenuItem value={1294}>AGENCIA MUNICIPAL DE AGUA</MenuItem>
                        <MenuItem value={1296}>SUPERINTENDENCIA DE ADMINISTRACAO DE ESTADIOS E ESTABELECIMENTOS DE MONTES CLAROS</MenuItem>
                        <MenuItem value={1297}>PREFEITURA MUNICIPAL DE MONTE SIAO</MenuItem>
                        <MenuItem value={1299}>CAMARA MUNICIPAL DE MONTEZUMA</MenuItem>
                        <MenuItem value={13}>PREFEITURA MUNICIPAL DE ACAIACA</MenuItem>
                        <MenuItem value={130}>PREFEITURA MUNICIPAL DE ARINOS</MenuItem>
                        <MenuItem value={1302}>CAMARA MUNICIPAL DE MORADA NOVA DE MINAS</MenuItem>
                        <MenuItem value={1304}>FUNDO DE ASSISTENCIA A SAUDE DOS SERVIDORES PUBLICOS MUNICIPAIS DE MORADA NOVA DE MINAS</MenuItem>
                        <MenuItem value={1305}>INSTITUTO MUNICIPAL DE PREVIDENCIA E ASSISTENCIA SOCIAL DE MORADA NOVA DE MINAS</MenuItem>
                        <MenuItem value={1306}>PREFEITURA MUNICIPAL DE MORRO DA GARCA</MenuItem>
                        <MenuItem value={1307}>CAMARA MUNICIPAL DE MORRO DA GARCA</MenuItem>
                        <MenuItem value={1308}>PREFEITURA MUNICIPAL DE MORRO DO PILAR</MenuItem>
                        <MenuItem value={1312}>PREFEITURA MUNICIPAL DE MUNHOZ</MenuItem>
                        <MenuItem value={1313}>CAMARA MUNICIPAL DE MURIAE</MenuItem>
                        <MenuItem value={1317}>FUNDO PREVIDENCIARIO DE MURIAE</MenuItem>
                        <MenuItem value={1320}>PREFEITURA MUNICIPAL DE MUZAMBINHO</MenuItem>
                        <MenuItem value={1321}>CAMARA MUNICIPAL DE MUZAMBINHO</MenuItem>
                        <MenuItem value={1322}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE MUZAMBINHO</MenuItem>
                        <MenuItem value={1323}>PREFEITURA MUNICIPAL DE NACIP RAYDAN</MenuItem>
                        <MenuItem value={1324}>CAMARA MUNICIPAL DE NACIP RAYDAN</MenuItem>
                        <MenuItem value={1326}>CAMARA MUNICIPAL DE NANUQE</MenuItem>
                        <MenuItem value={133}>PREFEITURA MUNICIPAL DE ASTOLFO DUTRA-MG</MenuItem>
                        <MenuItem value={1330}>PREFEITURA MUNICIPAL DE NATALANDIA</MenuItem>
                        <MenuItem value={1331}>CAMARA MUNICIPAL DE NATALANDIA</MenuItem>
                        <MenuItem value={1332}>PREFEITURA MUNICIPAL DE NATERCIA</MenuItem>
                        <MenuItem value={1335}>PREFEITURA MUNICIPAL DE NAZARENO</MenuItem>
                        <MenuItem value={1338}>SERVICO DE AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1339}>CAMARA MUNICIPAL DE NINHEIRA</MenuItem>
                        <MenuItem value={1340}>PREFEITURA MUNICIPAL DE NINHEIRA</MenuItem>
                        <MenuItem value={1342}>CAMARA MUNICIPAL DE NOVA BELEM</MenuItem>
                        <MenuItem value={1343}>CAMARA MUNICIPAL DE NOVA ERA</MenuItem>
                        <MenuItem value={1344}>PREFEITURA MUNICIPAL DE NOVA ERA</MenuItem>
                        <MenuItem value={1347}>CAMARA MUNICIPAL DE NOVA MODICA</MenuItem>
                        <MenuItem value={1350}>PREFEITURA MUNICIPAL DE NOVA PONTE</MenuItem>
                        <MenuItem value={1355}>CAMARA MUNICIPAL DE NOVA RESENDE</MenuItem>
                        <MenuItem value={1358}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1361}>CAMARA MUNICIPAL DE NOVO CRUZEIRO</MenuItem>
                        <MenuItem value={1363}>CAMARA MUNICIPAL DE NOVO ORIENTE DE MINAS</MenuItem>
                        <MenuItem value={1365}>CAMARA MUNICIPAL DE NOVORIZONTE</MenuItem>
                        <MenuItem value={1367}>PREFEITURA MUNICIPAL DE OLARIA</MenuItem>
                        <MenuItem value={1369}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE OLARIA</MenuItem>
                        <MenuItem value={1370}>CAMARA MUNICIPAL DE OLHOS D`AGUA</MenuItem>
                        <MenuItem value={1372}>PREFEITURA MUNICIPAL DE OLIMPIO NORONHA</MenuItem>
                        <MenuItem value={1373}>CAMARA MUNICIPAL DE OLIMPIO NORONHA</MenuItem>
                        <MenuItem value={1374}>INSTITUTO MUNICIPAL DE PREVIDENCIA DE OLIMPIO NORONHA</MenuItem>
                        <MenuItem value={1377}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE OLIVEIRA</MenuItem>
                        <MenuItem value={1379}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1381}>PREFEITURA MUNICIPAL DE OLIVEIRA FORTES</MenuItem>
                        <MenuItem value={1383}>PREFEITURA MUNICIPAL DE ONCA DE PITANGUI</MenuItem>
                        <MenuItem value={1385}>PREFEITURA MUNICIPAL DE ORATORIOS</MenuItem>
                        <MenuItem value={1386}>CAMARA MUNICIPAL DE ORATORIOS</MenuItem>
                        <MenuItem value={1388}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={1389}>PREFEITURA MUNICIPAL DE OURO BRANCO</MenuItem>
                        <MenuItem value={139}>PREFEITURA MUNICIPAL DE BAEPENDI</MenuItem>
                        <MenuItem value={1393}>DEPARTAMENTO MUNICIPAL AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1396}>SEMAE-SERVICO MUNICIPAL DE AGUA E ESGOTO DE OURO PRETO</MenuItem>
                        <MenuItem value={1398}>PREFEITURA MUNICIPAL DE OURO VERDE DE MINAS</MenuItem>
                        <MenuItem value={1399}>CAMARA MUNICIPAL DE PADRE CARVALHO</MenuItem>
                        <MenuItem value={140}>INSTITUTO BAEPENDIANO DE SEGURIDADE SOCIAL</MenuItem>
                        <MenuItem value={1401}>PREFEITURA MUNICIPAL DE PADRE PARAISO</MenuItem>
                        <MenuItem value={1402}>CAMARA MUNICIPAL DE PADRE PARAISO</MenuItem>
                        <MenuItem value={1406}>FUNDACAO EDUCACIONAL SAINT CLAIR FERREIRA</MenuItem>
                        <MenuItem value={1407}>INSTITUTO DE PREVIDENCIA DE PAINEIRAS</MenuItem>
                        <MenuItem value={1409}>PREFEITURA MUNICIPAL DE PAINS</MenuItem>
                        <MenuItem value={141}>CAMARA  MUNICIPAL DE BALDIM</MenuItem>
                        <MenuItem value={1410}>SERVICO AUTONOMO DE AGUA E ESGOTO SAAE</MenuItem>
                        <MenuItem value={1417}>CAMARA MUNICIPAL DE PALMOPOLIS</MenuItem>
                        <MenuItem value={1419}>PREFEITURA MUNICIPAL DE PAPAGAIOS</MenuItem>
                        <MenuItem value={142}>PREFEITURA MUNICIPAL DE BALDIM</MenuItem>
                        <MenuItem value={1420}>CAMARA MUNICIPAL DE PAPAGAIOS</MenuItem>
                        <MenuItem value={1421}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={1423}>FUNDACAO MUNICIPAL CASA DE CULTURA</MenuItem>
                        <MenuItem value={143}>CAMARA MUNICIPAL DE BAMBUI</MenuItem>
                        <MenuItem value={1431}>CAMARA MUNICIPAL DE PARAGUACU</MenuItem>
                        <MenuItem value={1435}>SERVICO AUTONOMO DE AGUA E ESGOTO DE PARAISOPOLIS</MenuItem>
                        <MenuItem value={1437}>MUNICIPIO DE PARAOPEBA</MenuItem>
                        <MenuItem value={1438}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS DE PARAOPEBA - IPREV-PBA</MenuItem>
                        <MenuItem value={1439}>CAMARA MUNICIPAL DE PASSABEM</MenuItem>
                        <MenuItem value={144}>PREFEITURA MUNICIPAL DE BAMBUI</MenuItem>
                        <MenuItem value={1440}>PREFEITURA MUNICIPAL DE PASSABEM</MenuItem>
                        <MenuItem value={1442}>PREFEITURA MUNICIPAL DE PASSA QUATRO</MenuItem>
                        <MenuItem value={1443}>INSTITUTO MUNICIPAL DE SEGURIDADE SOCIAL</MenuItem>
                        <MenuItem value={1444}>PREFEITURA MUNICIPAL DE PASSA TEMPO</MenuItem>
                        <MenuItem value={1446}>REGIME PROPRIO PREVIDENCIA SOCIAL</MenuItem>
                        <MenuItem value={1448}>PREFEITURA MUNICIPAL DE PASSA VINTE</MenuItem>
                        <MenuItem value={1449}>PREFEITURA MUNICIPAL DE PASSOS</MenuItem>
                        <MenuItem value={1452}>CAMARA MUNICIPAL DE PATIS</MenuItem>
                        <MenuItem value={1454}>FUNDO MUNICIPAL DE PREVIDENCIA DE PATIS</MenuItem>
                        <MenuItem value={1459}>CAMARA MUNICIPAL DE PATROCINIO</MenuItem>
                        <MenuItem value={1460}>PREFEITURA MUNICIPAL DE PATROCINIO</MenuItem>
                        <MenuItem value={1461}>DEPARTAMENTO DE AGUA E ESGOTO DE PATROCINIO</MenuItem>
                        <MenuItem value={1462}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE PATROCINIO</MenuItem>
                        <MenuItem value={1463}>CAMARA MUNICIPAL DE PATROCINIO DO MURIAE</MenuItem>
                        <MenuItem value={1466}>PREFEITURA MUNICIPAL DE PAULA CANDIDO</MenuItem>
                        <MenuItem value={1467}>PREFEITURA MUNICIPAL DE PAULISTAS</MenuItem>
                        <MenuItem value={1471}>CAMARA MUNICIPAL DE PAVAO</MenuItem>
                        <MenuItem value={1473}>CAMARA MUNICIPAL DE PECANHA</MenuItem>
                        <MenuItem value={1475}>PREFEITURA MUNICIPAL DE PEDRA AZUL</MenuItem>
                        <MenuItem value={148}>PREFEITURA MUNICIPAL DE BANDEIRA</MenuItem>
                        <MenuItem value={1480}>CAMARA MUNICIPAL DE PEDRA DO INDAIA</MenuItem>
                        <MenuItem value={1483}>PREFEITURA DE PEDRA DOURADA</MenuItem>
                        <MenuItem value={1484}>CAMARA MUNICIPAL DE PEDRALVA</MenuItem>
                        <MenuItem value={1486}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1487}>PEDRAS DE MARIA DA CRUZ</MenuItem>
                        <MenuItem value={1488}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PEDRAS DE MARIA DA CRUZ</MenuItem>
                        <MenuItem value={1490}>PREFEITURA MUNICIPAL DE PEDRINOPOLIS</MenuItem>
                        <MenuItem value={1491}>FUNDACAO MUNICIPAL DE SAUDE DE PEDRINOPOLIS</MenuItem>
                        <MenuItem value={1498}>CAMARA MUNICIPAL DE PEQUERI</MenuItem>
                        <MenuItem value={150}>PREFEITURA MUNICIPAL DE BANDEIRA DO SUL</MenuItem>
                        <MenuItem value={1502}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1503}>CAMARA MUNICIPAL DE PERDIGAO</MenuItem>
                        <MenuItem value={1509}>CAMARA MUNICIPAL DE PERDOES</MenuItem>
                        <MenuItem value={1510}>PREVIPER-INSTITUTO DE PREVIDENCIA MUNICIPAL DE PERDOES</MenuItem>
                        <MenuItem value={1513}>CAMARA MUNICIPAL DE PESCADOR</MenuItem>
                        <MenuItem value={1515}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1516}>PREFEITURA</MenuItem>
                        <MenuItem value={1517}>FUNDO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE PIAU</MenuItem>
                        <MenuItem value={1520}>CAMARA MUNICIPAL DE PIEDADE DE PONTE NOVA</MenuItem>
                        <MenuItem value={1522}>CAMARA MUNICIPAL DE PIEDADE DO RIO GRANDE</MenuItem>
                        <MenuItem value={1526}>PREFEITURA MUNICIPAL DE PIMENTA-MG</MenuItem>
                        <MenuItem value={1530}>CAMARA MUNICIPAL DE  PINGO-D'AGUA</MenuItem>
                        <MenuItem value={1532}>CAMARA MUNICIPAL DE PINTOPOLIS</MenuItem>
                        <MenuItem value={1535}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1538}>PREFEITURA MUNICIPAL DE PIRAJUBA</MenuItem>
                        <MenuItem value={1539}>CAMARA MUNICIPAL DE PIRAJUBA</MenuItem>
                        <MenuItem value={1541}>PREFEITURA MUNICIPAL DE PIRANGA</MenuItem>
                        <MenuItem value={1544}>CAMARA MUNICIPAL DE PIRANGUCU</MenuItem>
                        <MenuItem value={1547}>PIRANGUINHO PREFEITURA</MenuItem>
                        <MenuItem value={1549}>PREFEITURA MUNICIPAL DE PIRAPETINGA</MenuItem>
                        <MenuItem value={155}>CAMARA MUNICIPAL DE BARAO DO MONTE ALTO</MenuItem>
                        <MenuItem value={1550}>FUNDACAO MUNICIPAL DE SAUDE DE PIRAPETINGA FUMSP</MenuItem>
                        <MenuItem value={1552}>PREFEITURA MUNICIPAL DE PIRAPORA</MenuItem>
                        <MenuItem value={1554}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE PIRAPORA</MenuItem>
                        <MenuItem value={1557}>PREFEITURA MUNICIPAL DE PITANGUI</MenuItem>
                        <MenuItem value={1558}>CAMARA MUNICIPAL DE PITANGUI</MenuItem>
                        <MenuItem value={156}>PREFEITURA DE BARAO DO MONTE ALTO</MenuItem>
                        <MenuItem value={1561}>CAMARA MUNICIPAL DE PIUMHI</MenuItem>
                        <MenuItem value={1563}>SERVICO AUTONOMO DE AGUA E ESGOTO DE PIUMHI</MenuItem>
                        <MenuItem value={1571}>AUTARQUIA MUNICIPAL DE ENSINO</MenuItem>
                        <MenuItem value={1572}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1575}>FUNDACAO JARDIM BOTANICO DE POCOS DE CALDAS</MenuItem>
                        <MenuItem value={1578}>PREFEITURA MUNICIPAL DE POCRANE</MenuItem>
                        <MenuItem value={1579}>CAMARA MUNICIPAL DE POCRANE</MenuItem>
                        <MenuItem value={1582}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE POMPEU</MenuItem>
                        <MenuItem value={1584}>CAMARA MUNICIPAL DE PONTE NOVA</MenuItem>
                        <MenuItem value={1587}>PREFEITURA MUNICIPAL DE PONTO CHIQUE</MenuItem>
                        <MenuItem value={1589}>PREFEITURA MUNICIPAL DE PONTO DOS VOLANTES</MenuItem>
                        <MenuItem value={1590}>PREFEITURA MUNICIPAL DE PORTEIRINHA</MenuItem>
                        <MenuItem value={1592}>CAMARA MUNICIPAL DE PORTO FIRME</MenuItem>
                        <MenuItem value={1593}>PREFEITURA MUNICIPAL DE PORTO FIRME</MenuItem>
                        <MenuItem value={1596}>CAMARA MUNICIPAL DE POUSO ALEGRE</MenuItem>
                        <MenuItem value={1598}>IPREM-INSTITUTO PREVIDENCIA MUNIC.DE POUSO ALEGRE</MenuItem>
                        <MenuItem value={1599}>FUNDACAO POUSOALEGRENSE PRO-VALORIZACAO DO MENOR</MenuItem>
                        <MenuItem value={160}>SISTEMA MUNICIPAL DE PREVIDENCIA E ASSISTENCIA AO SERVIDOR</MenuItem>
                        <MenuItem value={1601}>PREFEITURA MUNICIPAL DE POUSO ALTO</MenuItem>
                        <MenuItem value={1604}>CAMARA MUNICIPAL DE PRATA</MenuItem>
                        <MenuItem value={1608}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1609}>CAMARA MUNICIPAL DE PRATINHA</MenuItem>
                        <MenuItem value={161}>EMPRESA MUNICIPAL DE GESTAO DO TERMINAL RODOVIARIO</MenuItem>
                        <MenuItem value={1610}>PREFEITURA MUNICIPAL DE PRATINHA</MenuItem>
                        <MenuItem value={1612}>CAMARA MUNICIPAL DE PRESIDENTE BERNARDES</MenuItem>
                        <MenuItem value={1613}>PREFEITURA MUNICIPAL DE PRESIDENTE BERNARDES</MenuItem>
                        <MenuItem value={1614}>CAMARA MUNICIPAL DE PRESIDENTE JUSCELINO</MenuItem>
                        <MenuItem value={1618}>PREFEITURA MUNICIPAL DE PRESIDENTE KUBITSCHEK</MenuItem>
                        <MenuItem value={1624}>PREFEITURA MUNICIPAL DE ALTO JEQUITIBA</MenuItem>
                        <MenuItem value={1625}>PREFEITURA MUNICIPAL DE PRUDENTE DE MORAIS</MenuItem>
                        <MenuItem value={1626}>CAMARA MUNICIPAL DE PRUDENTE DE MORAIS</MenuItem>
                        <MenuItem value={1627}>CAMARA MUNICIPAL DE QUARTEL GERAL</MenuItem>
                        <MenuItem value={1629}>FUNDO PREVIDENCIARIO DOS SERVIDORES PUBLICOS DE QUARTEL GERAL</MenuItem>
                        <MenuItem value={1630}>CAMARA MUNICIPAL DE QUELUZITO</MenuItem>
                        <MenuItem value={1632}>CAMARA MUNICIPAL DE RAPOSOS</MenuItem>
                        <MenuItem value={1634}>CAMARA MUNICIPAL DE RAUL SOARES</MenuItem>
                        <MenuItem value={1636}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1639}>CAMARA MUNICIPAL DE RECREIO</MenuItem>
                        <MenuItem value={1642}>PREFEITURA MUNICIPAL DE REDUTO</MenuItem>
                        <MenuItem value={1643}>SERVICO AUTONOMO DE AGUA E ESGOTO DE REDUTO</MenuItem>
                        <MenuItem value={1649}>CAMARA MUNICIPAL DE RESSAQUINHA</MenuItem>
                        <MenuItem value={165}>AGENCIA MUNICIPAL DE DESENVOLVIMENTO INTEGRADO DE BARBACENA E REGIAO</MenuItem>
                        <MenuItem value={1650}>PREFEITURA MUNICIPAL DE RESSAQUINHA</MenuItem>
                        <MenuItem value={1651}>CAMARA MUNICIPAL DE RIACHINHO</MenuItem>
                        <MenuItem value={1652}>PREFEITURA MUNICIPAL DE RIACHINHO</MenuItem>
                        <MenuItem value={1656}>CAMARA MUNICIPAL DE RIBEIRAO DAS NEVES</MenuItem>
                        <MenuItem value={1660}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1662}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE RIO ACIMA RIOPREV</MenuItem>
                        <MenuItem value={1666}>CAMARA MUNICIPAL DE RIO DOCE</MenuItem>
                        <MenuItem value={1667}>PREFEITURA MUNICIPAL DE RIO DO PRADO</MenuItem>
                        <MenuItem value={1669}>CAMARA MUNICIPAL DE RIO ESPERA</MenuItem>
                        <MenuItem value={1674}>CAMARA MUNICIPAL DE RIO NOVO</MenuItem>
                        <MenuItem value={1675}>CAMARA MUNICIPAL DE RIO PARANAIBA</MenuItem>
                        <MenuItem value={1676}>PREFEITURA MUNICIPAL DE RIO PARANAIBA</MenuItem>
                        <MenuItem value={168}>PREFEITURA MUNICIPAL DE BARRA LONGA</MenuItem>
                        <MenuItem value={1680}>PREFEITURA MUNICIPAL DE RIO PARDO DE MINAS</MenuItem>
                        <MenuItem value={1681}>PREFEITURA MUNICIPAL DE RIO PIRACICABA</MenuItem>
                        <MenuItem value={1682}>CAMARA MUNICIPAL DE RIO PIRACICABA</MenuItem>
                        <MenuItem value={1685}>CAMARA MUNICIPAL DE RIO PRETO</MenuItem>
                        <MenuItem value={1686}>PREFEITURA MUNICIPAL DE RIO PRETO</MenuItem>
                        <MenuItem value={1688}>CAMARA MUNICIPAL DE RIO VERMELHO</MenuItem>
                        <MenuItem value={169}>CAMARA MUNICIPAL DE BARROSO</MenuItem>
                        <MenuItem value={1691}>CAMARA MUNICIPAL DE ROCHEDO DE MINAS</MenuItem>
                        <MenuItem value={1692}>PREFEITURA MUNICIPAL DE ROCHEDO DE MINAS</MenuItem>
                        <MenuItem value={1696}>CAMARA MUNICIPAL DE ROMARIA</MenuItem>
                        <MenuItem value={1698}>CAMARA MUNICIPAL DE ROSARIO DA LIMEIRA</MenuItem>
                        <MenuItem value={17}>CAMARA MUNICIPAL DE AGUA BOA</MenuItem>
                        <MenuItem value={170}>PREFEITURA MUNICIPAL DE BARROSO</MenuItem>
                        <MenuItem value={1702}>PREFEITURA MUNICIPAL DE RUBELITA</MenuItem>
                        <MenuItem value={1705}>PREFEITURA MUNICIPAL DE SABARA</MenuItem>
                        <MenuItem value={1707}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE SABARA</MenuItem>
                        <MenuItem value={1708}>PREFEITURA MUNICIPAL DE SABINOPOLIS</MenuItem>
                        <MenuItem value={171}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1710}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE SABINOPOLIS</MenuItem>
                        <MenuItem value={1713}>PREFEITURA MUNICIPAL DE SACRAMENTO</MenuItem>
                        <MenuItem value={1714}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1715}>FUNDACAO DE CULTURA E TURISMO DE SACRAMENTO</MenuItem>
                        <MenuItem value={1716}>CAMARA MUNICIPAL DE SALINAS</MenuItem>
                        <MenuItem value={1717}>PREFEITURA MUNICIPAL DE SALINAS</MenuItem>
                        <MenuItem value={1718}>FUNDACAO DE CULTURA DE SALINAS</MenuItem>
                        <MenuItem value={172}>CAMARA  MUNICIPAL</MenuItem>
                        <MenuItem value={1722}>PREFEITURA MUNICIPAL DE SANTA BARBARA-MG</MenuItem>
                        <MenuItem value={1724}>PREFEITURA MUNICIPAL DE SANTA BARBARA DO LESTE</MenuItem>
                        <MenuItem value={1725}>CAMARA MUNICPAL</MenuItem>
                        <MenuItem value={1727}>CAMARA MUNICIPAL DE SANTA BARBARA DO TUGURIO</MenuItem>
                        <MenuItem value={1728}>PREFEITURA MUNICIPAL DE SANTA BARBARA DO TUGURIO</MenuItem>
                        <MenuItem value={173}>PREFEITURA MUNICIPAL DE BELMIRO BRAGA</MenuItem>
                        <MenuItem value={1732}>PREFEITURA MUNICIPAL DE SANTA CRUZ DE SALINAS</MenuItem>
                        <MenuItem value={1733}>CAMARA MUNICIPAL DE SANTA CRUZ DO ESCALVADO</MenuItem>
                        <MenuItem value={1734}>PREFEITURA MUNICIPAL DE SANTA CRUZ DO ESCALVADO</MenuItem>
                        <MenuItem value={1737}>CAMARA MUNICIPAL DE SANTA FE DE MINAS</MenuItem>
                        <MenuItem value={1739}>PREFEITURA MUNICIPAL DE SANTA HELENA DE MINAS</MenuItem>
                        <MenuItem value={174}>FUNDO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE BELMIRO BRAGA</MenuItem>
                        <MenuItem value={1740}>CAMARA MUNICIPAL DE SANTA HELENA DE MINAS</MenuItem>
                        <MenuItem value={1741}>CAMARA MUNICIPAL DE SANTA JULIANA</MenuItem>
                        <MenuItem value={1742}>PREFEITURA MUNICIPAL DE SANTA JULIANA</MenuItem>
                        <MenuItem value={1743}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SANTA JULIANA</MenuItem>
                        <MenuItem value={1746}>INSTITUTO MUNICIPAL DE PREVIDENCIA E ASSISTENCIA SOCIAL DE SANTA LUZIA</MenuItem>
                        <MenuItem value={1749}>CAMARA MUNICIPAL DE SANTA MARIA DE ITABIRA</MenuItem>
                        <MenuItem value={1750}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1751}>CAMARA MUNICIPAL DE SANTA MARIA DO SALTO</MenuItem>
                        <MenuItem value={1753}>CAMARA MUNICIPAL DE SANTA MARIA DO SUACUI</MenuItem>
                        <MenuItem value={1757}>CAMARA MUNICIPAL DE SANTANA DE CATAGUASES-MG</MenuItem>
                        <MenuItem value={1759}>PREFEITURA MUNICIPAL DE SANTANA DE PIRAPAMA</MenuItem>
                        <MenuItem value={1762}>PREFEITURA MUNICIPAL DE SANTANA DO DESERTO</MenuItem>
                        <MenuItem value={1767}>CAMARA MUNICIPAL DE SANTANA DO MANHUACU</MenuItem>
                        <MenuItem value={1773}>CAMARA MUNICIPAL DE SANTANA DOS MONTES</MenuItem>
                        <MenuItem value={1775}>PREFEITURA MUNICIPAL DE SANTA RITA DE CALDAS</MenuItem>
                        <MenuItem value={1776}>CAMARA MUNICIPAL DE SANTA RITA DE CALDAS</MenuItem>
                        <MenuItem value={1777}>CAMARA MUNICIPAL DE SANTA RITA DE JACUTINGA</MenuItem>
                        <MenuItem value={178}>FUNDACAO DE PARQUES MUNICIPAIS E ZOOBOTANICA</MenuItem>
                        <MenuItem value={1785}>CAMARA MUNICIPAL DE SANTA RITA DO SAPUCAI</MenuItem>
                        <MenuItem value={1786}>PREFEITURA MUNICIPAL DE SANTA RITA DO SAPUCAI</MenuItem>
                        <MenuItem value={1787}>PREFEITURA MUNICIPAL DE SANTA ROSA DA SERRA</MenuItem>
                        <MenuItem value={1788}>CAMARA MUNICIPAL DE SANTA ROSA DA SERRA</MenuItem>
                        <MenuItem value={1794}>CASA DA CULTURA ANTONIO CARLOS DE CARVALHO</MenuItem>
                        <MenuItem value={1797}>CAMARA MUNICIPAL DE SANTO ANTONIO DO GRAMA</MenuItem>
                        <MenuItem value={1798}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO GRAMA</MenuItem>
                        <MenuItem value={1799}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO ITAMBE</MenuItem>
                        <MenuItem value={18}>PREFEITURA MUNICIPAL DE AGUA BOA</MenuItem>
                        <MenuItem value={1801}>CAMARA MUNICIPAL DE SANTO ANTONIO DO JACINTO</MenuItem>
                        <MenuItem value={1802}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO JACINTO</MenuItem>
                        <MenuItem value={1803}>CAMARA MUNICIPAL DE SANTO ANTONIO DO MONTE</MenuItem>
                        <MenuItem value={1806}>CAMARA MUNICIPAL DE SANTO ANTONIO DO RETIRO</MenuItem>
                        <MenuItem value={181}>SUPERINTENDENCIA DE LIMPEZA URBANA</MenuItem>
                        <MenuItem value={1810}>CAMARA MUNICIPAL DE SANTO HIPOLITO</MenuItem>
                        <MenuItem value={1811}>PREFEITURA MUNICIPAL DE SANTO HIPOLITO</MenuItem>
                        <MenuItem value={1812}>CAMARA MUNICIPAL DE SANTOS DUMONT</MenuItem>
                        <MenuItem value={1813}>PREFEITURA MUNICIPAL DE SANTOS DUMONT</MenuItem>
                        <MenuItem value={1815}>CAMARA MUNICIPAL DE SAO BENTO ABADE</MenuItem>
                        <MenuItem value={1816}>CAMARA MUNICIPAL DE SAO BRAS DO SUACUI</MenuItem>
                        <MenuItem value={1817}>PREFEITURA MUNICIPAL DE SAO BRAS DO SUACUI</MenuItem>
                        <MenuItem value={182}>SUPERINTENDENCIA DE DESENVOLVIMENTO DA CAPITAL</MenuItem>
                        <MenuItem value={1823}>PREFEITURA MUNICIPAL DE SAO FELIX DE MINAS</MenuItem>
                        <MenuItem value={1825}>PREFEITURA MUNICIPAL DE SAO FRANCISCO</MenuItem>
                        <MenuItem value={183}>HOSPITAL MUNICIPAL ODILON BEHRENS</MenuItem>
                        <MenuItem value={1830}>PREFEITURA MUNICIPAL DE SAO FRANCISCO DE SALES</MenuItem>
                        <MenuItem value={1833}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1834}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SAO FRANCISCO DO GLORIA</MenuItem>
                        <MenuItem value={1835}>CAMARA MUNICIPAL DE SAO GERALDO</MenuItem>
                        <MenuItem value={1836}>PREFEITURA MUNICIPAL DE SAO GERALDO</MenuItem>
                        <MenuItem value={1837}>PREFEITURA MUNICIPAL DE SAO GERALDO DA PIEDADE</MenuItem>
                        <MenuItem value={1838}>CAMARA MUNICIPAL DE SAO GERALDO DA PIEDADE</MenuItem>
                        <MenuItem value={1839}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1840}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1841}>CAMARA MUNICIPAL DE SAO GONCALO DO ABAETE</MenuItem>
                        <MenuItem value={1844}>CAMARA MUNICIPAL DE SAO GONCALO DO PARA</MenuItem>
                        <MenuItem value={1845}>PREFEITURA MUNICIPAL DE SAO GONCALO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={1846}>CAMARA DE SAO GONCALO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={1847}>CAMARA MUNICIPAL DE SAO GONCALO DO SAPUCAI</MenuItem>
                        <MenuItem value={1849}>PREFEITURA MUNICIPAL DE SAO GOTARDO</MenuItem>
                        <MenuItem value={1850}>CAMARA MUNICIPAL DE SAO GOTARDO</MenuItem>
                        <MenuItem value={1852}>PREFEITURA MUNICIPAL DE SAO JOAO BATISTA DO GLORIA</MenuItem>
                        <MenuItem value={1854}>PMSJL</MenuItem>
                        <MenuItem value={1856}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1857}>PREVIDENCIA MUNICIPAL DE SAO JOAO DA LAGOA</MenuItem>
                        <MenuItem value={1858}>CAMARA MUNICIPAL DE SAO JOAO DA LAGOA</MenuItem>
                        <MenuItem value={1859}>PREFEITURA MUNICIPAL DE SAO JOAO DA MATA</MenuItem>
                        <MenuItem value={186}>EMPRESA DE TRANSPORTE E TRANSITO DE BELO HORIZONTE S/A</MenuItem>
                        <MenuItem value={1861}>CAMARA MUNICIPAL SAO JOAO DA PONTE</MenuItem>
                        <MenuItem value={1863}>FUNDACAO MUNICIPAL DE ASSISTENCIA A SAUDE</MenuItem>
                        <MenuItem value={1866}>PREFEITURA MUNICIPAL DE SAO JOAO DAS MISSOES</MenuItem>
                        <MenuItem value={1868}>CAMARA MUNICIPAL DE SAO JOAO DEL REI</MenuItem>
                        <MenuItem value={1869}>PREFEITURA MUNICIPAL DE SAO JOAO DEL REI</MenuItem>
                        <MenuItem value={1870}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1871}>FUNDO MUNICIPAL DE SAUDE DE SAO JOAO DEL-REI</MenuItem>
                        <MenuItem value={1873}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1877}>PREFEITURA MUNICIPAL DE SAO JOAO DO MANTENINHA</MenuItem>
                        <MenuItem value={1879}>CAMARA MUNICIPAL DE SAO JOAO DO ORIENTE</MenuItem>
                        <MenuItem value={1880}>PREFEITURA MUNICIPAL DE SAO JOAO DO ORIENTE</MenuItem>
                        <MenuItem value={1882}>PREFEITURA MUNICIPAL DE SAO JOAO DO PACUI</MenuItem>
                        <MenuItem value={1885}>CAMARA MUNICIPAL DE SAO JOAO EVANGELISTA</MenuItem>
                        <MenuItem value={1887}>FUNDACAO MUNICIPAL DE SAUDE SAO JOAO EBANGELISTA</MenuItem>
                        <MenuItem value={1889}>PREFEITURA DE SAO JOAO NEPOMUCENO</MenuItem>
                        <MenuItem value={189}>EMPRESA MUNICIPAL DE TURISMO DE BELO HORIZONTE S/A</MenuItem>
                        <MenuItem value={1890}>FUNDACAO CULTURAL DE SAO JOAO NEPOMUCENO</MenuItem>
                        <MenuItem value={1892}>CAMARA MUNICIPAL DE SAO JOAQUIM DE BICAS</MenuItem>
                        <MenuItem value={1893}>CAMARA MUNICIPAL DE SAO JOSE DA BARRA</MenuItem>
                        <MenuItem value={1896}>PREFEITURA MUNICIPAL DE SAO JOSE DA LAPA</MenuItem>
                        <MenuItem value={1897}>CAMARA MUNICIPAL DE SAO JOSE DA SAFIRA</MenuItem>
                        <MenuItem value={1899}>CAMARA MUNICIPAL DE SAO JOSE DA VARGINHA</MenuItem>
                        <MenuItem value={19}>CAMARA MUNICIPAL DE VEREADORES DE AGUA COMPRIDA</MenuItem>
                        <MenuItem value={1900}>PREFEITURA MUNICIPAL DE SAO JOSE DA VARGINHA</MenuItem>
                        <MenuItem value={1901}>PREFEITURA MUNICIPAL DE SAO JOSE DO ALEGRE</MenuItem>
                        <MenuItem value={1902}>CAMARA MUNICIPAL DE SAO JOSE DO ALEGRE</MenuItem>
                        <MenuItem value={1903}>PREFEITURA MUNICIPAL DE SAO JOSE DO DIVINO</MenuItem>
                        <MenuItem value={1909}>INSTITUTO DE SEGURIDADE SOCIAL MUNICIPAL DE SAO JOSE DO JACURI</MenuItem>
                        <MenuItem value={191}>FUNDO PREVIDENCIARIO</MenuItem>
                        <MenuItem value={1910}>CAMARA MUNICIPAL DE SAO JOSE DO MANTIMENTO</MenuItem>
                        <MenuItem value={1917}>CAMARA MUNICIPAL DE SAO PEDRO DA UNIAO</MenuItem>
                        <MenuItem value={1919}>CAMARA MUNICIPAL DE SAO PEDRO DOS FERROS</MenuItem>
                        <MenuItem value={192}>CAMARA MUNICIPAL DE BELO ORIENTE</MenuItem>
                        <MenuItem value={1922}>CAMARA MUNICIPAL DE SAO PEDRO DO SUACUI</MenuItem>
                        <MenuItem value={1923}>PREFEITURA MUNICIPAL DE SAO PEDRO DO SUACUI</MenuItem>
                        <MenuItem value={1924}>CAMARA MUNICIPAL DE SAO ROMAO</MenuItem>
                        <MenuItem value={1928}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1929}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DA BELA VISTA</MenuItem>
                        <MenuItem value={1930}>CAMARA MUNICIPAL DE SAO SEBASTIAO DA BELA VISTA</MenuItem>
                        <MenuItem value={1933}>CAMARA MUNICIPAL DE SAO SEBASTIAO DO ANTA</MenuItem>
                        <MenuItem value={1934}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DO ANTA</MenuItem>
                        <MenuItem value={1936}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DO MARANHAO</MenuItem>
                        <MenuItem value={1940}>CAMARA MUNICIPAL DE SAO SEBASTIAO DO PARAISO</MenuItem>
                        <MenuItem value={1942}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE SAO SEBASTIAO DO PARAISO</MenuItem>
                        <MenuItem value={1944}>CAMARA MUNICIPAL DE SAO SEBASTIAO DO RIO PRETO</MenuItem>
                        <MenuItem value={1946}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DO RIO VERDE</MenuItem>
                        <MenuItem value={1947}>CAMARA MUNICIPAL DE SAO TIAGO</MenuItem>
                        <MenuItem value={195}>CAMARA MUNICIPAL DE BELO VALE</MenuItem>
                        <MenuItem value={1951}>FUNDACAO NOSSA SENHORA DO SAGRADO CORACAO</MenuItem>
                        <MenuItem value={196}>PREFEITURA MUNICIPAL DE BELO VALE</MenuItem>
                        <MenuItem value={1960}>PODER EXECUTIVO</MenuItem>
                        <MenuItem value={1962}>CAMARA MUNICIPAL DE SARZEDO</MenuItem>
                        <MenuItem value={1967}>CAMARA MUNICIPAL DE SEM PEIXE</MenuItem>
                        <MenuItem value={1968}>PREFEITURA MUNICIPAL DE SEM PEIXE</MenuItem>
                        <MenuItem value={197}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={1970}>PREFEITURA MUNICIPAL DE SENADOR AMARAL</MenuItem>
                        <MenuItem value={1971}>PREFEITURA MUNICIPAL DE SENADOR CORTES</MenuItem>
                        <MenuItem value={1972}>CAMARA MUNICIPAL DE SENADOR CORTES</MenuItem>
                        <MenuItem value={1975}>SERVICO AUTONOMO DE AGUA E ESGOTO DE SENADOR FIRMINO</MenuItem>
                        <MenuItem value={1976}>CAMARA MUNICIPAL DE SENADOR JOSE BENTO</MenuItem>
                        <MenuItem value={1978}>CAMARA MUNICIPAL DE SENADOR MODESTINO GONCALVES</MenuItem>
                        <MenuItem value={1979}>PREFEITURA MUNICIPAL DE SENADOR MODESTINO GONCALVES</MenuItem>
                        <MenuItem value={198}>ADMINISTRACAO DIRETA</MenuItem>
                        <MenuItem value={1980}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1982}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1983}>PREFEITURA MUNICIPAL DE SENHORA DO PORTO</MenuItem>
                        <MenuItem value={1984}>CAMARA MUNICIPAL DE SENHORA DO PORTO</MenuItem>
                        <MenuItem value={1986}>CAMARA MUNICIPAL DE SENHORA DOS REMEDIOS</MenuItem>
                        <MenuItem value={1987}>PREFEITURA MUNICIPAL DE SENHORA DOS REMEDIOS</MenuItem>
                        <MenuItem value={1990}>CAMARA MUNICIPAL DE SERITINGA</MenuItem>
                        <MenuItem value={1996}>INSTITUTO MUNICIPAL DE PREVIDENCIA SOCIAL</MenuItem>
                        <MenuItem value={1997}>CAMARA MUNICIPAL DE SERRA DOS AIMORES</MenuItem>
                        <MenuItem value={1999}>CAMARA MUNICIPAL DE SERRA DO SALITRE</MenuItem>
                        <MenuItem value={2000}>PREFEITURA MUNICIPAL DE SERRA DO SALITRE</MenuItem>
                        <MenuItem value={2004}>PREFEITURA MUNICIPAL DE SERRANOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={2005}>CAMARA MUNICIPAL DE SERRANOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={2006}>PREFEITURA MUNICIPAL DE SERRANOS</MenuItem>
                        <MenuItem value={2009}>CAMARA MUNICIPAL DE SERRO</MenuItem>
                        <MenuItem value={201}>PREFEITURA MUNICIPAL DE BERTOPOLIS</MenuItem>
                        <MenuItem value={2010}>PREFEITURA MUNICIPAL DE SERRO</MenuItem>
                        <MenuItem value={2016}>PREFEITURA MUNICIPAL DE SILVEIRANIA</MenuItem>
                        <MenuItem value={2017}>PREFEITURA MUNICIPAL DE SILVIANOPOLIS</MenuItem>
                        <MenuItem value={2019}>CAMARA MUNICIPAL DE SIMAO PEREIRA</MenuItem>
                        <MenuItem value={2020}>PREFEITURA MUNICIPAL DE SIMAO PEREIRA</MenuItem>
                        <MenuItem value={2021}>CAMARA MUNICIPAL DE SIMONESIA</MenuItem>
                        <MenuItem value={2022}>PREFEITURA MUNICIPAL DE SIMONESIA</MenuItem>
                        <MenuItem value={2023}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={2024}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={2026}>CAMARA MUNICIPAL DE SOLEDADE DE MINAS</MenuItem>
                        <MenuItem value={2027}>PREFEITURA MUNICIPAL DE SOLEDADE DE MINAS</MenuItem>
                        <MenuItem value={2029}>CAMARA MUNICIPAL DE TABULEIRO</MenuItem>
                        <MenuItem value={203}>PREFEITURA MUNICIPAL DE BERIZAL</MenuItem>
                        <MenuItem value={2032}>PREFEITURA MUNICIPAL DE TAIOBEIRAS</MenuItem>
                        <MenuItem value={2035}>PREFEITURA MUNICIPAL DE TAPARUBA</MenuItem>
                        <MenuItem value={2037}>CAMARA MUNICIPAL DE TAPIRA</MenuItem>
                        <MenuItem value={204}>INSTITUTO DE PREVIDENCIA DE BERIZAL</MenuItem>
                        <MenuItem value={2041}>CAMARA MUNICIPAL DE TAQUARACU DE MINAS</MenuItem>
                        <MenuItem value={2045}>PREFEITURA MUNICIPAL DE TEIXEIRAS</MenuItem>
                        <MenuItem value={2047}>FUNDACAO MUNICIPAL DE SAUDE DE TEIXEIRAS</MenuItem>
                        <MenuItem value={2057}>PREFEITURA MUNICIPAL DE TIROS</MenuItem>
                        <MenuItem value={2058}>CAMARA MUNICIPAL DE TOCANTINS</MenuItem>
                        <MenuItem value={2059}>PREFEITURA MUNICIPAL DE TOCANTINS</MenuItem>
                        <MenuItem value={206}>PREFEITURA MUNICIPAL DE BETIM</MenuItem>
                        <MenuItem value={2062}>PREFEITURA MUNICIPAL DE TOCOS DO MOJI</MenuItem>
                        <MenuItem value={2064}>PREFEITURA MUNICIPAL DE TOLEDO</MenuItem>
                        <MenuItem value={2066}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2067}>CAMARA MUNICIPAL DE TOMBOS</MenuItem>
                        <MenuItem value={2068}>CAMARA MUNICIPAL DE TRES CORACOES - MG</MenuItem>
                        <MenuItem value={207}>INSTITUTO DE PESQUISA E POLITICA URBANA DE BETIM</MenuItem>
                        <MenuItem value={2071}>PREFEITURA MUNICIPAL DE TRES MARIAS</MenuItem>
                        <MenuItem value={2074}>CAMARA MUNICIPAL DE TRES PONTAS</MenuItem>
                        <MenuItem value={2075}>PREFEITURA MUNICIPAL DE TRES PONTAS</MenuItem>
                        <MenuItem value={2078}>PREFEITURA MUNICIPAL DE TUMIRITINGA</MenuItem>
                        <MenuItem value={2080}>CAMARA MUNICIPAL DE TUPACIGUARA</MenuItem>
                        <MenuItem value={2081}>PREFEITURA MUNICIPAL DE TUPACIGUARA</MenuItem>
                        <MenuItem value={2082}>DEPARTAMENTO DE AGUA E ESGOTO DE TUPACIGUARA</MenuItem>
                        <MenuItem value={2083}>CAMARA MUNICIPAL DE TURMALINA</MenuItem>
                        <MenuItem value={2085}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE TURMALINA</MenuItem>
                        <MenuItem value={2088}>CAMARA MUNICIPAL DE UBA</MenuItem>
                        <MenuItem value={2089}>PREFEITURA MUNICIPAL DE UBA</MenuItem>
                        <MenuItem value={2090}>EMPRESA MUNICIPAL DE HABITACAO E BEM ESTAR SOCIAL</MenuItem>
                        <MenuItem value={2091}>FUNDACAO MUNICIPAL IRAILDA RIBEIRO DOS SANTOS</MenuItem>
                        <MenuItem value={2092}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE UBA</MenuItem>
                        <MenuItem value={2093}>CAMARA MUNICIPAL DE UBAI</MenuItem>
                        <MenuItem value={2099}>AUTARQUIA DO ESTADIO MUNICIPAL ENG. JOAO GUIDO</MenuItem>
                        <MenuItem value={2100}>FUNDACAO DE ENSINO TECNICO INTENSIVO DR. RENE BARSAM</MenuItem>
                        <MenuItem value={2101}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS DE UBERABA</MenuItem>
                        <MenuItem value={2103}>COMPANHIA OPERACIONAL DE DESENVOLVIMENTO</MenuItem>
                        <MenuItem value={2106}>CAMARA MUNICIPAL DE UBERLANDIA</MenuItem>
                        <MenuItem value={2108}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2109}>FUNDACAO UBERLANDENSE DE TURISMO ESPORTE E LAZER</MenuItem>
                        <MenuItem value={2110}>INSTITUTO DOS SERVIDORES PUBLICOS DO MUNICIPIO DE UBERLANDIA</MenuItem>
                        <MenuItem value={2111}>FUNDACAO DE EXCELENCIA RURAL DE UBERLANDIA</MenuItem>
                        <MenuItem value={2113}>EMPRESA MUNICIPAL DE APOIO E MANUTENCAO</MenuItem>
                        <MenuItem value={2116}>PREFEITURA MUNICIPAL DE UMBURATIBA</MenuItem>
                        <MenuItem value={2117}>CAMARA MUNICIPAL DE UNAI</MenuItem>
                        <MenuItem value={2119}>SERVICO MUNICIPAL DE SANEAMENTO BASICO</MenuItem>
                        <MenuItem value={212}>CAMARA MUNICIPAL DE BIAS FORTES</MenuItem>
                        <MenuItem value={2120}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS</MenuItem>
                        <MenuItem value={2121}>CAMARA MUNICIPAL DE UNIAO DE MINAS</MenuItem>
                        <MenuItem value={2122}>PREFEITURA MUNICIPAL DE UNIAO DE MINAS</MenuItem>
                        <MenuItem value={2124}>PREFEITURA MUNICIPAL DE URUANA DE MINAS</MenuItem>
                        <MenuItem value={2126}>CAMARA MUNICIPAL DE URUCANIA</MenuItem>
                        <MenuItem value={2127}>PREFEITURA MUNICIPAL DE URUCANIA</MenuItem>
                        <MenuItem value={2130}>CAIXA DE APOSENTADORIA E PENSAO DOS SERVIDORES PUBLICOS DO MUNICIPIO DE URUCUIA</MenuItem>
                        <MenuItem value={2131}>CAMARA MUNICIPAL DE VARGEM ALEGRE</MenuItem>
                        <MenuItem value={2132}>PREFEITURA MUNICIPAL DE VARGEM ALEGRE</MenuItem>
                        <MenuItem value={2139}>FUNDACAO CULTURAL DO MUNICIPIO DE VARGINHA</MenuItem>
                        <MenuItem value={214}>PREFEITURA MUNICIPAL DE BICAS</MenuItem>
                        <MenuItem value={2140}>FUNDACAO HOSPITALAR DO MUNICIPIO DE VARGINHA</MenuItem>
                        <MenuItem value={2141}>GUARDA MUNICIPAL DE VARGINHA</MenuItem>
                        <MenuItem value={2142}>INPREV INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE VARGINHA</MenuItem>
                        <MenuItem value={2143}>SERVICO MUNICIPAL FUNERARIO E DE ORGANIZACAO DE LUTO</MenuItem>
                        <MenuItem value={2145}>PREFEITURA MUNICIPAL DE VARJAO DE MINAS</MenuItem>
                        <MenuItem value={2147}>CAMARA MUNICIPAL DE VARZEA DA PALMA</MenuItem>
                        <MenuItem value={215}>CAMARA MUNICIPAL DE BIQUINHAS</MenuItem>
                        <MenuItem value={2151}>CAMARA MUNICIPAL DE VARZELANDIA</MenuItem>
                        <MenuItem value={2155}>CAMARA MUNICIPAL DE VERDELANDIA</MenuItem>
                        <MenuItem value={2157}>CAMARA MUNICIPAL DE VEREDINHA</MenuItem>
                        <MenuItem value={2158}>PREFEITURA MUNICIPAL DE VEREDINHA</MenuItem>
                        <MenuItem value={2159}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE VEREDINHA</MenuItem>
                        <MenuItem value={216}>PREFEITURA MUNICIPAL DE BIQUINHAS</MenuItem>
                        <MenuItem value={2160}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={2161}>PREFEITURA MUNICIPAL DE VERISSIMO</MenuItem>
                        <MenuItem value={2162}>CAMARA MUNICIPAL DE VERMELHO NOVO</MenuItem>
                        <MenuItem value={2164}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2167}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE VESPASIANO</MenuItem>
                        <MenuItem value={2168}>CAMARA MUNICIPAL DE VICOSA</MenuItem>
                        <MenuItem value={2170}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2178}>CAMARA MUNICIPAL DE VIRGEM DA LAPA</MenuItem>
                        <MenuItem value={2180}>PREFEITURA MUNICIPAL DE VIRGINIA</MenuItem>
                        <MenuItem value={2181}>PREFEITURA MUNICIPAL DE VIRGINOPOLIS</MenuItem>
                        <MenuItem value={2183}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE VIRGINOPOLIS</MenuItem>
                        <MenuItem value={2185}>CAMARA MUNICIPAL DE VIRGOLANDIA</MenuItem>
                        <MenuItem value={2186}>CAMARA MUNICIPAL DE VISCONDE DO RIO BRANCO - MG</MenuItem>
                        <MenuItem value={2187}>PREFEITURA MUNICIPAL DE VISCONDE DO RIO BRANCO-MG</MenuItem>
                        <MenuItem value={219}>CAMARA MUNICIPAL DE BOA ESPERANCA</MenuItem>
                        <MenuItem value={2190}>PREFEITURA MUNICIPAL DE VOLTA GRANDE</MenuItem>
                        <MenuItem value={2192}>PREFEITURA MUNICIPAL DE WENCESLAU BRAZ</MenuItem>
                        <MenuItem value={2197}>SISTEMA AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={22}>PREFEITURA MUNICIPAL DE AGUANIL</MenuItem>
                        <MenuItem value={223}>CAMARA MUNICIPAL DE BOCAINA DE MINAS</MenuItem>
                        <MenuItem value={224}>PREFEITURA MUNICIPAL DE BOCAINA DE MINAS</MenuItem>
                        <MenuItem value={225}>CAMARA MUNICIPAL DE BOCAIUVA</MenuItem>
                        <MenuItem value={227}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE BOCAIUVA</MenuItem>
                        <MenuItem value={229}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={230}>CAMARA MUNICIPAL DE BOM DESPACHO</MenuItem>
                        <MenuItem value={235}>PREFEITURA MUNICIPAL DE BOM JARDIM DE MINAS</MenuItem>
                        <MenuItem value={237}>PREFEITURA MUNICIPAL DE BOM JESUS DA PENHA</MenuItem>
                        <MenuItem value={238}>FUNDO DE APOSENTADORIA E PENSAO DO SERVIDORES MUNICIPAIS</MenuItem>
                        <MenuItem value={239}>CAMARA MUNICIPAL DE BOM JESUS DO AMPARO</MenuItem>
                        <MenuItem value={240}>PREFEITURA MUNICIPAL DE BOM JESUS DO AMPARO</MenuItem>
                        <MenuItem value={242}>PREFEITURA MUNICIPAL DE BOM JESUS DO GALHO</MenuItem>
                        <MenuItem value={247}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DE BOM SUCESSO</MenuItem>
                        <MenuItem value={248}>CAMARA MUNICIPAL DE BONFIM</MenuItem>
                        <MenuItem value={2496}>AGENCIA REGL.DOS SERVICOS PUBLICOS DELEGADOS DO MUNICIPIO DE ANDRADAS</MenuItem>
                        <MenuItem value={2498}>JUIZ DE FORA PREVIDENCIA - JFPREV</MenuItem>
                        <MenuItem value={252}>CAMARA MUNICIPAL DE BONITO DE MINAS</MenuItem>
                        <MenuItem value={253}>BONITO DE MINAS PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={255}>PREFEITURA MUNICIPAL DE BORDA DA MATA</MenuItem>
                        <MenuItem value={258}>CAMARA MUNICIPAL DE BOTUMIRM</MenuItem>
                        <MenuItem value={26}>CAMARA MUNICIPAL DE AGUAS VERMELHAS</MenuItem>
                        <MenuItem value={261}>PREFEITURA MUNICIPAL DE BRASILANDIA DE MINAS</MenuItem>
                        <MenuItem value={264}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE BRASILIA DE MINAS</MenuItem>
                        <MenuItem value={268}>PREFEITURA MUNICIPAL DE BRAUNAS</MenuItem>
                        <MenuItem value={271}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE BRAZOPOLIS</MenuItem>
                        <MenuItem value={272}>CAMARA MUNICIPAL DE BRUMADINHO</MenuItem>
                        <MenuItem value={274}>CAMARA MUNICIPAL DE BUENO BRANDAO</MenuItem>
                        <MenuItem value={275}>PREFEITURA MUNICIPAL DE BUENO BRANDAO</MenuItem>
                        <MenuItem value={277}>PREFEITURA MUNICIPAL DE BUENOPOLIS</MenuItem>
                        <MenuItem value={278}>CAMARA MUNICIPAL DE BUGRE</MenuItem>
                        <MenuItem value={279}>PREFEITURA MUNICIPAL DE BUGRE</MenuItem>
                        <MenuItem value={28}>FUNDACAO HOSPITAL MUNICIPAL SANTA LUCIA</MenuItem>
                        <MenuItem value={280}>CAMARA MUNICIPAL DE BURITIS</MenuItem>
                        <MenuItem value={282}>INSTITUTO DE PREVIDENCIA DE BURITIS</MenuItem>
                        <MenuItem value={283}>CAMARA MUNICIPAL DE BURITIZEIRO</MenuItem>
                        <MenuItem value={286}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={290}>FUNDO DE PREVIDENCIA SOCIAL MUNICIPIO DE CABECEIRA GRANDE</MenuItem>
                        <MenuItem value={295}>PREFEITURA MUNICIPAL DE CACHOEIRA DE MINAS</MenuItem>
                        <MenuItem value={297}>CAMARA MUNICIPAL DE VEREADORES DE CACHOEIRA DOURADA MG</MenuItem>
                        <MenuItem value={30}>PREFEITURA MUNICIPAL DE AIMORES</MenuItem>
                        <MenuItem value={301}>PREFEITURA MUNICIPAL DE CAETANOPOLIS</MenuItem>
                        <MenuItem value={302}>CAMARA MUNICIPAL DE CAETE</MenuItem>
                        <MenuItem value={304}>SERVICO AUTONOMO DE AGUA E ESGOTO DE CAETE</MenuItem>
                        <MenuItem value={306}>FUNDACAO EDUCACIONAL DE CAETE</MenuItem>
                        <MenuItem value={309}>FUNDO DE APOSENTADORIA E PREVIDENCIA SOCIAL DOS SERVIDORES PUBLICOS DO MUNICIPIO DE CAIANA</MenuItem>
                        <MenuItem value={31}>SAAE-SERVICO AUTONOMO DE AGUA E ESGOTO DE AIMORES</MenuItem>
                        <MenuItem value={310}>PREFEITURA MUNICIPAL DE CAJURI</MenuItem>
                        <MenuItem value={312}>PREFEITURA MUNICIPAL DE CALDAS</MenuItem>
                        <MenuItem value={317}>CAMARA MUNICIPAL DE CAMANDUCAIA</MenuItem>
                        <MenuItem value={32}>CAMARA MUNICIPAL DE AIURUOCA</MenuItem>
                        <MenuItem value={321}>SERVICO AUTONOMO DE AGUA E ESGOTO-CAMBUI</MenuItem>
                        <MenuItem value={322}>FUNDO DE APOSENTADORIA E PENSAO DO SERVIDOR PUBLICO MUNICIPAL</MenuItem>
                        <MenuItem value={324}>MUNICIPIO DE CAMBUQUIRA</MenuItem>
                        <MenuItem value={325}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={327}>CAMARA MUNICIPAL DE CAMPANARIO</MenuItem>
                        <MenuItem value={328}>REGIME PROPRIO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE CAMPANARIO</MenuItem>
                        <MenuItem value={33}>PREFEITURA MUNICIPAL DE AIURUOCA</MenuItem>
                        <MenuItem value={333}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={335}>PREFEITURA MUNICIPAL CAMPINA VERDE</MenuItem>
                        <MenuItem value={338}>CAMARA MUNICIPAL DE CAMPO BELO</MenuItem>
                        <MenuItem value={340}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={342}>FUNDACAO CASA DA CULTURA DE CAMPO BELO</MenuItem>
                        <MenuItem value={343}>CAMARA MUNICIPAL DE CAMPO DO MEIO</MenuItem>
                        <MenuItem value={345}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={347}>PREFEITURA MUNICIPAL DE CAMPO FLORIDO</MenuItem>
                        <MenuItem value={350}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE CAMPOS ALTOS</MenuItem>
                        <MenuItem value={351}>CAMARA MUNICIPAL DE CAMPOS GERAIS</MenuItem>
                        <MenuItem value={352}>PREFEITURA MUNICIPAL DE CAMPOS GERAIS</MenuItem>
                        <MenuItem value={355}>CAMARA MUNICIPAL DE CANAA</MenuItem>
                        <MenuItem value={356}>CAMARA MUNICIPAL DE CANAPOLIS</MenuItem>
                        <MenuItem value={357}>PREFEITURA MUNICIPAL DE CANAPOLIS</MenuItem>
                        <MenuItem value={361}>PREFEITURA MUNICIPAL DE CANDEIAS</MenuItem>
                        <MenuItem value={362}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DE CANDEIAS</MenuItem>
                        <MenuItem value={363}>CAMARA MUNICIPAL DE CANTAGALO</MenuItem>
                        <MenuItem value={365}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE CANTAGALO</MenuItem>
                        <MenuItem value={367}>PREFEITURA MUNICIPAL DE CAPARAO</MenuItem>
                        <MenuItem value={368}>INSTITUTO DE PREVIDENCIA MUNICIPAL</MenuItem>
                        <MenuItem value={37}>INSTITUTO PREVIDENCIARIO DE ALAGOA - ALAGOAPREV</MenuItem>
                        <MenuItem value={370}>MUNICIPIO DE CAPELA NOVA</MenuItem>
                        <MenuItem value={371}>CAMARA MUNICIPAL DE CAPELINHA</MenuItem>
                        <MenuItem value={372}>PREFEITURA MUNICIPAL DE CAPELINHA</MenuItem>
                        <MenuItem value={376}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={379}>CAPINOPOLIS PREV</MenuItem>
                        <MenuItem value={382}>PREFEITURA MUNICIPAL DE CAPITAO ENEAS</MenuItem>
                        <MenuItem value={386}>PREFEITURA MUNICIPAL DE CAPITOLIO</MenuItem>
                        <MenuItem value={387}>CAMARA MUNICIPAL DE CAPUTIRA</MenuItem>
                        <MenuItem value={388}>PREFEITURA MUNICIPAL DE CAPUTIRA</MenuItem>
                        <MenuItem value={389}>REGIME PUBLICO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE CAPUTIRA</MenuItem>
                        <MenuItem value={392}>FUNDACAO MUNICIPAL DE SAUDE DE CARAI</MenuItem>
                        <MenuItem value={395}>CAMARA MUNICIPAL DE CARANDAI</MenuItem>
                        <MenuItem value={399}>CAMARA MUNICIPAL DE CARANGOLA</MenuItem>
                        <MenuItem value={402}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE CARANGOLA</MenuItem>
                        <MenuItem value={404}>PREFEITURA DE CARATINGA</MenuItem>
                        <MenuItem value={41}>PREFEITURA MUNICIPAL DE ALEM PARAIBA</MenuItem>
                        <MenuItem value={413}>PREFEITURA MUNICIPAL DE CARLOS CHAGAS</MenuItem>
                        <MenuItem value={414}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE CARLOS CHAGAS</MenuItem>
                        <MenuItem value={416}>CAMARA MUNICIPAL DE CARMESIA</MenuItem>
                        <MenuItem value={417}>FUNDO DE APOSENTADORIA E PENSAO DO SERVIDOR PUBLICO MUNICIPAL DE CARMESIA</MenuItem>
                        <MenuItem value={423}>SERVICO AUTONOMO DE AGUA E ESGOTO DE CARMO DA MATA</MenuItem>
                        <MenuItem value={426}>SERVICO AUTONOMO DE AGUA E ESGOTO DE CARMO DE MINAS</MenuItem>
                        <MenuItem value={427}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={428}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={429}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DE CARMO DO CAJURU</MenuItem>
                        <MenuItem value={430}>SERVICO AUTARQUICO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={431}>CAMARA MUNICIPAL DE CARMO DO PARANAIBA</MenuItem>
                        <MenuItem value={432}>PREFEITURA MUNICIPAL DE CARMO DO PARANAIBA</MenuItem>
                        <MenuItem value={433}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE CARMO DO PARANAIBA</MenuItem>
                        <MenuItem value={434}>CAMARA MUNICIPAL DE CARMO DO RIO CLARO</MenuItem>
                        <MenuItem value={438}>SERVICO DE SANEAMENTO AMBIENTAL MUNICIPAL</MenuItem>
                        <MenuItem value={439}>CAMARA MUNICIPAL DE CARNEIRINHO</MenuItem>
                        <MenuItem value={44}>PREFEITURA MUNICIPAL DE ALFENAS</MenuItem>
                        <MenuItem value={440}>PREFEITURA MUNICIPAL DE CARNEIRINHO</MenuItem>
                        <MenuItem value={441}>CAMARA MUNICIPAL DE CARRANCAS</MenuItem>
                        <MenuItem value={442}>PREFEITURA MUNICIPAL DE CARRANCAS</MenuItem>
                        <MenuItem value={443}>PREFEITURA MUNICIPAL DE CARVALHOPOLIS</MenuItem>
                        <MenuItem value={446}>PREFEITURA MUNICIPAL DE CARVALHOS</MenuItem>
                        <MenuItem value={447}>CAMARA MUNICIPAL DE VEREADORES</MenuItem>
                        <MenuItem value={448}>PREFEITURA MUNICIPAL DE CASA GRANDE</MenuItem>
                        <MenuItem value={450}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={452}>CAMARA MUNICIPAL DE CASSIA</MenuItem>
                        <MenuItem value={453}>PREFEITURA MUNICIPAL DE CASSIA</MenuItem>
                        <MenuItem value={455}>PREFEITURA MUNICIPAL DE CONCEICAO DA BARRA DE MINAS</MenuItem>
                        <MenuItem value={457}>PREFEITURA MUNICIPAL DE CATAGUASES</MenuItem>
                        <MenuItem value={458}>CAMARA MUNICIPAL DE CATAS ALTAS - MG</MenuItem>
                        <MenuItem value={459}>PREFEITURA MUNICIPAL DE CATAS ALTAS - MG</MenuItem>
                        <MenuItem value={46}>CAMARA MUNICIPAL DE ALFREDO VASCONCELOS</MenuItem>
                        <MenuItem value={461}>EXECUTIVO</MenuItem>
                        <MenuItem value={462}>PREFEITURA MUNICIPAL DE CATUJI</MenuItem>
                        <MenuItem value={463}>CAMARA MUNICIPAL DE CATUJI</MenuItem>
                        <MenuItem value={464}>CAMARA MUNICIPAL DE CATUTI</MenuItem>
                        <MenuItem value={466}>CAMARA MUNICIPAL DE CAXAMBU</MenuItem>
                        <MenuItem value={467}>PREFEITURA MUNICIPAL DE CAXAMBU</MenuItem>
                        <MenuItem value={470}>PREFEITURA MUNICIPAL DE CEDRO DO ABAETE</MenuItem>
                        <MenuItem value={472}>PREFEITURA MUNICIPAL DE CENTRAL DE MINAS</MenuItem>
                        <MenuItem value={473}>SERVICO AUTONOMO DE AGUA E ESGOTO (SAAE)</MenuItem>
                        <MenuItem value={474}>CAMARA MUNICIPAL DE CENTRALINA</MenuItem>
                        <MenuItem value={475}>PREFEITURA MUNICIPAL DE CENTRALINA</MenuItem>
                        <MenuItem value={48}>PREFEITURA MUNICIPAL DE ALMENARA</MenuItem>
                        <MenuItem value={481}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={482}>CAMARA MUNICIPAL DE CHAPADA DO NORTE</MenuItem>
                        <MenuItem value={484}>CAMARA MUNICIPAL DE CHAPADA GAUCHA</MenuItem>
                        <MenuItem value={487}>CAMARA MUNICIPAL DE CHIADOR</MenuItem>
                        <MenuItem value={488}>PREFEITURA MUNICIPAL DE CHIADOR</MenuItem>
                        <MenuItem value={49}>CAMARA MUNICIPAL DE ALPERCATA</MenuItem>
                        <MenuItem value={491}>PREFEITURA MUNICIPAL DE CIPOTANEA</MenuItem>
                        <MenuItem value={493}>PREFEITURA MUNICIPAL DE CLARAVAL</MenuItem>
                        <MenuItem value={495}>PREFEITURA MUNICIPAL DE CLARO DOS POCOES</MenuItem>
                        <MenuItem value={497}>PREFEITURA MUNICIPAL DE CLAUDIO</MenuItem>
                        <MenuItem value={499}>PREFEITURA MUNICIPAL DE COIMBRA</MenuItem>
                        <MenuItem value={50}>PREFEITURA MUNICIPAL DE ALPERCATA</MenuItem>
                        <MenuItem value={500}>FUNDO DE PREVIDENCIA DE COIMBRA</MenuItem>
                        <MenuItem value={502}>PREFEITURA MUNICIPAL DE COLUNA</MenuItem>
                        <MenuItem value={506}>CAMARA MUNICIPAL DE COMERCINHO</MenuItem>
                        <MenuItem value={510}>CAMARA MUNICIPAL DE CONCEICAO DAS PEDRAS</MenuItem>
                        <MenuItem value={512}>PREFEITURA MUNICIPAL DE CONCEICAO DAS ALAGOAS</MenuItem>
                        <MenuItem value={516}>PREFEITURA MUNICIPAL DE CONCEICAO DE IPANEMA</MenuItem>
                        <MenuItem value={518}>PREFEITURA MUNICIPAL DE CONCEICAO DO MATO DENTRO</MenuItem>
                        <MenuItem value={519}>CAMARA MUNICIPAL DE CONCEICAO DO MATO DENTRO</MenuItem>
                        <MenuItem value={52}>CAMARA MUNICIPAL DE ALPINOPOLIS</MenuItem>
                        <MenuItem value={525}>CAMARA MUNICIPAL DE CONCEICAO DOS OUTROS</MenuItem>
                        <MenuItem value={527}>CAMARA MUNICIPAL DE CONEGO MARINHO</MenuItem>
                        <MenuItem value={529}>PREFEITURA MUNICIPAL DE CONFINS</MenuItem>
                        <MenuItem value={53}>PREFEITURA MUNICIPAL DE ALPINOPOLIS</MenuItem>
                        <MenuItem value={530}>CAMARA MUNICIPAL DE CONFINS</MenuItem>
                        <MenuItem value={532}>PREFEITURA MUNICIPAL DE CONGONHAL</MenuItem>
                        <MenuItem value={533}>PREFEITURA MUNICIPAL DE CONGONHAS</MenuItem>
                        <MenuItem value={535}>PREVCON-PREVIDENCIA DO MUNICIPIO DE CONGONHAS</MenuItem>
                        <MenuItem value={536}>FUNDACAO MUNICIPAL DE CULTURA LAZER E TURISMO</MenuItem>
                        <MenuItem value={537}>CAMARA MUNICIPAL DE CONGONHAS DO NORTE</MenuItem>
                        <MenuItem value={538}>PREFEITURA MUNICIPAL DE CONGONHAS DO NORTE</MenuItem>
                        <MenuItem value={539}>CAMARA MUNICIPAL DE CONQUISTA</MenuItem>
                        <MenuItem value={540}>PREFEITURA MUNICIPAL DE CONQUISTA</MenuItem>
                        <MenuItem value={541}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={542}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={543}>PREFEITURA MUNICIPAL DE CONSELHEIRO PENA</MenuItem>
                        <MenuItem value={547}>CAMARA MUNICIPAL DE CONSOLACAO</MenuItem>
                        <MenuItem value={55}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={551}>COMPANHIA MUNICIPAL DE HABITACAO OBRAS SERV.</MenuItem>
                        <MenuItem value={553}>FUNDACAO DE ENSINO DE CONTAGEM</MenuItem>
                        <MenuItem value={554}>FUND. MUNICIPAL DE PARQUES E AREAS VERDES DE CONTAGEM</MenuItem>
                        <MenuItem value={556}>FUND.DE ASSIT.MEDICA DE URG. CONTAGEM</MenuItem>
                        <MenuItem value={557}>FUNDACAO CULTURAL DO MUNICIPIO DE CONTAGEM</MenuItem>
                        <MenuItem value={558}>INSTITUTO DE PLANEJAMENTO URBANO DO MUNICIPIO DE CONTAGEM</MenuItem>
                        <MenuItem value={559}>CAMARA MUNICIPAL DE COQUEIRAL</MenuItem>
                        <MenuItem value={562}>CAMARA MUNICIPAL DE CORACAO DE JESUS</MenuItem>
                        <MenuItem value={566}>PREFEITURA MUNICIPAL DE CORDISBURGO</MenuItem>
                        <MenuItem value={569}>CAMARA MUNICIPAL DE CORDISLANDIA</MenuItem>
                        <MenuItem value={570}>PREFEITURA MUNICIPAL DE CORDISLANDIA</MenuItem>
                        <MenuItem value={575}>CAMARA MUNICIPAL DE COROACI</MenuItem>
                        <MenuItem value={578}>PREFEITURA MUNICIPAL DE COROMANDEL</MenuItem>
                        <MenuItem value={579}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS</MenuItem>
                        <MenuItem value={58}>CAMARA MUNICIPAL DE ALTO RIO DOCE</MenuItem>
                        <MenuItem value={580}>CAMARA MUNICIPAL DE CORONEL FABRICIANO</MenuItem>
                        <MenuItem value={582}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE CORONEL FABRICIANO</MenuItem>
                        <MenuItem value={588}>PRFEITURA MUNICIPAL DE CORONEL XAVIER CHAVES</MenuItem>
                        <MenuItem value={589}>PREFEITURA MUNICIPAL DE CORREGO DANTA</MenuItem>
                        <MenuItem value={590}>CAMARA MUNICIPAL DE CORREGO DANTA</MenuItem>
                        <MenuItem value={591}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE CORREGO DANTA</MenuItem>
                        <MenuItem value={593}>CAMARA MUNICIPAL DE CORREGO DO BOM JESUS</MenuItem>
                        <MenuItem value={595}>PREFEITURA MUNICIPAL DE CORREGO FUNDO</MenuItem>
                        <MenuItem value={597}>CAMARA MUNICIPAL DE CORREGO NOVO</MenuItem>
                        <MenuItem value={6}>PREFEITURA MUNICIPAL DE ABADIA DOS DOURADOS</MenuItem>
                        <MenuItem value={60}>PREFEITURA MUNICIPAL DE ALVARENGA</MenuItem>
                        <MenuItem value={600}>PREFEITURA MUNICIPAL DE COUTO DE MAGALHAES DE MINAS</MenuItem>
                        <MenuItem value={601}>CAMARA MUNICIPAL DE CRISOLITA</MenuItem>
                        <MenuItem value={61}>CAMARA MUNICIPAL DE ALVARENGA</MenuItem>
                        <MenuItem value={610}>CAMARA MUNICIPAL DE CRISTINA</MenuItem>
                        <MenuItem value={613}>CAMARA MUNICIPAL DE CRUZEIRO DA FORTALEZA</MenuItem>
                        <MenuItem value={615}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE CRUZEIRO DA FORTALEZA</MenuItem>
                        <MenuItem value={616}>CAMARA DE CRUZILIA</MenuItem>
                        <MenuItem value={618}>PODER EXECUTIVO MUNICIPAL</MenuItem>
                        <MenuItem value={619}>PODER LEGISLATIVO MUNICIPAL</MenuItem>
                        <MenuItem value={62}>CAMARA MUNCIIPAL DE ALVINOPOLIS</MenuItem>
                        <MenuItem value={621}>PREFEITURA MUNICIPAL DE CURRAL DE DENTRO</MenuItem>
                        <MenuItem value={622}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={625}>PREFEITURA MUNICIPAL DE DATAS</MenuItem>
                        <MenuItem value={627}>PREFEITURA MUNICIPAL DE DELFIM MOREIRA</MenuItem>
                        <MenuItem value={628}>PREFEITURA MUNICIPAL DE DELFINOPOLIS</MenuItem>
                        <MenuItem value={629}>CAMARA MUNICIPAL DE DELFINOPOLIS</MenuItem>
                        <MenuItem value={635}>PREFEITURA MUNICIPAL DE DESTERRO DE ENTRE RIOS</MenuItem>
                        <MenuItem value={639}>PREFEITURA MUNICIPAL DE DIAMANTIANA</MenuItem>
                        <MenuItem value={64}>INSTITUTO PREV.SOCIAL DO MUN.DE ALVINOPOLIS</MenuItem>
                        <MenuItem value={640}>CAMARA MUNICIPAL DE DIAMANTINA</MenuItem>
                        <MenuItem value={641}>FUNDO MUNICIPAL DE PREVIDENCIA SOCIAL</MenuItem>
                        <MenuItem value={646}>PREFEITURA MUNICIPAL DE DIONISIO</MenuItem>
                        <MenuItem value={648}>PREFEITURA MUNICIPAL DE DIVINESIA</MenuItem>
                        <MenuItem value={649}>PREFEITURA MUNICIPAL DE DIVINO</MenuItem>
                        <MenuItem value={65}>CAMARA MUNICIPAL DE ALVORADA DE MINAS</MenuItem>
                        <MenuItem value={650}>CAMARA MUNICIPAL DE DIVINO</MenuItem>
                        <MenuItem value={653}>PREF MUN DE DIVINO DAS LARANJEIRAS</MenuItem>
                        <MenuItem value={657}>CAMARA MUNICIPAL DE DIVINOPOLIS</MenuItem>
                        <MenuItem value={659}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE DIVINOPOLIS</MenuItem>
                        <MenuItem value={660}>CONSORCIO INTERMUNICIPAL DE SAUDE DA REGIAO DO VALE DO ITAPECERICA</MenuItem>
                        <MenuItem value={661}>CONSRCIO INTERMUNICIPAL DE SADE DA REGIO AMPLIADA OESTE PARA GER DOS SERV DE URG E EMERG</MenuItem>
                        <MenuItem value={663}>CAMARA MUNICIPAL DE DIVISA ALEGRE</MenuItem>
                        <MenuItem value={667}>CAMARA MUNICIPAL DE DIVISOPOLIS</MenuItem>
                        <MenuItem value={669}>PREFEITURA MUNICIPAL DE DOMBOSCO</MenuItem>
                        <MenuItem value={673}>PREFEITURA MUNICIPAL DE DOM JOAQUIM</MenuItem>
                        <MenuItem value={674}>CAMARA MUNICIPAL DE DOM JOAQUIM</MenuItem>
                        <MenuItem value={676}>CAMARA MUNICIPAL DE DOM SILVERIO</MenuItem>
                        <MenuItem value={679}>PREFEITURA MUNICIPAL DE DONA EUZEBIA</MenuItem>
                        <MenuItem value={680}>CAMARA MUNICIPAL DE DONA EUZEBIA</MenuItem>
                        <MenuItem value={682}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={684}>CAMARA MUNICIPAL DE DORES DE GUANHAES</MenuItem>
                        <MenuItem value={685}>CAMARA MUNICIPAL DE DORES DO INDAIA</MenuItem>
                        <MenuItem value={686}>PREFEITURA MUNICIPAL DE DORES DO INDAIA</MenuItem>
                        <MenuItem value={692}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={696}>CAMARA MUNICIPAL DE ELOI MENDES</MenuItem>
                        <MenuItem value={697}>MUNICIPIO DE ELOI MENDES PREFEITURA</MenuItem>
                        <MenuItem value={698}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={700}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={701}>INSTITUTO MUNICIPAL DE PREVIDENCIA DE ENGENHEIRO CALDAS</MenuItem>
                        <MenuItem value={702}>CAMARA MUNICIPAL DE ENGENHEIRO NAVARRO</MenuItem>
                        <MenuItem value={704}>CAMARA MUNICIPAL DE ENTRE FOLHAS</MenuItem>
                        <MenuItem value={705}>PREFEITURA MUNICIPAL DE ENTRE FOLHAS</MenuItem>
                        <MenuItem value={706}>PREFEITURA  MUNICIPAL DE ENTRE RIOS DE MINAS</MenuItem>
                        <MenuItem value={708}>CAMARA MUNICIPAL DE ERVALIA</MenuItem>
                        <MenuItem value={709}>PREFEITURA MUNICIPAL DE ERVALIA</MenuItem>
                        <MenuItem value={71}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE ANDRADAS</MenuItem>
                        <MenuItem value={713}>PREFEITURA MUNICIPAL DE ESPERA FELIZ</MenuItem>
                        <MenuItem value={715}>CAMARA MUNICIPAL DE ESPINOSA</MenuItem>
                        <MenuItem value={716}>PREFEITURA MUNICIPAL DE ESPINOSA</MenuItem>
                        <MenuItem value={717}>FUNDACAO HOSPITALAR DE SAUDE ESPINOSA</MenuItem>
                        <MenuItem value={719}>CAMARA MUNICIPAL DE ESPIRITO SANTO DO DOURADO</MenuItem>
                        <MenuItem value={720}>PREFEITURA MUNICIPAL DE ESPIRITO SANTO DO DOURADO</MenuItem>
                        <MenuItem value={722}>CAMARA MUNICIPAL DE ESTIVA</MenuItem>
                        <MenuItem value={723}>CAMARA MUNICIPAL DE ESTRELA DALVA</MenuItem>
                        <MenuItem value={730}>CAMARA MUNICIPAL DE ESTRELA DO SUL</MenuItem>
                        <MenuItem value={731}>CAMARA MUNICIPAL DE EUGENOPOLIS</MenuItem>
                        <MenuItem value={732}>PREFEITURA MUNICIPAL DE EUGENOPOLIS</MenuItem>
                        <MenuItem value={742}>CAMARA MUNICIPAL DE FELICIO DOS SANTOS</MenuItem>
                        <MenuItem value={744}>CAMARA MUNICIPAL DE SAO GONCALO DO RIO PRETO</MenuItem>
                        <MenuItem value={745}>PREFEITURA MUNICIPAL DE SAO GONCALO DO RIO PRETO</MenuItem>
                        <MenuItem value={746}>PREFEITURA MUNICIPAL DE FELISBURGO</MenuItem>
                        <MenuItem value={748}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE FELISBURGO</MenuItem>
                        <MenuItem value={750}>PREFEITURA MUNICIPAL DE FELIXLANDIA</MenuItem>
                        <MenuItem value={751}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE FELIXLANDIA</MenuItem>
                        <MenuItem value={752}>PODER EXECUTIVO</MenuItem>
                        <MenuItem value={753}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={754}>CAMARA MUNICIPAL DE FERROS</MenuItem>
                        <MenuItem value={758}>SERVICO AUTONOMO AGUA E ESGOTO</MenuItem>
                        <MenuItem value={761}>CAMARA MUNICIPAL DE FLORESTAL</MenuItem>
                        <MenuItem value={762}>PREFEITURA MUNICIPAL DE FLORESTAL</MenuItem>
                        <MenuItem value={763}>FUNDO PREVIDENCIARIO DO MUNICIPIO DE FLORESTAL</MenuItem>
                        <MenuItem value={764}>CAMARA MUNICIPAL DE FORMIGA</MenuItem>
                        <MenuItem value={766}>SAAE-SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={77}>PREFEITURA MUNICIPAL DE ANGELANDIA</MenuItem>
                        <MenuItem value={772}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES DE FORTALEZA DE MINAS</MenuItem>
                        <MenuItem value={774}>CAMARA MUNICIPAL DE FORTUNA DE MINAS</MenuItem>
                        <MenuItem value={775}>CAMARA MUNICIPAL DE FRANCISCO BADARO</MenuItem>
                        <MenuItem value={777}>CAMARA DE FRANCISCO DUMONT</MenuItem>
                        <MenuItem value={778}>PREFEITURA DE FRANCISCO DUMONT</MenuItem>
                        <MenuItem value={78}>CAMARA MUNICIPAL DE ANGELANDIA</MenuItem>
                        <MenuItem value={781}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE FRANCISCO SA</MenuItem>
                        <MenuItem value={783}>CAMARA MUNICIPAL DE FRANCISCOPOLIS</MenuItem>
                        <MenuItem value={784}>PREFEITURA MUNICIPAL DE FRANCISCOPOLIS</MenuItem>
                        <MenuItem value={785}>CAMARA MUNICIPAL DE FREI GASPAR</MenuItem>
                        <MenuItem value={788}>PREFEITURA MUNICIPAL FREI INOCENCIO</MenuItem>
                        <MenuItem value={789}>PREFEITURA MUNICIPAL DE FREI LAGONEGRO</MenuItem>
                        <MenuItem value={793}>PREFEITURA MUNICIPAL DE FRONTEIRA DOS VALES</MenuItem>
                        <MenuItem value={797}>PREFEITURA MUNICIPAL DE FRUTA DE LEITE</MenuItem>
                        <MenuItem value={798}>CAMARA MUNICIPAL DE FRUTAL</MenuItem>
                        <MenuItem value={8}>CAMARA MUNICIPAL DE ABAETE</MenuItem>
                        <MenuItem value={80}>PREFEITURA MUNICIPAL ANTONIO CARLOS</MenuItem>
                        <MenuItem value={801}>FUNDACAO EDUCACIONAL DE ENSINO SUPERIOR</MenuItem>
                        <MenuItem value={805}>CAMARA MUNICIPAL DE GALILEIA</MenuItem>
                        <MenuItem value={807}>CAMARA MUNICIPAL DE GAMELEIRAS</MenuItem>
                        <MenuItem value={81}>FUNDO MUNICIPAL DE SAUDE</MenuItem>
                        <MenuItem value={812}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={815}>PREFEITURA MUNICIPAL DE GOIANA</MenuItem>
                        <MenuItem value={816}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={818}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE GONCALVES - PREVGON</MenuItem>
                        <MenuItem value={820}>CAMARA MUNICIPAL DE GONZAGA</MenuItem>
                        <MenuItem value={821}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={824}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={827}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE GOVERNADOR VALADARES</MenuItem>
                        <MenuItem value={829}>CAMARA MUNICIPAL DE GRAO MOGOL</MenuItem>
                        <MenuItem value={83}>PREFEITURA MUNICIPAL DE ANTONIO DIAS</MenuItem>
                        <MenuItem value={830}>PREFEITURA MUNICIPAL DE GRAO MOGOL</MenuItem>
                        <MenuItem value={831}>CAMARA MUNICIPAL DE GRUPIARA</MenuItem>
                        <MenuItem value={832}>PREFEITURA MUNICIPAL DE GRUPIARA</MenuItem>
                        <MenuItem value={833}>PODER EXECUTIVO MUNICIPAL</MenuItem>
                        <MenuItem value={834}>PODER LEGISLATIVO MUNICIPAL</MenuItem>
                        <MenuItem value={835}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={836}>INSTITUTO MUNICIPAL DE PREVIDENCIA</MenuItem>
                        <MenuItem value={838}>PREFEITURA MUNICPAL DE GUAPE</MenuItem>
                        <MenuItem value={845}>CAMARA MUNICIPAL DE GUARANESIA</MenuItem>
                        <MenuItem value={847}>FUNDACAO MUNICIPAL DE SAUDE</MenuItem>
                        <MenuItem value={848}>CAMARA MUNICIPAL DE GUARANI</MenuItem>
                        <MenuItem value={852}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={857}>CAMARA MUNICIPAL DE GUAXUPE</MenuItem>
                        <MenuItem value={858}>EMPRESA MUNICIPAL DE URBANIZACAO - EMURB</MenuItem>
                        <MenuItem value={859}>CAMARA MUNICIPAL DE GUIDOVAL</MenuItem>
                        <MenuItem value={86}>CAMARA MUNICIPAL DE ARACAI</MenuItem>
                        <MenuItem value={862}>PREFEITURA MUNICIPAL DE GUIMARANIA</MenuItem>
                        <MenuItem value={864}>FUNDO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS</MenuItem>
                        <MenuItem value={865}>CAMARA MUNICIPAL DE GUIRICEMA</MenuItem>
                        <MenuItem value={866}>PREFEITURA MUNICIPAL DE GUIRICEMA</MenuItem>
                        <MenuItem value={867}>FUNDO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE GUIRICEMA</MenuItem>
                        <MenuItem value={87}>PREFEITURA MUNICIPAL DE ARACAI</MenuItem>
                        <MenuItem value={870}>FUPREMG</MenuItem>
                        <MenuItem value={871}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={873}>INSTITUTO DE PREVIDENCIA MUNICIPAL</MenuItem>
                        <MenuItem value={874}>CAMARA MUNICIPAL DE IAPU</MenuItem>
                        <MenuItem value={877}>PREFEITURA MUNICIPAL DE IBERTIOGA</MenuItem>
                        <MenuItem value={881}>CAMARA MUNICIPAL DE IBIAI</MenuItem>
                        <MenuItem value={885}>CAMARA MUNICIPAL DE IBIRACI</MenuItem>
                        <MenuItem value={886}>PREFEITURA MUNICIPAL DE IBIRACI</MenuItem>
                        <MenuItem value={888}>CAMARA MUNICIPAL DE IBIRITE</MenuItem>
                        <MenuItem value={89}>CAMARA MUNICIPAL DE ARACITABA</MenuItem>
                        <MenuItem value={890}>PRFEITURA MUNICIPAL DE IBITIURA DE MINAS</MenuItem>
                        <MenuItem value={893}>PREFEITURA</MenuItem>
                        <MenuItem value={894}>CAMARA MUNICIPAL DE ICARAI DE MINAS</MenuItem>
                        <MenuItem value={895}>PREFEITURA MUNICIPAL DE ICARAI DE MINAS</MenuItem>
                        <MenuItem value={90}>PREFEITURA MUNICIPAL DE ARACUAI</MenuItem>
                        <MenuItem value={901}>CAMARA MUNICIPAL DE IGUATAMA</MenuItem>
                        <MenuItem value={902}>PREFEITURA MUNICIPAL DE IGUATAMA</MenuItem>
                        <MenuItem value={903}>FUNDO APOSENTADORIA PENSAO SERVIDORES PUBLICOS MUNICIPAIS IGUATAMA FAPEM</MenuItem>
                        <MenuItem value={905}>CAMARA MUNICIPAL DE IJACI</MenuItem>
                        <MenuItem value={907}>CAMARA MUNICIPAL DE ILICINEA - MG</MenuItem>
                        <MenuItem value={91}>CAMARA MUNICIPAL DE ARACUAI</MenuItem>
                        <MenuItem value={910}>PREFEITURA MUNICIPAL DE IMBE DE MINAS</MenuItem>
                        <MenuItem value={911}>PREFEITURA MUNICIPAL DE INCONFIDENTES</MenuItem>
                        <MenuItem value={912}>CAMARA MUNICIPAL DE INCONFIDENTES</MenuItem>
                        <MenuItem value={914}>CAMARA MUNICIPAL DE INDAIABIRA</MenuItem>
                        <MenuItem value={915}>CAMARA MUNICIPAL DE INDIANOPOLIS</MenuItem>
                        <MenuItem value={917}>PREFEITURA MUNICIPAL DE INGAI</MenuItem>
                        <MenuItem value={918}>CAMARA MUNICIPAL DE INGAI</MenuItem>
                        <MenuItem value={92}>CAMARA MUNICIPAL DE ARAGUARI</MenuItem>
                        <MenuItem value={921}>PREFEITURA MUNICIPAL DE INHAUMA</MenuItem>
                        <MenuItem value={923}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE INHAUMA</MenuItem>
                        <MenuItem value={924}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={925}>PREFEITURA DE INIMUTABA</MenuItem>
                        <MenuItem value={926}>CAMARA MUNICIPAL DE IPABA</MenuItem>
                        <MenuItem value={93}>PREFEITURA MUNICIPAL DE ARAGUARI</MenuItem>
                        <MenuItem value={930}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={931}>CAMARA MUNICIPAL DE IPATINGA</MenuItem>
                        <MenuItem value={932}>PREFEITURA MUNICIPAL DE IPATINGA</MenuItem>
                        <MenuItem value={934}>PREFEITURA MUNICIPAL DE IPIACU</MenuItem>
                        <MenuItem value={939}>CAMARA MUNICIPAL DE IRAI DE MINAS</MenuItem>
                        <MenuItem value={94}>SUPERINTENDENCIA DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={940}>CAMARA MUNICIPAL DE ITABIRA</MenuItem>
                        <MenuItem value={941}>PREFEITURA MUNICIPAL DE ITABIRA</MenuItem>
                        <MenuItem value={942}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={943}>FUNDACAO CULTURAL CARLOS DRUMMOND DE ANDRADE</MenuItem>
                        <MenuItem value={945}>CAMARA MUNICIPAL DE ITABIRINHA</MenuItem>
                        <MenuItem value={946}>PREFEITURA MUNICIPAL DE ITABIRINHA</MenuItem>
                        <MenuItem value={948}>PREFEITURA MUNICIPAL DE ITABIRITO</MenuItem>
                        <MenuItem value={95}>FUNDACAO ARAGUARINA DE EDUCACAO E CULTURA</MenuItem>
                        <MenuItem value={951}>PREFEITURA MUNICIPAL DE ITACAMBIRA</MenuItem>
                        <MenuItem value={952}>CAMARA MUNICIPAL DE ITACARAMBI</MenuItem>
                        <MenuItem value={953}>PREFEITURA MUNICIPAL DE ITACARAMBI</MenuItem>
                        <MenuItem value={954}>INSTITUTO DE PREVIDENCIA E ASSISTENCIA SOCIAL DE ITACARAMBI</MenuItem>
                        <MenuItem value={956}>PREFEITURA MUNICIPAL DE ITAGUARA</MenuItem>
                        <MenuItem value={957}>SAAE SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={958}>PREFEITURA MUNICIPAL DE ITAIPE</MenuItem>
                        <MenuItem value={959}>CAMARA MUNICIPAL DE ITAIPE</MenuItem>
                        <MenuItem value={961}>PREFEITURA MUNICIPAL DE ITAJUBA</MenuItem>
                        <MenuItem value={963}>PREFEITURA MUNICIPAL DE ITAMARANDIBA</MenuItem>
                        <MenuItem value={965}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={966}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={967}>CAMARA MUNICIPAL DE ITAMBACURI</MenuItem>
                        <MenuItem value={969}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={971}>CAMARA MUNICIPAL DE ITAMBE DO MATO DENTRO</MenuItem>
                        <MenuItem value={972}>CAMARA MUNICIPAL DE ITAMOGI</MenuItem>
                        <MenuItem value={975}>PREFEITURA MUNICIPAL DE ITAMONTE</MenuItem>
                        <MenuItem value={977}>CAMARA MUNICIPAL DE ITANHANDU</MenuItem>
                        <MenuItem value={978}>PREFEITURA MUNICIPAL DE ITANHANDU</MenuItem>
                        <MenuItem value={983}>CAMARA MUNICIPAL DE ITAPAGIPE</MenuItem>
                        <MenuItem value={985}>IPREVI-INST.PREV.SERV.PUB.MUN.DE ITAPAGIPE</MenuItem>
                        <MenuItem value={988}>CAMARA MUNICIPAL DE ITAPEVA</MenuItem>
                        <MenuItem value={991}>CAMARA MUNICIPAL DE ITATIAIUCU</MenuItem>
                        <MenuItem value={993}>PREFEITURA MUNICIPAL DE ITAU DE MINAS</MenuItem>
                        <MenuItem value={994}>CAMARA MUNICIPAL DE ITAU DE MINAS</MenuItem>
                        <MenuItem value={995}>CAMARA MUNICIPAL DE ITAUNA</MenuItem>
                        <MenuItem value={996}>PREFEITURA MUNICIPAL DE ITAUNA</MenuItem>
                        <MenuItem value={998}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE ITAUNA</MenuItem>
                        <MenuItem value={100}>FUNDO DE PREVIDENCIA MUNCIPAL DE ARAPONGA</MenuItem>
                        <MenuItem value={1001}>PREFEITURA MUNICIPAL DE ITINGA</MenuItem>
                        <MenuItem value={1004}>PREFEITURA MUNICIPAL DE ITUETA</MenuItem>
                        <MenuItem value={1006}>PREFEITURA MUNICIPAL DE ITUIUTABA</MenuItem>
                        <MenuItem value={1008}>FUNDACAO CULTURAL DE ITUIUTABA</MenuItem>
                        <MenuItem value={101}>PREFEITURA MUNICIPAL DE ARAPORA</MenuItem>
                        <MenuItem value={1010}>FUNDACAO ZUMBI DOS PALMARES</MenuItem>
                        <MenuItem value={1017}>CAMARA MUNICIPAL DE JABOTICATUBAS</MenuItem>
                        <MenuItem value={1018}>PREFEITURA MUNICIPAL DE JABOTICATUBAS</MenuItem>
                        <MenuItem value={1020}>PREFEITURA MUNICIPAL DE JACINTO</MenuItem>
                        <MenuItem value={1024}>CAMARA MUNICIPAL DE JACUTINGA</MenuItem>
                        <MenuItem value={1025}>PREFEITURA MUNICIPAL DE JACUTINGA</MenuItem>
                        <MenuItem value={1028}>CAMARA MUNICIPAL DE JAIBA</MenuItem>
                        <MenuItem value={103}>INSTITUTO DE PREVIDENCIA DE MUNICIPAL DE ARAPORA</MenuItem>
                        <MenuItem value={1032}>SAAE SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1033}>CAMARA MUNICIPAL DE JANAUBA</MenuItem>
                        <MenuItem value={1034}>PREFEITURA MUNICIPAL DE JANAUBA</MenuItem>
                        <MenuItem value={1035}>PREVIJAN-INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE JANAUBA</MenuItem>
                        <MenuItem value={1037}>CAMARA MUNICIPAL DE JANUARIA</MenuItem>
                        <MenuItem value={1038}>PREFEITURA MUNICIPAL DE JANUARIA</MenuItem>
                        <MenuItem value={1039}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE JANUARIA</MenuItem>
                        <MenuItem value={1041}>PREFEITURA MUNICIPAL DE JAPARAIBA</MenuItem>
                        <MenuItem value={1045}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE JAPONVAR</MenuItem>
                        <MenuItem value={1046}>CAMARA MUNICPAL DE JECEABA</MenuItem>
                        <MenuItem value={1048}>CAMARA MUNICIPAL DE JENIPAPO DE MINAS</MenuItem>
                        <MenuItem value={1051}>CAMARA MUNICIPAL DE JEQUERI</MenuItem>
                        <MenuItem value={1055}>PREFEITURA MUNICIPAL DE JEQUITAI</MenuItem>
                        <MenuItem value={1060}>CAMARA MUNICIPAL DE JESUANIA</MenuItem>
                        <MenuItem value={1061}>PREFEITURA MUNICIPAL DE JESUANIA</MenuItem>
                        <MenuItem value={1063}>CAMARA MUNICIPAL DE JOAIMA</MenuItem>
                        <MenuItem value={1066}>PREFEITURA MUNICIPAL DE JOAO MONLEVADE</MenuItem>
                        <MenuItem value={1067}>CAMARA MUNICIPAL DE JOAO MONLEVADE</MenuItem>
                        <MenuItem value={1068}>DEPARTAMENTO MUNICIPAL DE AGUAS E ESGOTO</MenuItem>
                        <MenuItem value={107}>SISTEMA AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1070}>FUNDACAO MUNICIPAL CRE-SER</MenuItem>
                        <MenuItem value={1071}>PREFEITURA MUNICIPAL DE JOAO PINHEIRO</MenuItem>
                        <MenuItem value={1072}>CAMARA MUNICIPAL DE JOAO PINHEIRO</MenuItem>
                        <MenuItem value={1073}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE JOAO PINHEIRO - PREVIJOP</MenuItem>
                        <MenuItem value={1077}>CAMARA MUNICIPAL DE JORDANIA</MenuItem>
                        <MenuItem value={1078}>CAMARA MUNICIPAL DE JOSE GONCALVES DE MINAS</MenuItem>
                        <MenuItem value={108}>PREFEITURA MUNICIPAL DE ARAUJOS</MenuItem>
                        <MenuItem value={1082}>CAMARA MUNICIPAL DE JOSENOPOLIS</MenuItem>
                        <MenuItem value={1083}>PREFEITURA MUNICIPAL DE JOSENOPOLIS</MenuItem>
                        <MenuItem value={1084}>CAMARA MUNICIPAL DE NOVA UNIAO</MenuItem>
                        <MenuItem value={1085}>PREFEITURA MUNICIPAL DE NOVA UNIAO</MenuItem>
                        <MenuItem value={1086}>CAMARA MUNICIPAL DE JUATUBA</MenuItem>
                        <MenuItem value={109}>CAMARA MUNICIPAL DE ARAUJOS</MenuItem>
                        <MenuItem value={1090}>PREFEITURA DE JUIZ DE FORA</MenuItem>
                        <MenuItem value={1094}>FUNDACAO CULTURAL ALFREDO FERREIRA LAGE</MenuItem>
                        <MenuItem value={1095}>DEPARTAMENTO MUNICIPAL DE LIMPEZA URBANA</MenuItem>
                        <MenuItem value={1096}>REGIME PROPRIO DE PREVIDENCIA SOCIAL</MenuItem>
                        <MenuItem value={1099}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE JURAMENTO</MenuItem>
                        <MenuItem value={1105}>CAMARA MUNICIPAL DE LADAINHA</MenuItem>
                        <MenuItem value={1107}>CAMARA MUNICIPAL DE LAGAMAR</MenuItem>
                        <MenuItem value={1108}>PREFEITURA MUNICIPAL DE LAGAMAR</MenuItem>
                        <MenuItem value={1111}>SERVICO AUTONOMO DE AGUA E ESGOTO DE LAGOA DA PRATA</MenuItem>
                        <MenuItem value={1112}>CAMARA MUNICIPAL DE LAGOA DOS PATOS</MenuItem>
                        <MenuItem value={1114}>CAMARA MUNICIPAL DE LAGOA DOURADA</MenuItem>
                        <MenuItem value={1115}>PREFEITURA MUNICIPAL DE LAGOA DOURADA</MenuItem>
                        <MenuItem value={1119}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={112}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE ARAXA</MenuItem>
                        <MenuItem value={1120}>CAMARA MUNICIPAL DE LAGOA GRANDE</MenuItem>
                        <MenuItem value={1122}>LAGOA SANTA CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1124}>PREFEITURA MUNICIPAL DE LAJINHA</MenuItem>
                        <MenuItem value={1125}>CAMARA MUNICIPAL DE LAJINHA</MenuItem>
                        <MenuItem value={1128}>PREFEITURA MUNICIPAL DE LAMBARI</MenuItem>
                        <MenuItem value={1129}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={113}>FUNDACAO CULTURAL CALMON BARRETO DE ARAXA</MenuItem>
                        <MenuItem value={1133}>CAMARA MUNICIPAL DE LARANJAL</MenuItem>
                        <MenuItem value={1135}>CAMARA MUNICIPAL DE LASSANCE</MenuItem>
                        <MenuItem value={1136}>PREFEITURA MUNICIPAL DE LASSANCE</MenuItem>
                        <MenuItem value={1138}>CAMARA MUNICIPAL DE LAVRAS</MenuItem>
                        <MenuItem value={114}>INSTITUTO DE PLANEJAMENTO E DESENVOLVIMENTO SUSTENTAVEL DE ARAXA</MenuItem>
                        <MenuItem value={1141}>CAMARA MUNICIPAL DE LEANDRO FERREIRA</MenuItem>
                        <MenuItem value={1142}>PREFEITURA MUNICIPAL DE LEANDRO FERREIRA</MenuItem>
                        <MenuItem value={1146}>INST. DE PREV. DOS SERV. PUB. DO MUNICIPIO DE LEME DO PRADO</MenuItem>
                        <MenuItem value={1148}>PREFEITURA MUNICIPAL DE LEOPOLDINA</MenuItem>
                        <MenuItem value={1149}>CAMARA MUNICIPAL DE LIBERDADE</MenuItem>
                        <MenuItem value={115}>FUNDACAO PARA CRIANCA E DO ADOLESCENTE DE ARAXA/MG</MenuItem>
                        <MenuItem value={1150}>PREFEITURA MUNICIPAL DE LIBERDADE</MenuItem>
                        <MenuItem value={1152}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE LIBERDADE</MenuItem>
                        <MenuItem value={1153}>CAMARA MUNICIPAL DE LIMA DUARTE</MenuItem>
                        <MenuItem value={1154}>PREFEITURA MUNICIPAL DE LIMA DUARTE</MenuItem>
                        <MenuItem value={1160}>CAMARA MUNICIPAL DE LUISBURGO</MenuItem>
                        <MenuItem value={1161}>PREFEITURA MUNICIPAL DE LUISBURGO</MenuItem>
                        <MenuItem value={1166}>CAMARA MUNICIPAL DE LUZ</MenuItem>
                        <MenuItem value={1168}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1173}>PREFEITURA MUNICIPAL DE MACHADO</MenuItem>
                        <MenuItem value={1174}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1175}>CAMARA MUNICIPAL DE MADRE DE DEUS DE MINAS</MenuItem>
                        <MenuItem value={1176}>PREFEITURA MUNICIPAL DE MADRE DE DEUS DE MINAS</MenuItem>
                        <MenuItem value={1178}>CAMARA MUNICIPAL DE MALACACHETA</MenuItem>
                        <MenuItem value={118}>PREFEITURA MUNICIPAL DE ARCEBURGO</MenuItem>
                        <MenuItem value={1181}>CAMARA MUNICIPAL DE MAMONAS</MenuItem>
                        <MenuItem value={1182}>PREFEITURA MUNICIPAL DE MAMONAS</MenuItem>
                        <MenuItem value={1184}>PREFEITURA MUNICIPAL DE MANGA</MenuItem>
                        <MenuItem value={1185}>PREFEITURA MUNICIPAL DE MANHUACU</MenuItem>
                        <MenuItem value={1186}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1187}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1188}>SERVICO AUTONOMO MUNICIPAL DE LIMPEZA URBANA</MenuItem>
                        <MenuItem value={1189}>PREFEITURA MUNICIPAL DE MANHUMIRIM</MenuItem>
                        <MenuItem value={119}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE ARCEBURGO</MenuItem>
                        <MenuItem value={1193}>PREFEITURA MUNICIPAL DE MANTENA</MenuItem>
                        <MenuItem value={1195}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE MANTENA - IMP</MenuItem>
                        <MenuItem value={1198}>CAMARA MUNICIPAL DE MAR DE ESPANHA</MenuItem>
                        <MenuItem value={120}>CAMARA MUNICIPAL DE ARCOS</MenuItem>
                        <MenuItem value={1200}>CAMARA MUNICIPAL DE MARIA DA FE - MG</MenuItem>
                        <MenuItem value={1203}>CAMARA MUNICIPAL DE MARIANA</MenuItem>
                        <MenuItem value={1205}>FUNDO PREVIDENCIARIO DOS SERVIDORES MUNICIPAIS DE MARIANA</MenuItem>
                        <MenuItem value={1208}>CAMARA MUNICIPAL DE MARILAC</MenuItem>
                        <MenuItem value={1210}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1212}>PREFEITURA MUNICIPAL DE MARIPA DE MINAS</MenuItem>
                        <MenuItem value={1214}>PREFEITURA MUNICIPAL DE MARLIERIA</MenuItem>
                        <MenuItem value={1215}>CAMARA MUNICIPAL DE MARMELOPOLIS</MenuItem>
                        <MenuItem value={1216}>PREFEITURA MUNICIPAL DE MARMELOPOLIS</MenuItem>
                        <MenuItem value={1217}>CAMARA MUNICIPAL DE MARTINHO CAMPOS</MenuItem>
                        <MenuItem value={1223}>CAMARA MUNICIPAL DE MATERLANDIA</MenuItem>
                        <MenuItem value={1226}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1229}>CAMARA MUNICIPAL DE MATIAS CARDOSO</MenuItem>
                        <MenuItem value={123}>CAMARA MUNICIPAL DE AREADO</MenuItem>
                        <MenuItem value={1230}>PREFEITURA MUNICIPAL DE MATIAS CARDOSO</MenuItem>
                        <MenuItem value={1233}>CAMARA MUNICIPAL DE MATO VERDE</MenuItem>
                        <MenuItem value={1234}>PREFEITURA MUNICIPAL DE MATO VERDE</MenuItem>
                        <MenuItem value={1236}>PREFEITURA MUNICIPAL DE MATOZINHOS</MenuItem>
                        <MenuItem value={1238}>PREFEITURA MUNICIPAL DE MATUTINA</MenuItem>
                        <MenuItem value={1243}>PREFEITURA MUNICIPAL DE MENDES PIMENTEL</MenuItem>
                        <MenuItem value={1247}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE MERCES</MenuItem>
                        <MenuItem value={125}>PREFEITURA MUNICIPAL DE ARGIRITA</MenuItem>
                        <MenuItem value={1251}>PREFEITURA MUNICIPAL DE MINAS NOVAS</MenuItem>
                        <MenuItem value={1254}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE MINDURI</MenuItem>
                        <MenuItem value={1255}>CAMARA MUNICIPAL DE MIRABELA</MenuItem>
                        <MenuItem value={1260}>CAMARA MUNICIPAL DE MIRAI</MenuItem>
                        <MenuItem value={1261}>SISTEMA DE PREVIDENCIA DE MIRAI</MenuItem>
                        <MenuItem value={1263}>PREFEITURA MUNICIPAL DE MIRAVANIA</MenuItem>
                        <MenuItem value={1264}>CAMARA MUNICIPAL DE MOEDA</MenuItem>
                        <MenuItem value={1265}>PREFEITURA MUNICIPAL DE MOEDA</MenuItem>
                        <MenuItem value={1268}>MUNICIPIO DE MOEMA</MenuItem>
                        <MenuItem value={127}>CAMARA MUNICIPAL DE ARICANDUVA</MenuItem>
                        <MenuItem value={1276}>PREFEITURA MUNICIPAL DE MONTE ALEGRE DE MINAS</MenuItem>
                        <MenuItem value={1277}>CAMARA MUNICIPAL DE MONTE ALEGRE DE MINAS</MenuItem>
                        <MenuItem value={128}>PREFEITURA MUNICIPAL DE ARICANDUVA</MenuItem>
                        <MenuItem value={1280}>MONTE AZUL CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1286}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1287}>CAMARA MUNICIPAL DE MONTE FORMOSO</MenuItem>
                        <MenuItem value={1288}>PREFEITURA MUNICIPAL DE MONTE FORMOSO</MenuItem>
                        <MenuItem value={1289}>PREFEITURA MUNICIPAL DE MONTE SANTO DE MINAS</MenuItem>
                        <MenuItem value={129}>CAMARA MUNICIPAL DE ARINOS</MenuItem>
                        <MenuItem value={1292}>PREFEITURA MUNICIPAL DE MONTES CLAROS</MenuItem>
                        <MenuItem value={1293}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE MONTES CLAROS</MenuItem>
                        <MenuItem value={1295}>INSTITUTO MUNICIPAL DESENVOLVIMENTO DA ADMNISTRACAO MUNICIPAL RANDHAL JULIANO MAIA ALMEIDA</MenuItem>
                        <MenuItem value={1298}>CAMARA MUNICIPAL DE MONTE SIAO</MenuItem>
                        <MenuItem value={1300}>PREFEITURA MUNICIPAL DE MONTEZUMA</MenuItem>
                        <MenuItem value={1301}>EMPRESA MUNICIPAL DE TURISMO DE MONTEZUMA - EMUTUM</MenuItem>
                        <MenuItem value={1303}>PREFEITURA MUNICIPAL DE MORADA NOVA DE MINAS</MenuItem>
                        <MenuItem value={1309}>CAMARA MUNICIPA DE MORRO DO PILAR</MenuItem>
                        <MenuItem value={131}>FUNDACAO MUNICIPAL DE SAUDE</MenuItem>
                        <MenuItem value={1310}>FUNDACAO HOSPITALAR JOAQUIM BENTO AGUIAR</MenuItem>
                        <MenuItem value={1311}>CAMARA MUNICIPAL DE MUNHOZ</MenuItem>
                        <MenuItem value={1314}>PREFEITURA MUNICIPAL DE MURIAE</MenuItem>
                        <MenuItem value={1315}>DEPARTAMENTO MUNICIPAL DE SANEAMENTO URBANO</MenuItem>
                        <MenuItem value={1316}>FUNDACAO DE CULTURA E ARTE DE MURIAE</MenuItem>
                        <MenuItem value={1318}>CAMARA MUNICIPAL DE MUTUM</MenuItem>
                        <MenuItem value={1319}>PREFEITURA MUNICIPAL DE MUTUM</MenuItem>
                        <MenuItem value={132}>CAMARA MUNICIPAL DE ASTOLFO DUTRA-MG</MenuItem>
                        <MenuItem value={1325}>PREFEITURA MUNICIPAL DE NANUQUE</MenuItem>
                        <MenuItem value={1327}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DE NANUQUE</MenuItem>
                        <MenuItem value={1328}>PREFEITURA MUNICIPAL NAQUE</MenuItem>
                        <MenuItem value={1329}>CAMARA MUNICIPAL NAQUE</MenuItem>
                        <MenuItem value={1333}>CAMARA MUNICIPAL DE NATERCIA</MenuItem>
                        <MenuItem value={1334}>CAMARA MUNICIPAL DE NAZARENO</MenuItem>
                        <MenuItem value={1336}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1337}>PREFEITURA DE NEPOMUCENO</MenuItem>
                        <MenuItem value={134}>PREFEITURA MUNICIPAL DE ATALEIA</MenuItem>
                        <MenuItem value={1341}>PREFEITURA MUNICIPAL DE NOVA BELEM</MenuItem>
                        <MenuItem value={1345}>CAMARA MUNICIPAL DE NOVA LIMA</MenuItem>
                        <MenuItem value={1346}>PREFEITURA MUNICIPAL DE NOVA LIMA</MenuItem>
                        <MenuItem value={1348}>PREFEITURA MUNICIPAL DE NOVA MODICA</MenuItem>
                        <MenuItem value={1349}>CAMARA MUNICIPAL DE NOVA PONTE</MenuItem>
                        <MenuItem value={135}>CAMARA MUNICIPAL DE ATALEIA</MenuItem>
                        <MenuItem value={1351}>DEPARTAMENTO MUNICIPAL DE AGUA E ESGOTOS DE NOVA PONTE</MenuItem>
                        <MenuItem value={1352}>FUNDO DE PREVIDENCIA DO MUNICIPIO DE NOVA PONTE</MenuItem>
                        <MenuItem value={1353}>CAMARA MUNICIPAL DE NOVA PORTEIRINHA</MenuItem>
                        <MenuItem value={1354}>PREFEITURA MUNICIPAL DE NOVA PORTEIRINHA</MenuItem>
                        <MenuItem value={1356}>PREFEITURA MUNICIPAL DE NOVA RESENDE</MenuItem>
                        <MenuItem value={1357}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE NOVA RESENDE</MenuItem>
                        <MenuItem value={1359}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={136}>CAMARA MUNICIPAL DE AUGUSTO DE LIMA</MenuItem>
                        <MenuItem value={1360}>FPMNS - FUNDO PREVIDENCIARIO MUNICIPAL DE NOVA SERRANA</MenuItem>
                        <MenuItem value={1362}>PREFEITURA MUNICIPAL DE NOVO CRUZEIRO</MenuItem>
                        <MenuItem value={1364}>PREFEITURA MUNICIPAL DE NOVO ORIENTE DE MINAS</MenuItem>
                        <MenuItem value={1366}>PREFEITURA MUNICIPAL DE NOVORIZONTE</MenuItem>
                        <MenuItem value={1368}>CAMARA MUNICIPAL DE OLARIA</MenuItem>
                        <MenuItem value={137}>PREFEITURA MUNICIPAL DE AUGUSTO DE LIMA</MenuItem>
                        <MenuItem value={1371}>PREFEITURA MUNICIPAL DE OLHOS D`AGUA</MenuItem>
                        <MenuItem value={1375}>CAMARA MUNICIPAL DE OLIVEIRA</MenuItem>
                        <MenuItem value={1376}>PREFEITURA MUNICIPAL DE OLIVEIRA</MenuItem>
                        <MenuItem value={1378}>FUNDACAO CASA DA CULTURA CARLOS CHAGAS</MenuItem>
                        <MenuItem value={138}>CAMARA MUNICIPAL DE BAEPENDI</MenuItem>
                        <MenuItem value={1380}>CAMARA MUNICIPAL DE OLIVEIRA FORTES</MenuItem>
                        <MenuItem value={1382}>CAMARA MUNICIPAL DE ONCA DE PITANGUI</MenuItem>
                        <MenuItem value={1384}>INSTITUTO DE SEGURIDADE SOCIAL MUNICIPAL DE ONCA DE PITANGUI</MenuItem>
                        <MenuItem value={1387}>PREFEITURA MUNICIPAL DE ORIZANIA</MenuItem>
                        <MenuItem value={1390}>CAMARA MUNICIPAL DE OURO BRANCO</MenuItem>
                        <MenuItem value={1391}>PREFEITURA MUNICIPAL DE OURO FINO</MenuItem>
                        <MenuItem value={1392}>CAMARA MUNICIPAL DE OURO FINO</MenuItem>
                        <MenuItem value={1394}>CAMARA MUNICIPAL DE OURO PRETO</MenuItem>
                        <MenuItem value={1395}>PREFEITURA MUNICIPAL DE OURO PRETO</MenuItem>
                        <MenuItem value={1397}>CAMARA MUNICIPAL DE OURO VERDE DE MINAS</MenuItem>
                        <MenuItem value={14}>CAMARA MUNICIPAL DE ACAIACA</MenuItem>
                        <MenuItem value={1400}>PREFEITURA MUNICIPAL DE PADRE CARVALHO</MenuItem>
                        <MenuItem value={1403}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE PADRE PARAISO</MenuItem>
                        <MenuItem value={1404}>CAMARA MUNICIPAL DE PAINEIRAS</MenuItem>
                        <MenuItem value={1405}>PREFEITURA MUNICIPAL DE PAINEIRAS</MenuItem>
                        <MenuItem value={1408}>CAMARA MUNICIPAL DE PAINS</MenuItem>
                        <MenuItem value={1411}>CAMARA MUNICIPAL DE PAI PEDRO</MenuItem>
                        <MenuItem value={1412}>PREFEITURA MUNICIPAL DE PAI PEDRO</MenuItem>
                        <MenuItem value={1413}>CAMARA MUNICIPAL DE PAIVA</MenuItem>
                        <MenuItem value={1414}>PREFEITURA MUNICIPAL DE PAIVA</MenuItem>
                        <MenuItem value={1415}>CAMARA MUNICIPAL DE PALMA</MenuItem>
                        <MenuItem value={1416}>PREFEITURA MUNICIPAL DE PALMA</MenuItem>
                        <MenuItem value={1418}>PREFEITURA MUNICIPAL DE PALMOPOLIS</MenuItem>
                        <MenuItem value={1422}>PREFEITURA MUNICIPAL DE PARACATU</MenuItem>
                        <MenuItem value={1424}>INSITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS</MenuItem>
                        <MenuItem value={1425}>CAMARA MUNICIPAL DE PARA DE MINAS</MenuItem>
                        <MenuItem value={1426}>PREFEITURA MUNICIPAL DE PARA DE MINAS</MenuItem>
                        <MenuItem value={1427}>INST. DE PREVIDENCIA SERV. PUBLICO DO MUNICIPIO DE PARA DE MINAS</MenuItem>
                        <MenuItem value={1428}>FUMUSA-FUNDACAO MUNICIPAL DE SAUDE</MenuItem>
                        <MenuItem value={1429}>ARSAP - AGNCIA REG. SERVIOS PBLICOS DE ABASTECIMENTO DE GUA POTVEL E ESGOTAMENTO SANITRIO PM</MenuItem>
                        <MenuItem value={1430}>PREFEITURA MUNICIPAL DE PARAGUACU</MenuItem>
                        <MenuItem value={1432}>FUNDO PREVIDENCIARIO MUNICIPAL</MenuItem>
                        <MenuItem value={1433}>CAMARA MUNICIPAL DE PARAISOPOLIS</MenuItem>
                        <MenuItem value={1434}>PREFEITURA MUNICIPAL DE PARAISOPOLIS</MenuItem>
                        <MenuItem value={1436}>CAMARA MUNICIPAL DE PARAOPEBA</MenuItem>
                        <MenuItem value={1441}>CAMARA MUNICIPAL DE PASSA QUATRO</MenuItem>
                        <MenuItem value={1445}>CAMARA MUNICIPAL DE PASSA TEMPO</MenuItem>
                        <MenuItem value={1447}>CAMARA MUNICIPAL DE PASSA VINTE</MenuItem>
                        <MenuItem value={145}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE BAMBUI</MenuItem>
                        <MenuItem value={1450}>CAMARA MUNICIPAL DE PASSOS</MenuItem>
                        <MenuItem value={1451}>SERVICO AUTONOMO DE AGUA E ESGOTO DE PASSOS</MenuItem>
                        <MenuItem value={1453}>PREFEITURA MUNICIPAL DE PATIS</MenuItem>
                        <MenuItem value={1455}>CAMARA MUNICIPAL DE PATOS DE MINAS</MenuItem>
                        <MenuItem value={1456}>PREFEITURA MUNICIPAL DE PATOS DE MINAS</MenuItem>
                        <MenuItem value={1457}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PATOS DE MINAS - IPREM</MenuItem>
                        <MenuItem value={1458}>FUNDACAO MUNICIPAL DE PROMOCAO DA CRIANCA E ADOLESCENTE DE PATOS DE MINAS - PROMAM</MenuItem>
                        <MenuItem value={1464}>PREFEITURA MUNICIPAL DE PATROCINIO DO MURIAE</MenuItem>
                        <MenuItem value={1465}>CAMARA MUNICIPAL DE PAULA CANDIDO</MenuItem>
                        <MenuItem value={1468}>CAMARA MUNICIPAL DE PAULISTAS</MenuItem>
                        <MenuItem value={1469}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE PAULISTAS</MenuItem>
                        <MenuItem value={147}>CAMARA MUNICIPAL DE BANDEIRA</MenuItem>
                        <MenuItem value={1470}>PREFEITURA MUNICIPAL DE PAVAO</MenuItem>
                        <MenuItem value={1472}>PREFEITURA MUNICIPAL DE PECANHA</MenuItem>
                        <MenuItem value={1474}>CAMARA MUNICIPAL DE PEDRA AZUL</MenuItem>
                        <MenuItem value={1476}>CAMARA MUNICIPAL DE PEDRA BONITA</MenuItem>
                        <MenuItem value={1477}>PREFEITURA MUNICIPAL DE PEDRA BONITA</MenuItem>
                        <MenuItem value={1478}>PREFEITURA MUNICIPAL DE PEDRA DO ANTA</MenuItem>
                        <MenuItem value={1479}>CAMARA MUNICIPAL DE PEDRA DO ANTA</MenuItem>
                        <MenuItem value={1481}>PREFEITURA MUNICIPAL DE PEDRA DO INDAIA</MenuItem>
                        <MenuItem value={1482}>CAMARA MUNICIPAL DE PEDRA DOURADA</MenuItem>
                        <MenuItem value={1485}>PREFEITURA MUNICIPAL DE PEDRALVA</MenuItem>
                        <MenuItem value={1489}>CAMARA MUNICIPAL DE PEDRINOPOLIS</MenuItem>
                        <MenuItem value={149}>INSTITUTO MUNICIPAL DE PREVIDENCIA DE BANDEIRA</MenuItem>
                        <MenuItem value={1492}>PEDRIPREV - INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE PEDRINOPOLIS</MenuItem>
                        <MenuItem value={1493}>CAMARA MUNICIPAL DE PEDRO LEOPOLDO</MenuItem>
                        <MenuItem value={1494}>PREFEITURA MUNICIPAL DE PEDRO LEOPOLDO</MenuItem>
                        <MenuItem value={1495}>CAMARA MUNICIPAL DE PEDRO TEIXEIRA</MenuItem>
                        <MenuItem value={1496}>PREFEITURA MUNICIPAL DE PEDRO TEIXEIRA</MenuItem>
                        <MenuItem value={1497}>PREFEITURA MUNICIPA DE PEQUERI</MenuItem>
                        <MenuItem value={1499}>PREFEITURA MUNICIPAL DE PEQUI</MenuItem>
                        <MenuItem value={15}>CAMARA MUNICIPAL DE ACUCENA</MenuItem>
                        <MenuItem value={1500}>CAMARA MUNICIPAL DE PEQUI</MenuItem>
                        <MenuItem value={1501}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PEQUI</MenuItem>
                        <MenuItem value={1504}>INSTITUTO DE PREVIDENCIA DE PERDIGAO</MenuItem>
                        <MenuItem value={1505}>PREFEITURA MUNICIPAL DE PERDIZES</MenuItem>
                        <MenuItem value={1506}>CAMARA MUNICIPAL DE PERDIZES</MenuItem>
                        <MenuItem value={1507}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PERDIZES</MenuItem>
                        <MenuItem value={1508}>PREFEITURA MUNICIPAL DE PERDOES</MenuItem>
                        <MenuItem value={151}>CAMARA MUNICIPAL DE BANDEIRA DO SUL</MenuItem>
                        <MenuItem value={1511}>CAMARA MUNICIPAL DE PERIQUITO</MenuItem>
                        <MenuItem value={1512}>PREFEITURA MUNICIPAL DE PERIQUITO</MenuItem>
                        <MenuItem value={1514}>PREFEITURA MUNICIPAL DE PESCADOR</MenuItem>
                        <MenuItem value={1518}>CAMARA MUNICIPAL DE PIEDADE DE CARATINGA</MenuItem>
                        <MenuItem value={1519}>PREFEITURA MUNICIPAL DE PIEDADE DE CARATINGA</MenuItem>
                        <MenuItem value={152}>SERVICO MUNICIPAL DE AGUA</MenuItem>
                        <MenuItem value={1521}>PREFEITURA MUNICIPAL DE PIEDADE DE PONTE NOVA</MenuItem>
                        <MenuItem value={1523}>PREFEITURA MUNICIPAL DE PIEDADE DO RIO GRANDE</MenuItem>
                        <MenuItem value={1524}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1525}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1527}>CAMARA MUNICIPAL DE PIMENTA-MG</MenuItem>
                        <MenuItem value={1528}>SANTA CASA MUNICIPAL DE PIMENTA-MG</MenuItem>
                        <MenuItem value={1529}>SERVICO DE ABASTECIMENTO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={153}>CAMARA MUNICIPAL DE BARAO DE COCAIS</MenuItem>
                        <MenuItem value={1531}>PREFEITURA MUNICIPAL DE PINGO-D'AGUA</MenuItem>
                        <MenuItem value={1533}>PREFEITURA MUNICIPAL DE PINTOPOLIS</MenuItem>
                        <MenuItem value={1534}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PINTOPOLIS</MenuItem>
                        <MenuItem value={1536}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1537}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE PIRACEMA</MenuItem>
                        <MenuItem value={154}>PREFEITURA MUNICIPAL DE BARAO DE COCAIS</MenuItem>
                        <MenuItem value={1540}>INSTITUTO PREVIDENCIA PIRAJUBA</MenuItem>
                        <MenuItem value={1542}>CAMARA MUNICIPAL DE PIRANGA</MenuItem>
                        <MenuItem value={1543}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PIRANGA</MenuItem>
                        <MenuItem value={1545}>PREFEITURA MUNICIPAL DE PIRANGUCU</MenuItem>
                        <MenuItem value={1546}>PIRANGUINHO CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1548}>CAMARA MUNICIPAL DE PIRAPETINGA</MenuItem>
                        <MenuItem value={1551}>CAMARA MUNICIPAL DE PIRAPORA</MenuItem>
                        <MenuItem value={1553}>SERVICO AUTONOMO DE AGUA E ESGOTO DE PIRAPORA</MenuItem>
                        <MenuItem value={1555}>CAMARA MUNICIPAL DE PIRAUBA</MenuItem>
                        <MenuItem value={1556}>PREFEITURA MUNICIPAL DE PIRAUBA</MenuItem>
                        <MenuItem value={1560}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE PITANGUI</MenuItem>
                        <MenuItem value={1562}>PREFEITURA MUNICIPAL DE PIUMHI</MenuItem>
                        <MenuItem value={1564}>CAMARA MUNICIPAL DE PLANURA</MenuItem>
                        <MenuItem value={1565}>PREFEITURA MUNICIPAL DE PLANURA</MenuItem>
                        <MenuItem value={1566}>CAMARA MUNICIPAL DE POCO FUNDO</MenuItem>
                        <MenuItem value={1567}>PREFEITURA MUNICIPAL DE POCO FUNDO</MenuItem>
                        <MenuItem value={1568}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS DE POCO FUNDO</MenuItem>
                        <MenuItem value={1569}>CAMARA MUNICIPAL DE POCOS DE CALDAS</MenuItem>
                        <MenuItem value={157}>PREFEITURA MUNICIPAL DE BARBACENA</MenuItem>
                        <MenuItem value={1570}>PREFEITURA MUNICIPAL DE POCOS DE CALDAS</MenuItem>
                        <MenuItem value={1574}>IASM - INSTITUTO DE ASSISTENCIA DOS SERVIDORES MUNICIPAIS</MenuItem>
                        <MenuItem value={158}>CAMARA MUNICPAL DE BARBACENA</MenuItem>
                        <MenuItem value={1580}>CAMARA MUNICIPAL DE POMPEU</MenuItem>
                        <MenuItem value={1581}>PREFEITURA MUNICIPAL DE POMPEU</MenuItem>
                        <MenuItem value={1583}>PREFEITURA MUNICIPAL DE PONTE NOVA</MenuItem>
                        <MenuItem value={1585}>DEPARTAMENTO MUNICIPAL DE AGUA</MenuItem>
                        <MenuItem value={1586}>CAMARA MUNICIPAL DE PONTO CHIQUE</MenuItem>
                        <MenuItem value={1588}>CAMARA MUNICIPAL DE PONTO DOS VOLANTES</MenuItem>
                        <MenuItem value={1591}>CAMARA MUNICIPAL DE PORTEIRINHA</MenuItem>
                        <MenuItem value={1594}>PREFEITURA MUNICIPAL DE POTE</MenuItem>
                        <MenuItem value={1595}>CAMARA MUNICIPAL DE POTE</MenuItem>
                        <MenuItem value={1597}>PREFEITURA MUNICIPAL DE POUSO ALEGRE</MenuItem>
                        <MenuItem value={16}>PREFEITURA DE ACUCENA</MenuItem>
                        <MenuItem value={1600}>CAMARA MUNICIPAL DE POUSO ALTO</MenuItem>
                        <MenuItem value={1602}>CAMARA MUNICIPAL DE PRADOS</MenuItem>
                        <MenuItem value={1603}>PREFEITURA MUNICIPAL DE PRADOS</MenuItem>
                        <MenuItem value={1605}>PREFEITURA MUNICIPAL DE PRATA</MenuItem>
                        <MenuItem value={1606}>CAMARA MUNICIPAL DE PRATAPOLIS</MenuItem>
                        <MenuItem value={1607}>PREFEITURA MUNICIPAL DE PRATAPOLIS</MenuItem>
                        <MenuItem value={1611}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE PRATINHA</MenuItem>
                        <MenuItem value={1615}>PREFEITURA MUNICIPAL DE PRESIDENTE JUSCELINO</MenuItem>
                        <MenuItem value={1617}>CAMARA MUNICIPAL DE PRESIDENTE KUBITSCHEK</MenuItem>
                        <MenuItem value={1619}>PREFEITURA MUNICIPAL DE PRESIDENTE OLEGARIO</MenuItem>
                        <MenuItem value={1620}>CAMARA MUNICIPAL DE PRESIDENTE OLEGARIO</MenuItem>
                        <MenuItem value={1621}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE PRESIDENTE OLEGARIO</MenuItem>
                        <MenuItem value={1622}>PLANO DE SAUDE DOS SERVIDORES PUBLICOS DE PRESIDENTE OLEGARIO</MenuItem>
                        <MenuItem value={1623}>CAMARA MUNICIPAL DE ALTO JEQUITIBA</MenuItem>
                        <MenuItem value={1628}>PREFEITURA MUNICIPAL DE QUARTEL GERAL</MenuItem>
                        <MenuItem value={163}>SERVICO DE AGUA E SANEAMENTO</MenuItem>
                        <MenuItem value={1631}>PREFEITURA MUNICIPAL DE QUELUZITO</MenuItem>
                        <MenuItem value={1633}>PREFEITURA MUNICIPAL DE RAPOSOS</MenuItem>
                        <MenuItem value={1635}>PREFEITURA MUNICIPAL DE RAUL SOARES</MenuItem>
                        <MenuItem value={1638}>PREFEITURA MUNICIPAL DE RECREIO</MenuItem>
                        <MenuItem value={1640}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1641}>CAMARA MUNICIPAL DE REDUTO</MenuItem>
                        <MenuItem value={1644}>CAMARA MUNICIPAL DE RESENDE COSTA</MenuItem>
                        <MenuItem value={1645}>PREFEITURA MUNICIPAL DE RESENDE COSTA</MenuItem>
                        <MenuItem value={1646}>FUNDO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE RESENDE COSTA - MG</MenuItem>
                        <MenuItem value={1647}>CAMARA MUNICIPAL DE RESPLENDOR</MenuItem>
                        <MenuItem value={1648}>PREFEITURA MUNICIPAL DE RESPLENDOR</MenuItem>
                        <MenuItem value={1653}>INSTUTO MUNICIPAL DE PREVIDENCIA E APOSENTADORIA DOS SERVIDORES RIACHINHO</MenuItem>
                        <MenuItem value={1654}>CAMARA MUNICIPAL DE RIACHO DOS MACHADOS</MenuItem>
                        <MenuItem value={1655}>PREFEITURA MUNICIPAL DE RIACHO DOS MACHADOS</MenuItem>
                        <MenuItem value={1657}>PREFEITURA MUNICIPAL DE RIBEIRAO DAS NEVES</MenuItem>
                        <MenuItem value={1658}>CAMARA MUNICIPAL DE RIBEIRAO VERMELHO</MenuItem>
                        <MenuItem value={1659}>PREFEITURA MUNICIPAL DE RIBEIRAO VERMELHO</MenuItem>
                        <MenuItem value={1661}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1663}>CAMARA MUNICIPAL DE RIO CASCA</MenuItem>
                        <MenuItem value={1664}>PREFEITURA MUNICIPAL DE RIO CASCA</MenuItem>
                        <MenuItem value={1665}>PREFEITURA MUNICIPAL DE RIO DOCE</MenuItem>
                        <MenuItem value={1668}>CAMARA MUNICIPAL DE RIO DO PRADO</MenuItem>
                        <MenuItem value={167}>CAMARA MUNICIPAL DE BARRA LONGA</MenuItem>
                        <MenuItem value={1670}>PREFEITURA MUNICIPAL DE RIO ESPERA</MenuItem>
                        <MenuItem value={1671}>CAMARA MUNICIPAL DE RIO MANSO</MenuItem>
                        <MenuItem value={1672}>PREFEITURA MUNICIPAL DE RIO MANSO</MenuItem>
                        <MenuItem value={1673}>PREFEITURA MUNICIPAL DE RIO NOVO</MenuItem>
                        <MenuItem value={1677}>FUNDACAO JOSE RESENDE VARGAS DE RADIO</MenuItem>
                        <MenuItem value={1678}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE RIO PARANAIBA</MenuItem>
                        <MenuItem value={1679}>CAMARA MUNICIPAL DE RIO PARDO DE MINAS</MenuItem>
                        <MenuItem value={1683}>CAMARA MUNICIPAL DE RIO POMBA</MenuItem>
                        <MenuItem value={1684}>PREFEITURA MUNICIPAL DE RIO POMBA</MenuItem>
                        <MenuItem value={1687}>PREFEITURA MUNICIPAL DE RIO VERMELHO</MenuItem>
                        <MenuItem value={1689}>CAMARA MUNICIPAL DE RITAPOLIS</MenuItem>
                        <MenuItem value={1690}>PREFEITURA MUNICIPAL DE RITAPOLIS</MenuItem>
                        <MenuItem value={1693}>FUNDO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE ROCHEDO DE MINAS</MenuItem>
                        <MenuItem value={1694}>CAMARA MUNICIPAL DE RODEIRO</MenuItem>
                        <MenuItem value={1695}>PREFEITURA MUNICIPAL DE RODEIRO</MenuItem>
                        <MenuItem value={1697}>PREFEITURA MUNICIPAL DE ROMARIA</MenuItem>
                        <MenuItem value={1699}>PREFEITURA MUNICIPAL DE ROSARIO DA LIMEIRA</MenuItem>
                        <MenuItem value={1700}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE ROSARIO DA LIMEIRA</MenuItem>
                        <MenuItem value={1701}>CAMARA MUNICIPAL DE RUBELITA</MenuItem>
                        <MenuItem value={1703}>PREFEITURA MUNICIPAL DE RUBIM</MenuItem>
                        <MenuItem value={1704}>CAMARA MUNICIPAL DE RUBIM</MenuItem>
                        <MenuItem value={1706}>CAMARA MUNICIPAL DE SABARA</MenuItem>
                        <MenuItem value={1709}>CAMARA MUNICIPAL DE SABINOPOLIS</MenuItem>
                        <MenuItem value={1711}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1712}>CAMARA MUNICIPAL DE SACRAMENTO</MenuItem>
                        <MenuItem value={1719}>PREFEITURA MUNICIPAL DE SALTO DA DIVISA</MenuItem>
                        <MenuItem value={1720}>CAMARA MUNICIPAL DE SALTO DA DIVISA</MenuItem>
                        <MenuItem value={1721}>CAMARA MUNICIPAL DE SANTA BARBARA-MG</MenuItem>
                        <MenuItem value={1723}>CAMARA MUNICIPAL DE SANTA BARBARA DO LESTE</MenuItem>
                        <MenuItem value={1726}>PREFEITRURA MUNICIPAL</MenuItem>
                        <MenuItem value={1729}>CAMARA MUNICIPAL DE SANTA CRUZ DE MINAS</MenuItem>
                        <MenuItem value={1730}>PREFEITURA MUNICIPAL DE SANTA CRUZ DE MINAS</MenuItem>
                        <MenuItem value={1731}>CAMARA MUNICIPAL DE SANTA CRUZ DE SALINAS</MenuItem>
                        <MenuItem value={1735}>CAMARA MUNICIPAL DE SANTA EFIGENIA DE MINAS</MenuItem>
                        <MenuItem value={1736}>PREFEITURA MUNICIPAL DE SANTA EFIGENIA DE MINAS</MenuItem>
                        <MenuItem value={1738}>PREFEITURA MUNICIPAL DE SANTA FE DE MINAS</MenuItem>
                        <MenuItem value={1744}>PREFEITURA MUNICIPAL DE SANTA LUZIA</MenuItem>
                        <MenuItem value={1745}>CAMARA MUNICIPAL DE SANTA LUZIA</MenuItem>
                        <MenuItem value={1747}>CAMARA MUNICIPAL DE SANTA MARGARIDA</MenuItem>
                        <MenuItem value={1748}>PREFEITURA MUNICIPAL DE SANTA MARGARIDA</MenuItem>
                        <MenuItem value={175}>CAMARA MUNICIPAL DE BELMIRO BRAGA</MenuItem>
                        <MenuItem value={1752}>PREFEITURA MUNICIPAL DE SANTA MARIA DO SALTO</MenuItem>
                        <MenuItem value={1754}>PREFEITURA MUNICIPAL DE SANTA MARIA DO SUACUI</MenuItem>
                        <MenuItem value={1755}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1756}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1758}>PREFEITURA MUNICIPAL DE SANTANA DE CATAGUASES-MG</MenuItem>
                        <MenuItem value={176}>CAMARA MUNICIPAL DE BELO HORIZONTE</MenuItem>
                        <MenuItem value={1760}>CAMARA MUNICIPAL DE SANTANA DE PIRAPAMA</MenuItem>
                        <MenuItem value={1761}>CAMARA MUNICIPAL DE SANTANA DO DESERTO</MenuItem>
                        <MenuItem value={1763}>CAMARA MUNICIPAL DE SANTANA DO GARAMBEU</MenuItem>
                        <MenuItem value={1764}>MUNICIPIO DE SANTANA DO GARAMBEU</MenuItem>
                        <MenuItem value={1765}>CAMARA MUNICIPAL DE SANTANA DO JACARE</MenuItem>
                        <MenuItem value={1766}>PREFEITURA MUNICIPAL DE SANTANA DO JACARE</MenuItem>
                        <MenuItem value={1768}>PREFEITURA MUNICIPAL DE SANTANA DO MANHUACU</MenuItem>
                        <MenuItem value={1769}>CAMARA MUNICIPAL DE SANTANA DO PARAISO</MenuItem>
                        <MenuItem value={177}>PREFEITURA MUNICIPAL DE BELO HORIZONTE</MenuItem>
                        <MenuItem value={1770}>PREFEITURA MUNICIPAL DE SANTANA DO PARAISO</MenuItem>
                        <MenuItem value={1771}>PREFEITURA MUNICIPAL DE SANTANA DO RIACHO</MenuItem>
                        <MenuItem value={1772}>CAMARA MUNICIPAL DE SANTANA DO RIACHO</MenuItem>
                        <MenuItem value={1774}>PREFEITURA MUNICIPAL DE SANTANA DOS MONTES</MenuItem>
                        <MenuItem value={1778}>PREFEITURA MUNICIPAL DE SANTA RITA DE JACUTINGA</MenuItem>
                        <MenuItem value={1779}>PREFEITURA MUNICIPAL DE SANTA RITA DE MINAS</MenuItem>
                        <MenuItem value={1780}>CAMARA MUNICIPAL DE SANTA RITA DE MINAS</MenuItem>
                        <MenuItem value={1781}>PODER EXECUTIVO</MenuItem>
                        <MenuItem value={1782}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={1783}>CAMARA MUNICIPAL DE SANTA RITA DO ITUETO</MenuItem>
                        <MenuItem value={1784}>PREFEITURA MUNICIPAL DE SANTA RITA DO ITUETO</MenuItem>
                        <MenuItem value={1789}>PREFEITURA MUNICIPAL DE SANTA VITORIA</MenuItem>
                        <MenuItem value={179}>FUNDACAO ZOOBOTANICA DE BELO HORIZONTE</MenuItem>
                        <MenuItem value={1790}>CAMARA MUNICIPAL DE SANTA VITORIA</MenuItem>
                        <MenuItem value={1791}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SANTA VITORIA</MenuItem>
                        <MenuItem value={1792}>CAMARA MUNICIPAL DE SANTO ANTONIO DO AMPARO</MenuItem>
                        <MenuItem value={1793}>MUNICIPIO DE SANTO ANTONIO DO AMPARO</MenuItem>
                        <MenuItem value={1795}>CAMARA MUNICIPAL DE SANTO ANTONIO DO AVENTUREIRO</MenuItem>
                        <MenuItem value={1796}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO AVENTUREIRO</MenuItem>
                        <MenuItem value={180}>FUNDACAO MUNICIPAL DE CULTURA</MenuItem>
                        <MenuItem value={1800}>CAMARA MUNICIPAL DE SANTO ANTONIO DO ITAMBE</MenuItem>
                        <MenuItem value={1804}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO MONTE</MenuItem>
                        <MenuItem value={1805}>FUNDO DE PREVIDENCIA E ASSISTENCIA DOS SERVIDORES MUNICIPAIS</MenuItem>
                        <MenuItem value={1807}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO RETIRO</MenuItem>
                        <MenuItem value={1808}>PREFEITURA MUNICIPAL DE SANTO ANTONIO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={1809}>CAMARA MUNICIPAL DE SANTO ANTONIO DO RIO ABAIXO</MenuItem>
                        <MenuItem value={1814}>PREFEITURA MUNICIPAL DE SAO BENTO ABADE</MenuItem>
                        <MenuItem value={1818}>CAMARA MUNICIPAL DE SAO DOMINGOS DAS DORES</MenuItem>
                        <MenuItem value={1819}>PREFEITURA MUNICIPAL DE SAO DOMINGOS DAS DORES</MenuItem>
                        <MenuItem value={1820}>PREFEITURA MUNICIPAL DE SAO DOMINGOS DO PRATA</MenuItem>
                        <MenuItem value={1821}>CAMARA MUNICIPAL DE SAO DOMINGOS DO PRATA</MenuItem>
                        <MenuItem value={1822}>CAMARA MUNICIPAL DE SAO FELIX DE MINAS</MenuItem>
                        <MenuItem value={1824}>CAMARA MUNICIPAL DE SAO FRANCISCO</MenuItem>
                        <MenuItem value={1826}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SAO FRANCISCO</MenuItem>
                        <MenuItem value={1827}>PREFEITURA MUNICIPAL DE SAO FRANCISCO DE PAULA</MenuItem>
                        <MenuItem value={1828}>CAMARA MUNICIPAL DE SAO FRANCISCO DE PAULA</MenuItem>
                        <MenuItem value={1829}>CAMARA MUNICIPAL DE SAO FRANCISCO DE SALES</MenuItem>
                        <MenuItem value={1831}>CAMARA MUNICIPAL DE SAO FRANCISCO DO GLORIA</MenuItem>
                        <MenuItem value={1832}>PREFEITURA MUNICIPAL DE SAO FRANCISCO DO GLORIA</MenuItem>
                        <MenuItem value={1842}>PREFEITURA MUNICIPAL DE SAO GONCALO DO ABAETE</MenuItem>
                        <MenuItem value={1843}>PREFEITURA MUNICIPAL DE SAO GONCALO DO PARA</MenuItem>
                        <MenuItem value={1848}>PREFEITURA MUNICIPAL DE SAO GONCALO DO SAPUCAI</MenuItem>
                        <MenuItem value={1851}>CAMARA MUNICIPAL DE SAO JOAO BATISTA DO GLORIA</MenuItem>
                        <MenuItem value={1853}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1860}>CAMARA MUNICIPAL DE SAO JOAO DA MATA</MenuItem>
                        <MenuItem value={1862}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1864}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE SAO JOAO DA PONTE</MenuItem>
                        <MenuItem value={1865}>CAMARA MUNICIPAL DE SAO JOAO DAS MISSOES</MenuItem>
                        <MenuItem value={1867}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SAO JOAO DAS MISSOES</MenuItem>
                        <MenuItem value={187}>COMPANHIA URBANIZADORA E DE HABITACAO DE BELO HORIZONTE</MenuItem>
                        <MenuItem value={1872}>INSTITUTO MUNICIPAL DE PREVIDENCIA DE SAO JOAO DEL REI</MenuItem>
                        <MenuItem value={1874}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1875}>INSTITUTO DE PREVIDENCIA DE SAO JOAO DO MANHUACU</MenuItem>
                        <MenuItem value={1876}>CAMARA MUNICIPAL DE SAO JOAO DO MANTENINHA</MenuItem>
                        <MenuItem value={188}>EMPRESA DE INFORMATICA E INFORMACAO DO MUNICIPIO DE BELO HORIZONTE S/A</MenuItem>
                        <MenuItem value={1881}>CAMARA MUNICIPAL DE SAO JOAO DO PACUI</MenuItem>
                        <MenuItem value={1883}>CAMARA MUNICIPAL DE SAO JOAO DO PARAISO</MenuItem>
                        <MenuItem value={1884}>PREFEITURA MUNICIPAL DE SAO JOAO DO PARAISO</MenuItem>
                        <MenuItem value={1886}>PREFEITURA MUNICIPAL DE SAO JOAO EVANGELISTA</MenuItem>
                        <MenuItem value={1888}>CAMARA DE SAO JOAO NEPOMUCENO</MenuItem>
                        <MenuItem value={1891}>PREFEITURA MUNICIPAL DE SAO JOAQUIM DE BICAS</MenuItem>
                        <MenuItem value={1894}>PREFEITURA MUNICIPAL DE SAO JOSE DA BARRA</MenuItem>
                        <MenuItem value={1895}>CAMARA MUNICIPAL DE SAO JOSE DA LAPA</MenuItem>
                        <MenuItem value={1898}>PREFEITURA MUNICIPAL SAO JOSE DA SAFIRA</MenuItem>
                        <MenuItem value={190}>FUNDO FINANCEIRO</MenuItem>
                        <MenuItem value={1904}>CAMARA MUNICIPAL DE SAO JOSE DO DIVINO</MenuItem>
                        <MenuItem value={1905}>CAMARA MUNICIPAL DE SAO JOSE DO GOIABAL</MenuItem>
                        <MenuItem value={1906}>PREFEITURA MUNICIPAL DE SAO JOSE DO GOIABAL</MenuItem>
                        <MenuItem value={1907}>PREFEITURA MUNICIPAL DE SAO JOSE DO JACURI</MenuItem>
                        <MenuItem value={1908}>CAMARA MUNICIPAL DE SAO JOSE DO JACURI</MenuItem>
                        <MenuItem value={1911}>PREFEITURA MUNICIPAL DE SAO JOSE DO MANTIMENTO</MenuItem>
                        <MenuItem value={1912}>CAMARA MUNICIPAL DE SAO LOURENCO</MenuItem>
                        <MenuItem value={1913}>PREFEITURA MUNICIPAL DE SAO LOURENCO</MenuItem>
                        <MenuItem value={1914}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={1915}>PREFEITURA MUNICIPAL DE SAO MIGUEL DO ANTA</MenuItem>
                        <MenuItem value={1916}>CAMARA MUNICIPAL DE SAO MIGUEL DO ANTA</MenuItem>
                        <MenuItem value={1918}>PREFEITURA MUNICIPAL DE SAO PEDRO DA UNIAO</MenuItem>
                        <MenuItem value={1920}>PREFEITURA MUNICIPAL DE SAO PEDRO DOS FERROS</MenuItem>
                        <MenuItem value={1925}>PREFEITURA MUNICIPAL DE SAO ROMAO</MenuItem>
                        <MenuItem value={1926}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE SAO ROMAO</MenuItem>
                        <MenuItem value={1927}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={193}>PREFEITURA MUNICIPAL DE BELO ORIENTE</MenuItem>
                        <MenuItem value={1931}>CAMARA MUNICIPAL DE SAO SEBASTIAO DA VARGEM ALEGRE</MenuItem>
                        <MenuItem value={1932}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DA VARGEM ALEGRE</MenuItem>
                        <MenuItem value={1935}>CAMARA MUNICIPAL DE SAO SEBASTIAO DO MARANHAO</MenuItem>
                        <MenuItem value={1937}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={1938}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={1939}>IPSEM - FUNDO DE PREVIDENCIA SOCIAL DOS SERVIDORES DO MUNICIPIO DE SAO SEBASTIAO DO OESTE</MenuItem>
                        <MenuItem value={1941}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DO PARAISO</MenuItem>
                        <MenuItem value={1943}>PREFEITURA MUNICIPAL DE SAO SEBASTIAO DO RIO PRETO</MenuItem>
                        <MenuItem value={1945}>CAMARA MUNICIPAL DE SAO SEBASTIAO DO RIO VERDE</MenuItem>
                        <MenuItem value={1948}>PREFEITURA MUNICIPAL DE SAO TIAGO</MenuItem>
                        <MenuItem value={1949}>CAMARA MUNICIPAL DE SAO TOMAS DE AQUINO</MenuItem>
                        <MenuItem value={1950}>PREFEITURA MUNICIPAL DE SAO TOMAS DE AQUINO</MenuItem>
                        <MenuItem value={1952}>CAMARA MUNICIPAL DE SAO THOME DAS LETRAS</MenuItem>
                        <MenuItem value={1953}>PREFEITURA MUNICIPAL DE SAO THOME DAS LETRAS</MenuItem>
                        <MenuItem value={1956}>CAMARA MUNICIPAL DE SAO VICENTE DE MINAS</MenuItem>
                        <MenuItem value={1957}>PREFEITURA MUNICIPAL DE SAO VICENTE DE MINAS</MenuItem>
                        <MenuItem value={1958}>CAMARA MUNICIPAL DE SAPUCAI-MIRIM</MenuItem>
                        <MenuItem value={1959}>PREFEITURA MUNICIPAL DE SAPUCAI-MIRIM</MenuItem>
                        <MenuItem value={1961}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={1963}>PREFEITURA MUNICIPAL DE SARZEDO</MenuItem>
                        <MenuItem value={1964}>FUNDO DE SEGURIDADE SOCIAL DO MUNICIPIO DE SARZEDO</MenuItem>
                        <MenuItem value={1965}>CAMARA MUNICIPAL DE SETUBINHA</MenuItem>
                        <MenuItem value={1966}>PREFEITURA MUNICIPAL DE SETUBINHA</MenuItem>
                        <MenuItem value={1969}>CAMARA MUNICIPAL DE SENADOR AMARAL</MenuItem>
                        <MenuItem value={1973}>CAMARA MUNICIPAL DE SENADOR FIRMINO</MenuItem>
                        <MenuItem value={1974}>PREFEITURA MUNICIPAL DE SENADOR FIRMINO</MenuItem>
                        <MenuItem value={1977}>PREFEITURA MUNICIPAL DE SENADOR JOSE BENTO</MenuItem>
                        <MenuItem value={1981}>PREFEITURA MUNICIPAL DE SENHORA DE OLIVEIRA</MenuItem>
                        <MenuItem value={1985}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE SENHORA DO PORTO</MenuItem>
                        <MenuItem value={1988}>CAMARA MUNICIPAL DE SERICITA</MenuItem>
                        <MenuItem value={1989}>PREFEITURA MUNICIPAL DE SERICITA</MenuItem>
                        <MenuItem value={199}>ADM INDIRETA</MenuItem>
                        <MenuItem value={1991}>PREFEITURA MUNICIPAL DE SERITINGA</MenuItem>
                        <MenuItem value={1992}>CAMARA MUNICIPAL DE SERRA AZUL DE MINAS</MenuItem>
                        <MenuItem value={1993}>PREFEITURA MUNICIPAL DE SERRA AZUL DE MINAS</MenuItem>
                        <MenuItem value={1994}>CAMARA MUNICIPAL DE SERRA DA SAUDADE</MenuItem>
                        <MenuItem value={1995}>PREFEITURA MUNICIPAL DE SERRA DA SAUDADE</MenuItem>
                        <MenuItem value={1998}>PREFEITURA MUNICIPAL DE SERRA DOS AIMORES</MenuItem>
                        <MenuItem value={20}>PREFEITURA MUNICIPAL DE AGUA COMPRIDA</MenuItem>
                        <MenuItem value={200}>CAMARA MUNICIPAL DE BERTOPOLIS</MenuItem>
                        <MenuItem value={2001}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE SERRA DO SALITRE</MenuItem>
                        <MenuItem value={2002}>CAMARA MUNICIPAL DE SERRANIA</MenuItem>
                        <MenuItem value={2003}>PREFEITURA MUNICIPAL DE SERRANIA</MenuItem>
                        <MenuItem value={2007}>CAMARA MUNICIPAL DE SERRANOS</MenuItem>
                        <MenuItem value={2008}>INST PREV DOS SERVIDORES PUBLICOS DO MUN DE SERRANOS</MenuItem>
                        <MenuItem value={2011}>PREFEITURA MUNICIPAL DE SETE LAGOAS</MenuItem>
                        <MenuItem value={2012}>CAMARA MUNICIPAL DE SETE LAGOAS</MenuItem>
                        <MenuItem value={2013}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2014}>FUNDACAO MUNICIPAL DE ENSINO PROFISSIONALIZANTE</MenuItem>
                        <MenuItem value={2015}>CAMARA MUNICIPAL DE SILVEIRANIA</MenuItem>
                        <MenuItem value={2018}>CAMARA MUNICIPAL DE SILVIANOPOLIS</MenuItem>
                        <MenuItem value={202}>CAMARA MUNICIPAL DE BERIZAL</MenuItem>
                        <MenuItem value={2025}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS MUNICIPAIS DE SOBRALIA</MenuItem>
                        <MenuItem value={2028}>SERVICO AUTONOMO DE AGUA E ESGOTO SAAE</MenuItem>
                        <MenuItem value={2030}>PREFEITURA MUNICIPAL DE TABULEIRO</MenuItem>
                        <MenuItem value={2031}>CAMARA MUNICIPAL DE TAIOBEIRAS</MenuItem>
                        <MenuItem value={2034}>CAMARA MUNICIPAL DE TAPARUBA</MenuItem>
                        <MenuItem value={2036}>SERVICO AUTONOMO DE AGUA E ESGOTO DE TAPARUBA</MenuItem>
                        <MenuItem value={2038}>PREFEITURA MUNICIPAL DE TAPIRA</MenuItem>
                        <MenuItem value={2039}>PREFEITURA MUNICIPAL DE TAPIRAI</MenuItem>
                        <MenuItem value={2040}>CAMARA MUNICIPAL DE TAPIRAI</MenuItem>
                        <MenuItem value={2042}>PREFEITURA MUNICIPAL DE TAQUARACU DE MINAS</MenuItem>
                        <MenuItem value={2043}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={2044}>PODER LEGISLATIVO</MenuItem>
                        <MenuItem value={2046}>CAMARA MUNICIPAL DE TEIXEIRAS</MenuItem>
                        <MenuItem value={2048}>PREFEITURA MUNICIPAL DE TEOFILO OTONI</MenuItem>
                        <MenuItem value={2049}>CAMARA MUNICIPAL DE TEOFILO OTONI</MenuItem>
                        <MenuItem value={205}>CAMARA MUNICIPAL DE BETIM</MenuItem>
                        <MenuItem value={2050}>INST. DE PREV. DOS SERV. PUBLICOS MUNICIPAIS</MenuItem>
                        <MenuItem value={2052}>CAMARA MUNICIPAL DE TIMOTEO</MenuItem>
                        <MenuItem value={2053}>PREFEITURA MUNICIPAL DE TIMOTEO</MenuItem>
                        <MenuItem value={2054}>CAMARA MUNICIPAL DE TIRADENTES</MenuItem>
                        <MenuItem value={2055}>PREFEITURA MUNICIPAL DE TIRADENTES</MenuItem>
                        <MenuItem value={2056}>CAMARA MUNICIPAL DE TIROS</MenuItem>
                        <MenuItem value={2060}>FUNDO DE APOSENTADORIA E PENSAO DOS SERVIDORES PUBLICOS MUNICIPAIS</MenuItem>
                        <MenuItem value={2061}>CAMARA MUNICIPAL DE TOCOS DO MOJI</MenuItem>
                        <MenuItem value={2063}>CAMARA MUNICIPAL DE TOLEDO</MenuItem>
                        <MenuItem value={2065}>PREFEITURA MUNICIPAL DE TOMBOS</MenuItem>
                        <MenuItem value={2069}>PREFEITURA MUNICIPAL DE TRES CORACOES - MG</MenuItem>
                        <MenuItem value={2070}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE TRES CORACOES - MG</MenuItem>
                        <MenuItem value={2072}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={2073}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE TRES MARIAS</MenuItem>
                        <MenuItem value={2076}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={2077}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE TRES PONTASAT</MenuItem>
                        <MenuItem value={2079}>CAMARA MUNICIPAL DE TUMIRITINGA</MenuItem>
                        <MenuItem value={208}>FUNDACAO ARTISTICO CULTURAL DE BETIM</MenuItem>
                        <MenuItem value={2084}>PREFEITURA MUNICIPAL DE TURMALINA</MenuItem>
                        <MenuItem value={2086}>PREFEITURA MUNICIPAL DE TURVOLANDIA</MenuItem>
                        <MenuItem value={2087}>CAMARA MUNICIPAL DE TURVOLANDIA</MenuItem>
                        <MenuItem value={209}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE BETIM</MenuItem>
                        <MenuItem value={2094}>PREFEITURA MUNICIPAL DE UBAI</MenuItem>
                        <MenuItem value={2095}>CAMARA MUNICIPAL DE UBAPORANGA</MenuItem>
                        <MenuItem value={2096}>PREFEITURA DE UBAPORANGA</MenuItem>
                        <MenuItem value={2097}>CAMARA MUNICIPAL DE UBERABA</MenuItem>
                        <MenuItem value={2098}>PREFEITURA MUNICIPAL DE UBERABA</MenuItem>
                        <MenuItem value={21}>CAMARA MUNICIPAL DE AGUANIL</MenuItem>
                        <MenuItem value={210}>EMPRESA DE CONSTRUCOES</MenuItem>
                        <MenuItem value={2102}>FUNDACAO CULTURAL DE UBERABA</MenuItem>
                        <MenuItem value={2104}>FUNDACAO MUNICIPAL DE PROTECAO E DEFESA DO CONSUMIDOR</MenuItem>
                        <MenuItem value={2105}>FUNDACAO MUNICIPAL DE ESPORTES E LAZER DE UBERABA</MenuItem>
                        <MenuItem value={2107}>PREFEITURA MUNICIPAL DE UBERLANDIA</MenuItem>
                        <MenuItem value={211}>MUNICIPIO DE BIAS FORTES</MenuItem>
                        <MenuItem value={2114}>AGENCIA MUNICIPAL DE DESENVOLVIMENTO SUSTENTAVEL DE UBERLANDIA</MenuItem>
                        <MenuItem value={2115}>CAMARA MUNICIPAL DE UMBURATIBA</MenuItem>
                        <MenuItem value={2118}>PREFEITURA MUNICIPAL DE UNAI</MenuItem>
                        <MenuItem value={2123}>CAMARA MUNICIPAL DE URUANA DE MINAS</MenuItem>
                        <MenuItem value={2128}>CAMARA MUNICIPAL DE URUCUIA</MenuItem>
                        <MenuItem value={2129}>PREFEITURA MUNICIPAL DE URUCUIA</MenuItem>
                        <MenuItem value={213}>CAMARA MUNICIPAL DE BICAS</MenuItem>
                        <MenuItem value={2133}>CAMARA MUNICIPAL DE VARGEM BONITA</MenuItem>
                        <MenuItem value={2134}>PREFEITURA MUNICIPAL DE VARGEM BONITA</MenuItem>
                        <MenuItem value={2135}>PREFEITURA MUNICIPAL DE VARGEM GRANDE DO RIO PARDO</MenuItem>
                        <MenuItem value={2136}>CAMARA MUNICIPAL DE VARGEM GRANDE DO RIO PARDO</MenuItem>
                        <MenuItem value={2137}>PREFEITURA MUNICIPAL DE VARGINHA</MenuItem>
                        <MenuItem value={2138}>CAMARA MUNICIPAL DE VARGINHA</MenuItem>
                        <MenuItem value={2144}>CAMARA MUNICIPAL DE VARJAO DE MINAS</MenuItem>
                        <MenuItem value={2146}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE VARJAO DE MINAS</MenuItem>
                        <MenuItem value={2148}>PREFEITURA MUNICIPAL DE VARZEA DA PALMA</MenuItem>
                        <MenuItem value={2149}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE VARZEA DA PALMA</MenuItem>
                        <MenuItem value={2152}>PREFEITURA MUNICIPAL DE VARZELANDIA</MenuItem>
                        <MenuItem value={2153}>CAMARA MUNICIPAL DE VAZANTE</MenuItem>
                        <MenuItem value={2154}>PREFEITURA MUNICIPAL DE VAZANTE</MenuItem>
                        <MenuItem value={2156}>PREFEITURA MUNICIPAL DE VERDELANDIA</MenuItem>
                        <MenuItem value={2163}>PREFEITURA MUNICIPAL DE VERMELHO NOVO</MenuItem>
                        <MenuItem value={2165}>CAMARA MUNICIPAL DE VESPASIANO</MenuItem>
                        <MenuItem value={2166}>PREFEITURA MUNICIPAL DE VESPASIANO</MenuItem>
                        <MenuItem value={2169}>PREFEITURA MUNICIPAL DE VICOSA</MenuItem>
                        <MenuItem value={217}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE BIQUINHAS - IMPAS</MenuItem>
                        <MenuItem value={2171}>INSTITUTO MUNICIPAL DE ASSISTENCIA AO SERVIDOR</MenuItem>
                        <MenuItem value={2172}>INSTITUTO MUNICIPAL DOS SERVIDORES PUBLICOS DE VICOSA</MenuItem>
                        <MenuItem value={2173}>PREFEITURA MUNICIPAL DE VIEIRAS</MenuItem>
                        <MenuItem value={2174}>CAMARA MUNICIPAL DE VIEIRAS</MenuItem>
                        <MenuItem value={2175}>PREFEITURA MUNICIPAL DE MATHIAS LOBATO</MenuItem>
                        <MenuItem value={2176}>CAMARA MUNICIPAL DE MATHIAS LOBATO</MenuItem>
                        <MenuItem value={2177}>PREFEITURA MUNICIPAL DE VIRGEM DA LAPA</MenuItem>
                        <MenuItem value={2179}>CAMARA MUNICIPAL DE VIRGINIA</MenuItem>
                        <MenuItem value={218}>FUNDO DE ASSISTENCIA A SAUDE DOS SERVIDORES MUNICIPAIS DE BIQUINHAS</MenuItem>
                        <MenuItem value={2182}>CAMARA MUNICIPAL DE VIRGINOPOLIS</MenuItem>
                        <MenuItem value={2184}>PREFEITURA MUNICIPAL DE VIRGOLANDIA</MenuItem>
                        <MenuItem value={2188}>FUNDO MUNICIPAL PREV. SERV. PUBL. DE VISCONDE DO RIO BRANCO - MG</MenuItem>
                        <MenuItem value={2189}>CAMARA MUNICIPAL DE VOLTA GRANDE</MenuItem>
                        <MenuItem value={2191}>CAMARA MUNICIPAL DE WENCESLAU BRAZ</MenuItem>
                        <MenuItem value={2194}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE MARIANA IPREV</MenuItem>
                        <MenuItem value={2199}>AGENCIA REGULADORA DE SERVICOS PUBLICOS DO MUNICIPIO DE OURO PRETO</MenuItem>
                        <MenuItem value={220}>PREFEITURA MUNICIPAL DE BOA ESPERANCA</MenuItem>
                        <MenuItem value={221}>SERVICO AUTONOMO DE AGUA E ESGOTO DE BOA ESPERANCA</MenuItem>
                        <MenuItem value={222}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE BOA ESPERANCA</MenuItem>
                        <MenuItem value={226}>PREFEITURA MUNICIPAL DE BOCAIUVA</MenuItem>
                        <MenuItem value={228}>HOSPITAL MUNICIPAL DOUTOR GIL ALVES</MenuItem>
                        <MenuItem value={23}>CAMARA MUNICIPAL DE AGUAS FORMOSAS</MenuItem>
                        <MenuItem value={231}>PREFEITURA MUNICIPAL DE BOM DESPACHO</MenuItem>
                        <MenuItem value={233}>INSTITUTO MUNICIPAL DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE BOM DESPACHO</MenuItem>
                        <MenuItem value={234}>CAMARA MUNICIPAL DE BOM JARDIM DE MINAS</MenuItem>
                        <MenuItem value={236}>CAMARA MUNICIPAL DE BOM JESUS DA PENHA</MenuItem>
                        <MenuItem value={24}>PREFEITURA MUNICIPAL DE AGUAS FORMOSAS</MenuItem>
                        <MenuItem value={241}>CAMARA MUNICIPLA DE BOM JESUS DO GALHO</MenuItem>
                        <MenuItem value={243}>PREFEITURA MUNICIPAL DE BOM REPOUSO</MenuItem>
                        <MenuItem value={244}>CAMARA MUNICIPAL DE BOM REPOUSO</MenuItem>
                        <MenuItem value={245}>PREFEITURA MUNICIPAL DE BOM SUCESSO</MenuItem>
                        <MenuItem value={246}>CAMARA MUNICIPAL DE BOM SUCESSO</MenuItem>
                        <MenuItem value={249}>PREFEITURA MUNICIPAL DE BONFIM</MenuItem>
                        <MenuItem value={2497}>SERVICO AUTONOMO DE AGUA E ESGOSTO-SAAE</MenuItem>
                        <MenuItem value={25}>INSTITUTO DE PREVIDENCIA DE SERVIDORES MUNICIPAL DE AGUAS FORMOSAS</MenuItem>
                        <MenuItem value={250}>CAMARA MUNICIPAL DE BONFINOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={251}>PREFEITURA MUNICIPAL DE BONFINOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={254}>CAMARA MUNICIPAL DE BORDA DA MATA</MenuItem>
                        <MenuItem value={256}>PREFEITURA MUNICIPAL DE BOTELHOS</MenuItem>
                        <MenuItem value={257}>CAMARA MUNICIPAL DE BOTELHOS</MenuItem>
                        <MenuItem value={259}>PREFEITURA MUNICIPAL DE BOTUMIRM</MenuItem>
                        <MenuItem value={260}>CAMARA MUNICIPAL DE BRASILANDIA DE MINAS</MenuItem>
                        <MenuItem value={262}>CAMARA MUNICIPAL DE BRASILIA DE MINAS</MenuItem>
                        <MenuItem value={263}>PREFEITURA MUNICIPAL DE BRASILIA DE MINAS</MenuItem>
                        <MenuItem value={265}>CAMARA MUNICIPAL DE BRAS PIRES</MenuItem>
                        <MenuItem value={266}>PREFEITURA MUNICPAL DE BRAS PIRES</MenuItem>
                        <MenuItem value={267}>CAMARA MUNICIPAL DE BRAUNAS</MenuItem>
                        <MenuItem value={269}>CAMARA MUNICIPAL BRAZOPOLIS</MenuItem>
                        <MenuItem value={27}>PREFEITURA MUNICIPAL DE AGUAS VERMELHAS</MenuItem>
                        <MenuItem value={270}>PREFEITURA MUNICIPAL DE BRAZOPOLIS</MenuItem>
                        <MenuItem value={273}>PREFEITURA MUNICIPAL DE BRUMADINHO</MenuItem>
                        <MenuItem value={276}>CAMARA MUNICIPAL DE BUENOPOLIS</MenuItem>
                        <MenuItem value={281}>PREFEITURA MUNICIPAL DE BURITIS</MenuItem>
                        <MenuItem value={284}>PREFEITURA MUNICIPAL DE BURITIZEIRO</MenuItem>
                        <MenuItem value={285}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE BURITIZEIRO</MenuItem>
                        <MenuItem value={287}>PREFEITURA MUNICIPAL DE CABECEIRA GRANDE</MenuItem>
                        <MenuItem value={288}>CAMARA MUNICIPAL DE CABECEIRA GRANDE</MenuItem>
                        <MenuItem value={289}>SERVICO AUTONOMO DE SANEAMENTO DE CABECEIRA GRANDE</MenuItem>
                        <MenuItem value={29}>CAMARA MUNICIPAL DE AIMORES</MenuItem>
                        <MenuItem value={291}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={292}>PREFEITURA MUNICIPAL CABO VERDE</MenuItem>
                        <MenuItem value={293}>PREFEITURA MUNICIPAL DE CACHOEIRA DA PRATA</MenuItem>
                        <MenuItem value={294}>CAMARA MUNICIPAL DE CACHOEIRA DA PRATA</MenuItem>
                        <MenuItem value={296}>CAMARA MUNICIPAL DE CACHOEIRA DE MINAS</MenuItem>
                        <MenuItem value={298}>PREFEITURA MUNICIPAL DE CACHOEIRA DOURADA MG</MenuItem>
                        <MenuItem value={299}>INSTITUTO MUNICIPAL DE PREVIDENCIA DE CACHOEIRA DOURADA MG</MenuItem>
                        <MenuItem value={300}>CAMARA MUNICIPAL DE CAETANOPOLIS</MenuItem>
                        <MenuItem value={303}>PREFEITURA MUNICIPAL DE CAETE</MenuItem>
                        <MenuItem value={305}>FUNDACAO CASA DE CULTURA DE CAETE</MenuItem>
                        <MenuItem value={307}>PREFEITURA MUNICIPAL DE CAIANA</MenuItem>
                        <MenuItem value={308}>CAMARA MUNICIPAL DE CAIANA</MenuItem>
                        <MenuItem value={311}>CAMARA MUNICIPAL DE CAJURI</MenuItem>
                        <MenuItem value={313}>CAMARA MUNICIPAL DE CALDAS</MenuItem>
                        <MenuItem value={314}>CAMARA CAMACHO</MenuItem>
                        <MenuItem value={315}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={318}>PREFEITURA MUNICIPAL DE CAMANDUCAIA</MenuItem>
                        <MenuItem value={319}>CAMARA MUNICIPAL DE CAMBUI</MenuItem>
                        <MenuItem value={320}>PREFEITURA MUNICIPAL DE CAMBUI</MenuItem>
                        <MenuItem value={323}>CAMARA MUNICIPAL DE CAMBUQUIRA</MenuItem>
                        <MenuItem value={326}>PREFEITURA MUNICIPAL DE CAMPANARIO</MenuItem>
                        <MenuItem value={329}>CAMARA MUNICIPAL DA CAMPANHA</MenuItem>
                        <MenuItem value={330}>PREFEITURA MUNICIPAL DA CAMPANHA</MenuItem>
                        <MenuItem value={331}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DA CAMPANHA</MenuItem>
                        <MenuItem value={332}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={334}>CAMARA MUNICIPAL DE CAMPINA VERDE</MenuItem>
                        <MenuItem value={336}>CAMARA MUNICIPAL DE CAMPO AZUL</MenuItem>
                        <MenuItem value={337}>PREFEITURA MUNICIPAL DE CAMPO AZUL</MenuItem>
                        <MenuItem value={339}>PREFEITURA MUNICIPAL DE CAMPO BELO</MenuItem>
                        <MenuItem value={34}>CAMARA MUNICIPAL DE ALAGOA</MenuItem>
                        <MenuItem value={341}>FUNDACAO MUSEU E ARQUIVO PUBLICO  DO MUNICIPIO DE CAMPO BELO</MenuItem>
                        <MenuItem value={344}>CAMPO DO MEIO PREFEITURA</MenuItem>
                        <MenuItem value={346}>CAMARA MUNICIPAL DE CAMPO FLORIDO</MenuItem>
                        <MenuItem value={348}>PREFEITURA MUNICIPAL DE CAMPOS ALTOS</MenuItem>
                        <MenuItem value={349}>CAMARA MUNICIPAL DE CAMPOS ALTOS</MenuItem>
                        <MenuItem value={35}>PREFEITURA MUNICIPAL DE ALAGOA</MenuItem>
                        <MenuItem value={353}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE CAMPOS GERAIS</MenuItem>
                        <MenuItem value={354}>PREFEITURA MUNICIPAL DE CANAA</MenuItem>
                        <MenuItem value={358}>CAMARA MUNICIPAL DE CANA VERDE - MG</MenuItem>
                        <MenuItem value={359}>PREFEITURA MUNICIPAL DE CANA VERDE - MG</MenuItem>
                        <MenuItem value={36}>FUNDACAO MUNICIPAL DE SAUDE DE ALAGOA</MenuItem>
                        <MenuItem value={360}>CAMARA MUNICIPAL DE CANDEIAS</MenuItem>
                        <MenuItem value={364}>PREFEITURA MUNICIPAL DE CANTAGALO</MenuItem>
                        <MenuItem value={366}>CAMARA MUNICIPAL DE CAPARAO</MenuItem>
                        <MenuItem value={369}>CAMARA MUNICIPAL DE CAPELA NOVA</MenuItem>
                        <MenuItem value={373}>CAMARA MUNICIPAL DE CAPETINGA</MenuItem>
                        <MenuItem value={374}>PREFEITURA MUNICIPAL DE CAPETINGA</MenuItem>
                        <MenuItem value={375}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={377}>CAMARA MUNICIPAL DE CAPINOPOLIS</MenuItem>
                        <MenuItem value={378}>PREFEITURA MUNICIPAL DE CAPINOPOLIS</MenuItem>
                        <MenuItem value={38}>CAMARA ALBERTINA</MenuItem>
                        <MenuItem value={380}>CAMARA DE VEREADORES DO MUNICIPIO DE CAPITAO ANDRADE</MenuItem>
                        <MenuItem value={381}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={383}>CAMARA MUNICIPAL DE CAPITAO ENEAS</MenuItem>
                        <MenuItem value={384}>INSTITUTO DE PREVIDENCIA DOS PUBLICOS DE CAPITAO ENEAS</MenuItem>
                        <MenuItem value={385}>CAMARA MUNICIPAL DE CAPITOLIO</MenuItem>
                        <MenuItem value={39}>PREFEITURA ALBERTINA</MenuItem>
                        <MenuItem value={390}>CAMARA MUNICIPAL DE CARAI</MenuItem>
                        <MenuItem value={391}>PREFEITURA MUNICIPAL DE CARAI</MenuItem>
                        <MenuItem value={393}>CAMARA MUNICIPAL DE CARANAIBA</MenuItem>
                        <MenuItem value={394}>PREFEITURA MUNICIPAL DE CARANAIBA</MenuItem>
                        <MenuItem value={396}>PREFEITURA MUNICIPAL DE CARANDAI</MenuItem>
                        <MenuItem value={397}>HOSPITAL MUNICIPAL SANTANA DE CARANDAI</MenuItem>
                        <MenuItem value={398}>FUNDO PREVIDENCIARIO MUNICIPAL DE CARANDAI</MenuItem>
                        <MenuItem value={40}>CAMARA MUNICIPAL DE ALEM PARAIBA</MenuItem>
                        <MenuItem value={400}>PREFEITURA MUNICIPAL DE CARANGOLA</MenuItem>
                        <MenuItem value={401}>SERVICO MUNICIPAL DE SANEAMENTO BASICO E INFRAESTRUTURA</MenuItem>
                        <MenuItem value={403}>CAMARA MUNICIPAL DE CARATINGA</MenuItem>
                        <MenuItem value={405}>FUNDACAO EDUCACIONAL CIDADE DOS MENINOS</MenuItem>
                        <MenuItem value={407}>PREFEITURA MUNICIPAL DE CARBONITA</MenuItem>
                        <MenuItem value={408}>CAMARA MUNICIPAL DE CARBONITA</MenuItem>
                        <MenuItem value={409}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DO MUNICIPIO DE CARBONITA</MenuItem>
                        <MenuItem value={410}>PREFEITURA MUNICIPAL DE CAREACU</MenuItem>
                        <MenuItem value={411}>CAMARA MUNICIPAL DE CAREACU</MenuItem>
                        <MenuItem value={412}>CAMARA MUNICIPAL DE CARLOS CHAGAS</MenuItem>
                        <MenuItem value={415}>PREFEITURA MUNICIPAL DE CARMESIA</MenuItem>
                        <MenuItem value={418}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={419}>MUNICIPIO DE CARMO DA CACHOEIRA - PREFEITURA</MenuItem>
                        <MenuItem value={42}>FUNDO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE ALEM PARAIBA-RPPS</MenuItem>
                        <MenuItem value={420}>CAMARA MUNICIPAL DE CARMO DA CACHOEIRA</MenuItem>
                        <MenuItem value={421}>CAMARA MUNICIPAL DE CARMO DA MATA</MenuItem>
                        <MenuItem value={422}>PREFEITURA MUNICIPAL DE CARMO DA MATA</MenuItem>
                        <MenuItem value={424}>CAMARA MUNICIPAL DE CARMO DE MINAS</MenuItem>
                        <MenuItem value={425}>PREFEITURA MUNICIPAL DE CARMO DE MINAS</MenuItem>
                        <MenuItem value={43}>CAMARA MUNICIPAL DE ALFENAS</MenuItem>
                        <MenuItem value={435}>PREFEITURA MUNICIPAL DE CARMO DO RIO CLARO</MenuItem>
                        <MenuItem value={436}>PREFEITURA MUNICIPAL DE CARMOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={437}>CAMARA MUNICIPAL DE CARMOPOLIS DE MINAS</MenuItem>
                        <MenuItem value={444}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE CARVALHOPOLIS</MenuItem>
                        <MenuItem value={445}>CAMARA MUNICIPAL DE CARVALHOPOLIS</MenuItem>
                        <MenuItem value={449}>CAMARA MUNICIPAL DE CASA GRANDE</MenuItem>
                        <MenuItem value={45}>MUNICIPIO DE ALFREDO VASCONCELOS</MenuItem>
                        <MenuItem value={451}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={454}>CAMARA MUNICIPAL DE CONCEICAO DA BARRA DE MINAS</MenuItem>
                        <MenuItem value={456}>CAMARA MUNICIPAL DE CATAGUASES</MenuItem>
                        <MenuItem value={460}>LEGISLATIVO</MenuItem>
                        <MenuItem value={465}>PREFEITURA MUNICIPAL DE CATUTI</MenuItem>
                        <MenuItem value={468}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE CAXAMBU</MenuItem>
                        <MenuItem value={469}>CAMARA MUNICIPAL DE CEDRO DO ABAETE</MenuItem>
                        <MenuItem value={47}>CAMARA MUNICIPAL DE ALMENARA</MenuItem>
                        <MenuItem value={471}>CAMARA MUNICIPAL DE CENTRAL DE MINAS</MenuItem>
                        <MenuItem value={477}>CAMARA MUNICIPAL DE CHACARA</MenuItem>
                        <MenuItem value={478}>PREFEITURA MUNICIPAL DE CHACARA</MenuItem>
                        <MenuItem value={479}>PREFEITURA MUNICIPAL DE CHALE</MenuItem>
                        <MenuItem value={480}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={483}>PREFEITURA MUNICIPAL DE CHAPADA DO NORTE</MenuItem>
                        <MenuItem value={485}>PREFEITURA MUNICIPAL DE CHAPADA GAUCHA</MenuItem>
                        <MenuItem value={486}>IPREMCHAG -INST.DE PREVIDENCIA MUNICIPAL DE CHAPADA GAUCHA</MenuItem>
                        <MenuItem value={490}>CAMARA MUNICIPAL DE CIPOTANEA</MenuItem>
                        <MenuItem value={492}>CAMARA MUNICIPAL DE CLARAVAL</MenuItem>
                        <MenuItem value={494}>CAMARA MUNICIPAL DE CLARO DOS POCOES</MenuItem>
                        <MenuItem value={496}>CAMARA MUNICIPAL DE CLAUDIO</MenuItem>
                        <MenuItem value={498}>CAMARA MUNICIPAL DE COIMBRA</MenuItem>
                        <MenuItem value={501}>CAMARA MUNICIPAL DE COLUNA</MenuItem>
                        <MenuItem value={503}>PREFEITURA MUNICIPAL DE COMENDADOR GOMES</MenuItem>
                        <MenuItem value={504}>CAMARA MUNICIPAL DE COMENDADOR GOMES</MenuItem>
                        <MenuItem value={505}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO DE COMENDADOR GOMES</MenuItem>
                        <MenuItem value={507}>PREFEITURA MUNICIPAL DE COMERCINHO</MenuItem>
                        <MenuItem value={508}>CAMARA MUNICIPAL DE CONCEICAO DA APARECIDA</MenuItem>
                        <MenuItem value={509}>PREFEITURA MUNICIPAL DE CONCEICAO DA APARECIDA</MenuItem>
                        <MenuItem value={51}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE ALPERCATA</MenuItem>
                        <MenuItem value={511}>PREFEITURA MUNICIPAL DE CONCEICAO DAS PEDRAS</MenuItem>
                        <MenuItem value={513}>CAMARA MUNICIPAL DE CONCEICAO DAS ALAGOAS</MenuItem>
                        <MenuItem value={514}>FUNDACAO HOSPITALAR MUNICIPAL JOAO HENRIQUE</MenuItem>
                        <MenuItem value={515}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE CONCEICAO DAS ALAGOAS</MenuItem>
                        <MenuItem value={517}>CAMARA MUNICIPAL DE CONCEICAO DE IPANEMA</MenuItem>
                        <MenuItem value={520}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={521}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={522}>IPMCP - INSTITUTO DE PREVIDENCIA MUNICIPAL DE CONCEICAO DO PARA</MenuItem>
                        <MenuItem value={523}>CAMARA MUNICIPAL DE CONCEICAO DO RIO VERDE</MenuItem>
                        <MenuItem value={524}>PREFEITURA MUNICIPAL DE CONCEICAO DO RIO VERDE</MenuItem>
                        <MenuItem value={526}>PREFEITURA MUNICIPAL CONCEICAO DOS OUROS</MenuItem>
                        <MenuItem value={528}>PREFEITURA MUNICIPAL DE CONEGO MARINHO</MenuItem>
                        <MenuItem value={531}>CAMARA MUNICIPAL DE CONGONHAL</MenuItem>
                        <MenuItem value={534}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={54}>CAMARA MUNICIPAL DE ALTEROSA</MenuItem>
                        <MenuItem value={544}>CAMARA MUNICIPAL DE CONSELHEIRO PENA</MenuItem>
                        <MenuItem value={545}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={546}>PREFEITURA MUNICIPAL DE CONSOLACAO</MenuItem>
                        <MenuItem value={548}>PREFEITURA MUNCIPAL DE CONTAGEM</MenuItem>
                        <MenuItem value={549}>CAMARA MUNCIPAL DE CONTAGEM</MenuItem>
                        <MenuItem value={550}>CENTRO INDUSTRIAL DE CONTAGEM</MenuItem>
                        <MenuItem value={552}>AUT.MUNIC. DE TRANS. E TRANSP.CONTAGEM</MenuItem>
                        <MenuItem value={555}>FUNDO DE PREVIDENCIA DE CONTAGEM</MenuItem>
                        <MenuItem value={56}>CAMARA MUNICIPAL DE ALTO CAPARAO</MenuItem>
                        <MenuItem value={560}>PREFEITURA MUNICIPAL DE COQUEIRAL</MenuItem>
                        <MenuItem value={561}>SERVICO DE ABASTECIMENTO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={563}>PREFEITURA MUNICIPAL DE CORACAO DE JESUS</MenuItem>
                        <MenuItem value={564}>INSTITUTO DE PREVIDENCIA SOCIAL DO MUNICIPIO DE CORACAO DE JESUS</MenuItem>
                        <MenuItem value={565}>HOSPITAL MUNICIPAL SAO VICENTE DE PAULO</MenuItem>
                        <MenuItem value={567}>CAMARA MUNICIPAL DE CORDISBURGO</MenuItem>
                        <MenuItem value={568}>FUNDACAO DE DESENVOLVIMENTO E PROMOCAO TURISTICA DA GRUTA DO MAQUINE</MenuItem>
                        <MenuItem value={57}>PREFEITURA MUNICIPAL DE ALTO CAPARAO</MenuItem>
                        <MenuItem value={571}>PREFEITURA MUNICIPAL DE CORINTO</MenuItem>
                        <MenuItem value={572}>CAMARA MUNICIPAL DE CORINTO</MenuItem>
                        <MenuItem value={573}>FUNDACAO AGROPECUARIA DE CORINTO</MenuItem>
                        <MenuItem value={574}>PREFEITURA MUNICIPAL DE COROACI</MenuItem>
                        <MenuItem value={576}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DE COROACI</MenuItem>
                        <MenuItem value={577}>CAMARA MUNICIPAL DE COROMANDEL</MenuItem>
                        <MenuItem value={581}>PREFEITURA MUNICIPAL DE CORONEL FABRICIANO</MenuItem>
                        <MenuItem value={583}>CAMARA MUNICIPAL DE CORONEL MURTA</MenuItem>
                        <MenuItem value={584}>PREFEITURA MUNICIPAL DE CORONEL MURTA</MenuItem>
                        <MenuItem value={585}>PREFEITURA MUNICIPAL DE CORONEL PACHECO</MenuItem>
                        <MenuItem value={586}>CAMARA MUNICIPAL DE CORONEL PACHECO</MenuItem>
                        <MenuItem value={587}>CAMARA MUNICIPAL DE CORONEL XAVIER CHAVES</MenuItem>
                        <MenuItem value={59}>PREFEITURA MUNICIPAL DE ALTO RIO DOCE</MenuItem>
                        <MenuItem value={592}>PREFEITURA MUNICIPAL DE CORREGO DO BOM JESUS</MenuItem>
                        <MenuItem value={594}>CAMARA MUNICIPAL DE CORREGO FUNDO</MenuItem>
                        <MenuItem value={596}>SERVICO AUTONOMO DE AGUA E ESGOTO SAAE</MenuItem>
                        <MenuItem value={598}>PREFEITURA MUNICIPAL DE CORREGO NOVO</MenuItem>
                        <MenuItem value={599}>CAMARA MUNICIPAL DE COUTO DE MAGALHAES DE MINAS</MenuItem>
                        <MenuItem value={602}>PREFEITURA MUNICIPAL DE CRISOLITA</MenuItem>
                        <MenuItem value={603}>CAMARA MUNICIPAL DE CRISTAIS</MenuItem>
                        <MenuItem value={604}>PREFEITURA MUNICIPAL DE CRISTAIS</MenuItem>
                        <MenuItem value={605}>CAMARA DE CRISTALIA</MenuItem>
                        <MenuItem value={606}>CRISTALIA PREFEITURA</MenuItem>
                        <MenuItem value={607}>CAMARA MUNICIPAL DE CRISTIANO OTONI</MenuItem>
                        <MenuItem value={608}>PREFEITURA MUNICIPAL DE CRISTIANO OTONI</MenuItem>
                        <MenuItem value={609}>PREFEITURA MUNICIPAL DE CRISTINA</MenuItem>
                        <MenuItem value={611}>CAMARA MUNICIPAL DE CRUCILANDIA</MenuItem>
                        <MenuItem value={612}>PREFEITURA MUNICIPAL DE CRUCILANDIA</MenuItem>
                        <MenuItem value={614}>PREFEITURA MUNICIPAL DE CRUZEIRO DA FORTALEZA</MenuItem>
                        <MenuItem value={617}>PREFEITURA DE CRUZILIA</MenuItem>
                        <MenuItem value={620}>CAMARA MUNICIPAL DE CURRAL DE DENTRO</MenuItem>
                        <MenuItem value={623}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={624}>CAMARA MUNICIPAL DE DATAS</MenuItem>
                        <MenuItem value={626}>CAMARA MUNICIPAL DE DELFIM MOREIRA</MenuItem>
                        <MenuItem value={63}>PREFEITURA MUNICIPAL DE ALVINOPOLIS</MenuItem>
                        <MenuItem value={630}>CAMARA MUNICIPAL DE DELTA</MenuItem>
                        <MenuItem value={631}>PREFEITURA MUNICIPAL DE DELTA</MenuItem>
                        <MenuItem value={632}>CAMARA MUNICIPAL DE DESCOBERTO</MenuItem>
                        <MenuItem value={633}>PREFEITURA MUNICIPAL DE DESCOBERTO</MenuItem>
                        <MenuItem value={634}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE DESCOBERTO</MenuItem>
                        <MenuItem value={636}>CAMARA MUNICIPAL DE DESTERRO DE ENTRE RIOS</MenuItem>
                        <MenuItem value={637}>CAMARA MUNICIPAL DE DESTERRO DO MELO</MenuItem>
                        <MenuItem value={638}>PRFEITURA MUNICIPAL DE DESTERRO DO MELO</MenuItem>
                        <MenuItem value={643}>CAMARA MUNICIPAL DE DIOGO DE VASCONCELOS</MenuItem>
                        <MenuItem value={644}>PREFEITURA MUNICIPAL DE DIOGO DE VASCONCELOS</MenuItem>
                        <MenuItem value={645}>CAMARA MUNICIPAL DE DIONISIO</MenuItem>
                        <MenuItem value={647}>CAMARA MUNICIPAL DE DIVINESIA</MenuItem>
                        <MenuItem value={651}>PLANO UNICO DE PREVIDENCIA E ASSISTENCIA SOCIAL UNIPREV</MenuItem>
                        <MenuItem value={652}>CAMARA MUNICIPAL DE DIVINO DAS LARANJEIRAS</MenuItem>
                        <MenuItem value={654}>PREFEITURA MUNICIPAL DE DIVINOLANDIA DE MINAS</MenuItem>
                        <MenuItem value={655}>CAMARA MUNICIPAL DE DIVINOLANDIA DE MINAS</MenuItem>
                        <MenuItem value={656}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={658}>PREFEITURA MUNICIPAL DE DIVINOPOLIS</MenuItem>
                        <MenuItem value={66}>PREFEITURA MUNICIPAL DE ALVORADA DE MINAS</MenuItem>
                        <MenuItem value={664}>PREFEITURA MUNICIPAL DE DIVISA ALEGRE</MenuItem>
                        <MenuItem value={665}>CAMARA MUNICIPAL DE VEREADORES DE DIVISA NOVA</MenuItem>
                        <MenuItem value={666}>MUNICIPIO DE DIVISA NOVA - PREFEITURA</MenuItem>
                        <MenuItem value={668}>PREFEITURA MUNICIPAL DE DIVISOPOLIS</MenuItem>
                        <MenuItem value={67}>CAMARA MUNICIPAL DE AMPARO DO SERRA</MenuItem>
                        <MenuItem value={670}>CAMARA MUNICIPAL DOM BOSCO</MenuItem>
                        <MenuItem value={671}>CAMARA MUNICIPAL DE DOM CAVATI</MenuItem>
                        <MenuItem value={672}>PREFEITURA MUNICIPAL DE DOM CAVATI</MenuItem>
                        <MenuItem value={675}>PREFEITURA MUNICIPAL DE DOM SILVERIO</MenuItem>
                        <MenuItem value={677}>CAMARA MUNICIPAL DE DOM VICOSO - MG</MenuItem>
                        <MenuItem value={678}>PREFEITURA MUNICIPAL DE DOM VICOSO - MG</MenuItem>
                        <MenuItem value={68}>PREFEITURA MUNICIPAL DE AMPARO DO SERRA</MenuItem>
                        <MenuItem value={681}>PODER EXECUTIVO</MenuItem>
                        <MenuItem value={683}>PREFEITURA MUNICIPAL DORES DE GUANHAES</MenuItem>
                        <MenuItem value={687}>INSTITUTO DE PREVIDENCIA DOS SERVIDORES DE DORES DO INDAIA</MenuItem>
                        <MenuItem value={688}>CAMARA MUNICIPAL DE DORES DO TURVO</MenuItem>
                        <MenuItem value={689}>PREFEITURA MUNICIPAL DE DORES DO TURVO</MenuItem>
                        <MenuItem value={69}>CAMARA MUNICIPAL DE ANDRADAS</MenuItem>
                        <MenuItem value={690}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={691}>CAMARA MUNICIPAL DE DORESOPOLIS</MenuItem>
                        <MenuItem value={693}>PREFEITURA MUNICIPAL DE DOURADOQUARA</MenuItem>
                        <MenuItem value={694}>PREFEITURA MUNICIPAL DE DURANDE</MenuItem>
                        <MenuItem value={695}>CAMARA MUNICIPAL DE DURANDE</MenuItem>
                        <MenuItem value={699}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={7}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={70}>PREFEITURA MUNICIPAL DE ANDRADAS</MenuItem>
                        <MenuItem value={703}>PREFEITURA MUNICIPAL DE ENGENHEIRO NAVARRO</MenuItem>
                        <MenuItem value={707}>CAMARA MUNICIPAL DE ENTRE RIOS DE MINAS</MenuItem>
                        <MenuItem value={710}>CAMARA MUNICIPAL DE ESMERALDAS</MenuItem>
                        <MenuItem value={711}>PREFEITURA MUNICIPAL DE ESMERALDAS</MenuItem>
                        <MenuItem value={712}>CAMARA MUNICIPAL DE ESPERA FELIZ</MenuItem>
                        <MenuItem value={714}>FUNDO MUNICIPAL PREVIDENCIARIO DE ESPERA FELIZ</MenuItem>
                        <MenuItem value={718}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE ESPINOSA</MenuItem>
                        <MenuItem value={721}>PREFEITURA MUNICIPAL DE ESTIVA</MenuItem>
                        <MenuItem value={724}>PREFEITURA MUNICIPAL DE ESTRELA DALVA</MenuItem>
                        <MenuItem value={725}>CAMARA MUNICIPAL DE ESTRELA DO INDAIA</MenuItem>
                        <MenuItem value={726}>PREFEITURA MUNICIPAL DE ESTRELA DO INDAIA</MenuItem>
                        <MenuItem value={727}>FUNDO PREVIDENCIARIO DOS SERVIDORES PUBLICOS DE ESTRELA DO INDAIA</MenuItem>
                        <MenuItem value={728}>FUNDACAO MUNICIPAL DE SAUDE DE ESTRELA DO INDAIA</MenuItem>
                        <MenuItem value={729}>PREFEITURA MUNICIPAL DE ESTRELA DO SUL</MenuItem>
                        <MenuItem value={73}>PREFEITURA MUNICIPAL DE CACHOEIRA DE PAJEU</MenuItem>
                        <MenuItem value={733}>CAMARA MUNICIPAL DE EWBANK DA CAMARA</MenuItem>
                        <MenuItem value={734}>PREFEITURA MUNICIPAL DE EWBANK DA CAMARA</MenuItem>
                        <MenuItem value={735}>CAMARA MUNICIPAL DE EXTREMA</MenuItem>
                        <MenuItem value={736}>PREFEITURA MUNICIPAL DE EXTREMA</MenuItem>
                        <MenuItem value={737}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE EXTREMA</MenuItem>
                        <MenuItem value={738}>CAMARA MUNICIPAL DE FAMA</MenuItem>
                        <MenuItem value={739}>PREFEITURA MUNICIPAL DE FAMA</MenuItem>
                        <MenuItem value={74}>CAMARA MUNICIPAL DE CACHOEIRA DE PAJEU</MenuItem>
                        <MenuItem value={740}>PREFEITURA MUNICIPAL DE FARIA LEMOS</MenuItem>
                        <MenuItem value={741}>CAMARA MUNICIPAL DE FARIA LEMOS</MenuItem>
                        <MenuItem value={743}>PREFEITURA MUNICIPAL DE FELICIO DOS SANTOS</MenuItem>
                        <MenuItem value={747}>CAMARA MUNICIPAL DE FELISBURGO</MenuItem>
                        <MenuItem value={749}>CAMARA MUNICIPAL DE FELIXLANDIA</MenuItem>
                        <MenuItem value={75}>CAMARAMUNICIPALDEANDRELANDIA</MenuItem>
                        <MenuItem value={755}>PREFEITURA MUNICIPAL DE FERROS</MenuItem>
                        <MenuItem value={756}>CAMARA MUNICIPAL DE FERVEDOURO</MenuItem>
                        <MenuItem value={757}>PREFEITURA MUNICIPAL DE FERVEDOURO</MenuItem>
                        <MenuItem value={76}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={765}>PREFEITURA MUNICIPAL DE FORMIGA</MenuItem>
                        <MenuItem value={767}>INST.DE PREVID.SOCIAL DO MUNIC.DE FORMIGA-PREVIFOR</MenuItem>
                        <MenuItem value={768}>PREFEITURA MUNICIPAL DE FORMOSO</MenuItem>
                        <MenuItem value={769}>CAMARA MUNICIPAL DE FORMOSO</MenuItem>
                        <MenuItem value={770}>CAMARA MUNICIPAL DE FORTALEZA DE MINAS</MenuItem>
                        <MenuItem value={771}>PREFEITURA MUNICIPAL DE FORTALEZA DE MINAS</MenuItem>
                        <MenuItem value={773}>PREFEITURA MUNICIPAL DE FORTUNA DE MINAS</MenuItem>
                        <MenuItem value={776}>PREFEITURA MUNICIPAL DE FRANCISCO BADARO</MenuItem>
                        <MenuItem value={779}>CAMARA MUNICIPAL DE FRANCISCO SA</MenuItem>
                        <MenuItem value={780}>PREFEITURA MUNICIPAL DE FRANCISCO SA</MenuItem>
                        <MenuItem value={782}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={786}>PREFEITURA MUNICIPAL DE FREI GASPAR</MenuItem>
                        <MenuItem value={787}>CAMARA MUNICIPAL DE FREI INOCENCIO</MenuItem>
                        <MenuItem value={79}>CAMARA MUNICIPAL DE ANTONIO CARLOS</MenuItem>
                        <MenuItem value={790}>CAMARA MUNICIPAL DE FREI LAGONEGRO</MenuItem>
                        <MenuItem value={791}>PREFEITURA MUNICIPAL DE FRONTEIRA</MenuItem>
                        <MenuItem value={792}>CAMARA MUNICIPAL DE FRONTEIRA</MenuItem>
                        <MenuItem value={794}>CAMARA MUNICIPAL DE FRONTEIRA DOS VALES</MenuItem>
                        <MenuItem value={795}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE FRONTEIRA DOS VALES</MenuItem>
                        <MenuItem value={796}>CAMARA MUNICIPAL DE FRUTA DE LEITE</MenuItem>
                        <MenuItem value={799}>PREFEITURA MUNICIPAL DE FRUTAL</MenuItem>
                        <MenuItem value={800}>FUNDACAO HOSPITAL FREI GABRIEL</MenuItem>
                        <MenuItem value={802}>CAMARA MUNICIPAL DE FUNILANDIA</MenuItem>
                        <MenuItem value={803}>PREFEITURA MUNICIPAL DE FUNILANDIA</MenuItem>
                        <MenuItem value={804}>PREFEITURA MUNICIPAL DE GALILEIA</MenuItem>
                        <MenuItem value={806}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={808}>PREFEITURA MUNICIPAL DE GAMELEIRAS</MenuItem>
                        <MenuItem value={809}>CAMARA MUNICIPAL DE GLAUCILANDIA</MenuItem>
                        <MenuItem value={810}>PREFEITURA MUNICIPAL DE GLAUCILANDIA</MenuItem>
                        <MenuItem value={811}>PREFEITURA MUNICIPAL DE GOIABEIRA</MenuItem>
                        <MenuItem value={813}>SAAE</MenuItem>
                        <MenuItem value={814}>CAMARA MUNICIPAL DE GOIANA</MenuItem>
                        <MenuItem value={817}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={819}>PREFEITURA MUNICIPAL DE GONZAGA</MenuItem>
                        <MenuItem value={82}>CAMARA MUNICIPAL DE ANTONIO DIAS</MenuItem>
                        <MenuItem value={822}>CAMARA MUNICIPAL DE GOUVEIA</MenuItem>
                        <MenuItem value={823}>PREFEITURA MUNICIPAL DE GOUVEIA</MenuItem>
                        <MenuItem value={825}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={826}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={837}>CAMARA MUNICIPAL DE GUAPE</MenuItem>
                        <MenuItem value={839}>SERVICO AUTONOMOS DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={84}>CAMARA MUNIC ANTONIO PRADO DE MINAS</MenuItem>
                        <MenuItem value={840}>CAMARA MUNICIPAL DE GUARACIABA</MenuItem>
                        <MenuItem value={841}>PREFEITURA MUNICIPAL DE GUARACIABA</MenuItem>
                        <MenuItem value={842}>INSTITUTO DE PREVIDENCIA DOS SERV. PUBL. GUARACIABA</MenuItem>
                        <MenuItem value={843}>CAMARA MUNICIPAL DE GUARACIAMA</MenuItem>
                        <MenuItem value={844}>PREFEITURA MUNICIPAL DE GUARACIAMA</MenuItem>
                        <MenuItem value={846}>PREFEITURA MUNICIPAL DE GUARANESIA</MenuItem>
                        <MenuItem value={849}>PREFEITURA MUNICIPAL DE GUARANI</MenuItem>
                        <MenuItem value={85}>PREF MUNIC ANTONIO PRADO DE MINAS</MenuItem>
                        <MenuItem value={850}>SERVICO AUTONOMO DE AGUA E ESGOTO DE GUARANI</MenuItem>
                        <MenuItem value={851}>FUNDO DE PREVIDENCIA DOS SERVIDORES MUNICIPAIS DE GUARANI</MenuItem>
                        <MenuItem value={853}>PREFEITURA MUNICIPAL DE GUARARA</MenuItem>
                        <MenuItem value={854}>CAMARA MUNICIPAL DE GUARDA MOR</MenuItem>
                        <MenuItem value={855}>PREFEITURA MUNICIPAL DE GUARDA MOR</MenuItem>
                        <MenuItem value={856}>PREFEITURA MUNICIPAL DE GUAXUPE</MenuItem>
                        <MenuItem value={860}>PREFEITURA MUNICIPAL DE GUIDOVAL</MenuItem>
                        <MenuItem value={863}>CAMARA MUNICIPAL DE GUIMARANIA</MenuItem>
                        <MenuItem value={868}>CAMARA</MenuItem>
                        <MenuItem value={869}>PREFEITURA</MenuItem>
                        <MenuItem value={872}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={875}>PREFEITURA MUNICIPAL DE IAPU</MenuItem>
                        <MenuItem value={876}>CAMARA MUNICIPAL DE IBERTIOGA</MenuItem>
                        <MenuItem value={878}>CAMARA MUNICIPAL DE IBIA</MenuItem>
                        <MenuItem value={879}>PREFEITURA MUNICIPAL DE IBIA</MenuItem>
                        <MenuItem value={88}>PREFEITURA MUNICIPAL DE ARACITABA</MenuItem>
                        <MenuItem value={880}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={882}>PREFEITURA MUNICIPAL DE IBIAI</MenuItem>
                        <MenuItem value={883}>CAMARA MUNICIPAL DE IBIRACATU</MenuItem>
                        <MenuItem value={884}>PREFEITURA MUNICIPAL DE IBIRACATU</MenuItem>
                        <MenuItem value={887}>PREFEITURA MUNICIPAL DE IBIRITE</MenuItem>
                        <MenuItem value={889}>INSTITUTO DE PREVIDENCIA SOCIAL DE IBIRITE - IPASI</MenuItem>
                        <MenuItem value={891}>CAMARA MUNICIPAL DE IBITIURA DE MINAS</MenuItem>
                        <MenuItem value={892}>CAMARA MUNICIPAL IBITURUNA</MenuItem>
                        <MenuItem value={896}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={897}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={898}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={899}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={9}>PREFEITURA MUNICIPAL DE ABAETE</MenuItem>
                        <MenuItem value={900}>PREVIGARA-INSTITUTO DE PREVIDENCIA DE IGARATINGA</MenuItem>
                        <MenuItem value={904}>SERVICO AUTONOMO DE AGUA E ESGOTO DE IGUATAMA</MenuItem>
                        <MenuItem value={906}>PREFEITURA MUNICIPAL DE IJACI</MenuItem>
                        <MenuItem value={908}>PREFEITURA MUNICIPAL DE ILICINEA - MG</MenuItem>
                        <MenuItem value={909}>CAMARA MUNICIPAL DE IMBE DE MINAS</MenuItem>
                        <MenuItem value={913}>PREFEITURA MUNICIPAL DE INDAIABIRA</MenuItem>
                        <MenuItem value={916}>PREFEITURA MUNICIPAL DE INDIANOPOLIS</MenuItem>
                        <MenuItem value={919}>PREFEITURA MUNICIPAL</MenuItem>
                        <MenuItem value={920}>CAMARA MUNICIPAL</MenuItem>
                        <MenuItem value={922}>CAMARA MUNICIPAL DE INHAUMA</MenuItem>
                        <MenuItem value={927}>PREFEITURA MUNICIPAL DE IPABA</MenuItem>
                        <MenuItem value={928}>PREFEITURA MUNICIPAL DE IPANEMA</MenuItem>
                        <MenuItem value={929}>CAMARA MUNICIPAL DE IPANEMA</MenuItem>
                        <MenuItem value={933}>CAMARA MUNICIPAL DE IPIACU</MenuItem>
                        <MenuItem value={935}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE IPIACU</MenuItem>
                        <MenuItem value={936}>PREFEITURA MUNICIPAL DE IPUIUNA</MenuItem>
                        <MenuItem value={937}>CAMARA MUNICIPAL DE IPUIUNA</MenuItem>
                        <MenuItem value={938}>PREFEITURA MUNICIPAL DE IRAI DE MINAS</MenuItem>
                        <MenuItem value={944}>INSTITUTO DE PREVIDENCIA DE ITABIRA</MenuItem>
                        <MenuItem value={947}>CAMARA MUNICIPAL DE ITABIRITO</MenuItem>
                        <MenuItem value={949}>SERVICO AUTONOMO DE SANEAMENTO BASICO</MenuItem>
                        <MenuItem value={950}>CAMARA MUNICIPAL DE ITACAMBIRA</MenuItem>
                        <MenuItem value={955}>CAMARA MUNICIPAL DE ITAGUARA</MenuItem>
                        <MenuItem value={96}>CAMARA MUNICIPAL DE ARANTINA</MenuItem>
                        <MenuItem value={960}>CAMARA MUNICIPAL DE ITAJUBA</MenuItem>
                        <MenuItem value={962}>CAMARA MUNICIPAL DE ITAMARANDIBA</MenuItem>
                        <MenuItem value={964}>INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE ITAMARANDIBA</MenuItem>
                        <MenuItem value={968}>PREFEITURA MUNICIPAL DE ITAMBACURI</MenuItem>
                        <MenuItem value={97}>PREFEITURA MUNICIPAL DE ARANTINA</MenuItem>
                        <MenuItem value={970}>PREFEITURA MUNICIPAL DE ITAMBE DO MATO DENTRO</MenuItem>
                        <MenuItem value={973}>PREFEITURA MUNICIPAL DE ITAMOGI</MenuItem>
                        <MenuItem value={974}>CAMARA MUNICIPAL DE ITAMONTE</MenuItem>
                        <MenuItem value={976}>INSTITUTO PREV. ASSIST. SERV. PUBL. MUNICIPAIS</MenuItem>
                        <MenuItem value={979}>CAMARA DE VEREADORES DO MUNICIPIO DE ITANHOMI</MenuItem>
                        <MenuItem value={98}>CAMARA MUNICIPAL DE ARAPONG</MenuItem>
                        <MenuItem value={980}>PREFEITURA MUNICIPAL DE ITANHOMI</MenuItem>
                        <MenuItem value={981}>CAMARA MUNICIPAL DE ITAOBIM</MenuItem>
                        <MenuItem value={982}>PREFEITURA MUNICIPAL DE ITAOBIM</MenuItem>
                        <MenuItem value={984}>PREFEITURA MUNICIPAL DE ITAPAGIPE</MenuItem>
                        <MenuItem value={986}>CAMARA MUNICIPAL DE ITAPECERICA</MenuItem>
                        <MenuItem value={987}>PREFEITURA MUNICIPAL DE ITAPECERICA</MenuItem>
                        <MenuItem value={989}>PREFEITURA MUNICIPAL DE ITAPEVA</MenuItem>
                        <MenuItem value={99}>PREFEITURA MUNICIPAL DE ARAPONGA</MenuItem>
                        <MenuItem value={990}>INSTITUTO DE PREVIDENCIA MUNICIPAL DE ITAPEVA</MenuItem>
                        <MenuItem value={992}>PREFEITURA MUNICIPAL DE ITATIAIUCU</MenuItem>
                        <MenuItem value={997}>SERVICO AUTONOMO DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={999}>CAMARA MUNICIPAL DE ITAVERAVA</MenuItem>

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
                        <MenuItem value={2}>JUDICIARIA</MenuItem>
                        <MenuItem value={4}>ADMINISTRACAO</MenuItem>
                        <MenuItem value={10}>SAUDE</MenuItem>
                        <MenuItem value={13}>CULTURA</MenuItem>
                        <MenuItem value={15}>URBANISMO</MenuItem>
                        <MenuItem value={16}>HABITACAO</MenuItem>
                        <MenuItem value={21}>ORGANIZACAO AGRARIA</MenuItem>
                        <MenuItem value={23}>COMERCIO E SERVICOS</MenuItem>
                        <MenuItem value={24}>COMUNICACOES</MenuItem>
                        <MenuItem value={28}>ENCARGOS ESPECIAIS</MenuItem>
                        <MenuItem value={1}>LEGISLATIVA</MenuItem>
                        <MenuItem value={3}>ESSENCIAL A JUSTICA</MenuItem>
                        <MenuItem value={5}>DEFESA NACIONAL</MenuItem>
                        <MenuItem value={6}>SEGURANCA PUBLICA</MenuItem>
                        <MenuItem value={7}>RELACOES EXTERIORES</MenuItem>
                        <MenuItem value={8}>ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={9}>PREVIDENCIA SOCIAL</MenuItem>
                        <MenuItem value={11}>TRABALHO</MenuItem>
                        <MenuItem value={12}>EDUCACAO</MenuItem>
                        <MenuItem value={14}>DIREITOS DA CIDADANIA</MenuItem>
                        <MenuItem value={17}>SANEAMENTO</MenuItem>
                        <MenuItem value={18}>GESTAO AMBIENTAL</MenuItem>
                        <MenuItem value={19}>CIENCIA E TECNOLOGIA</MenuItem>
                        <MenuItem value={20}>AGRICULTURA</MenuItem>
                        <MenuItem value={22}>INDUSTRIA</MenuItem>
                        <MenuItem value={25}>ENERGIA</MenuItem>
                        <MenuItem value={26}>TRANSPORTE</MenuItem>
                        <MenuItem value={27}>DESPORTO E LAZER</MenuItem>
                        <MenuItem value={99}>RESERVA DE CONTINGENCIA</MenuItem>

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
                        <MenuItem value={31}>ACAO LEGISLATIVA</MenuItem>
                        <MenuItem value={32}>CONTROLE EXTERNO</MenuItem>
                        <MenuItem value={92}>REPRESENTACAO JUDICIAL E EXTRAJUDICIAL</MenuItem>
                        <MenuItem value={122}>ADMINISTRACAO GERAL</MenuItem>
                        <MenuItem value={123}>ADMINISTRACAO FINANCEIRA</MenuItem>
                        <MenuItem value={124}>CONTROLE INTERNO</MenuItem>
                        <MenuItem value={125}>NORMATIZACAO E FISCALIZACAO</MenuItem>
                        <MenuItem value={130}>ADMINISTRACAO DE CONCESSOES</MenuItem>
                        <MenuItem value={131}>COMUNICACAO SOCIAL</MenuItem>
                        <MenuItem value={151}>DEFESA AREA</MenuItem>
                        <MenuItem value={211}>RELACOES DIPLOMATICAS</MenuItem>
                        <MenuItem value={243}>ASSISTENCIA A CRIANCA E AO ADOLESCENTE</MenuItem>
                        <MenuItem value={244}>ASSISTENCIA COMUNITARIA</MenuItem>
                        <MenuItem value={271}>PREVIDENCIA BASICA</MenuItem>
                        <MenuItem value={272}>PREVIDENCIA DO REGIME ESTATUTARIO</MenuItem>
                        <MenuItem value={274}>PREVIDENCIA ESPECIAL</MenuItem>
                        <MenuItem value={304}>VIGILANCIA SANITARIA</MenuItem>
                        <MenuItem value={305}>VIGILANCIA EPIDEMIOLOGICA</MenuItem>
                        <MenuItem value={331}>PROTECAO E BENEFICIOS AO TRABALHADOR</MenuItem>
                        <MenuItem value={332}>RELACOES DE TRABALHO</MenuItem>
                        <MenuItem value={361}>ENSINO FUNDAMENTAL</MenuItem>
                        <MenuItem value={362}>ENSINO MEDIO</MenuItem>
                        <MenuItem value={364}>ENSINO SUPERIOR</MenuItem>
                        <MenuItem value={365}>EDUCACAO INFANTIL</MenuItem>
                        <MenuItem value={366}>EDUCACAO DE JOVENS E ADULTOS</MenuItem>
                        <MenuItem value={392}>DIFUSAO CULTURAL</MenuItem>
                        <MenuItem value={422}>DIREITOS INDIVIDUAIS</MenuItem>
                        <MenuItem value={482}>HABITACAO URBANA</MenuItem>
                        <MenuItem value={543}>RECUPERACAO DE AREAS DEGRADADAS</MenuItem>
                        <MenuItem value={544}>RECURSOS HIDRICOS</MenuItem>
                        <MenuItem value={545}>METEOROLOGIA</MenuItem>
                        <MenuItem value={571}>DESENVOLVIMENTO CIENTIFICO</MenuItem>
                        <MenuItem value={572}>DESENVOLVIMENTO TECNOLOGICO E ENGENHARIA</MenuItem>
                        <MenuItem value={604}>DEFESA SANITARIA ANIMAL</MenuItem>
                        <MenuItem value={606}>EXTENSAO RURAL</MenuItem>
                        <MenuItem value={607}>IRRIGACAO</MenuItem>
                        <MenuItem value={609}>DEFESA  AGROPECUARIA</MenuItem>
                        <MenuItem value={632}>COLONIZACAO</MenuItem>
                        <MenuItem value={662}>PRODUCAO INDUSTRIAL</MenuItem>
                        <MenuItem value={691}>PROMOCAO COMERCIAL</MenuItem>
                        <MenuItem value={693}>COMERCIO EXTERIOR</MenuItem>
                        <MenuItem value={694}>SERVICOS FINANCEIROS</MenuItem>
                        <MenuItem value={695}>TURISMO</MenuItem>
                        <MenuItem value={721}>COMUNICACOES POSTAIS</MenuItem>
                        <MenuItem value={722}>TELECOMUNICACOES</MenuItem>
                        <MenuItem value={751}>CONSERVACAO DE ENERGIA</MenuItem>
                        <MenuItem value={781}>TRANSPORTE AEREO</MenuItem>
                        <MenuItem value={783}>TRANSPORTE FERROVIARIO</MenuItem>
                        <MenuItem value={785}>TRANSPORTES ESPECIAIS</MenuItem>
                        <MenuItem value={811}>DESPORTO DE RENDIMENTO</MenuItem>
                        <MenuItem value={847}>TRANSFERENCIAS PARA EDUCACAO BASICA</MenuItem>
                        <MenuItem value={997}>RESERVA DE RPPS</MenuItem>
                        <MenuItem value={999}>RESERVA DE CONTINGENCIA</MenuItem>
                        <MenuItem value={61}>ACAO JUDICIARIA</MenuItem>
                        <MenuItem value={62}>DEFESA DO INTERESSE PUBLICO NO PROCESSO JUDICIARIO</MenuItem>
                        <MenuItem value={91}>DEFESA DA ORDEM JURIDICA</MenuItem>
                        <MenuItem value={121}>PLANEJAMENTO E ORCAMENTO</MenuItem>
                        <MenuItem value={126}>TECNOLOGIA DA INFORMACAO</MenuItem>
                        <MenuItem value={127}>ORDENAMENTO TERRITORIAL</MenuItem>
                        <MenuItem value={128}>FORMACAO DE RECURSOS HUMANOS</MenuItem>
                        <MenuItem value={129}>ADMINISTRACAO DE RECEITAS</MenuItem>
                        <MenuItem value={152}>DEFESA NAVAL</MenuItem>
                        <MenuItem value={153}>DEFESA TERRESTRE</MenuItem>
                        <MenuItem value={181}>POLICIAMENTO</MenuItem>
                        <MenuItem value={182}>DEFESA CIVIL</MenuItem>
                        <MenuItem value={183}>INFORMACAO E INTELIGENCIA</MenuItem>
                        <MenuItem value={212}>COOPERACAO INTERNACIONAL</MenuItem>
                        <MenuItem value={241}>ASSISTENCIA AO IDOSO</MenuItem>
                        <MenuItem value={242}>ASSISTENCIA AO PORTADOR DE DEFICIENCIA</MenuItem>
                        <MenuItem value={273}>PREVIDENCIA COMPLEMENTAR</MenuItem>
                        <MenuItem value={301}>ATENCAO BASICA</MenuItem>
                        <MenuItem value={302}>ASSISTENCIA HOSPITALAR E AMBULATORIAL</MenuItem>
                        <MenuItem value={303}>SUPORTE PROFILATICO E TERAPEUTICO</MenuItem>
                        <MenuItem value={306}>ALIMENTACAO E NUTRICAO</MenuItem>
                        <MenuItem value={333}>EMPREGABILIDADE</MenuItem>
                        <MenuItem value={334}>FOMENTO AO TRABALHO</MenuItem>
                        <MenuItem value={363}>ENSINO PROFISSIONAL</MenuItem>
                        <MenuItem value={367}>EDUCACAO ESPECIAL</MenuItem>
                        <MenuItem value={368}>EDUCACAO BASICA</MenuItem>
                        <MenuItem value={391}>PATRIMONIO HISTORICO</MenuItem>
                        <MenuItem value={421}>CUSTODIA E REINTEGRACAO SOCIAL</MenuItem>
                        <MenuItem value={423}>ASSISTENCIA AOS POVOS INDIGENAS</MenuItem>
                        <MenuItem value={451}>INFRA-ESTRUTURA URBANA</MenuItem>
                        <MenuItem value={452}>SERVICOS URBANOS</MenuItem>
                        <MenuItem value={453}>TRANSPORTES COLETIVOS URBANOS</MenuItem>
                        <MenuItem value={481}>HABITACAO RURAL</MenuItem>
                        <MenuItem value={511}>SANEAMENTO BASICO RURAL</MenuItem>
                        <MenuItem value={512}>SANEAMENTO BASICO URBANO</MenuItem>
                        <MenuItem value={541}>PRESERVACAO E CONSERVACAO AMBIENTAL</MenuItem>
                        <MenuItem value={542}>CONTROLE AMBIENTAL</MenuItem>
                        <MenuItem value={573}>DIFUSAO DO CONHECIMENTO CIENTIFICO E TECNOLOGICO</MenuItem>
                        <MenuItem value={601}>PROMOCAO DA PRODUCAO VEGETAL</MenuItem>
                        <MenuItem value={602}>PROMOCAO DA PRODUCAO ANIMAL</MenuItem>
                        <MenuItem value={603}>DEFESA SANITARIA VEGETAL</MenuItem>
                        <MenuItem value={605}>ABASTECIMENTO</MenuItem>
                        <MenuItem value={608}>PROMOCAO DA PRODUCAO AGROPECUARIA</MenuItem>
                        <MenuItem value={631}>REFORMA AGRARIA</MenuItem>
                        <MenuItem value={661}>PROMOCAO INDUSTRIAL</MenuItem>
                        <MenuItem value={663}>MINERACAO</MenuItem>
                        <MenuItem value={664}>PROPRIEDADE INDUSTRIAL</MenuItem>
                        <MenuItem value={665}>NORMALIZACAO E QUALIDADE</MenuItem>
                        <MenuItem value={692}>COMERCIALIZACAO</MenuItem>
                        <MenuItem value={752}>ENERGIA ELETRICA</MenuItem>
                        <MenuItem value={782}>TRANSPORTE RODOVIARIO</MenuItem>
                        <MenuItem value={784}>TRANSPORTE HIDROVIARIO</MenuItem>
                        <MenuItem value={812}>DESPORTO COMUNITARIO</MenuItem>
                        <MenuItem value={813}>LAZER</MenuItem>
                        <MenuItem value={841}>REFINANCIAMENTO DA DIVIDA INTERNA</MenuItem>
                        <MenuItem value={842}>REFINANCIAMENTO DA DIVIDA EXTERNA</MenuItem>
                        <MenuItem value={843}>SERVICO DA DIVIDA INTERNA</MenuItem>
                        <MenuItem value={844}>SERVICO DA DIVIDA EXTERNA</MenuItem>
                        <MenuItem value={845}>OUTRAS TRANSFERENCIAS</MenuItem>
                        <MenuItem value={846}>OUTROS ENCARGOS ESPECIAIS</MenuItem>
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
                        <MenuItem value={'3.1.71.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.1.74.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.1.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'3.1.90.01.00'}>APOSENTADORIAS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.01.01'}>APOSENTADORIAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.03.01'}>PENSOES CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.04.02'}>PESSOAL DO FUNDEB (RECURSOS: MINIMO DE 40%)</MenuItem>
                        <MenuItem value={'3.1.90.05.00'}>OUTROS BENEFICIOS PREVIDENCIARIOS DO SERVIDOR OU DO MILITAR</MenuItem>
                        <MenuItem value={'3.1.90.05.02'}>OUTROS BENEFICIOS PREVIDENCIARIOS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.11.00'}>VENCIMENTOS E VANTAGENS FIXAS</MenuItem>
                        <MenuItem value={'3.1.90.11.00'}>VENCIMENTOS E VANTAGENS FIXAS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.1.90.11.01'}>PESSOAL  DO FUNDEB (RECURSOS: MINIMO DE 60%)</MenuItem>
                        <MenuItem value={'3.1.90.11.01'}>PESSOAL DO FUNDEB (RECURSOS: MINIMO DE 60%)</MenuItem>
                        <MenuItem value={'3.1.90.11.02'}>PESSOAL  DO FUNDEB (RECURSOS: ATE 40%)</MenuItem>
                        <MenuItem value={'3.1.90.11.02'}>PESSOAL DO FUNDEB (RECURSOS: ATE 40%)</MenuItem>
                        <MenuItem value={'3.1.90.11.04'}>PESSOAL DE CARGO EFETIVO (VINCULADO AO INSS)</MenuItem>
                        <MenuItem value={'3.1.90.11.05'}>PESSOAL DE CARGO COMISSIONADO</MenuItem>
                        <MenuItem value={'3.1.90.11.06'}>SUBSIDIO DE VEREADOR</MenuItem>
                        <MenuItem value={'3.1.90.11.08'}>SUBSIDIO DE VICE-PREFEITO</MenuItem>
                        <MenuItem value={'3.1.90.11.09'}>SUBSIDIO DE SECRETARIO MUNICIPAL</MenuItem>
                        <MenuItem value={'3.1.90.11.10'}>SUBSIDIO DE PRESIDENTE DA CAMARA</MenuItem>
                        <MenuItem value={'3.1.90.11.12'}>REMUNERACAO DE MEMBROS DE CONSELHOS</MenuItem>
                        <MenuItem value={'3.1.90.11.50'}>SALARIO MATERNIDADE</MenuItem>
                        <MenuItem value={'3.1.90.11.52'}>LICENCA SAUDE</MenuItem>
                        <MenuItem value={'3.1.90.13.02'}>CONTRIBUICAO PATRONAL PARA O RPPS (EXCETO A INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.90.13.05'}>OBRIGACOES PATRONAIS REFERENTES AO FUNDEB (ATE 40%)</MenuItem>
                        <MenuItem value={'3.1.90.13.99'}>OUTRAS OBRIGACOES</MenuItem>
                        <MenuItem value={'3.1.90.16.00'}>OUTRAS DESPESAS VARIAVEIS</MenuItem>
                        <MenuItem value={'3.1.90.67.00'}>DEPOSITOS COMPULSORIOS</MenuItem>
                        <MenuItem value={'3.1.90.91.02'}>SENTENCAS JUDICIAIS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.1.90.92.03'}>DESPESAS DE EXERCICIOS ANTERIORES DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.90.94.01'}>INDENIZACOES POR DEMISSAO DE SERVIDORES OU EMPREGADOS</MenuItem>
                        <MenuItem value={'3.1.90.94.02'}>INCENTIVOS A DEMISSAO VOLUNTARIA</MenuItem>
                        <MenuItem value={'3.1.90.96.00'}>RESSARCIMENTO DE DESPESAS DE PESSOAL REQUISITADO</MenuItem>
                        <MenuItem value={'3.1.90.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.1.91.00.00'}>APLICACAO DIRETA DECORRENTE DE OPERACAO ENTRE ORGAOS</MenuItem>
                        <MenuItem value={'3.1.91.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.1.91.13.02'}>CONTRIBUICAO PATRONAL PARA O RPPS (EXCETO A INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.91.13.04'}>OBRIGACOES PATRONAIS REFERENTES AO FUNDEB (MINIMO DE 60%)</MenuItem>
                        <MenuItem value={'3.1.91.13.05'}>OBRIGACOES PATRONAIS REFERENTES AO FUNDEB (ATE 40%)</MenuItem>
                        <MenuItem value={'3.1.91.13.99'}>OUTRAS OBRIGACOES</MenuItem>
                        <MenuItem value={'3.1.91.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.1.91.91.01'}>SENTENCAS JUDICIAIS DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.91.91.03'}>SENTENCAS JUDICIAIS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.91.92.02'}>DESPESAS DE EXERCICIOS ANTERIORES DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.91.94.00'}>INDENIZACOES E RESTITUICOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.91.94.01'}>INDENIZACOES POR DEMISSAO DE SERVIDORES OU EMPREGADOS</MenuItem>
                        <MenuItem value={'3.1.91.94.02'}>INCENTIVOS A DEMISSAO VOLUNTARIA</MenuItem>
                        <MenuItem value={'3.1.95.11.03'}>PESSOAL DE CARGO EFETIVO (VINCULADO AO RPPS)</MenuItem>
                        <MenuItem value={'3.1.95.13.00'}>OBRIGACOES PATRONAIS</MenuItem>
                        <MenuItem value={'3.1.95.13.02'}>CONTRIBUICAO PATRONAL PARA O RPPS (EXCETO A INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.95.13.03'}>CONTRIBUICAO PATRONAL PARA O INSS (EXCETO A INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.95.13.99'}>OUTRAS OBRIGACOES</MenuItem>
                        <MenuItem value={'3.1.95.67.00'}>DEPOSITOS COMPULSORIOS</MenuItem>
                        <MenuItem value={'3.1.95.94.01'}>INDENIZACOES POR DEMISSAO DE SERVIDORES OU EMPREGADOS</MenuItem>
                        <MenuItem value={'3.1.96.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.1.96.11.03'}>PESSOAL DE CARGO EFETIVO (VINCULADO AO RPPS)</MenuItem>
                        <MenuItem value={'3.1.96.11.05'}>PESSOAL DE CARGO COMISSIONADO</MenuItem>
                        <MenuItem value={'3.1.96.13.00'}>OBRIGACOES PATRONAIS</MenuItem>
                        <MenuItem value={'3.1.99.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.2.90.21.00'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.21.01'}>JUROS SOBRE A DIVIDA POR CONTRATO  INTERNA</MenuItem>
                        <MenuItem value={'3.2.90.21.02'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.22.00'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.22.01'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO  INTERNA</MenuItem>
                        <MenuItem value={'3.2.90.22.02'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.24.00'}>OUTROS ENCARGOS SOBRE A DIVIDA MOBILIARIA</MenuItem>
                        <MenuItem value={'3.2.90.25.00'}>ENCARGOS SOBRE OPERACOES DE CREDITO POR ANTECIPACAO DA RECEITA</MenuItem>
                        <MenuItem value={'3.2.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.2.90.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.2.91.22.00'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.95.21.00'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.95.21.01'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.95.21.01'}>JUROS SOBRE A DIVIDA POR CONTRATO  INTERNA</MenuItem>
                        <MenuItem value={'3.2.96.21.00'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.96.21.01'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.3.20.00.00'}>TRANSFERENCIAS A UNIAO</MenuItem>
                        <MenuItem value={'3.3.20.01.00'}>APOSENTADORIAS DO RPPS</MenuItem>
                        <MenuItem value={'3.3.20.03.00'}>PENSOES DO RPPS E DO MILITAR</MenuItem>
                        <MenuItem value={'3.3.22.14.00'}>DIARIAS  CIVIL</MenuItem>
                        <MenuItem value={'3.3.22.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.22.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.30.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.30.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.32.18.00'}>AUXILIO FINANCEIRO A ESTUDANTES</MenuItem>
                        <MenuItem value={'3.3.32.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.32.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.32.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.32.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'3.3.40.00.00'}>TRANSFERENCIAS A MUNICIPIOS</MenuItem>
                        <MenuItem value={'3.3.40.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.40.43.00'}>SUBVENCOES SOCIAIS</MenuItem>
                        <MenuItem value={'3.3.40.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.42.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.42.14.00'}>DIARIAS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.3.42.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.42.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.42.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.42.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.42.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.42.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.50.00.00'}>TRANSFERENCIAS A INSTITUICOES PRIVADAS SEM FINS LUCRATIVOS</MenuItem>
                        <MenuItem value={'3.3.50.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.50.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.50.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.60.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.60.45.00'}>SUBVENCOES ECONOMICAS</MenuItem>
                        <MenuItem value={'3.3.70.00.00'}>TRANSFERENCIAS A INSTITUICOES MULTIGOVERNAMENTAIS</MenuItem>
                        <MenuItem value={'3.3.70.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.70.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.71.00.00'}>TRANSFERENCIAS A CONSORCIOS PUBLICOS MEDIANTE CONTRATO DE RATEIO</MenuItem>
                        <MenuItem value={'3.3.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.3.72.14.00'}>DIARIAS  CIVIL</MenuItem>
                        <MenuItem value={'3.3.72.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.72.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.72.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.72.37.00'}>LOCACAO DE MAO-DE-OBRA</MenuItem>
                        <MenuItem value={'3.3.72.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.72.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.73.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.3.73.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.74.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.3.75.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.80.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.90.08.00'}>OUTROS BENEFICIOS ASSISTENCIAIS DO SERVIDOR OU DO MILITAR</MenuItem>
                        <MenuItem value={'3.3.90.14.03'}>DIARIAS DE PREFEITO</MenuItem>
                        <MenuItem value={'3.3.90.14.05'}>DIARIAS DE DEMAIS SERVIDORES</MenuItem>
                        <MenuItem value={'3.3.90.18.00'}>AUXILIO FINANCEIRO A ESTUDANTES</MenuItem>
                        <MenuItem value={'3.3.90.19.00'}>AUXILIO-FARDAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.29.00'}>DISTRIBUICAO DE RESULTADO DE EMPRESAS ESTATAIS DEPENDENTES</MenuItem>
                        <MenuItem value={'3.3.90.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.90.30.01'}>COMBUSTIVEIS E LUBRIFICANTES AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.90.30.04'}>GAS ENGARRAFADO</MenuItem>
                        <MenuItem value={'3.3.90.30.05'}>EXPLOSIVOS E MUNICOES</MenuItem>
                        <MenuItem value={'3.3.90.30.06'}>ALIMENTOS PARA ANIMAIS</MenuItem>
                        <MenuItem value={'3.3.90.30.09'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.30.10'}>MATERIAL ODONTOLOGICO</MenuItem>
                        <MenuItem value={'3.3.90.30.13'}>MATERIAL DE CACA E PESCA</MenuItem>
                        <MenuItem value={'3.3.90.30.14'}>MATERIAL EDUCATIVO E ESPORTIVO</MenuItem>
                        <MenuItem value={'3.3.90.30.17'}>MATERIAL DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.90.30.18'}>MATERIAIS E MEDICAMENTOS PARA USO VETERINARIO</MenuItem>
                        <MenuItem value={'3.3.90.30.19'}>MATERIAL DE ACONDICIONAMENTO E EMBALAGEM</MenuItem>
                        <MenuItem value={'3.3.90.30.20'}>MATERIAL DE CAMA</MenuItem>
                        <MenuItem value={'3.3.90.30.23'}>UNIFORMES</MenuItem>
                        <MenuItem value={'3.3.90.30.24'}>MATERIAL PARA MANUTENCAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.30.28'}>MATERIAL DE PROTECAO E SEGURANCA</MenuItem>
                        <MenuItem value={'3.3.90.30.32'}>MATERIAL PARA PRODUCAO INDUSTRIAL</MenuItem>
                        <MenuItem value={'3.3.90.30.35'}>MATERIAL HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.90.30.39'}>MATERIAL GRAFICO</MenuItem>
                        <MenuItem value={'3.3.90.30.46'}>BENS MOVEIS NAO ATIVAVEIS</MenuItem>
                        <MenuItem value={'3.3.90.30.47'}>BANDEIRAS</MenuItem>
                        <MenuItem value={'3.3.90.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.90.32.99'}>OUTROS MATERIAIS</MenuItem>
                        <MenuItem value={'3.3.90.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.90.33.01'}>LOCACAO DE VEICULOS PARA LOCOMOCAO DE PESSOAS</MenuItem>
                        <MenuItem value={'3.3.90.33.99'}>OUTRAS DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.90.34.00'}>OUTRAS DESPESAS DE PESSOAL DECORRENTES DE CONTRATOS DE TERCEIRIZACAO</MenuItem>
                        <MenuItem value={'3.3.90.35.01'}>CONSULTORIA CONTABIL</MenuItem>
                        <MenuItem value={'3.3.90.35.02'}>CONSULTORIA E ASSESSORIA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.90.35.04'}>CONSULTORIA E ASSESSORIA PARA CAPTACAO DE RECURSOS DE ICMS</MenuItem>
                        <MenuItem value={'3.3.90.35.05'}>CONSULTORIA E ASSESSORIA PARA  APURACAO DO VALOR ADICIONADO FISCAL (VAF)</MenuItem>
                        <MenuItem value={'3.3.90.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.90.36.02'}>DIARIAS A COLABORADORES EVENTUAIS NO PAIS</MenuItem>
                        <MenuItem value={'3.3.90.36.03'}>DIARIAS A COLABORADORES EVENTUAIS NO EXTERIOR</MenuItem>
                        <MenuItem value={'3.3.90.36.04'}>COMISSOES E CORRETAGENS</MenuItem>
                        <MenuItem value={'3.3.90.36.05'}>DIREITOS AUTORAIS</MenuItem>
                        <MenuItem value={'3.3.90.36.06'}>SERVICOS TECNICOS</MenuItem>
                        <MenuItem value={'3.3.90.36.09'}>SALARIOS DE INTERNOS EM PENITENCIARIAS</MenuItem>
                        <MenuItem value={'3.3.90.36.10'}>PRO-LABORE A CONSULTORES EVENTUAIS</MenuItem>
                        <MenuItem value={'3.3.90.36.11'}>CAPATAZIA</MenuItem>
                        <MenuItem value={'3.3.90.36.12'}>CONFERENCIAS E EXPOSICOES</MenuItem>
                        <MenuItem value={'3.3.90.36.15'}>LOCACAO DE BENS MOVEIS E INTANGIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.17'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.90.36.19'}>MANUTENCAO E CONSERVACAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.21'}>SERVICOS DE CARATER SECRETO OU RESERVADO</MenuItem>
                        <MenuItem value={'3.3.90.36.26'}>SERVICOS MEDICOS E ODONTOLOGICOS</MenuItem>
                        <MenuItem value={'3.3.90.36.27'}>SERVICOS DE REABILITACAO PROFISSIONAL</MenuItem>
                        <MenuItem value={'3.3.90.36.28'}>SERVICOS DE ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={'3.3.90.36.29'}>SERVICOS DE PERICIAS MEDICAS POR BENEFICIOS</MenuItem>
                        <MenuItem value={'3.3.90.36.31'}>SERVICO DE CONSERVACAO E REBENEFICIAMENTO DE MERCADORIAS</MenuItem>
                        <MenuItem value={'3.3.90.36.32'}>CONFECCAO DE MATERIAL DE ACONDICIONAMENTO E EMBALAGEM</MenuItem>
                        <MenuItem value={'3.3.90.36.33'}>CONFECCAO DE UNIFORMES</MenuItem>
                        <MenuItem value={'3.3.90.36.34'}>FRETES E TRANSPORTES DE ENCOMENDAS</MenuItem>
                        <MenuItem value={'3.3.90.36.35'}>ENCARGOS FINANCEIROS DEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.36'}>MULTAS DEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.37'}>JUROS</MenuItem>
                        <MenuItem value={'3.3.90.36.38'}>ENCARGOS FINANCEIROS INDEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.40'}>JETONS A CONSELHEIROS</MenuItem>
                        <MenuItem value={'3.3.90.36.41'}>DIARIAS A CONSELHEIROS</MenuItem>
                        <MenuItem value={'3.3.90.36.45'}>LOCACAO DE VEICULOS PARA TRANSPORTE DE CARGAS</MenuItem>
                        <MenuItem value={'3.3.90.36.99'}>OUTROS SERVICOS DE PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.90.37.00'}>LOCACAO DE MAO-DE-OBRA</MenuItem>
                        <MenuItem value={'3.3.90.38.00'}>ARRENDAMENTO MERCANTIL</MenuItem>
                        <MenuItem value={'3.3.90.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.90.39.01'}>ASSINATURAS DE PERIODICOS E ANUIDADES</MenuItem>
                        <MenuItem value={'3.3.90.39.02'}>CONDOMINIOS</MenuItem>
                        <MenuItem value={'3.3.90.39.03'}>COMISSOES E CORRETAGENS</MenuItem>
                        <MenuItem value={'3.3.90.39.05'}>SERVICOS TECNICOS PROFISSIONAIS</MenuItem>
                        <MenuItem value={'3.3.90.39.06'}>CAPATAZIA</MenuItem>
                        <MenuItem value={'3.3.90.39.07'}>DESCONTOS FINANCEIROS CONCEDIDOS</MenuItem>
                        <MenuItem value={'3.3.90.39.08'}>MANUTENCAO DE SOFTWARE</MenuItem>
                        <MenuItem value={'3.3.90.39.10'}>LOCACAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.11'}>LOCACAO DE SOFTWARES</MenuItem>
                        <MenuItem value={'3.3.90.39.13'}>LOCACAO DE BENS MOVEIS TANGIVEIS OU INTANGIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.15'}>MANUTENCAO E CONSERVACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.39.16'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.90.39.19'}>EXPOSICOES</MenuItem>
                        <MenuItem value={'3.3.90.39.23'}>JUROS</MenuItem>
                        <MenuItem value={'3.3.90.39.24'}>ENCARGOS FINANCEIROS DEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.26'}>PROGRAMA DE ALIMENTACAO DO TRABALHADOR</MenuItem>
                        <MenuItem value={'3.3.90.39.27'}>FORNECIMENTO DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.90.39.30'}>SERVICOS DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={'3.3.90.39.32'}>SERVICOS DOMESTICOS</MenuItem>
                        <MenuItem value={'3.3.90.39.33'}>SERVICOS DE COMUNICACAO EM GERAL</MenuItem>
                        <MenuItem value={'3.3.90.39.37'}>SERVICOS DE ANALISES E PESQUISAS CIENTIFICAS</MenuItem>
                        <MenuItem value={'3.3.90.39.39'}>SERVICOS DE ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={'3.3.90.39.44'}>SERVICOS DE AUDIO</MenuItem>
                        <MenuItem value={'3.3.90.39.45'}>SERVICOS DE MANOBRA E PATRULHAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.39.47'}>SERVICOS DE PRODUCAO INDUSTRIAL</MenuItem>
                        <MenuItem value={'3.3.90.39.48'}>SERVICOS GRAFICOS</MenuItem>
                        <MenuItem value={'3.3.90.39.49'}>SERVICOS DE APOIO AO ENSINO</MenuItem>
                        <MenuItem value={'3.3.90.39.50'}>SERVICOS JUDICIARIOS</MenuItem>
                        <MenuItem value={'3.3.90.39.51'}>SERVICOS FUNERARIOS</MenuItem>
                        <MenuItem value={'3.3.90.39.52'}>SERVICO DE CONSERVACAO E REBENEFICIAMENTO DE MERCADORIAS</MenuItem>
                        <MenuItem value={'3.3.90.39.53'}>SEGUROS EM GERAL</MenuItem>
                        <MenuItem value={'3.3.90.39.54'}>CONFECCAO DE UNIFORMES</MenuItem>
                        <MenuItem value={'3.3.90.39.55'}>CONFECCAO DE MATERIAL DE ACONDICIONAMENTO E EMBALAGEM</MenuItem>
                        <MenuItem value={'3.3.90.39.56'}>VALE-TRANSPORTE</MenuItem>
                        <MenuItem value={'3.3.90.39.57'}>TRANSPORTE ESCOLAR</MenuItem>
                        <MenuItem value={'3.3.90.39.59'}>CLASSIFICACAO DE PRODUTOS</MenuItem>
                        <MenuItem value={'3.3.90.39.61'}>LIMPEZA E CONSERVACAO</MenuItem>
                        <MenuItem value={'3.3.90.39.63'}>HOSPEDAGENS</MenuItem>
                        <MenuItem value={'3.3.90.39.64'}>SERVICOS BANCARIOS</MenuItem>
                        <MenuItem value={'3.3.90.39.65'}>SERVICOS DE COPIAS E REPRODUCAO DE DOCUMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.39.68'}>SERVICOS DE PUBLICIDADE E PROPAGANDA</MenuItem>
                        <MenuItem value={'3.3.90.39.69'}>MANUTENCAO DE REPARTICOES</MenuItem>
                        <MenuItem value={'3.3.90.39.70'}>AQUISICAO DE SOFTWARES DE APLICACAO</MenuItem>
                        <MenuItem value={'3.3.90.39.71'}>MANUTENCAO CONSERVACAO DE EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.90.39.72'}>DESPESAS DE TELEPROCESSAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.39.73'}>LOCACAO DE VEICULOS PARA TRANSPORTE DE CARGAS</MenuItem>
                        <MenuItem value={'3.3.90.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.90.40.04'}>MANUTENCAO DE SOFTWARE</MenuItem>
                        <MenuItem value={'3.3.90.40.05'}>HOSPEDAGENS DE SISTEMAS</MenuItem>
                        <MenuItem value={'3.3.90.40.06'}>COMUNICACAO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.90.40.07'}>SUPORTE A USUARIOS DE TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.08'}>SUPORTE DE INFRAESTRUTURA DE TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.09'}>SERVICOS TECNICOS PROFISSIONAIS DE TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.10'}>MANUTENCAO E CONSERVACAO DE EQUIPAMENTOS DE TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.11'}>TREINAMENTO E CAPACITACAO EM TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.99'}>OUTROS SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.90.48.00'}>OUTROS AUXILIOS FINANCEIROS A PESSOAS FISICAS</MenuItem>
                        <MenuItem value={'3.3.90.49.00'}>AUXILIO-TRANSPORTE</MenuItem>
                        <MenuItem value={'3.3.90.59.00'}>PENSOES ESPECIAIS</MenuItem>
                        <MenuItem value={'3.3.90.62.00'}>AQUISICAO DE PRODUTOS PARA REVENDA</MenuItem>
                        <MenuItem value={'3.3.90.67.00'}>DEPOSITOS COMPULSORIOS</MenuItem>
                        <MenuItem value={'3.3.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.90.91.04'}>PRECATORIOS</MenuItem>
                        <MenuItem value={'3.3.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.90.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.90.95.00'}>INDENIZACAO PELA EXECUCAO DE TRABALHO DE CAMPO</MenuItem>
                        <MenuItem value={'3.3.90.96.00'}>RESSARCIMENTO DE DESPESAS DE PESSOAL REQUISITADO</MenuItem>
                        <MenuItem value={'3.3.90.98.00'}>COMPENSACOES AO RGPS</MenuItem>
                        <MenuItem value={'3.3.90.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.91.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.91.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.91.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.91.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.91.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.91.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.91.97.00'}>APORTE PARA COBERTURA DO DEFICIT ATUARIAL DO RPPS</MenuItem>
                        <MenuItem value={'3.3.92.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.92.30.01'}>COMBUSTIVEIS AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.92.30.37'}>MATERIAL PARA MANUTENCAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.92.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.92.32.99'}>OUTROS MATERIAIS</MenuItem>
                        <MenuItem value={'3.3.92.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.92.39.16'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.92.40.02'}>LOCACAO DE SOFTWARES</MenuItem>
                        <MenuItem value={'3.3.93.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.93.30.01'}>COMBUSTIVEIS AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.93.30.07'}>GENEROS DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.93.30.09'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.93.30.14'}>MATERIAL EDUCATIVO E ESPORTIVO</MenuItem>
                        <MenuItem value={'3.3.93.30.23'}>UNIFORMES</MenuItem>
                        <MenuItem value={'3.3.93.30.26'}>MATERIAL ELETRICO E ELETRONICO</MenuItem>
                        <MenuItem value={'3.3.93.30.37'}>MATERIAL PARA MANUTENCAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.93.30.99'}>OUTROS MATERIAIS DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.93.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.93.32.01'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.93.32.99'}>OUTROS MATERIAIS</MenuItem>
                        <MenuItem value={'3.3.93.34.00'}>OUTRAS DESPESAS DE PESSOAL DECORRENTES DE CONTRATOS DE TERCEIRIZACAO</MenuItem>
                        <MenuItem value={'3.3.93.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.93.39.03'}>COMISSOES E CORRETAGENS</MenuItem>
                        <MenuItem value={'3.3.93.39.05'}>SERVICOS TECNICOS PROFISSIONAIS</MenuItem>
                        <MenuItem value={'3.3.93.39.10'}>LOCACAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.93.39.11'}>LOCACAO DE SOFTWARES</MenuItem>
                        <MenuItem value={'3.3.93.39.13'}>LOCACAO DE BENS MOVEIS TANGIVEIS OU INTANGIVEIS</MenuItem>
                        <MenuItem value={'3.3.93.39.14'}>MANUTENCAO E CONSERVACAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.93.39.17'}>MANUTENCAO E CONSERVACAO DE BENS MOVEIS DE OUTRAS NATUREZAS</MenuItem>
                        <MenuItem value={'3.3.93.39.18'}>MANUTENCAO E CONSERVACAO DE ESTRADAS OU OUTRAS VIAS</MenuItem>
                        <MenuItem value={'3.3.93.39.21'}>MULTAS DEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.93.39.22'}>MULTAS INDEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.93.39.33'}>SERVICOS DE COMUNICACAO EM GERAL</MenuItem>
                        <MenuItem value={'3.3.93.39.34'}>SERVICO DE SELECAO E TREINAMENTO</MenuItem>
                        <MenuItem value={'3.3.93.39.37'}>SERVICOS DE ANALISES E PESQUISAS CIENTIFICAS</MenuItem>
                        <MenuItem value={'3.3.93.39.42'}>SERVICOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.93.39.43'}>SERVICOS DE TELECOMUNICACOES</MenuItem>
                        <MenuItem value={'3.3.93.39.46'}>SERVICOS DE SOCORRO E SALVAMENTO</MenuItem>
                        <MenuItem value={'3.3.93.39.48'}>SERVICOS GRAFICOS</MenuItem>
                        <MenuItem value={'3.3.93.39.50'}>SERVICOS JUDICIARIOS</MenuItem>
                        <MenuItem value={'3.3.93.39.56'}>VALE-TRANSPORTE</MenuItem>
                        <MenuItem value={'3.3.93.39.57'}>TRANSPORTE ESCOLAR</MenuItem>
                        <MenuItem value={'3.3.93.39.58'}>FRETES E TRANSPORTES DE ENCOMENDAS</MenuItem>
                        <MenuItem value={'3.3.93.39.59'}>CLASSIFICACAO DE PRODUTOS</MenuItem>
                        <MenuItem value={'3.3.93.39.60'}>VIGILANCIA OSTENSIVA</MenuItem>
                        <MenuItem value={'3.3.93.39.68'}>SERVICOS DE PUBLICIDADE E PROPAGANDA</MenuItem>
                        <MenuItem value={'3.3.93.39.70'}>AQUISICAO DE SOFTWARES DE APLICACAO</MenuItem>
                        <MenuItem value={'3.3.93.39.71'}>MANUTENCAO CONSERVACAO DE EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.93.39.99'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.93.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.93.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.94.30.07'}>GENEROS DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.94.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.94.39.05'}>SERVICOS TECNICOS PROFISSIONAIS</MenuItem>
                        <MenuItem value={'3.3.94.39.99'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.94.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.95.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.95.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.95.30.01'}>COMBUSTIVEIS E LUBRIFICANTES AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.95.30.23'}>UNIFORMES</MenuItem>
                        <MenuItem value={'3.3.95.30.24'}>MATERIAL PARA MANUTENCAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.95.30.26'}>MATERIAL ELETRICO E ELETRONICO</MenuItem>
                        <MenuItem value={'3.3.95.30.30'}>MATERIAL PARA COMUNICACOES</MenuItem>
                        <MenuItem value={'3.3.95.30.34'}>MATERIAL LABORATORIAL</MenuItem>
                        <MenuItem value={'3.3.95.30.39'}>MATERIAL GRAFICO</MenuItem>
                        <MenuItem value={'3.3.95.30.42'}>MATERIAL DE SINALIZACAO VISUAL E AFINS</MenuItem>
                        <MenuItem value={'3.3.95.30.99'}>OUTROS MATERIAIS DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.95.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.95.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.95.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.95.36.14'}>LOCACAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.95.36.17'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.95.36.20'}>FORNECIMENTO DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.95.36.22'}>SERVICOS DE LIMPEZA E CONSERVACAO</MenuItem>
                        <MenuItem value={'3.3.95.36.34'}>FRETES E TRANSPORTES DE ENCOMENDAS</MenuItem>
                        <MenuItem value={'3.3.95.39.05'}>SERVICOS TECNICOS PROFISSIONAIS</MenuItem>
                        <MenuItem value={'3.3.95.39.15'}>MANUTENCAO E CONSERVACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.95.39.17'}>MANUTENCAO E CONSERVACAO DE BENS MOVEIS DE OUTRAS NATUREZAS</MenuItem>
                        <MenuItem value={'3.3.95.39.19'}>EXPOSICOES</MenuItem>
                        <MenuItem value={'3.3.95.39.27'}>FORNECIMENTO DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.95.39.29'}>SERVICOS DE ENERGIA ELETRICA</MenuItem>
                        <MenuItem value={'3.3.95.39.30'}>SERVICOS DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={'3.3.95.39.33'}>SERVICOS DE COMUNICACAO EM GERAL</MenuItem>
                        <MenuItem value={'3.3.95.39.39'}>SERVICOS DE ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={'3.3.95.39.43'}>SERVICOS DE TELECOMUNICACOES</MenuItem>
                        <MenuItem value={'3.3.95.48.00'}>OUTROS AUXILIOS FINANCEIROS A PESSOAS FISICAS</MenuItem>
                        <MenuItem value={'3.3.95.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.96.08.00'}>OUTROS BENEFICIOS ASSISTENCIAIS DO SERVIDOR OU DO MILITAR</MenuItem>
                        <MenuItem value={'3.3.96.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.96.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.96.36.26'}>SERVICOS MEDICOS E ODONTOLOGICOS</MenuItem>
                        <MenuItem value={'3.3.96.36.99'}>OUTROS SERVICOS DE PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.96.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.96.49.00'}>AUXILIO-TRANSPORTE</MenuItem>
                        <MenuItem value={'3.3.96.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.96.91.99'}>OUTRAS SENTENCAS JUDICIAIS E DECISOES JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.96.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.99.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.20.00.00'}>TRANSFERENCIAS A UNIAO</MenuItem>
                        <MenuItem value={'4.4.20.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.20.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.20.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.30.00.00'}>TRANSFERENCIAS A ESTADOS E AO DISTRITO FEDERAL</MenuItem>
                        <MenuItem value={'4.4.30.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.30.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.40.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.40.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.42.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.42.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.70.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.71.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.72.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'4.4.72.14.00'}>DIARIAS  CIVIL</MenuItem>
                        <MenuItem value={'4.4.72.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'4.4.72.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.72.37.00'}>LOCACAO DE MAO-DE-OBRA</MenuItem>
                        <MenuItem value={'4.4.72.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.72.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.72.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.72.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.80.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.90.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'4.4.90.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'4.4.90.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.90.37.00'}>LOCACAO DE MAO-DE-OBRA</MenuItem>
                        <MenuItem value={'4.4.90.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'4.4.90.51.01'}>OBRAS E INSTALACOES DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.90.51.02'}>OBRAS E INSTALACOES DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.90.51.03'}>OBRAS E INSTALACOES DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.90.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.90.52.02'}>APARELHOS DE MEDICAO E ORIENTACAO</MenuItem>
                        <MenuItem value={'4.4.90.52.03'}>APARELHOS E EQUIPAMENTOS DE COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.90.52.04'}>APARELHOS</MenuItem>
                        <MenuItem value={'4.4.90.52.06'}>APARELHOS E UTENSILIOS DOMESTICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.11'}>EQUIPAMENTOS DE MANOBRA E PATRULHAMENTO</MenuItem>
                        <MenuItem value={'4.4.90.52.12'}>EQUIPAMENTO DE PROTECAO</MenuItem>
                        <MenuItem value={'4.4.90.52.13'}>INSTRUMENTOS MUSICAIS E ARTISTICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.15'}>MAQUINAS E EQUIPAMENTOS ENERGETICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.16'}>MAQUINAS E EQUIPAMENTOS GRAFICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.17'}>EQUIPAMENTOS PARA AUDIO</MenuItem>
                        <MenuItem value={'4.4.90.52.20'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.90.52.21'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.90.52.22'}>EQUIPAMENTOS E UTENSILIOS HIDRAULICOS E ELETRICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.26'}>SEMOVENTES E EQUIPAMENTOS DE MONTARIA</MenuItem>
                        <MenuItem value={'4.4.90.52.28'}>VEICULOS FERROVIARIOS</MenuItem>
                        <MenuItem value={'4.4.90.52.32'}>EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'4.4.90.52.33'}>EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'4.4.90.52.35'}>EQUIPAMENTOS DE MERGULHO E SALVAMENTO</MenuItem>
                        <MenuItem value={'4.4.90.52.36'}>EQUIPAMENTOS E SISTEMA DE PROTECAO E VIGILANCIA AMBIENTAL</MenuItem>
                        <MenuItem value={'4.4.90.61.01'}>AQUISICAO DE IMOVEIS DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.90.61.02'}>AQUISICAO DE IMOVEIS DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.90.65.00'}>CONSTITUICAO OU AUMENTO DE CAPITAL DE EMPRESAS</MenuItem>
                        <MenuItem value={'4.4.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'4.4.90.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.91.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.91.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.91.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.4.91.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.92.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.92.51.01'}>OBRAS E INSTALACOES DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.92.51.02'}>OBRAS E INSTALACOES DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.92.52.03'}>APARELHOS E EQUIPAMENTOS DE COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.92.52.05'}>APARELHOS E EQUIPAMENTOS PARA ESPORTES E DIVERSOES</MenuItem>
                        <MenuItem value={'4.4.92.52.18'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.92.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.92.52.23'}>MAQUINAS E EQUIPAMENTOS AGRICOLAS E RODOVIARIOS</MenuItem>
                        <MenuItem value={'4.4.92.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.92.52.30'}>VEICULOS DE TRACAO MECANICA</MenuItem>
                        <MenuItem value={'4.4.92.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.93.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.93.51.01'}>OBRAS E INSTALACOES DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.93.51.02'}>OBRAS E INSTALACOES DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.93.52.06'}>APARELHOS E UTENSILIOS DOMESTICOS</MenuItem>
                        <MenuItem value={'4.4.93.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.93.52.27'}>VEICULOS DIVERSOS</MenuItem>
                        <MenuItem value={'4.4.94.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.94.52.01'}>AERONAVES</MenuItem>
                        <MenuItem value={'4.4.94.52.17'}>EQUIPAMENTOS PARA AUDIO</MenuItem>
                        <MenuItem value={'4.4.94.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.94.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.94.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.95.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.95.51.02'}>OBRAS E INSTALACOES DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.95.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.95.52.06'}>APARELHOS E UTENSILIOS DOMESTICOS</MenuItem>
                        <MenuItem value={'4.4.95.52.15'}>MAQUINAS E EQUIPAMENTOS ENERGETICOS</MenuItem>
                        <MenuItem value={'4.4.95.52.20'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.95.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.95.52.27'}>VEICULOS DIVERSOS</MenuItem>
                        <MenuItem value={'4.4.95.52.34'}>ACESSORIOS PARA AUTOMOVEIS</MenuItem>
                        <MenuItem value={'4.4.95.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.4.95.61.02'}>AQUISICAO DE IMOVEIS DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.4.95.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.4.96.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.96.52.06'}>APARELHOS E UTENSILIOS DOMESTICOS</MenuItem>
                        <MenuItem value={'4.4.96.52.12'}>EQUIPAMENTO DE PROTECAO</MenuItem>
                        <MenuItem value={'4.4.96.52.17'}>EQUIPAMENTOS PARA AUDIO</MenuItem>
                        <MenuItem value={'4.4.96.52.30'}>VEICULOS DE TRACAO MECANICA</MenuItem>
                        <MenuItem value={'4.4.96.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.4.96.61.01'}>AQUISICAO DE IMOVEIS DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.5.30.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.5.50.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.5.67.82.00'}>APORTE DE RECURSOS PELO PARCEIRO PUBLICO EM FAVOR DO PARCEIRO PRIVADO DECORRENTE DE CONTRATO DE PARCERIA PUBLICO-PRIVADA (PPP)</MenuItem>
                        <MenuItem value={'4.5.67.83.00'}>DESPESAS DECORRENTES DE CONTRATO DE PARCERIA PUBLICO-PRIVADA</MenuItem>
                        <MenuItem value={'4.5.72.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'4.5.72.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'4.5.72.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.5.72.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.5.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'4.5.90.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.5.90.61.01'}>AQUISICAO DE IMOVEIS DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.5.90.61.03'}>AQUISICAO DE IMOVEIS DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.5.90.64.00'}>AQUISICAO DE TITULOS REPRESENTATIVOS DE CAPITAL JA INTEGRALIZADO</MenuItem>
                        <MenuItem value={'4.5.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.5.91.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'4.5.91.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.5.96.61.02'}>AQUISICAO DE IMOVEIS DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.5.96.61.03'}>AQUISICAO DE IMOVEIS DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.6.90.71.00'}>PRINCIPAL DA DIVIDA CONTRATUAL RESGATADO</MenuItem>
                        <MenuItem value={'4.6.90.72.00'}>PRINCIPAL DA DIVIDA MOBILIARIA RESGATADO</MenuItem>
                        <MenuItem value={'4.6.90.73.01'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL</MenuItem>
                        <MenuItem value={'4.6.90.77.00'}>PRINCIPAL CORRIGIDO DA DIVIDA CONTRATUAL REFINANCIADO</MenuItem>
                        <MenuItem value={'4.6.90.77.01'}>PRINCIPAL CORRIGIDO DA DIVIDA CONTRATUAL</MenuItem>
                        <MenuItem value={'4.6.90.77.02'}>PRINCIPAL CORRIGIDO DA DIVIDA CONTRATUAL</MenuItem>
                        <MenuItem value={'4.6.91.71.00'}>PRINCIPAL DA DIVIDA CONTRATUAL RESGATADO</MenuItem>
                        <MenuItem value={'4.6.91.77.00'}>PRINCIPAL CORRIGIDO DA DIVIDA CONTRATUAL REFINANCIADO</MenuItem>
                        <MenuItem value={'4.6.91.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'4.6.95.71.00'}>PRINCIPAL DA DIVIDA CONTRATUAL RESGATADO</MenuItem>
                        <MenuItem value={'4.6.95.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.6.96.71.00'}>PRINCIPAL DA DIVIDA CONTRATUAL RESGATADO</MenuItem>
                        <MenuItem value={'4.6.96.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.1.71.00.00'}>TRANSFERENCIAS A CONSORCIOS PUBLICOS MEDIANTE CONTRATO DE RATEIO</MenuItem>
                        <MenuItem value={'3.1.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.1.73.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.1.74.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.1.90.01.02'}>APOSENTADORIAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.90.03.00'}>PENSOES DO RPPS E DO MILITAR</MenuItem>
                        <MenuItem value={'3.1.90.03.02'}>PENSOES CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.90.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.1.90.04.01'}>PESSOAL DO FUNDEB (RECURSOS: MINIMO DE 60%)</MenuItem>
                        <MenuItem value={'3.1.90.04.99'}>OUTROS</MenuItem>
                        <MenuItem value={'3.1.90.05.01'}>OUTROS BENEFICIOS PREVIDENCIARIOS DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.90.05.03'}>OUTROS BENEFICIOS PREVIDENCIARIOS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.90.07.00'}>CONTRIBUICOES A ENTIDADES FECHADAS DE PREVIDENCIA</MenuItem>
                        <MenuItem value={'3.1.90.11.03'}>PESSOAL DE CARGO EFETIVO (VINCULADO AO RPPS)</MenuItem>
                        <MenuItem value={'3.1.90.11.07'}>SUBSIDIO DE PREFEITO</MenuItem>
                        <MenuItem value={'3.1.90.11.11'}>EMPREGADO PUBLICO</MenuItem>
                        <MenuItem value={'3.1.90.13.00'}>OBRIGACOES PATRONAIS</MenuItem>
                        <MenuItem value={'3.1.90.13.01'}>FGTS (EXCETO O INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.90.13.03'}>CONTRIBUICAO PATRONAL PARA O INSS (EXCETO A INCIDENTE SOBRE O FUNDEB)</MenuItem>
                        <MenuItem value={'3.1.90.13.04'}>OBRIGACOES PATRONAIS REFERENTES AO FUNDEB (MINIMO DE 60%)</MenuItem>
                        <MenuItem value={'3.1.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.1.90.91.01'}>SENTENCAS JUDICIAIS DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.90.91.03'}>SENTENCAS JUDICIAIS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.90.92.01'}>DESPESAS DE EXERCICIOS ANTERIORES DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.90.92.02'}>DESPESAS DE EXERCICIOS ANTERIORES DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.90.94.00'}>INDENIZACOES E RESTITUICOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.90.94.03'}>RESTITUICOES E OUTRAS INDENIZACOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.91.13.00'}>OBRIGACOES PATRONAIS</MenuItem>
                        <MenuItem value={'3.1.91.91.02'}>SENTENCAS JUDICIAIS DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS DO RPPS</MenuItem>
                        <MenuItem value={'3.1.91.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.1.91.92.01'}>DESPESAS DE EXERCICIOS ANTERIORES DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.91.92.03'}>DESPESAS DE EXERCICIOS ANTERIORES DE INATIVOS E PENSIONISTAS CUSTEADAS COM RECURSOS ORDINARIOS DO TESOURO</MenuItem>
                        <MenuItem value={'3.1.91.94.03'}>RESTITUICOES E OUTRAS INDENIZACOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.95.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.1.95.11.00'}>VENCIMENTOS E VANTAGENS FIXAS</MenuItem>
                        <MenuItem value={'3.1.95.11.00'}>VENCIMENTOS E VANTAGENS FIXAS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.1.95.11.04'}>PESSOAL DE CARGO EFETIVO (VINCULADO AO INSS)</MenuItem>
                        <MenuItem value={'3.1.95.11.05'}>PESSOAL DE CARGO COMISSIONADO</MenuItem>
                        <MenuItem value={'3.1.95.16.00'}>OUTRAS DESPESAS VARIAVEIS</MenuItem>
                        <MenuItem value={'3.1.95.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.1.95.92.01'}>DESPESAS DE EXERCICIOS ANTERIORES DE PESSOAL ATIVO</MenuItem>
                        <MenuItem value={'3.1.95.94.00'}>INDENIZACOES E RESTITUICOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.95.94.03'}>RESTITUICOES E OUTRAS INDENIZACOES TRABALHISTAS</MenuItem>
                        <MenuItem value={'3.1.96.11.00'}>VENCIMENTOS E VANTAGENS FIXAS</MenuItem>
                        <MenuItem value={'3.1.96.11.00'}>VENCIMENTOS E VANTAGENS FIXAS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.1.96.16.00'}>OUTRAS DESPESAS VARIAVEIS</MenuItem>
                        <MenuItem value={'3.1.96.16.00'}>OUTRAS DESPESAS VARIAVEIS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.1.96.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.2.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.2.73.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.2.74.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'3.2.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'3.2.90.21.01'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.21.02'}>JUROS SOBRE A DIVIDA POR CONTRATO  EXTERNA</MenuItem>
                        <MenuItem value={'3.2.90.22.01'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.90.22.02'}>OUTROS ENCARGOS SOBRE A DIVIDA POR CONTRATO  EXTERNA</MenuItem>
                        <MenuItem value={'3.2.90.23.00'}>JUROS</MenuItem>
                        <MenuItem value={'3.2.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.2.91.21.00'}>JUROS SOBRE A DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'3.2.91.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.2.91.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.20.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.20.81.00'}>DISTRIBUICAO CONSTITUCIONAL OU LEGAL DE RECEITAS</MenuItem>
                        <MenuItem value={'3.3.20.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.20.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.22.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.22.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.22.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.22.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.22.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.22.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.30.00.00'}>TRANSFERENCIAS A ESTADOS E AO DISTRITO FEDERAL</MenuItem>
                        <MenuItem value={'3.3.30.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.31.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.31.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.32.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.32.14.00'}>DIARIAS  CIVIL</MenuItem>
                        <MenuItem value={'3.3.32.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.32.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.32.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.32.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.32.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.40.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.42.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.42.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.42.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.50.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.50.14.00'}>DIARIAS  CIVIL</MenuItem>
                        <MenuItem value={'3.3.50.18.00'}>AUXILIO FINANCEIRO A ESTUDANTES</MenuItem>
                        <MenuItem value={'3.3.50.20.00'}>AUXILIO FINANCEIRO A PESQUISADORES</MenuItem>
                        <MenuItem value={'3.3.50.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.50.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.50.34.00'}>OUTRAS DESPESAS DE PESSOAL DECORRENTES DE CONTRATOS DE TERCEIRIZACAO</MenuItem>
                        <MenuItem value={'3.3.50.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.50.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.50.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.50.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.50.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'3.3.50.43.00'}>SUBVENCOES SOCIAIS</MenuItem>
                        <MenuItem value={'3.3.50.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'3.3.50.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.60.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.60.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.60.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.67.83.00'}>DESPESAS DECORRENTES DE CONTRATO DE PARCERIA PUBLICO-PRIVADA</MenuItem>
                        <MenuItem value={'3.3.70.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.71.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.72.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.72.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.72.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.72.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.72.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.72.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.72.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.72.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.76.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.80.00.00'}>TRANSFERENCIAS AO EXTERIOR</MenuItem>
                        <MenuItem value={'3.3.80.43.00'}>SUBVENCOES SOCIAIS</MenuItem>
                        <MenuItem value={'3.3.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'3.3.90.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.3.90.06.00'}>BENEFICIO MENSAL AO DEFICIENTE E AO IDOSO</MenuItem>
                        <MenuItem value={'3.3.90.14.00'}>DIARIAS</MenuItem>
                        <MenuItem value={'3.3.90.14.00'}>DIARIAS  PESSOAL CIVIL</MenuItem>
                        <MenuItem value={'3.3.90.14.01'}>DIARIAS DE VEREADORES</MenuItem>
                        <MenuItem value={'3.3.90.14.02'}>DIARIAS DE PRESIDENTE DA CAMARA</MenuItem>
                        <MenuItem value={'3.3.90.14.04'}>DIARIAS DE SECRETARIOS</MenuItem>
                        <MenuItem value={'3.3.90.20.00'}>AUXILIO FINANCEIRO A PESQUISADORES</MenuItem>
                        <MenuItem value={'3.3.90.27.00'}>ENCARGOS PARA A HONRA DE AVAIS</MenuItem>
                        <MenuItem value={'3.3.90.30.01'}>COMBUSTIVEIS AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.90.30.02'}>COMBUSTIVEIS E LUBRIFICANTES DE AVIACAO</MenuItem>
                        <MenuItem value={'3.3.90.30.02'}>LUBRIFICANTES AUTOMOTIVOS</MenuItem>
                        <MenuItem value={'3.3.90.30.03'}>COMBUSTIVEIS E LUBRIFICANTES PARA OUTRAS FINALIDADES</MenuItem>
                        <MenuItem value={'3.3.90.30.07'}>GENEROS DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.90.30.08'}>ANIMAIS PARA PESQUISA E ABATE</MenuItem>
                        <MenuItem value={'3.3.90.30.11'}>MATERIAL QUIMICO</MenuItem>
                        <MenuItem value={'3.3.90.30.12'}>MATERIAL DE COUDELARIA OU DE USO ZOOTECNICO</MenuItem>
                        <MenuItem value={'3.3.90.30.15'}>MATERIAL PARA FESTIVIDADES E HOMENAGENS</MenuItem>
                        <MenuItem value={'3.3.90.30.16'}>MATERIAL DE EXPEDIENTE</MenuItem>
                        <MenuItem value={'3.3.90.30.21'}>MATERIAL DE COPA E COZINHA</MenuItem>
                        <MenuItem value={'3.3.90.30.22'}>MATERIAL DE LIMPEZA E PRODUCAO DE HIGIENIZACAO</MenuItem>
                        <MenuItem value={'3.3.90.30.25'}>MATERIAL PARA MANUTENCAO DE BENS MOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.30.26'}>MATERIAL ELETRICO E ELETRONICO</MenuItem>
                        <MenuItem value={'3.3.90.30.27'}>MATERIAL DE MANOBRA E PATRULHAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.30.29'}>MATERIAL PARA AUDIO</MenuItem>
                        <MenuItem value={'3.3.90.30.30'}>MATERIAL PARA COMUNICACOES</MenuItem>
                        <MenuItem value={'3.3.90.30.31'}>SEMENTES</MenuItem>
                        <MenuItem value={'3.3.90.30.33'}>SOBRESSALENTES</MenuItem>
                        <MenuItem value={'3.3.90.30.34'}>MATERIAL LABORATORIAL</MenuItem>
                        <MenuItem value={'3.3.90.30.36'}>SUPRIMENTO DE PROTECAO AO VOO</MenuItem>
                        <MenuItem value={'3.3.90.30.37'}>MATERIAL PARA MANUTENCAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.90.30.38'}>MATERIAL BIOLOGICO</MenuItem>
                        <MenuItem value={'3.3.90.30.40'}>FERRAMENTAS</MenuItem>
                        <MenuItem value={'3.3.90.30.41'}>MATERIAL PARA REABILITACAO PROFISSIONAL</MenuItem>
                        <MenuItem value={'3.3.90.30.42'}>MATERIAL DE SINALIZACAO VISUAL E AFINS</MenuItem>
                        <MenuItem value={'3.3.90.30.43'}>MATERIAL TECNICO PARA SELECAO E TREINAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.30.44'}>MATERIAL BIBLIOGRAFICO NAO IMOBILIZAVEL</MenuItem>
                        <MenuItem value={'3.3.90.30.45'}>AQUISICAO DE SOFTWARES DE BASE</MenuItem>
                        <MenuItem value={'3.3.90.30.99'}>OUTROS MATERIAIS DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.90.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.90.32.01'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.32.02'}>INSUMOS E SERVICOS PARA SAUDE</MenuItem>
                        <MenuItem value={'3.3.90.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.90.35.01'}>CONSULTORIA E ASSESSORIA CONTABIL</MenuItem>
                        <MenuItem value={'3.3.90.35.02'}>CONSULTORIA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.90.35.03'}>CONSULTORIA E ASSESSORIA ADMINISTRATIVA</MenuItem>
                        <MenuItem value={'3.3.90.35.06'}>CONSULTORIA E ASSESSORIA PARA CAPTACAO DE RECURSOS DE CONVENIOS</MenuItem>
                        <MenuItem value={'3.3.90.35.99'}>OUTROS</MenuItem>
                        <MenuItem value={'3.3.90.35.99'}>OUTROS SERVICOS DE CONSULTORIA E ASSESSORIA</MenuItem>
                        <MenuItem value={'3.3.90.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.90.36.01'}>CONDOMINIOS</MenuItem>
                        <MenuItem value={'3.3.90.36.07'}>ESTAGIARIOS</MenuItem>
                        <MenuItem value={'3.3.90.36.08'}>BOLSA DE INICIACAO AO TRABALHO</MenuItem>
                        <MenuItem value={'3.3.90.36.13'}>ARMAZENAGEM</MenuItem>
                        <MenuItem value={'3.3.90.36.14'}>LOCACAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.16'}>MANUTENCAO E CONSERVACAO DE EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.36.18'}>MANUTENCAO E CONSERVACAO DE BENS MOVEIS DE OUTRAS NATUREZAS</MenuItem>
                        <MenuItem value={'3.3.90.36.20'}>FORNECIMENTO DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.90.36.22'}>SERVICOS DE LIMPEZA E CONSERVACAO</MenuItem>
                        <MenuItem value={'3.3.90.36.23'}>SERVICOS DOMESTICOS</MenuItem>
                        <MenuItem value={'3.3.90.36.24'}>SERVICOS DE COMUNICACAO EM GERAL</MenuItem>
                        <MenuItem value={'3.3.90.36.25'}>SERVICO DE SELECAO E TREINAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.36.30'}>SERVICO DE APOIO ADMINISTRATIVO</MenuItem>
                        <MenuItem value={'3.3.90.36.39'}>MULTAS INDEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.36.42'}>TRANSPORTE ESCOLAR</MenuItem>
                        <MenuItem value={'3.3.90.36.43'}>SERVICOS DE AUDIO</MenuItem>
                        <MenuItem value={'3.3.90.36.44'}>MANUTENCAO DE REPARTICOES SEDIADAS NO EXTERIOR</MenuItem>
                        <MenuItem value={'3.3.90.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.90.39.04'}>DIREITOS AUTORAIS</MenuItem>
                        <MenuItem value={'3.3.90.39.09'}>ARMAZENAGEM</MenuItem>
                        <MenuItem value={'3.3.90.39.12'}>LOCACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.39.14'}>MANUTENCAO E CONSERVACAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.17'}>MANUTENCAO E CONSERVACAO DE BENS MOVEIS DE OUTRAS NATUREZAS</MenuItem>
                        <MenuItem value={'3.3.90.39.18'}>MANUTENCAO E CONSERVACAO DE ESTRADAS OU OUTRAS VIAS</MenuItem>
                        <MenuItem value={'3.3.90.39.20'}>FESTIVIDADES E HOMENAGENS</MenuItem>
                        <MenuItem value={'3.3.90.39.21'}>MULTAS DEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.22'}>MULTAS INDEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.25'}>ENCARGOS FINANCEIROS INDEDUTIVEIS</MenuItem>
                        <MenuItem value={'3.3.90.39.28'}>SERVICOS DE CARATER SECRETO OU RESERVADO</MenuItem>
                        <MenuItem value={'3.3.90.39.29'}>SERVICOS DE ENERGIA ELETRICA</MenuItem>
                        <MenuItem value={'3.3.90.39.31'}>SERVICOS DE GAS</MenuItem>
                        <MenuItem value={'3.3.90.39.34'}>SERVICO DE SELECAO E TREINAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.39.35'}>PRODUCOES JORNALISTICAS</MenuItem>
                        <MenuItem value={'3.3.90.39.36'}>SERVICO MEDICO-HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.90.39.38'}>SERVICOS DE REABILITACAO PROFISSIONAL</MenuItem>
                        <MenuItem value={'3.3.90.39.40'}>SERVICOS DE CRECHES E ASSISTENCIA PRE-ESCOLAR</MenuItem>
                        <MenuItem value={'3.3.90.39.41'}>SERVICOS DE PERICIAS MEDICAS POR BENEFICIOS</MenuItem>
                        <MenuItem value={'3.3.90.39.42'}>SERVICOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.90.39.43'}>SERVICOS DE TELECOMUNICACOES</MenuItem>
                        <MenuItem value={'3.3.90.39.46'}>SERVICOS DE SOCORRO E SALVAMENTO</MenuItem>
                        <MenuItem value={'3.3.90.39.58'}>FRETES E TRANSPORTES DE ENCOMENDAS</MenuItem>
                        <MenuItem value={'3.3.90.39.60'}>VIGILANCIA OSTENSIVA</MenuItem>
                        <MenuItem value={'3.3.90.39.62'}>SERVICO DE APOIO ADMINISTRATIVO</MenuItem>
                        <MenuItem value={'3.3.90.39.66'}>SERVICOS EM ITENS REPARAVEIS DE AVIACAO</MenuItem>
                        <MenuItem value={'3.3.90.39.67'}>SERVICOS RELACIONADOS A INDUSTRIALIZACAO AEROESPACIAL</MenuItem>
                        <MenuItem value={'3.3.90.39.69'}>MANUTENCAO DE REPARTICOES  SERVICO EXTERIOR</MenuItem>
                        <MenuItem value={'3.3.90.39.99'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.90.39.99'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.90.40.01'}>LOCACAO DE EQUIPAMENTOS DE TIC</MenuItem>
                        <MenuItem value={'3.3.90.40.02'}>LOCACAO DE SOFTWARES</MenuItem>
                        <MenuItem value={'3.3.90.40.03'}>DESENVOLVIMENTO DE SOFTWARE</MenuItem>
                        <MenuItem value={'3.3.90.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.90.43.00'}>SUBVENCOES SOCIAIS</MenuItem>
                        <MenuItem value={'3.3.90.45.00'}>SUBVENCOES ECONOMICAS</MenuItem>
                        <MenuItem value={'3.3.90.46.00'}>AUXILIO-ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.90.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'3.3.90.91.05'}>SENTENCA JUDICIAL PARA AQUISICAO DE MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.90.91.06'}>SENTENCA JUDICIAL PARA AQUISICAO DE OUTROS INSUMOS E SERVICOS PARA SAUDE</MenuItem>
                        <MenuItem value={'3.3.90.91.99'}>OUTRAS SENTENCAS JUDICIAIS E DECISOES JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.90.93.01'}>INDENIZACOES E RESTITUICOES DE VEREADORES</MenuItem>
                        <MenuItem value={'3.3.90.93.02'}>INDENIZACOES E RESTITUICOES DE PRESIDENTE DA CAMARA</MenuItem>
                        <MenuItem value={'3.3.90.93.03'}>OUTRAS INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'3.3.91.00.00'}>APLICACAO DIRETA DECORRENTE DE OPERACAO ENTRE ORGAOS</MenuItem>
                        <MenuItem value={'3.3.91.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.3.91.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.91.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.91.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'3.3.91.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.91.37.00'}>LOCACAO DE MAO-DE-OBRA</MenuItem>
                        <MenuItem value={'3.3.91.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.91.47.00'}>OBRIGACOES TRIBUTARIAS E CONTRIBUTIVAS</MenuItem>
                        <MenuItem value={'3.3.91.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.92.30.99'}>OUTROS MATERIAIS DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.92.32.01'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.92.39.57'}>TRANSPORTE ESCOLAR</MenuItem>
                        <MenuItem value={'3.3.92.39.64'}>SERVICOS BANCARIOS</MenuItem>
                        <MenuItem value={'3.3.93.30.04'}>GAS ENGARRAFADO</MenuItem>
                        <MenuItem value={'3.3.93.30.15'}>MATERIAL PARA FESTIVIDADES E HOMENAGENS</MenuItem>
                        <MenuItem value={'3.3.93.30.16'}>MATERIAL DE EXPEDIENTE</MenuItem>
                        <MenuItem value={'3.3.93.30.24'}>MATERIAL PARA MANUTENCAO DE BENS IMOVEIS</MenuItem>
                        <MenuItem value={'3.3.93.30.35'}>MATERIAL HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.93.30.39'}>MATERIAL GRAFICO</MenuItem>
                        <MenuItem value={'3.3.93.32.02'}>INSUMOS E SERVICOS PARA SAUDE</MenuItem>
                        <MenuItem value={'3.3.93.39.01'}>ASSINATURAS DE PERIODICOS E ANUIDADES</MenuItem>
                        <MenuItem value={'3.3.93.39.02'}>CONDOMINIOS</MenuItem>
                        <MenuItem value={'3.3.93.39.12'}>LOCACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.93.39.15'}>MANUTENCAO E CONSERVACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.93.39.16'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.93.39.19'}>EXPOSICOES</MenuItem>
                        <MenuItem value={'3.3.93.39.23'}>JUROS</MenuItem>
                        <MenuItem value={'3.3.93.39.27'}>FORNECIMENTO DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.93.39.29'}>SERVICOS DE ENERGIA ELETRICA</MenuItem>
                        <MenuItem value={'3.3.93.39.30'}>SERVICOS DE AGUA E ESGOTO</MenuItem>
                        <MenuItem value={'3.3.93.39.36'}>SERVICO MEDICO-HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.93.39.39'}>SERVICOS DE ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={'3.3.93.39.41'}>SERVICOS DE PERICIAS MEDICAS POR BENEFICIOS</MenuItem>
                        <MenuItem value={'3.3.93.39.45'}>SERVICOS DE MANOBRA E PATRULHAMENTO</MenuItem>
                        <MenuItem value={'3.3.93.39.53'}>SEGUROS EM GERAL</MenuItem>
                        <MenuItem value={'3.3.93.39.61'}>LIMPEZA E CONSERVACAO</MenuItem>
                        <MenuItem value={'3.3.93.39.62'}>SERVICO DE APOIO ADMINISTRATIVO</MenuItem>
                        <MenuItem value={'3.3.93.39.63'}>HOSPEDAGENS</MenuItem>
                        <MenuItem value={'3.3.93.39.64'}>SERVICOS BANCARIOS</MenuItem>
                        <MenuItem value={'3.3.93.39.65'}>SERVICOS DE COPIAS E REPRODUCAO DE DOCUMENTOS</MenuItem>
                        <MenuItem value={'3.3.93.39.73'}>LOCACAO DE VEICULOS PARA TRANSPORTE DE CARGAS</MenuItem>
                        <MenuItem value={'3.3.93.39.99'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.93.40.06'}>COMUNICACAO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.93.40.99'}>OUTROS SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'3.3.93.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.94.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'3.3.94.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.94.39.15'}>MANUTENCAO E CONSERVACAO DE MAQUINAS E EQUIPAMENTOS</MenuItem>
                        <MenuItem value={'3.3.94.39.23'}>JUROS</MenuItem>
                        <MenuItem value={'3.3.94.39.36'}>SERVICO MEDICO-HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.94.39.99'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.94.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'3.3.95.08.00'}>OUTROS BENEFICIOS ASSISTENCIAIS DO SERVIDOR OU DO MILITAR</MenuItem>
                        <MenuItem value={'3.3.95.30.04'}>GAS ENGARRAFADO</MenuItem>
                        <MenuItem value={'3.3.95.30.07'}>GENEROS DE ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.95.30.09'}>MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.95.30.10'}>MATERIAL ODONTOLOGICO</MenuItem>
                        <MenuItem value={'3.3.95.30.16'}>MATERIAL DE EXPEDIENTE</MenuItem>
                        <MenuItem value={'3.3.95.30.17'}>MATERIAL DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'3.3.95.30.21'}>MATERIAL DE COPA E COZINHA</MenuItem>
                        <MenuItem value={'3.3.95.30.22'}>MATERIAL DE LIMPEZA E PRODUCAO DE HIGIENIZACAO</MenuItem>
                        <MenuItem value={'3.3.95.30.25'}>MATERIAL PARA MANUTENCAO DE BENS MOVEIS</MenuItem>
                        <MenuItem value={'3.3.95.30.35'}>MATERIAL HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.95.30.37'}>MATERIAL PARA MANUTENCAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.95.31.00'}>PREMIACOES CULTURAIS</MenuItem>
                        <MenuItem value={'3.3.95.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.95.34.00'}>OUTRAS DESPESAS DE PESSOAL DECORRENTES DE CONTRATO DE TERCEIRIZACAO</MenuItem>
                        <MenuItem value={'3.3.95.36.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.95.36.06'}>SERVICOS TECNICOS</MenuItem>
                        <MenuItem value={'3.3.95.36.15'}>LOCACAO DE BENS MOVEIS E INTANGIVEIS</MenuItem>
                        <MenuItem value={'3.3.95.36.26'}>SERVICOS MEDICOS E ODONTOLOGICOS</MenuItem>
                        <MenuItem value={'3.3.95.36.28'}>SERVICOS DE ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={'3.3.95.36.30'}>SERVICO DE APOIO ADMINISTRATIVO</MenuItem>
                        <MenuItem value={'3.3.95.36.99'}>OUTROS SERVICOS DE PESSOA FISICA</MenuItem>
                        <MenuItem value={'3.3.95.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.95.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.95.39.01'}>ASSINATURAS DE PERIODICOS E ANUIDADES</MenuItem>
                        <MenuItem value={'3.3.95.39.07'}>DESCONTOS FINANCEIROS CONCEDIDOS</MenuItem>
                        <MenuItem value={'3.3.95.39.16'}>MANUTENCAO E CONSERVACAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.95.39.36'}>SERVICO MEDICO-HOSPITALAR</MenuItem>
                        <MenuItem value={'3.3.95.39.37'}>SERVICOS DE ANALISES E PESQUISAS CIENTIFICAS</MenuItem>
                        <MenuItem value={'3.3.95.39.48'}>SERVICOS GRAFICOS</MenuItem>
                        <MenuItem value={'3.3.95.39.50'}>SERVICOS JUDICIARIOS</MenuItem>
                        <MenuItem value={'3.3.95.39.68'}>SERVICOS DE PUBLICIDADE E PROPAGANDA</MenuItem>
                        <MenuItem value={'3.3.95.39.99'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.95.39.99'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.95.40.02'}>LOCACAO DE SOFTWARES</MenuItem>
                        <MenuItem value={'3.3.95.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'3.3.95.46.00'}>AUXILIO-ALIMENTACAO</MenuItem>
                        <MenuItem value={'3.3.95.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.95.91.04'}>PRECATORIOS</MenuItem>
                        <MenuItem value={'3.3.95.91.05'}>SENTENCA JUDICIAL PARA AQUISICAO DE MEDICAMENTOS</MenuItem>
                        <MenuItem value={'3.3.95.91.06'}>SENTENCA JUDICIAL PARA AQUISICAO DE OUTROS INSUMOS E SERVICOS PARA SAUDE</MenuItem>
                        <MenuItem value={'3.3.95.91.99'}>OUTRAS SENTENCAS JUDICIAIS E DECISOES JUDICIAIS</MenuItem>
                        <MenuItem value={'3.3.95.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'3.3.96.04.00'}>CONTRATACAO POR TEMPO DETERMINADO</MenuItem>
                        <MenuItem value={'3.3.96.30.37'}>MATERIAL PARA MANUTENCAO DE VEICULOS</MenuItem>
                        <MenuItem value={'3.3.96.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'3.3.96.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'3.3.96.36.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'3.3.96.39.00'}>OUTROS SERVICOS DE TERCEIROS  PESSOA JURIDICA</MenuItem>
                        <MenuItem value={'3.3.96.45.00'}>SUBVENCOES ECONOMICAS</MenuItem>
                        <MenuItem value={'3.3.96.48.00'}>OUTROS AUXILIOS FINANCEIROS A PESSOAS FISICAS</MenuItem>
                        <MenuItem value={'3.3.96.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.4.20.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.4.30.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.30.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.42.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.50.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'4.4.50.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'4.4.50.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.50.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.50.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.50.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.50.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.50.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.50.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.60.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.60.45.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.70.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.4.70.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.71.00.00'}>TRANSFERENCIAS A CONSORCIOS PUBLICOS MEDIANTE CONTRATO DE RATEIO</MenuItem>
                        <MenuItem value={'4.4.72.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'4.4.72.33.00'}>PASSAGENS E DESPESAS COM LOCOMOCAO</MenuItem>
                        <MenuItem value={'4.4.72.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'4.4.73.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.74.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.76.41.00'}>CONTRIBUICOES</MenuItem>
                        <MenuItem value={'4.4.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'4.4.90.30.00'}>MATERIAL DE CONSUMO</MenuItem>
                        <MenuItem value={'4.4.90.35.00'}>SERVICOS DE CONSULTORIA</MenuItem>
                        <MenuItem value={'4.4.90.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.90.40.00'}>SERVICOS DE TECNOLOGIA DA INFORMACAO E COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.90.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.90.52.01'}>AERONAVES</MenuItem>
                        <MenuItem value={'4.4.90.52.05'}>APARELHOS E EQUIPAMENTOS PARA ESPORTES E DIVERSOES</MenuItem>
                        <MenuItem value={'4.4.90.52.07'}>ARMAMENTOS</MenuItem>
                        <MenuItem value={'4.4.90.52.08'}>COLECOES E MATERIAIS BIBLIOGRAFICOS</MenuItem>
                        <MenuItem value={'4.4.90.52.09'}>DISCOTECAS E FILMOTECAS</MenuItem>
                        <MenuItem value={'4.4.90.52.10'}>EMBARCACOES</MenuItem>
                        <MenuItem value={'4.4.90.52.14'}>MAQUINAS E EQUIPAMENTOS DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.90.52.18'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.90.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.90.52.23'}>MAQUINAS E EQUIPAMENTOS AGRICOLAS E RODOVIARIOS</MenuItem>
                        <MenuItem value={'4.4.90.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.90.52.25'}>OBRAS DE ARTE E PECAS PARA MUSEU</MenuItem>
                        <MenuItem value={'4.4.90.52.27'}>VEICULOS DIVERSOS</MenuItem>
                        <MenuItem value={'4.4.90.52.29'}>PECAS NAO INCORPORAVEIS A IMOVEIS</MenuItem>
                        <MenuItem value={'4.4.90.52.30'}>VEICULOS DE TRACAO MECANICA</MenuItem>
                        <MenuItem value={'4.4.90.52.31'}>CARROS DE COMBATE</MenuItem>
                        <MenuItem value={'4.4.90.52.34'}>ACESSORIOS PARA AUTOMOVEIS</MenuItem>
                        <MenuItem value={'4.4.90.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.90.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.4.90.61.03'}>AQUISICAO DE IMOVEIS DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.4.90.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.4.91.39.00'}>OUTROS SERVICOS DE TERCEIROS</MenuItem>
                        <MenuItem value={'4.4.91.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.91.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.4.92.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.92.52.04'}>APARELHOS</MenuItem>
                        <MenuItem value={'4.4.92.52.25'}>OBRAS DE ARTE E PECAS PARA MUSEU</MenuItem>
                        <MenuItem value={'4.4.92.52.27'}>VEICULOS DIVERSOS</MenuItem>
                        <MenuItem value={'4.4.93.51.03'}>OBRAS E INSTALACOES DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.93.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.4.93.52.04'}>APARELHOS</MenuItem>
                        <MenuItem value={'4.4.93.52.18'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.93.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.93.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.93.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.4.94.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.94.51.01'}>OBRAS E INSTALACOES DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.94.51.03'}>OBRAS E INSTALACOES DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.94.52.18'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.94.52.27'}>VEICULOS DIVERSOS</MenuItem>
                        <MenuItem value={'4.4.95.51.01'}>OBRAS E INSTALACOES DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.4.95.52.03'}>APARELHOS E EQUIPAMENTOS DE COMUNICACAO</MenuItem>
                        <MenuItem value={'4.4.95.52.04'}>APARELHOS</MenuItem>
                        <MenuItem value={'4.4.95.52.18'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.95.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.95.52.35'}>EQUIPAMENTOS DE MERGULHO E SALVAMENTO</MenuItem>
                        <MenuItem value={'4.4.95.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.95.61.03'}>AQUISICAO DE IMOVEIS DE NATUREZA INDUSTRIAL</MenuItem>
                        <MenuItem value={'4.4.96.51.00'}>OBRAS E INSTALACOES</MenuItem>
                        <MenuItem value={'4.4.96.52.19'}>EQUIPAMENTOS DE PROCESSAMENTO DE DADOS</MenuItem>
                        <MenuItem value={'4.4.96.52.20'}>MAQUINAS</MenuItem>
                        <MenuItem value={'4.4.96.52.22'}>EQUIPAMENTOS E UTENSILIOS HIDRAULICOS E ELETRICOS</MenuItem>
                        <MenuItem value={'4.4.96.52.24'}>MOBILIARIO EM GERAL</MenuItem>
                        <MenuItem value={'4.4.96.52.99'}>OUTROS MATERIAIS PERMANENTES</MenuItem>
                        <MenuItem value={'4.4.99.99.00'}>A CLASSIFICAR</MenuItem>
                        <MenuItem value={'4.5.30.42.00'}>AUXILIOS</MenuItem>
                        <MenuItem value={'4.5.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO (2) (I)</MenuItem>
                        <MenuItem value={'4.5.72.32.00'}>MATERIAL</MenuItem>
                        <MenuItem value={'4.5.90.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.5.90.61.02'}>AQUISICAO DE IMOVEIS DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.5.90.62.00'}>AQUISICAO DE PRODUTOS PARA REVENDA</MenuItem>
                        <MenuItem value={'4.5.90.63.00'}>AQUISICAO DE TITULOS DE CREDITO</MenuItem>
                        <MenuItem value={'4.5.90.65.00'}>CONSTITUICAO OU AUMENTO DE CAPITAL DE EMPRESAS</MenuItem>
                        <MenuItem value={'4.5.90.66.00'}>CONCESSAO DE EMPRESTIMOS E FINANCIAMENTOS</MenuItem>
                        <MenuItem value={'4.5.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'4.5.90.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.5.91.00.00'}>APLICACAO DIRETA DECORRENTE DE OPERACAO ENTRE ORGAOS</MenuItem>
                        <MenuItem value={'4.5.91.52.00'}>EQUIPAMENTOS E MATERIAL PERMANENTE</MenuItem>
                        <MenuItem value={'4.5.91.65.00'}>CONSTITUICAO OU AUMENTO DE CAPITAL DE EMPRESAS</MenuItem>
                        <MenuItem value={'4.5.91.66.00'}>CONCESSAO DE EMPRESTIMOS E FINANCIAMENTOS</MenuItem>
                        <MenuItem value={'4.5.91.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.5.95.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.5.95.61.02'}>AQUISICAO DE IMOVEIS DE DOMINIO PATRIMONIAL</MenuItem>
                        <MenuItem value={'4.5.96.61.00'}>AQUISICAO DE IMOVEIS</MenuItem>
                        <MenuItem value={'4.5.96.61.01'}>AQUISICAO DE IMOVEIS DE DOMINIO PUBLICO</MenuItem>
                        <MenuItem value={'4.6.71.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'4.6.73.70.00'}>RATEIO PELA PARTICIPACAO EM CONSORCIO PUBLICO</MenuItem>
                        <MenuItem value={'4.6.90.00.00'}>APLICACOES DIRETAS</MenuItem>
                        <MenuItem value={'4.6.90.71.01'}>PRINCIPAL DA DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'4.6.90.71.02'}>PRINCIPAL DA DIVIDA POR CONTRATO</MenuItem>
                        <MenuItem value={'4.6.90.73.00'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL RESGATADA</MenuItem>
                        <MenuItem value={'4.6.90.73.01'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL RESGATADA</MenuItem>
                        <MenuItem value={'4.6.90.73.02'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL</MenuItem>
                        <MenuItem value={'4.6.90.73.02'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL RESGATADA</MenuItem>
                        <MenuItem value={'4.6.90.75.00'}>CORRECAO MONETARIA DA DIVIDA DE OPERACAO DE CREDITO POR ANTECIPACAO DA RECEITA</MenuItem>
                        <MenuItem value={'4.6.90.76.00'}>PRINCIPAL CORRIGIDO DA DIVIDA MOBILIARIA REFINANCIADO</MenuItem>
                        <MenuItem value={'4.6.90.91.00'}>SENTENCAS JUDICIAIS</MenuItem>
                        <MenuItem value={'4.6.90.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.6.90.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.6.91.73.00'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA CONTRATUAL RESGATADA</MenuItem>
                        <MenuItem value={'4.6.91.74.00'}>CORRECAO MONETARIA OU CAMBIAL DA DIVIDA MOBILIARIA RESGATADA</MenuItem>
                        <MenuItem value={'4.6.91.92.00'}>DESPESAS DE EXERCICIOS ANTERIORES</MenuItem>
                        <MenuItem value={'4.6.91.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'4.6.96.93.00'}>INDENIZACOES E RESTITUICOES</MenuItem>
                        <MenuItem value={'9.9.99.00.00'}>RESERVA DE CONTINGENCIA OU RESERVA DO RPPS</MenuItem>
                        <MenuItem value={'9.9.99.99.00'}>RESERVA DE CONTINGENCIA OU RESERVA DO RPPS</MenuItem>
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
                        <MenuItem value={103}>CONTRIBUICAO PARA O REGIME PROPRIO DE PREVIDENCIA SOCIAL (RPPS): PATRONAL</MenuItem>
                        <MenuItem value={106}>TRANSFERENCIAS DE RECURSOS PARA O PROGRAMA ESTADUAL DE TRANSPORTE ESCOLAR (PTE).</MenuItem>
                        <MenuItem value={107}>PRECATORIOS DO FUNDEF</MenuItem>
                        <MenuItem value={107}>PRECATORIOS DO FUNDEF.</MenuItem>
                        <MenuItem value={108}>COMPENSACAO FINANCEIRA DE RECURSOS MINERAIS (CFEM)</MenuItem>
                        <MenuItem value={108}>COMPENSACAO FINANCEIRA DE RECURSOS MINERAIS (CFEM).</MenuItem>
                        <MenuItem value={113}>SERVICOS EDUCACIONAIS</MenuItem>
                        <MenuItem value={117}>CONTRIBUICAO PARA CUSTEIO DOS SERVICOS DE ILUMINACAO PUBLICA (COSIP)</MenuItem>
                        <MenuItem value={118}>TRANSFERENCIAS DO FUNDEB PARA APLICACAO NA REMUNERACAO DOS PROFISSIONAIS DO MAGISTERIO EM EFETIVO EXERCICIO NA EDUCACAO BASICA</MenuItem>
                        <MenuItem value={122}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A EDUCACAO</MenuItem>
                        <MenuItem value={145}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE APOIO AO TRANSPORTE ESCOLAR (PNATE)</MenuItem>
                        <MenuItem value={146}>OUTRAS TRANSFERENCIAS DE RECURSOS DO FNDE</MenuItem>
                        <MenuItem value={149}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ATENCAO DE MEDIA E ALTA COMPLEXIDADE AMBULATORIAL E HOSPITALAR</MenuItem>
                        <MenuItem value={150}>TRANSFERENCIAS DE RECURSOS DO SUS PARA VIGILANCIA EM SAUDE</MenuItem>
                        <MenuItem value={151}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ASSISTENCIA FARMACEUTICA</MenuItem>
                        <MenuItem value={157}>MULTAS DE TRANSITO</MenuItem>
                        <MenuItem value={159}>TRANSFERENCIA DE RECURSOS DO SISTEMA UNICO DE SAUDE</MenuItem>
                        <MenuItem value={159}>TRANSFERENCIA DE RECURSOS DO SISTEMA UNICO DE SAUDE  SUS  BLOCO CUSTEIO DAS ACOES E SERVICOS PUBLICOS DE SAUDE.</MenuItem>
                        <MenuItem value={160}>TRANSFERENCIA DA UNIAO DA PARCELA DOS BONUS DE ASSINATURA DE CONTRATO DE PARTILHA DE PRODUCAO</MenuItem>
                        <MenuItem value={161}>AUXILIO FINANCEIRO NO ENFRENTAMENTO A COVID-19 PARA APLICACAO EM ACOES DE SAUDE E ASSISTENCIA SOCIAL (ART. 5</MenuItem>
                        <MenuItem value={162}>TRANSFERENCIA DE RECURSOS PARA APLICACAO EM ACOES EMERGENCIAIS DE APOIO AO SETOR CULTURAL (LEI ALDIR BLANC)</MenuItem>
                        <MenuItem value={163}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A SEGURANCA PUBLICA</MenuItem>
                        <MenuItem value={164}>EMENDAS PARLAMENTARES INDIVIDUAIS</MenuItem>
                        <MenuItem value={191}>OPERACOES DE CREDITO EXTERNAS</MenuItem>
                        <MenuItem value={192}>ALIENACAO DE BENS</MenuItem>
                        <MenuItem value={200}>RECURSOS ORDINARIOS</MenuItem>
                        <MenuItem value={202}>RECEITAS DE IMPOSTOS E DE TRANSFERENCIAS DE IMPOSTOS VINCULADOS A SAUDE</MenuItem>
                        <MenuItem value={205}>TAXA DE ADMINISTRACAO DO RPPS.</MenuItem>
                        <MenuItem value={206}>TRANSFERENCIAS DE RECURSOS PARA O PROGRAMA ESTADUAL DE TRANSPORTE ESCOLAR (PTE)</MenuItem>
                        <MenuItem value={208}>COMPENSACAO FINANCEIRA DE RECURSOS MINERAIS (CFEM)</MenuItem>
                        <MenuItem value={208}>COMPENSACAO FINANCEIRA DE RECURSOS MINERAIS (CFEM).</MenuItem>
                        <MenuItem value={217}>CONTRIBUICAO PARA CUSTEIO DOS SERVICOS DE ILUMINACAO PUBLICA (COSIP)</MenuItem>
                        <MenuItem value={218}>TRANSFERENCIAS DO FUNDEB PARA APLICACAO NA REMUNERACAO DOS PROFISSIONAIS DO MAGISTERIO EM EFETIVO EXERCICIO NA EDUCACAO BASICA</MenuItem>
                        <MenuItem value={223}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A SAUDE</MenuItem>
                        <MenuItem value={224}>TRANSFERENCIAS DE CONVENIOS NAO RELACIONADOS A EDUCACAO</MenuItem>
                        <MenuItem value={242}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={244}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE ALIMENTACAO ESCOLAR (PNAE)</MenuItem>
                        <MenuItem value={246}>OUTRAS TRANSFERENCIAS DE RECURSOS DO FNDE</MenuItem>
                        <MenuItem value={247}>TRANSFERENCIA DO SALARIO-EDUCACAO</MenuItem>
                        <MenuItem value={251}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ASSISTENCIA FARMACEUTICA</MenuItem>
                        <MenuItem value={252}>TRANSFERENCIAS DE RECURSOS DO SUS PARA GESTAO DO SUS</MenuItem>
                        <MenuItem value={259}>TRANSFERENCIA DE RECURSOS DO SISTEMA UNICO DE SAUDE  SUS  BLOCO CUSTEIO DAS ACOES E SERVICOS PUBLICOS DE SAUDE.</MenuItem>
                        <MenuItem value={260}>TRANSFERENCIA DA UNIAO DA PARCELA DOS BONUS DE ASSINATURA DE CONTRATO DE PARTILHA DE PRODUCAO</MenuItem>
                        <MenuItem value={261}>AUXILIO FINANCEIRO NO ENFRENTAMENTO A COVID-19 PARA APLICACAO EM ACOES DE SAUDE E ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={261}>AUXILIO FINANCEIRO NO ENFRENTAMENTO A COVID-19 PARA APLICACAO EM ACOES DE SAUDE E ASSISTENCIA SOCIAL (ART. 5</MenuItem>
                        <MenuItem value={262}>TRANSFERENCIA DE RECURSOS PARA APLICACAO EM ACOES EMERGENCIAIS DE APOIO AO SETOR CULTURAL (LEI ALDIR BLANC)</MenuItem>
                        <MenuItem value={264}>EMENDAS PARLAMENTARES INDIVIDUAIS</MenuItem>
                        <MenuItem value={288}>DISPONIBILIDADE DE CAIXA VINCULADA A  RESTOS A PAGAR CONSIDERADOS NA APLICACAO MINIMA DA SAUDE E POSTERIORMENTE CANCELADOS OU PRESCRITOS</MenuItem>
                        <MenuItem value={290}>OPERACOES DE CREDITO INTERNAS</MenuItem>
                        <MenuItem value={292}>ALIENACAO DE BENS</MenuItem>
                        <MenuItem value={100}>RECURSOS ORDINARIOS</MenuItem>
                        <MenuItem value={101}>RECEITAS DE IMPOSTOS E DE TRANSFERENCIAS DE IMPOSTOS VINCULADOS A EDUCACAO</MenuItem>
                        <MenuItem value={102}>RECEITAS DE IMPOSTOS E DE TRANSFERENCIAS DE IMPOSTOS VINCULADOS A SAUDE</MenuItem>
                        <MenuItem value={105}>TAXA DE ADMINISTRACAO DO RPPS</MenuItem>
                        <MenuItem value={105}>TAXA DE ADMINISTRACAO DO RPPS.</MenuItem>
                        <MenuItem value={106}>TRANSFERENCIAS DE RECURSOS PARA O PROGRAMA ESTADUAL DE TRANSPORTE ESCOLAR (PTE)</MenuItem>
                        <MenuItem value={112}>SERVICOS DE SAUDE</MenuItem>
                        <MenuItem value={116}>CONTRIBUICAO DE INTERVENCAO DO DOMINIO ECONOMICO (CIDE)</MenuItem>
                        <MenuItem value={119}>TRANSFERENCIAS DO FUNDEB PARA APLICACAO EM OUTRAS DESPESAS DA EDUCACAO BASICA</MenuItem>
                        <MenuItem value={123}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A SAUDE</MenuItem>
                        <MenuItem value={124}>TRANSFERENCIAS DE CONVENIOS NAO RELACIONADOS A EDUCACAO</MenuItem>
                        <MenuItem value={129}>TRANSFERENCIAS DE RECURSOS DO FUNDO NACIONAL DE ASSISTENCIA SOCIAL (FNAS)</MenuItem>
                        <MenuItem value={142}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={143}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA DINHEIRO DIRETO NA ESCOLA (PDDE)</MenuItem>
                        <MenuItem value={144}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE ALIMENTACAO ESCOLAR (PNAE)</MenuItem>
                        <MenuItem value={147}>TRANSFERENCIA DO SALARIO-EDUCACAO</MenuItem>
                        <MenuItem value={148}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ATENCAO BASICA</MenuItem>
                        <MenuItem value={152}>TRANSFERENCIAS DE RECURSOS DO SUS PARA GESTAO DO SUS</MenuItem>
                        <MenuItem value={153}>TRANSFERENCIAS DE RECURSOS DO SUS PARA INVESTIMENTOS NA REDE DE SERVICOS DE SAUDE</MenuItem>
                        <MenuItem value={154}>OUTRAS TRANSFERENCIAS DE RECURSOS DO SUS</MenuItem>
                        <MenuItem value={155}>TRANSFERENCIAS DE RECURSOS DO FUNDO ESTADUAL DE SAUDE</MenuItem>
                        <MenuItem value={156}>TRANSFERENCIAS DE RECURSOS DO FUNDO ESTADUAL DE ASSISTENCIA SOCIAL (FEAS)</MenuItem>
                        <MenuItem value={158}>CONTRIBUICAO PARA A ASSISTENCIA A SAUDE DOS SERVIDORES: PATRONAL</MenuItem>
                        <MenuItem value={161}>AUXILIO FINANCEIRO NO ENFRENTAMENTO A COVID-19 PARA APLICACAO EM ACOES DE SAUDE E ASSISTENCIA SOCIAL</MenuItem>
                        <MenuItem value={165}>OUTROS RECURSOS VINCULADOS</MenuItem>
                        <MenuItem value={190}>OPERACOES DE CREDITO INTERNAS</MenuItem>
                        <MenuItem value={193}>OUTRAS RECEITAS NAO PRIMARIAS</MenuItem>
                        <MenuItem value={201}>RECEITAS DE IMPOSTOS E DE TRANSFERENCIAS DE IMPOSTOS VINCULADOS A EDUCACAO</MenuItem>
                        <MenuItem value={203}>CONTRIBUICAO PARA O REGIME PROPRIO DE PREVIDENCIA SOCIAL (RPPS): PATRONAL</MenuItem>
                        <MenuItem value={205}>TAXA DE ADMINISTRACAO DO RPPS</MenuItem>
                        <MenuItem value={206}>TRANSFERENCIAS DE RECURSOS PARA O PROGRAMA ESTADUAL DE TRANSPORTE ESCOLAR (PTE).</MenuItem>
                        <MenuItem value={207}>PRECATORIOS DO FUNDEF</MenuItem>
                        <MenuItem value={207}>PRECATORIOS DO FUNDEF.</MenuItem>
                        <MenuItem value={212}>SERVICOS DE SAUDE</MenuItem>
                        <MenuItem value={213}>SERVICOS EDUCACIONAIS</MenuItem>
                        <MenuItem value={216}>CONTRIBUICAO DE INTERVENCAO DO DOMINIO ECONOMICO (CIDE)</MenuItem>
                        <MenuItem value={219}>TRANSFERENCIAS DO FUNDEB PARA APLICACAO EM OUTRAS DESPESAS DA EDUCACAO BASICA</MenuItem>
                        <MenuItem value={222}>TRANSFERENCIAS DE CONVENIOS VINCULADOS A EDUCACAO</MenuItem>
                        <MenuItem value={229}>TRANSFERENCIAS DE RECURSOS DO FUNDO NACIONAL DE ASSISTENCIA SOCIAL (FNAS)</MenuItem>
                        <MenuItem value={243}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA DINHEIRO DIRETO NA ESCOLA (PDDE)</MenuItem>
                        <MenuItem value={245}>TRANSFERENCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE APOIO AO TRANSPORTE ESCOLAR (PNATE)</MenuItem>
                        <MenuItem value={248}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ATENCAO BASICA</MenuItem>
                        <MenuItem value={249}>TRANSFERENCIAS DE RECURSOS DO SUS PARA ATENCAO DE MEDIA E ALTA COMPLEXIDADE AMBULATORIAL E HOSPITALAR</MenuItem>
                        <MenuItem value={250}>TRANSFERENCIAS DE RECURSOS DO SUS PARA VIGILANCIA EM SAUDE</MenuItem>
                        <MenuItem value={253}>TRANSFERENCIAS DE RECURSOS DO SUS PARA INVESTIMENTOS NA REDE DE SERVICOS DE SAUDE</MenuItem>
                        <MenuItem value={254}>OUTRAS TRANSFERENCIAS DE RECURSOS DO SUS</MenuItem>
                        <MenuItem value={255}>TRANSFERENCIAS DE RECURSOS DO FUNDO ESTADUAL DE SAUDE</MenuItem>
                        <MenuItem value={256}>TRANSFERENCIAS DE RECURSOS DO FUNDO ESTADUAL DE ASSISTENCIA SOCIAL (FEAS)</MenuItem>
                        <MenuItem value={257}>MULTAS DE TRANSITO</MenuItem>
                        <MenuItem value={258}>CONTRIBUICAO PARA A ASSISTENCIA A SAUDE DOS SERVIDORES: PATRONAL</MenuItem>
                        <MenuItem value={259}>TRANSFERENCIA DE RECURSOS DO SISTEMA UNICO DE SAUDE</MenuItem>
                        <MenuItem value={289}>DISPONIBILIDADE DE CAIXA VINCULADA A RESTOS A PAGAR CONSIDERADOS NA APLICACAO MINIMA DA EDUCACAO E POSTERIORMENTE CANCELADOS OU PRESCRITOS</MenuItem>
                        <MenuItem value={291}>OPERACOES DE CREDITO EXTERNAS</MenuItem>
                        <MenuItem value={293}>OUTRAS RECEITAS NAO PRIMARIAS</MenuItem>
                    </Select>
                </FormControl>
                {monitoringOption == "3" &&
                    <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Qtd. de credores" variant="outlined" size="small" type="number" />
                    </FormControl>
                }
                <Button variant="contained" sx={{ margin: '0 auto', mt: 3, display: "flex" }} disabled={monitoringOption != "1" && monitoringOption != "2" && monitoringOption != "3"} onClick={useHandleClick}>Consultar</Button>
            </Box>
        )
    }

    const handleChange = (event: SelectChangeEvent) => {
        setMonitoringOption(event.target.value);
        setShowChart(false);
    };

    const useHandleClick = async () => {
        if (monitoringOption == "1") {
            const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            setData(resp);
        } else if (monitoringOption == "2") {
            const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            setData(resp);
        } else if (monitoringOption == "3") {
            const resp = await post("monitoramento_despesa/expense_monitoring/forecast", {});
            setData(resp);
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
