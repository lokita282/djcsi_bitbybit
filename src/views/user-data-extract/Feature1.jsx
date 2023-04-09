import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanIcon from '@mui/icons-material/Lan';
import { TextField, OutlinedInput, InputLabel, FormControl, FormHelperText, Grid, Button, MenuItem, Divider, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SeonService from 'services/SeonService';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardContent } from '@mui/material';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import UserDataCard from '../../ui-component/UserDataCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PersonalityService from 'services/PersonalityService';

import EarningCard from 'ui-component/cards/Skeleton/EarningCard';
import PopularCard from 'ui-component/cards/Skeleton/PopularCard';
import TotalOrderLineChartCard from 'views/dashboard/Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import TotalGrowthBarChart from 'views/dashboard/Default/TotalGrowthBarChart';
import LinkedinCard from '../../ui-component/emailSwiper/LinkedinCard';
import GoogleCard from '../../ui-component/emailSwiper/GoogleCard';
import GravatarCard from '../../ui-component/emailSwiper/GravatarCard';
import SkypeCard from '../../ui-component/emailSwiper/SkypeCard';
import OkCard from '../../ui-component/emailSwiper/OkCard';
import AirbnbCard from '../../ui-component/emailSwiper/SkypeCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';

const CompanyCard = ({ company, isRegistered }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {company}
                </Typography>
                {isRegistered ? (
                    <CheckCircleSharpIcon style={{ color: 'green', fontSize: 40 }} />
                ) : (
                    <CancelSharpIcon style={{ color: 'red', fontSize: 40 }} />
                )}
            </CardContent>
        </Card>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function Feature1() {
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [emailCategoryData, setEmailCategoryData] = React.useState();
    const [phoneCategoryData, setPhoneCategoryData] = React.useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [json, setJson] = useState('');
    const [finalData, setFinalData] = useState([]);
    const [ipdata, setIPdata] = useState();
    const [position, setPosition] = useState([]);
    const [linkedin, setLinkedin] = useState();
    const [google, setGoogle] = useState();
    const [gravatar, setGravatar] = useState();
    const [skype, setSkype] = useState();
    const [ok, setOk] = useState();
    const [airbnb, setAirbnb] = useState();

    const callEmail = async () => {
        setLoading(true);
        await SeonService.seonEmailData(json)
            .then((res) => {
                console.log(res.data.data.account_details);
                setFinalData([res.data.data.account_details]);
                setLinkedin(res.data.data.account_details.linkedin);
                setGoogle(res.data.data.account_details.google);
                setGravatar(res.data.data.account_details.gravatar);
                setSkype(res.data.data.account_details.skype);
                setOk(res.data.data.account_details.ok);
                setAirbnb(res.data.data.account_details.airbnb);
            })
            .then(async () => {
                await SeonService.seonEmailCategoryData(json).then((res) => {
                    // setLoading(true);
                    console.log(res.data.data);
                    setEmailCategoryData(res.data.data);
                    setLoading(false);
                    // setLoad(false)
                });
            })
            .then(async () => {
                await personalityCall();
            });
    };

    const callEmailCategory = async () => {
        await SeonService.seonEmailCategoryData(json).then((res) => {
            // setLoading(true);
            console.log(res.data.data);
            setEmailCategoryData([res.data.data.account_details]);
            // setLoading(false);
            // setLoad(false)
        });
    };

    const [personality, setPersonality] = useState();
    const [mostProbSite, setMostProbSite] = useState();

    let data = JSON.stringify({
        data: emailCategoryData
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://41c3-136-232-1-174.ngrok-free.app/personality/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios
        .request(config)
        .then((response) => {
            console.log(response.data);
            setPersonality(response.data.most_visited);
            setMostProbSite(response.data.next);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(personality);

    const callMobile = async () => {
        setLoading(true);
        await SeonService.seonPhoneData(json)
            .then((res) => {
                // setLoading(true);
                console.log(res.data.data);
                setFinalData([res.data.data.account_details]);
                // setLoading(false);
                // setLoad(false)
            })
            .then(async () => {
                await SeonService.seonPhoneCategoryData(json).then((res) => {
                    // setLoading(true);
                    console.log(res.data.data);
                    setPhoneCategoryData(res.data.data);
                    setLoading(false);
                    // setLoad(false)
                });
            });
    };

    const callIP = async () => {
        setLoading(true);
        await SeonService.seonIPData(json).then((res) => {
            // setLoading(true);
            console.log(res.data.data);
            setIPdata(res.data.data);
            setPosition([res.data.data.latitude, res.data.data.longitude]);
            setLoading(false);
            //setFinalData([res.data.data]);
            // setLoad(false)
        });
    };
    console.log(position);
    const [emailCategories, setEmailCategories] = React.useState('All');
    const [phoneCategories, setPhoneCategories] = React.useState('All');

    const handleChange1 = (event) => {
        setEmailCategories(event.target.value);
        setFinalData(emailCategoryData[event.target.value]);
        console.log(event.target.value);
    };

    const handleChange2 = (event) => {
        setPhoneCategories(event.target.value);
        setFinalData(phoneCategoryData[event.target.value]);
        console.log(event.target.value);
    };

    const [isLoading, setIsLoading] = useState(true);

    const companies = [{ adobe: { registered: true }, airbnb: { registered: false }, amazon: { registered: true } }];

    let emailCount = [
        emailCategoryData?.registeredEmailTech?.length,
        emailCategoryData?.registeredEmailEcomm?.length,
        emailCategoryData?.registeredEmailSocial?.length,
        emailCategoryData?.registeredEmailSearch?.length,
        emailCategoryData?.registeredEmailNews?.length,
        emailCategoryData?.registeredEmailMusic?.length,
        emailCategoryData?.registeredEmailTravel?.length,
        emailCategoryData?.registeredEmailOTT?.length,
        emailCategoryData?.registeredEmailEducation?.length
    ];

    var sum = 0;

    // Calculation the sum using forEach
    emailCount?.forEach((x) => {
        sum += x;
    });
    localStorage.setItem('emailTotal', JSON.stringify(sum));
    localStorage.setItem('emailCount', JSON.stringify(emailCount));

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<EmailIcon />} iconPosition="start" label="Email ID" {...a11yProps(0)} />
                    <Tab icon={<LocalPhoneIcon />} iconPosition="start" label="Mobile Number" {...a11yProps(1)} />
                    <Tab icon={<LanIcon />} iconPosition="start" label="IP Address" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
                            <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={callEmail}>
                                Upload
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
                <MainCard sx={{ marginTop: 2, marginBottom: 2 }}>
                    <Grid direction="row" justifyContent="center" container>
                        <Grid item xs={10} sx={{ paddingTop: 2 }}>
                            <Typography variant="h3">Registered Websites</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={emailCategories}
                                        label="Categories"
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={'All'}>All</MenuItem>
                                        <MenuItem value={'registeredEmailTech'}>Technology</MenuItem>
                                        <MenuItem value={'registeredEmailSocial'}>Social Media</MenuItem>
                                        <MenuItem value={'registeredEmailSearch'}>Search Platforms</MenuItem>
                                        <MenuItem value={'registeredEmailNews'}>News</MenuItem>
                                        <MenuItem value={'registeredEmailMusic'}>Music</MenuItem>
                                        <MenuItem value={'registeredEmailTravel'}>Travel</MenuItem>
                                        <MenuItem value={'registeredEmailOTT'}>OTT Platforms</MenuItem>
                                        <MenuItem value={'registeredEmailEducation'}>Education</MenuItem>
                                        <MenuItem value={'registeredEmailEcomm'}>E-commerce</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </MainCard>
                {loading ? (
                    <>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress color="secondary" />
                            <Typography variant="h3"> Analyzing accounts based on email id...</Typography>
                        </Box>
                    </>
                ) : (
                    <>
                        {finalData ? (
                            <>
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
                                    {personality ? (
                                        <Grid item xs={12}>
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item xs={12} md={8}>
                                                    <TotalGrowthBarChart isLoading={isLoading} />
                                                </Grid>
                                                {/* <div> */}
                                                <Grid item xs={12} md={4}>
                                                    {/* <PopularCard isLoading={isLoading} /> */}
                                                    {personality?.data}
                                                    <Swiper
                                                        slidesPerView={1}
                                                        modules={[Autoplay]}
                                                        autoplay={{ delay: 3500 }}
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
                                                            <OkCard ok={ok} />
                                                        </SwiperSlide>
                                                    </Swiper>

                                                    <Card
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            marginTop: '2rem',
                                                            padding: '1rem',
                                                            maxWidth: 375,
                                                            minHeight: 180
                                                        }}
                                                    >
                                                        {console.log('jfcvfkve', linkedin)}
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                marginBottom: '1rem'
                                                            }}
                                                        >
                                                            <div>
                                                                <Typography
                                                                    variant="h6"
                                                                    component="h2"
                                                                    style={{
                                                                        fontWeight: 'bold',
                                                                        fontSize: '1.5rem',
                                                                        letterSpacing: '0.1rem',
                                                                        paddingBottom: '1rem',
                                                                        paddingTop: '1rem',
                                                                        paddingLeft: '5px'
                                                                    }}
                                                                >
                                                                    Analysis of user activity
                                                                </Typography>
                                                                <Typography variant="body1" color="initial">
                                                                    The user seems to be more active on {personality}. The next possible
                                                                    website the user can create an account on is {mostProbSite}.
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                            {/* </div> */}
                                        </Grid>
                                    ) : null}
                                </Grid>
                            </>
                        ) : null}
                        {emailCategories === 'All' ? (
                            <>
                                <div>
                                    <Grid container sx={{ marginTop: 1 }} spacing={2}>
                                        {finalData?.map((companyObj) =>
                                            Object.entries(companyObj).map(([companyName, companyData]) => (
                                                // <CompanyCard key={companyName} company={companyName} isRegistered={companyData.registered} />
                                                <Grid item md={4} xs={12}>
                                                    <UserDataCard
                                                        key={companyName}
                                                        company={companyName}
                                                        isRegistered={companyData?.registered}
                                                    />
                                                </Grid>
                                            ))
                                        )}
                                    </Grid>
                                </div>
                            </>
                        ) : (
                            <>
                                <Grid container spacing={2}>
                                    {finalData?.map((companyObj) => (
                                        <Grid item xs={4}>
                                            <UserDataCard
                                                key={companyObj.name}
                                                company={companyObj.name}
                                                isRegistered={companyObj?.isRegistered}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )}
                    </>
                )}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MainCard sx={{ marginTop: 2 }} title="Upload the user's mobile number">
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
                            <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={callMobile}>
                                Upload
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
                <MainCard sx={{ marginTop: 2, marginBottom: 2 }}>
                    <Grid direction="row" justifyContent="center" container>
                        <Grid item xs={10}>
                            <Typography variant="h3" sx={{ paddingTop: 2 }}>
                                Registered Websites
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={phoneCategories}
                                        label="Categories "
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value={'All'}>All</MenuItem>
                                        <MenuItem value={'registeredPhoneTech'}>Technology</MenuItem>
                                        <MenuItem value={'registeredPhoneEcomm'}>E-commerce</MenuItem>
                                        <MenuItem value={'registeredPhoneSocial'}>Social Media</MenuItem>
                                        <MenuItem value={'registeredPhoneMessaging'}>Messaging</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </MainCard>
                {loading ? (
                    <>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress color="secondary" />
                            <Typography variant="h3"> Analyzing accounts based on mobile number...</Typography>
                        </Box>
                    </>
                ) : (
                    <>
                        {phoneCategories === 'All' ? (
                            <>
                                <div>
                                    <Grid container spacing={2}>
                                        {finalData?.map((companyObj) =>
                                            Object.entries(companyObj).map(([companyName, companyData]) => (
                                                // <CompanyCard key={companyName} company={companyName} isRegistered={companyData.registered} />
                                                <Grid item xs={4}>
                                                    <UserDataCard
                                                        key={companyName}
                                                        company={companyName}
                                                        isRegistered={companyData?.registered}
                                                    />
                                                </Grid>
                                            ))
                                        )}
                                    </Grid>
                                </div>
                            </>
                        ) : (
                            <>
                                <Grid container spacing={2}>
                                    {finalData?.map((companyObj) => (
                                        <Grid item xs={4}>
                                            <UserDataCard
                                                key={companyObj.name}
                                                company={companyObj.name}
                                                isRegistered={companyObj?.isRegistered}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )}
                    </>
                )}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MainCard sx={{ marginTop: 2 }} title="Upload the user's IP Address">
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
                            <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={callIP}>
                                Upload
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
                {loading ? (
                    <>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress color="secondary" />
                            <Typography variant="h3"> Analyzing accounts based on IP Address...</Typography>
                        </Box>
                    </>
                ) : (
                    <>
                        {ipdata ? (
                            <div>
                                <Card sx={{ display: 'flex' }}>
                                    <div id="map" style={{ height: '400px', width: '900px' }}>
                                        <MapContainer center={position} scrollWheelZoom={false} zoom={13} style={{ height: '100%' }}>
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={position}>
                                                <Popup>
                                                    A pretty CSS3 popup. <br /> Easily customizable.
                                                </Popup>
                                            </Marker>
                                        </MapContainer>
                                    </div>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <CardContent
                                            sx={{ flex: '1 0 auto', backgroundColor: '#f5f5f5', borderRadius: '10px', padding: '2rem' }}
                                        >
                                            <Typography
                                                component="div"
                                                variant="h5"
                                                sx={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#333333' }}
                                            >
                                                ISP Name - {ipdata.isp_name}
                                            </Typography>
                                            <Divider />
                                            <div style={{ height: '20px' }}></div>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                                sx={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#666666' }}
                                            >
                                                <Chip label="State" /> - {ipdata.state_prov}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                                sx={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#666666' }}
                                            >
                                                <Chip label="City" /> - {ipdata.city}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                                sx={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#666666' }}
                                            >
                                                <Chip label="Timezone" /> - {ipdata.timezone_offset}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </div>
                        ) : null}
                    </>
                )}
            </TabPanel>
        </Box>
    );
}
