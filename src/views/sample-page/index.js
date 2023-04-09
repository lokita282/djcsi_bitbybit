/* eslint-disable prettier/prettier */
// material-ui
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

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
    CardActionArea,
    Divider
} from '@mui/material';

import { blue } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import { gridSpacing } from 'store/constant';
// material-ui

// project imports
import EarningCard from 'views/dashboard/Default/EarningCard';
import PopularCard from 'views/dashboard/Default/PopularCard';
import TotalOrderLineChartCard from 'views/dashboard/Default/TotalOrderLineChartCard';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import TotalGrowthBarChart from 'views/dashboard/Default/TotalGrowthBarChart';
import { ref, uploadBytes, getDownloadURL, listAll, list } from 'firebase/storage';
import { v4 as uuidv4, v4 } from 'uuid';
import { storage } from '../../firebase/config';
import SeonService from 'services/SeonService';
import LinkedinCard from '../../ui-component/emailSwiper/LinkedinCard';
import GoogleCard from '../../ui-component/emailSwiper/GoogleCard';
import GravatarCard from '../../ui-component/emailSwiper/GravatarCard';
import SkypeCard from '../../ui-component/emailSwiper/SkypeCard';
import OkCard from '../../ui-component/emailSwiper/OkCard';
import AirbnbCard from '../../ui-component/emailSwiper/SkypeCard';
import SwipingCards from '../../ui-component/emailSwiper/SwipingCards';

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
    const [google, setGoogle] = useState();
    const [gravatar, setGravatar] = useState();
    const [skype, setSkype] = useState();
    const [ok, setOk] = useState();
    const [airbnb, setAirbnb] = useState();
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
            setBreach(res.data.data.breach_details);
            setLinkedin(res.data.data.account_details.linkedin);
            setGoogle(res.data.data.account_details.google);
            setGravatar(res.data.data.account_details.gravatar);
            setSkype(res.data.data.account_details.skype);
            setOk(res.data.data.account_details.ok);
            setAirbnb(res.data.data.account_details.airbnb);
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

    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    console.log(breach);

    // const getWhatsapp = async () => {
    //     let res = await fetch(
    //         'https://api.apify.com/v2/acts/inutil_labs~wscrp-free/runs?token=apify_api_d7Q3arjXU5CfOpR99cpeOhzUn8boR04B9RGP',
    //         {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ numbers: [json] }),
    //             mode: 'cors'
    //         }
    //     );
    //     let data = await res.json();
    //     console.log([data]);
    // };

    // console.log(finalData);
    // console.log(whatsapp);
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
            <MainCard sx={{ marginTop: 2 }} title="Upload the user's email ID">
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
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={call}>
                            Upload
                        </Button>
                    </Grid>
                </Grid>
            </MainCard>
            {breach ? (
                <div>
                    <MainCard title="Security Breaches">
                        <Typography variant="h3">Number of breaches: {breach.number_of_breaches}</Typography>
                        <Typography variant="body2">
                            These security breaches can prove to be crucial to gaining more information about an individual, as the
                            purported breach usually indicates that some private or sensitive data of the person of interest has been made
                            public.This can help widen the scenarios surrounding the said individual.
                        </Typography>
                    </MainCard>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '20vh',
                            background: 'linear-gradient(to bottom right, #f2f2f2, #d9d9d9)'
                        }}
                    >
                        {breach.breaches.map((item) => (
                            <Card sx={{ minWidth: 275, margin: '0.5rem', background: 'linear-gradient(45deg, #e7f0fd, #c6d9f1)' }}>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Divider />
                                    <Typography color="textSecondary">{item.domain}</Typography>
                                    <Typography variant="body2">{item.date}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : null}
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            {/* <EarningCard isLoading={isLoading} /> */}
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {/* <PopularCard isLoading={isLoading} /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* {linkedin ? (
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
            ) : null} */}
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
            {/* <LinkedinCard linkedin={linkedin}/>
            <GoogleCard google={google}/>
            <GravatarCard gravatar={gravatar}/>
            <SkypeCard skype={skype}/>
            <OkCard ok={ok}/>
            <AirbnbCard airbnb={airbnb}/> */}
            {console.log('hiiiiiiiiiiiiiiiiiii')}
            {/* <SwipingCards /> */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    650: {
                        slidesPerView: 1
                    },
                    850: {
                        slidesPerView: 2
                    },
                    950: {
                        slidesPerView: 3
                    }
                }}
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                spaceBetween={10}
            >
                <SwiperSlide>
                    <LinkedinCard linkedin={linkedin} />
                </SwiperSlide>
                <SwiperSlide>
                    <GoogleCard google={google} />
                </SwiperSlide>
                <SwiperSlide>
                    <GravatarCard gravatar={gravatar} />
                </SwiperSlide>
                <SwiperSlide>
                    <SkypeCard skype={skype} />
                </SwiperSlide>
                <SwiperSlide>
                    <OkCard ok={ok}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SamplePage;
