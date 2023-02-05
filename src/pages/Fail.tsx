import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import React from 'react';

function Fail() {

    return (
        <div className="w-full max-w-4xl min-h-main mx-auto flex items-center justify-center">
            <div className='text-center flex flex-col gap-4 justify-center'>
                <span>
                    <PersonOffIcon sx={{ fontSize: 60 }} />
                </span>
                <p>Não foi possível realizar o login do usuário.</p>
                <p>Tente novamente concedendo as permissões solicitadas</p>
                <p>
                    <Link to="/">
                        <Button variant='contained'>Login</Button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Fail;
