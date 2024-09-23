import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Container from "../Container/Container";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <Container>
      <div className={css.appWrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
