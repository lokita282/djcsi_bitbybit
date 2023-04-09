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
                                            'data:image/jpeg;base64,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'
                                        }
                                        sx={{ width: 40, height: 40 }}
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
