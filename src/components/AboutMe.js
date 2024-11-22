import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Avatar, Button } from '@mui/material'

export default function AboutMe() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', borderBottom: '1px solid white', paddingBottom: '10px' }}>
      <Typography variant='h1'>Sobre mi</Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center'
          }}
        >
          <Avatar
            alt='Juan Carlos Paredes Gotopo'
            src='profile_pic.jpg'
            sx={{ width: 50, height: 50 }}
          />
          <Typography variant='h2'>Juan Carlos Paredes Gotopo</Typography>
        </div>
        <Button
          variant='outlined'
          sx={{ width: '15%' }}
          onClick={() => window.location.href = '/cv.html'}
        >
          CV
        </Button>
      </div>
      <div>
        <Typography>Numero de control: 21490565</Typography>
        <Typography>Email: juancparedesg@gmail.com</Typography>
      </div>
    </Box>
  )
}
