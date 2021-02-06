import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

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
      </>
  );
}

export default App;
