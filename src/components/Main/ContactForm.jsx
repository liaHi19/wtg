import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MyInput, MyButton, MyTextarea } from "../elements/ui";

import { schemaContact } from "../../helpers/schemaContact";

import style from "../../styles/contact-form.module.scss";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaContact),
  });

  const onSubmitContact = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className={style.contactForm}>
      <h3 className={style.title}>Contact us</h3>
      <form className={style.form} onSubmit={handleSubmit(onSubmitContact)}>
        <div className={style.space}>
          <MyInput
            className={style.input}
            placeholder="Name"
            type="text"
            name="name"
            register={register("name")}
            error={errors?.name?.message}
          />
        </div>
        <div className={style.space}>
          <MyInput
            className={style.input}
            placeholder="Phone"
            type="tel"
            name="tel"
            register={register("tel")}
            error={errors?.tel?.message}
          />
        </div>
        <div className={style.space}>
          <MyInput
            className={style.input}
            placeholder="E-mail"
            type="email"
            name="email"
            register={register("email")}
            error={errors?.email?.message}
          />
        </div>
        <div className={style.spacing}>
          <MyTextarea
            className={style.textarea}
            placeholder="Message"
            name="text"
            register={register("text")}
            error={errors?.text?.message}
          />
        </div>
        <div className={style.center}>
          <MyButton className={style.button} type="submit">
            Send
          </MyButton>
        </div>
      </form>
      <Link className={style.privacy} to="/">
        Privacy policy
      </Link>
    </div>
  );
};

export default ContactForm;
