import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Grid,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import { 
  People, 
  AutoAwesome,
  Analytics,
  Settings
} from '@mui/icons-material';

import Link from 'next/link';

export default function Home() {

  return (
<Box sx={{ 
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
  minHeight: '100vh',
  color: 'white',
  display: 'flex',
  flexDirection: 'column'
}}>
  <Box sx={{ 
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    py: 8
  }}>
    
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            خوش آمدید به
            <Box 
              component="span" 
              sx={{ 
                color: '#ffd700',
                display: 'block',
              }}
            >
              پنل مدیریت کلمه
            </Box>
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              opacity: 0.9,
              maxWidth: '500px',
              mx: 'auto'
            }}
          >
            مدیریت هوشمند کاربران سیستم هوش مصنوعی فارسی
            <br />
            دسترسی آسان به تمامی امکانات مدیریتی
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 6
          }}>
            <Link href="/users" passHref>
              <Button
                variant="contained"
                size="large"
                startIcon={<People />}
                sx={{
                  bgcolor: '#ffd700',
                  color: '#2d3748',
                  '&:hover': {
                    bgcolor: '#fbc02d',
                    transform: 'translateY(-2px)',
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  gap:1
                }}
              >
                مدیریت کاربران
              </Button>
            </Link>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Analytics />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#ffd700',
                  color: '#ffd700',
                  transform: 'translateY(-2px)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                gap:1

              }}
            >
              آمار و گزارشات
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>

    {/* Quick Actions - Centered */}
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography 
        variant="h3" 
        textAlign="center" 
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 6 }}
      >
        دسترسی سریع
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid>
          <Card 
            sx={{ 
              p: 3,
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '350px',
              '&:hover': {
                transform: 'translateY(-5px)',
                background: 'rgba(255,255,255,0.15)',
              }
            }}
          >
            <CardContent>
              <People sx={{ fontSize: 50, color: '#ffd700', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                مدیریت کاربران
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                مشاهده، ویرایش و مدیریت کاربران سیستم
              </Typography>
              <Link href="/users" passHref>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#ffd700',
                    color: '#ffd700',
                    '&:hover': {
                      bgcolor: 'rgba(255,215,0,0.1)',
                    }
                  }}
                >
                  ورود به بخش
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid >
          <Card 
            sx={{ 
              p: 3,
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '350px',
              '&:hover': {
                transform: 'translateY(-5px)',
                background: 'rgba(255,255,255,0.15)',
              }
            }}
          >
            <CardContent>
              <Analytics sx={{ fontSize: 50, color: '#ffd700', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                آمار و گزارشات
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                گزارش‌های تحلیلی از عملکرد سیستم
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#ffd700',
                  color: '#ffd700',
                  '&:hover': {
                    bgcolor: 'rgba(255,215,0,0.1)',
                  }
                }}
              >
                مشاهده گزارشات
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid>
          <Card 
            sx={{ 
              p: 3,
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '350px',
              '&:hover': {
                transform: 'translateY(-5px)',
                background: 'rgba(255,255,255,0.15)',
              }
            }}
          >
            <CardContent>
              <Settings sx={{ fontSize: 50, color: '#ffd700', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                تنظیمات سیستم
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                مدیریت تنظیمات و پیکربندی سیستم
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#ffd700',
                  color: '#ffd700',
                  '&:hover': {
                    bgcolor: 'rgba(255,215,0,0.1)',
                  }
                }}
              >
                تنظیمات
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
</Box>
  );
}