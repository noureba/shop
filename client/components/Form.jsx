import React from "react";
import { useForm } from "react-hook-form";
import {Typography} from '@mui/material'

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
      <input
        placeholder="Full Name"
        {...register("FullName", { required: true })}
      />
      {errors.FullName && <Typography color="error">Full Name required</Typography>}
      <input placeholder="Email" {...register("Email", { required: true })} />
      {errors.Email && <Typography color="error">Email is required</Typography>}
      <input
        placeholder="Subject"
        {...register("Subject", { required: true })}
      />
      {errors.Subject && <Typography color="error">subject is required</Typography>}
      <textarea
        placeholder="Type here..."
        {...register("Message")}
      ></textarea>
      <input type="submit" />
    </form>
  );
}

export default Form;
