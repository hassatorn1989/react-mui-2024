import React from 'react'

import { Breadcrumbs, Container, Grid, Link, Paper, Typography } from '@mui/material';
function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 2,  }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              asdasdasd
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home