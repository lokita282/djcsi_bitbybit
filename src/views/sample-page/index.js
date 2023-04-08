/* eslint-disable prettier/prettier */
// material-ui
import { useState, useEffect } from 'react';
import { Typography, TextField, OutlinedInput, InputLabel, FormControl, FormHelperText, Grid, Button, } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { v4 as uuidv4, v4 } from "uuid";
import { storage } from "../../firebase/config";
import SeonService from 'services/SeonService';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [load, setLoad] = useState(false);
    const [imageUrls, setImageUrls] = useState([]);
    const [json, setJson] = useState("")
    const [imageUpload, setImageUpload] = useState();
    const [userData, setUserData] = useState()
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
    }
    console.log(json)
    const call = async () => {
        await SeonService.seonEmailData(json)
            .then((res) => {
                console.log(res.data.data)
                setUserData(res.data.data)
                // setLoad(false)
            })
    }
    console.log(json);
    const theme = useTheme()
    return (
        <>
            <MainCard title="Samle Card">
                <Typography variant="body2">
                    Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                    ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                    reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                    qui officiate descent molls anim id est labours.
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
                        <Button variant='outlined' sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={call} >Upload</Button>
                    </Grid>
                </Grid>
            </MainCard>
            <Grid container>

                <Grid item xs={4}>
                    <TotalIncomeDarkCard />
                </Grid>

            </Grid>

        </>
    )
};

export default SamplePage;
