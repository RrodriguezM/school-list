import './App.css';
import { NavbarRr } from "../components/NavbarRr"
import { SelectorGroupRr } from "../components/SelectorGroupRr"
import 'tachyons'

function App() {
  return (
    <div className="ml3">
      <NavbarRr />
      <SelectorGroupRr />
      <p>Pdf View</p>
      <p>Foot Notes</p>
    </div>
  );
}

export default App;
