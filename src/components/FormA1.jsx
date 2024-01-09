'use client';
import { useForm } from 'react-hook-form';
import './style.css';

export default function FormA1() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Form</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        
          <label>
            <p>First name</p>
            <input
              {...register('firstName', {
                required: 'First name is required',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Only letters are allowed',
                },
              })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
          </label>

          <label>
            <p>Last name</p>
            <input
              {...register('lastName', {
                required: 'Last name is required',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Only letters are allowed',
                },
              })}
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
          </label>

          <label>
            <p>Email (xxx@xxx.xx)</p>
            <input
              {...register('mail', { required: 'Email Address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:
                  'Email not valid',
              }, })}
              aria-invalid={errors.mail ? 'true' : 'false'}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
          </label>

          <label>
            <p>Phone (+xxxxxxxxxxx)</p>
            <input
              {...register('phone', { required: 'Phone is required',
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                message:
                  'Phone not valid',
              }, })}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <p role="alert">{errors.phone.message}</p>}
          </label>
  

        <input type="submit" />
      </form>
    </div>
  );
}
