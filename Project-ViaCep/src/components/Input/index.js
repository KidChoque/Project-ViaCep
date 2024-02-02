import { InputText } from "./style";

export function Input ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLenght}){
    return(

        <InputText
          placeholder={placeholder}
          editable={editable}
          keyboardType={keyType}
          maxLenght={maxLenght}
          value={fieldValue}
          onChangeText={onChangeText}
        />

    )
}