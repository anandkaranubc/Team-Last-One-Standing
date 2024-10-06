import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  barcode: {
    height: 140,
  },
  businessName: {
    fontWeight: 600,
    marginBottom: "8px",
  },
  icon: {
    color: theme.palette.primary.main,
  },
  address: {
    marginTop: "10px",
    color: theme.palette.grey[600],
  },
}));

export default useStyles;
