import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface StatCardProps {
  icon: SvgIconComponent;
  title: string;
  value: number;
  color?: string;
}

const DashboardCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  color = "primary.main" 
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Icon sx={{ fontSize: 48, color, mb: 2 }} />
        <Typography variant="h4" component="div" gutterBottom>
          {value}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;