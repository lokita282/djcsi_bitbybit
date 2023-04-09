import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
const CardWrapper = styled(MainCard)(({ theme, isRegistered }) => ({
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.grey[700],
    overflow: 'hidden',
    position: 'relative',
    // height: 50,
    marginTop: 6,
    // marginLeft: 8,
    // marginRight: 8,
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${isRegistered ? 'green' : 'red'} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${isRegistered ? 'green' : 'red'} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalIncomeDarkCard = ({ company, isLoading, isRegistered }) => {
    const theme = useTheme();

    const icons = {
        apple: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg',
        ebay: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ebay.svg',
        facebook: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg',
        flickr: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/flickr.svg',
        foursquare: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/foursquare.svg',
        github: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg',
        google: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg',
        gravatar: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gravatar.svg',
        instagram: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg',
        linkedin: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg',
        myspace: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/myspace.svg',
        amazon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg',
        airbnb: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/airbnb.svg',
        yahoo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/yahoo.svg',
        discord: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/discord.svg',
        twitter: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg',
        skype: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/skype.svg',
        spotify: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/spotify.svg',
        microsoft: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg'
    };
    const iconsArr = Object.keys(icons);

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false} isRegistered={isRegistered}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={
                                            iconsArr.includes(company)
                                                ? icons[company]
                                                : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
                                        }
                                        sx={{ width: 35, height: 35, p: 1, bgcolor: 'white' }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45
                                    }}
                                    primary={
                                        <Typography variant="h3" sx={{ color: 'black' }}>
                                            {company?.charAt(0).toUpperCase() + company?.slice(1)}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="subtitle2" sx={{ color: 'grey[500]', mt: 0.25 }}>
                                            {isRegistered ? 'yes' : 'no'}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TotalIncomeDarkCard.propTypes = {
    isLoading: PropTypes.bool,
    isRegistered: PropTypes.bool,
    company: PropTypes.string
};

export default TotalIncomeDarkCard;
