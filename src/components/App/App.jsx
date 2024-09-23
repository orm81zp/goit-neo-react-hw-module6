import { nanoid } from "nanoid";
import { useEffect, useMemo, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { isApproved } from "../../utils/confirm";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Container from "../Container/Container";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { CONTACTS_STORAGE_KEY, DEFAULT_STATE } from "./const";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY)) || DEFAULT_STATE
    );
  });
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const contactsExist = contacts.length > 0;

  useEffect(() => {
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ),
    [search, contacts]
  );

  const onSubmit = (contact, actions) => {
    const exists = contacts.find(({ name }) => name === contact.name);

    if (exists) {
      setError("Contact already exists.");
      return;
    }

    setContacts((prevContacts) => {
      const newContact = {
        ...contact,
        id: nanoid(),
      };
      return [...prevContacts, newContact];
    });
    actions.resetForm();
    setError("");
  };

  const onDelete = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(({ id }) => id !== contactId);
    });
  };

  const handleReset = (event) => {
    event.preventDefault();

    if (contactsExist && isApproved("Do you want to reset all contacts?")) {
      localStorage.removeItem(CONTACTS_STORAGE_KEY);
      setContacts(DEFAULT_STATE);
    }
  };

  return (
    <Container>
      <div className={css.appWrapper}>
        <h1>
          <a href="#" onClick={handleReset}>
            <FaTrash />
          </a>{" "}
          Phonebook
        </h1>
        <ContactForm onSubmit={onSubmit} error={error} />
        {contactsExist && <SearchBox search={search} onChange={setSearch} />}
        <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </div>
    </Container>
  );
};

export default App;
