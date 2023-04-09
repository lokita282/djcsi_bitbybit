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

const AirbnbCard = ({ airbnb }) => {
    return (
        <>
            {airbnb ? (
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                            alt="LinkedIn"
                            style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
                        />
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                            Airbnb
                        </Typography>
                    </div>
                    <CardMedia
                        component="img"
                        alt={airbnb.first_name}
                        height="100"
                        image={airbnb.image}
                        title={airbnb.first_name}
                        style={{ borderRadius: '20%', width: '40%', margin: '0 auto', objectFit: 'cover' }}
                    />
                    <CardContent style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            <b>Name:</b> {airbnb.name}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Title:</b> {airbnb.first_name}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>
                            <b>Location:</b> {airbnb.location}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>About:</b> {airbnb.about}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Reviwee Count:</b> {airbnb.reviewee_count}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Trips:</b> {airbnb.trips}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            <b>Work:</b> {airbnb.work}
                        </Typography>
                        <Typography variant="h6" component="h3" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                            {airbnb.registered ? 'Registered' : 'Not Registered'}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
};

export default AirbnbCard;
