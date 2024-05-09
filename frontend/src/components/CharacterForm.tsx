import usePlaceholderTexts from "../hooks/usePlaceholderTexts";
import { useForm } from "react-hook-form";
import { Button, Text, Input } from "../styles/styledComponents";

const CharacterForm = ({
  message,
  messageColor,
  handleCharacterInput,
}: Props) => {
  const { placeholderIndex, placeholderTexts } = usePlaceholderTexts();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    handleCharacterInput(data.name);
  };

  return (
    <div className="mb-3 mt-2 flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Need to enter a name...",
            },
            minLength: {
              value: 3,
              message: "Name must be atleast 3 characters...",
            },
          })}
          type="name"
          autoComplete="off"
          placeholder={placeholderTexts[placeholderIndex]}
          style={{ background: `${messageColor}` }}
        />
        <Button type="submit">Add</Button>
      </form>
      <div className="mt-3 text-center">
        {errors.name && <Text $red>{errors.name.message}</Text>}
        {message && <Text style={{ color: messageColor }}>{message}</Text>}
      </div>
    </div>
  );
};

interface Form {
  name: string;
}

interface Props {
  messageColor: string;
  message: string | null;
  handleCharacterInput: (characterName: string) => void;
}

export default CharacterForm;
