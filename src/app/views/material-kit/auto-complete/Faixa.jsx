import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Stack from '@mui/material/Stack'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './AdvancedSearch.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const useStyles = makeStyles((theme) => ({
    TextField: {
        '& .MuiFormLabel-root': {
            color: 'black', // or black
            fontSize: '2.5ch',
        },
    },
}))

export default function RowAndColumnSpacing() {
    const razaoSocial = {
        options: RazaoSocial,
        getOptionLabel: (option) => option.title,
    }

    const tipoProps = {
        options: Tipo,
        getOptionLabel: (option) => option.title,
    }
    const modalidadeProps = {
        options: Modalidade,
        getOptionLabel: (option) => option.title,
    }

    const TipoLicitacaoProps = {
        options: TipoLicitacao,
        getOptionLabel: (option) => option.title,
    }

    const naturezaObjetoProps = {
        options: NaturezaOjeto,
        getOptionLabel: (option) => option.title,
    }

    const classes = useStyles()
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Faixas</legend>

                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada"
                                            type="number"
                                            placeholder="min"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            placeholder="max"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Preço Unitário"
                                            placeholder="min"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            type="number"
                                            placeholder="max"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Faixas</legend>

                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada"
                                            type="number"
                                            placeholder="min"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            placeholder="max"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Preço Unitário"
                                            placeholder="min"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            type="number"
                                            placeholder="max"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Faixas</legend>

                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada"
                                            type="number"
                                            placeholder="min"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            placeholder="max"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Preço Unitário"
                                            placeholder="min"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            type="number"
                                            placeholder="max"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Faixas</legend>

                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada"
                                            type="number"
                                            placeholder="min"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            placeholder="max"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Item>
                                        <TextField
                                            label="Preço Unitário"
                                            placeholder="min"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label=" "
                                            type="number"
                                            placeholder="max"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

const RazaoSocial = [
    { title: 'Prefeitura A' },
    { title: 'Prefeitura B' },
    { title: 'Prefeitura C' },
    { title: 'Prefeitura D' },
    { title: 'Prefeitura E' },
    { title: 'Prefeitura F' },
    { title: 'Prefeitura G' },
    { title: 'Prefeitura H' },
]

const Tipo = [
    { title: 'Empresa Pública (apenas as dependentes)' },
    { title: 'Fundação' },
    { title: 'RPPS (regime próprio de previdência social)' },
    { title: 'Sociedade de Economia Mista (apenas as dependentes)' },
    { title: 'Autarquia (exceto RPPS)' },
    { title: 'Câmara Municipal' },
    { title: 'Prefeitura Municipal' },
]

const Modalidade = [
    { title: 'Concorrência' },
    { title: 'Convite' },
    { title: 'Leilão' },
    { title: 'Pregão Eletrônico' },
    { title: 'Concurso' },
    { title: 'Pregão Presencial' },
    { title: 'Tomada de Preços' },
]

const TipoLicitacao = [
    { title: 'Maior Lance ou Oferta' },
    { title: 'Melhor Técnica' },
    { title: 'Menor Preço' },
    { title: 'Técnica e Preço' },
]

const NaturezaOjeto = [
    { title: 'Alineação de Bens' },
    { title: 'Compras e Outros Serviços' },
    { title: 'Compras para Obras e/ou Serviços de Engenharia' },
    { title: 'Permissão' },
    { title: 'Concessão' },
    { title: 'Locação de Imóveis' },
]
