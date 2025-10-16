import { 
  Container, 
  Typography, 
  Box
} from '@mui/material';
import { 
  AutoAwesome,
} from '@mui/icons-material';

export default function Header() {
  return (

  <Container maxWidth="lg" sx={{ 
    py: 4, 
    color: 'black',
    borderBottom: '1px solid #e0e0e0', // Fixed border
  }}
>
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AutoAwesome sx={{ fontSize: 40, color: '#667eea' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          کلمه
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ opacity: 0.9 }}>
        پنل مدیریت
      </Typography>
    </Box>
</Container>
  );
}