import { ThemeProvider, createTheme } from '@mui/material/styles';
// Create a custom theme
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor:"#f48225 ",
            textTransform: "capitalize" ,
            color:"white" ,
            fontWeight:"600px" ,
            fontSize:"22px" ,
            padding: "5px 10px" ,
            width:"120px" ,
            "&:hover":{
              backgroundColor:"#f48225" 
            },
            // Add media query for responsive styles
            '@media (max-width: 300px)': {
              fontSize: '16px',
              width: '80px',
              padding: "2px 5px" 
            },
          },
        },
      },
    },
});

export default theme ;