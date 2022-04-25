import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MyButton, MyInput } from "../elements/ui";

import { schemaContact } from "../../helpers/schemaContact";

import style from "../../styles/subscribe.module.scss";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaContact),
  });

  const onSubmitSubscribe = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmitSubscribe)}>
      <div className={style.formContainer}>
        <MyInput
          className={style.input}
          type="email"
          name="email"
          placeholder="Your email"
          register={register("email")}
        />
        <MyButton className={style.button}>Subscribe</MyButton>
      </div>
      {errors?.email && <div className="error">{errors?.email?.message}</div>}
    </form>
  );
};

export default SubscribeForm;
