import TemplateGOF from './components/UI_template/TemplateGOF';
import Section from './components/Section';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <TemplateGOF>
          <Section />
        </TemplateGOF>
      </div>
  );
}

export default App;
