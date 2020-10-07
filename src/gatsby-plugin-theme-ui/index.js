export default {
  colors: {
    text: '#222',
    background: '#eee',
    primary: '#368',
    modes: {
      dark: {
        text: '#fff',
        background: '#000'
      }
    }
  },
  fonts: {
    body: 'Public Sans',
    heading: 'Public Sans',
    footer: 'Comic Neue'
  },
  fontWeights: {
    body: 400,
    heading: 100,
    bold: 900
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  heading: {
    fontFamily: 'Muli',
    color: 'primary',
    py: 30,
    my: 30
  },
  text: {
    default: {
      color: 'text',
      mb: 5
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  }
}
