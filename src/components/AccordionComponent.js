import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material'
import React from 'react'

export default function AccordionComponent({ props }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography variant='h2'>{props.titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Typography variant='h4'>{props.descripcion}</Typography>
          <Accordion>
            <AccordionSummary>
              <Typography variant='h5'>Cuando se usa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h6'>{props.cuandoSeUsa}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant='h5'>Para qué se usa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h6'>{props.paraQueSeUsa}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant='h5'>Ejemplo</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {props.ejemploFoto.map((foto, index) => (
                <img
                  key={index}
                  style={{ width: '700px', height: 'auto' }}
                  src={`/${foto}`}
                  alt={foto}
                />
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant='h6'>Fuentes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense={true}>
                {props.fuentes.map((fuente, index) => (
                  <ListItem key={index}>
                    <ListItemText>
                      <a
                        href={fuente.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {fuente.apa}
                      </a>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
