import {FormInputLabel,Input,Group} from "./form-input.styles";

const FormInput = (props)=>{
    const {label,...otherProps}=props;

    return (
        <Group>
            <Input {...otherProps}/>     
            { label &&
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            }
            {/* { label &&
                <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
            } */}
        </Group> 
    );
}

export default FormInput;