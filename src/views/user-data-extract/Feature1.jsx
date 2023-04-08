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
import { TextField, OutlinedInput, InputLabel, FormControl, FormHelperText, Grid, Button } from '@mui/material';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import SeonService from 'services/SeonService';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardContent } from '@mui/material';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

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
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [json, setJson] = useState('');
    const [finalData, setFinalData] = useState([]);
    const callEmail = async () => {
        await SeonService.seonEmailData(json).then((res) => {
            console.log(res.data.data.account_details);
            setFinalData([res.data.data.account_details]);
            // setLoad(false)
        });
    };

    const callMobile = async () => {
        await SeonService.seonPhoneData(json).then((res) => {
            console.log(res.data.data);
            setFinalData([res.data.data.account_details]);
            // setLoad(false)
        });
    };

    const callIP = async () => {
        await SeonService.seonIPData(json).then((res) => {
            console.log(res.data.data);
            //setFinalData([res.data.data]);
            // setLoad(false)
        });
    };

    const companies = [{ adobe: { registered: true }, airbnb: { registered: false }, amazon: { registered: true } }];
    console.log(finalData);

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
                                {/* {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {errors.email}
                        </FormHelperText>
                    )} */}
                            </FormControl>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" sx={{ paddingBottom: 1, paddingTop: 1 }} onClick={callEmail}>
                                Upload
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
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
            </TabPanel>
            <div>
                {finalData.map((companyObj) =>
                    Object.entries(companyObj).map(([companyName, companyData]) => (
                        <CompanyCard key={companyName} company={companyName} isRegistered={companyData.registered} />
                    ))
                )}
            </div>

            {/*             {finalData.account_details.map((data) => {})}
            <TotalIncomeDarkCard /> */}
        </Box>
    );
}
