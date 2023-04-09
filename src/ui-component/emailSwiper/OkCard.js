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

const OkCard = ({ ok }) => {
    return (
        <>
            {ok ? (
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        maxWidth: 345,
                        minHeight: 400
                    }}
                >
                    {/* {console.log('jfcvfkve', linkedin)} */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <img
                            src="https://play-lh.googleusercontent.com/AmPk1bWSXcrQw6IOvLyfNZFhB_f_TH-PEBQjW0H7eiF538X3LHO7HlpFWaDOP-p__Q"
                            alt="LinkedIn"
                            style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
                        />
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                            Ok
                        </Typography>
                    </div>
                    <CardMedia
                        component="img"
                        alt={ok.name}
                        height="100"
                        // image={linkedin.photo}
                        // title={linkedin.name}
                        style={{ borderRadius: '20%', width: '40%', margin: '0 auto', objectFit: 'cover' }}
                    />
                    <CardContent style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            <b>City:</b> {ok.city}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Age:</b> {ok.age}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Date Joined:</b> {ok.date_joined}
                        </Typography>
                        <Typography variant="h6" component="h3" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                            {ok.registered ? 'Registered' : 'Not Registered'}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
};

export default OkCard;
