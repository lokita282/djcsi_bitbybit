/* eslint-disable prettier/prettier */
// material-ui
import { useState, useEffect } from 'react';
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

import { blue } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import { ref, uploadBytes, getDownloadURL, listAll, list } from 'firebase/storage';
import { v4 as uuidv4, v4 } from 'uuid';
import { storage } from '../../firebase/config';
import SeonService from 'services/SeonService';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [load, setLoad] = useState(false);
    const [imageUrls, setImageUrls] = useState([]);
    const [json, setJson] = useState('');
    const [imageUpload, setImageUpload] = useState();
    const [finalData, setFinalData] = useState([]);
    const [linkedin, setLinkedin] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [breach, setBreach] = useState();

    const uploadFile = () => {
        setLoad(true);
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name} + ${v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
                console.log(url);
            });
        });
    };
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJson({ ...json, [name]: value });
    };
    const call = async () => {
        await SeonService.seonEmailData(json).then((res) => {
            console.log(res.data.data);
            setFinalData([res.data.data.account_details]);
            setBreach([res.data.data.breach_details]);
            setLinkedin(res.data.data.account_details.linkedin);
            // setLoad(false)
        });
    };
    const call1 = async () => {
        await SeonService.seonPhoneData(json).then((res) => {
            console.log(res.data.data);
            setFinalData([res.data.data.account_details]);
            setWhatsapp(res.data.data.account_details.whatsapp);
            // setLoad(false)
        });
    };

    console.log(finalData);

    const getWhatsapp = async () => {
        let res = await fetch(
            'https://api.apify.com/v2/acts/inutil_labs~wscrp-free/runs?token=apify_api_d7Q3arjXU5CfOpR99cpeOhzUn8boR04B9RGP',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ numbers: [json] }),
                mode: 'cors'
            }
        );
        let data = await res.json();
        console.log([data]);
    };

    console.log(finalData);
    console.log(whatsapp);
    const theme = useTheme();
    return (
        <>
            <MainCard title="Samle Card">
                <Typography variant="body2">
                    Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa.
                    Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube
                    grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non
                    president, sunk in culpa qui officiate descent molls anim id est labours.
                </Typography>
            </MainCard>

            <MainCard sx={{ marginTop: 2 }} title="Firebase Upload Component">
                <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={11}>
                        <FormControl
                            fullWidth
                            // error={Boolean(touched.email && error s.email)}
                            // sx={{ ...theme.typography.customInput }}
                        >
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="text"
                                // value={values.email}
                                name="phone_no"
                                // onBlur={handleBlur}
                                onChange={(e) => setJson(e.target.value)}
                                label="Number"
                                inputProps={{}}
                            />
                            {/* {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {errors.email}
                        </FormHelperText>
                    )} */}
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={call}>
                            Upload
                        </Button>
                    </Grid>
                </Grid>
            </MainCard>
            <MainCard sx={{ marginTop: 2 }} title="Firebase Upload Component">
                <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={11}>
                        <FormControl
                            fullWidth
                            // error={Boolean(touched.email && error s.email)}
                            // sx={{ ...theme.typography.customInput }}
                        >
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="text"
                                // value={values.email}
                                name="phone_no"
                                // onBlur={handleBlur}
                                onChange={(e) => setJson(e.target.value)}
                                label="Number"
                                inputProps={{}}
                            />
                            {/* {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {errors.email}
                        </FormHelperText>
                    )} */}
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={getWhatsapp}>
                            Upload
                        </Button>
                    </Grid>
                </Grid>
            </MainCard>
            <Grid container>
                <Grid item xs={4}>
                    <TotalIncomeDarkCard />
                </Grid>
            </Grid>
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
            {whatsapp ? (
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={whatsapp.photo} alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {whatsapp.about}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : null}
        </>
    );
};

export default SamplePage;
