import { styled } from '@mui/material'

const StyledComponent = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const HomePage = () => {
  return <div>This is the H page, layout is soposed to be here</div>;
};

export default HomePage;
