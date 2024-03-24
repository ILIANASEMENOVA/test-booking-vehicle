import {
  Form,
  FormDescription,
  FormTitle,
  FormWrapper,
  InputBookingDate,
  InputEmail,
  InputName,
  SubmitBtn,
  TextareaComment,
} from "./BookForm.styled";

const getCurrentDate = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, "0");
  let day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const BookForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Book your campervan now</FormTitle>
      <FormDescription>
        Stay connected! We are always ready to help you.
      </FormDescription>
      <Form>
        <InputName type="text" placeholder="Name" name="name" required />
        <InputEmail type="email" placeholder="Email" name="email" required />
        <InputBookingDate
          type="date"
          placeholder="Booking date"
          name="booking_date"
          min={getCurrentDate()}
          required
        />
        <TextareaComment name="comment" placeholder="Comment"></TextareaComment>
        {/* <FieldWrapper></FieldWrapper> */}
        <SubmitBtn type="submit">Send</SubmitBtn>
      </Form>
    </FormWrapper>
  );
};
