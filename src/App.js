import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import AppTheme from './shared-theme/AppTheme'
import AboutSubject from './components/AboutSubject'
import { Accordion } from '@mui/material'
import AccordionComponent from './components/AccordionComponent'

const temas = [
  {
    titulo: 'Mecanismos de seguridad en formularios',
    descripcion:
      'Prácticas y técnicas para proteger formularios web contra ataques.',
    paraQueSeUsa:
      'Proteger datos del usuario y asegurar la integridad del sistema.',
    cuandoSeUsa:
      'Siempre que se recolectan datos sensibles o se interactúa con bases de datos.',
    ejemploFoto: ['ejemplo-seguridad-formulario.jpg'],
    fuentes: [
      {
        url: 'https://wiki.mozilla.org/Security/Server_Side_TLS',
        apa: 'Security/Server Side TLS - MozillaWiki. (2023). Mozilla.org. https://wiki.mozilla.org/Security/Server_Side_TLS'
      }
    ]
  },
  {
    titulo: 'Introducción a AJAX',
    descripcion:
      'Técnica que permite actualizar partes de una página sin recargarla.',
    paraQueSeUsa:
      'Mejorar la experiencia del usuario con interacciones rápidas y dinámicas.',
    cuandoSeUsa:
      'En aplicaciones que requieren datos en tiempo real o actualizaciones parciales.',
    ejemploFoto: ['ejemplo-ajax.jpg', 'ajax-ejemplo2.jpg'],
    fuentes: [
      {
        url: 'https://developer.mozilla.org/es/docs/Web/Guide/AJAX/Getting_Started',
        apa: 'AJAX - Introducción a AJAX | MDN. (2024, July 28). MDN Web Docs. https://developer.mozilla.org/es/docs/Web/Guide/AJAX/Getting_Started'
      }
    ]
  },
  {
    titulo: 'JQuery',
    descripcion:
      'Biblioteca de JavaScript que simplifica la manipulación del DOM, eventos y AJAX.',
    paraQueSeUsa:
      'Facilitar tareas comunes de JavaScript y garantizar compatibilidad entre navegadores.',
    cuandoSeUsa:
      'En proyectos que necesitan simplicidad y rapidez en el desarrollo.',
    ejemploFoto: ['ejemplo-jquery.jpg'],
    fuentes: [
      {
        url: 'https://jquery.com/',
        apa: 'jQuery. (n.d.). jQuery. https://jquery.com/'
      }
    ]
  },
  {
    titulo: 'MooTools',
    descripcion:
      'Framework orientado a objetos para crear aplicaciones robustas y ligeras.',
    paraQueSeUsa:
      'Extender funcionalidades del navegador y manejar efectos visuales avanzados.',
    cuandoSeUsa: 'En proyectos que requieren modularidad y personalización.',
    ejemploFoto: ['ejemplo-mootools.jpg'],
    fuentes: [
      {
        url: 'https://mootools.net/?ref=dev',
        apa: 'MooTools. (2024). Mootools.net. https://mootools.net/?ref=dev'
      }
    ]
  },
  {
    titulo: 'Prototype',
    descripcion:
      'Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. ',
    paraQueSeUsa:
      'Agregar soporte avanzado y mejorar la manipulación de datos.',
    cuandoSeUsa: 'En proyectos tradicionales o con navegadores antiguos.',
    ejemploFoto: ['ejemplo-prototype.jpg'],
    fuentes: [
      {
        url: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes',
        apa: 'Prototipos de objetos - Aprende desarrollo web | MDN. (2024, July 28). MDN Web Docs. https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes'
      }
    ]
  }
]

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth='lg'
        component='main'
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <AboutMe />
        <AboutSubject />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          {temas.map((text, index) => (
            <AccordionComponent
              key={index}
              props={text}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </AppTheme>
  )
}
