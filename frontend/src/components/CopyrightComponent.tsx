
import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type Props = {
    children?: React.ReactNode;
};

function CopyrightComponent(props :  Props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default CopyrightComponent