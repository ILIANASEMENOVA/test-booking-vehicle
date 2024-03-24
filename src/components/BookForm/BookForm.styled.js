import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 448px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const FormTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
`;

export const FormDescription = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const InputName = styled.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const InputEmail = styled.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const InputBookingDate = styled.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const TextareaComment = styled.textarea`
  border-radius: 10px;
  padding: 18px;
  height: 114px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;
  background: #f7f7f7;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  align-self: start;
  padding: 16px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: 0px;
  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`;
