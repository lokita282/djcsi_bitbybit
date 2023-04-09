import { useState, useEffect } from 'react';
import React from 'react';
import {
    Typography,
    TextField,
    OutlinedInput,
    InputLabel,
    FormControl,
    FormHelperText,
    Grid,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    CardActionArea
} from '@mui/material';
import SeonService from '../../services/SeonService';

// eslint-disable-next-line react-hooks/rules-of-hooks

const GoogleCard = ({ google }) => {
    return (
        <>
            {google ? (
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '2rem',
                        maxWidth: 345,
                        height: 300,
                        alignItems: 'center',
                        alignContent: 'center'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                            alt="LinkedIn"
                            style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                        />
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                            Google Account
                        </Typography>
                    </div>
                    <CardMedia
                        component="img"
                        // alt={linkedin.name}
                        // height="100"
                        image={google.photo}
                        // title={google.name}
                        style={{ borderRadius: '20%', width: '40%', margin: '0 auto', objectFit: 'cover' }}
                    />
                    <CardContent style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {/* {google.name} */}
                        </Typography>
                        <Typography color="tex0tSecondary" style={{ marginTop: '0.5rem' }}>
                            {/* {google.title} */}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>{google.location}</Typography>
                        <Typography variant="h6" component="h3" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                            {google.registered ? 'Registered' : 'Not Registered'}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
};

export default GoogleCard;
