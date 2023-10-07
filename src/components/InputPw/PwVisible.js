//styles
import { PwVisi } from './style';

const PwVisible = ({value, onChange}) => {

  return(
    <>
      <PwVisi 
        type="text"
        placeholder='아이디'
        value={value}
        onChange={onChange}/>
    </>
  );
}

export default PwVisible;