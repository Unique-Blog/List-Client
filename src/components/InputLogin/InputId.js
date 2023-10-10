//styles
import { InputIdContainer } from './style';

const InputId = ({value, onChange}) => {

  return(
    <>
      <InputIdContainer 
        type="text"
        placeholder='아이디'
        value={value}
        onChange={onChange}/>
    </>
  );
}

export default InputId;