import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AboutSubject() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid white', paddingBottom: '10px' }}>
    <Typography variant='h2'>Sobre la materia</Typography>
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
          <Typography variant='h3'>Edder Iván Pimentel Félix</Typography>
        </div>
      </div>
      <div>
        <Typography>Programacion Web</Typography>
        <Typography>Unidad IV. Programación del lado del servidor</Typography>
        <Typography>Tarea I. Conceptos y ejemplos básicos en HTML.</Typography>
      </div>
    </Box>
  )
}
