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

const SkypeCard = ({ skype }) => {
    return (
        <>
            {skype ? (
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        maxWidth: 345,
                        height: 350
                    }}
                >
                    {/* {console.log('jfcvfkve', linkedin)} */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111609.png"
                            alt="LinkedIn"
                            style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
                        />
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                            Skype
                        </Typography>
                    </div>
                    <CardMedia
                        component="img"
                        alt={skype.name}
                        height="100"
                        image={skype.photo}
                        title={skype.name}
                        style={{ borderRadius: '20%', width: '40%', margin: '0 auto', objectFit: 'cover' }}
                    />
                    <CardContent style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="h5" component="h2" style={{ fontSize: '1.2rem' }}>
                            Handle:{skype.handle}
                        </Typography>
                        <Typography variant="h5" component="h2" style={{ fontSize: '1.2rem' }}>
                            ID:{skype.id}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>Bio:</b> {skype.bio}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>Language:</b> {skype.language}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>Country:</b> {skype.country}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>State:</b> {skype.state}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>City:</b> {skype.city}
                        </Typography>
                        <Typography variant="h6" component="h3" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                            {skype.registered ? 'Registered' : 'Not Registered'}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
};

export default SkypeCard;
