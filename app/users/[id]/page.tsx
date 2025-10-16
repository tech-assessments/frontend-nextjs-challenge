'use client';

import { useUser } from '../../../hooks/useUsers';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import { 
  ArrowBack, 
  Person, 
  Email, 
  Phone, 
  Business,
  LocationOn,
  Language,
} from '@mui/icons-material';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function UserDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  
  const { data: user, isLoading, error } = useUser(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          کاربر یافت نشد
        </Alert>
        <Link href="/users" passHref>
          <Button startIcon={<ArrowBack />}>
            بازگشت به لیست کاربران
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1">
          جزئیات کاربر
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href="/users" passHref>
            <Button variant="outlined" startIcon={<ArrowBack />} sx={{gap:1}}>
              لیست کاربران
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="contained">
              صفحه اصلی
            </Button>
          </Link>
        </Box>
      </Box>

      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              @{user.username}
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItem>
              <ListItemIcon>
                <Person sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="نام کامل" 
                secondary={user.name} 
              />
            </ListItem>
            
            <Divider variant="inset" component="li" />
            
            <ListItem>
              <ListItemIcon>
                <Email sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="آدرس ایمیل" 
                secondary={user.email} 
              />
            </ListItem>
            
            <Divider variant="inset" component="li" />
            
            <ListItem>
              <ListItemIcon>
                <Phone sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="شماره تلفن" 
                secondary={user.phone} 
              />
            </ListItem>

            <Divider variant="inset" component="li" />
            
            <ListItem>
              <ListItemIcon>
                <Language sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="وبسایت" 
                secondary={user.website} 
              />
            </ListItem>
            
            <Divider variant="inset" component="li" />
            
            <ListItem>
              <ListItemIcon>
                <Business sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="شرکت" 
                secondary={user.company.name} 
              />
            </ListItem>
            
            <Divider variant="inset" component="li" />
            
            <ListItem>
              <ListItemIcon>
                <LocationOn sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="آدرس" 
                secondary={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`} 
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}