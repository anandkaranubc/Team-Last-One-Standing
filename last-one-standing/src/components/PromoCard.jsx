import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

function PromoCard({ promo }) {
  const { businessName, distance, address, businessType, barcode } = promo;

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={barcode}
        alt={`${businessName} Promo`}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          {businessName}
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <RestaurantMenuIcon sx={{ color: "primary.main" }} />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              {businessType}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <LocationOnIcon sx={{ color: "primary.main" }} />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              {distance} km away
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: "10px" }}>
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PromoCard;
