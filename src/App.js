import './App.css';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Projects from './components/Projects';

const sections = [
    {title:'About', url: '#'},
    {title: 'Resume', url: '#'},
    {title: 'Projects', url: '#'},
    {title: 'LinkedIn', url: '#'},
    {title: 'GitHub', url: '#'},
];

function App() {
  return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header title={"Greg Stula"} sections={sections} />
        </Container>
        <Projects/>
      </>
  );
}

export default App;
