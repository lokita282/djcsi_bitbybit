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

const LinkedinCard = () => {
    const [linkedin, setLinkedin] = useState();

    const call = async () => {
        await SeonService.seonEmailData(json).then((res) => {
            console.log(res.data.data);
            // setFinalData([res.data.data.account_details]);
            // setBreach([res.data.data.breach_details]);
            setLinkedin(res.data.data.account_details.whatsapp);
            // setLoad(false)
        });
    };

    // useEffect(() => {
    //     call;
    // }, []);

    return (
        <>
            {linkedin ? (
                <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', maxWidth: 345 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="LinkedIn"
                            style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
                        />
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                            LinkedIn
                        </Typography>
                    </div>
                    <CardMedia
                        component="img"
                        alt={linkedin.name}
                        height="100"
                        image={linkedin.photo}
                        title={linkedin.name}
                        style={{ borderRadius: '20%', width: '40%', margin: '0 auto', objectFit: 'cover' }}
                    />
                    <CardContent style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {linkedin.name}
                        </Typography>
                        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
                            {linkedin.title}
                        </Typography>
                        <Typography style={{ marginTop: '0.5rem' }}>{linkedin.location}</Typography>
                        <Typography variant="h6" component="h3" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                            {linkedin.registered ? 'Registered' : 'Not Registered'}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
};

export default LinkedinCard;
