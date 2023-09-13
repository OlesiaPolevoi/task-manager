import { useState } from "react";
import {
  FormControl,
  FormBlock,
  FormLabel,
  FormWrapper,
  FormField,
} from "./Form.styled";
import plusIcon from "../../assets/images/plus.png";

export const Form = (props: { createNewTask: Function }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      props.createNewTask(text);
      setText("");
    }
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={handleSubmit}>
        <FormLabel>
          <FormField
            value={text}
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
