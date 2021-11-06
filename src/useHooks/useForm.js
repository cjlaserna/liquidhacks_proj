import { useState } from "react";

export const useForm = (initialState, submit = () => {}) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    e.persist();
    setForm((val) => ({ ...val, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  const resetChanges = () => setForm(initialState);
  return {
    form,
    handleChange,
    onSubmit,
    resetChanges,
  };
};
